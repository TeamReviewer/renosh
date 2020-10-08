import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Rate, Button } from 'antd';
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
                    <Col className="detailSpace" xs={24} sm={1} md={2} lg={3} xl={4}></Col>
                    <Col className="detailInfo1" xs={24} sm={10} md={8} lg={7} xl={6}> 
                        <Row>
                            <img src={this.props.image} alt={this.props.title} id="infoImage"/>
                        </Row>
                    </Col>
                    <Col className="detailInfo2" xs={24} sm={12} md={12} lg={12} xl={12}>
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
                            Emotion
                            <Row className="emotion">
                                <Col span={2}>
                                    <SmileOutlined /> 
                                </Col>
                                <Col span={4}>
                                    : {this.props.positive}
                                </Col>
                                <Col span={2}>
                                    <MehOutlined /> 
                                </Col>
                                <Col span={4}> 
                                    : {this.props.neutral}
                                </Col>
                                <Col span={2}>
                                    <FrownOutlined />
                                </Col>
                                <Col span={4}> 
                                    : {this.props.negative}
                                </Col>
                            </Row>
                            <Row className="summary">
                                <h3>{this.props.summary}</h3>
                            </Row>
                            <Row id="button" type="flex" justify="start" gutter={20}>
                                <Col>
                                    <Link id="book_link" to={`/epub`} >
                                        <Button onClick={(e) => this.handleClick(e)} shape="round" style={{backgroundColor: "#2b335b", borderColor:"#2b335b", color: "#ffffff", width: "10"}}>
                                            Start Reading
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Button shape="round" style={{backgroundColor: "#ffffff", borderColor:"#2b335b", color: "#2b335b", width: "10"}}>
                                        Review
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="detailSpace" xs={24} sm={1} md={2} lg={2} xl={2}></Col>
                </Row>
            </div>
        )
    }
}
