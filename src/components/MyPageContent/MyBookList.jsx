import React, { Component } from 'react'
import axios from 'axios'
import './MyBookList.css'
import BookContainer from '../../containers/ListPage/Book';

export default class MyBookList extends Component {
    state = {
        isLoading : true
    }

    // TODO : 현재 user id 를 받아와야 함 
    // TODO : 변경된 API에 맞추어 코드 수정 필요
    // TODO : 코드 정리 필요
    getMyBookIdData = async () => {
        let tmp = [];
        for(let i = 0; i < this.props.books.length; i++){
            let bookId = this.props.books[i].id;
            for(let j = 0; j< this.props.myBookList.length; j++){
                if(bookId === this.props.myBookList[j].bookid){
                    tmp.push(this.props.books[i]);
                }
            }
        }
        this.props.checkMyBook('UPDATE_MY_BOOK_LIST', tmp);
        this.setState({
            isLoading: false
        })  
    }

    componentWillMount() {
        let user_id = this.props.userid;
        if(user_id != 'visitor')    
            this.getMyBookIdData();
    }
    
    render() {
        let list;   
        if(!this.state.isLoading) {
            list = this.props.myBook.map(
                book => (<BookContainer 
                        key={book.id} id={book.id} title={book.title} Title={book.Title} image={book.image}
                    />)
            )
        }
        return (
            <div>
                <h1>My Book list</h1>
                <div id="my_bookListbody">
                    {this.state.isLoading ? "isLoading ... " : list}
                </div>
            </div>
        )
    }
}
