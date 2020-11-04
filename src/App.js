import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.less';
import BookListContentContainer from './containers/ListPage/BookListContent';
import InfoContainer from './containers/InfoPage/Info';
import EpubViewerContainer from './containers/EpubViewerPage/EpubViewer';
import MyPageLayout from './components/MyPage/MyPageLayout';
import store from './store';

class App extends Component {
  state = {
    isTouched : false
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App" onTouchStart={function(){
          if (!this.state.isTouched) {
            this.setState({isTouched : true});
            store.dispatch({type : 'CHANGE_DEVICE', isTouched : true});
            console.log("1. App 컴포넌트에 터치감지시작, store에 디스패치함");}
          }.bind(this)}>
          {/* <Link to="/"></Link><br/> */}
          <Switch>
            <Route exact path="/" component={BookListContentContainer} ></Route>            
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
