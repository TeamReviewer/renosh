import React, {Component} from 'react';
import './Book.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';

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
                        <Row>
                            <Col xs={250} sm={250} md={250} lg={250} xl={250}>
                                
                                {<img src={image} alt={title? title: Title} height="150"/>}
                            
                                {title? title: Title}
                            </Col>
                        </Row>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Book;