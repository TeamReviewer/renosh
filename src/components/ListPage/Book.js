import React, {Component} from 'react';
import './Book.css';
import {Link} from 'react-router-dom';


class Book extends Component {
    render() {
        const {
            image,
            title,
            Title,
            id,
        } = this.props;
        return (
           <div className="book">
                <div className="bookImage">
                    <img src={image} alt={title? title: Title}></img>
                </div>
                <div className="bookTitle">
                    <span className="title" >
                        <Link to={`bookInfo`}  onClick={function(e){         
                            debugger;   
                                this.props.selectBook("SELECT_BOOK", id)
                            }.bind(this)}>{title? title: Title}
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
}

export default Book;