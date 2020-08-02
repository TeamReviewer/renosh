import React, {Component} from 'react';
import ListForm from './ListForm'
import BookListContainer from '../../containers/ListPage/BookList';

class ListLayout extends Component {    
    render() {
        return (
            <div className="listLayout">
                <ListForm />
                <BookListContainer />
            </div>  
        )
    }
}

export default ListLayout;