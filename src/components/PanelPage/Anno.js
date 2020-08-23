import React, {Component} from 'react';
import './Anno.css'


class Anno extends Component {
   state = {
        cfiRange : this.props.cfiRange,
        username: this.props.username,
        text: this.props.text,
        memo: this.props.memo
   } 
    render() {   
        return (
            <div id="anno" onClick={function(e){
                this.props.moveToAnno("MOVE_EPUB", this.state.cfiRange)
                this.props.changeLocation(this.state.cfiRange)
            }.bind(this)}>
                <span id="username">{this.state.username ? this.state.username : ""}</span>
                <span id="memo">{this.state.memo ? this.state.memo: ""}</span><br />
                <span id="text">{this.state.text ? this.state.text: ""}</span>
            </div>
        )
    }
}

export default Anno;