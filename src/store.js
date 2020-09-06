import { createStore } from 'redux';
import { AuthenticationActions, AuthenticationState } from 'react-aad-msal';

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

var initState = {
    books: [],
    userBookList: [],
    myBookList: [],
    myBook: [],
    selected_book_id: "bfe1019e-30e3-49f6-9f7a-b1b72ac8f38f",
    selected_cfiRange: "2",
    selected_annoList: [],
    selected_high_id: "",
    selected_high_text: "",
    from_mypage: false,
    annoList_view_type: "others",

    // AAD B2C Related states
    initializing: false,
    initialized: false,
    idToken: null,
    accessToken: null,
    state: AuthenticationState.Unauthenticated
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'INIT_BOOKS':
            var newBooks = action.books;
            return { ...state, books: newBooks };
        case 'INIT_USER_BOOK_LIST':
            return { ...state, userBookList: action.user_book_list }
        case 'SELECT_BOOK':
            return { ...state, selected_book_id: action.id, selected_annoList: action.annoList, annoList_view_type: 'others' }
        case 'MOVE_EPUB':
            return { ...state, selected_cfiRange: action.cfiRange }
        case 'UPDATE_HIGHLIGHT':
            return { ...state, selected_high_id: action.selected_high_id, selected_high_text: action.selected_high_text }
        case 'HIGHLIGHT_TO_NULL':
            return { ...state, selected_high_id: '', selected_high_text: '' }
        case 'UPDATE_ANNOLIST':
            return { ...state, selected_annoList: action.annoList }
        case 'READ_MODE':
            return { ...state, from_mypage: action.from_mypage }
        case 'CHANGE_VIEW_MODE':
            return { ...state, selected_annoList: action.annoList, annoList_view_type: action.view_type }
        case 'UPDATE_MY_BOOK_LIST':
            return { ...state, myBookList: action.my_book_list }
        case 'UPDATE_MY_BOOK':
            return { ...state, myBook: action.my_book }
        case 'DELETE_ANNO':
            let newAnnoList = state.selected_annoList.filter((anno) => (anno.id !== action.anno_id))
            return { ...state,  selected_annoList: newAnnoList}
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
            return {
                ...state,
                accessToken: action.payload,
            };
        case AuthenticationActions.AcquiredAccessTokenError:
            return {
                ...state,
                accessToken: null,
            }
        case AuthenticationActions.LoginSuccess:
            return {
                ...state,
                account: action.payload.account,
            }
        case AuthenticationActions.LoginError:
        case AuthenticationActions.AcquiredIdTokenError:
        case AuthenticationActions.LogoutSuccess:
            return { ...state, idToken: null, accessToken: null, account: null };
        case AuthenticationActions.AuthenticatedStateChanged:
            return {
                ...state,
                state: action.payload,
            }
        default:
            return state;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
