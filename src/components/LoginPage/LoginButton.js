import * as React from 'react';
import { AzureAD, LoginType, AuthenticationState } from 'react-aad-msal';
import store from '../../store';
import { authProvider } from './authProvider';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Space, Row, Col, Menu, Button, Popover, Typography, BackTop } from 'antd';

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
                {({login, logout, authenticationState, accountInfo})=>{
                    const isInProgress = authenticationState === AuthenticationState.InProgress;
                    const isAuthenticated = authenticationState === AuthenticationState.Authenticated;
                    const isUnauthenticated = authenticationState === AuthenticationState.Unauthenticated;

                    if (isAuthenticated) {
                        return (
                          <React.Fragment>
                            <Button onClick={logout} type="text" icon={<LogoutOutlined />}>Sign Out</Button>
                          </React.Fragment>
                        );
                      } else if (isUnauthenticated || isInProgress) {
                        return (
                            <Button onClick={login} disabled={isInProgress} type="text" icon={<LoginOutlined />} style={{color: "#2b335b"}}>Sign In</Button>
                        );
                    }
                }}
            </AzureAD>
        );
    }
}

export default LoginButton;