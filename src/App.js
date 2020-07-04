import React, {Component} from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import './App.css';
import ListLayoutPage from './components/ListPage/ListLayout'
import ViewerBody from './components/ViewerPage/ViewerBody'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/"></Link><br/>
          <Switch>
            <Route path="/book" component={ViewerBody} ></Route>
            <Route exact path="/" component={ListLayoutPage} ></Route>            

          </Switch>          
        </div>
      </BrowserRouter>
    );
  }  
}

export default App;
