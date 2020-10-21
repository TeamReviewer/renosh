import React, { Component } from 'react'
import BookContainer from '../../containers/ListPage/Book'
import './highlightTop3.less'
import axios from 'axios'

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
                book => (<BookContainer 
                        key={book.id} id={book.id} title={book.title} Title={book.Title} image={book.image}
                    />)
            )
        }
        return (
            <div id="highlightBookList">
                <div id="highlightBookListbody">
                    {this.state.isLoading ? "isLoading ... " : list}
                </div>
            </div>
        )
    }
}
