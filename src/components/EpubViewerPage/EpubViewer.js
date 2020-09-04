import React, { Component } from "react";
import Panel from '../PanelPage/Panel';
import { Link } from 'react-router-dom';
import axios from "axios"; 
import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  // EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  // ReactReader, // A simple epub-reader with left/right button and chapter navigation
  // ReactReaderStyle // Styles for the epub-reader it you need to customize it
} from "react-reader";
import LinkButton from '../TagComponents/LinkButton';
import "./epubViewer.less";
import { Layout, Breadcrumb, Row, Col, Menu, Button, Popover, Typography, BackTop, Icon } from 'antd';
import { HomeOutlined, EditOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class EpubViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      location: 2,
      localFile: null,
      localName: null,
      largeText: false,
      isPanelOpen: false,
      annoList: this.props.annoList,
      book_id:this.props.id,
      high_id:null,
      high_text: null,
      userid: this.props.userid,
      username: this.props.username
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
    
    // redux에 저장되어 있는 annoList에 대해 highlight를 그려주고 이벤트 옵션을 만들어 주는 부분입니다.
    //others annotations => color gray
    if(this.props.annoList.length !== 0){
      if(this.props.annoList[0].bookid === this.props.id){
        for (let i = 0; i < this.props.annoList.length; i++) {      
          let anno = this.props.annoList[i];
          let cfiRange = anno.location;
          if(this.state.userid !== anno.userid){
            if(this.rendition.epubcfi.isCfiString(cfiRange)){
              rendition.annotations.add("highlight", cfiRange, {"id":anno.id}, (e)=>{
                // 현재 패널이 열리는 옵션에 대해 수정이 필요합니다.
                  // if(!this.state.isPanelOpen)
                  //   this.handlePanelOpen();
              }, 'test', ({"fill": "#98a7c1", "fill-opacity": "1"}))
            }
          }
        } 
      }
    }
  //my annotations => color yellow
  if(this.props.annoList.length !== 0){
    if(this.props.annoList[0].bookid === this.props.id){
      for (let i = 0; i < this.props.annoList.length; i++) {      
        let anno = this.props.annoList[i];
        let cfiRange = anno.location;
        if(this.state.userid === anno.userid){
          if(this.rendition.epubcfi.isCfiString(cfiRange)){
            rendition.annotations.add("highlight", cfiRange, {"id":anno.id}, (e)=>{
              // 현재 패널이 열리는 옵션에 대해 수정이 필요합니다.
              // if(!this.state.isPanelOpen)
              //   this.handlePanelOpen();
            }, 'test', ({"fill": "yellow", "fill-opacity": "1"}))
          }
        } 
      }
    }
  }

    // 새로 highlight를 만들 때 이용하는 메서드 입니다.
    this.rendition.on("selected", function (cfiRange, contents) {
      rendition.annotations.add("highlight", cfiRange, {}, (e) => {
        // if(!this.state.isPanelOpen)
        //     this.handlePanelOpen();
      }, 'test', ({"fill": "yellow", "fill-opacity": "1"}));
      contents.window.getSelection().removeAllRanges();
    });    

    // rendition의 기본 테마를 조정할 수 있는 것 같은데 이상하게 highlight에 대한 색상 변경은 위의 코드 (55, 63)과 같이 해야합니다.
    this.rendition.themes.default({
      // 드래그 했을 때의 배경색 지정!
      '::selection': {
        'background': 'rgba(0,96, 255, 0.3)'
      },
      // 무슨 역할인지 모르겠습니다. 없어도 무방한 것 같습니다.
      '.epubjs-hl' : {
        'fill': 'black', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
      }
    });
        
    this.rendition.on("selected", async function (cfiRange) {
      this.rendition.book.getRange(cfiRange).then( async function (range) {
        var text;
        if (range) {          
          text = range.toString();
          this.setState({high_text: text});

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
            this.setState ({high_id:res.data.highlight_id});
            this.props.updateAnnoList("UPDATE_HIGHLIGHT", this.state.high_id, this.state.high_text);
  
            if(!this.state.isPanelOpen)
              this.handlePanelOpen();
          })
          
        }
      }.bind(this))
    }.bind(this));
  };

  handlePanelOpen() {
    this.setState({ isPanelOpen: !this.state.isPanelOpen })
  };

  movePrev = () => {
    this.rendition.prev();
  }

  moveNext = () => {
    this.rendition.next();
  }

  changeLocation = (cfiRange) => {
    this.rendition.display(cfiRange);
  }
  render() { 
    return (
      <div>
        <Layout>

          <Header id="viewerHeader">
            <section>
              <h1>
                <Link to='/' onClick={() => {}}>
                  <Button
                    shape="circle"
                    style={{backgroundColor:"#ffffff", borderColor:"#2b335b", color: "#2b335b", size:20, fontSize: 15}}>
                    <HomeOutlined />
                  </Button>
                </Link>
              </h1>
              <h1>
                <Button onClick={() => this.handlePanelOpen()}
                  type="primary" shape="circle"
                  style={{backgroundColor:"#2b335b", borderColor:"#2b335b", color: "#ffffff", size:20, fontSize: 17}}>
                  <EditOutlined />
                </Button>
              </h1>
            </section>
          </Header>

          <Layout id="viewerBody">
            <Sider><Button onClick={() => this.movePrev()}><LeftOutlined /></Button></Sider>
            <Content>
              <div id="epubViewer">
                <EpubView 
                  url={this.props.epubURL}
                  title={this.props.title}
                  location={this.props.selected_cfiRange}
                  // locationChanged={epubcifi => console.log(epubcifi)}
                  getRendition={this.getRendition}
                />
                {this.state.isPanelOpen ? <Panel changeLocation={this.changeLocation} /> : ''}
              </div>
            </Content>
            <Sider><Button onClick={() => this.moveNext()}><RightOutlined /></Button></Sider>
          </Layout>

        </Layout>
      </div>
    );
  }
}

export default EpubViewer;