import React from 'react';
import './BookListContent.less';
import { Link } from 'react-router-dom';
import { Layout, Space, Row, Col, Menu, Button, Popover, Typography, BackTop } from 'antd';
import { LoginOutlined, SettingOutlined, HomeOutlined, SearchOutlined, BookOutlined } from '@ant-design/icons';
import BookListContainer from '../../containers/ListPage/BookList';
import Header from '../common/Header';
import LoginButton from '../../containers/LoginPage/UserData'

class BookListContent extends React.Component{
    render(){
        return(
            <div className="site-container">
                <Layout>
                    <Header />
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
                                                <Button type="text" icon={<BookOutlined />} style={{color: "#2b335b"}}>My Books</Button>
                                            </Link>
                                            <Button type="text" icon={<HomeOutlined  />} style={{color: "#2b335b"}}>Home</Button>
                                            <Button type="text" icon={<SearchOutlined  />} style={{color: "#2b335b"}}>Discover</Button>
                                            <Button type="text" icon={<SettingOutlined />} style={{color: "#2b335b"}}>Settings</Button>
                                        </Space>
                                    </div>                    
                                </Row>
                                <Row>
                                    <div id="content-row-title">
                                        <Space>
                                            Recommended For You
                                            <Button shape="round" size="medium">
                                                <div id="btn-font-size">
                                                    More
                                                </div>
                                            </Button>
                                        </Space>
                                    </div>
                                </Row>
                                <Row>
                                    <div id="content-row-3">
                                        Book List 1
                                    </div>
                                </Row>
                                <Row>
                                    <div id="content-row-title">
                                        <Space style={{color: "#2b335b"}}>
                                            Best Book List
                                            <Button shape="round" size="medium">
                                                <div id="btn-font-size">
                                                    More
                                                </div>
                                            </Button>
                                        </Space>
                                    </div>
                                </Row>
                                <Row>
                                    <div id="content-row-5">
                                        {/* Book List 2 */}
                                        <BookListContainer />
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