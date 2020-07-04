import React, {Component} from 'react';
import './BookBriefInfo.css'

class BookBriefInfo extends Component {
    render() {
        const {
            image,
            author,
            title,
            date,
            alt
        } = this.props;
        return(            
            <div id="briefInfo">            
                <img id="briefInfoImage" src={image} alt={alt} ></img>
                <div>
                    <p>author: {author} </p>
                    <p>title: {title} </p>
                    <p>date: {date} </p>
                </div>
                
            </div>
        )
    }
}

export default BookBriefInfo;