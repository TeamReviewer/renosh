import React, { Component } from 'react';
import BookContainer from '../../containers/ListPage/Book';
import { Row, Col } from 'antd';
import './readBookList.less';

export default class ReadBookList extends Component {
    render() {
        let list = null;
        if (this.props.myBook.length !== 0){
            list = this.props.myBook.map(
                book => (<Col xs={{ span:24, offset:0 }} xs={{ span:24, offset:0 }} 
                    md={{ span:12, offset:0 }} lg={{ span:8, offset:0 }} xl={{ span:8, offset:0 }}>
                    <BookContainer 
                        key={book.id} id={book.id} title={book.title} Title={book.Title} image={book.image}
                    />
                    </Col>)
            )
        }
        
        return (
            <div id="readList">
                <div id="readListbody" >
                    <Row>
                        {list ? list : '책을 한 권도 읽지 않았습니다.'}
                    </Row>
                </div>
                
            </div>
        )
    }
}
