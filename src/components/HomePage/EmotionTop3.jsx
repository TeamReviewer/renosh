import React, { Component } from 'react'
import BookContainer from '../../containers/ListPage/Book'
import './emotionTop3.less'
import axios from 'axios'

export default class EmotionTop extends Component {
    state = {
        books: null,
        isLoading : true
    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/books/emotion/best").then(
            req => {
                let redux_books = this.props.books
                let top3EmotionBookIds = req.data
                let top3EmotionBooks = []
                for(let i=0;i < redux_books.length;i++) {
                    if(redux_books[i].id === top3EmotionBookIds[0].bestPositiveId){
                        top3EmotionBooks[0] = redux_books[i]
                    } 
                    if(redux_books[i].id === top3EmotionBookIds[1].bestNeutralId) {
                        top3EmotionBooks[1] = redux_books[i]
                    }
                    if(redux_books[i].id === top3EmotionBookIds[2].bestNegativeId) {
                        top3EmotionBooks[2] = redux_books[i]
                    }
                }
                this.setState({
                    books: top3EmotionBooks,
                    isLoading: false
                })
            }
        );          
    }
    render() {
        let list;    
        let count = 0
        if(!this.state.isLoading) {
            list = this.state.books.map(
                book => (<BookContainer 
                        key={count++} id={book.id} title={book.title} Title={book.Title} image={book.image}
                    />)
            )
        }
        return (
            <div id="emotionBookList">
                <div id="emotionBookListbody">
                    {this.state.isLoading ? "isLoading ... " : list}
                </div>
            </div>
        )
    }
}
