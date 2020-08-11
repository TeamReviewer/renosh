import {createStore} from 'redux';

var initState = {
    books: [],
    selected_book_id: "bfe1019e-30e3-49f6-9f7a-b1b72ac8f38f",
    selected_cfiRange: "2",
    selected_annoList: [],
    selected_high_id:"",
    selected_high_text: "",
}

function reducer(state=initState, action) {
    if(action.type === 'INIT_BOOKS') {
        var newBooks = action.books;
        return{...state, books:newBooks}
    }
    if(action.type === 'SELECT_BOOK') {
        return{...state, selected_book_id:action.id, selected_annoList:action.annoList}
    }
    if(action.type === 'MOVE_EPUB') {
        return{...state, selected_cfiRange:action.cfiRange}
    }if(action.type === 'UPDATE_ANNOLIST') {
        return {...state, selected_annoList: action.annoList, selected_high_id: action.selected_high_id, selected_high_text: action.selected_high_text}
    }if(action.type === 'HIGHTEXT_TONULL'){
        return {...state, selected_high_id: '', selected_high_text: ''}
    }
    return state;
}

export default createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
