import React, { Component } from 'react'
import axios from 'axios'
import './MyBookList.css'

export default class MyBookList extends Component {
    state = {
        mybooksId: [],
        isLoading : true
    }

    // TODO : 현재 user id 를 받아와야 함 
    getMyBookIdData = async () => {
        let user_id = "a00077aa-f413-455f-8bff-b0f99466f1c0";  
        const myBookData = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/" + user_id + "/my_book_list");
        const myBookId = myBookData.data[0].my_book_list;
        this.props.changeMyBookList('UPDATE_MY_BOOK_ID_LIST',myBookId);
        this.setState({
        mybooksId: myBookId.data,
        isLoading: false
        })   
    }

    componentWillMount() {      
       this.getMyBookIdData();
    }
    
    // TODO 
    render() {
        
        return (
            <div>
                <h1>My Book list</h1>
            </div>
        )
    }
}
