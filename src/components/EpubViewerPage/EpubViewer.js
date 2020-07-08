import React, { Component } from "react";
import {
    EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
    EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
    ReactReader, // A simple epub-reader with left/right button and chapter navigation
    ReactReaderStyle // Styles for the epub-reader it you need to customize it
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
      largeText: false
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
        console.log("highlight clicked", e.target);
      });
      contents.window.getSelection().removeAllRanges();

    });

  };


  render() {
    return (
      <div id="epubViewer">
        <ReactReader
            url={"https://gerhardsletten.github.io/react-reader/files/alice.epub"}
            title={"Alice in Wonderland"}
            location={"2"}
            locationChanged={epubcifi => console.log(epubcifi)}
            getRendition={this.getRendition}
        />
      </div>
    );
  }
}

export default EpubViewer;