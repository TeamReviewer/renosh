import React, {Component} from 'react';
import './BookList.css'
import BookContainer from '../../containers/ListPage/Book';
import axios from 'axios'


class BookList extends Component {    
    state = {
        books: [],
        isLoading : true
    }

    getBookData = async () => {
        const books = await axios.get("https://renosh-server.azurewebsites.net/api/books");
        this.props.saveBooksToStore("INIT_BOOKS", books.data);

        this.setState({
            books: books.data,
            isLoading: false
        })        
    }

    componentWillMount() {
        this.getBookData();        
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
            <div id="bookList">
                <div id="bookListbody">
                    {this.state.isLoading ? "isLoading ... " : list}
                </div>
            </div>
        )
    }
}

export default BookList;