import React, { Component } from 'react'
import axios from 'axios'
import './MyBookList.css'
import { fireEvent } from '@testing-library/react'

export default class MyBookList extends Component {
    state = {
        mybooksId: [],
        mybook: [],
        isLoading : true
    }

    // TODO : 현재 user id 를 받아와야 함 
    // TODO : 코드 정리 필요
    getMyBookIdData = async () => {
        let user_id = "a00077aa-f413-455f-8bff-b0f99466f1c0";  
        const myBookData = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/" + user_id + "/my_book_list");
        const myBookId = myBookData.data[0].my_book_list;
        this.props.changeMyBookList('UPDATE_MY_BOOK_ID_LIST',myBookId);
        let tmp = new Array;
        for(let i = 0; i < this.props.books.length; i++){
            let bookId = this.props.books[i].id;
            for(let j = 0; j< this.props.myBookIdList.length; j++){
                if(this.props.books[i].id === this.props.myBookIdList[j]){
                    tmp.push(this.props.books[i]);
                }
            }
        }
        this.setState({
        mybooksId: myBookId.data,
        myBook: tmp,
        isLoading: false
        })   
        this.props.checkMyBook('UPDATE_MY_BOOK_LIST', this.state.myBook);
    }

    componentWillMount() {      
       this.getMyBookIdData();
    }
    
    render() {
        return (
            <div>
                <h1>My Book list</h1>
            </div>
        )
    }
}
