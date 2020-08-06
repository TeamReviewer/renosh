import { MsalAuthProvider, LoginType } from "react-aad-msal";
import { Logger, LogLevel } from "msal";

export const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority: "https://login.microsoftonline.com/common",
            clientId: "0f2c6253-3928-4fea-b131-bf6ef8f69e9c",
            postLogoutRedirectUri: window.location.origin,
            redirectUri: window.location.origin,
            validateAuthority: true,
            navigateToLoginRequestUrl: false
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: true
        }
    },
    {
      scopes: [
          "openid",
          "renoshorg.b2clogin.com"
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