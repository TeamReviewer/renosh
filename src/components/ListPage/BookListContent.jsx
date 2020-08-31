import React from 'react';
import './BookListContent.less';
import { Link } from 'react-router-dom';
import { Layout, Space, Row, Col, Menu, Button, Popover, Typography, BackTop } from 'antd';
import { LoginOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
import BookListContainer from '../../containers/ListPage/BookList';
import Header from '../common/Header';
import LoginButton from '../LoginPage/LoginButton' 

class BookListContent extends React.Component{
    render(){
        return(
            <div className="site-container">
                <Layout>
                    <Header/>
                    <div id="content" className="content">
                        <Row>
                            <Col xs={2} sm={4} md={4} lg={4} xl={4}></Col>
                            <Col xs={20} sm={16} md={16} lg={16} xl={16}>
                                <Row>
                                    <div id="content-buttons">
                                        <Space>
                                            {/* <Button icon={<LoginOutlined />}>로그인</Button> */}
                                            <LoginButton/>
                                            <Link to={'myPage'}>
                                                <Button icon={<HomeOutlined />}>나의 서재</Button>
                                            </Link>
                                            <Button icon={<SettingOutlined />}>설정</Button>
                                        </Space>
                                    </div>                    
                                </Row>
                                <Row>
                                    <div id="content-row-title">
                                        <Space>
                                            Recommended For You
                                            <Button shape="round" size="small">
                                                <div id="btn-font-size">
                                                    More
                                                </div>
                                            </Button>
                                        </Space>
                                    </div>
                                </Row>
                                <Row>
                                    <div id="content-row-3">
                                        {/* Book List 1 */}
                                        <BookListContainer />
                                    </div>
                                </Row>
                                <Row>
                                    <div id="content-row-title">
                                        <Space>
                                            Best Book List
                                            <Button shape="round" size="small">
                                                <div id="btn-font-size">
                                                    More
                                                </div>
                                            </Button>
                                        </Space>
                                    </div>
                                </Row>
                                <Row>
                                    <div id="content-row-5">
                                        Book List 2
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={2} sm={4} md={4} lg={4} xl={4}></Col>
                        </Row>
                    </div>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </div>
            
        )
    }
}

export default BookListContent;