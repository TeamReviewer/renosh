import React, { Component } from 'react';
import BookContainer from '../../containers/ListPage/Book';
import axios from 'axios';
import { Row, Col } from 'antd';
import './highlightTop3.less'

export default class HighlightTop3 extends Component {
    state = {
        books: null,
        isLoading : true
    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/books/highlightmaxbooks").then(
            req => {
                this.setState({
                    books: req.data,
                    isLoading: false
                })
            }
        );          
    }
    render() {
        let list;    
        if(!this.state.isLoading) {
            list = this.state.books.map(
                book => (<Col xs={{ span:24, offset:0 }} xs={{ span:24, offset:0 }} 
                        md={{ span:12, offset:0 }} lg={{ span:8, offset:0 }} xl={{ span:8, offset:0 }}>
                    <BookContainer 
                        key={book.id} id={book.id} title={book.title} Title={book.Title} image={book.image}
                    />
                    </Col>)
            )
        }
        return (
            <div id="highlightBookList">
                <div id="highlightBookListbody">
                    <Row>
                        {this.state.isLoading ? "isLoading ... " : list}
                    </Row>
                </div>
            </div>
        )
    }
}
