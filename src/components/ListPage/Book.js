import React, {Component} from 'react';
import './Book.css';
import {Link} from 'react-router-dom';


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
                    <span className="title">
                        <Link to={`bookInfo`} >{title}</Link>
                    </span>
                </div>
            </div>
        )
    }
}

export default Book;