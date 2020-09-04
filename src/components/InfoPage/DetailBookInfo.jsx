import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Space, Row, Col, Rate, Button, Popover, Typography, BackTop } from 'antd';
import './detailBookInfo.less';

export default class InfoData extends Component {
    render() {
        return (
            <div id="content">
                <Row className="displayDetailBookInfo"  type="flex" justify="space-around">
                    <Col className="info1" span={6}>
                        <Row>
                            <img src={this.props.image} alt={this.props.title} id="book_image"/>
                        </Row>
                    </Col>
                    <Col className="info2" span={12}>
                        <div className="info-div">
                            <Row className="title">
                                {this.props.title}
                            </Row>
                            <Row className="author">
                                By {this.props.author}
                            </Row>
                            <Row className="star">
                                <Rate allowHalf defaultValue={5}/>
                            </Row>
                            <Row className="summary">
                                <h3>{this.props.summary}</h3>
                            </Row>
                            <Row id="button" type="flex" justify="start" gutter={20}>
                                <Col>
                                    <Link id="book_link" to={`/epub`} >
                                        <Button shape="round" style={{backgroundColor: "#2b335b", borderColor:"#2b335b", color: "#ffffff", width: "10vh"}}>
                                            Start Reading
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Button shape="round" style={{backgroundColor: "#ffffff", borderColor:"#2b335b", color: "#2b335b", width: "10vh"}}>
                                        Review
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
