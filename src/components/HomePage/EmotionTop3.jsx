import React, { Component } from 'react'
import BookContainer from '../../containers/ListPage/Book'
import './emotionTop3.less'
import axios from 'axios'

export default class EmotionTop extends Component {
    state = {
        books: null,
        isLoading : true,
        emotion_count: null
    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/books/emotion/best").then(
            req => {
                let db_books = [req.data[0].bestPositiveBook, req.data[1].bestNeutralBook, req.data[2].bestNegativeBook];
                let db_emotion_count = [req.data[0].bestPositive, req.data[1].bestNeutral, req.data[2].bestNegative]
                this.setState({
                    books: db_books,
                    isLoading: false,
                    emotion_count: db_emotion_count
                })
            }
        );          
    }
    render() {
        let list;    
        let count = 0
        let bookFooter = ['Best positive Book', 'Best Neutral Book', 'Best Negative Book']
        if(!this.state.isLoading) {
            list = this.state.books.map(
                book => (<>
                    <BookContainer key={count++} id={book.id} title={book.title} Title={book.Title} image={book.image}/>
                    <div className="bestImotion"> {bookFooter[count-1]}: {this.state.emotion_count[count-1]} </div>
                </>)
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
