import {createStore} from 'redux';

var initState = {
    books: [],
    selected_book_id: "bfe1019e-30e3-49f6-9f7a-b1b72ac8f38f",

}

function reducer(state=initState, action) {
    if(action.type === 'INIT_BOOKS') {
        var newBooks = action.books;
        return{...state, books:newBooks}
    }
    if(action.type === 'SELECT_BOOK') {
        return{...state, selected_book_id:action.id}
    }
    return state;
}

export default createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());