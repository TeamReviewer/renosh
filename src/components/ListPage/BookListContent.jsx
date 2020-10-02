import React from 'react';
import './bookListContent.less';
import { Row, Col, Button } from 'antd';
import BookListContainer from '../../containers/ListPage/BookList';
import HeaderBelowComponent from '../common/HeaderBelow';
import Header from '../common/Header';

class BookListContent extends React.Component{
    render(){
        return(
            <div className="site-container">
                <div className="layout">
                    <Header />
                        <div className="content">
                            <Row xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                {/*<Col id="leftSider" xs={0} sm={2} md={4} lg={4} xl={4}></Col>*/}
                                {/*<Col id="contentCenter" xs={24} sm={20} md={16} lg={16} xl={16}>*/}
                                <Col id="contentCenter">
                                    {/*
                                    <Row id="contentButtons">
                                        <div className="buttonsDiv">
                                            <Link><LoginButton/></Link>
                                            <Link to={'/myPage'}>
                                                <Button type="text" icon={<BookOutlined />} style={{color: "#2b335b"}}>My Books</Button>
                                            </Link>
                                            <Link to={'/'}>
                                                <Button type="text" icon={<HomeOutlined />} style={{color: "#2b335b", fontSize: "0.5"}}>Home</Button>
                                            </Link>
                                            <Link><Button type="text" icon={<SearchOutlined />} style={{color: "#2b335b"}}>Discover</Button></Link>
                                            <Link><Button type="text" icon={<SettingOutlined />} style={{color: "#2b335b"}}>Settings</Button></Link>
                                        </div>               
                                    </Row>
                                    */}
                                    <HeaderBelowComponent />
                                    <Row id="contentTitle">
                                        <span>Your Books</span>
                                        <Button shape="round" size="medium">
                                            More
                                        </Button>
                                    </Row>
                                    <Row id="contentYourBooks">
                                        Your Books
                                    </Row>
                                    <Row id="contentTitle">
                                        <span>Best Book List</span>
                                        <Button shape="round" size="medium">
                                            More
                                        </Button>
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