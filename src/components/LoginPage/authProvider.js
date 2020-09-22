import { MsalAuthProvider, LoginType } from "react-aad-msal";
import { Logger, LogLevel } from "msal";

const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority: process.env.REACT_APP_AAD_B2C_SUSI_AUTHORITY,
            clientId: process.env.REACT_APP_AAD_B2C_CLIENT_ID,
            postLogoutRedirectUri: window.location.origin,
            redirectUri: window.location.origin,
            validateAuthority: false,
            navigateToLoginRequestUrl: false
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: true
        },
        system: {
            logger: new Logger(
              (logLevel, message, containsPii) => {
                console.log("[MSAL]", message);
              },
              {
                level: LogLevel.Verbose,
                piiLoggingEnabled: false
              }
            )
          },
    },
    {
      scopes: [
          "openid"
        ]
    },
    {
        loginType: LoginType.Redirect,
        // When a token is refreshed it will be done by loading a page in an iframe.
        // Rather than reloading the same page, we can point to an empty html file which will prevent
        // site resources from being loaded twice.
        tokenRefreshUri: window.location.origin + "/auth.html"
    }
);

function handleForgotPassword(error){
  if (error && error.errorMessage.indexOf('AADB2C90118') > -1) {
    authProvider.setAuthenticationParameters ({authority: process.env.REACT_APP_AAD_B2C_PSWD_AUTHORITY})
    authProvider.login()
  }
}

authProvider.registerErrorHandler(handleForgotPassword);
export default authProvider;