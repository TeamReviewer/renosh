import React, {Component} from 'react';
import './Anno.css'


class Anno extends Component {
    render() {      
        const {
            author, 
            date,
            content
        }   = this.props;
        return (
            <div id="anno">
                <span id="user_id">{author ? author : ""}</span>
                <span id="text">{content ? content: ""}</span>
            </div>
        )
    }
}

export default Anno;