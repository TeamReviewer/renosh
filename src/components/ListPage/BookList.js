import React, {Component} from 'react';
import Book from './Book';
import './BookList.css'
import axios from 'axios'

class BookList extends Component {
    
    state = {
        books: [],
        isLoading : true
    }

    getBookData = async () => {
        const books = await axios.get("http://renosh.koreacentral.cloudapp.azure.com:5000/api/books"); 
        console.log("books: ", books.data);

        this.setState({
            books: books.data,
            isLoading: false
        })
        // debugger;
        this.props.saveBooksToStore("SAVE_BOOKS", books.data);
    }

    componentDidMount() {
        this.getBookData();        
    }

    render() {    
        let list;    
        if(!this.state.isLoading) {
            list = this.state.books.map(
                book => (<Book image={book.image} title={book.title} key={book.id} />)
            )
        }
        return (
            <div id="bookList">
                <div id="bookListbody">
                    {this.state.isLoading ? "isLoading ... " : list}
                </div>
            </div>
        )
    }
}

export default BookList;