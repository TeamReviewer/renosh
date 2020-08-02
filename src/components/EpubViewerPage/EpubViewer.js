import React, { Component } from "react";
import Panel from '../PanelPage/Panel';
import axios from "axios"; 
import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  // EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  // ReactReader, // A simple epub-reader with left/right button and chapter navigation
  // ReactReaderStyle // Styles for the epub-reader it you need to customize it
} from "react-reader";
import "./EpubViewer.css"
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
      annoList: this.props.annoList
    };
    this.rendition = null;
  }

  getAnnoData = async () => {
    
      let book_id = this.props.id;
      const annos = await axios.get("https://renosh-server.azurewebsites.net/api/highlights/book/" + book_id);
      return annos.data;
  }
  
  getRendition = rendition => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state;
    
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? "140%" : "100%");

    if(this.props.annoList.length !== 0){
      if(this.props.annoList[0].bookid === this.props.id){
        for (let i = 0; i < this.props.annoList.length; i++) {      
          let anno = this.props.annoList[i];
          let cfiRange = anno.location;
    
          rendition.annotations.highlight(cfiRange);
        }
      }
    }
    
    

    // text를 드래깅했을 때 표시
    this.rendition.on("selected", function (cfiRange, contents) {
      
      rendition.annotations.highlight(cfiRange, {}, (e) => {
        console.log("highlight clicked", e.target);
      });
      contents.window.getSelection().removeAllRanges();
    });

    // text를 드래깅했을 때 DB에 저장
    this.rendition.on("selected", async function (cfiRange) {
      this.rendition.book.getRange(cfiRange).then( async function (range) {
        var text;

        if (range) {
          text = range.toString();

          await axios({
            method: 'post',
            url: 'https://renosh-server.azurewebsites.net/api/highlights/book/' + this.props.id,
            data: {
              user_id: 'jongho',
              location: cfiRange,
              text
            }
          });
          let annoList = await this.getAnnoData(); 
          this.props.updateAnnoList("UPDATE_ANNOLIST", annoList)
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
        <div>
          <button onClick={() => this.handlePanelOpen()}>Panel</button>
        </div>
        <div id="epubViewer">
          <EpubView
            url={this.props.epubURL}
            title={this.props.title}
            location={"2"}
            // locationChanged={epubcifi => console.log(epubcifi)}
            getRendition={this.getRendition}
          />
          {this.state.isPanelOpen ? <Panel changeLocation={this.changeLocation} /> : ''}
        </div>
        <div>
          <button onClick={() => this.movePrev()}>prev</button>
          <button onClick={() => this.moveNext()}>next</button>
        </div>

      </div>

    );
  }
}

export default EpubViewer;