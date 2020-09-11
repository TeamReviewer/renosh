import React, {Component} from 'react';
import { BrowserRouter,Route, Switch } from "react-router-dom";
// import './App.css';
import './App.less';
import BookListPage from './components/ListPage/BookListContent'
import InfoContainer from './containers/InfoPage/Info';
import EpubViewerContainer from './containers/EpubViewerPage/EpubViewer';
import MyPageLayout from './components/MyPage/MyPageLayout';
// import ViewerPage from './components/EpubViewerPage/ViewerPage';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Link to="/"></Link><br/> */}
          <Switch>
            <Route exact path="/" component={BookListPage} ></Route>            
            <Route path="/bookInfo/:book_id" component={InfoContainer} ></Route>
            <Route path="/epub" component={EpubViewerContainer}></Route>
            {/* <Route path="/epub" component={ViewerPage}></Route> */}
            <Route path="/myPage" component={MyPageLayout}></Route>
          </Switch>          
        </div>
      </BrowserRouter>
    );
  }  
}

export default App;
