import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Space, Row, Col, Rate, Button, Popover, Typography, BackTop } from 'antd';
import './detailBookInfo.less';

export default class InfoData extends Component {
    render() {
        return (
            <div id="content">
                <Row className="displayDetailBookInfo">
                    <Col className="info">
                        <Row>
                            <img src={this.props.image} alt={this.props.title} id="book_image" />
                        </Row>
                    </Col>
                    <Col className="info">
                        <div className="info-div">
                            <Row className="title">
                                <h2>{this.props.title}</h2>
                            </Row>
                            <Row>By {this.props.author}</Row>
                            <Row>
                                <Rate className="star" allowHalf defaultValue={5} />
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
                </Row>
            </div>
        )
    }
}
