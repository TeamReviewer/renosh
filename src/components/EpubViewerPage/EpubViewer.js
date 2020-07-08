import React, { Component } from "react";
import {
    EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
    EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
    ReactReader, // A simple epub-reader with left/right button and chapter navigation
    ReactReaderStyle // Styles for the epub-reader it you need to customize it
  } from "react-reader";
import "./EpubViewer.css"
class EpubViewer extends Component {


  render() {
    return (
      <div id="epubViewer">
        <ReactReader
            url={"https://gerhardsletten.github.io/react-reader/files/alice.epub"}
            title={"Alice in Wonderland"}
            location={"2"}
            locationChanged={epubcifi => console.log(epubcifi)}
        />
      </div>
    );
  }
}

export default EpubViewer;