import React, {Component} from 'react';
import './Book.css'

class Book extends Component {    

    render() {
        const {
            image,
            title
        } = this.props;
        return (
           <div className="book">
                <div className="bookImage">
                    <img src={image} alt={title}></img>
                </div>
                <div className="bookTitle">
                    {title}
                </div>
            </div>
        )
    }
}

export default Book;