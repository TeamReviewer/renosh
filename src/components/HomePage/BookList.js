import React, {Component} from 'react';
import './bookList.less'
import BookContainer from '../../containers/ListPage/Book';
import axios from 'axios'

class BookList extends Component {    
    state = {
        books: null,
        isLoading : true
    } 
    componentDidMount() {
        axios.get(process.env.REACT_APP_RENOSH_BASE_URL + "api/books").then(
            req => {
                this.setState({
                    books: req.data,
                    isLoading: false
                })  
                this.props.saveBooksToStore("INIT_BOOKS", req.data);
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
            <div id="bookList" >
                <div id="bookListbody">
                    {this.state.isLoading ? "isLoading ... " : list}
                </div>
            </div>
        )
        
       
    }
}

export default BookList;