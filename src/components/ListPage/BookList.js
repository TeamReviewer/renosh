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
        const {
            data:{
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        
        this.setState({
            books: movies,
            isLoading: false
        }, () => {
        
        } )

    }

    componentDidMount() {
        this.getBookData();
    }

    render() {    
        let list;    
        if(!this.state.isLoading) {
            list = this.state.books.map(
                book => (<Book image={book.medium_cover_image} title={book.title} key={book.id} />)
            )
        }
        return (
            <div id="bookList">
                <div id="bookListbody">                    
                    {
                    this.state.isLoading ? 
                    "isLoading ... " : 
                    list
                    }
                    
                </div>              
            </div>
        )
    }
}

export default BookList;