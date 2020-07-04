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
                {author}
                {date}
                {content}
            </div>
        )
    }
}

export default Anno;