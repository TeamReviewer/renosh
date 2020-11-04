import React, { Component } from "react";
import { Swipe } from "react-swipe-component";
import Panel from '../PanelPage/Panel';
import { Link } from 'react-router-dom';
import axios from "axios";
import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  // EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  // ReactReader, // A simple epub-reader with left/right button and chapter navigation
  // ReactReaderStyle // Styles for the epub-reader it you need to customize it
} from "react-reader";
// import LinkButton from '../TagComponents/LinkButton';
import "./epubViewer.less";
import { Layout, Button } from 'antd';
import { HomeOutlined, EditOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
// const { SubMenu } = Menu;

class EpubViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touchDevice: this.props.touchDevice,
      fullscreen: false,
      location: 2,
      localFile: null,
      localName: null,
      largeText: false,
      isPanelOpen: false,
      high_id: null,
      high_text: null,
      userid: this.props.userid,
      username: this.props.username,
      lastRead: this.props.selected_lastRead,
      userbooklistId: this.props.userbooklistId,
      dragged_anno_id: 0,
    };
    this.rendition = null;
  }
  // getAnnoData = async () => {
  //     let book_id = this.props.id;
  //     const annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/highlights/book/" + book_id+ "/public");
  //     return annos.data;
  // }

  getRendition = rendition => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state;
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? "140%" : "100%");

    // 항상 처음 페이지가 펼쳐질 경우 public의 annoList들이 보일 수 있도록 합니다.
    for (let i = 0; i < this.props.annoList.length; i++) {
      let anno = this.props.annoList[i];
      let cfiRange = anno.location;
      if (this.state.userid !== anno.userid && this.rendition.epubcfi.isCfiString(cfiRange)) {
        this.rendition.annotations.add("highlight", cfiRange, { "id": anno.id }, (e) => {
          this.setState({
            dragged_anno_id: e.target.parentElement.dataset.id
          }, () => {
            if (!this.state.isPanelOpen)
              this.handlePanelOpen();
          })
        }, 'test', ({ "fill": "#98a7c1", "fill-opacity": "1"}))
      }
    }
    for (let i = 0; i < this.props.annoList.length; i++) {
      let anno = this.props.annoList[i];
      let cfiRange = anno.location;
      if (this.state.userid === anno.userid && this.rendition.epubcfi.isCfiString(cfiRange)) {//my annotations => color yellow
        this.rendition.annotations.add("highlight", cfiRange, { "id": anno.id }, (e) => {
          this.setState({
            dragged_anno_id: e.target.parentElement.dataset.id
          }, () => {
            if (!this.state.isPanelOpen)
              this.handlePanelOpen();
          })
        }, 'test', ({ "fill": "yellow", "fill-opacity": "1" }))
      }
    }

    // 새로 highlight를 만들 때 이용하는 메서드 입니다.
    this.rendition.on("selected", function (cfiRange, contents) {
      rendition.annotations.add("highlight", cfiRange, {}, (e) => {
        if (!this.state.isPanelOpen)
          this.handlePanelOpen();
      }, 'test', ({ "fill": "yellow", "fill-opacity": "1" }));
      contents.window.getSelection().removeAllRanges();
    }.bind(this));

    // rendition의 기본 테마를 조정할 수 있는 것 같은데 이상하게 highlight에 대한 색상 변경은 위의 코드 (55, 63)과 같이 해야합니다.
    this.rendition.themes.default({
      // 드래그 했을 때의 배경색 지정!
      '::selection': {
        'background': 'rgba(0,96, 255, 0.3)'
      },
      // 무슨 역할인지 모르겠습니다. 없어도 무방한 것 같습니다.
      '.epubjs-hl': {
        'fill': 'black', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
      }
    });

    this.rendition.on("selected", async function (cfiRange) {
      this.rendition.book.getRange(cfiRange).then(async function (range) {
        var text;
        if (range) {
          text = range.toString();
          this.setState({ high_text: text });

          await axios({
            method: 'post',
            url: process.env.REACT_APP_RENOSH_BASE_URL + 'api/highlights/book/' + this.props.id,
            data: {
              userid: this.state.userid,
              username: this.state.username,
              location: cfiRange,
              text,
              title: this.props.title
            }
          }).then(res => {
            this.setState({ high_id: res.data.highlight_id });

            this.setState({
              dragged_anno_id: 0
            }, () => {
              if (!this.state.isPanelOpen)
                this.handlePanelOpen();
            })
          })
        }
      }.bind(this))
    }.bind(this));
  };

  handlePanelOpen = () => {
    if (this.state.isPanelOpen) {
      this.deleteHigh();
    }
    this.setState({ isPanelOpen: !this.state.isPanelOpen });
  };

  deleteHigh = () => {
    this.setState({
      high_id: 0,
      high_text: ''
    })
  }

  setlastRead(epubcifi) {
    this.setState({ lastRead: epubcifi });
  }

  movePrev = () => {
    this.rendition.prev();
  }

  moveNext = () => {
    this.rendition.next();
  }

  changeLocation = (cfiRange) => {
    this.rendition.display(cfiRange);
  }

  updateLastRead = async () => {
    await axios({
      method: 'put',
      url: process.env.REACT_APP_RENOSH_BASE_URL + 'api/userbooklist/' + this.state.userid + '/' + this.state.userbooklistId + '/lastRead',
      data: {
        bookid: this.props.id,
        location: this.state.lastRead
      }
    }).then(res => {
      this.props.updateMyLastRead('UPDATE_MY_BOOK_LIST', res.data.mybooklist);
    })

  }

  componentWillUnmount() {
    if (this.state.userid !== 'visitor') {
      this.updateLastRead();
    }
  }

  deleteAllAnnoList(before_annoList) {  // 현재 그려진 모든 annoList를 지워주는 메소드
    for (let i = 0; i < before_annoList.length; i++) {
      let anno = before_annoList[i];
      this.rendition.annotations.remove(anno.location, "highlight")
    }
  }
  drawAllAnnoList(view_type, annoList) {  // 현재 요구되는 모든 annoList를 그려주는 메소드
    if (view_type === 'private' && annoList.length !== 0 && annoList[0].bookid === this.props.id && this.rendition !== null) {
      for (let i = 0; i < annoList.length; i++) {
        let anno = annoList[i];
        let cfiRange = anno.location;
        if (this.state.userid === anno.userid && this.rendition.epubcfi.isCfiString(cfiRange)) {
          this.rendition.annotations.add("highlight", cfiRange, { "id": anno.id }, (e) => {
            this.setState({
              dragged_anno_id: e.target.parentElement.dataset.id
            }, () => {
              if (!this.state.isPanelOpen)
                this.handlePanelOpen();
            })
          }, 'test', ({ "fill": "yellow", "fill-opacity": "1" }))
        }
      }
    } else if (view_type === 'others' && annoList.length !== 0 && annoList[0].bookid === this.props.id && this.rendition !== null) {
      for (let i = 0; i < annoList.length; i++) {
        let anno = annoList[i];
        let cfiRange = anno.location;
        if (this.state.userid !== anno.userid && this.rendition.epubcfi.isCfiString(cfiRange)) {
          this.rendition.annotations.add("highlight", cfiRange, { "id": anno.id }, (e) => {
            this.setState({
              dragged_anno_id: e.target.parentElement.dataset.id
            }, () => {
              if (!this.state.isPanelOpen)
                this.handlePanelOpen();
            })
          }, 'test', ({ "fill": "#98a7c1", "fill-opacity": "1" }))
        }
      }
      for (let i = 0; i < annoList.length; i++) {
        let anno = annoList[i];
        let cfiRange = anno.location;
        if (this.state.userid === anno.userid && this.rendition.epubcfi.isCfiString(cfiRange)) {//my annotations => color yellow
          this.rendition.annotations.add("highlight", cfiRange, { "id": anno.id }, (e) => {
            this.setState({
              dragged_anno_id: e.target.parentElement.dataset.id
            }, () => {
              if (!this.state.isPanelOpen)
                this.handlePanelOpen();
            })
          }, 'test', ({ "fill": "yellow", "fill-opacity": "1" }))
        }
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.props.annoList) !== JSON.stringify(nextProps.annoList)) {
      this.deleteAllAnnoList(this.props.annoList);
      this.drawAllAnnoList(nextProps.view_type, nextProps.annoList)
    }
    return true;
  }

  // Swipe 함수
  onSwipeLeftListener = () => {
    this.movePrev();
  }
  onSwipeRightListener = () => {
    this.moveNext();
  }
  /*
  onSwipeListener = (p) => {
    if (p.x !== 0) {
      console.log(`Swipe x: ${p.x}`)
    }
    if (p.y !== 0) {
      console.log(`Swipe y: ${p.y}`)
    }
  }
  */

  componentDidMount() {
    // 현재 epub 파일을 로딩해서 컴포넌트로 받아오는데 평균 최소 1초는 걸린다. (크기, 상황에 따라 다르겠지만)
    setTimeout(() => {
      let iframe = document.getElementsByTagName("iframe")[0];
      if (iframe && (this.state.touchDevice === true)) {
        // 만약 state에 touchDevice 여부가 true라면 iframe에 className을 주입해서 마우스 이벤트를 막는다.
        iframe.className = "mobile";
      }
      else {
        alert("페이지 로딩에 실패했습니다.");
      }
    }, 2000);
  }

  componentWillUpdate() {
    let iframe = document.getElementsByTagName("iframe")[0];
    if (this.state.touchDevice === true) {
      iframe.className = "mobile";
    }
  }

  componentDidUpdate() {
    let iframe = document.getElementsByTagName("iframe")[0];
    if (this.state.touchDevice === true) {
      iframe.className = "mobile";
    }
  }

  render() {
    return (
      <div className="epubViewerPageContainer">
        <Layout className="epubViewerPageLayout">
          <Header>
            <section>
              <h1>
                <Link to='/' onClick={() => { }}>
                  <Button id="homeButton" shape="circle">
                    <HomeOutlined />
                  </Button>
                </Link>
              </h1>
              <h1>
                <Button onClick={() => { this.handlePanelOpen(); }}
                  id="panelButton" type="primary" shape="circle">
                  <EditOutlined />
                </Button>
              </h1>
              <h1 id="demo"> </h1>
            </section>
          </Header>

          <Layout id="epubViewerPageBody">
            <Sider><Button onClick={() => this.movePrev()}><LeftOutlined /></Button></Sider>
            <Content id = "epubViewer">
              <Swipe style={{position:"relative", height:"100%", width:"100%"}}
                onSwipedLeft={this.onSwipeLeftListener}
                onSwipedRight={this.onSwipeRightListener}
                detectMouse="false" detectTouch="true"
               >
                  <EpubView
                    url={this.props.epubURL}
                    title={this.props.title}
                    location={this.props.selected_cfiRange}
                    locationChanged={epubcifi => this.setlastRead(epubcifi)}
                    getRendition={this.getRendition}
                  />
                  {<Panel
                    changeLocation={this.changeLocation}
                    visible={this.state.isPanelOpen}
                    handlePanelOpen={this.handlePanelOpen}
                    high_id={this.state.high_id}
                    high_text={this.state.high_text}
                    deleteHigh={this.deleteHigh}
                    dragged_anno_id={this.state.dragged_anno_id}
                    zIndex={5000}
                  />}
              </Swipe>
            </Content>
            <Sider><Button onClick={() => this.moveNext()}><RightOutlined /></Button></Sider>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default EpubViewer;