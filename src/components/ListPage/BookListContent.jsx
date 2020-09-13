import React from 'react';
import './bookListContent.less';
import { Link } from 'react-router-dom';
import { Layout, Space, Row, Col, Button } from 'antd';
import { SettingOutlined, HomeOutlined, SearchOutlined, BookOutlined } from '@ant-design/icons';
import BookListContainer from '../../containers/ListPage/BookList';
import Header from '../common/Header';
import LoginButton from '../../containers/LoginPage/UserData';

class BookListContent extends React.Component{
    render(){
        return(
            <div className="site-container" xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="layout">
                    <Header />
                        <div className="content">
                            <Row xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                {/*<Col id="leftSider" xs={0} sm={2} md={4} lg={4} xl={4}></Col>*/}
                                {/*<Col id="contentCenter" xs={24} sm={20} md={16} lg={16} xl={16}>*/}
                                <Col id="contentCenter">
                                    <Row id="contentButtons">
                                        <Space>
                                            <LoginButton/>
                                            <Link to={'myPage'}>
                                                <Button type="text" icon={<BookOutlined />} style={{color: "#2b335b"}}>My Books</Button>
                                            </Link>
                                            <Button type="text" icon={<HomeOutlined />} style={{color: "#2b335b", fontSize: "0.5"}}>Home</Button>
                                            <Button type="text" icon={<SearchOutlined />} style={{color: "#2b335b"}}>Discover</Button>
                                            <Button type="text" icon={<SettingOutlined />} style={{color: "#2b335b"}}>Settings</Button>
                                        </Space>               
                                    </Row>
                                    <Row id="content-row-title">
                                        <Space>
                                            Recommended For You
                                            <Button shape="round" size="medium" id="btn-font-size">
                                                More
                                            </Button>
                                        </Space>
                                    </Row>
                                    <Row id="content-row-3">
                                        Book List 1
                                    </Row>
                                    <Row id="content-row-title">
                                        <Space>
                                            Best Book List
                                            <Button shape="round" size="medium" id="btn-font-size">
                                                More
                                            </Button>
                                        </Space>
                                    </Row>
                                    <Row id="content-row-5">
                                        {/* Book List 2 */}
                                        <BookListContainer />
                                    </Row>
                                </Col>
                                {/*<Col id="rightSider" xs={0} sm={2} md={4} lg={4} xl={4}></Col>*/}
                            </Row>
                        </div>
                        {/* <Footer>Footer</Footer> */}
                    </div>
            </div>
            
        )
    }
}

export default BookListContent;