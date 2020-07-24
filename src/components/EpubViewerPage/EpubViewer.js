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
      currentCFI: null,
    };
    this.rendition = null;
  }
  
  getRendition = rendition => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state;
    
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? "140%" : "100%");

    // Apply a class to selected text
    this.rendition.on("selected", function (cfiRange, contents) {          
      this.setState({currentCFI: cfiRange})      
      
      rendition.annotations.highlight(cfiRange, {}, (e) => {
        console.log("highlight clicked", e.target);
      });
      contents.window.getSelection().removeAllRanges();
    }.bind(this));


    this.rendition.on("selected", function (cfiRange) {
      this.rendition.book.getRange(cfiRange).then(function (range) {
        var text;

        if (range) {
          text = range.toString();

          //여기에 axios로 통시하는 문구를 붙이면 된다.
          console.log("text : ", text);
          console.log("cfiRange: ", cfiRange);
          axios({
            method: 'post',
            url: 'http://renosh.koreacentral.cloudapp.azure.com:5000/api/highlights/book/1',
            data: {
              user_id: 'eunk',
              location: cfiRange,
              text
            }
          });         
        }
      }.bind(this))
    }.bind(this));
  };//getRendition

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
    if (!cfiRange) cfiRange = this.section;
    console.log("currnet cfiRange = ", this.state.currentCFI);
    this.rendition.display(this.state.currentCFI);
  }

  render() {   
    return (
      <div>
        <div>
          <button onClick={() => this.handlePanelOpen()}>Panel</button>
          <button onClick={() => this.changeLocation()}>changeLocation</button>
        </div>
        <div id="epubViewer">
          <EpubView
            url={this.props.epubURL}
            title={this.props.title}
            location={"2"}
            // locationChanged={epubcifi => console.log(epubcifi)}
            getRendition={this.getRendition}
          />
          {this.state.isPanelOpen ? <Panel /> : ''}
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