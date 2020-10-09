import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Rate, Button, Tag } from 'antd';
import { SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons';
import './detailBookInfo.less';

export default class InfoData extends Component {
    updateMyBookList = async (userid, userbooklistid) => {
        await axios({
            method:'put',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid +"/"+ userbooklistid + '/mybooklist',
            data:{
                bookid: this.props.id
            }
        });
    }

    getUserBookListFromServer = async (userid) => {
        await axios({
            method:'get',
            url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid
        }).then((res) => {
            if(userid !== 'visitor')
                this.props.updateMyBookList('UPDATE_MY_BOOK_LIST', res.data[0].mybooklist);
        });
    }


    handleClick = () => {
        const userid = this.props.userid;
        const userbooklistid = this.props.userbooklistid;
        this.getUserBookListFromServer(userid);
        if(userid !== 'visitor'){
            if(!this.props.isExist){
                this.updateMyBookList(userid, userbooklistid);
                this.getUserBookListFromServer(userid);
            }            
        }
    }

    render() {
        return (
            <div id="detailBookInfo">
                <Row className="detailContent"  type="flex" justify="space-around">
                    <Col className="detailSpace" xs={24} sm={24} md={1} lg={3} xl={3} xxl={4}></Col>
                    <Col className="detailInfo1" xs={24} sm={24} md={10} lg={10} xl={8} xxl={6}> 
                        <Row>
                            <img src={this.props.image} alt={this.props.title} id="infoImage"/>
                        </Row>
                    </Col>
                    <Col className="detailInfo2" xs={24} sm={24} md={11} lg={10} xl={12} xxl={12}>
                        <div className="infoDiv">
                            <Row className="title">
                                {this.props.title}
                            </Row>
                            <Row className="author">
                                By {this.props.author} | {this.props.date}
                            </Row>
                            <Row className="star">
                                <Rate allowHalf defaultValue={5}/>
                            </Row>
                            <Row className="emotion">
                                <Col><Tag icon={<SmileOutlined />} color="success">{this.props.positive}</Tag></Col>
                                <Col><Tag icon={<MehOutlined />} color="processing">{this.props.neutral}</Tag></Col>
                                <Col><Tag icon={<FrownOutlined />} color="warning">{this.props.negative}</Tag></Col>
                            </Row>
                            <Row className="summary">
                                <h3>{this.props.summary}</h3>
                            </Row>
                            <Row id="button" type="flex" justify="start" gutter={20}>
                                <Col id="book_link">
                                    <Link to={`/epub`} >
                                        <Button onClick={(e) => this.handleClick(e)} shape="round">
                                            Start Reading
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Button shape="round">Review</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="detailSpace" xs={24} sm={24} md={2} lg={1} xl={1} xxl={2}></Col>
                </Row>
            </div>
        )
    }
}
