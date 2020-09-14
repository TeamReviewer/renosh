import React, {Component} from 'react';
import './book.less';
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
            // xs: '480px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1600px'
            <div className="book" xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}
                onClick={ async function(e){
                let annoList = await this.getAnnoData();                                
                this.props.selectBook("SELECT_BOOK", id, annoList)
            }.bind(this)} >
               <Link  to={`bookInfo/${id}`} >
                    <Row>
                        <Col id="bookDisplayCard">
                            <Col className="bookImg">
                                {<img src={image} alt={title? title: Title}/>}
                            </Col>
                            <Col className="bookTitle" style={{color:"black"}} >
                                {title? title: Title}
                            </Col>
                        </Col>
                    </Row>
                </Link>
            </div>
        )
    }
}

export default Book;