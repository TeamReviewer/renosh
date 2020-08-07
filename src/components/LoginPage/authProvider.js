import { MsalAuthProvider, LoginType } from "react-aad-msal";
import { Logger, LogLevel } from "msal";

export const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority: "https://renoshorg.b2clogin.com/tfp/renoshorg.onmicrosoft.com/b2c_1_signupsignin1/",
            clientId: "583e58eb-521b-4833-99cb-6bab85964436",
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
        loginType: LoginType.Popup,
        // When a token is refreshed it will be done by loading a page in an iframe.
        // Rather than reloading the same page, we can point to an empty html file which will prevent
        // site resources from being loaded twice.
        tokenRefreshUri: window.location.origin + "/auth.html"
    }
);