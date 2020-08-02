import React, {Component} from 'react';
import './Anno.css'


class Anno extends Component {
   state = {
        cfiRange : this.props.cfiRange
   } 
    render() {      
        const {
            user_id, 
            text
        }   = this.props;
        return (
            <div id="anno" onClick={function(e){
                this.props.moveToAnno("MOVE_EPUB", this.state.cfiRange)
                this.props.changeLocation(this.state.cfiRange)
            }.bind(this)}>
                <span id="user_id">{user_id ? user_id : ""}</span>
                <span id="text">{text ? text: ""}</span>
            </div>
        )
    }
}

export default Anno;