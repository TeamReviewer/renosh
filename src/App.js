import React, {Component} from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import './App.css';
import ListLayoutPage from './components/ListPage/ListLayout';
import InfoContainer from './containers/InfoPage/Info';
import EpubViewerContainer from './containers/EpubViewerPage/EpubViewer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/"></Link><br/>
          <Switch>
            <Route exact path="/" component={ListLayoutPage} ></Route>            
            <Route path="/bookInfo" component={InfoContainer} ></Route>
            <Route path="/epub" component={EpubViewerContainer}></Route>
          </Switch>          
        </div>
      </BrowserRouter>
    );
  }  
}

export default App;
