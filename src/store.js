import {createStore} from 'redux';

var initState = {

}

function reducer(state=initState, action) {
    return state;
}

export default createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());