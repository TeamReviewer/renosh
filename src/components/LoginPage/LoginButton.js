import * as React from 'react';
import { AzureAD, LoginType, AuthenticationState } from 'react-aad-msal';
import store from '../../store';
import { authProvider } from './authProvider';
import axios from 'axios'

class LoginButton extends React.Component {
  constructor(props){
    super(props);
    // Change the login type to execute in a Popup
    const options = authProvider.getProviderOptions();
    options.loginType = LoginType.Popup;
    authProvider.setProviderOptions(options);
  }
  
  createUserBookListInServer = async (userid, username) => {
    console.log("created");
    const userBookList = await axios({
        method:'post',
        url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid,
        data:{
            userid: userid,
            username: username,
            mybooklist: [],
            wishlist: []
        }
    });
    return userBookList;
  }

  getUserBookListFromServer = async (userid) => {
    const userBookList = await axios({
        method:'get',
        url: process.env.REACT_APP_RENOSH_BASE_URL + "api/userbooklist/" + userid
    });
    return userBookList.data[0];
  }

  LoggedIn = () => {
    const userid = this.props.userid;
    const username = this.props.username;
    this.getUserBookListFromServer(userid).then((res) => {
        // console.log(res)
        if(res === undefined){
            this.createUserBookListInServer(userid, username);
            this.getUserBookListFromServer(userid)
        }
        this.props.initUserBookList('INIT_USER_BOOK_LIST', res);
        this.props.initMyBookList('UPDATE_MY_BOOK_LIST', res.mybooklist);
    });
  }

  render(){
    return(
      <AzureAD provider={authProvider} reduxStore={store}>
        {({login, logout, authenticationState, accountInfo})=>{
          const isInProgress = authenticationState === AuthenticationState.InProgress;
          const isAuthenticated = authenticationState === AuthenticationState.Authenticated;
          const isUnauthenticated = authenticationState === AuthenticationState.Unauthenticated;

          if (isAuthenticated) {
            if(this.props.username !== 'visitor')
              this.LoggedIn();
            return (
              <React.Fragment>
                {/* <p>
                <span style={{ fontWeight: 'bold' }}>ID Token:</span> {accountInfo.jwtIdToken}
                </p> */}
                <p>
                  You're logged in!
                  <br/>
                    <span style={{ fontWeight: 'bold' }}>Name:</span> {accountInfo.account.name} 
                  <br/>
                  <button onClick={logout} className="Button">
                    Logout
                  </button>
                </p>
              </React.Fragment>
            );
          } else if (isUnauthenticated || isInProgress) {
            return (
              <button className="Button" onClick={login} disabled={isInProgress}>
                Login
              </button>
            );
          }
        }}
      </AzureAD>
    );
  }
}

export default LoginButton;