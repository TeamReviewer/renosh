import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Rate, Button } from 'antd';
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
                console.log("update my book list")
                this.updateMyBookList(userid, userbooklistid);
                this.getUserBookListFromServer(userid);
            }            
        }
    }

    render() {
        return (
            <div id="detailContent">
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
                                By {this.props.author} | {this.props.date}
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
                </Row>
            </div>
        )
    }
}
