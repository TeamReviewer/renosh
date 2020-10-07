import React from 'react';
import BookListContainer from '../../containers/ListPage/BookList';
import HeaderBelowComponent from '../common/HeaderBelow';
import Header from '../common/Header';
import { Row, Col, Button } from 'antd';
import './bookListContent.less';
import ReadBookListContainer from '../../containers/ListPage/ReadBookList';
import RecommandBookList from './RecommandBookList';

class BookListContent extends React.Component{
    render(){
        let readComponent = null;
        if (this.props.isState === 'Authenticated') {
            readComponent = <span>
                                <Row id="contentTitle">
                                    <span>Read List</span>
                                    <Button shape="round" size="medium">
                                        More
                                        {/* MyPage의 책 목록 page로 이동하는 링크 */}
                                    </Button>
                                </Row>
                                <Row id="contentBestBooks">
                                    <ReadBookListContainer></ReadBookListContainer>
                                </Row>
                            </span>
        }
        return(
            <div className="listPageContainer">
                <div className="listPageLayout">
                    <Header />
                        <div className="listPageContent">
                            <Row xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                {/*<Col id="leftSider" xs={0} sm={2} md={4} lg={4} xl={4}></Col>*/}
                                {/*<Col id="contentCenter" xs={24} sm={20} md={16} lg={16} xl={16}>*/}
                                <Col id="contentCenter">
                                    <HeaderBelowComponent />
                                    {readComponent}{/* ReadBookList */}
                                    <Row id="contentTitle">
                                        <span>Recommand List</span>
                                    </Row>
                                    <Row id="contentBestBooks">
                                        <RecommandBookList></RecommandBookList>
                                    </Row>
                                    <Row id="contentTitle">
                                        <span>Best Book List</span>
                                        <Button shape="round" size="medium">
                                            More
                                        </Button>
                                    </Row>
                                    <Row id="contentBestBooks">
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