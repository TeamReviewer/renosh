import React, { Component } from 'react'
import './myBookList.less'
import BookContainer from '../../containers/ListPage/Book';

export default class MyBookList extends Component {
    state = {
        isLoading : true
    }

    getMyBookIdData = async () => {
        this.props.checkMyBook('UPDATE_MY_BOOK', this.props.myBook);
        this.setState({
            isLoading: false
        })  
    }

    componentWillMount() {
        let user_id = this.props.userid;
        if(user_id !== 'visitor')    
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
