import React, { Component } from "react";
import Panel from '../PanelPage/Panel';
// import axios from "axios"; 
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
      rendition.annotations.highlight(cfiRange, {}, (e) => {

        console.log("highlight clicked", e.target.data);
        console.log("cfiRange = ", cfiRange)
      });
      contents.window.getSelection().removeAllRanges();
    });


    this.rendition.on("selected", function (cfiRange) {
      console.log("this: ", this)

      this.book.getRange(cfiRange).then(function (range) {
        var text;

        if (range) {
          text = range.toString();

          //여기에 axios로 통시하는 문구를 붙이면 된다.
          console.log("text : ", text);
          console.log("cfiRange: ", cfiRange)
        }
      })
    });
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

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handlePanelOpen()}>Panel</button>
          
        </div>
        <div id="epubViewer">
          <EpubView
            url={"https://gerhardsletten.github.io/react-reader/files/alice.epub"}
            title={"Alice in Wonderland"}
            location={"2"}
            locationChanged={epubcifi => console.log(epubcifi)}
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