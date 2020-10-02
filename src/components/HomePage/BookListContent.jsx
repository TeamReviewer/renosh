import React from 'react';
import './BookListContent.less';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { SettingOutlined, HomeOutlined, SearchOutlined, BookOutlined } from '@ant-design/icons';
import BookListContainer from '../../containers/ListPage/BookList';
import Header from '../common/Header';
import LoginButton from '../../containers/LoginPage/UserData';
import ReadBookList from './BookList/ReadBookList';
import RecommandBookList from './BookList/RecommandBookList';

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
                                    <Row id="content-row-title">
                                        <span>Read List</span>
                                        <Button shape="round" size="medium">
                                            More
                                            {/* MyPage의 책 목록 page로 이동하는 링크 */}
                                        </Button>
                                    </Row>
                                    <Row id="content-row-3">
                                        <ReadBookList></ReadBookList>
                                    </Row>
                                    <Row id="content-row-title">
                                        <span>Recommand List</span>
                                    </Row>
                                    <Row id="content-row-3">
                                        <RecommandBookList></RecommandBookList>
                                    </Row>
                                    <Row id="content-row-title">
                                        <span>Book List</span>
                                    </Row>
                                    <Row id="content-row-5">
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