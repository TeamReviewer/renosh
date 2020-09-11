import React, {Component} from 'react';
import { Row, Col, Rate } from 'antd';
import './bookBriefInfo.less'

class BookBriefInfo extends Component {
    render() {
        const {
            image,
            author,
            title,
            Title,
            date,
            alt
        } = this.props;
        return(            
            <div id="briefInfo" >   
                <Col type="flex" justify="space-around" >
                    <Row style={{width:100}}>         
                        <img id="briefInfoImage" src={image} alt={alt}></img>
                    </Row>
                    <Row className="briefInfoTitle">
                        <p>{title? title: Title}</p>
                    </Row>
                    <Row className="briefInfoAuthor">
                        <p>By {author} | {date}</p>
                    </Row>
                    <Row className="briefInfoStar">
                        <Rate allowHalf defaultValue={5}/>
                    </Row>
                    <Row className="briefInfoSummary">
                        <p>{alt}</p>
                    </Row>
                </Col> 
            </div>
        )
    }
}

export default BookBriefInfo;