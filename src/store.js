import {createStore} from 'redux';

var initState = {
    books: [],
    selected_book_id: null,

}

function reducer(state=initState, action) {
    if(action.type === 'SAVE_BOOKS') {
        var newBooks = action.books;
        return{...state, books:newBooks}
    }
    return state;
}

export default createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());