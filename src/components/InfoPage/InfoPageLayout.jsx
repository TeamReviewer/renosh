import React, { Component } from 'react';
import axios from 'axios';
import DetailBookInfo from './DetailBookInfo';
import HeaderBelowComponent from '../common/HeaderBelow';
import Header from '../common/Header';
import { Row, Col } from 'antd';
import './infoPageLayout.less';


// axios비동기 요청시 언마운트가 진행되고 나서 setState()요청이 있을 수 있다.(예를 들어 페이지를 빠르게 이동했는데, axios요청이 진행한 경우,)
// 이때 간단히 글로별 변수를 만들어서 컴포넌트가 언마운트 될 때(componentWillUnmount()) 변수의 값을 바꾸는 방식으로 setState를 검사할 수 있다.
let isUnmount = false; 

export default class Info extends Component {
    state = {
        book: {},
        isLoading : true,
    }       

    getBookInfoDataFromServer = async (book_id) => {
        await axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/books/" + book_id)
        .then(res =>{
            if(!isUnmount){
                this.setState({
                    book: res.data,
                    isLoading: false
                })
            }
        }).catch(err => {
            console.log(err)
        });
    }   

    componentDidMount() {
        // URL을 통한 website접근일 경우
        isUnmount = false
        if(this.props.book_id === undefined || this.props.book_id === null) {
            let book_id = this.props.match.params.book_id;
            this.getBookInfoDataFromServer(book_id);
        } else {
            this.setState({
                isLoading:false
            })
        }
        this.props.epubFromBookInfo("READ_MODE",false)
    }
    componentWillUnmount(){
        isUnmount = true;
    }
    render() {
        let infoData;
        if(!this.state.isLoading) {
            infoData = <DetailBookInfo 
                        image={this.state.book.image} title={this.state.book.title} summary={this.state.book.summary} author={this.state.book.author} 
                        id = {this.props.id} positive = {this.props.positive} neutral = {this.props.neutral} negative = {this.props.negative}
                        userid = {this.props.userid} username = {this.props.username}
                        userbooklistid = {this.props.userbooklistid} mybooklist = {this.props.mybooklist} isExist = {this.props.isExist}
                        updateMyBookList = {this.props.updateMyBookList} />
        }else {
            infoData = <DetailBookInfo image={this.props.image} title={this.props.title} summary={this.props.summary} author={this.props.author} />
        }
        return (
            <div className="infoPageContainer">
                <div className="infoPageLayout">
                    <Header/>
                        <div className="infoPageContent">
                            <Row>
                                {/*<Col style={{backgroundColor:"pink"}} xs={2} sm={4} md={4} lg={4} xl={4}></Col>*/}
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <HeaderBelowComponent />
                                    <Row>
                                        <div style={{width: "100%", height: "100%"}}>
                                            {this.state.isLoading ? "isLoading ... " : infoData}
                                        </div>
                                    </Row>
                                </Col>
                                {/*<Col style={{backgroundColor:"pink"}} xs={2} sm={4} md={4} lg={4} xl={4}></Col>*/}
                            </Row>
                        </div>
                </div>
            </div>
        )
    }
}
