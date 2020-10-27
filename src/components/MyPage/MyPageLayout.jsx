import React, { Component } from 'react';
// import MyInfo from './MyInfo';
import MyPageTOC from './MyPageTOC';
import MyPageTOCBody from './MyPageTOCBody';
import Header from '../common/Header';
import { Layout, Row } from 'antd';
import { BookOutlined } from '@ant-design/icons'; 
import './myPageLayout.less';

export default class MyPageLayout extends Component {
    state = {
        mode: '',
    }
    changeBody = (type) => {
        if(type === 'myBookList') { 
            this.setState({mode: "myBookList"});
        } else if(type === 'myAnnoList') { 
            this.setState({mode: "myAnnoList"});
        }
    }
    render() {
        return (
            <div className="myPageContainer">
                <Layout className="myPageLayout">
                    <Header />
                    <Layout>
                            <div className="myPageContent">
                                <Row xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} id="myLibrary">
                                    <BookOutlined />
                                    <span>My Library</span>
                                </Row>
                                <Row xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <div id="topBarLayout">
                                        {/*<MyInfo></MyInfo>*/}
                                        <MyPageTOC changeBody={this.changeBody}></MyPageTOC>
                                    </div>
                                </Row>
                                <Row xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <div id="belowContentLayout">
                                        <MyPageTOCBody mode={this.state.mode}></MyPageTOCBody>
                                    </div>
                                </Row>
                            </div>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
