import {createStore} from 'redux';
import { AuthenticationActions, AuthenticationState } from 'react-aad-msal';

var initState = {
    books: [],
    selected_book_id: "bfe1019e-30e3-49f6-9f7a-b1b72ac8f38f",
    selected_cfiRange: "2",
    selected_annoList: [],

    // AAD B2C Related states
    initializing: false,
    initialized: false,
    idToken: null,
    accessToken: null,
    state: AuthenticationState.Unauthenticated
}

function reducer(state=initState, action) {
    // if(action.type === 'INIT_BOOKS') {
    //     var newBooks = action.books;
    //     return{...state, books:newBooks}
    // }
    // if(action.type === 'SELECT_BOOK') {
    //     return{...state, selected_book_id:action.id, selected_annoList:action.annoList}
    // }
    // if(action.type === 'MOVE_EPUB') {
    //     return{...state, selected_cfiRange:action.cfiRange}
    // }if(action.type === 'UPDATE_ANNOLIST') {
    //     return {...state, selected_annoList: action.annoList}
    // }
    // return state;
    switch(action.type){
        case 'INIT_BOOKS':
            var newBooks = action.books;
            return{...state, books:newBooks};
        case 'SELECT_BOOK':
            return{...state, selected_book_id:action.id, selected_annoList:action.annoList}
        case 'MOVE_EPUB':
            return{...state, selected_cfiRange:action.cfiRange}
        case 'UPDATE_ANNOLIST':
            return {...state, selected_annoList: action.annoList}
        case AuthenticationActions.Initializing:
            return {
                ...state,
                initializing: true,
                initialized: false,
            };
        case AuthenticationActions.Initialized:
            return {
                ...state,
                initializing: false,
                initialized: true,
            }
        case AuthenticationActions.AcquiredIdTokenSuccess:
            return {
                ...state,
                idToken: action.payload,
            };
        case AuthenticationActions.AcquiredAccessTokenSuccess:
            return{
                ...state,
                accessToken: action.payload,
            };
        case AuthenticationActions.AcquiredAccessTokenError:
            return{
                ...state,
                accessToken: null,
            }
        case AuthenticationActions.LoginSuccess:
            return{
                ...state,
                account: action.payload.account,
            }
        case AuthenticationActions.LoginError:
        case AuthenticationActions.AcquiredIdTokenError:
        case AuthenticationActions.LogoutSuccess:
            return { ...state, idToken:null, accessToken:null, account: null};
        case AuthenticationActions.AuthenticatedStateChanged:
            return {
                ...state,
                state: action.payload,
            }
        default:
            return state;
    }
}

export default createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
