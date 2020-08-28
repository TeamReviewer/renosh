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
    getMyBookIdData = async (user_id) => {
        user_id = "a00077aa-f413-455f-8bff-b0f99466f1c0";  
        // let user_id = this.props.userid;
        const myBookData = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/" + user_id + "/my_book_list");
        // const myBookData = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/userbooklist/" + user_id + "/mybooklist");
        const myBookId = myBookData.data[0].my_book_list;
        this.props.changeMyBookList('UPDATE_MY_BOOK_ID_LIST',myBookId);
        let tmp = [];
        for(let i = 0; i < this.props.books.length; i++){
            let bookId = this.props.books[i].id;
            for(let j = 0; j< this.props.myBookIdList.length; j++){
                if(bookId === this.props.myBookIdList[j]){
                    tmp.push(this.props.books[i]);
                }
            }
        }
        this.setState({
            isLoading: false
        })  
        this.props.checkMyBook('UPDATE_MY_BOOK_LIST', tmp);
    }

    //TODO : if(user_id != 'visitor')일 때만 가능하도록 수정 필요
    componentWillMount() {
        let user_id = this.props.userid;
        //if(user_id != 'visitor')    
            this.getMyBookIdData(user_id);
    }
    
    render() {
        let list;   
        if(!this.state.isLoading) {
            list = this.props.myBookList.map(
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
