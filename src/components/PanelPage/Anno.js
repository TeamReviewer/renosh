import React, {Component} from 'react';
import './Anno.css'


class Anno extends Component {
   state = {
        cfiRange : this.props.cfiRange,
        user_id: this.props.user_id,
        text: this.props.text,
   } 
    render() {   
        return (
            <div id="anno" onClick={function(e){
                this.props.moveToAnno("MOVE_EPUB", this.state.cfiRange)
                this.props.changeLocation(this.state.cfiRange)
            }.bind(this)}>
                <span id="user_id">{this.state.user_id ? this.state.user_id : ""}</span>
                <span id="text">{this.state.text ? this.state.text: ""}</span>
            </div>
        )
    }
}

export default Anno;