import React, {Component} from 'react';
import DashBoard from './DashBoard'
import ListForm from './ListForm'
import BookListContainer from '../../containers/ListPage/BookList';

class ListLayout extends Component {    
    render() {
        return (
            <div className="listLayout">
                <DashBoard />
                <ListForm />
                <BookListContainer />
            </div>  
        )
    }
}

export default ListLayout;