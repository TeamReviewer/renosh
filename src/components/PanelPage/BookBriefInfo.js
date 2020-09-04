import React, {Component} from 'react';
import { Space, Row, Col, Rate, Button, Popover, Typography, BackTop } from 'antd';
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
            <div id="briefInfo">   
                <Row type="flex" justify="space-around">
                    <Row>         
                        <img id="briefInfoImage" src={image} alt={alt} ></img>
                    </Row>
                    <Row>
                        <p>author: {author} </p>
                    </Row>
                    <Row>
                        <p>title: {title? title: Title} </p>
                    </Row>
                    <Row>
                        <p>date: {date} </p>
                    </Row>
                </Row> 
            </div>
        )
    }
}

export default BookBriefInfo;