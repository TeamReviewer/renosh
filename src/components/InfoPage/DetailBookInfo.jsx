import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Space, Row, Col, Rate, Button, Popover, Typography, BackTop } from 'antd';
import './detailBookInfo.css';

export default class InfoData extends Component {
    render() {
        return (
            // <div id="infoPage">
            //     <img src={this.props.image} alt={this.props.title} id="book_image" />
            //     <p id="book_title">{this.props.title}</p>
            //     <p id="book_description">{this.props.summary}</p>
            //     <Link id="book_link" to={`/epub`} >Start Reading</Link>    
            // </div>
            
                <Row>
                    <div id="displayDetailBookInfo">
                        <Col flex={2}>
                            <img src={this.props.image} alt={this.props.title} id="book_image" />
                        </Col>
                        <Col flex={3}>
                            <div>
                                <Row>
                                    <h2>{this.props.title}</h2>
                                </Row>
                                <Row>By {this.props.author}</Row>
                                <Row>
                                    <Rate allowHalf defaultValue={5} />
                                </Row>
                                <Row>
                                    <h3>{this.props.summary}</h3>
                                </Row>
                                <Row>
                                    <Link id="book_link" to={`/epub`} >
                                        <Button shape="round">
                                            Start Reading
                                        </Button>
                                    </Link>
                                </Row>
                            </div>
                            
                        </Col>
                    </div>
                </Row>
        )
    }
}
