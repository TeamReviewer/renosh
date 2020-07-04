import React, {Component} from 'react';
import BookList from './BookList'
import ListForm from './ListForm'

class ListLayout extends Component {    
    render() {
        return (
            <div className="listLayout">
                <ListForm />
                <BookList />
            </div>  
        )
    }
}

export default ListLayout;