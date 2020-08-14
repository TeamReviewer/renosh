import React, { Component } from 'react'
import axios from 'axios'
import './MyBookList.css'
import BookContainer from '../../containers/ListPage/Book'; // TODO: BookContainer 값 변경

export default class MyBookList extends Component {
    state = {
        mybooksId: [],
        isLoading : true
    }

    getMyBookIdData = async () => {
        let user_id = this.props.id;  
        const myBookId = await axios.get(process.env.REACT_APP_RENOSH_BASE_URL+"api/users/" + user_id);

        this.setState({
        mybooksId: myBookId.data,
        isLoading: false
        })        
    }

    componentWillMount() {      
        this.getMyBookIdData();
    }

    render() {
        let list;
        if(!this.state.isLoading) {
            list = this.state.mybooksId.map(
                book => (<BookContainer 
                        key={book.id} id={book.id} title={book.title} Title={book.Title} image={book.image}
                    />)
            )
        }
        return (
            <div>
                <h1>My Book list</h1>
                <div id="my_book_list">
                    {this.state.isLoading ? "isLoading ... " : list}
                </div>
            </div>
        )
    }
}
