import React, {Component} from 'react';
import BookList from './components/ListPage/BookList'
import ListForm from './components/ListPage/ListForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListForm />
        <BookList />
        <button id="moveViewerBodyComponent"  >moveViewerBodyComponent</button>
      </div>
    );
  }  
}

export default App;
