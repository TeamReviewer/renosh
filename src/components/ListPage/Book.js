import React, {Component} from 'react';
import './Book.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;


class Book extends Component {

    getAnnoData = async () => {
        let book_id = this.props.id;  
        const annos = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/highlights/book/" + book_id+ "/public");
        return annos.data;
    }

    render() {
        const {
            image,
            title,
            Title,
            id,
        } = this.props;
        return (
        //    <div className="book" onClick={ async function(e){
        //         let annoList = await this.getAnnoData();                                
        //         this.props.selectBook("SELECT_BOOK", id, annoList)
        //     }.bind(this)} >
        //        <Link  to={`bookInfo/${id}`} >
        //             <div className="bookImage">
        //                 <img src={image} alt={title? title: Title}></img>
        //             </div>
        //             <div className="bookTitle">
        //                 <span className="title" >
        //                     {title? title: Title}
        //                 </span>
        //             </div>
        //         </Link>
        //     </div>
            <div className="book" onClick={ async function(e){
                let annoList = await this.getAnnoData();                                
                this.props.selectBook("SELECT_BOOK", id, annoList)
            }.bind(this)} >
               <Link  to={`bookInfo/${id}`} >
                    <div id="bookDisplayCard">
                        <Card
                            hoverable
                            style={{width: 150, height:250}}
                            cover={<img src={image} alt={title? title: Title} height="200"/>}
                        >
                            <Meta title={title? title: Title} />
                        </Card>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Book;