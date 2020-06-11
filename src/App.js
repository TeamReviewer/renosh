import React, {Component} from 'react';
import BookList from './components/ListPage/BookList'
import ListForm from './components/ListPage/ListForm'
import ViewrBody from './components/ViewerPage/ViewerBody'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ListForm />
        <BookList />
        <button id="moveViewerBodyComponent"  >moveViewerBodyComponent</button> */}
        <ViewrBody />
      </div>
    );
  }  
}

export default App;
