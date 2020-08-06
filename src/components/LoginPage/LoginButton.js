import * as React from 'react';
import { AzureAD, LoginType, AuthenticationState } from 'react-aad-msal';
import store from '../../store';
import { authProvider } from './authProvider';
class LoginButton extends React.Component {
    constructor(props){
        super(props);
        // Change the login type to execute in a Popup
        const options = authProvider.getProviderOptions();
        options.loginType = LoginType.Popup;
        authProvider.setProviderOptions(options);
    }
    
    render(){
        return(
            <AzureAD provider={authProvider} reduxStore={store}>
                {({login, logout, authenticationState})=>{
                    const isInProgress = authenticationState === AuthenticationState.InProgress;
                    const isAuthenticated = authenticationState === AuthenticationState.Authenticated;
                    const isUnauthenticated = authenticationState === AuthenticationState.Unauthenticated;

                    if (isAuthenticated) {
                        return (
                          <React.Fragment>
                            <p>You're logged in!</p>
                            <button onClick={logout} className="Button">
                              Logout
                            </button>
                      
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