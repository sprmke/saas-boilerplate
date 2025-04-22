module.exports = {

"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthError": (()=>AuthError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class AuthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyError"] {
    constructor(params){
        super(params);
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = AuthError;
        Object.setPrototypeOf(this, AuthError.prototype);
    }
}
;
 //# sourceMappingURL=AuthError.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AUTO_SIGN_IN_EXCEPTION": (()=>AUTO_SIGN_IN_EXCEPTION),
    "DEVICE_METADATA_NOT_FOUND_EXCEPTION": (()=>DEVICE_METADATA_NOT_FOUND_EXCEPTION),
    "INVALID_APP_SCHEME_EXCEPTION": (()=>INVALID_APP_SCHEME_EXCEPTION),
    "INVALID_ORIGIN_EXCEPTION": (()=>INVALID_ORIGIN_EXCEPTION),
    "INVALID_PREFERRED_REDIRECT_EXCEPTION": (()=>INVALID_PREFERRED_REDIRECT_EXCEPTION),
    "INVALID_REDIRECT_EXCEPTION": (()=>INVALID_REDIRECT_EXCEPTION),
    "OAUTH_SIGNOUT_EXCEPTION": (()=>OAUTH_SIGNOUT_EXCEPTION),
    "TOKEN_REFRESH_EXCEPTION": (()=>TOKEN_REFRESH_EXCEPTION),
    "UNEXPECTED_SIGN_IN_INTERRUPTION_EXCEPTION": (()=>UNEXPECTED_SIGN_IN_INTERRUPTION_EXCEPTION),
    "USER_ALREADY_AUTHENTICATED_EXCEPTION": (()=>USER_ALREADY_AUTHENTICATED_EXCEPTION),
    "USER_UNAUTHENTICATED_EXCEPTION": (()=>USER_UNAUTHENTICATED_EXCEPTION),
    "invalidAppSchemeException": (()=>invalidAppSchemeException),
    "invalidOriginException": (()=>invalidOriginException),
    "invalidPreferredRedirectUrlException": (()=>invalidPreferredRedirectUrlException),
    "invalidRedirectException": (()=>invalidRedirectException)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const USER_UNAUTHENTICATED_EXCEPTION = 'UserUnAuthenticatedException';
const USER_ALREADY_AUTHENTICATED_EXCEPTION = 'UserAlreadyAuthenticatedException';
const DEVICE_METADATA_NOT_FOUND_EXCEPTION = 'DeviceMetadataNotFoundException';
const AUTO_SIGN_IN_EXCEPTION = 'AutoSignInException';
const INVALID_REDIRECT_EXCEPTION = 'InvalidRedirectException';
const INVALID_APP_SCHEME_EXCEPTION = 'InvalidAppSchemeException';
const INVALID_PREFERRED_REDIRECT_EXCEPTION = 'InvalidPreferredRedirectUrlException';
const invalidRedirectException = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
    name: INVALID_REDIRECT_EXCEPTION,
    message: 'signInRedirect or signOutRedirect had an invalid format or was not found.',
    recoverySuggestion: 'Please make sure the signIn/Out redirect in your oauth config is valid.'
});
const invalidAppSchemeException = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
    name: INVALID_APP_SCHEME_EXCEPTION,
    message: 'A valid non-http app scheme was not found in the config.',
    recoverySuggestion: 'Please make sure a valid custom app scheme is present in the config.'
});
const invalidPreferredRedirectUrlException = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
    name: INVALID_PREFERRED_REDIRECT_EXCEPTION,
    message: 'The given preferredRedirectUrl does not match any items in the redirectSignOutUrls array from the config.',
    recoverySuggestion: 'Please make sure a matching preferredRedirectUrl is provided.'
});
const INVALID_ORIGIN_EXCEPTION = 'InvalidOriginException';
const invalidOriginException = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
    name: INVALID_ORIGIN_EXCEPTION,
    message: 'redirect is coming from a different origin. The oauth flow needs to be initiated from the same origin',
    recoverySuggestion: 'Please call signInWithRedirect from the same origin.'
});
const OAUTH_SIGNOUT_EXCEPTION = 'OAuthSignOutException';
const TOKEN_REFRESH_EXCEPTION = 'TokenRefreshException';
const UNEXPECTED_SIGN_IN_INTERRUPTION_EXCEPTION = 'UnexpectedSignInInterruptionException';
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OAuthStorageKeys": (()=>OAuthStorageKeys),
    "assertAuthTokens": (()=>assertAuthTokens),
    "assertAuthTokensWithRefreshToken": (()=>assertAuthTokensWithRefreshToken),
    "assertDeviceMetadata": (()=>assertDeviceMetadata),
    "assertIdTokenInAuthTokens": (()=>assertIdTokenInAuthTokens),
    "isTypeUserPoolConfig": (()=>isTypeUserPoolConfig),
    "oAuthTokenRefreshException": (()=>oAuthTokenRefreshException),
    "tokenRefreshException": (()=>tokenRefreshException)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function isTypeUserPoolConfig(authConfig) {
    if (authConfig && authConfig.Cognito.userPoolId && authConfig.Cognito.userPoolClientId) {
        return true;
    }
    return false;
}
function assertAuthTokens(tokens) {
    if (!tokens || !tokens.accessToken) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_UNAUTHENTICATED_EXCEPTION"],
            message: 'User needs to be authenticated to call this API.',
            recoverySuggestion: 'Sign in before calling this API again.'
        });
    }
}
function assertIdTokenInAuthTokens(tokens) {
    if (!tokens || !tokens.idToken) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_UNAUTHENTICATED_EXCEPTION"],
            message: 'User needs to be authenticated to call this API.',
            recoverySuggestion: 'Sign in before calling this API again.'
        });
    }
}
const oAuthTokenRefreshException = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN_REFRESH_EXCEPTION"],
    message: `Token refresh is not supported when authenticated with the 'implicit grant' (token) oauth flow. 
	Please change your oauth configuration to use 'code grant' flow.`,
    recoverySuggestion: `Please logout and change your Amplify configuration to use "code grant" flow. 
	E.g { responseType: 'code' }`
});
const tokenRefreshException = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_UNAUTHENTICATED_EXCEPTION"],
    message: 'User needs to be authenticated to call this API.',
    recoverySuggestion: 'Sign in before calling this API again.'
});
function assertAuthTokensWithRefreshToken(tokens) {
    if (isAuthenticatedWithImplicitOauthFlow(tokens)) {
        throw oAuthTokenRefreshException;
    }
    if (!isAuthenticatedWithRefreshToken(tokens)) {
        throw tokenRefreshException;
    }
}
function assertDeviceMetadata(deviceMetadata) {
    if (!deviceMetadata || !deviceMetadata.deviceKey || !deviceMetadata.deviceGroupKey || !deviceMetadata.randomPassword) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEVICE_METADATA_NOT_FOUND_EXCEPTION"],
            message: 'Either deviceKey, deviceGroupKey or secretPassword were not found during the sign-in process.',
            recoverySuggestion: 'Make sure to not clear storage after calling the signIn API.'
        });
    }
}
const OAuthStorageKeys = {
    inflightOAuth: 'inflightOAuth',
    oauthSignIn: 'oauthSignIn',
    oauthPKCE: 'oauthPKCE',
    oauthState: 'oauthState'
};
function isAuthenticated(tokens) {
    return tokens?.accessToken || tokens?.idToken;
}
function isAuthenticatedWithRefreshToken(tokens) {
    return isAuthenticated(tokens) && tokens?.refreshToken;
}
function isAuthenticatedWithImplicitOauthFlow(tokens) {
    return isAuthenticated(tokens) && !tokens?.refreshToken;
}
;
 //# sourceMappingURL=types.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/internal/getCurrentUser.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCurrentUser": (()=>getCurrentUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getCurrentUser = async (amplify)=>{
    const authConfig = amplify.getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const tokens = await amplify.Auth.getTokens({
        forceRefresh: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAuthTokens"])(tokens);
    const { 'cognito:username': username, sub } = tokens.idToken?.payload ?? {};
    const authUser = {
        username: username,
        userId: sub
    };
    const signInDetails = getSignInDetailsFromTokens(tokens);
    if (signInDetails) {
        authUser.signInDetails = signInDetails;
    }
    return authUser;
};
function getSignInDetailsFromTokens(tokens) {
    return tokens?.signInDetails;
}
;
 //# sourceMappingURL=getCurrentUser.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/getCurrentUser.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCurrentUser": (()=>getCurrentUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$internal$2f$getCurrentUser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/internal/getCurrentUser.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Gets the current user from the idToken.
 *
 * @param input -  The GetCurrentUserInput object.
 * @returns GetCurrentUserOutput
 * @throws - {@link InitiateAuthException} - Thrown when the service fails to refresh the tokens.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ const getCurrentUser = async ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$internal$2f$getCurrentUser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"]);
};
;
 //# sourceMappingURL=getCurrentUser.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRegionFromIdentityPoolId": (()=>getRegionFromIdentityPoolId),
    "getRegionFromUserPoolId": (()=>getRegionFromUserPoolId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function getRegionFromUserPoolId(userPoolId) {
    const region = userPoolId?.split('_')[0];
    if (!userPoolId || userPoolId.indexOf('_') < 0 || !region || typeof region !== 'string') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
        name: 'InvalidUserPoolId',
        message: 'Invalid user pool id provided.'
    });
    return region;
}
function getRegionFromIdentityPoolId(identityPoolId) {
    if (!identityPoolId || !identityPoolId.includes(':')) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: 'InvalidIdentityPoolIdException',
            message: 'Invalid identity pool id provided.',
            recoverySuggestion: 'Make sure a valid identityPoolId is given in the config.'
        });
    }
    return identityPoolId.split(':')[0];
}
;
 //# sourceMappingURL=regionParsers.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "createUserPoolSerializer": (()=>createUserPoolSerializer)
});
const createUserPoolSerializer = (operation)=>(input, endpoint)=>{
        const headers = getSharedHeaders(operation);
        const body = JSON.stringify(input);
        return buildHttpRpcRequest(endpoint, headers, body);
    };
const getSharedHeaders = (operation)=>({
        'content-type': 'application/x-amz-json-1.1',
        'x-amz-target': `AWSCognitoIdentityProviderService.${operation}`
    });
const buildHttpRpcRequest = ({ url }, headers, body)=>({
        headers,
        url,
        body,
        method: 'POST'
    });
;
 //# sourceMappingURL=createUserPoolSerializer.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertServiceError": (()=>assertServiceError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertServiceError(error) {
    if (!error || error.name === 'Error' || error instanceof TypeError) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyErrorCode"].Unknown,
            message: 'An unknown error has occurred.',
            underlyingError: error
        });
    }
}
;
 //# sourceMappingURL=assertServiceError.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createUserPoolDeserializer": (()=>createUserPoolDeserializer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createUserPoolDeserializer = ()=>async (response)=>{
        if (response.statusCode >= 300) {
            const error = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonError"])(response);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(error);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: error.name,
                message: error.message,
                metadata: error.$metadata
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonBody"])(response);
    };
;
 //# sourceMappingURL=createUserPoolDeserializer.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cognitoUserPoolTransferHandler": (()=>cognitoUserPoolTransferHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$handlers$2f$aws$2f$unauthenticated$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/handlers/aws/unauthenticated.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * A Cognito Identity-specific middleware that disables caching for all requests.
 */ const disableCacheMiddlewareFactory = ()=>(next, _)=>async function disableCacheMiddleware(request) {
            request.headers['cache-control'] = 'no-store';
            return next(request);
        };
/**
 * A Cognito Identity-specific transfer handler that does NOT sign requests, and
 * disables caching.
 *
 * @internal
 */ const cognitoUserPoolTransferHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeTransferHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$handlers$2f$aws$2f$unauthenticated$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unauthenticatedHandler"], [
    disableCacheMiddlewareFactory
]);
;
 //# sourceMappingURL=cognitoUserPoolTransferHandler.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/constants.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * The service name used to sign requests if the API requires authentication.
 */ __turbopack_context__.s({
    "COGNITO_IDP_SERVICE_NAME": (()=>COGNITO_IDP_SERVICE_NAME)
});
const COGNITO_IDP_SERVICE_NAME = 'cognito-idp';
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_SERVICE_CLIENT_API_CONFIG": (()=>DEFAULT_SERVICE_CLIENT_API_CONFIG)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$defaultRetryDecider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/defaultRetryDecider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$jitteredBackoff$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/jitteredBackoff.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/constants.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_SERVICE_CLIENT_API_CONFIG = {
    service: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COGNITO_IDP_SERVICE_NAME"],
    retryDecider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$defaultRetryDecider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRetryDecider"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonError"]),
    computeDelay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$jitteredBackoff$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jitteredBackoff"],
    userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAmplifyUserAgent"])(),
    cache: 'no-store'
};
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createInitiateAuthClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createInitiateAuthClient": (()=>createInitiateAuthClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createInitiateAuthClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('InitiateAuth'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createInitiateAuthClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/cognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cognitoUserPoolEndpointResolver": (()=>cognitoUserPoolEndpointResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$endpoints$2f$getDnsSuffix$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/endpoints/getDnsSuffix.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/constants.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const cognitoUserPoolEndpointResolver = ({ region })=>({
        url: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyUrl"](`https://${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COGNITO_IDP_SERVICE_NAME"]}.${region}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$endpoints$2f$getDnsSuffix$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDnsSuffix"])(region)}`)
    });
;
 //# sourceMappingURL=cognitoUserPoolEndpointResolver.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCognitoUserPoolEndpointResolver": (()=>createCognitoUserPoolEndpointResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$cognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/cognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
;
;
const createCognitoUserPoolEndpointResolver = ({ endpointOverride })=>(input)=>{
        if (endpointOverride) {
            return {
                url: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyUrl"](endpointOverride)
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$cognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolEndpointResolver"])(input);
    };
;
 //# sourceMappingURL=createCognitoUserPoolEndpointResolver.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "getUserContextData": (()=>getUserContextData)
});
function getUserContextData({ username, userPoolId, userPoolClientId }) {
    if (typeof window === 'undefined') {
        return undefined;
    }
    const amazonCognitoAdvancedSecurityData = window.AmazonCognitoAdvancedSecurityData;
    if (typeof amazonCognitoAdvancedSecurityData === 'undefined') {
        return undefined;
    }
    const advancedSecurityData = amazonCognitoAdvancedSecurityData.getData(username, userPoolId, userPoolClientId);
    if (advancedSecurityData) {
        const userContextData = {
            EncodedData: advancedSecurityData
        };
        return userContextData;
    }
    return {};
}
;
 //# sourceMappingURL=userContextData.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/refreshAuthTokens.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "refreshAuthTokens": (()=>refreshAuthTokens),
    "refreshAuthTokensWithoutDedupe": (()=>refreshAuthTokensWithoutDedupe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$deDupeAsyncFunction$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/deDupeAsyncFunction.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createInitiateAuthClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const refreshAuthTokensFunction = async ({ tokens, authConfig, username })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig?.Cognito);
    const { userPoolId, userPoolClientId, userPoolEndpoint } = authConfig.Cognito;
    const region = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAuthTokensWithRefreshToken"])(tokens);
    const refreshTokenString = tokens.refreshToken;
    const AuthParameters = {
        REFRESH_TOKEN: refreshTokenString
    };
    if (tokens.deviceMetadata?.deviceKey) {
        AuthParameters.DEVICE_KEY = tokens.deviceMetadata.deviceKey;
    }
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const initiateAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitiateAuthClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const { AuthenticationResult } = await initiateAuth({
        region
    }, {
        ClientId: userPoolClientId,
        AuthFlow: 'REFRESH_TOKEN_AUTH',
        AuthParameters,
        UserContextData
    });
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(AuthenticationResult?.AccessToken ?? '');
    const idToken = AuthenticationResult?.IdToken ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(AuthenticationResult.IdToken) : undefined;
    const { iat } = accessToken.payload;
    // This should never happen. If it does, it's a bug from the service.
    if (!iat) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: 'iatNotFoundException',
            message: 'iat not found in access token'
        });
    }
    const clockDrift = iat * 1000 - new Date().getTime();
    return {
        accessToken,
        idToken,
        clockDrift,
        refreshToken: refreshTokenString,
        username
    };
};
const refreshAuthTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$deDupeAsyncFunction$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deDupeAsyncFunction"])(refreshAuthTokensFunction);
const refreshAuthTokensWithoutDedupe = refreshAuthTokensFunction;
;
 //# sourceMappingURL=refreshAuthTokens.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/types.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthTokenStorageKeys": (()=>AuthTokenStorageKeys)
});
const AuthTokenStorageKeys = {
    accessToken: 'accessToken',
    idToken: 'idToken',
    oidcProvider: 'oidcProvider',
    clockDrift: 'clockDrift',
    refreshToken: 'refreshToken',
    deviceKey: 'deviceKey',
    randomPasswordKey: 'randomPasswordKey',
    deviceGroupKey: 'deviceGroupKey',
    signInDetails: 'signInDetails',
    oauthMetadata: 'oauthMetadata'
};
;
 //# sourceMappingURL=types.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/errorHelpers.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TokenProviderErrorCode": (()=>TokenProviderErrorCode),
    "assert": (()=>assert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$createAssertionFunction$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var TokenProviderErrorCode;
(function(TokenProviderErrorCode) {
    TokenProviderErrorCode["InvalidAuthTokens"] = "InvalidAuthTokens";
})(TokenProviderErrorCode || (TokenProviderErrorCode = {}));
const tokenValidationErrorMap = {
    [TokenProviderErrorCode.InvalidAuthTokens]: {
        message: 'Invalid tokens.',
        recoverySuggestion: 'Make sure the tokens are valid.'
    }
};
const assert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$createAssertionFunction$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAssertionFunction"])(tokenValidationErrorMap);
;
 //# sourceMappingURL=errorHelpers.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/constants.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "AUTH_KEY_PREFIX": (()=>AUTH_KEY_PREFIX)
});
const AUTH_KEY_PREFIX = 'CognitoIdentityServiceProvider';
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultTokenStore": (()=>DefaultTokenStore),
    "createKeysForAuthStorage": (()=>createKeysForAuthStorage),
    "getAuthStorageKeys": (()=>getAuthStorageKeys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$errorHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/errorHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
class DefaultTokenStore {
    getKeyValueStorage() {
        if (!this.keyValueStorage) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: 'KeyValueStorageNotFoundException',
                message: 'KeyValueStorage was not found in TokenStore'
            });
        }
        return this.keyValueStorage;
    }
    setKeyValueStorage(keyValueStorage) {
        this.keyValueStorage = keyValueStorage;
    }
    setAuthConfig(authConfig) {
        this.authConfig = authConfig;
    }
    async loadTokens() {
        // TODO(v6): migration logic should be here
        // Reading V5 tokens old format
        try {
            const authKeys = await this.getAuthKeys();
            const accessTokenString = await this.getKeyValueStorage().getItem(authKeys.accessToken);
            if (!accessTokenString) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                    name: 'NoSessionFoundException',
                    message: 'Auth session was not found. Make sure to call signIn.'
                });
            }
            const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(accessTokenString);
            const itString = await this.getKeyValueStorage().getItem(authKeys.idToken);
            const idToken = itString ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(itString) : undefined;
            const refreshToken = await this.getKeyValueStorage().getItem(authKeys.refreshToken) ?? undefined;
            const clockDriftString = await this.getKeyValueStorage().getItem(authKeys.clockDrift) ?? '0';
            const clockDrift = Number.parseInt(clockDriftString);
            const signInDetails = await this.getKeyValueStorage().getItem(authKeys.signInDetails);
            const tokens = {
                accessToken,
                idToken,
                refreshToken,
                deviceMetadata: await this.getDeviceMetadata() ?? undefined,
                clockDrift,
                username: await this.getLastAuthUser()
            };
            if (signInDetails) {
                tokens.signInDetails = JSON.parse(signInDetails);
            }
            return tokens;
        } catch (err) {
            return null;
        }
    }
    async storeTokens(tokens) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$errorHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(tokens !== undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$errorHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenProviderErrorCode"].InvalidAuthTokens);
        const lastAuthUser = tokens.username;
        await this.getKeyValueStorage().setItem(this.getLastAuthUserKey(), lastAuthUser);
        const authKeys = await this.getAuthKeys();
        await this.getKeyValueStorage().setItem(authKeys.accessToken, tokens.accessToken.toString());
        if (tokens.idToken) {
            await this.getKeyValueStorage().setItem(authKeys.idToken, tokens.idToken.toString());
        } else {
            await this.getKeyValueStorage().removeItem(authKeys.idToken);
        }
        if (tokens.refreshToken) {
            await this.getKeyValueStorage().setItem(authKeys.refreshToken, tokens.refreshToken);
        } else {
            await this.getKeyValueStorage().removeItem(authKeys.refreshToken);
        }
        if (tokens.deviceMetadata) {
            if (tokens.deviceMetadata.deviceKey) {
                await this.getKeyValueStorage().setItem(authKeys.deviceKey, tokens.deviceMetadata.deviceKey);
            }
            if (tokens.deviceMetadata.deviceGroupKey) {
                await this.getKeyValueStorage().setItem(authKeys.deviceGroupKey, tokens.deviceMetadata.deviceGroupKey);
            }
            await this.getKeyValueStorage().setItem(authKeys.randomPasswordKey, tokens.deviceMetadata.randomPassword);
        }
        if (tokens.signInDetails) {
            await this.getKeyValueStorage().setItem(authKeys.signInDetails, JSON.stringify(tokens.signInDetails));
        } else {
            await this.getKeyValueStorage().removeItem(authKeys.signInDetails);
        }
        await this.getKeyValueStorage().setItem(authKeys.clockDrift, `${tokens.clockDrift}`);
    }
    async clearTokens() {
        const authKeys = await this.getAuthKeys();
        // Not calling clear because it can remove data that is not managed by AuthTokenStore
        await Promise.all([
            this.getKeyValueStorage().removeItem(authKeys.accessToken),
            this.getKeyValueStorage().removeItem(authKeys.idToken),
            this.getKeyValueStorage().removeItem(authKeys.clockDrift),
            this.getKeyValueStorage().removeItem(authKeys.refreshToken),
            this.getKeyValueStorage().removeItem(authKeys.signInDetails),
            this.getKeyValueStorage().removeItem(this.getLastAuthUserKey()),
            this.getKeyValueStorage().removeItem(authKeys.oauthMetadata)
        ]);
    }
    async getDeviceMetadata(username) {
        const authKeys = await this.getAuthKeys(username);
        const deviceKey = await this.getKeyValueStorage().getItem(authKeys.deviceKey);
        const deviceGroupKey = await this.getKeyValueStorage().getItem(authKeys.deviceGroupKey);
        const randomPassword = await this.getKeyValueStorage().getItem(authKeys.randomPasswordKey);
        return randomPassword && deviceGroupKey && deviceKey ? {
            deviceKey,
            deviceGroupKey,
            randomPassword
        } : null;
    }
    async clearDeviceMetadata(username) {
        const authKeys = await this.getAuthKeys(username);
        await Promise.all([
            this.getKeyValueStorage().removeItem(authKeys.deviceKey),
            this.getKeyValueStorage().removeItem(authKeys.deviceGroupKey),
            this.getKeyValueStorage().removeItem(authKeys.randomPasswordKey)
        ]);
    }
    async getAuthKeys(username) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.authConfig?.Cognito);
        const lastAuthUser = username ?? await this.getLastAuthUser();
        return createKeysForAuthStorage(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_KEY_PREFIX"], `${this.authConfig.Cognito.userPoolClientId}.${lastAuthUser}`);
    }
    getLastAuthUserKey() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.authConfig?.Cognito);
        const identifier = this.authConfig.Cognito.userPoolClientId;
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_KEY_PREFIX"]}.${identifier}.LastAuthUser`;
    }
    async getLastAuthUser() {
        const lastAuthUser = await this.getKeyValueStorage().getItem(this.getLastAuthUserKey()) ?? 'username';
        return lastAuthUser;
    }
    async setOAuthMetadata(metadata) {
        const { oauthMetadata: oauthMetadataKey } = await this.getAuthKeys();
        await this.getKeyValueStorage().setItem(oauthMetadataKey, JSON.stringify(metadata));
    }
    async getOAuthMetadata() {
        const { oauthMetadata: oauthMetadataKey } = await this.getAuthKeys();
        const oauthMetadata = await this.getKeyValueStorage().getItem(oauthMetadataKey);
        return oauthMetadata && JSON.parse(oauthMetadata);
    }
}
const createKeysForAuthStorage = (provider, identifier)=>{
    return getAuthStorageKeys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthTokenStorageKeys"])(`${provider}`, identifier);
};
function getAuthStorageKeys(authKeys) {
    const keys = Object.values({
        ...authKeys
    });
    return (prefix, identifier)=>keys.reduce((acc, authKey)=>({
                ...acc,
                [authKey]: `${prefix}.${identifier}.${authKey}`
            }), {});
}
;
 //# sourceMappingURL=TokenStore.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInWithRedirectStore.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultOAuthStore": (()=>DefaultOAuthStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$TokenStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const V5_HOSTED_UI_KEY = 'amplify-signin-with-hostedUI';
const name = 'CognitoIdentityServiceProvider';
class DefaultOAuthStore {
    constructor(keyValueStorage){
        this.keyValueStorage = keyValueStorage;
    }
    async clearOAuthInflightData() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        await Promise.all([
            this.keyValueStorage.removeItem(authKeys.inflightOAuth),
            this.keyValueStorage.removeItem(authKeys.oauthPKCE),
            this.keyValueStorage.removeItem(authKeys.oauthState)
        ]);
    }
    async clearOAuthData() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        await this.clearOAuthInflightData();
        await this.keyValueStorage.removeItem(V5_HOSTED_UI_KEY); // remove in case a customer migrated an App from v5 to v6
        return this.keyValueStorage.removeItem(authKeys.oauthSignIn);
    }
    loadOAuthState() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return this.keyValueStorage.getItem(authKeys.oauthState);
    }
    storeOAuthState(state) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return this.keyValueStorage.setItem(authKeys.oauthState, state);
    }
    loadPKCE() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return this.keyValueStorage.getItem(authKeys.oauthPKCE);
    }
    storePKCE(pkce) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return this.keyValueStorage.setItem(authKeys.oauthPKCE, pkce);
    }
    setAuthConfig(authConfigParam) {
        this.cognitoConfig = authConfigParam;
    }
    async loadOAuthInFlight() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return await this.keyValueStorage.getItem(authKeys.inflightOAuth) === 'true';
    }
    async storeOAuthInFlight(inflight) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        await this.keyValueStorage.setItem(authKeys.inflightOAuth, `${inflight}`);
    }
    async loadOAuthSignIn() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        const isLegacyHostedUISignIn = await this.keyValueStorage.getItem(V5_HOSTED_UI_KEY);
        const [isOAuthSignIn, preferPrivateSession] = (await this.keyValueStorage.getItem(authKeys.oauthSignIn))?.split(',') ?? [];
        return {
            isOAuthSignIn: isOAuthSignIn === 'true' || isLegacyHostedUISignIn === 'true',
            preferPrivateSession: preferPrivateSession === 'true'
        };
    }
    async storeOAuthSignIn(oauthSignIn, preferPrivateSession = false) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        await this.keyValueStorage.setItem(authKeys.oauthSignIn, `${oauthSignIn},${preferPrivateSession}`);
    }
}
const createKeysForAuthStorage = (provider, identifier)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$TokenStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthStorageKeys"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OAuthStorageKeys"])(provider, identifier);
};
;
 //# sourceMappingURL=signInWithRedirectStore.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "oAuthStore": (()=>oAuthStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInWithRedirectStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInWithRedirectStore.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const oAuthStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInWithRedirectStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultOAuthStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultStorage"]);
;
 //# sourceMappingURL=oAuthStore.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/inflightPromise.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "addInflightPromise": (()=>addInflightPromise),
    "resolveAndClearInflightPromises": (()=>resolveAndClearInflightPromises)
});
const inflightPromises = [];
const addInflightPromise = (resolver)=>{
    inflightPromises.push(resolver);
};
const resolveAndClearInflightPromises = ()=>{
    while(inflightPromises.length){
        inflightPromises.pop()?.();
    }
};
;
 //# sourceMappingURL=inflightPromise.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenOrchestrator.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TokenOrchestrator": (()=>TokenOrchestrator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isBrowser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/isBrowser.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isTokenExpired$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/isTokenExpired.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$inflightPromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/inflightPromise.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class TokenOrchestrator {
    constructor(){
        this.waitForInflightOAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isBrowser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])() ? async ()=>{
            if (!await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].loadOAuthInFlight()) {
                return;
            }
            if (this.inflightPromise) {
                return this.inflightPromise;
            }
            // when there is valid oauth config and there is an inflight oauth flow, try
            // to block async calls that require fetching tokens before the oauth flow completes
            // e.g. getCurrentUser, fetchAuthSession etc.
            this.inflightPromise = new Promise((resolve, _reject)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$inflightPromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addInflightPromise"])(resolve);
            });
            return this.inflightPromise;
        } : async ()=>{
        // no-op for non-browser environments
        };
    }
    setAuthConfig(authConfig) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].setAuthConfig(authConfig.Cognito);
        this.authConfig = authConfig;
    }
    setTokenRefresher(tokenRefresher) {
        this.tokenRefresher = tokenRefresher;
    }
    setAuthTokenStore(tokenStore) {
        this.tokenStore = tokenStore;
    }
    getTokenStore() {
        if (!this.tokenStore) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: 'EmptyTokenStoreException',
                message: 'TokenStore not set'
            });
        }
        return this.tokenStore;
    }
    getTokenRefresher() {
        if (!this.tokenRefresher) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: 'EmptyTokenRefresherException',
                message: 'TokenRefresher not set'
            });
        }
        return this.tokenRefresher;
    }
    async getTokens(options) {
        let tokens;
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(this.authConfig?.Cognito);
        } catch (_err) {
            // Token provider not configured
            return null;
        }
        await this.waitForInflightOAuth();
        this.inflightPromise = undefined;
        tokens = await this.getTokenStore().loadTokens();
        const username = await this.getTokenStore().getLastAuthUser();
        if (tokens === null) {
            return null;
        }
        const idTokenExpired = !!tokens?.idToken && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isTokenExpired$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenExpired"])({
            expiresAt: (tokens.idToken?.payload?.exp ?? 0) * 1000,
            clockDrift: tokens.clockDrift ?? 0
        });
        const accessTokenExpired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isTokenExpired$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenExpired"])({
            expiresAt: (tokens.accessToken?.payload?.exp ?? 0) * 1000,
            clockDrift: tokens.clockDrift ?? 0
        });
        if (options?.forceRefresh || idTokenExpired || accessTokenExpired) {
            tokens = await this.refreshTokens({
                tokens,
                username
            });
            if (tokens === null) {
                return null;
            }
        }
        return {
            accessToken: tokens?.accessToken,
            idToken: tokens?.idToken,
            signInDetails: tokens?.signInDetails
        };
    }
    async refreshTokens({ tokens, username }) {
        try {
            const { signInDetails } = tokens;
            const newTokens = await this.getTokenRefresher()({
                tokens,
                authConfig: this.authConfig,
                username
            });
            newTokens.signInDetails = signInDetails;
            await this.setTokens({
                tokens: newTokens
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].dispatch('auth', {
                event: 'tokenRefresh'
            }, 'Auth', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
            return newTokens;
        } catch (err) {
            return this.handleErrors(err);
        }
    }
    handleErrors(err) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(err);
        if (err.name !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyErrorCode"].NetworkError) {
            // TODO(v6): Check errors on client
            this.clearTokens();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].dispatch('auth', {
            event: 'tokenRefresh_failure',
            data: {
                error: err
            }
        }, 'Auth', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
        if (err.name.startsWith('NotAuthorizedException')) {
            return null;
        }
        throw err;
    }
    async setTokens({ tokens }) {
        return this.getTokenStore().storeTokens(tokens);
    }
    async clearTokens() {
        return this.getTokenStore().clearTokens();
    }
    getDeviceMetadata(username) {
        return this.getTokenStore().getDeviceMetadata(username);
    }
    clearDeviceMetadata(username) {
        return this.getTokenStore().clearDeviceMetadata(username);
    }
    setOAuthMetadata(metadata) {
        return this.getTokenStore().setOAuthMetadata(metadata);
    }
    getOAuthMetadata() {
        return this.getTokenStore().getOAuthMetadata();
    }
}
;
 //# sourceMappingURL=TokenOrchestrator.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/CognitoUserPoolsTokenProvider.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CognitoUserPoolsTokenProvider": (()=>CognitoUserPoolsTokenProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$refreshAuthTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/refreshAuthTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$TokenStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$TokenOrchestrator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenOrchestrator.mjs [app-ssr] (ecmascript)");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class CognitoUserPoolsTokenProvider {
    constructor(){
        this.authTokenStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$TokenStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTokenStore"]();
        this.authTokenStore.setKeyValueStorage(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultStorage"]);
        this.tokenOrchestrator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$TokenOrchestrator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenOrchestrator"]();
        this.tokenOrchestrator.setAuthTokenStore(this.authTokenStore);
        this.tokenOrchestrator.setTokenRefresher(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$refreshAuthTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["refreshAuthTokens"]);
    }
    getTokens({ forceRefresh } = {
        forceRefresh: false
    }) {
        return this.tokenOrchestrator.getTokens({
            forceRefresh
        });
    }
    setKeyValueStorage(keyValueStorage) {
        this.authTokenStore.setKeyValueStorage(keyValueStorage);
    }
    setAuthConfig(authConfig) {
        this.authTokenStore.setAuthConfig(authConfig);
        this.tokenOrchestrator.setAuthConfig(authConfig);
    }
}
;
 //# sourceMappingURL=CognitoUserPoolsTokenProvider.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cognitoUserPoolsTokenProvider": (()=>cognitoUserPoolsTokenProvider),
    "tokenOrchestrator": (()=>tokenOrchestrator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$CognitoUserPoolsTokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/CognitoUserPoolsTokenProvider.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * The default provider for the JWT access token and ID token issued from the configured Cognito user pool. It manages
 * the refresh and storage of the tokens. It stores the tokens in `window.localStorage` if available, and falls back to
 * in-memory storage if not.
 */ const cognitoUserPoolsTokenProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$CognitoUserPoolsTokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CognitoUserPoolsTokenProvider"]();
const { tokenOrchestrator } = cognitoUserPoolsTokenProvider;
;
 //# sourceMappingURL=tokenProvider.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/types.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "IdentityIdStorageKeys": (()=>IdentityIdStorageKeys)
});
const IdentityIdStorageKeys = {
    identityId: 'identityId'
};
;
 //# sourceMappingURL=types.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdStore.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultIdentityIdStore": (()=>DefaultIdentityIdStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$TokenStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/types.mjs [app-ssr] (ecmascript)");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsoleLogger"]('DefaultIdentityIdStore');
class DefaultIdentityIdStore {
    setAuthConfig(authConfigParam) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIdentityPoolIdConfig"])(authConfigParam.Cognito);
        this.authConfig = authConfigParam;
        this._authKeys = createKeysForAuthStorage('Cognito', authConfigParam.Cognito.identityPoolId);
    }
    constructor(keyValueStorage){
        this._authKeys = {};
        this._hasGuestIdentityId = false;
        this.keyValueStorage = keyValueStorage;
    }
    async loadIdentityId() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIdentityPoolIdConfig"])(this.authConfig?.Cognito);
        try {
            if (this._primaryIdentityId) {
                return {
                    id: this._primaryIdentityId,
                    type: 'primary'
                };
            } else {
                const storedIdentityId = await this.keyValueStorage.getItem(this._authKeys.identityId);
                if (storedIdentityId) {
                    this._hasGuestIdentityId = true;
                    return {
                        id: storedIdentityId,
                        type: 'guest'
                    };
                }
                return null;
            }
        } catch (err) {
            logger.log('Error getting stored IdentityId.', err);
            return null;
        }
    }
    async storeIdentityId(identity) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIdentityPoolIdConfig"])(this.authConfig?.Cognito);
        if (identity.type === 'guest') {
            this.keyValueStorage.setItem(this._authKeys.identityId, identity.id);
            // Clear in-memory storage of primary identityId
            this._primaryIdentityId = undefined;
            this._hasGuestIdentityId = true;
        } else {
            this._primaryIdentityId = identity.id;
            // Clear locally stored guest id
            if (this._hasGuestIdentityId) {
                this.keyValueStorage.removeItem(this._authKeys.identityId);
                this._hasGuestIdentityId = false;
            }
        }
    }
    async clearIdentityId() {
        this._primaryIdentityId = undefined;
        await this.keyValueStorage.removeItem(this._authKeys.identityId);
    }
}
const createKeysForAuthStorage = (provider, identifier)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$TokenStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthStorageKeys"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IdentityIdStorageKeys"])(`com.amplify.${provider}`, identifier);
};
;
 //# sourceMappingURL=IdentityIdStore.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/utils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formLoginsMap": (()=>formLoginsMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function formLoginsMap(idToken) {
    const issuer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(idToken).payload.iss;
    const res = {};
    if (!issuer) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: 'InvalidIdTokenException',
            message: 'Invalid Idtoken.'
        });
    }
    const domainName = issuer.replace(/(^\w+:|^)\/\//, '');
    res[domainName] = idToken;
    return res;
}
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdProvider.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cognitoIdentityIdProvider": (()=>cognitoIdentityIdProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$getId$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/getId.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Provides a Cognito identityId
 *
 * @param tokens - The AuthTokens received after SignIn
 * @returns string
 * @throws configuration exceptions: `InvalidIdentityPoolIdException`
 *  - Auth errors that may arise from misconfiguration.
 * @throws service exceptions: {@link GetIdException }
 */ async function cognitoIdentityIdProvider({ tokens, authConfig, identityIdStore }) {
    identityIdStore.setAuthConfig({
        Cognito: authConfig
    });
    // will return null only if there is no identityId cached or if there is an error retrieving it
    const identityId = await identityIdStore.loadIdentityId();
    if (identityId) {
        return identityId.id;
    }
    const logins = tokens?.idToken ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formLoginsMap"])(tokens.idToken.toString()) : {};
    const generatedIdentityId = await generateIdentityId(logins, authConfig);
    // Store generated identityId
    identityIdStore.storeIdentityId({
        id: generatedIdentityId,
        type: tokens ? 'primary' : 'guest'
    });
    return generatedIdentityId;
}
async function generateIdentityId(logins, authConfig) {
    const identityPoolId = authConfig?.identityPoolId;
    const region = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromIdentityPoolId"])(identityPoolId);
    // IdentityId is absent so get it using IdentityPoolId with Cognito's GetId API
    let idResult;
    // for a first-time user, this will return a brand new identity
    // for a returning user, this will retrieve the previous identity assocaited with the logins
    try {
        idResult = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$getId$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getId"])({
            region
        }, {
            IdentityPoolId: identityPoolId,
            Logins: logins
        })).IdentityId;
    } catch (e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(e);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"](e);
    }
    if (!idResult) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: 'GetIdResponseException',
            message: 'Received undefined response from getId operation',
            recoverySuggestion: 'Make sure to pass a valid identityPoolId in the configuration.'
        });
    }
    return idResult;
}
;
 //# sourceMappingURL=IdentityIdProvider.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/credentialsProvider.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CognitoAWSCredentialsAndIdentityIdProvider": (()=>CognitoAWSCredentialsAndIdentityIdProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$getCredentialsForIdentity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/getCredentialsForIdentity.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$IdentityIdProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsoleLogger"]('CognitoCredentialsProvider');
const CREDENTIALS_TTL = 50 * 60 * 1000; // 50 min, can be modified on config if required in the future
class CognitoAWSCredentialsAndIdentityIdProvider {
    constructor(identityIdStore){
        this._nextCredentialsRefresh = 0;
        this._identityIdStore = identityIdStore;
    }
    async clearCredentialsAndIdentityId() {
        logger.debug('Clearing out credentials and identityId');
        this._credentialsAndIdentityId = undefined;
        await this._identityIdStore.clearIdentityId();
    }
    async clearCredentials() {
        logger.debug('Clearing out in-memory credentials');
        this._credentialsAndIdentityId = undefined;
    }
    async getCredentialsAndIdentityId(getCredentialsOptions) {
        const isAuthenticated = getCredentialsOptions.authenticated;
        const { tokens } = getCredentialsOptions;
        const { authConfig } = getCredentialsOptions;
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIdentityPoolIdConfig"])(authConfig?.Cognito);
        } catch  {
            // No identity pool configured, skipping
            return;
        }
        if (!isAuthenticated && !authConfig.Cognito.allowGuestAccess) {
            // TODO(V6): return partial result like Native platforms
            return;
        }
        const { forceRefresh } = getCredentialsOptions;
        const tokenHasChanged = this.hasTokenChanged(tokens);
        const identityId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$IdentityIdProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoIdentityIdProvider"])({
            tokens,
            authConfig: authConfig.Cognito,
            identityIdStore: this._identityIdStore
        });
        // Clear cached credentials when forceRefresh is true OR the cache token has changed
        if (forceRefresh || tokenHasChanged) {
            this.clearCredentials();
        }
        if (!isAuthenticated) {
            return this.getGuestCredentials(identityId, authConfig.Cognito);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIdTokenInAuthTokens"])(tokens);
            return this.credsForOIDCTokens(authConfig.Cognito, tokens, identityId);
        }
    }
    async getGuestCredentials(identityId, authConfig) {
        // Return existing in-memory cached credentials only if it exists, is not past it's lifetime and is unauthenticated credentials
        if (this._credentialsAndIdentityId && !this.isPastTTL() && this._credentialsAndIdentityId.isAuthenticatedCreds === false) {
            logger.info('returning stored credentials as they neither past TTL nor expired.');
            return this._credentialsAndIdentityId;
        }
        // Clear to discard if any authenticated credentials are set and start with a clean slate
        this.clearCredentials();
        const region = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromIdentityPoolId"])(authConfig.identityPoolId);
        // use identityId to obtain guest credentials
        // save credentials in-memory
        // No logins params should be passed for guest creds:
        // https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html
        let clientResult;
        try {
            clientResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$getCredentialsForIdentity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCredentialsForIdentity"])({
                region
            }, {
                IdentityId: identityId
            });
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(e);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"](e);
        }
        if (clientResult?.Credentials?.AccessKeyId && clientResult?.Credentials?.SecretKey) {
            this._nextCredentialsRefresh = new Date().getTime() + CREDENTIALS_TTL;
            const res = {
                credentials: {
                    accessKeyId: clientResult.Credentials.AccessKeyId,
                    secretAccessKey: clientResult.Credentials.SecretKey,
                    sessionToken: clientResult.Credentials.SessionToken,
                    expiration: clientResult.Credentials.Expiration
                },
                identityId
            };
            if (clientResult.IdentityId) {
                res.identityId = clientResult.IdentityId;
                this._identityIdStore.storeIdentityId({
                    id: clientResult.IdentityId,
                    type: 'guest'
                });
            }
            this._credentialsAndIdentityId = {
                ...res,
                isAuthenticatedCreds: false
            };
            return res;
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: 'CredentialsNotFoundException',
                message: `Cognito did not respond with either Credentials, AccessKeyId or SecretKey.`
            });
        }
    }
    async credsForOIDCTokens(authConfig, authTokens, identityId) {
        if (this._credentialsAndIdentityId && !this.isPastTTL() && this._credentialsAndIdentityId.isAuthenticatedCreds === true) {
            logger.debug('returning stored credentials as they neither past TTL nor expired.');
            return this._credentialsAndIdentityId;
        }
        // Clear to discard if any unauthenticated credentials are set and start with a clean slate
        this.clearCredentials();
        const logins = authTokens.idToken ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formLoginsMap"])(authTokens.idToken.toString()) : {};
        const region = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromIdentityPoolId"])(authConfig.identityPoolId);
        let clientResult;
        try {
            clientResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$getCredentialsForIdentity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCredentialsForIdentity"])({
                region
            }, {
                IdentityId: identityId,
                Logins: logins
            });
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(e);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"](e);
        }
        if (clientResult?.Credentials?.AccessKeyId && clientResult?.Credentials?.SecretKey) {
            this._nextCredentialsRefresh = new Date().getTime() + CREDENTIALS_TTL;
            const res = {
                credentials: {
                    accessKeyId: clientResult.Credentials.AccessKeyId,
                    secretAccessKey: clientResult.Credentials.SecretKey,
                    sessionToken: clientResult.Credentials.SessionToken,
                    expiration: clientResult.Credentials.Expiration
                },
                identityId
            };
            if (clientResult.IdentityId) {
                res.identityId = clientResult.IdentityId;
                // note: the following call removes guest identityId from the persistent store (localStorage)
                this._identityIdStore.storeIdentityId({
                    id: clientResult.IdentityId,
                    type: 'primary'
                });
            }
            // Store the credentials in-memory along with the expiration
            this._credentialsAndIdentityId = {
                ...res,
                isAuthenticatedCreds: true,
                associatedIdToken: authTokens.idToken?.toString()
            };
            return res;
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: 'CredentialsException',
                message: `Cognito did not respond with either Credentials, AccessKeyId or SecretKey.`
            });
        }
    }
    isPastTTL() {
        return this._nextCredentialsRefresh === undefined ? true : this._nextCredentialsRefresh <= Date.now();
    }
    hasTokenChanged(tokens) {
        return !!tokens && !!this._credentialsAndIdentityId?.associatedIdToken && tokens.idToken?.toString() !== this._credentialsAndIdentityId.associatedIdToken;
    }
}
;
 //# sourceMappingURL=credentialsProvider.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cognitoCredentialsProvider": (()=>cognitoCredentialsProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$IdentityIdStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$credentialsProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/credentialsProvider.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Cognito specific implmentation of the CredentialsProvider interface
 * that manages setting and getting of AWS Credentials.
 *
 * @throws configuration expections: `InvalidIdentityPoolIdException`
 *  - Auth errors that may arise from misconfiguration.
 * @throws service expections: {@link GetCredentialsForIdentityException}, {@link GetIdException}
 *
 */ const cognitoCredentialsProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$credentialsProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CognitoAWSCredentialsAndIdentityIdProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$credentialsProvider$2f$IdentityIdStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultIdentityIdStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultStorage"]));
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/types/errors.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "AssociateSoftwareTokenException": (()=>AssociateSoftwareTokenException),
    "ChangePasswordException": (()=>ChangePasswordException),
    "ConfirmDeviceException": (()=>ConfirmDeviceException),
    "ConfirmForgotPasswordException": (()=>ConfirmForgotPasswordException),
    "ConfirmSignUpException": (()=>ConfirmSignUpException),
    "DeleteUserAttributesException": (()=>DeleteUserAttributesException),
    "DeleteUserException": (()=>DeleteUserException),
    "ForgetDeviceException": (()=>ForgetDeviceException),
    "ForgotPasswordException": (()=>ForgotPasswordException),
    "GetCredentialsForIdentityException": (()=>GetCredentialsForIdentityException),
    "GetIdException": (()=>GetIdException),
    "GetUserAttributeVerificationException": (()=>GetUserAttributeVerificationException),
    "GetUserException": (()=>GetUserException),
    "GlobalSignOutException": (()=>GlobalSignOutException),
    "InitiateAuthException": (()=>InitiateAuthException),
    "ListDevicesException": (()=>ListDevicesException),
    "ResendConfirmationException": (()=>ResendConfirmationException),
    "RespondToAuthChallengeException": (()=>RespondToAuthChallengeException),
    "SETUP_TOTP_EXCEPTION": (()=>SETUP_TOTP_EXCEPTION),
    "SetUserMFAPreferenceException": (()=>SetUserMFAPreferenceException),
    "SignUpException": (()=>SignUpException),
    "UpdateDeviceStatusException": (()=>UpdateDeviceStatusException),
    "UpdateUserAttributesException": (()=>UpdateUserAttributesException),
    "VerifySoftwareTokenException": (()=>VerifySoftwareTokenException),
    "VerifyUserAttributeException": (()=>VerifyUserAttributeException)
});
var AssociateSoftwareTokenException;
(function(AssociateSoftwareTokenException) {
    AssociateSoftwareTokenException["ConcurrentModificationException"] = "ConcurrentModificationException";
    AssociateSoftwareTokenException["ForbiddenException"] = "ForbiddenException";
    AssociateSoftwareTokenException["InternalErrorException"] = "InternalErrorException";
    AssociateSoftwareTokenException["InvalidParameterException"] = "InvalidParameterException";
    AssociateSoftwareTokenException["NotAuthorizedException"] = "NotAuthorizedException";
    AssociateSoftwareTokenException["ResourceNotFoundException"] = "ResourceNotFoundException";
    AssociateSoftwareTokenException["SoftwareTokenMFANotFoundException"] = "SoftwareTokenMFANotFoundException";
})(AssociateSoftwareTokenException || (AssociateSoftwareTokenException = {}));
var ChangePasswordException;
(function(ChangePasswordException) {
    ChangePasswordException["ForbiddenException"] = "ForbiddenException";
    ChangePasswordException["InternalErrorException"] = "InternalErrorException";
    ChangePasswordException["InvalidParameterException"] = "InvalidParameterException";
    ChangePasswordException["InvalidPasswordException"] = "InvalidPasswordException";
    ChangePasswordException["LimitExceededException"] = "LimitExceededException";
    ChangePasswordException["NotAuthorizedException"] = "NotAuthorizedException";
    ChangePasswordException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    ChangePasswordException["ResourceNotFoundException"] = "ResourceNotFoundException";
    ChangePasswordException["TooManyRequestsException"] = "TooManyRequestsException";
    ChangePasswordException["UserNotConfirmedException"] = "UserNotConfirmedException";
    ChangePasswordException["UserNotFoundException"] = "UserNotFoundException";
})(ChangePasswordException || (ChangePasswordException = {}));
var ConfirmDeviceException;
(function(ConfirmDeviceException) {
    ConfirmDeviceException["ForbiddenException"] = "ForbiddenException";
    ConfirmDeviceException["InternalErrorException"] = "InternalErrorException";
    ConfirmDeviceException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    ConfirmDeviceException["InvalidParameterException"] = "InvalidParameterException";
    ConfirmDeviceException["InvalidPasswordException"] = "InvalidPasswordException";
    ConfirmDeviceException["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
    ConfirmDeviceException["NotAuthorizedException"] = "NotAuthorizedException";
    ConfirmDeviceException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    ConfirmDeviceException["ResourceNotFoundException"] = "ResourceNotFoundException";
    ConfirmDeviceException["TooManyRequestsException"] = "TooManyRequestsException";
    ConfirmDeviceException["UsernameExistsException"] = "UsernameExistsException";
    ConfirmDeviceException["UserNotConfirmedException"] = "UserNotConfirmedException";
    ConfirmDeviceException["UserNotFoundException"] = "UserNotFoundException";
})(ConfirmDeviceException || (ConfirmDeviceException = {}));
var ConfirmForgotPasswordException;
(function(ConfirmForgotPasswordException) {
    ConfirmForgotPasswordException["CodeMismatchException"] = "CodeMismatchException";
    ConfirmForgotPasswordException["ExpiredCodeException"] = "ExpiredCodeException";
    ConfirmForgotPasswordException["ForbiddenException"] = "ForbiddenException";
    ConfirmForgotPasswordException["InternalErrorException"] = "InternalErrorException";
    ConfirmForgotPasswordException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    ConfirmForgotPasswordException["InvalidParameterException"] = "InvalidParameterException";
    ConfirmForgotPasswordException["InvalidPasswordException"] = "InvalidPasswordException";
    ConfirmForgotPasswordException["LimitExceededException"] = "LimitExceededException";
    ConfirmForgotPasswordException["NotAuthorizedException"] = "NotAuthorizedException";
    ConfirmForgotPasswordException["ResourceNotFoundException"] = "ResourceNotFoundException";
    ConfirmForgotPasswordException["TooManyFailedAttemptsException"] = "TooManyFailedAttemptsException";
    ConfirmForgotPasswordException["TooManyRequestsException"] = "TooManyRequestsException";
    ConfirmForgotPasswordException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    ConfirmForgotPasswordException["UserLambdaValidationException"] = "UserLambdaValidationException";
    ConfirmForgotPasswordException["UserNotConfirmedException"] = "UserNotConfirmedException";
    ConfirmForgotPasswordException["UserNotFoundException"] = "UserNotFoundException";
})(ConfirmForgotPasswordException || (ConfirmForgotPasswordException = {}));
var ConfirmSignUpException;
(function(ConfirmSignUpException) {
    ConfirmSignUpException["AliasExistsException"] = "AliasExistsException";
    ConfirmSignUpException["CodeMismatchException"] = "CodeMismatchException";
    ConfirmSignUpException["ExpiredCodeException"] = "ExpiredCodeException";
    ConfirmSignUpException["ForbiddenException"] = "ForbiddenException";
    ConfirmSignUpException["InternalErrorException"] = "InternalErrorException";
    ConfirmSignUpException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    ConfirmSignUpException["InvalidParameterException"] = "InvalidParameterException";
    ConfirmSignUpException["LimitExceededException"] = "LimitExceededException";
    ConfirmSignUpException["NotAuthorizedException"] = "NotAuthorizedException";
    ConfirmSignUpException["ResourceNotFoundException"] = "ResourceNotFoundException";
    ConfirmSignUpException["TooManyFailedAttemptsException"] = "TooManyFailedAttemptsException";
    ConfirmSignUpException["TooManyRequestsException"] = "TooManyRequestsException";
    ConfirmSignUpException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    ConfirmSignUpException["UserLambdaValidationException"] = "UserLambdaValidationException";
    ConfirmSignUpException["UserNotFoundException"] = "UserNotFoundException";
})(ConfirmSignUpException || (ConfirmSignUpException = {}));
var DeleteUserAttributesException;
(function(DeleteUserAttributesException) {
    DeleteUserAttributesException["ForbiddenException"] = "ForbiddenException";
    DeleteUserAttributesException["InternalErrorException"] = "InternalErrorException";
    DeleteUserAttributesException["InvalidParameterException"] = "InvalidParameterException";
    DeleteUserAttributesException["NotAuthorizedException"] = "NotAuthorizedException";
    DeleteUserAttributesException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    DeleteUserAttributesException["ResourceNotFoundException"] = "ResourceNotFoundException";
    DeleteUserAttributesException["TooManyRequestsException"] = "TooManyRequestsException";
    DeleteUserAttributesException["UserNotConfirmedException"] = "UserNotConfirmedException";
    DeleteUserAttributesException["UserNotFoundException"] = "UserNotFoundException";
})(DeleteUserAttributesException || (DeleteUserAttributesException = {}));
var DeleteUserException;
(function(DeleteUserException) {
    DeleteUserException["ForbiddenException"] = "ForbiddenException";
    DeleteUserException["InternalErrorException"] = "InternalErrorException";
    DeleteUserException["InvalidParameterException"] = "InvalidParameterException";
    DeleteUserException["NotAuthorizedException"] = "NotAuthorizedException";
    DeleteUserException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    DeleteUserException["ResourceNotFoundException"] = "ResourceNotFoundException";
    DeleteUserException["TooManyRequestsException"] = "TooManyRequestsException";
    DeleteUserException["UserNotConfirmedException"] = "UserNotConfirmedException";
    DeleteUserException["UserNotFoundException"] = "UserNotFoundException";
})(DeleteUserException || (DeleteUserException = {}));
var ForgetDeviceException;
(function(ForgetDeviceException) {
    ForgetDeviceException["ForbiddenException"] = "ForbiddenException";
    ForgetDeviceException["InternalErrorException"] = "InternalErrorException";
    ForgetDeviceException["InvalidParameterException"] = "InvalidParameterException";
    ForgetDeviceException["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
    ForgetDeviceException["NotAuthorizedException"] = "NotAuthorizedException";
    ForgetDeviceException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    ForgetDeviceException["ResourceNotFoundException"] = "ResourceNotFoundException";
    ForgetDeviceException["TooManyRequestsException"] = "TooManyRequestsException";
    ForgetDeviceException["UserNotConfirmedException"] = "UserNotConfirmedException";
    ForgetDeviceException["UserNotFoundException"] = "UserNotFoundException";
})(ForgetDeviceException || (ForgetDeviceException = {}));
var ForgotPasswordException;
(function(ForgotPasswordException) {
    ForgotPasswordException["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
    ForgotPasswordException["ForbiddenException"] = "ForbiddenException";
    ForgotPasswordException["InternalErrorException"] = "InternalErrorException";
    ForgotPasswordException["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
    ForgotPasswordException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    ForgotPasswordException["InvalidParameterException"] = "InvalidParameterException";
    ForgotPasswordException["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
    ForgotPasswordException["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
    ForgotPasswordException["LimitExceededException"] = "LimitExceededException";
    ForgotPasswordException["NotAuthorizedException"] = "NotAuthorizedException";
    ForgotPasswordException["ResourceNotFoundException"] = "ResourceNotFoundException";
    ForgotPasswordException["TooManyRequestsException"] = "TooManyRequestsException";
    ForgotPasswordException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    ForgotPasswordException["UserLambdaValidationException"] = "UserLambdaValidationException";
    ForgotPasswordException["UserNotFoundException"] = "UserNotFoundException";
})(ForgotPasswordException || (ForgotPasswordException = {}));
var GetUserException;
(function(GetUserException) {
    GetUserException["ForbiddenException"] = "ForbiddenException";
    GetUserException["InternalErrorException"] = "InternalErrorException";
    GetUserException["InvalidParameterException"] = "InvalidParameterException";
    GetUserException["NotAuthorizedException"] = "NotAuthorizedException";
    GetUserException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    GetUserException["ResourceNotFoundException"] = "ResourceNotFoundException";
    GetUserException["TooManyRequestsException"] = "TooManyRequestsException";
    GetUserException["UserNotConfirmedException"] = "UserNotConfirmedException";
    GetUserException["UserNotFoundException"] = "UserNotFoundException";
})(GetUserException || (GetUserException = {}));
var GetIdException;
(function(GetIdException) {
    GetIdException["ExternalServiceException"] = "ExternalServiceException";
    GetIdException["InternalErrorException"] = "InternalErrorException";
    GetIdException["InvalidParameterException"] = "InvalidParameterException";
    GetIdException["LimitExceededException"] = "LimitExceededException";
    GetIdException["NotAuthorizedException"] = "NotAuthorizedException";
    GetIdException["ResourceConflictException"] = "ResourceConflictException";
    GetIdException["ResourceNotFoundException"] = "ResourceNotFoundException";
    GetIdException["TooManyRequestsException"] = "TooManyRequestsException";
})(GetIdException || (GetIdException = {}));
var GetCredentialsForIdentityException;
(function(GetCredentialsForIdentityException) {
    GetCredentialsForIdentityException["ExternalServiceException"] = "ExternalServiceException";
    GetCredentialsForIdentityException["InternalErrorException"] = "InternalErrorException";
    GetCredentialsForIdentityException["InvalidIdentityPoolConfigurationException"] = "InvalidIdentityPoolConfigurationException";
    GetCredentialsForIdentityException["InvalidParameterException"] = "InvalidParameterException";
    GetCredentialsForIdentityException["NotAuthorizedException"] = "NotAuthorizedException";
    GetCredentialsForIdentityException["ResourceConflictException"] = "ResourceConflictException";
    GetCredentialsForIdentityException["ResourceNotFoundException"] = "ResourceNotFoundException";
    GetCredentialsForIdentityException["TooManyRequestsException"] = "TooManyRequestsException";
})(GetCredentialsForIdentityException || (GetCredentialsForIdentityException = {}));
var GetUserAttributeVerificationException;
(function(GetUserAttributeVerificationException) {
    GetUserAttributeVerificationException["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
    GetUserAttributeVerificationException["ForbiddenException"] = "ForbiddenException";
    GetUserAttributeVerificationException["InternalErrorException"] = "InternalErrorException";
    GetUserAttributeVerificationException["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
    GetUserAttributeVerificationException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    GetUserAttributeVerificationException["InvalidParameterException"] = "InvalidParameterException";
    GetUserAttributeVerificationException["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
    GetUserAttributeVerificationException["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
    GetUserAttributeVerificationException["LimitExceededException"] = "LimitExceededException";
    GetUserAttributeVerificationException["NotAuthorizedException"] = "NotAuthorizedException";
    GetUserAttributeVerificationException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    GetUserAttributeVerificationException["ResourceNotFoundException"] = "ResourceNotFoundException";
    GetUserAttributeVerificationException["TooManyRequestsException"] = "TooManyRequestsException";
    GetUserAttributeVerificationException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    GetUserAttributeVerificationException["UserLambdaValidationException"] = "UserLambdaValidationException";
    GetUserAttributeVerificationException["UserNotConfirmedException"] = "UserNotConfirmedException";
    GetUserAttributeVerificationException["UserNotFoundException"] = "UserNotFoundException";
})(GetUserAttributeVerificationException || (GetUserAttributeVerificationException = {}));
var GlobalSignOutException;
(function(GlobalSignOutException) {
    GlobalSignOutException["ForbiddenException"] = "ForbiddenException";
    GlobalSignOutException["InternalErrorException"] = "InternalErrorException";
    GlobalSignOutException["InvalidParameterException"] = "InvalidParameterException";
    GlobalSignOutException["NotAuthorizedException"] = "NotAuthorizedException";
    GlobalSignOutException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    GlobalSignOutException["ResourceNotFoundException"] = "ResourceNotFoundException";
    GlobalSignOutException["TooManyRequestsException"] = "TooManyRequestsException";
    GlobalSignOutException["UserNotConfirmedException"] = "UserNotConfirmedException";
})(GlobalSignOutException || (GlobalSignOutException = {}));
var InitiateAuthException;
(function(InitiateAuthException) {
    InitiateAuthException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    InitiateAuthException["ForbiddenException"] = "ForbiddenException";
    InitiateAuthException["InternalErrorException"] = "InternalErrorException";
    InitiateAuthException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    InitiateAuthException["InvalidParameterException"] = "InvalidParameterException";
    InitiateAuthException["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
    InitiateAuthException["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
    InitiateAuthException["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
    InitiateAuthException["NotAuthorizedException"] = "NotAuthorizedException";
    InitiateAuthException["ResourceNotFoundException"] = "ResourceNotFoundException";
    InitiateAuthException["TooManyRequestsException"] = "TooManyRequestsException";
    InitiateAuthException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    InitiateAuthException["UserLambdaValidationException"] = "UserLambdaValidationException";
    InitiateAuthException["UserNotConfirmedException"] = "UserNotConfirmedException";
    InitiateAuthException["UserNotFoundException"] = "UserNotFoundException";
})(InitiateAuthException || (InitiateAuthException = {}));
var ResendConfirmationException;
(function(ResendConfirmationException) {
    ResendConfirmationException["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
    ResendConfirmationException["ForbiddenException"] = "ForbiddenException";
    ResendConfirmationException["InternalErrorException"] = "InternalErrorException";
    ResendConfirmationException["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
    ResendConfirmationException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    ResendConfirmationException["InvalidParameterException"] = "InvalidParameterException";
    ResendConfirmationException["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
    ResendConfirmationException["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
    ResendConfirmationException["LimitExceededException"] = "LimitExceededException";
    ResendConfirmationException["NotAuthorizedException"] = "NotAuthorizedException";
    ResendConfirmationException["ResourceNotFoundException"] = "ResourceNotFoundException";
    ResendConfirmationException["TooManyRequestsException"] = "TooManyRequestsException";
    ResendConfirmationException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    ResendConfirmationException["UserLambdaValidationException"] = "UserLambdaValidationException";
    ResendConfirmationException["UserNotFoundException"] = "UserNotFoundException";
})(ResendConfirmationException || (ResendConfirmationException = {}));
var RespondToAuthChallengeException;
(function(RespondToAuthChallengeException) {
    RespondToAuthChallengeException["AliasExistsException"] = "AliasExistsException";
    RespondToAuthChallengeException["CodeMismatchException"] = "CodeMismatchException";
    RespondToAuthChallengeException["ExpiredCodeException"] = "ExpiredCodeException";
    RespondToAuthChallengeException["ForbiddenException"] = "ForbiddenException";
    RespondToAuthChallengeException["InternalErrorException"] = "InternalErrorException";
    RespondToAuthChallengeException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    RespondToAuthChallengeException["InvalidParameterException"] = "InvalidParameterException";
    RespondToAuthChallengeException["InvalidPasswordException"] = "InvalidPasswordException";
    RespondToAuthChallengeException["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
    RespondToAuthChallengeException["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
    RespondToAuthChallengeException["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
    RespondToAuthChallengeException["MFAMethodNotFoundException"] = "MFAMethodNotFoundException";
    RespondToAuthChallengeException["NotAuthorizedException"] = "NotAuthorizedException";
    RespondToAuthChallengeException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    RespondToAuthChallengeException["ResourceNotFoundException"] = "ResourceNotFoundException";
    RespondToAuthChallengeException["SoftwareTokenMFANotFoundException"] = "SoftwareTokenMFANotFoundException";
    RespondToAuthChallengeException["TooManyRequestsException"] = "TooManyRequestsException";
    RespondToAuthChallengeException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    RespondToAuthChallengeException["UserLambdaValidationException"] = "UserLambdaValidationException";
    RespondToAuthChallengeException["UserNotConfirmedException"] = "UserNotConfirmedException";
    RespondToAuthChallengeException["UserNotFoundException"] = "UserNotFoundException";
})(RespondToAuthChallengeException || (RespondToAuthChallengeException = {}));
var SetUserMFAPreferenceException;
(function(SetUserMFAPreferenceException) {
    SetUserMFAPreferenceException["ForbiddenException"] = "ForbiddenException";
    SetUserMFAPreferenceException["InternalErrorException"] = "InternalErrorException";
    SetUserMFAPreferenceException["InvalidParameterException"] = "InvalidParameterException";
    SetUserMFAPreferenceException["NotAuthorizedException"] = "NotAuthorizedException";
    SetUserMFAPreferenceException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    SetUserMFAPreferenceException["ResourceNotFoundException"] = "ResourceNotFoundException";
    SetUserMFAPreferenceException["UserNotConfirmedException"] = "UserNotConfirmedException";
    SetUserMFAPreferenceException["UserNotFoundException"] = "UserNotFoundException";
})(SetUserMFAPreferenceException || (SetUserMFAPreferenceException = {}));
var SignUpException;
(function(SignUpException) {
    SignUpException["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
    SignUpException["InternalErrorException"] = "InternalErrorException";
    SignUpException["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
    SignUpException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    SignUpException["InvalidParameterException"] = "InvalidParameterException";
    SignUpException["InvalidPasswordException"] = "InvalidPasswordException";
    SignUpException["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
    SignUpException["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
    SignUpException["NotAuthorizedException"] = "NotAuthorizedException";
    SignUpException["ResourceNotFoundException"] = "ResourceNotFoundException";
    SignUpException["TooManyRequestsException"] = "TooManyRequestsException";
    SignUpException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    SignUpException["UserLambdaValidationException"] = "UserLambdaValidationException";
    SignUpException["UsernameExistsException"] = "UsernameExistsException";
})(SignUpException || (SignUpException = {}));
var UpdateUserAttributesException;
(function(UpdateUserAttributesException) {
    UpdateUserAttributesException["AliasExistsException"] = "AliasExistsException";
    UpdateUserAttributesException["CodeDeliveryFailureException"] = "CodeDeliveryFailureException";
    UpdateUserAttributesException["CodeMismatchException"] = "CodeMismatchException";
    UpdateUserAttributesException["ExpiredCodeException"] = "ExpiredCodeException";
    UpdateUserAttributesException["ForbiddenException"] = "ForbiddenException";
    UpdateUserAttributesException["InternalErrorException"] = "InternalErrorException";
    UpdateUserAttributesException["InvalidEmailRoleAccessPolicyException"] = "InvalidEmailRoleAccessPolicyException";
    UpdateUserAttributesException["InvalidLambdaResponseException"] = "InvalidLambdaResponseException";
    UpdateUserAttributesException["InvalidParameterException"] = "InvalidParameterException";
    UpdateUserAttributesException["InvalidSmsRoleAccessPolicyException"] = "InvalidSmsRoleAccessPolicyException";
    UpdateUserAttributesException["InvalidSmsRoleTrustRelationshipException"] = "InvalidSmsRoleTrustRelationshipException";
    UpdateUserAttributesException["NotAuthorizedException"] = "NotAuthorizedException";
    UpdateUserAttributesException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    UpdateUserAttributesException["ResourceNotFoundException"] = "ResourceNotFoundException";
    UpdateUserAttributesException["TooManyRequestsException"] = "TooManyRequestsException";
    UpdateUserAttributesException["UnexpectedLambdaException"] = "UnexpectedLambdaException";
    UpdateUserAttributesException["UserLambdaValidationException"] = "UserLambdaValidationException";
    UpdateUserAttributesException["UserNotConfirmedException"] = "UserNotConfirmedException";
    UpdateUserAttributesException["UserNotFoundException"] = "UserNotFoundException";
})(UpdateUserAttributesException || (UpdateUserAttributesException = {}));
var VerifySoftwareTokenException;
(function(VerifySoftwareTokenException) {
    VerifySoftwareTokenException["CodeMismatchException"] = "CodeMismatchException";
    VerifySoftwareTokenException["EnableSoftwareTokenMFAException"] = "EnableSoftwareTokenMFAException";
    VerifySoftwareTokenException["ForbiddenException"] = "ForbiddenException";
    VerifySoftwareTokenException["InternalErrorException"] = "InternalErrorException";
    VerifySoftwareTokenException["InvalidParameterException"] = "InvalidParameterException";
    VerifySoftwareTokenException["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
    VerifySoftwareTokenException["NotAuthorizedException"] = "NotAuthorizedException";
    VerifySoftwareTokenException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    VerifySoftwareTokenException["ResourceNotFoundException"] = "ResourceNotFoundException";
    VerifySoftwareTokenException["SoftwareTokenMFANotFoundException"] = "SoftwareTokenMFANotFoundException";
    VerifySoftwareTokenException["TooManyRequestsException"] = "TooManyRequestsException";
    VerifySoftwareTokenException["UserNotConfirmedException"] = "UserNotConfirmedException";
    VerifySoftwareTokenException["UserNotFoundException"] = "UserNotFoundException";
})(VerifySoftwareTokenException || (VerifySoftwareTokenException = {}));
var VerifyUserAttributeException;
(function(VerifyUserAttributeException) {
    VerifyUserAttributeException["AliasExistsException"] = "AliasExistsException";
    VerifyUserAttributeException["CodeMismatchException"] = "CodeMismatchException";
    VerifyUserAttributeException["ExpiredCodeException"] = "ExpiredCodeException";
    VerifyUserAttributeException["ForbiddenException"] = "ForbiddenException";
    VerifyUserAttributeException["InternalErrorException"] = "InternalErrorException";
    VerifyUserAttributeException["InvalidParameterException"] = "InvalidParameterException";
    VerifyUserAttributeException["LimitExceededException"] = "LimitExceededException";
    VerifyUserAttributeException["NotAuthorizedException"] = "NotAuthorizedException";
    VerifyUserAttributeException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    VerifyUserAttributeException["ResourceNotFoundException"] = "ResourceNotFoundException";
    VerifyUserAttributeException["TooManyRequestsException"] = "TooManyRequestsException";
    VerifyUserAttributeException["UserNotConfirmedException"] = "UserNotConfirmedException";
    VerifyUserAttributeException["UserNotFoundException"] = "UserNotFoundException";
})(VerifyUserAttributeException || (VerifyUserAttributeException = {}));
var UpdateDeviceStatusException;
(function(UpdateDeviceStatusException) {
    UpdateDeviceStatusException["ForbiddenException"] = "ForbiddenException";
    UpdateDeviceStatusException["InternalErrorException"] = "InternalErrorException";
    UpdateDeviceStatusException["InvalidParameterException"] = "InvalidParameterException";
    UpdateDeviceStatusException["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
    UpdateDeviceStatusException["NotAuthorizedException"] = "NotAuthorizedException";
    UpdateDeviceStatusException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    UpdateDeviceStatusException["ResourceNotFoundException"] = "ResourceNotFoundException";
    UpdateDeviceStatusException["TooManyRequestsException"] = "TooManyRequestsException";
    UpdateDeviceStatusException["UserNotConfirmedException"] = "UserNotConfirmedException";
    UpdateDeviceStatusException["UserNotFoundException"] = "UserNotFoundException";
})(UpdateDeviceStatusException || (UpdateDeviceStatusException = {}));
var ListDevicesException;
(function(ListDevicesException) {
    ListDevicesException["ForbiddenException"] = "ForbiddenException";
    ListDevicesException["InternalErrorException"] = "InternalErrorException";
    ListDevicesException["InvalidParameterException"] = "InvalidParameterException";
    ListDevicesException["InvalidUserPoolConfigurationException"] = "InvalidUserPoolConfigurationException";
    ListDevicesException["NotAuthorizedException"] = "NotAuthorizedException";
    ListDevicesException["PasswordResetRequiredException"] = "PasswordResetRequiredException";
    ListDevicesException["ResourceNotFoundException"] = "ResourceNotFoundException";
    ListDevicesException["TooManyRequestsException"] = "TooManyRequestsException";
    ListDevicesException["UserNotConfirmedException"] = "UserNotConfirmedException";
    ListDevicesException["UserNotFoundException"] = "UserNotFoundException";
})(ListDevicesException || (ListDevicesException = {}));
const SETUP_TOTP_EXCEPTION = 'SetUpTOTPException';
;
 //# sourceMappingURL=errors.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "AuthValidationErrorCode": (()=>AuthValidationErrorCode)
});
var AuthValidationErrorCode;
(function(AuthValidationErrorCode) {
    AuthValidationErrorCode["EmptySignInUsername"] = "EmptySignInUsername";
    AuthValidationErrorCode["EmptySignInPassword"] = "EmptySignInPassword";
    AuthValidationErrorCode["CustomAuthSignInPassword"] = "CustomAuthSignInPassword";
    AuthValidationErrorCode["EmptySignUpUsername"] = "EmptySignUpUsername";
    AuthValidationErrorCode["EmptySignUpPassword"] = "EmptySignUpPassword";
    AuthValidationErrorCode["EmptyConfirmSignUpUsername"] = "EmptyConfirmSignUpUsername";
    AuthValidationErrorCode["EmptyConfirmSignUpCode"] = "EmptyConfirmSignUpCode";
    AuthValidationErrorCode["EmptyResendSignUpCodeUsername"] = "EmptyresendSignUpCodeUsername";
    AuthValidationErrorCode["EmptyChallengeResponse"] = "EmptyChallengeResponse";
    AuthValidationErrorCode["EmptyConfirmResetPasswordUsername"] = "EmptyConfirmResetPasswordUsername";
    AuthValidationErrorCode["EmptyConfirmResetPasswordNewPassword"] = "EmptyConfirmResetPasswordNewPassword";
    AuthValidationErrorCode["EmptyConfirmResetPasswordConfirmationCode"] = "EmptyConfirmResetPasswordConfirmationCode";
    AuthValidationErrorCode["EmptyResetPasswordUsername"] = "EmptyResetPasswordUsername";
    AuthValidationErrorCode["EmptyVerifyTOTPSetupCode"] = "EmptyVerifyTOTPSetupCode";
    AuthValidationErrorCode["EmptyConfirmUserAttributeCode"] = "EmptyConfirmUserAttributeCode";
    AuthValidationErrorCode["IncorrectMFAMethod"] = "IncorrectMFAMethod";
    AuthValidationErrorCode["EmptyUpdatePassword"] = "EmptyUpdatePassword";
})(AuthValidationErrorCode || (AuthValidationErrorCode = {}));
;
 //# sourceMappingURL=validation.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthErrorCodes": (()=>AuthErrorCodes),
    "AuthErrorStrings": (()=>AuthErrorStrings),
    "validationErrorMap": (()=>validationErrorMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const validationErrorMap = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyChallengeResponse]: {
        message: 'challengeResponse is required to confirmSignIn'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmResetPasswordUsername]: {
        message: 'username is required to confirmResetPassword'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmSignUpCode]: {
        message: 'code is required to confirmSignUp'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmSignUpUsername]: {
        message: 'username is required to confirmSignUp'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmResetPasswordConfirmationCode]: {
        message: 'confirmationCode is required to confirmResetPassword'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmResetPasswordNewPassword]: {
        message: 'newPassword is required to confirmResetPassword'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyResendSignUpCodeUsername]: {
        message: 'username is required to confirmSignUp'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyResetPasswordUsername]: {
        message: 'username is required to resetPassword'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInPassword]: {
        message: 'password is required to signIn'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInUsername]: {
        message: 'username is required to signIn'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignUpPassword]: {
        message: 'password is required to signUp'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignUpUsername]: {
        message: 'username is required to signUp'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].CustomAuthSignInPassword]: {
        message: 'A password is not needed when signing in with CUSTOM_WITHOUT_SRP',
        recoverySuggestion: 'Do not include a password in your signIn call.'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].IncorrectMFAMethod]: {
        message: 'Incorrect MFA method was chosen. It should be either SMS, TOTP, or EMAIL',
        recoverySuggestion: 'Try to pass SMS, TOTP, or EMAIL as the challengeResponse'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyVerifyTOTPSetupCode]: {
        message: 'code is required to verifyTotpSetup'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyUpdatePassword]: {
        message: 'oldPassword and newPassword are required to changePassword'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmUserAttributeCode]: {
        message: 'confirmation code is required to confirmUserAttribute'
    }
};
// TODO: delete this code when the Auth class is removed.
var AuthErrorStrings;
(function(AuthErrorStrings) {
    AuthErrorStrings["DEFAULT_MSG"] = "Authentication Error";
    AuthErrorStrings["EMPTY_EMAIL"] = "Email cannot be empty";
    AuthErrorStrings["EMPTY_PHONE"] = "Phone number cannot be empty";
    AuthErrorStrings["EMPTY_USERNAME"] = "Username cannot be empty";
    AuthErrorStrings["INVALID_USERNAME"] = "The username should either be a string or one of the sign in types";
    AuthErrorStrings["EMPTY_PASSWORD"] = "Password cannot be empty";
    AuthErrorStrings["EMPTY_CODE"] = "Confirmation code cannot be empty";
    AuthErrorStrings["SIGN_UP_ERROR"] = "Error creating account";
    AuthErrorStrings["NO_MFA"] = "No valid MFA method provided";
    AuthErrorStrings["INVALID_MFA"] = "Invalid MFA type";
    AuthErrorStrings["EMPTY_CHALLENGE"] = "Challenge response cannot be empty";
    AuthErrorStrings["NO_USER_SESSION"] = "Failed to get the session because the user is empty";
    AuthErrorStrings["NETWORK_ERROR"] = "Network Error";
    AuthErrorStrings["DEVICE_CONFIG"] = "Device tracking has not been configured in this User Pool";
    AuthErrorStrings["AUTOSIGNIN_ERROR"] = "Please use your credentials to sign in";
    AuthErrorStrings["OAUTH_ERROR"] = "Couldn't finish OAuth flow, check your User Pool HostedUI settings";
})(AuthErrorStrings || (AuthErrorStrings = {}));
var AuthErrorCodes;
(function(AuthErrorCodes) {
    AuthErrorCodes["SignInException"] = "SignInException";
    AuthErrorCodes["OAuthSignInError"] = "OAuthSignInException";
})(AuthErrorCodes || (AuthErrorCodes = {}));
;
 //# sourceMappingURL=AuthErrorStrings.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertValidationError": (()=>assertValidationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertValidationError(assertion, name) {
    const { message, recoverySuggestion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validationErrorMap"][name];
    if (!assertion) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name,
            message,
            recoverySuggestion
        });
    }
}
;
 //# sourceMappingURL=assertValidationError.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAuthUserAgentValue": (()=>getAuthUserAgentValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getAuthUserAgentValue = (action, customUserAgentDetails)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAmplifyUserAgent"])({
        category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].Auth,
        action,
        ...customUserAgentDetails
    });
;
 //# sourceMappingURL=getAuthUserAgentValue.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRespondToAuthChallengeClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createRespondToAuthChallengeClient": (()=>createRespondToAuthChallengeClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createRespondToAuthChallengeClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('RespondToAuthChallenge'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createRespondToAuthChallengeClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createVerifySoftwareTokenClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createVerifySoftwareTokenClient": (()=>createVerifySoftwareTokenClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createVerifySoftwareTokenClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('VerifySoftwareToken'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createVerifySoftwareTokenClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createAssociateSoftwareTokenClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAssociateSoftwareTokenClient": (()=>createAssociateSoftwareTokenClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createAssociateSoftwareTokenClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('AssociateSoftwareToken'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createAssociateSoftwareTokenClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cacheCognitoTokens": (()=>cacheCognitoTokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
async function cacheCognitoTokens(AuthenticationResult) {
    if (AuthenticationResult.AccessToken) {
        const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(AuthenticationResult.AccessToken);
        const accessTokenIssuedAtInMillis = (accessToken.payload.iat || 0) * 1000;
        const currentTime = new Date().getTime();
        const clockDrift = accessTokenIssuedAtInMillis > 0 ? accessTokenIssuedAtInMillis - currentTime : 0;
        let idToken;
        let refreshToken;
        let deviceMetadata;
        if (AuthenticationResult.RefreshToken) {
            refreshToken = AuthenticationResult.RefreshToken;
        }
        if (AuthenticationResult.IdToken) {
            idToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(AuthenticationResult.IdToken);
        }
        if (AuthenticationResult?.NewDeviceMetadata) {
            deviceMetadata = AuthenticationResult.NewDeviceMetadata;
        }
        const tokens = {
            accessToken,
            idToken,
            refreshToken,
            clockDrift,
            deviceMetadata,
            username: AuthenticationResult.username
        };
        if (AuthenticationResult?.signInDetails) {
            tokens.signInDetails = AuthenticationResult.signInDetails;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"].setTokens({
            tokens
        });
    } else {
        // This would be a service error
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyError"]({
            message: 'Invalid tokens',
            name: 'InvalidTokens',
            recoverySuggestion: 'Check Cognito UserPool settings'
        });
    }
}
;
 //# sourceMappingURL=cacheTokens.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ERROR_MESSAGE": (()=>ERROR_MESSAGE),
    "dispatchSignedInHubEvent": (()=>dispatchSignedInHubEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/getCurrentUser.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const ERROR_MESSAGE = 'Unable to get user session following successful sign-in.';
const dispatchSignedInHubEvent = async ()=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].dispatch('auth', {
            event: 'signedIn',
            data: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])()
        }, 'Auth', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
    } catch (error) {
        if (error.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_UNAUTHENTICATED_EXCEPTION"]) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNEXPECTED_SIGN_IN_INTERRUPTION_EXCEPTION"],
                message: ERROR_MESSAGE,
                recoverySuggestion: 'This most likely is due to auth tokens not being persisted. If you are using cookie store, please ensure cookies can be correctly set from your server.'
            });
        }
        throw error;
    }
};
;
 //# sourceMappingURL=dispatchSignedInHubEvent.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "persistSignInState": (()=>persistSignInState),
    "resetActiveSignInState": (()=>resetActiveSignInState),
    "setActiveSignInState": (()=>setActiveSignInState),
    "signInStore": (()=>signInStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/index.mjs [app-ssr] (ecmascript) <locals>");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Minutes until stored session invalidates is defaulted to 3 minutes
// to maintain parity with Amazon Cognito user pools API behavior
const MS_TO_EXPIRY = 3 * 60 * 1000;
const TGT_STATE = 'CognitoSignInState';
const SIGN_IN_STATE_KEYS = {
    username: `${TGT_STATE}.username`,
    challengeName: `${TGT_STATE}.challengeName`,
    signInSession: `${TGT_STATE}.signInSession`,
    expiry: `${TGT_STATE}.expiry`
};
const signInReducer = (state, action)=>{
    switch(action.type){
        case 'SET_SIGN_IN_SESSION':
            persistSignInState({
                signInSession: action.value
            });
            return {
                ...state,
                signInSession: action.value
            };
        case 'SET_SIGN_IN_STATE':
            persistSignInState(action.value);
            return {
                ...action.value
            };
        case 'SET_CHALLENGE_NAME':
            persistSignInState({
                challengeName: action.value
            });
            return {
                ...state,
                challengeName: action.value
            };
        case 'SET_USERNAME':
            persistSignInState({
                username: action.value
            });
            return {
                ...state,
                username: action.value
            };
        case 'SET_INITIAL_STATE':
            return getInitialState();
        case 'RESET_STATE':
            clearPersistedSignInState();
            return getDefaultState();
        // this state is never reachable
        default:
            return state;
    }
};
const isExpired = (expiryDate)=>{
    const expiryTimestamp = Number(expiryDate);
    const currentTimestamp = Date.now();
    return expiryTimestamp <= currentTimestamp;
};
const resetActiveSignInState = ()=>{
    signInStore.dispatch({
        type: 'RESET_STATE'
    });
};
const clearPersistedSignInState = ()=>{
    for (const stateKey of Object.values(SIGN_IN_STATE_KEYS)){
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].removeItem(stateKey);
    }
};
const getDefaultState = ()=>({
        username: undefined,
        challengeName: undefined,
        signInSession: undefined
    });
// Hydrate signInStore from syncSessionStorage if the session has not expired
const getInitialState = ()=>{
    const expiry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].getItem(SIGN_IN_STATE_KEYS.expiry);
    if (!expiry || isExpired(expiry)) {
        clearPersistedSignInState();
        return getDefaultState();
    }
    const username = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].getItem(SIGN_IN_STATE_KEYS.username) ?? undefined;
    const challengeName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].getItem(SIGN_IN_STATE_KEYS.challengeName) ?? undefined;
    const signInSession = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].getItem(SIGN_IN_STATE_KEYS.signInSession) ?? undefined;
    return {
        username,
        challengeName,
        signInSession
    };
};
const createStore = (reducer)=>{
    let currentState = reducer(getDefaultState(), {
        type: 'SET_INITIAL_STATE'
    });
    return {
        getState: ()=>currentState,
        dispatch: (action)=>{
            currentState = reducer(currentState, action);
        }
    };
};
const signInStore = createStore(signInReducer);
function setActiveSignInState(state) {
    signInStore.dispatch({
        type: 'SET_SIGN_IN_STATE',
        value: state
    });
}
// Save local state into Session Storage
const persistSignInState = ({ challengeName, signInSession, username })=>{
    username && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].setItem(SIGN_IN_STATE_KEYS.username, username);
    challengeName && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].setItem(SIGN_IN_STATE_KEYS.challengeName, challengeName);
    if (signInSession) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].setItem(SIGN_IN_STATE_KEYS.signInSession, signInSession);
        // Updates expiry when session is passed
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["syncSessionStorage"].setItem(SIGN_IN_STATE_KEYS.expiry, String(Date.now() + MS_TO_EXPIRY));
    }
};
;
 //# sourceMappingURL=signInStore.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/errors.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PasskeyError": (()=>PasskeyError),
    "PasskeyErrorCode": (()=>PasskeyErrorCode),
    "assertPasskeyError": (()=>assertPasskeyError),
    "handlePasskeyAuthenticationError": (()=>handlePasskeyAuthenticationError),
    "handlePasskeyRegistrationError": (()=>handlePasskeyRegistrationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$createAssertionFunction$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class PasskeyError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyError"] {
    constructor(params){
        super(params);
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = PasskeyError;
        Object.setPrototypeOf(this, PasskeyError.prototype);
    }
}
var PasskeyErrorCode;
(function(PasskeyErrorCode) {
    // not supported
    PasskeyErrorCode["PasskeyNotSupported"] = "PasskeyNotSupported";
    // duplicate passkey
    PasskeyErrorCode["PasskeyAlreadyExists"] = "PasskeyAlreadyExists";
    // misconfigurations
    PasskeyErrorCode["InvalidPasskeyRegistrationOptions"] = "InvalidPasskeyRegistrationOptions";
    PasskeyErrorCode["InvalidPasskeyAuthenticationOptions"] = "InvalidPasskeyAuthenticationOptions";
    PasskeyErrorCode["RelyingPartyMismatch"] = "RelyingPartyMismatch";
    // failed credential creation / retrieval
    PasskeyErrorCode["PasskeyRegistrationFailed"] = "PasskeyRegistrationFailed";
    PasskeyErrorCode["PasskeyRetrievalFailed"] = "PasskeyRetrievalFailed";
    // cancel / aborts
    PasskeyErrorCode["PasskeyRegistrationCanceled"] = "PasskeyRegistrationCanceled";
    PasskeyErrorCode["PasskeyAuthenticationCanceled"] = "PasskeyAuthenticationCanceled";
    PasskeyErrorCode["PasskeyOperationAborted"] = "PasskeyOperationAborted";
})(PasskeyErrorCode || (PasskeyErrorCode = {}));
const notSupportedRecoverySuggestion = 'Passkeys may not be supported on this device. Ensure your application is running in a secure context (HTTPS) and Web Authentication API is supported.';
const abortOrCancelRecoverySuggestion = 'User may have canceled the ceremony or another interruption has occurred. Check underlying error for details.';
const misconfigurationRecoverySuggestion = 'Ensure your user pool is configured to support the WEB_AUTHN as an authentication factor.';
const passkeyErrorMap = {
    [PasskeyErrorCode.PasskeyNotSupported]: {
        message: 'Passkeys may not be supported on this device.',
        recoverySuggestion: notSupportedRecoverySuggestion
    },
    [PasskeyErrorCode.InvalidPasskeyRegistrationOptions]: {
        message: 'Invalid passkey registration options.',
        recoverySuggestion: misconfigurationRecoverySuggestion
    },
    [PasskeyErrorCode.InvalidPasskeyAuthenticationOptions]: {
        message: 'Invalid passkey authentication options.',
        recoverySuggestion: misconfigurationRecoverySuggestion
    },
    [PasskeyErrorCode.PasskeyRegistrationFailed]: {
        message: 'Device failed to create passkey.',
        recoverySuggestion: notSupportedRecoverySuggestion
    },
    [PasskeyErrorCode.PasskeyRetrievalFailed]: {
        message: 'Device failed to retrieve passkey.',
        recoverySuggestion: 'Passkeys may not be available on this device. Try an alternative authentication factor like PASSWORD, EMAIL_OTP, or SMS_OTP.'
    },
    [PasskeyErrorCode.PasskeyAlreadyExists]: {
        message: 'Passkey already exists in authenticator.',
        recoverySuggestion: 'Proceed with existing passkey or try again after deleting the credential.'
    },
    [PasskeyErrorCode.PasskeyRegistrationCanceled]: {
        message: 'Passkey registration ceremony has been canceled.',
        recoverySuggestion: abortOrCancelRecoverySuggestion
    },
    [PasskeyErrorCode.PasskeyAuthenticationCanceled]: {
        message: 'Passkey authentication ceremony has been canceled.',
        recoverySuggestion: abortOrCancelRecoverySuggestion
    },
    [PasskeyErrorCode.PasskeyOperationAborted]: {
        message: 'Passkey operation has been aborted.',
        recoverySuggestion: abortOrCancelRecoverySuggestion
    },
    [PasskeyErrorCode.RelyingPartyMismatch]: {
        message: 'Relying party does not match current domain.',
        recoverySuggestion: 'Ensure relying party identifier matches current domain.'
    }
};
const assertPasskeyError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$createAssertionFunction$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAssertionFunction"])(passkeyErrorMap, PasskeyError);
/**
 * Handle Passkey Authentication Errors
 * https://w3c.github.io/webauthn/#sctn-get-request-exceptions
 *
 * @param err unknown
 * @returns PasskeyError
 */ const handlePasskeyAuthenticationError = (err)=>{
    if (err instanceof PasskeyError) {
        return err;
    }
    if (err instanceof Error) {
        if (err.name === 'NotAllowedError') {
            const { message, recoverySuggestion } = passkeyErrorMap[PasskeyErrorCode.PasskeyAuthenticationCanceled];
            return new PasskeyError({
                name: PasskeyErrorCode.PasskeyAuthenticationCanceled,
                message,
                recoverySuggestion,
                underlyingError: err
            });
        }
    }
    return handlePasskeyError(err);
};
/**
 * Handle Passkey Registration Errors
 * https://w3c.github.io/webauthn/#sctn-create-request-exceptions
 *
 * @param err unknown
 * @returns PasskeyError
 */ const handlePasskeyRegistrationError = (err)=>{
    if (err instanceof PasskeyError) {
        return err;
    }
    if (err instanceof Error) {
        // Duplicate Passkey
        if (err.name === 'InvalidStateError') {
            const { message, recoverySuggestion } = passkeyErrorMap[PasskeyErrorCode.PasskeyAlreadyExists];
            return new PasskeyError({
                name: PasskeyErrorCode.PasskeyAlreadyExists,
                message,
                recoverySuggestion,
                underlyingError: err
            });
        }
        // User Cancels Ceremony / Generic Catch All
        if (err.name === 'NotAllowedError') {
            const { message, recoverySuggestion } = passkeyErrorMap[PasskeyErrorCode.PasskeyRegistrationCanceled];
            return new PasskeyError({
                name: PasskeyErrorCode.PasskeyRegistrationCanceled,
                message,
                recoverySuggestion,
                underlyingError: err
            });
        }
    }
    return handlePasskeyError(err);
};
/**
 * Handles Overlapping Passkey Errors Between Registration & Authentication
 * https://w3c.github.io/webauthn/#sctn-create-request-exceptions
 * https://w3c.github.io/webauthn/#sctn-get-request-exceptions
 *
 * @param err unknown
 * @returns PasskeyError
 */ const handlePasskeyError = (err)=>{
    if (err instanceof Error) {
        // Passkey Operation Aborted
        if (err.name === 'AbortError') {
            const { message, recoverySuggestion } = passkeyErrorMap[PasskeyErrorCode.PasskeyOperationAborted];
            return new PasskeyError({
                name: PasskeyErrorCode.PasskeyOperationAborted,
                message,
                recoverySuggestion,
                underlyingError: err
            });
        }
        // Relying Party / Domain Mismatch
        if (err.name === 'SecurityError') {
            const { message, recoverySuggestion } = passkeyErrorMap[PasskeyErrorCode.RelyingPartyMismatch];
            return new PasskeyError({
                name: PasskeyErrorCode.RelyingPartyMismatch,
                message,
                recoverySuggestion,
                underlyingError: err
            });
        }
    }
    return new PasskeyError({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyErrorCode"].Unknown,
        message: 'An unknown error has occurred.',
        underlyingError: err
    });
};
;
 //# sourceMappingURL=errors.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/getIsPasskeySupported.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getIsPasskeySupported": (()=>getIsPasskeySupported)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isBrowser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/isBrowser.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Determines if passkey is supported in current context
 * Will return false if executed in non-secure context
 * @returns boolean
 */ const getIsPasskeySupported = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isBrowser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])() && window.isSecureContext && 'credentials' in navigator && typeof window.PublicKeyCredential === 'function';
};
;
 //# sourceMappingURL=getIsPasskeySupported.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/convert/base64url/convertArrayBufferToBase64Url.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertArrayBufferToBase64Url": (()=>convertArrayBufferToBase64Url)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Encoder.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// https://datatracker.ietf.org/doc/html/rfc4648#page-7
/**
 * Converts an ArrayBuffer to a base64url encoded string
 * @param buffer - the ArrayBuffer instance of a Uint8Array
 * @returns string - a base64url encoded string
 */ const convertArrayBufferToBase64Url = (buffer)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Encoder"].convert(new Uint8Array(buffer), {
        urlSafe: true,
        skipPadding: true
    });
};
;
 //# sourceMappingURL=convertArrayBufferToBase64Url.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/convert/base64url/convertBase64UrlToArrayBuffer.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertBase64UrlToArrayBuffer": (()=>convertBase64UrlToArrayBuffer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Decoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Decoder.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Converts a base64url encoded string to an ArrayBuffer
 * @param base64url - a base64url encoded string
 * @returns ArrayBuffer
 */ const convertBase64UrlToArrayBuffer = (base64url)=>{
    return Uint8Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Decoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Decoder"].convert(base64url, {
        urlSafe: true
    }), (x)=>x.charCodeAt(0)).buffer;
};
;
 //# sourceMappingURL=convertBase64UrlToArrayBuffer.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/serde.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deserializeJsonToPkcCreationOptions": (()=>deserializeJsonToPkcCreationOptions),
    "deserializeJsonToPkcGetOptions": (()=>deserializeJsonToPkcGetOptions),
    "serializePkcWithAssertionToJson": (()=>serializePkcWithAssertionToJson),
    "serializePkcWithAttestationToJson": (()=>serializePkcWithAttestationToJson)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/convert/base64url/convertArrayBufferToBase64Url.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertBase64UrlToArrayBuffer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/convert/base64url/convertBase64UrlToArrayBuffer.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Deserializes Public Key Credential Creation Options JSON
 * @param input PasskeyCreateOptionsJson
 * @returns PublicKeyCredentialCreationOptions
 */ const deserializeJsonToPkcCreationOptions = (input)=>{
    const userIdBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertBase64UrlToArrayBuffer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertBase64UrlToArrayBuffer"])(input.user.id);
    const challengeBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertBase64UrlToArrayBuffer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertBase64UrlToArrayBuffer"])(input.challenge);
    const excludeCredentialsWithBuffer = (input.excludeCredentials || []).map((excludeCred)=>({
            ...excludeCred,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertBase64UrlToArrayBuffer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertBase64UrlToArrayBuffer"])(excludeCred.id)
        }));
    return {
        ...input,
        excludeCredentials: excludeCredentialsWithBuffer,
        challenge: challengeBuffer,
        user: {
            ...input.user,
            id: userIdBuffer
        }
    };
};
/**
 * Serializes a Public Key Credential With Attestation to JSON
 * @param input PasskeyCreateResult
 * @returns PasskeyCreateResultJson
 */ const serializePkcWithAttestationToJson = (input)=>{
    const response = {
        clientDataJSON: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.response.clientDataJSON),
        attestationObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.response.attestationObject),
        transports: input.response.getTransports(),
        publicKeyAlgorithm: input.response.getPublicKeyAlgorithm(),
        authenticatorData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.response.getAuthenticatorData())
    };
    const publicKey = input.response.getPublicKey();
    if (publicKey) {
        response.publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(publicKey);
    }
    const resultJson = {
        type: input.type,
        id: input.id,
        rawId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.rawId),
        clientExtensionResults: input.getClientExtensionResults(),
        response
    };
    if (input.authenticatorAttachment) {
        resultJson.authenticatorAttachment = input.authenticatorAttachment;
    }
    return resultJson;
};
/**
 * Deserializes Public Key Credential Get Options JSON
 * @param input PasskeyGetOptionsJson
 * @returns PublicKeyCredentialRequestOptions
 */ const deserializeJsonToPkcGetOptions = (input)=>{
    const challengeBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertBase64UrlToArrayBuffer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertBase64UrlToArrayBuffer"])(input.challenge);
    const allowedCredentialsWithBuffer = (input.allowCredentials || []).map((allowedCred)=>({
            ...allowedCred,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertBase64UrlToArrayBuffer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertBase64UrlToArrayBuffer"])(allowedCred.id)
        }));
    return {
        ...input,
        challenge: challengeBuffer,
        allowCredentials: allowedCredentialsWithBuffer
    };
};
/**
 * Serializes a Public Key Credential With Attestation to JSON
 * @param input PasskeyGetResult
 * @returns PasskeyGetResultJson
 */ const serializePkcWithAssertionToJson = (input)=>{
    const response = {
        clientDataJSON: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.response.clientDataJSON),
        authenticatorData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.response.authenticatorData),
        signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.response.signature)
    };
    if (input.response.userHandle) {
        response.userHandle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.response.userHandle);
    }
    const resultJson = {
        id: input.id,
        rawId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$convert$2f$base64url$2f$convertArrayBufferToBase64Url$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertArrayBufferToBase64Url"])(input.rawId),
        type: input.type,
        clientExtensionResults: input.getClientExtensionResults(),
        response
    };
    if (input.authenticatorAttachment) {
        resultJson.authenticatorAttachment = input.authenticatorAttachment;
    }
    return resultJson;
};
;
 //# sourceMappingURL=serde.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/types/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertCredentialIsPkcWithAuthenticatorAssertionResponse": (()=>assertCredentialIsPkcWithAuthenticatorAssertionResponse),
    "assertCredentialIsPkcWithAuthenticatorAttestationResponse": (()=>assertCredentialIsPkcWithAuthenticatorAttestationResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/errors.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertCredentialIsPkcWithAuthenticatorAttestationResponse(credential) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPasskeyError"])(credential && credential instanceof PublicKeyCredential && credential.response instanceof AuthenticatorAttestationResponse, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasskeyErrorCode"].PasskeyRegistrationFailed);
}
function assertCredentialIsPkcWithAuthenticatorAssertionResponse(credential) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPasskeyError"])(credential && credential instanceof PublicKeyCredential && credential.response instanceof AuthenticatorAssertionResponse, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasskeyErrorCode"].PasskeyRetrievalFailed);
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/getPasskey.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPasskey": (()=>getPasskey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$getIsPasskeySupported$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/getIsPasskeySupported.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$serde$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/serde.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$types$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/types/index.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getPasskey = async (input)=>{
    try {
        const isPasskeySupported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$getIsPasskeySupported$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIsPasskeySupported"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPasskeyError"])(isPasskeySupported, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasskeyErrorCode"].PasskeyNotSupported);
        const passkeyGetOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$serde$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserializeJsonToPkcGetOptions"])(input);
        const credential = await navigator.credentials.get({
            publicKey: passkeyGetOptions
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$types$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertCredentialIsPkcWithAuthenticatorAssertionResponse"])(credential);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$serde$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePkcWithAssertionToJson"])(credential);
    } catch (err) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlePasskeyAuthenticationError"])(err);
    }
};
;
 //# sourceMappingURL=getPasskey.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createConfirmDeviceClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createConfirmDeviceClient": (()=>createConfirmDeviceClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createConfirmDeviceClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('ConfirmDevice'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createConfirmDeviceClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/textEncoder/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "textEncoder": (()=>textEncoder)
});
const textEncoder = {
    convert (input) {
        return new TextEncoder().encode(input);
    }
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable */ // @ts-nocheck -> BigInteger is already a vended utility
// A small implementation of BigInteger based on http://www-cs-students.stanford.edu/~tjw/jsbn/
//
// All public methods have been removed except the following:
//   new BigInteger(a, b) (only radix 2, 4, 8, 16 and 32 supported)
//   toString (only radix 2, 4, 8, 16 and 32 supported)
//   negate
//   abs
//   compareTo
//   bitLength
//   mod
//   equals
//   add
//   subtract
//   multiply
//   divide
//   modPow
/*
 * Copyright (c) 2003-2005  Tom Wu
 * All Rights Reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
 * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
 *
 * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
 * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * In addition, the following condition applies:
 *
 * All redistributions must retain an intact copy of this copyright notice
 * and disclaimer.
 */ // (public) Constructor
__turbopack_context__.s({
    "default": (()=>BigInteger)
});
function BigInteger(a, b) {
    if (a != null) this.fromString(a, b);
}
// return new, unset BigInteger
function nbi() {
    return new BigInteger(null, null);
}
// Bits per digit
let dbits;
// JavaScript engine analysis
const canary = 0xdeadbeefcafe;
const j_lm = (canary & 0xffffff) === 0xefcafe;
// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.
// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function am1(i, x, w, j, c, n) {
    while(--n >= 0){
        const v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 0x4000000);
        w[j++] = v & 0x3ffffff;
    }
    return c;
}
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function am2(i, x, w, j, c, n) {
    const xl = x & 0x7fff;
    const xh = x >> 15;
    while(--n >= 0){
        let l = this[i] & 0x7fff;
        const h = this[i++] >> 15;
        const m = xh * l + h * xl;
        l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w[j++] = l & 0x3fffffff;
    }
    return c;
}
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function am3(i, x, w, j, c, n) {
    const xl = x & 0x3fff;
    const xh = x >> 14;
    while(--n >= 0){
        let l = this[i] & 0x3fff;
        const h = this[i++] >> 14;
        const m = xh * l + h * xl;
        l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w[j++] = l & 0xfffffff;
    }
    return c;
}
const inBrowser = typeof navigator !== 'undefined';
if (inBrowser && j_lm && navigator.appName === 'Microsoft Internet Explorer') {
    BigInteger.prototype.am = am2;
    dbits = 30;
} else if (inBrowser && j_lm && navigator.appName !== 'Netscape') {
    BigInteger.prototype.am = am1;
    dbits = 26;
} else {
    // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
const BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
// Digit conversions
const BI_RM = '0123456789abcdefghijklmnopqrstuvwxyz';
const BI_RC = [];
let rr, vv;
rr = '0'.charCodeAt(0);
for(vv = 0; vv <= 9; ++vv)BI_RC[rr++] = vv;
rr = 'a'.charCodeAt(0);
for(vv = 10; vv < 36; ++vv)BI_RC[rr++] = vv;
rr = 'A'.charCodeAt(0);
for(vv = 10; vv < 36; ++vv)BI_RC[rr++] = vv;
function int2char(n) {
    return BI_RM.charAt(n);
}
function intAt(s, i) {
    const c = BI_RC[s.charCodeAt(i)];
    return c == null ? -1 : c;
}
// (protected) copy this to r
function bnpCopyTo(r) {
    for(let i = this.t - 1; i >= 0; --i)r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
}
// (protected) set from integer value x, -DV <= x < DV
function bnpFromInt(x) {
    this.t = 1;
    this.s = x < 0 ? -1 : 0;
    if (x > 0) this[0] = x;
    else if (x < -1) this[0] = x + this.DV;
    else this.t = 0;
}
// return bigint initialized to value
function nbv(i) {
    const r = nbi();
    r.fromInt(i);
    return r;
}
// (protected) set from string and radix
function bnpFromString(s, b) {
    let k;
    if (b === 16) k = 4;
    else if (b === 8) k = 3;
    else if (b === 2) k = 1;
    else if (b === 32) k = 5;
    else if (b === 4) k = 2;
    else throw new Error('Only radix 2, 4, 8, 16, 32 are supported');
    this.t = 0;
    this.s = 0;
    let i = s.length;
    let mi = false;
    let sh = 0;
    while(--i >= 0){
        const x = intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) === '-') mi = true;
            continue;
        }
        mi = false;
        if (sh === 0) this[this.t++] = x;
        else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
            this[this.t++] = x >> this.DB - sh;
        } else this[this.t - 1] |= x << sh;
        sh += k;
        if (sh >= this.DB) sh -= this.DB;
    }
    this.clamp();
    if (mi) BigInteger.ZERO.subTo(this, this);
}
// (protected) clamp off excess high words
function bnpClamp() {
    const c = this.s & this.DM;
    while(this.t > 0 && this[this.t - 1] == c)--this.t;
}
// (public) return string representation in given radix
function bnToString(b) {
    if (this.s < 0) return '-' + this.negate().toString(b);
    let k;
    if (b == 16) k = 4;
    else if (b === 8) k = 3;
    else if (b === 2) k = 1;
    else if (b === 32) k = 5;
    else if (b === 4) k = 2;
    else throw new Error('Only radix 2, 4, 8, 16, 32 are supported');
    const km = (1 << k) - 1;
    let d;
    let m = false;
    let r = '';
    let i = this.t;
    let p = this.DB - i * this.DB % k;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d);
        }
        while(i >= 0){
            if (p < k) {
                d = (this[i] & (1 << p) - 1) << k - p;
                d |= this[--i] >> (p += this.DB - k);
            } else {
                d = this[i] >> (p -= k) & km;
                if (p <= 0) {
                    p += this.DB;
                    --i;
                }
            }
            if (d > 0) m = true;
            if (m) r += int2char(d);
        }
    }
    return m ? r : '0';
}
// (public) -this
function bnNegate() {
    const r = nbi();
    BigInteger.ZERO.subTo(this, r);
    return r;
}
// (public) |this|
function bnAbs() {
    return this.s < 0 ? this.negate() : this;
}
// (public) return + if this > a, - if this < a, 0 if equal
function bnCompareTo(a) {
    let r = this.s - a.s;
    if (r != 0) return r;
    let i = this.t;
    r = i - a.t;
    if (r != 0) return this.s < 0 ? -r : r;
    while(--i >= 0)if ((r = this[i] - a[i]) != 0) return r;
    return 0;
}
// returns bit length of the integer x
function nbits(x) {
    let r = 1;
    let t;
    if ((t = x >>> 16) !== 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) !== 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) !== 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) !== 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) !== 0) {
        x = t;
        r += 1;
    }
    return r;
}
// (public) return the number of bits in "this"
function bnBitLength() {
    if (this.t <= 0) return 0;
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}
// (protected) r = this << n*DB
function bnpDLShiftTo(n, r) {
    let i;
    for(i = this.t - 1; i >= 0; --i)r[i + n] = this[i];
    for(i = n - 1; i >= 0; --i)r[i] = 0;
    r.t = this.t + n;
    r.s = this.s;
}
// (protected) r = this >> n*DB
function bnpDRShiftTo(n, r) {
    for(let i = n; i < this.t; ++i)r[i - n] = this[i];
    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
}
// (protected) r = this << n
function bnpLShiftTo(n, r) {
    const bs = n % this.DB;
    const cbs = this.DB - bs;
    const bm = (1 << cbs) - 1;
    const ds = Math.floor(n / this.DB);
    let c = this.s << bs & this.DM;
    let i;
    for(i = this.t - 1; i >= 0; --i){
        r[i + ds + 1] = this[i] >> cbs | c;
        c = (this[i] & bm) << bs;
    }
    for(i = ds - 1; i >= 0; --i)r[i] = 0;
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
}
// (protected) r = this >> n
function bnpRShiftTo(n, r) {
    r.s = this.s;
    const ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
        r.t = 0;
        return;
    }
    const bs = n % this.DB;
    const cbs = this.DB - bs;
    const bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for(let i = ds + 1; i < this.t; ++i){
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs;
    }
    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
    r.t = this.t - ds;
    r.clamp();
}
// (protected) r = this - a
function bnpSubTo(a, r) {
    let i = 0;
    let c = 0;
    const m = Math.min(a.t, this.t);
    while(i < m){
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c -= a.s;
        while(i < this.t){
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    } else {
        c += this.s;
        while(i < a.t){
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c -= a.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c < -1) r[i++] = this.DV + c;
    else if (c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
}
// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function bnpMultiplyTo(a, r) {
    const x = this.abs();
    const y = a.abs();
    let i = x.t;
    r.t = i + y.t;
    while(--i >= 0)r[i] = 0;
    for(i = 0; i < y.t; ++i)r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    r.s = 0;
    r.clamp();
    if (this.s !== a.s) BigInteger.ZERO.subTo(r, r);
}
// (protected) r = this^2, r != this (HAC 14.16)
function bnpSquareTo(r) {
    const x = this.abs();
    let i = r.t = 2 * x.t;
    while(--i >= 0)r[i] = 0;
    for(i = 0; i < x.t - 1; ++i){
        const c = x.am(i, x[i], r, 2 * i, 0, 1);
        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
        }
    }
    if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    r.s = 0;
    r.clamp();
}
// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function bnpDivRemTo(m, q, r) {
    const pm = m.abs();
    if (pm.t <= 0) return;
    const pt = this.abs();
    if (pt.t < pm.t) {
        if (q != null) q.fromInt(0);
        if (r != null) this.copyTo(r);
        return;
    }
    if (r === null) r = nbi();
    const y = nbi();
    const ts = this.s;
    const ms = m.s;
    const nsh = this.DB - nbits(pm[pm.t - 1]);
    // normalize modulus
    if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r);
    } else {
        pm.copyTo(y);
        pt.copyTo(r);
    }
    const ys = y.t;
    const y0 = y[ys - 1];
    if (y0 === 0) return;
    const yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
    const d1 = this.FV / yt;
    const d2 = (1 << this.F1) / yt;
    const e = 1 << this.F2;
    let i = r.t;
    let j = i - ys;
    const t = q === null ? nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r);
    }
    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y);
    // "negative" y so we can replace sub with am later
    while(y.t < ys)y[y.t++] = 0;
    while(--j >= 0){
        // Estimate quotient digit
        let qd = r[--i] === y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            // Try it out
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while(r[i] < --qd)r.subTo(t, r);
        }
    }
    if (q !== null) {
        r.drShiftTo(ys, q);
        if (ts !== ms) BigInteger.ZERO.subTo(q, q);
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) r.rShiftTo(nsh, r);
    // Denormalize remainder
    if (ts < 0) BigInteger.ZERO.subTo(r, r);
}
// (public) this mod a
function bnMod(a) {
    const r = nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
    return r;
}
// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function bnpInvDigit() {
    if (this.t < 1) return 0;
    const x = this[0];
    if ((x & 1) === 0) return 0;
    let y = x & 3;
    // y == 1/x mod 2^2
    y = y * (2 - (x & 0xf) * y) & 0xf;
    // y == 1/x mod 2^4
    y = y * (2 - (x & 0xff) * y) & 0xff;
    // y == 1/x mod 2^8
    y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff;
    // y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = y * (2 - x * y % this.DV) % this.DV;
    // y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return y > 0 ? this.DV - y : -y;
}
function bnEquals(a) {
    return this.compareTo(a) === 0;
}
// (protected) r = this + a
function bnpAddTo(a, r) {
    let i = 0;
    let c = 0;
    const m = Math.min(a.t, this.t);
    while(i < m){
        c += this[i] + a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c += a.s;
        while(i < this.t){
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    } else {
        c += this.s;
        while(i < a.t){
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += a.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c > 0) r[i++] = c;
    else if (c < -1) r[i++] = this.DV + c;
    r.t = i;
    r.clamp();
}
// (public) this + a
function bnAdd(a) {
    const r = nbi();
    this.addTo(a, r);
    return r;
}
// (public) this - a
function bnSubtract(a) {
    const r = nbi();
    this.subTo(a, r);
    return r;
}
// (public) this * a
function bnMultiply(a) {
    const r = nbi();
    this.multiplyTo(a, r);
    return r;
}
// (public) this / a
function bnDivide(a) {
    const r = nbi();
    this.divRemTo(a, r, null);
    return r;
}
// Montgomery reduction
function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 0x7fff;
    this.mph = this.mp >> 15;
    this.um = (1 << m.DB - 15) - 1;
    this.mt2 = 2 * m.t;
}
// xR mod m
function montConvert(x) {
    const r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
    return r;
}
// x/R mod m
function montRevert(x) {
    const r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
}
// x = x/R mod m (HAC 14.32)
function montReduce(x) {
    while(x.t <= this.mt2)// pad x so am has enough room later
    x[x.t++] = 0;
    for(let i = 0; i < this.m.t; ++i){
        // faster way of calculating u0 = x[i]*mp mod DV
        let j = x[i] & 0x7fff;
        const u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
        // propagate carry
        while(x[j] >= x.DV){
            x[j] -= x.DV;
            x[++j]++;
        }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}
// r = "x^2/R mod m"; x != r
function montSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}
// r = "xy/R mod m"; x,y != r
function montMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
// (public) this^e % m (HAC 14.85)
function bnModPow(e, m, callback) {
    let i = e.bitLength();
    let k;
    let r = nbv(1);
    const z = new Montgomery(m);
    if (i <= 0) return r;
    else if (i < 18) k = 1;
    else if (i < 48) k = 3;
    else if (i < 144) k = 4;
    else if (i < 768) k = 5;
    else k = 6;
    // precomputation
    const g = [];
    let n = 3;
    const k1 = k - 1;
    const km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
        const g2 = nbi();
        z.sqrTo(g[1], g2);
        while(n <= km){
            g[n] = nbi();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2;
        }
    }
    let j = e.t - 1;
    let w;
    let is1 = true;
    let r2 = nbi();
    let t;
    i = nbits(e[j]) - 1;
    while(j >= 0){
        if (i >= k1) w = e[j] >> i - k1 & km;
        else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0) w |= e[j - 1] >> this.DB + i - k1;
        }
        n = k;
        while((w & 1) === 0){
            w >>= 1;
            --n;
        }
        if ((i -= n) < 0) {
            i += this.DB;
            --j;
        }
        if (is1) {
            // ret == 1, don't bother squaring or multiplying it
            g[w].copyTo(r);
            is1 = false;
        } else {
            while(n > 1){
                z.sqrTo(r, r2);
                z.sqrTo(r2, r);
                n -= 2;
            }
            if (n > 0) z.sqrTo(r, r2);
            else {
                t = r;
                r = r2;
                r2 = t;
            }
            z.mulTo(r2, g[w], r);
        }
        while(j >= 0 && (e[j] & 1 << i) === 0){
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
                i = this.DB - 1;
                --j;
            }
        }
    }
    const result = z.revert(r);
    callback(null, result);
    return result;
}
// protected
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.addTo = bnpAddTo;
// public
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.modPow = bnModPow;
// "constants"
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
;
 //# sourceMappingURL=BigInteger.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateS.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ __turbopack_context__.s({
    "calculateS": (()=>calculateS)
});
const calculateS = async ({ a, g, k, x, B, N, U })=>{
    return new Promise((resolve, reject)=>{
        g.modPow(x, N, (outerErr, outerResult)=>{
            if (outerErr) {
                reject(outerErr);
                return;
            }
            B.subtract(k.multiply(outerResult)).modPow(a.add(U.multiply(x)), N, (innerErr, innerResult)=>{
                if (innerErr) {
                    reject(innerErr);
                    return;
                }
                resolve(innerResult.mod(N));
            });
        });
    });
};
;
 //# sourceMappingURL=calculateS.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/constants.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "HEX_TO_SHORT": (()=>HEX_TO_SHORT),
    "INIT_N": (()=>INIT_N),
    "SHORT_TO_HEX": (()=>SHORT_TO_HEX)
});
const INIT_N = 'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD1' + '29024E088A67CC74020BBEA63B139B22514A08798E3404DD' + 'EF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245' + 'E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7ED' + 'EE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3D' + 'C2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F' + '83655D23DCA3AD961C62F356208552BB9ED529077096966D' + '670C354E4ABC9804F1746C08CA18217C32905E462E36CE3B' + 'E39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9' + 'DE2BCBF6955817183995497CEA956AE515D2261898FA0510' + '15728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64' + 'ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7' + 'ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6B' + 'F12FFA06D98A0864D87602733EC86A64521F2B18177B200C' + 'BBE117577A615D6C770988C0BAD946E208E24FA074E5AB31' + '43DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF';
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for(let i = 0; i < 256; i++){
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getBytesFromHex.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBytesFromHex": (()=>getBytesFromHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/constants.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Converts a hexadecimal encoded string to a Uint8Array of bytes.
 *
 * @param encoded The hexadecimal encoded string
 */ const getBytesFromHex = (encoded)=>{
    if (encoded.length % 2 !== 0) {
        throw new Error('Hex encoded strings must have an even number length');
    }
    const out = new Uint8Array(encoded.length / 2);
    for(let i = 0; i < encoded.length; i += 2){
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEX_TO_SHORT"]) {
            out[i / 2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEX_TO_SHORT"][encodedByte];
        } else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
};
;
 //# sourceMappingURL=getBytesFromHex.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHexFromBytes.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getHexFromBytes": (()=>getHexFromBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/constants.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Converts a Uint8Array of binary data to a hexadecimal encoded string.
 *
 * @param bytes The binary data to encode
 */ const getHexFromBytes = (bytes)=>{
    let out = '';
    for(let i = 0; i < bytes.byteLength; i++){
        out += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHORT_TO_HEX"][bytes[i]];
    }
    return out;
};
;
 //# sourceMappingURL=getHexFromBytes.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromData.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getHashFromData": (()=>getHashFromData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHexFromBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHexFromBytes.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Calculate a hash from a `SourceData`
 * @param {SourceData} data Value to hash.
 * @returns {string} Hex-encoded hash.
 * @private
 */ const getHashFromData = (data)=>{
    const sha256 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sha256"]();
    sha256.update(data);
    const hashedData = sha256.digestSync();
    const hashHexFromUint8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHexFromBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHexFromBytes"])(hashedData);
    return new Array(64 - hashHexFromUint8.length).join('0') + hashHexFromUint8;
};
;
 //# sourceMappingURL=getHashFromData.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromHex.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getHashFromHex": (()=>getHashFromHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getBytesFromHex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromData.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Calculate a hash from a hex string
 * @param {string} hexStr Value to hash.
 * @returns {string} Hex-encoded hash.
 * @private
 */ const getHashFromHex = (hexStr)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashFromData"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesFromHex"])(hexStr));
;
 //# sourceMappingURL=getHashFromHex.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getPaddedHex.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPaddedHex": (()=>getPaddedHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Tests if a hex string has it most significant bit set (case-insensitive regex)
 */ const HEX_MSB_REGEX = /^[89a-f]/i;
/**
 * Returns an unambiguous, even-length hex string of the two's complement encoding of an integer.
 *
 * It is compatible with the hex encoding of Java's BigInteger's toByteArray(), wich returns a
 * byte array containing the two's-complement representation of a BigInteger. The array contains
 * the minimum number of bytes required to represent the BigInteger, including at least one sign bit.
 *
 * Examples showing how ambiguity is avoided by left padding with:
 * 	"00" (for positive values where the most-significant-bit is set)
 *  "FF" (for negative values where the most-significant-bit is set)
 *
 * padHex(bigInteger.fromInt(-236))  === "FF14"
 * padHex(bigInteger.fromInt(20))    === "14"
 *
 * padHex(bigInteger.fromInt(-200))  === "FF38"
 * padHex(bigInteger.fromInt(56))    === "38"
 *
 * padHex(bigInteger.fromInt(-20))   === "EC"
 * padHex(bigInteger.fromInt(236))   === "00EC"
 *
 * padHex(bigInteger.fromInt(-56))   === "C8"
 * padHex(bigInteger.fromInt(200))   === "00C8"
 *
 * @param {AuthBigInteger} bigInt Number to encode.
 * @returns {String} even-length hex string of the two's complement encoding.
 */ const getPaddedHex = (bigInt)=>{
    if (!(bigInt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])) {
        throw new Error('Not a BigInteger');
    }
    const isNegative = bigInt.compareTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ZERO) < 0;
    /* Get a hex string for abs(bigInt) */ let hexStr = bigInt.abs().toString(16);
    /* Pad hex to even length if needed */ hexStr = hexStr.length % 2 !== 0 ? `0${hexStr}` : hexStr;
    /* Prepend "00" if the most significant bit is set */ hexStr = HEX_MSB_REGEX.test(hexStr) ? `00${hexStr}` : hexStr;
    if (isNegative) {
        /* Flip the bits of the representation */ const invertedNibbles = hexStr.split('').map((x)=>{
            const invertedNibble = ~parseInt(x, 16) & 0xf;
            return '0123456789ABCDEF'.charAt(invertedNibble);
        }).join('');
        /* After flipping the bits, add one to get the 2's complement representation */ const flippedBitsBI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](invertedNibbles, 16).add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ONE);
        hexStr = flippedBitsBI.toString(16);
        /*
        For hex strings starting with 'FF8', 'FF' can be dropped, e.g. 0xFFFF80=0xFF80=0x80=-128

        Any sequence of '1' bits on the left can always be substituted with a single '1' bit
        without changing the represented value.

        This only happens in the case when the input is 80...00
        */ if (hexStr.toUpperCase().startsWith('FF8')) {
            hexStr = hexStr.substring(2);
        }
    }
    return hexStr;
};
;
 //# sourceMappingURL=getPaddedHex.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateU.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateU": (()=>calculateU)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromHex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getPaddedHex.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ const calculateU = ({ A, B })=>{
    const U = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashFromHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(A) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(B)), 16);
    if (U.equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ZERO)) {
        throw new Error('U cannot be zero.');
    }
    return U;
};
;
 //# sourceMappingURL=calculateU.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHkdfKey.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getHkdfKey": (()=>getHkdfKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Standard HKDF algorithm.
 *
 * @param {Uint8Array} ikm Input key material.
 * @param {Uint8Array} salt Salt value.
 * @param {Uint8Array} info Context and application specific info.
 *
 * @returns {Uint8Array} Strong key material.
 *
 * @internal
 */ const getHkdfKey = (ikm, salt, info)=>{
    const awsCryptoHash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sha256"](salt);
    awsCryptoHash.update(ikm);
    const resultFromAWSCryptoPrk = awsCryptoHash.digestSync();
    const awsCryptoHashHmac = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sha256"](resultFromAWSCryptoPrk);
    awsCryptoHashHmac.update(info);
    const resultFromAWSCryptoHmac = awsCryptoHashHmac.digestSync();
    const hashHexFromAWSCrypto = resultFromAWSCryptoHmac;
    return hashHexFromAWSCrypto.slice(0, 16);
};
;
 //# sourceMappingURL=getHkdfKey.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getRandomBytes.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRandomBytes": (()=>getRandomBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$WordArray$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/WordArray.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getBytesFromHex.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns a Uint8Array with a sequence of random nBytes
 *
 * @param {number} nBytes
 * @returns {Uint8Array} fixed-length sequence of random bytes
 */ const getRandomBytes = (nBytes)=>{
    const str = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$WordArray$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WordArray"]().random(nBytes).toString();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesFromHex"])(str);
};
;
 //# sourceMappingURL=getRandomBytes.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getRandomString.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRandomString": (()=>getRandomString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Encoder.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getRandomBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getRandomBytes.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Helper function to generate a random string
 * @returns {string} a random value.
 *
 * @internal
 */ const getRandomString = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Encoder"].convert((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getRandomBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomBytes"])(40));
;
 //# sourceMappingURL=getRandomString.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/AuthenticationHelper/AuthenticationHelper.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthenticationHelper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$textEncoder$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/textEncoder/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$calculate$2f$calculateS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$calculate$2f$calculateU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateU.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getBytesFromHex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHashFromHex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHexFromBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHexFromBytes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHkdfKey$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHkdfKey.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getPaddedHex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getRandomBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getRandomBytes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getRandomString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getRandomString.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/** @class */ class AuthenticationHelper {
    constructor({ userPoolName, a, g, A, N }){
        this.encoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$textEncoder$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textEncoder"];
        this.userPoolName = userPoolName;
        this.a = a;
        this.g = g;
        this.A = A;
        this.N = N;
        this.k = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashFromHex"])(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(N)}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(g)}`), 16);
    }
    /**
     * @returns {string} Generated random value included in password hash.
     */ getRandomPassword() {
        if (!this.randomPassword) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: 'EmptyBigIntegerRandomPassword',
                message: 'random password is empty'
            });
        }
        return this.randomPassword;
    }
    /**
     * @returns {string} Generated random value included in devices hash.
     */ getSaltToHashDevices() {
        if (!this.saltToHashDevices) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: 'EmptyBigIntegersaltToHashDevices',
                message: 'saltToHashDevices is empty'
            });
        }
        return this.saltToHashDevices;
    }
    /**
     * @returns {string} Value used to verify devices.
     */ getVerifierDevices() {
        if (!this.verifierDevices) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: 'EmptyBigIntegerVerifierDevices',
                message: 'verifyDevices is empty'
            });
        }
        return this.verifierDevices;
    }
    /**
     * Generate salts and compute verifier.
     *
     * @param {string} deviceGroupKey Devices to generate verifier for.
     * @param {string} username User to generate verifier for.
     *
     * @returns {Promise<void>}
     */ async generateHashDevice(deviceGroupKey, username) {
        this.randomPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getRandomString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomString"])();
        const combinedString = `${deviceGroupKey}${username}:${this.randomPassword}`;
        const hashedString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashFromData"])(combinedString);
        const hexRandom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHexFromBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHexFromBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getRandomBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomBytes"])(16));
        // The random hex will be unambiguously represented as a postive integer
        this.saltToHashDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hexRandom, 16));
        return new Promise((resolve, reject)=>{
            this.g.modPow(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashFromHex"])(this.saltToHashDevices + hashedString), 16), this.N, (err, result)=>{
                if (err) {
                    reject(err);
                    return;
                }
                this.verifierDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(result);
                resolve();
            });
        });
    }
    /**
     * Calculates the final HKDF key based on computed S value, computed U value and the key
     *
     * @param {String} username Username.
     * @param {String} password Password.
     * @param {AuthBigInteger} B Server B value.
     * @param {AuthBigInteger} salt Generated salt.
     */ async getPasswordAuthenticationKey({ username, password, serverBValue, salt }) {
        if (serverBValue.mod(this.N).equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ZERO)) {
            throw new Error('B cannot be zero.');
        }
        const U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$calculate$2f$calculateU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateU"])({
            A: this.A,
            B: serverBValue
        });
        const usernamePassword = `${this.userPoolName}${username}:${password}`;
        const usernamePasswordHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashFromData"])(usernamePassword);
        const x = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHashFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashFromHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(salt) + usernamePasswordHash), 16);
        const S = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$calculate$2f$calculateS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateS"])({
            a: this.a,
            g: this.g,
            k: this.k,
            x,
            B: serverBValue,
            N: this.N,
            U
        });
        const context = this.encoder.convert('Caldera Derived Key');
        const spacer = this.encoder.convert(String.fromCharCode(1));
        const info = new Uint8Array(context.byteLength + spacer.byteLength);
        info.set(context, 0);
        info.set(spacer, context.byteLength);
        const hkdfKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHkdfKey$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHkdfKey"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesFromHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(S)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesFromHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getPaddedHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddedHex"])(U)), info);
        return hkdfKey;
    }
}
;
 //# sourceMappingURL=AuthenticationHelper.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateA.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateA": (()=>calculateA)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ const calculateA = async ({ a, g, N })=>{
    return new Promise((resolve, reject)=>{
        g.modPow(a, N, (err, A)=>{
            if (err) {
                reject(err);
                return;
            }
            if (A.mod(N).equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ZERO)) {
                reject(new Error('Illegal parameter. A mod N cannot be 0.'));
                return;
            }
            resolve(A);
        });
    });
};
;
 //# sourceMappingURL=calculateA.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getAuthenticationHelper.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAuthenticationHelper": (()=>getAuthenticationHelper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$AuthenticationHelper$2f$AuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/AuthenticationHelper/AuthenticationHelper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$calculate$2f$calculateA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/calculate/calculateA.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHexFromBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getHexFromBytes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getRandomBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getRandomBytes.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns a new {@link AuthenticationHelper} instance with randomly generated BigInteger seed
 *
 * @param userPoolName Cognito user pool name.
 * @returns An {@link AuthenticationHelper} instance.
 *
 * @internal
 */ const getAuthenticationHelper = async (userPoolName)=>{
    const N = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INIT_N"], 16);
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('2', 16);
    const a = generateRandomBigInteger();
    const A = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$calculate$2f$calculateA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateA"])({
        a,
        g,
        N
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$AuthenticationHelper$2f$AuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
        userPoolName,
        a,
        g,
        A,
        N
    });
};
/**
 * Generates a random BigInteger.
 *
 * @returns {BigInteger} a random value.
 */ const generateRandomBigInteger = ()=>{
    // This will be interpreted as a postive 128-bit integer
    const hexRandom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getHexFromBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHexFromBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getRandomBytes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomBytes"])(128));
    // There is no need to do randomBigInt.mod(this.N - 1) as N (3072-bit) is > 128 bytes (1024-bit)
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hexRandom, 16);
};
;
 //# sourceMappingURL=getAuthenticationHelper.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/getNewDeviceMetadata.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNewDeviceMetadata": (()=>getNewDeviceMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Encoder.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$deviceName$2f$getDeviceName$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/deviceName/getDeviceName.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createConfirmDeviceClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createConfirmDeviceClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getAuthenticationHelper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getBytesFromHex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * This function is used to kick off the device management flow.
 *
 * If an error is thrown while generating a hash device or calling the `ConfirmDevice`
 * client, then this API will ignore the error and return undefined. Otherwise the authentication
 * flow will not complete and the user won't be able to be signed in.
 *
 * @returns DeviceMetadata | undefined
 */ async function getNewDeviceMetadata({ userPoolId, userPoolEndpoint, newDeviceMetadata, accessToken }) {
    if (!newDeviceMetadata) return undefined;
    const userPoolName = userPoolId.split('_')[1] || '';
    const authenticationHelper = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticationHelper"])(userPoolName);
    const deviceKey = newDeviceMetadata?.DeviceKey;
    const deviceGroupKey = newDeviceMetadata?.DeviceGroupKey;
    try {
        await authenticationHelper.generateHashDevice(deviceGroupKey ?? '', deviceKey ?? '');
    } catch (errGenHash) {
        // TODO: log error here
        return undefined;
    }
    const deviceSecretVerifierConfig = {
        Salt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Encoder"].convert((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesFromHex"])(authenticationHelper.getSaltToHashDevices())),
        PasswordVerifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Encoder"].convert((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getBytesFromHex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesFromHex"])(authenticationHelper.getVerifierDevices()))
    };
    const randomPassword = authenticationHelper.getRandomPassword();
    try {
        const confirmDevice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createConfirmDeviceClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfirmDeviceClient"])({
            endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
                endpointOverride: userPoolEndpoint
            })
        });
        await confirmDevice({
            region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId)
        }, {
            AccessToken: accessToken,
            DeviceName: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$deviceName$2f$getDeviceName$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeviceName"])(),
            DeviceKey: newDeviceMetadata?.DeviceKey,
            DeviceSecretVerifierConfig: deviceSecretVerifierConfig
        });
        return {
            deviceKey,
            deviceGroupKey,
            randomPassword
        };
    } catch (error) {
        // TODO: log error here
        return undefined;
    }
}
;
 //# sourceMappingURL=getNewDeviceMetadata.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleWebAuthnSignInResult.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleWebAuthnSignInResult": (()=>handleWebAuthnSignInResult)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRespondToAuthChallengeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$getPasskey$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/getPasskey.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/getNewDeviceMetadata.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
async function handleWebAuthnSignInResult(challengeParameters) {
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { username, signInSession, signInDetails, challengeName } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInStore"].getState();
    if (challengeName !== 'WEB_AUTHN' || !username) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorCodes"].SignInException,
            message: 'Unable to proceed due to invalid sign in state.'
        });
    }
    const { CREDENTIAL_REQUEST_OPTIONS: credentialRequestOptions } = challengeParameters;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPasskeyError"])(!!credentialRequestOptions, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasskeyErrorCode"].InvalidPasskeyAuthenticationOptions);
    const cred = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$passkey$2f$getPasskey$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPasskey"])(JSON.parse(credentialRequestOptions));
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: authConfig.userPoolEndpoint
        })
    });
    const { ChallengeName: nextChallengeName, ChallengeParameters: nextChallengeParameters, AuthenticationResult: authenticationResult, Session: nextSession } = await respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(authConfig.userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
    }, {
        ChallengeName: 'WEB_AUTHN',
        ChallengeResponses: {
            USERNAME: username,
            CREDENTIAL: JSON.stringify(cred)
        },
        ClientId: authConfig.userPoolClientId,
        Session: signInSession
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInState"])({
        signInSession: nextSession,
        username,
        challengeName: nextChallengeName,
        signInDetails
    });
    if (authenticationResult) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
            ...authenticationResult,
            username,
            NewDeviceMetadata: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNewDeviceMetadata"])({
                userPoolId: authConfig.userPoolId,
                userPoolEndpoint: authConfig.userPoolEndpoint,
                newDeviceMetadata: authenticationResult.NewDeviceMetadata,
                accessToken: authenticationResult.AccessToken
            }),
            signInDetails
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInStore"].dispatch({
            type: 'RESET_STATE'
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSignedInHubEvent"])();
        return {
            isSignedIn: true,
            nextStep: {
                signInStep: 'DONE'
            }
        };
    }
    if (nextChallengeName === 'WEB_AUTHN') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorCodes"].SignInException,
            message: 'Sequential WEB_AUTHN challenges returned from underlying service cannot be handled.'
        });
    }
    return {
        challengeName: nextChallengeName,
        challengeParameters: nextChallengeParameters
    };
}
;
 //# sourceMappingURL=handleWebAuthnSignInResult.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getNowString.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "getNowString": (()=>getNowString)
});
const MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const WEEK_NAMES = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
const getNowString = ()=>{
    const now = new Date();
    const weekDay = WEEK_NAMES[now.getUTCDay()];
    const month = MONTH_NAMES[now.getUTCMonth()];
    const day = now.getUTCDate();
    let hours = now.getUTCHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = now.getUTCMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = now.getUTCSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    const year = now.getUTCFullYear();
    // ddd MMM D HH:mm:ss UTC YYYY
    const dateNow = `${weekDay} ${month} ${day} ${hours}:${minutes}:${seconds} UTC ${year}`;
    return dateNow;
};
;
 //# sourceMappingURL=getNowString.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getSignatureString.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSignatureString": (()=>getSignatureString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Encoder.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Decoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Decoder.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$textEncoder$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/textEncoder/index.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getSignatureString = ({ userPoolName, username, challengeParameters, dateNow, hkdf })=>{
    const bufUPIDaToB = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$textEncoder$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textEncoder"].convert(userPoolName);
    const bufUNaToB = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$textEncoder$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textEncoder"].convert(username);
    const bufSBaToB = urlB64ToUint8Array(challengeParameters.SECRET_BLOCK);
    const bufDNaToB = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$textEncoder$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textEncoder"].convert(dateNow);
    const bufConcat = new Uint8Array(bufUPIDaToB.byteLength + bufUNaToB.byteLength + bufSBaToB.byteLength + bufDNaToB.byteLength);
    bufConcat.set(bufUPIDaToB, 0);
    bufConcat.set(bufUNaToB, bufUPIDaToB.byteLength);
    bufConcat.set(bufSBaToB, bufUPIDaToB.byteLength + bufUNaToB.byteLength);
    bufConcat.set(bufDNaToB, bufUPIDaToB.byteLength + bufUNaToB.byteLength + bufSBaToB.byteLength);
    const awsCryptoHash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sha256"](hkdf);
    awsCryptoHash.update(bufConcat);
    const resultFromAWSCrypto = awsCryptoHash.digestSync();
    const signatureString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Encoder"].convert(resultFromAWSCrypto);
    return signatureString;
};
const urlB64ToUint8Array = (base64String)=>{
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Decoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Decoder"].convert(base64);
    const outputArray = new Uint8Array(rawData.length);
    for(let i = 0; i < rawData.length; ++i){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};
;
 //# sourceMappingURL=getSignatureString.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/handleDeviceSRPAuth.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleDeviceSRPAuth": (()=>handleDeviceSRPAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRespondToAuthChallengeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getAuthenticationHelper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getNowString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getNowString.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getSignatureString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getSignatureString.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
async function handleDeviceSRPAuth({ username, config, clientMetadata, session, tokenOrchestrator }) {
    const { userPoolId, userPoolEndpoint } = config;
    const clientId = config.userPoolClientId;
    const deviceMetadata = await tokenOrchestrator?.getDeviceMetadata(username);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeviceMetadata"])(deviceMetadata);
    const authenticationHelper = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticationHelper"])(deviceMetadata.deviceGroupKey);
    const challengeResponses = {
        USERNAME: username,
        SRP_A: authenticationHelper.A.toString(16),
        DEVICE_KEY: deviceMetadata.deviceKey
    };
    const jsonReqResponseChallenge = {
        ChallengeName: 'DEVICE_SRP_AUTH',
        ClientId: clientId,
        ChallengeResponses: challengeResponses,
        ClientMetadata: clientMetadata,
        Session: session
    };
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const { ChallengeParameters: respondedChallengeParameters, Session } = await respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId)
    }, jsonReqResponseChallenge);
    return handleDevicePasswordVerifier(username, respondedChallengeParameters, clientMetadata, Session, authenticationHelper, config, tokenOrchestrator);
}
async function handleDevicePasswordVerifier(username, challengeParameters, clientMetadata, session, authenticationHelper, { userPoolId, userPoolClientId, userPoolEndpoint }, tokenOrchestrator) {
    const deviceMetadata = await tokenOrchestrator?.getDeviceMetadata(username);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDeviceMetadata"])(deviceMetadata);
    const serverBValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](challengeParameters?.SRP_B, 16);
    const salt = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](challengeParameters?.SALT, 16);
    const { deviceKey } = deviceMetadata;
    const { deviceGroupKey } = deviceMetadata;
    const hkdf = await authenticationHelper.getPasswordAuthenticationKey({
        username: deviceMetadata.deviceKey,
        password: deviceMetadata.randomPassword,
        serverBValue,
        salt
    });
    const dateNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getNowString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNowString"])();
    const challengeResponses = {
        USERNAME: challengeParameters?.USERNAME ?? username,
        PASSWORD_CLAIM_SECRET_BLOCK: challengeParameters?.SECRET_BLOCK,
        TIMESTAMP: dateNow,
        PASSWORD_CLAIM_SIGNATURE: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getSignatureString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignatureString"])({
            username: deviceKey,
            userPoolName: deviceGroupKey,
            challengeParameters,
            dateNow,
            hkdf
        }),
        DEVICE_KEY: deviceKey
    };
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReqResponseChallenge = {
        ChallengeName: 'DEVICE_PASSWORD_VERIFIER',
        ClientId: userPoolClientId,
        ChallengeResponses: challengeResponses,
        Session: session,
        ClientMetadata: clientMetadata,
        UserContextData
    };
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    return respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId)
    }, jsonReqResponseChallenge);
}
;
 //# sourceMappingURL=handleDeviceSRPAuth.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/handlePasswordVerifierChallenge.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handlePasswordVerifierChallenge": (()=>handlePasswordVerifierChallenge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRespondToAuthChallengeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/BigInteger/BigInteger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getNowString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getNowString.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getSignatureString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getSignatureString.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handleDeviceSRPAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/handleDeviceSRPAuth.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
async function handlePasswordVerifierChallenge(password, challengeParameters, clientMetadata, session, authenticationHelper, config, tokenOrchestrator) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const userPoolName = userPoolId?.split('_')[1] || '';
    const serverBValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](challengeParameters?.SRP_B, 16);
    const salt = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$BigInteger$2f$BigInteger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](challengeParameters?.SALT, 16);
    const username = challengeParameters?.USER_ID_FOR_SRP;
    if (!username) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
        name: 'EmptyUserIdForSRPException',
        message: 'USER_ID_FOR_SRP was not found in challengeParameters'
    });
    const hkdf = await authenticationHelper.getPasswordAuthenticationKey({
        username,
        password,
        serverBValue,
        salt
    });
    const dateNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getNowString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNowString"])();
    const challengeResponses = {
        USERNAME: username,
        PASSWORD_CLAIM_SECRET_BLOCK: challengeParameters?.SECRET_BLOCK,
        TIMESTAMP: dateNow,
        PASSWORD_CLAIM_SIGNATURE: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getSignatureString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignatureString"])({
            username,
            userPoolName,
            challengeParameters,
            dateNow,
            hkdf
        })
    };
    const deviceMetadata = await tokenOrchestrator.getDeviceMetadata(username);
    if (deviceMetadata && deviceMetadata.deviceKey) {
        challengeResponses.DEVICE_KEY = deviceMetadata.deviceKey;
    }
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReqResponseChallenge = {
        ChallengeName: 'PASSWORD_VERIFIER',
        ChallengeResponses: challengeResponses,
        ClientMetadata: clientMetadata,
        Session: session,
        ClientId: userPoolClientId,
        UserContextData
    };
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const response = await respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId)
    }, jsonReqResponseChallenge);
    if (response.ChallengeName === 'DEVICE_SRP_AUTH') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handleDeviceSRPAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDeviceSRPAuth"])({
        username,
        config,
        clientMetadata,
        session: response.Session,
        tokenOrchestrator
    });
    return response;
}
;
 //# sourceMappingURL=handlePasswordVerifierChallenge.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/retryOnResourceNotFoundException.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "retryOnResourceNotFoundException": (()=>retryOnResourceNotFoundException)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * It will retry the function if the error is a `ResourceNotFoundException` and
 * will clean the device keys stored in the storage mechanism.
 *
 */ async function retryOnResourceNotFoundException(func, args, username, tokenOrchestrator) {
    try {
        return await func(...args);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"] && error.name === 'ResourceNotFoundException' && error.message.includes('Device does not exist.')) {
            await tokenOrchestrator.clearDeviceMetadata(username);
            return func(...args);
        }
        throw error;
    }
}
;
 //# sourceMappingURL=retryOnResourceNotFoundException.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/setActiveSignInUsername.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "setActiveSignInUsername": (()=>setActiveSignInUsername)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function setActiveSignInUsername(username) {
    const { dispatch } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInStore"];
    dispatch({
        type: 'SET_USERNAME',
        value: username
    });
}
;
 //# sourceMappingURL=setActiveSignInUsername.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/shared/handlePasswordSRP.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handlePasswordSRP": (()=>handlePasswordSRP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getAuthenticationHelper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createInitiateAuthClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handlePasswordVerifierChallenge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/handlePasswordVerifierChallenge.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/retryOnResourceNotFoundException.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/setActiveSignInUsername.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Handles the Password SRP (Secure Remote Password) authentication flow.
 * This function can be used with both USER_SRP_AUTH and USER_AUTH flows.
 *
 * @param {Object} params - The parameters for the Password SRP authentication
 * @param {string} params.username - The username for authentication
 * @param {string} params.password - The user's password
 * @param {ClientMetadata} [params.clientMetadata] - Optional metadata to be sent with auth requests
 * @param {CognitoUserPoolConfig} params.config - Cognito User Pool configuration
 * @param {AuthTokenOrchestrator} params.tokenOrchestrator - Token orchestrator for managing auth tokens
 * @param {AuthFlowType} params.authFlow - The type of authentication flow ('USER_SRP_AUTH' or 'USER_AUTH')
 * @param {AuthFactorType} [params.preferredChallenge] - Optional preferred challenge type when using USER_AUTH flow
 *
 * @returns {Promise<RespondToAuthChallengeCommandOutput>} The authentication response
 */ async function handlePasswordSRP({ username, password, clientMetadata, config, tokenOrchestrator, authFlow, preferredChallenge }) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const userPoolName = userPoolId?.split('_')[1] || '';
    const authenticationHelper = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticationHelper"])(userPoolName);
    const authParameters = {
        USERNAME: username,
        SRP_A: authenticationHelper.A.toString(16)
    };
    if (authFlow === 'USER_AUTH' && preferredChallenge) {
        authParameters.PREFERRED_CHALLENGE = preferredChallenge;
    }
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReq = {
        AuthFlow: authFlow,
        AuthParameters: authParameters,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData
    };
    const initiateAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitiateAuthClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const resp = await initiateAuth({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignIn)
    }, jsonReq);
    const { ChallengeParameters: challengeParameters, Session: session } = resp;
    const activeUsername = challengeParameters?.USERNAME ?? username;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInUsername"])(activeUsername);
    if (resp.ChallengeName === 'PASSWORD_VERIFIER') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryOnResourceNotFoundException"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handlePasswordVerifierChallenge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlePasswordVerifierChallenge"], [
            password,
            challengeParameters,
            clientMetadata,
            session,
            authenticationHelper,
            config,
            tokenOrchestrator
        ], activeUsername, tokenOrchestrator);
    }
    return resp;
}
;
 //# sourceMappingURL=handlePasswordSRP.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleSelectChallenge.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initiateSelectedChallenge": (()=>initiateSelectedChallenge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRespondToAuthChallengeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Handles the SELECT_CHALLENGE response for authentication.
 * Initiates the selected authentication challenge based on user choice.
 *
 * @param {Object} params - The parameters for handling the selected challenge
 * @param {string} params.username - The username for authentication
 * @param {string} params.session - The current authentication session token
 * @param {string} params.selectedChallenge - The challenge type selected by the user
 * @param {CognitoUserPoolConfig} params.config - Cognito User Pool configuration
 * @param {ClientMetadata} [params.clientMetadata] - Optional metadata to be sent with auth requests
 *
 * @returns {Promise<RespondToAuthChallengeCommandOutput>} The challenge response
 */ async function initiateSelectedChallenge({ username, session, selectedChallenge, config, clientMetadata }) {
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: config.userPoolEndpoint
        })
    });
    return respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(config.userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
    }, {
        ChallengeName: 'SELECT_CHALLENGE',
        ChallengeResponses: {
            USERNAME: username,
            ANSWER: selectedChallenge
        },
        ClientId: config.userPoolClientId,
        Session: session,
        ClientMetadata: clientMetadata
    });
}
;
 //# sourceMappingURL=handleSelectChallenge.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleSelectChallengeWithPassword.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleSelectChallengeWithPassword": (()=>handleSelectChallengeWithPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRespondToAuthChallengeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/setActiveSignInUsername.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Handles the SELECT_CHALLENGE response specifically for Password authentication.
 * This function combines the SELECT_CHALLENGE flow with standard password authentication.
 *
 * @param {string} username - The username for authentication
 * @param {string} password - The user's password
 * @param {ClientMetadata} [clientMetadata] - Optional metadata to be sent with auth requests
 * @param {CognitoUserPoolConfig} config - Cognito User Pool configuration
 * @param {string} session - The current authentication session token
 *
 * @returns {Promise<RespondToAuthChallengeCommandOutput>} The challenge response
 */ async function handleSelectChallengeWithPassword(username, password, clientMetadata, config, session) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const authParameters = {
        ANSWER: 'PASSWORD',
        USERNAME: username,
        PASSWORD: password
    };
    const userContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const response = await respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
    }, {
        ChallengeName: 'SELECT_CHALLENGE',
        ChallengeResponses: authParameters,
        ClientId: userPoolClientId,
        ClientMetadata: clientMetadata,
        Session: session,
        UserContextData: userContextData
    });
    const activeUsername = response.ChallengeParameters?.USERNAME ?? username;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInUsername"])(activeUsername);
    return response;
}
;
 //# sourceMappingURL=handleSelectChallengeWithPassword.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleSelectChallengeWithPasswordSRP.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleSelectChallengeWithPasswordSRP": (()=>handleSelectChallengeWithPasswordSRP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRespondToAuthChallengeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getAuthenticationHelper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/setActiveSignInUsername.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/retryOnResourceNotFoundException.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handlePasswordVerifierChallenge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/handlePasswordVerifierChallenge.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Handles the SELECT_CHALLENGE response specifically for Password SRP authentication.
 * This function combines the SELECT_CHALLENGE flow with Password SRP protocol.
 *
 * @param {string} username - The username for authentication
 * @param {string} password - The user's password
 * @param {ClientMetadata} [clientMetadata] - Optional metadata to be sent with auth requests
 * @param {CognitoUserPoolConfig} config - Cognito User Pool configuration
 * @param {string} session - The current authentication session token
 * @param {AuthTokenOrchestrator} tokenOrchestrator - Token orchestrator for managing auth tokens
 *
 * @returns {Promise<RespondToAuthChallengeCommandOutput>} The challenge response
 */ async function handleSelectChallengeWithPasswordSRP(username, password, clientMetadata, config, session, tokenOrchestrator) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const userPoolName = userPoolId.split('_')[1] || '';
    const authenticationHelper = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticationHelper"])(userPoolName);
    const authParameters = {
        ANSWER: 'PASSWORD_SRP',
        USERNAME: username,
        SRP_A: authenticationHelper.A.toString(16)
    };
    const userContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const response = await respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
    }, {
        ChallengeName: 'SELECT_CHALLENGE',
        ChallengeResponses: authParameters,
        ClientId: userPoolClientId,
        ClientMetadata: clientMetadata,
        Session: session,
        UserContextData: userContextData
    });
    const activeUsername = response.ChallengeParameters?.USERNAME ?? username;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInUsername"])(activeUsername);
    if (response.ChallengeName === 'PASSWORD_VERIFIER') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryOnResourceNotFoundException"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handlePasswordVerifierChallenge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlePasswordVerifierChallenge"], [
            password,
            response.ChallengeParameters,
            clientMetadata,
            response.Session,
            authenticationHelper,
            config,
            tokenOrchestrator
        ], activeUsername, tokenOrchestrator);
    }
    return response;
}
;
 //# sourceMappingURL=handleSelectChallengeWithPasswordSRP.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertUserNotAuthenticated": (()=>assertUserNotAuthenticated),
    "createAttributes": (()=>createAttributes),
    "getActiveSignInUsername": (()=>getActiveSignInUsername),
    "getAllowedMfaSetupTypes": (()=>getAllowedMfaSetupTypes),
    "getMFAType": (()=>getMFAType),
    "getMFATypes": (()=>getMFATypes),
    "getSignInResult": (()=>getSignInResult),
    "getSignInResultFromError": (()=>getSignInResultFromError),
    "getTOTPSetupDetails": (()=>getTOTPSetupDetails),
    "handleChallengeName": (()=>handleChallengeName),
    "handleCompleteNewPasswordChallenge": (()=>handleCompleteNewPasswordChallenge),
    "handleCustomAuthFlowWithoutSRP": (()=>handleCustomAuthFlowWithoutSRP),
    "handleCustomChallenge": (()=>handleCustomChallenge),
    "handleCustomSRPAuthFlow": (()=>handleCustomSRPAuthFlow),
    "handleMFAChallenge": (()=>handleMFAChallenge),
    "handleMFASetupChallenge": (()=>handleMFASetupChallenge),
    "handleSelectMFATypeChallenge": (()=>handleSelectMFATypeChallenge),
    "handleUserPasswordAuthFlow": (()=>handleUserPasswordAuthFlow),
    "handleUserSRPAuthFlow": (()=>handleUserSRPAuthFlow),
    "mapMfaType": (()=>mapMfaType),
    "parseAttributes": (()=>parseAttributes),
    "parseMFATypes": (()=>parseMFATypes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/types/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/getCurrentUser.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createInitiateAuthClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRespondToAuthChallengeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createVerifySoftwareTokenClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createVerifySoftwareTokenClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createAssociateSoftwareTokenClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createAssociateSoftwareTokenClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleWebAuthnSignInResult$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleWebAuthnSignInResult.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$shared$2f$handlePasswordSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/shared/handlePasswordSRP.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleSelectChallenge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleSelectChallenge.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleSelectChallengeWithPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleSelectChallengeWithPassword.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleSelectChallengeWithPasswordSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleSelectChallengeWithPasswordSRP.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/srp/getAuthenticationHelper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handlePasswordVerifierChallenge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/handlePasswordVerifierChallenge.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handleDeviceSRPAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/handleDeviceSRPAuth.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/retryOnResourceNotFoundException.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/setActiveSignInUsername.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const USER_ATTRIBUTES = 'userAttributes.';
function isWebAuthnResultAuthSignInOutput(result) {
    return 'isSignedIn' in result && 'nextStep' in result;
}
async function handleCustomChallenge({ challengeResponse, clientMetadata, session, username, config, tokenOrchestrator }) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const challengeResponses = {
        USERNAME: username,
        ANSWER: challengeResponse
    };
    const deviceMetadata = await tokenOrchestrator?.getDeviceMetadata(username);
    if (deviceMetadata && deviceMetadata.deviceKey) {
        challengeResponses.DEVICE_KEY = deviceMetadata.deviceKey;
    }
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReq = {
        ChallengeName: 'CUSTOM_CHALLENGE',
        ChallengeResponses: challengeResponses,
        Session: session,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData
    };
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const response = await respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
    }, jsonReq);
    if (response.ChallengeName === 'DEVICE_SRP_AUTH') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handleDeviceSRPAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDeviceSRPAuth"])({
            username,
            config,
            clientMetadata,
            session: response.Session,
            tokenOrchestrator
        });
    }
    return response;
}
async function handleMFASetupChallenge({ challengeResponse, username, clientMetadata, session, deviceName, config }) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    if (challengeResponse === 'EMAIL') {
        return {
            ChallengeName: 'MFA_SETUP',
            Session: session,
            ChallengeParameters: {
                MFAS_CAN_SETUP: '["EMAIL_OTP"]'
            },
            $metadata: {}
        };
    }
    if (challengeResponse === 'TOTP') {
        return {
            ChallengeName: 'MFA_SETUP',
            Session: session,
            ChallengeParameters: {
                MFAS_CAN_SETUP: '["SOFTWARE_TOKEN_MFA"]'
            },
            $metadata: {}
        };
    }
    const challengeResponses = {
        USERNAME: username
    };
    const isTOTPCode = /^\d+$/.test(challengeResponse);
    if (isTOTPCode) {
        const verifySoftwareToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createVerifySoftwareTokenClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVerifySoftwareTokenClient"])({
            endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
                endpointOverride: userPoolEndpoint
            })
        });
        const { Session } = await verifySoftwareToken({
            region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
            userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
        }, {
            UserCode: challengeResponse,
            Session: session,
            FriendlyDeviceName: deviceName
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInStore"].dispatch({
            type: 'SET_SIGN_IN_SESSION',
            value: Session
        });
        const jsonReq = {
            ChallengeName: 'MFA_SETUP',
            ChallengeResponses: challengeResponses,
            Session,
            ClientMetadata: clientMetadata,
            ClientId: userPoolClientId
        };
        const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
            endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
                endpointOverride: userPoolEndpoint
            })
        });
        return respondToAuthChallenge({
            region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
            userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
        }, jsonReq);
    }
    const isEmail = challengeResponse.includes('@');
    if (isEmail) {
        challengeResponses.EMAIL = challengeResponse;
        const jsonReq = {
            ChallengeName: 'MFA_SETUP',
            ChallengeResponses: challengeResponses,
            Session: session,
            ClientMetadata: clientMetadata,
            ClientId: userPoolClientId
        };
        const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
            endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
                endpointOverride: userPoolEndpoint
            })
        });
        return respondToAuthChallenge({
            region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
            userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
        }, jsonReq);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorCodes"].SignInException,
        message: `Cannot proceed with MFA setup using challengeResponse: ${challengeResponse}`,
        recoverySuggestion: 'Try passing "EMAIL", "TOTP", a valid email, or OTP code as the challengeResponse.'
    });
}
async function handleSelectMFATypeChallenge({ challengeResponse, username, clientMetadata, session, config }) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(challengeResponse === 'TOTP' || challengeResponse === 'SMS' || challengeResponse === 'EMAIL', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].IncorrectMFAMethod);
    const challengeResponses = {
        USERNAME: username,
        ANSWER: mapMfaType(challengeResponse)
    };
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReq = {
        ChallengeName: 'SELECT_MFA_TYPE',
        ChallengeResponses: challengeResponses,
        Session: session,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData
    };
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    return respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
    }, jsonReq);
}
async function handleCompleteNewPasswordChallenge({ challengeResponse, clientMetadata, session, username, requiredAttributes, config }) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const challengeResponses = {
        ...createAttributes(requiredAttributes),
        NEW_PASSWORD: challengeResponse,
        USERNAME: username
    };
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReq = {
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ChallengeResponses: challengeResponses,
        ClientMetadata: clientMetadata,
        Session: session,
        ClientId: userPoolClientId,
        UserContextData
    };
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    return respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
    }, jsonReq);
}
async function handleUserPasswordAuthFlow(username, password, clientMetadata, config, tokenOrchestrator) {
    const { userPoolClientId, userPoolId, userPoolEndpoint } = config;
    const authParameters = {
        USERNAME: username,
        PASSWORD: password
    };
    const deviceMetadata = await tokenOrchestrator.getDeviceMetadata(username);
    if (deviceMetadata && deviceMetadata.deviceKey) {
        authParameters.DEVICE_KEY = deviceMetadata.deviceKey;
    }
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReq = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        AuthParameters: authParameters,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData
    };
    const initiateAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitiateAuthClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const response = await initiateAuth({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignIn)
    }, jsonReq);
    const activeUsername = response.ChallengeParameters?.USERNAME ?? response.ChallengeParameters?.USER_ID_FOR_SRP ?? username;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInUsername"])(activeUsername);
    if (response.ChallengeName === 'DEVICE_SRP_AUTH') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handleDeviceSRPAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDeviceSRPAuth"])({
        username: activeUsername,
        config,
        clientMetadata,
        session: response.Session,
        tokenOrchestrator
    });
    return response;
}
async function handleUserSRPAuthFlow(username, password, clientMetadata, config, tokenOrchestrator) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$shared$2f$handlePasswordSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlePasswordSRP"])({
        username,
        password,
        clientMetadata,
        config,
        tokenOrchestrator,
        authFlow: 'USER_SRP_AUTH'
    });
}
async function handleCustomAuthFlowWithoutSRP(username, clientMetadata, config, tokenOrchestrator) {
    const { userPoolClientId, userPoolId, userPoolEndpoint } = config;
    const authParameters = {
        USERNAME: username
    };
    const deviceMetadata = await tokenOrchestrator.getDeviceMetadata(username);
    if (deviceMetadata && deviceMetadata.deviceKey) {
        authParameters.DEVICE_KEY = deviceMetadata.deviceKey;
    }
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReq = {
        AuthFlow: 'CUSTOM_AUTH',
        AuthParameters: authParameters,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData
    };
    const initiateAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitiateAuthClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const response = await initiateAuth({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignIn)
    }, jsonReq);
    const activeUsername = response.ChallengeParameters?.USERNAME ?? username;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInUsername"])(activeUsername);
    if (response.ChallengeName === 'DEVICE_SRP_AUTH') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handleDeviceSRPAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDeviceSRPAuth"])({
        username: activeUsername,
        config,
        clientMetadata,
        session: response.Session,
        tokenOrchestrator
    });
    return response;
}
async function handleCustomSRPAuthFlow(username, password, clientMetadata, config, tokenOrchestrator) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(config);
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const userPoolName = userPoolId?.split('_')[1] || '';
    const authenticationHelper = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$srp$2f$getAuthenticationHelper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticationHelper"])(userPoolName);
    const authParameters = {
        USERNAME: username,
        SRP_A: authenticationHelper.A.toString(16),
        CHALLENGE_NAME: 'SRP_A'
    };
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReq = {
        AuthFlow: 'CUSTOM_AUTH',
        AuthParameters: authParameters,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData
    };
    const initiateAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitiateAuthClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const { ChallengeParameters: challengeParameters, Session: session } = await initiateAuth({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignIn)
    }, jsonReq);
    const activeUsername = challengeParameters?.USERNAME ?? username;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInUsername"])(activeUsername);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryOnResourceNotFoundException"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$handlePasswordVerifierChallenge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlePasswordVerifierChallenge"], [
        password,
        challengeParameters,
        clientMetadata,
        session,
        authenticationHelper,
        config,
        tokenOrchestrator
    ], activeUsername, tokenOrchestrator);
}
async function getSignInResult(params) {
    const { challengeName, challengeParameters, availableChallenges } = params;
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    switch(challengeName){
        case 'CUSTOM_CHALLENGE':
            return {
                isSignedIn: false,
                nextStep: {
                    signInStep: 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE',
                    additionalInfo: challengeParameters
                }
            };
        case 'MFA_SETUP':
            {
                const { signInSession, username } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInStore"].getState();
                const mfaSetupTypes = getMFATypes(parseMFATypes(challengeParameters.MFAS_CAN_SETUP)) || [];
                const allowedMfaSetupTypes = getAllowedMfaSetupTypes(mfaSetupTypes);
                const isTotpMfaSetupAvailable = allowedMfaSetupTypes.includes('TOTP');
                const isEmailMfaSetupAvailable = allowedMfaSetupTypes.includes('EMAIL');
                if (isTotpMfaSetupAvailable && isEmailMfaSetupAvailable) {
                    return {
                        isSignedIn: false,
                        nextStep: {
                            signInStep: 'CONTINUE_SIGN_IN_WITH_MFA_SETUP_SELECTION',
                            allowedMFATypes: allowedMfaSetupTypes
                        }
                    };
                }
                if (isEmailMfaSetupAvailable) {
                    return {
                        isSignedIn: false,
                        nextStep: {
                            signInStep: 'CONTINUE_SIGN_IN_WITH_EMAIL_SETUP'
                        }
                    };
                }
                if (isTotpMfaSetupAvailable) {
                    const associateSoftwareToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createAssociateSoftwareTokenClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAssociateSoftwareTokenClient"])({
                        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
                            endpointOverride: authConfig.userPoolEndpoint
                        })
                    });
                    const { Session, SecretCode: secretCode } = await associateSoftwareToken({
                        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(authConfig.userPoolId)
                    }, {
                        Session: signInSession
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInStore"].dispatch({
                        type: 'SET_SIGN_IN_SESSION',
                        value: Session
                    });
                    return {
                        isSignedIn: false,
                        nextStep: {
                            signInStep: 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP',
                            totpSetupDetails: getTOTPSetupDetails(secretCode, username)
                        }
                    };
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorCodes"].SignInException,
                    message: `Cannot initiate MFA setup from available types: ${mfaSetupTypes}`
                });
            }
        case 'NEW_PASSWORD_REQUIRED':
            return {
                isSignedIn: false,
                nextStep: {
                    signInStep: 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED',
                    missingAttributes: parseAttributes(challengeParameters.requiredAttributes)
                }
            };
        case 'SELECT_MFA_TYPE':
            return {
                isSignedIn: false,
                nextStep: {
                    signInStep: 'CONTINUE_SIGN_IN_WITH_MFA_SELECTION',
                    allowedMFATypes: getMFATypes(parseMFATypes(challengeParameters.MFAS_CAN_CHOOSE))
                }
            };
        case 'SMS_OTP':
        case 'SMS_MFA':
            return {
                isSignedIn: false,
                nextStep: {
                    signInStep: 'CONFIRM_SIGN_IN_WITH_SMS_CODE',
                    codeDeliveryDetails: {
                        deliveryMedium: challengeParameters.CODE_DELIVERY_DELIVERY_MEDIUM,
                        destination: challengeParameters.CODE_DELIVERY_DESTINATION
                    }
                }
            };
        case 'SOFTWARE_TOKEN_MFA':
            return {
                isSignedIn: false,
                nextStep: {
                    signInStep: 'CONFIRM_SIGN_IN_WITH_TOTP_CODE'
                }
            };
        case 'EMAIL_OTP':
            return {
                isSignedIn: false,
                nextStep: {
                    signInStep: 'CONFIRM_SIGN_IN_WITH_EMAIL_CODE',
                    codeDeliveryDetails: {
                        deliveryMedium: challengeParameters.CODE_DELIVERY_DELIVERY_MEDIUM,
                        destination: challengeParameters.CODE_DELIVERY_DESTINATION
                    }
                }
            };
        case 'WEB_AUTHN':
            {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleWebAuthnSignInResult$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleWebAuthnSignInResult"])(challengeParameters);
                if (isWebAuthnResultAuthSignInOutput(result)) {
                    return result;
                }
                return getSignInResult(result);
            }
        case 'PASSWORD':
        case 'PASSWORD_SRP':
            return {
                isSignedIn: false,
                nextStep: {
                    signInStep: 'CONFIRM_SIGN_IN_WITH_PASSWORD'
                }
            };
        case 'SELECT_CHALLENGE':
            return {
                isSignedIn: false,
                nextStep: {
                    signInStep: 'CONTINUE_SIGN_IN_WITH_FIRST_FACTOR_SELECTION',
                    availableChallenges
                }
            };
    }
    // TODO: remove this error message for production apps
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorCodes"].SignInException,
        message: 'An error occurred during the sign in process. ' + `${challengeName} challengeName returned by the underlying service was not addressed.`
    });
}
function getTOTPSetupDetails(secretCode, username) {
    return {
        sharedSecret: secretCode,
        getSetupUri: (appName, accountName)=>{
            const totpUri = `otpauth://totp/${appName}:${accountName ?? username}?secret=${secretCode}&issuer=${appName}`;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyUrl"](totpUri);
        }
    };
}
function getSignInResultFromError(errorName) {
    if (errorName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitiateAuthException"].PasswordResetRequiredException) {
        return {
            isSignedIn: false,
            nextStep: {
                signInStep: 'RESET_PASSWORD'
            }
        };
    } else if (errorName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitiateAuthException"].UserNotConfirmedException) {
        return {
            isSignedIn: false,
            nextStep: {
                signInStep: 'CONFIRM_SIGN_UP'
            }
        };
    }
}
function parseAttributes(attributes) {
    if (!attributes) return [];
    const parsedAttributes = JSON.parse(attributes).map((att)=>att.includes(USER_ATTRIBUTES) ? att.replace(USER_ATTRIBUTES, '') : att);
    return parsedAttributes;
}
function createAttributes(attributes) {
    if (!attributes) return {};
    const newAttributes = {};
    Object.entries(attributes).forEach(([key, value])=>{
        if (value) newAttributes[`${USER_ATTRIBUTES}${key}`] = value;
    });
    return newAttributes;
}
async function handleChallengeName(username, challengeName, session, challengeResponse, config, tokenOrchestrator, clientMetadata, options) {
    const userAttributes = options?.userAttributes;
    const deviceName = options?.friendlyDeviceName;
    switch(challengeName){
        case 'WEB_AUTHN':
        case 'SELECT_CHALLENGE':
            if (challengeResponse === 'PASSWORD_SRP' || challengeResponse === 'PASSWORD') {
                return {
                    ChallengeName: challengeResponse,
                    Session: session,
                    $metadata: {}
                };
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleSelectChallenge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initiateSelectedChallenge"])({
                username,
                session,
                selectedChallenge: challengeResponse,
                config,
                clientMetadata
            });
        case 'SELECT_MFA_TYPE':
            return handleSelectMFATypeChallenge({
                challengeResponse,
                clientMetadata,
                session,
                username,
                config
            });
        case 'MFA_SETUP':
            return handleMFASetupChallenge({
                challengeResponse,
                clientMetadata,
                session,
                username,
                deviceName,
                config
            });
        case 'NEW_PASSWORD_REQUIRED':
            return handleCompleteNewPasswordChallenge({
                challengeResponse,
                clientMetadata,
                session,
                username,
                requiredAttributes: userAttributes,
                config
            });
        case 'CUSTOM_CHALLENGE':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryOnResourceNotFoundException"])(handleCustomChallenge, [
                {
                    challengeResponse,
                    clientMetadata,
                    session,
                    username,
                    config,
                    tokenOrchestrator
                }
            ], username, tokenOrchestrator);
        case 'SMS_MFA':
        case 'SOFTWARE_TOKEN_MFA':
        case 'SMS_OTP':
        case 'EMAIL_OTP':
            return handleMFAChallenge({
                challengeName,
                challengeResponse,
                clientMetadata,
                session,
                username,
                config
            });
        case 'PASSWORD':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleSelectChallengeWithPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleSelectChallengeWithPassword"])(username, challengeResponse, clientMetadata, config, session);
        case 'PASSWORD_SRP':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleSelectChallengeWithPasswordSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleSelectChallengeWithPasswordSRP"])(username, challengeResponse, clientMetadata, config, session, tokenOrchestrator);
    }
    // TODO: remove this error message for production apps
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorCodes"].SignInException,
        message: `An error occurred during the sign in process.
		${challengeName} challengeName returned by the underlying service was not addressed.`
    });
}
function mapMfaType(mfa) {
    let mfaType = 'SMS_MFA';
    if (mfa === 'TOTP') mfaType = 'SOFTWARE_TOKEN_MFA';
    if (mfa === 'EMAIL') mfaType = 'EMAIL_OTP';
    return mfaType;
}
function getMFAType(type) {
    if (type === 'SMS_MFA') return 'SMS';
    if (type === 'SOFTWARE_TOKEN_MFA') return 'TOTP';
    if (type === 'EMAIL_OTP') return 'EMAIL';
// TODO: log warning for unknown MFA type
}
function getMFATypes(types) {
    if (!types) return undefined;
    return types.map(getMFAType).filter(Boolean);
}
function parseMFATypes(mfa) {
    if (!mfa) return [];
    return JSON.parse(mfa);
}
function getAllowedMfaSetupTypes(availableMfaSetupTypes) {
    return availableMfaSetupTypes.filter((authMfaType)=>authMfaType === 'EMAIL' || authMfaType === 'TOTP');
}
async function assertUserNotAuthenticated() {
    let authUser;
    try {
        authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    } catch (error) {}
    if (authUser && authUser.userId && authUser.username) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_ALREADY_AUTHENTICATED_EXCEPTION"],
            message: 'There is already a signed in user.',
            recoverySuggestion: 'Call signOut before calling signIn again.'
        });
    }
}
function getActiveSignInUsername(username) {
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInStore"].getState();
    return state.username ?? username;
}
async function handleMFAChallenge({ challengeName, challengeResponse, clientMetadata, session, username, config }) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const challengeResponses = {
        USERNAME: username
    };
    if (challengeName === 'EMAIL_OTP') {
        challengeResponses.EMAIL_OTP_CODE = challengeResponse;
    }
    if (challengeName === 'SMS_MFA') {
        challengeResponses.SMS_MFA_CODE = challengeResponse;
    }
    if (challengeName === 'SMS_OTP') {
        challengeResponses.SMS_OTP_CODE = challengeResponse;
    }
    if (challengeName === 'SOFTWARE_TOKEN_MFA') {
        challengeResponses.SOFTWARE_TOKEN_MFA_CODE = challengeResponse;
    }
    const userContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const jsonReq = {
        ChallengeName: challengeName,
        ChallengeResponses: challengeResponses,
        Session: session,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData: userContextData
    };
    const respondToAuthChallenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRespondToAuthChallengeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRespondToAuthChallengeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    return respondToAuthChallenge({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn)
    }, jsonReq);
}
;
 //# sourceMappingURL=signInHelpers.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithCustomAuth.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signInWithCustomAuth": (()=>signInWithCustomAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/retryOnResourceNotFoundException.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/getNewDeviceMetadata.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Signs a user in using a custom authentication flow without password
 *
 * @param input -  The SignInWithCustomAuthInput object
 * @returns AuthSignInResult
 * @throws service: {@link InitiateAuthException } - Cognito service errors thrown during the sign-in process.
 * @throws validation: {@link AuthValidationErrorCode  } - Validation errors thrown when either username or password
 *  are not defined.
 * @throws SignInWithCustomAuthOutput - Thrown when the token provider config is invalid.
 */ async function signInWithCustomAuth(input) {
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { username, password, options } = input;
    const signInDetails = {
        loginId: username,
        authFlowType: 'CUSTOM_WITHOUT_SRP'
    };
    const metadata = options?.clientMetadata;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInUsername);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!password, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].CustomAuthSignInPassword);
    try {
        const { ChallengeName: retriedChallengeName, ChallengeParameters: retiredChallengeParameters, AuthenticationResult, Session } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryOnResourceNotFoundException"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleCustomAuthFlowWithoutSRP"], [
            username,
            metadata,
            authConfig,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"]
        ], username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"]);
        const activeUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveSignInUsername"])(username);
        // sets up local state used during the sign-in process
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInState"])({
            signInSession: Session,
            username: activeUsername,
            challengeName: retriedChallengeName,
            signInDetails
        });
        if (AuthenticationResult) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
                username: activeUsername,
                ...AuthenticationResult,
                NewDeviceMetadata: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNewDeviceMetadata"])({
                    userPoolId: authConfig.userPoolId,
                    userPoolEndpoint: authConfig.userPoolEndpoint,
                    newDeviceMetadata: AuthenticationResult.NewDeviceMetadata,
                    accessToken: AuthenticationResult.AccessToken
                }),
                signInDetails
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSignedInHubEvent"])();
            return {
                isSignedIn: true,
                nextStep: {
                    signInStep: 'DONE'
                }
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResult"])({
            challengeName: retriedChallengeName,
            challengeParameters: retiredChallengeParameters
        });
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(error);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResultFromError"])(error.name);
        if (result) return result;
        throw error;
    }
}
;
 //# sourceMappingURL=signInWithCustomAuth.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithCustomSRPAuth.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signInWithCustomSRPAuth": (()=>signInWithCustomSRPAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/getNewDeviceMetadata.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Signs a user in using a custom authentication flow with SRP
 *
 * @param input -  The SignInWithCustomSRPAuthInput object
 * @returns SignInWithCustomSRPAuthOutput
 * @throws service: {@link InitiateAuthException }, {@link RespondToAuthChallengeException } - Cognito
 * service errors thrown during the sign-in process.
 * @throws validation: {@link AuthValidationErrorCode  } - Validation errors thrown when either username or password
 *  are not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function signInWithCustomSRPAuth(input) {
    const { username, password, options } = input;
    const signInDetails = {
        loginId: username,
        authFlowType: 'CUSTOM_WITH_SRP'
    };
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const metadata = options?.clientMetadata;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInUsername);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!password, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInPassword);
    try {
        const { ChallengeName: handledChallengeName, ChallengeParameters: handledChallengeParameters, AuthenticationResult, Session } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleCustomSRPAuthFlow"])(username, password, metadata, authConfig, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"]);
        const activeUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveSignInUsername"])(username);
        // sets up local state used during the sign-in process
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInState"])({
            signInSession: Session,
            username: activeUsername,
            challengeName: handledChallengeName,
            signInDetails
        });
        if (AuthenticationResult) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
                username: activeUsername,
                ...AuthenticationResult,
                NewDeviceMetadata: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNewDeviceMetadata"])({
                    userPoolId: authConfig.userPoolId,
                    userPoolEndpoint: authConfig.userPoolEndpoint,
                    newDeviceMetadata: AuthenticationResult.NewDeviceMetadata,
                    accessToken: AuthenticationResult.AccessToken
                }),
                signInDetails
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSignedInHubEvent"])();
            return {
                isSignedIn: true,
                nextStep: {
                    signInStep: 'DONE'
                }
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResult"])({
            challengeName: handledChallengeName,
            challengeParameters: handledChallengeParameters
        });
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(error);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResultFromError"])(error.name);
        if (result) return result;
        throw error;
    }
}
;
 //# sourceMappingURL=signInWithCustomSRPAuth.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/autoSignInStore.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "autoSignInStore": (()=>autoSignInStore)
});
function defaultState() {
    return {
        active: false
    };
}
const autoSignInReducer = (state, action)=>{
    switch(action.type){
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.value
            };
        case 'SET_SESSION':
            return {
                ...state,
                session: action.value
            };
        case 'START':
            return {
                ...state,
                active: true
            };
        case 'RESET':
            return defaultState();
        default:
            return state;
    }
};
const createAutoSignInStore = (reducer)=>{
    let currentState = reducer(defaultState(), {
        type: 'RESET'
    });
    return {
        getState: ()=>currentState,
        dispatch: (action)=>{
            currentState = reducer(currentState, action);
        }
    };
};
const autoSignInStore = createAutoSignInStore(autoSignInReducer);
;
 //# sourceMappingURL=autoSignInStore.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "autoSignIn": (()=>autoSignIn),
    "resetAutoSignIn": (()=>resetAutoSignIn),
    "setAutoSignIn": (()=>setAutoSignIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/autoSignInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const initialAutoSignIn = async ()=>{
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTO_SIGN_IN_EXCEPTION"],
        message: 'The autoSignIn flow has not started, or has been cancelled/completed.',
        recoverySuggestion: 'Please try to use the signIn API or log out before starting a new autoSignIn flow.'
    });
};
/**
 * Signs a user in automatically after finishing the sign-up process.
 *
 * This API will automatically sign a user in if the autoSignIn flow has been completed in the following cases:
 * - User confirmed their account with a verification code sent to their phone or email (default option).
 * - User confirmed their account with a verification link sent to their phone or email. In order to
 * enable this option you need to go to the Amazon Cognito [console](https://aws.amazon.com/pm/cognito),
 * look for your userpool, then go to the `Messaging` tab and enable `link` mode inside the `Verification message` option.
 * Finally you need to define the `signUpVerificationMethod` in your `Auth` config.
 *
 * @example
 * ```typescript
 *  Amplify.configure({
 *    Auth: {
 *     Cognito: {
 *    ...cognitoConfig,
 *    signUpVerificationMethod: "link" // the default value is "code"
 *   }
 *	}});
 * ```
 *
 * @throws AutoSignInException - Thrown when the autoSignIn flow has not started, or has been cancelled/completed.
 * @returns The signInOutput.
 *
 * @example
 * ```typescript
 *  // handleSignUp.ts
 * async function handleSignUp(
 *   username:string,
 *   password:string
 * ){
 *   try {
 *     const { nextStep } = await signUp({
 *       username,
 *       password,
 *       options: {
 *         userAttributes:{ email:'email@email.com'},
 *         autoSignIn: true // This enables the auto sign-in flow.
 *       },
 *     });
 *
 *     handleSignUpStep(nextStep);
 *
 *   } catch (error) {
 *     console.log(error);
 *   }
 * }
 *
 * // handleConfirmSignUp.ts
 * async function handleConfirmSignUp(username:string, confirmationCode:string) {
 *   try {
 *     const { nextStep } = await confirmSignUp({
 *       username,
 *       confirmationCode,
 *     });
 *
 *     handleSignUpStep(nextStep);
 *   } catch (error) {
 *     console.log(error);
 *   }
 * }
 *
 * // signUpUtils.ts
 * async function handleSignUpStep( step: SignUpOutput["nextStep"]) {
 * switch (step.signUpStep) {
 *   case "CONFIRM_SIGN_UP":
 *
 *    // Redirect end-user to confirm-sign up screen.
 *
 *   case "COMPLETE_AUTO_SIGN_IN":
 *	   const codeDeliveryDetails = step.codeDeliveryDetails;
 *     if (codeDeliveryDetails) {
 *      // Redirect user to confirm-sign-up with link screen.
 *     }
 *     const signInOutput = await autoSignIn();
 *   // handle sign-in steps
 * }
 *
 * ```
 */ // TODO(Eslint): can this be refactored not using `let` on exported member?
// eslint-disable-next-line import/no-mutable-exports
let autoSignIn = initialAutoSignIn;
/**
 * Sets the context of autoSignIn at run time.
 * @internal
 */ function setAutoSignIn(callback) {
    autoSignIn = callback;
}
/**
 * Resets the context
 *
 * @internal
 */ function resetAutoSignIn(resetCallback = true) {
    if (resetCallback) {
        autoSignIn = initialAutoSignIn;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInStore"].dispatch({
        type: 'RESET'
    });
}
;
 //# sourceMappingURL=autoSignIn.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithSRP.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signInWithSRP": (()=>signInWithSRP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/getNewDeviceMetadata.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Signs a user in
 *
 * @param input - The SignInWithSRPInput object
 * @returns SignInWithSRPOutput
 * @throws service: {@link InitiateAuthException }, {@link RespondToAuthChallengeException } - Cognito service errors
 * thrown during the sign-in process.
 * @throws validation: {@link AuthValidationErrorCode  } - Validation errors thrown when either username or password
 *  are not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function signInWithSRP(input) {
    const { username, password } = input;
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    const signInDetails = {
        loginId: username,
        authFlowType: 'USER_SRP_AUTH'
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const clientMetaData = input.options?.clientMetadata;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInUsername);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!password, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInPassword);
    try {
        const { ChallengeName: handledChallengeName, ChallengeParameters: handledChallengeParameters, AuthenticationResult, Session } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUserSRPAuthFlow"])(username, password, clientMetaData, authConfig, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"]);
        const activeUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveSignInUsername"])(username);
        // sets up local state used during the sign-in process
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInState"])({
            signInSession: Session,
            username: activeUsername,
            challengeName: handledChallengeName,
            signInDetails
        });
        if (AuthenticationResult) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
                username: activeUsername,
                ...AuthenticationResult,
                NewDeviceMetadata: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNewDeviceMetadata"])({
                    userPoolId: authConfig.userPoolId,
                    userPoolEndpoint: authConfig.userPoolEndpoint,
                    newDeviceMetadata: AuthenticationResult.NewDeviceMetadata,
                    accessToken: AuthenticationResult.AccessToken
                }),
                signInDetails
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSignedInHubEvent"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
            return {
                isSignedIn: true,
                nextStep: {
                    signInStep: 'DONE'
                }
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResult"])({
            challengeName: handledChallengeName,
            challengeParameters: handledChallengeParameters
        });
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(error);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResultFromError"])(error.name);
        if (result) return result;
        throw error;
    }
}
;
 //# sourceMappingURL=signInWithSRP.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithUserPassword.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signInWithUserPassword": (()=>signInWithUserPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/retryOnResourceNotFoundException.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/getNewDeviceMetadata.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Signs a user in using USER_PASSWORD_AUTH AuthFlowType
 *
 * @param input - The SignInWithUserPasswordInput object
 * @returns SignInWithUserPasswordOutput
 * @throws service: {@link InitiateAuthException } - Cognito service error thrown during the sign-in process.
 * @throws validation: {@link AuthValidationErrorCode  } - Validation errors thrown when either username or password
 *  are not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function signInWithUserPassword(input) {
    const { username, password, options } = input;
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    const signInDetails = {
        loginId: username,
        authFlowType: 'USER_PASSWORD_AUTH'
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const metadata = options?.clientMetadata;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInUsername);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!password, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInPassword);
    try {
        const { ChallengeName: retiredChallengeName, ChallengeParameters: retriedChallengeParameters, AuthenticationResult, Session } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$retryOnResourceNotFoundException$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryOnResourceNotFoundException"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUserPasswordAuthFlow"], [
            username,
            password,
            metadata,
            authConfig,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"]
        ], username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"]);
        const activeUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveSignInUsername"])(username);
        // sets up local state used during the sign-in process
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInState"])({
            signInSession: Session,
            username: activeUsername,
            challengeName: retiredChallengeName,
            signInDetails
        });
        if (AuthenticationResult) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
                ...AuthenticationResult,
                username: activeUsername,
                NewDeviceMetadata: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNewDeviceMetadata"])({
                    userPoolId: authConfig.userPoolId,
                    userPoolEndpoint: authConfig.userPoolEndpoint,
                    newDeviceMetadata: AuthenticationResult.NewDeviceMetadata,
                    accessToken: AuthenticationResult.AccessToken
                }),
                signInDetails
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSignedInHubEvent"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
            return {
                isSignedIn: true,
                nextStep: {
                    signInStep: 'DONE'
                }
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResult"])({
            challengeName: retiredChallengeName,
            challengeParameters: retriedChallengeParameters
        });
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(error);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResultFromError"])(error.name);
        if (result) return result;
        throw error;
    }
}
;
 //# sourceMappingURL=signInWithUserPassword.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleUserAuthFlow.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleUserAuthFlow": (()=>handleUserAuthFlow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createInitiateAuthClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$shared$2f$handlePasswordSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/shared/handlePasswordSRP.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/setActiveSignInUsername.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Handles user authentication flow with configurable challenge preferences.
 * Supports AuthFactorType challenges through the USER_AUTH flow.
 *
 * @param {HandleUserAuthFlowInput} params - Authentication flow parameters
 * @param {string} params.username - The username for authentication
 * @param {Record<string, string>} [params.clientMetadata] - Optional metadata to pass to authentication service
 * @param {CognitoUserPoolConfig} params.config - Cognito User Pool configuration
 * @param {AuthTokenOrchestrator} params.tokenOrchestrator - Manages authentication tokens and device tracking
 * @param {AuthFactorType} [params.preferredChallenge] - Optional preferred authentication method
 * @param {string} [params.password] - Required when preferredChallenge is 'PASSWORD' or 'PASSWORD_SRP'
 *
 * @returns {Promise<InitiateAuthCommandOutput>} The authentication response from Cognito
 */ async function handleUserAuthFlow({ username, clientMetadata, config, tokenOrchestrator, preferredChallenge, password, session }) {
    const { userPoolId, userPoolClientId, userPoolEndpoint } = config;
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const authParameters = {
        USERNAME: username
    };
    if (preferredChallenge) {
        if (preferredChallenge === 'PASSWORD_SRP') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!password, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInPassword);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$shared$2f$handlePasswordSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlePasswordSRP"])({
                username,
                password,
                clientMetadata,
                config,
                tokenOrchestrator,
                authFlow: 'USER_AUTH',
                preferredChallenge
            });
        }
        if (preferredChallenge === 'PASSWORD') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!password, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInPassword);
            authParameters.PASSWORD = password;
        }
        authParameters.PREFERRED_CHALLENGE = preferredChallenge;
    }
    const jsonReq = {
        AuthFlow: 'USER_AUTH',
        AuthParameters: authParameters,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData
    };
    if (session) {
        jsonReq.Session = session;
    }
    const initiateAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createInitiateAuthClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitiateAuthClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const response = await initiateAuth({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignIn)
    }, jsonReq);
    // Set the active username immediately after successful authentication attempt
    // If a user starts a new sign-in while another sign-in is incomplete,
    // this ensures we're tracking the correct user for subsequent auth challenges.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$setActiveSignInUsername$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInUsername"])(username);
    return response;
}
;
 //# sourceMappingURL=handleUserAuthFlow.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithUserAuth.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signInWithUserAuth": (()=>signInWithUserAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/autoSignInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleUserAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/flows/userAuth/handleUserAuthFlow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/getNewDeviceMetadata.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Signs a user in through a registered email or phone number without a password by by receiving and entering an OTP.
 *
 * @param input - The SignInWithUserAuthInput object
 * @returns SignInWithUserAuthOutput
 * @throws service: {@link InitiateAuthException }, {@link RespondToAuthChallengeException } - Cognito service errors
 * thrown during the sign-in process.
 * @throws validation: {@link AuthValidationErrorCode  } - Validation errors thrown when either username or password -- needs to change
 *  are not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function signInWithUserAuth(input) {
    const { username, password, options } = input;
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    const signInDetails = {
        loginId: username,
        authFlowType: 'USER_AUTH'
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const clientMetaData = options?.clientMetadata;
    const preferredChallenge = options?.preferredChallenge;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignInUsername);
    try {
        const handleUserAuthFlowInput = {
            username,
            config: authConfig,
            tokenOrchestrator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"],
            clientMetadata: clientMetaData,
            preferredChallenge,
            password
        };
        const autoSignInStoreState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInStore"].getState();
        if (autoSignInStoreState.active && autoSignInStoreState.username === username) {
            handleUserAuthFlowInput.session = autoSignInStoreState.session;
        }
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$flows$2f$userAuth$2f$handleUserAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUserAuthFlow"])(handleUserAuthFlowInput);
        const activeUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveSignInUsername"])(username);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInState"])({
            signInSession: response.Session,
            username: activeUsername,
            challengeName: response.ChallengeName,
            signInDetails
        });
        if (response.AuthenticationResult) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
                username: activeUsername,
                ...response.AuthenticationResult,
                NewDeviceMetadata: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNewDeviceMetadata"])({
                    userPoolId: authConfig.userPoolId,
                    userPoolEndpoint: authConfig.userPoolEndpoint,
                    newDeviceMetadata: response.AuthenticationResult.NewDeviceMetadata,
                    accessToken: response.AuthenticationResult.AccessToken
                }),
                signInDetails
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSignedInHubEvent"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
            return {
                isSignedIn: true,
                nextStep: {
                    signInStep: 'DONE'
                }
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResult"])({
            challengeName: response.ChallengeName,
            challengeParameters: response.ChallengeParameters,
            availableChallenges: 'AvailableChallenges' in response ? response.AvailableChallenges : undefined
        });
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(error);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResultFromError"])(error.name);
        if (result) return result;
        throw error;
    }
}
;
 //# sourceMappingURL=signInWithUserAuth.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signIn.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signIn": (()=>signIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithCustomAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithCustomAuth.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithCustomSRPAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithCustomSRPAuth.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithSRP.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithUserPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithUserPassword.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithUserAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithUserAuth.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Signs a user in
 *
 * @param input -  The SignInInput object
 * @returns SignInOutput
 * @throws service: {@link InitiateAuthException }, {@link RespondToAuthChallengeException }
 *  - Cognito service errors thrown during the sign-in process.
 * @throws validation: {@link AuthValidationErrorCode  } - Validation errors thrown when either username or password
 *  are not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function signIn(input) {
    // Here we want to reset the store but not reassign the callback.
    // The callback is reset when the underlying promise resolves or rejects.
    // With the advent of session based sign in, this guarantees that the signIn API initiates a new auth flow,
    // regardless of whether it is called for a user currently engaged in an active auto sign in session.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])(false);
    const authFlowType = input.options?.authFlowType;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertUserNotAuthenticated"])();
    switch(authFlowType){
        case 'USER_SRP_AUTH':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithSRP"])(input);
        case 'USER_PASSWORD_AUTH':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithUserPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithUserPassword"])(input);
        case 'CUSTOM_WITHOUT_SRP':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithCustomAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithCustomAuth"])(input);
        case 'CUSTOM_WITH_SRP':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithCustomSRPAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithCustomSRPAuth"])(input);
        case 'USER_AUTH':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithUserAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithUserAuth"])(input);
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithSRP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithSRP"])(input);
    }
}
;
 //# sourceMappingURL=signIn.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/apiHelpers.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Transforms a user attributes object into an array of AttributeType objects.
 * @param attributes user attributes to be mapped to AttributeType objects.
 * @returns an array of AttributeType objects.
 */ __turbopack_context__.s({
    "toAttributeType": (()=>toAttributeType),
    "toAuthUserAttribute": (()=>toAuthUserAttribute)
});
function toAttributeType(attributes) {
    return Object.entries(attributes).map(([key, value])=>({
            Name: key,
            Value: value
        }));
}
/**
 * Transforms an array of AttributeType objects into a user attributes object.
 *
 * @param attributes - an array of AttributeType objects.
 * @returns AuthUserAttributes object.
 */ function toAuthUserAttribute(attributes) {
    const userAttributes = {};
    attributes?.forEach((attribute)=>{
        if (attribute.Name) userAttributes[attribute.Name] = attribute.Value;
    });
    return userAttributes;
}
;
 //# sourceMappingURL=apiHelpers.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signUpHelpers.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "autoSignInUserConfirmed": (()=>autoSignInUserConfirmed),
    "autoSignInWhenUserIsConfirmedWithLink": (()=>autoSignInWhenUserIsConfirmedWithLink),
    "handleCodeAutoSignIn": (()=>handleCodeAutoSignIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signIn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithUserAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithUserAuth.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const MAX_AUTOSIGNIN_POLLING_MS = 3 * 60 * 1000;
function handleCodeAutoSignIn(signInInput) {
    const stopHubListener = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HubInternal"].listen('auth-internal', async ({ payload })=>{
        switch(payload.event){
            case 'confirmSignUp':
                {
                    const response = payload.data;
                    if (response?.isSignUpComplete) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HubInternal"].dispatch('auth-internal', {
                            event: 'autoSignIn'
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAutoSignIn"])(autoSignInWithCode(signInInput));
                        stopHubListener();
                    }
                }
        }
    });
    // This will stop the listener if confirmSignUp is not resolved.
    const timeOutId = setTimeout(()=>{
        stopHubListener();
        clearTimeout(timeOutId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
    }, MAX_AUTOSIGNIN_POLLING_MS);
}
function debounce(fun, delay) {
    let timer;
    return (args)=>{
        if (!timer) {
            fun(...args);
        }
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = undefined;
        }, delay);
    };
}
function handleAutoSignInWithLink(signInInput, resolve, reject) {
    const start = Date.now();
    const autoSignInPollingIntervalId = setInterval(async ()=>{
        const elapsedTime = Date.now() - start;
        const maxTime = MAX_AUTOSIGNIN_POLLING_MS;
        if (elapsedTime > maxTime) {
            clearInterval(autoSignInPollingIntervalId);
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTO_SIGN_IN_EXCEPTION"],
                message: 'The account was not confirmed on time.',
                recoverySuggestion: 'Try to verify your account by clicking the link sent your email or phone and then login manually.'
            }));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
        } else {
            try {
                const signInOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])(signInInput);
                if (signInOutput.nextStep.signInStep !== 'CONFIRM_SIGN_UP') {
                    resolve(signInOutput);
                    clearInterval(autoSignInPollingIntervalId);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
                }
            } catch (error) {
                clearInterval(autoSignInPollingIntervalId);
                reject(error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
            }
        }
    }, 5000);
}
const debouncedAutoSignInWithLink = debounce(handleAutoSignInWithLink, 300);
const debouncedAutoSignWithCodeOrUserConfirmed = debounce(handleAutoSignInWithCodeOrUserConfirmed, 300);
function autoSignInWhenUserIsConfirmedWithLink(signInInput) {
    return async ()=>{
        return new Promise((resolve, reject)=>{
            debouncedAutoSignInWithLink([
                signInInput,
                resolve,
                reject
            ]);
        });
    };
}
async function handleAutoSignInWithCodeOrUserConfirmed(signInInput, resolve, reject) {
    try {
        const output = signInInput?.options?.authFlowType === 'USER_AUTH' ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithUserAuth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithUserAuth"])(signInInput) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])(signInInput);
        resolve(output);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
    } catch (error) {
        reject(error);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
    }
}
function autoSignInWithCode(signInInput) {
    return async ()=>{
        return new Promise((resolve, reject)=>{
            debouncedAutoSignWithCodeOrUserConfirmed([
                signInInput,
                resolve,
                reject
            ]);
        });
    };
}
const autoSignInUserConfirmed = autoSignInWithCode;
;
 //# sourceMappingURL=signUpHelpers.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createSignUpClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSignUpClient": (()=>createSignUpClient),
    "createSignUpClientDeserializer": (()=>createSignUpClientDeserializer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/types/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createSignUpClientDeserializer = ()=>async (response)=>{
        if (response.statusCode >= 300) {
            const error = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonError"])(response);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(error);
            if (// Missing Password Error
            // 1 validation error detected: Value at 'password'failed to satisfy constraint: Member must not be null
            error.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignUpException"].InvalidParameterException && /'password'/.test(error.message) && /Member must not be null/.test(error.message)) {
                const name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignUpPassword;
                const { message, recoverySuggestion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validationErrorMap"][name];
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                    name,
                    message,
                    recoverySuggestion
                });
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: error.name,
                message: error.message
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonBody"])(response);
    };
const createSignUpClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('SignUp'), createSignUpClientDeserializer(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createSignUpClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signUp.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signUp": (()=>signUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$apiHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/apiHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signUpHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signUpHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createSignUpClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createSignUpClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/autoSignInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Creates a user
 *
 * @param input - The SignUpInput object
 * @returns SignUpOutput
 * @throws service: {@link SignUpException } - Cognito service errors thrown during the sign-up process.
 * @throws validation: {@link AuthValidationErrorCode } - Validation errors thrown either username or password
 *  are not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function signUp(input) {
    const { username, password, options } = input;
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    const signUpVerificationMethod = authConfig?.signUpVerificationMethod ?? 'code';
    const { clientMetadata, validationData, autoSignIn } = input.options ?? {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignUpUsername);
    const signInServiceOptions = typeof autoSignIn !== 'boolean' ? autoSignIn : undefined;
    const signInInput = {
        username,
        options: signInServiceOptions
    };
    // if the authFlowType is 'CUSTOM_WITHOUT_SRP' then we don't include the password
    if (signInServiceOptions?.authFlowType !== 'CUSTOM_WITHOUT_SRP') {
        signInInput.password = password;
    }
    const { userPoolId, userPoolClientId, userPoolEndpoint } = authConfig;
    const signUpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createSignUpClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSignUpClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const signUpClientInput = {
        Username: username,
        Password: undefined,
        UserAttributes: options?.userAttributes && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$apiHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAttributeType"])(options?.userAttributes),
        ClientMetadata: clientMetadata,
        ValidationData: validationData && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$apiHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAttributeType"])(validationData),
        ClientId: userPoolClientId,
        UserContextData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
            username,
            userPoolId,
            userPoolClientId
        })
    };
    if (password) {
        signUpClientInput.Password = password;
    }
    const { UserSub: userId, CodeDeliveryDetails: cdd, UserConfirmed: userConfirmed, Session: session } = await signUpClient({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignUp)
    }, signUpClientInput);
    if (signInServiceOptions || autoSignIn === true) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInStore"].dispatch({
            type: 'START'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInStore"].dispatch({
            type: 'SET_USERNAME',
            value: username
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInStore"].dispatch({
            type: 'SET_SESSION',
            value: session
        });
    }
    const codeDeliveryDetails = {
        destination: cdd?.Destination,
        deliveryMedium: cdd?.DeliveryMedium,
        attributeName: cdd?.AttributeName
    };
    const isSignUpComplete = !!userConfirmed;
    const isAutoSignInStarted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInStore"].getState().active;
    // Sign Up Complete
    // No Confirm Sign In Step Required
    if (isSignUpComplete) {
        if (isAutoSignInStarted) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAutoSignIn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signUpHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInUserConfirmed"])(signInInput));
            return {
                isSignUpComplete: true,
                nextStep: {
                    signUpStep: 'COMPLETE_AUTO_SIGN_IN'
                },
                userId
            };
        }
        return {
            isSignUpComplete: true,
            nextStep: {
                signUpStep: 'DONE'
            },
            userId
        };
    }
    // Sign Up Not Complete
    // Confirm Sign Up Step Required
    if (isAutoSignInStarted) {
        // Confirmation Via Link Occurs In Separate Context
        // AutoSignIn Fn Will Initiate Polling Once Executed
        if (signUpVerificationMethod === 'link') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAutoSignIn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signUpHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInWhenUserIsConfirmedWithLink"])(signInInput));
            return {
                isSignUpComplete: false,
                nextStep: {
                    signUpStep: 'COMPLETE_AUTO_SIGN_IN',
                    codeDeliveryDetails
                },
                userId
            };
        }
        // Confirmation Via Code Occurs In Same Context
        // AutoSignIn Next Step Will Be Returned From Confirm Sign Up
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signUpHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleCodeAutoSignIn"])(signInInput);
    }
    return {
        isSignUpComplete: false,
        nextStep: {
            signUpStep: 'CONFIRM_SIGN_UP',
            codeDeliveryDetails
        },
        userId
    };
}
;
 //# sourceMappingURL=signUp.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmSignIn.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "confirmSignIn": (()=>confirmSignIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/signInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/getNewDeviceMetadata.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Continues or completes the sign in process when required by the initial call to `signIn`.
 *
 * @param input -  The ConfirmSignInInput object
 * @returns ConfirmSignInOutput
 * @throws  -{@link VerifySoftwareTokenException }:
 * Thrown due to an invalid MFA token.
 * @throws  -{@link RespondToAuthChallengeException }:
 * Thrown due to an invalid auth challenge response.
 * @throws  -{@link AssociateSoftwareTokenException}:
 * Thrown due to a service error during the MFA setup process.
 * @throws  -{@link AuthValidationErrorCode }:
 * Thrown when `challengeResponse` is not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function confirmSignIn(input) {
    const { challengeResponse, options } = input;
    const { username, challengeName, signInSession, signInDetails } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInStore"].getState();
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const clientMetaData = options?.clientMetadata;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!challengeResponse, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyChallengeResponse);
    if (!username || !challengeName || !signInSession) // TODO: remove this error message for production apps
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorCodes"].SignInException,
        message: `
			An error occurred during the sign in process.

			This most likely occurred due to:
			1. signIn was not called before confirmSignIn.
			2. signIn threw an exception.
			3. page was refreshed during the sign in flow and session has expired.
			`,
        recoverySuggestion: 'Make sure a successful call to signIn is made before calling confirmSignIn' + 'and that the session has not expired.'
    });
    try {
        const { Session, ChallengeName: handledChallengeName, AuthenticationResult, ChallengeParameters: handledChallengeParameters } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleChallengeName"])(username, challengeName, signInSession, challengeResponse, authConfig, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"], clientMetaData, options);
        // sets up local state used during the sign-in process
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSignInState"])({
            signInSession: Session,
            username,
            challengeName: handledChallengeName,
            signInDetails
        });
        if (AuthenticationResult) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
                username,
                ...AuthenticationResult,
                NewDeviceMetadata: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$getNewDeviceMetadata$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNewDeviceMetadata"])({
                    userPoolId: authConfig.userPoolId,
                    userPoolEndpoint: authConfig.userPoolEndpoint,
                    newDeviceMetadata: AuthenticationResult.NewDeviceMetadata,
                    accessToken: AuthenticationResult.AccessToken
                }),
                signInDetails
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$signInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetActiveSignInState"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSignedInHubEvent"])();
            return {
                isSignedIn: true,
                nextStep: {
                    signInStep: 'DONE'
                }
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResult"])({
            challengeName: handledChallengeName,
            challengeParameters: handledChallengeParameters
        });
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertServiceError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertServiceError"])(error);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInResultFromError"])(error.name);
        if (result) return result;
        throw error;
    }
}
;
 //# sourceMappingURL=confirmSignIn.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createConfirmSignUpClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createConfirmSignUpClient": (()=>createConfirmSignUpClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createConfirmSignUpClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('ConfirmSignUp'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createConfirmSignUpClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmSignUp.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "confirmSignUp": (()=>confirmSignUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createConfirmSignUpClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createConfirmSignUpClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/client/utils/store/autoSignInStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Confirms a new user account.
 *
 * @param input -  The ConfirmSignUpInput object.
 * @returns ConfirmSignUpOutput
 * @throws -{@link ConfirmSignUpException }
 * Thrown due to an invalid confirmation code.
 * @throws -{@link AuthValidationErrorCode }
 * Thrown due to an empty confirmation code
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function confirmSignUp(input) {
    const { username, confirmationCode, options } = input;
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { userPoolId, userPoolClientId, userPoolEndpoint } = authConfig;
    const clientMetadata = options?.clientMetadata;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmSignUpUsername);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!confirmationCode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmSignUpCode);
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const confirmSignUpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createConfirmSignUpClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfirmSignUpClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const { Session: session } = await confirmSignUpClient({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(authConfig.userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignUp)
    }, {
        Username: username,
        ConfirmationCode: confirmationCode,
        ClientMetadata: clientMetadata,
        ForceAliasCreation: options?.forceAliasCreation,
        ClientId: authConfig.userPoolClientId,
        UserContextData
    });
    return new Promise((resolve, reject)=>{
        try {
            const signUpOut = {
                isSignUpComplete: true,
                nextStep: {
                    signUpStep: 'DONE'
                }
            };
            const autoSignInStoreState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInStore"].getState();
            if (!autoSignInStoreState.active || autoSignInStoreState.username !== username) {
                resolve(signUpOut);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAutoSignIn"])();
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$client$2f$utils$2f$store$2f$autoSignInStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignInStore"].dispatch({
                type: 'SET_SESSION',
                value: session
            });
            const stopListener = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HubInternal"].listen('auth-internal', ({ payload })=>{
                switch(payload.event){
                    case 'autoSignIn':
                        resolve({
                            isSignUpComplete: true,
                            nextStep: {
                                signUpStep: 'COMPLETE_AUTO_SIGN_IN'
                            }
                        });
                        stopListener();
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HubInternal"].dispatch('auth-internal', {
                event: 'confirmSignUp',
                data: signUpOut
            });
        } catch (error) {
            reject(error);
        }
    });
}
;
 //# sourceMappingURL=confirmSignUp.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createConfirmForgotPasswordClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createConfirmForgotPasswordClient": (()=>createConfirmForgotPasswordClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createConfirmForgotPasswordClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('ConfirmForgotPassword'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createConfirmForgotPasswordClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmResetPassword.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "confirmResetPassword": (()=>confirmResetPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createConfirmForgotPasswordClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createConfirmForgotPasswordClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Confirms the new password and verification code to reset the password.
 *
 * @param input -  The ConfirmResetPasswordInput object.
 * @throws -{@link ConfirmForgotPasswordException }
 * Thrown due to an invalid confirmation code or password.
 * @throws -{@link AuthValidationErrorCode }
 * Thrown due to an empty confirmation code, password or username.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function confirmResetPassword(input) {
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { userPoolClientId, userPoolId, userPoolEndpoint } = authConfig;
    const { username, newPassword } = input;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmResetPasswordUsername);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!newPassword, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmResetPasswordNewPassword);
    const code = input.confirmationCode;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!code, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmResetPasswordConfirmationCode);
    const metadata = input.options?.clientMetadata;
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const confirmForgotPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createConfirmForgotPasswordClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfirmForgotPasswordClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    await confirmForgotPassword({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(authConfig.userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmResetPassword)
    }, {
        Username: username,
        ConfirmationCode: code,
        Password: newPassword,
        ClientMetadata: metadata,
        ClientId: authConfig.userPoolClientId,
        UserContextData
    });
}
;
 //# sourceMappingURL=confirmResetPassword.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createForgotPasswordClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createForgotPasswordClient": (()=>createForgotPasswordClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createForgotPasswordClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('ForgotPassword'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createForgotPasswordClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/resetPassword.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resetPassword": (()=>resetPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createForgotPasswordClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createForgotPasswordClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Resets a user's password.
 *
 * @param input -  The ResetPasswordInput object.
 * @returns ResetPasswordOutput
 * @throws -{@link ForgotPasswordException }
 * Thrown due to an invalid confirmation code or password.
 * @throws -{@link AuthValidationErrorCode }
 * Thrown due to an empty username.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 **/ async function resetPassword(input) {
    const { username } = input;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyResetPasswordUsername);
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { userPoolClientId, userPoolId, userPoolEndpoint } = authConfig;
    const clientMetadata = input.options?.clientMetadata;
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const forgotPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createForgotPasswordClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createForgotPasswordClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const res = await forgotPassword({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ResetPassword)
    }, {
        Username: username,
        ClientMetadata: clientMetadata,
        ClientId: userPoolClientId,
        UserContextData
    });
    const codeDeliveryDetails = res.CodeDeliveryDetails;
    return {
        isPasswordReset: false,
        nextStep: {
            resetPasswordStep: 'CONFIRM_RESET_PASSWORD_WITH_CODE',
            codeDeliveryDetails: {
                deliveryMedium: codeDeliveryDetails?.DeliveryMedium,
                destination: codeDeliveryDetails?.Destination,
                attributeName: codeDeliveryDetails?.AttributeName
            }
        }
    };
}
;
 //# sourceMappingURL=resetPassword.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createResendConfirmationCodeClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createResendConfirmationCodeClient": (()=>createResendConfirmationCodeClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createResendConfirmationCodeClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('ResendConfirmationCode'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createResendConfirmationCodeClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/resendSignUpCode.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resendSignUpCode": (()=>resendSignUpCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/userContextData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createResendConfirmationCodeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createResendConfirmationCodeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Resend the confirmation code while signing up
 *
 * @param input -  The ResendSignUpCodeInput object
 * @returns ResendSignUpCodeOutput
 * @throws service: {@link ResendConfirmationException } - Cognito service errors thrown when resending the code.
 * @throws validation: {@link AuthValidationErrorCode } - Validation errors thrown either username are not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function resendSignUpCode(input) {
    const { username } = input;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!username, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptySignUpUsername);
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { userPoolClientId, userPoolId, userPoolEndpoint } = authConfig;
    const clientMetadata = input.options?.clientMetadata;
    const UserContextData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$userContextData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserContextData"])({
        username,
        userPoolId,
        userPoolClientId
    });
    const resendConfirmationCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createResendConfirmationCodeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createResendConfirmationCodeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const { CodeDeliveryDetails } = await resendConfirmationCode({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(authConfig.userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ResendSignUpCode)
    }, {
        Username: username,
        ClientMetadata: clientMetadata,
        ClientId: authConfig.userPoolClientId,
        UserContextData
    });
    const { DeliveryMedium, AttributeName, Destination } = {
        ...CodeDeliveryDetails
    };
    return {
        destination: Destination,
        deliveryMedium: DeliveryMedium,
        attributeName: AttributeName ? AttributeName : undefined
    };
}
;
 //# sourceMappingURL=resendSignUpCode.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createGetUserClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createGetUserClient": (()=>createGetUserClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createGetUserClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('GetUser'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createGetUserClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/internal/fetchUserAttributes.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchUserAttributes": (()=>fetchUserAttributes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$internal$2f$fetchAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/internal/fetchAuthSession.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$apiHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/apiHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createGetUserClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createGetUserClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const fetchUserAttributes = async (amplify)=>{
    const authConfig = amplify.getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { userPoolEndpoint, userPoolId } = authConfig;
    const { tokens } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$internal$2f$fetchAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAuthSession"])(amplify, {
        forceRefresh: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAuthTokens"])(tokens);
    const getUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createGetUserClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGetUserClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const { UserAttributes } = await getUser({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].FetchUserAttributes)
    }, {
        AccessToken: tokens.accessToken.toString()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$apiHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAuthUserAttribute"])(UserAttributes);
};
;
 //# sourceMappingURL=fetchUserAttributes.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/fetchUserAttributes.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchUserAttributes": (()=>fetchUserAttributes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$internal$2f$fetchUserAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/internal/fetchUserAttributes.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Fetches the current user attributes while authenticated.
 *
 * @throws - {@link GetUserException} - Cognito service errors thrown when the service is not able to get the user.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ const fetchUserAttributes = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$internal$2f$fetchUserAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchUserAttributes"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"]);
};
;
 //# sourceMappingURL=fetchUserAttributes.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/Errors.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthError": (()=>AuthError),
    "NoUserPoolError": (()=>NoUserPoolError),
    "authErrorMessages": (()=>authErrorMessages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// TODO: delete this module when the Auth class is removed.
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsoleLogger"]('AuthError');
class AuthError extends Error {
    constructor(type){
        const { message, log } = authErrorMessages[type];
        super(message);
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = AuthError;
        Object.setPrototypeOf(this, AuthError.prototype);
        this.name = 'AuthError';
        this.log = log || message;
        logger.error(this.log);
    }
}
class NoUserPoolError extends AuthError {
    constructor(type){
        super(type);
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = NoUserPoolError;
        Object.setPrototypeOf(this, NoUserPoolError.prototype);
        this.name = 'NoUserPoolError';
    }
}
const authErrorMessages = {
    oauthSignInError: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].OAUTH_ERROR,
        log: 'Make sure Cognito Hosted UI has been configured correctly'
    },
    noConfig: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].DEFAULT_MSG,
        log: `
            Error: Amplify has not been configured correctly.
            This error is typically caused by one of the following scenarios:

            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point
                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information
            
            2. There might be multiple conflicting versions of amplify packages in your node_modules.
				Refer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)
        `
    },
    missingAuthConfig: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].DEFAULT_MSG,
        log: `
            Error: Amplify has not been configured correctly. 
            The configuration object is missing required auth properties.
            This error is typically caused by one of the following scenarios:

            1. Did you run \`amplify push\` after adding auth via \`amplify add auth\`?
                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information

            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.
        `
    },
    emptyUsername: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].EMPTY_USERNAME
    },
    // TODO: should include a list of valid sign-in types
    invalidUsername: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].INVALID_USERNAME
    },
    emptyPassword: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].EMPTY_PASSWORD
    },
    emptyCode: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].EMPTY_CODE
    },
    signUpError: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].SIGN_UP_ERROR,
        log: 'The first parameter should either be non-null string or object'
    },
    noMFA: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].NO_MFA
    },
    invalidMFA: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].INVALID_MFA
    },
    emptyChallengeResponse: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].EMPTY_CHALLENGE
    },
    noUserSession: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].NO_USER_SESSION
    },
    deviceConfig: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].DEVICE_CONFIG
    },
    networkError: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].NETWORK_ERROR
    },
    autoSignInError: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].AUTOSIGNIN_ERROR
    },
    default: {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorStrings"].DEFAULT_MSG
    }
};
;
 //# sourceMappingURL=Errors.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/createOAuthError.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createOAuthError": (()=>createOAuthError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$Errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/Errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/common/AuthErrorStrings.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createOAuthError = (message, recoverySuggestion)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
        message: message ?? 'An error has occurred during the oauth process.',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$common$2f$AuthErrorStrings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorCodes"].OAuthSignInError,
        recoverySuggestion: recoverySuggestion ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$Errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authErrorMessages"].oauthSignInError.log
    });
;
 //# sourceMappingURL=createOAuthError.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/types/Auth.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "AuthErrorTypes": (()=>AuthErrorTypes)
});
var AuthErrorTypes;
(function(AuthErrorTypes) {
    AuthErrorTypes["NoConfig"] = "noConfig";
    AuthErrorTypes["MissingAuthConfig"] = "missingAuthConfig";
    AuthErrorTypes["EmptyUsername"] = "emptyUsername";
    AuthErrorTypes["InvalidUsername"] = "invalidUsername";
    AuthErrorTypes["EmptyPassword"] = "emptyPassword";
    AuthErrorTypes["EmptyCode"] = "emptyCode";
    AuthErrorTypes["SignUpError"] = "signUpError";
    AuthErrorTypes["NoMFA"] = "noMFA";
    AuthErrorTypes["InvalidMFA"] = "invalidMFA";
    AuthErrorTypes["EmptyChallengeResponse"] = "emptyChallengeResponse";
    AuthErrorTypes["NoUserSession"] = "noUserSession";
    AuthErrorTypes["Default"] = "default";
    AuthErrorTypes["DeviceConfig"] = "deviceConfig";
    AuthErrorTypes["NetworkError"] = "networkError";
    AuthErrorTypes["AutoSignInError"] = "autoSignInError";
    AuthErrorTypes["OAuthSignInError"] = "oauthSignInError";
})(AuthErrorTypes || (AuthErrorTypes = {}));
;
 //# sourceMappingURL=Auth.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/validateState.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "flowCancelledMessage": (()=>flowCancelledMessage),
    "validateState": (()=>validateState),
    "validationFailedMessage": (()=>validationFailedMessage),
    "validationRecoverySuggestion": (()=>validationRecoverySuggestion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$types$2f$Auth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/types/Auth.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const flowCancelledMessage = '`signInWithRedirect` has been canceled.';
const validationFailedMessage = 'An error occurred while validating the state.';
const validationRecoverySuggestion = 'Try to initiate an OAuth flow from Amplify';
const validateState = async (state)=>{
    const savedState = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].loadOAuthState();
    // This is because savedState only exists if the flow was initiated by Amplify
    const validatedState = state === savedState ? savedState : undefined;
    if (!validatedState) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$types$2f$Auth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthErrorTypes"].OAuthSignInError,
            message: state === null ? flowCancelledMessage : validationFailedMessage,
            recoverySuggestion: state === null ? undefined : validationRecoverySuggestion
        });
    }
    return validatedState;
};
;
 //# sourceMappingURL=validateState.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/completeOAuthFlow.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "completeOAuthFlow": (()=>completeOAuthFlow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$urlSafeDecode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/urlSafeDecode.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/cacheTokens.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/dispatchSignedInHubEvent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$inflightPromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/inflightPromise.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/createOAuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$validateState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/validateState.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const completeOAuthFlow = async ({ currentUrl, userAgentValue, clientId, redirectUri, responseType, domain, preferPrivateSession })=>{
    const urlParams = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyUrl"](currentUrl);
    const error = urlParams.searchParams.get('error');
    const errorMessage = urlParams.searchParams.get('error_description');
    if (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOAuthError"])(errorMessage ?? error);
    }
    if (responseType === 'code') {
        return handleCodeFlow({
            currentUrl,
            userAgentValue,
            clientId,
            redirectUri,
            domain,
            preferPrivateSession
        });
    }
    return handleImplicitFlow({
        currentUrl,
        redirectUri,
        preferPrivateSession
    });
};
const handleCodeFlow = async ({ currentUrl, userAgentValue, clientId, redirectUri, domain, preferPrivateSession })=>{
    /* Convert URL into an object with parameters as keys
{ redirect_uri: 'http://localhost:3000/', response_type: 'code', ...} */ const url = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyUrl"](currentUrl);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    // if `code` or `state` is not presented in the redirect url, most likely
    // that the end user cancelled the inflight oauth flow by:
    // 1. clicking the back button of browser
    // 2. closing the provider hosted UI page and coming back to the app
    if (!code || !state) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOAuthError"])('User cancelled OAuth flow.');
    }
    // may throw error is being caught in attemptCompleteOAuthFlow.ts
    const validatedState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$validateState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateState"])(state);
    const oAuthTokenEndpoint = 'https://' + domain + '/oauth2/token';
    // TODO(v6): check hub events
    // dispatchAuthEvent(
    // 	'codeFlow',
    // 	{},
    // 	`Retrieving tokens from ${oAuthTokenEndpoint}`
    // );
    const codeVerifier = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].loadPKCE();
    const oAuthTokenBody = {
        grant_type: 'authorization_code',
        code,
        client_id: clientId,
        redirect_uri: redirectUri,
        ...codeVerifier ? {
            code_verifier: codeVerifier
        } : {}
    };
    const body = Object.entries(oAuthTokenBody).map(([k, v])=>`${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
    const { access_token, refresh_token: refreshToken, id_token, error, error_message: errorMessage, token_type, expires_in } = await (await fetch(oAuthTokenEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_AGENT_HEADER"]]: userAgentValue
        },
        body
    })).json();
    if (error) {
        // error is being caught in attemptCompleteOAuthFlow.ts
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOAuthError"])(errorMessage ?? error);
    }
    const username = (access_token && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(access_token).payload.username) ?? 'username';
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
        username,
        AccessToken: access_token,
        IdToken: id_token,
        RefreshToken: refreshToken
    });
    return completeFlow({
        redirectUri,
        state: validatedState,
        preferPrivateSession
    });
};
const handleImplicitFlow = async ({ currentUrl, redirectUri, preferPrivateSession })=>{
    // hash is `null` if `#` doesn't exist on URL
    const url = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyUrl"](currentUrl);
    const { id_token, access_token, state, token_type, expires_in, error_description, error } = (url.hash ?? '#').substring(1) // Remove # from returned code
    .split('&').map((pairings)=>pairings.split('=')).reduce((accum, [k, v])=>({
            ...accum,
            [k]: v
        }), {
        id_token: undefined,
        access_token: undefined,
        state: undefined,
        token_type: undefined,
        expires_in: undefined,
        error_description: undefined,
        error: undefined
    });
    if (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOAuthError"])(error_description ?? error);
    }
    if (!access_token) {
        // error is being caught in attemptCompleteOAuthFlow.ts
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOAuthError"])('No access token returned from OAuth flow.');
    }
    const validatedState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$validateState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateState"])(state);
    const username = (access_token && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(access_token).payload.username) ?? 'username';
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$cacheTokens$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheCognitoTokens"])({
        username,
        AccessToken: access_token,
        IdToken: id_token
    });
    return completeFlow({
        redirectUri,
        state: validatedState,
        preferPrivateSession
    });
};
const completeFlow = async ({ redirectUri, state, preferPrivateSession })=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"].setOAuthMetadata({
        oauthSignIn: true
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].clearOAuthData();
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].storeOAuthSignIn(true, preferPrivateSession);
    // this should be called before any call that involves `fetchAuthSession`
    // e.g. `getCurrentUser()` below, so it allows every inflight async calls to
    //  `fetchAuthSession` can be resolved
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$inflightPromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveAndClearInflightPromises"])();
    // clear history before sending out final Hub events
    clearHistory(redirectUri);
    if (isCustomState(state)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].dispatch('auth', {
            event: 'customOAuthState',
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$urlSafeDecode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlSafeDecode"])(getCustomState(state))
        }, 'Auth', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].dispatch('auth', {
        event: 'signInWithRedirect'
    }, 'Auth', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$dispatchSignedInHubEvent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSignedInHubEvent"])();
};
const isCustomState = (state)=>{
    return /-/.test(state);
};
const getCustomState = (state)=>{
    return state.split('-').splice(1).join('-');
};
const clearHistory = (redirectUri)=>{
    if (typeof window !== 'undefined' && typeof window.history !== 'undefined') {
        window.history.replaceState(window.history.state, '', redirectUri);
    }
};
;
 //# sourceMappingURL=completeOAuthFlow.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/getRedirectUrl.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRedirectUrl": (()=>getRedirectUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/** @internal */ function getRedirectUrl(redirects, preferredRedirectUrl) {
    if (preferredRedirectUrl) {
        const redirectUrl = redirects?.find((redirect)=>redirect === preferredRedirectUrl);
        if (!redirectUrl) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidPreferredRedirectUrlException"];
        }
        return redirectUrl;
    } else {
        const redirectUrlFromTheSameOrigin = redirects?.find(isSameOriginAndPathName) ?? redirects?.find(isTheSameDomain);
        const redirectUrlFromDifferentOrigin = redirects?.find(isHttps) ?? redirects?.find(isHttp);
        if (redirectUrlFromTheSameOrigin) {
            return redirectUrlFromTheSameOrigin;
        } else if (redirectUrlFromDifferentOrigin) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidOriginException"];
        }
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidRedirectException"];
    }
}
// origin + pathname => https://example.com/app
const isSameOriginAndPathName = (redirect)=>redirect.startsWith(// eslint-disable-next-line no-constant-binary-expression
    String((window.location.origin + window.location.pathname) ?? '/'));
// domain => outlook.live.com, github.com
const isTheSameDomain = (redirect)=>redirect.includes(String(window.location.hostname));
const isHttp = (redirect)=>redirect.startsWith('http://');
const isHttps = (redirect)=>redirect.startsWith('https://');
;
 //# sourceMappingURL=getRedirectUrl.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/handleFailure.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleFailure": (()=>handleFailure)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$inflightPromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/inflightPromise.mjs [app-ssr] (ecmascript)");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const handleFailure = async (error)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$inflightPromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveAndClearInflightPromises"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].clearOAuthInflightData();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].dispatch('auth', {
        event: 'signInWithRedirect_failure',
        data: {
            error
        }
    }, 'Auth', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
};
;
 //# sourceMappingURL=handleFailure.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/attemptCompleteOAuthFlow.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "attemptCompleteOAuthFlow": (()=>attemptCompleteOAuthFlow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$completeOAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/completeOAuthFlow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$getRedirectUrl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/getRedirectUrl.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$handleFailure$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/handleFailure.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const attemptCompleteOAuthFlow = async (authConfig)=>{
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertOAuthConfig"])(authConfig);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].setAuthConfig(authConfig);
    } catch (_) {
        // no-op
        // This should not happen as Amplify singleton checks the oauth config key
        // unless the oauth config object doesn't contain required properties
        return;
    }
    // No inflight OAuth
    if (!await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].loadOAuthInFlight()) {
        return;
    }
    try {
        const currentUrl = window.location.href;
        const { loginWith, userPoolClientId } = authConfig;
        const { domain, redirectSignIn, responseType } = loginWith.oauth;
        const redirectUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$getRedirectUrl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRedirectUrl"])(redirectSignIn);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$completeOAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["completeOAuthFlow"])({
            currentUrl,
            clientId: userPoolClientId,
            domain,
            redirectUri,
            responseType,
            userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignInWithRedirect)
        });
    } catch (err) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$handleFailure$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleFailure"])(err);
    }
};
;
 //# sourceMappingURL=attemptCompleteOAuthFlow.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/enableOAuthListener.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isBrowser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/isBrowser.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$attemptCompleteOAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/attemptCompleteOAuthFlow.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// attach the side effect for handling the completion of an inflight oauth flow
// this side effect works only on Web
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isBrowser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])() && (()=>{
    // add the listener to the singleton for triggering
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADD_OAUTH_LISTENER"]](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$attemptCompleteOAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attemptCompleteOAuthFlow"]);
})(); //# sourceMappingURL=enableOAuthListener.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/types/models.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "cognitoHostedUIIdentityProviderMap": (()=>cognitoHostedUIIdentityProviderMap)
});
const cognitoHostedUIIdentityProviderMap = {
    Google: 'Google',
    Facebook: 'Facebook',
    Amazon: 'LoginWithAmazon',
    Apple: 'SignInWithApple'
};
;
 //# sourceMappingURL=models.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/openAuthSession.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "openAuthSession": (()=>openAuthSession)
});
const openAuthSession = async (url)=>{
    if (!window?.location) {
        return;
    }
    // enforce HTTPS
    window.location.href = url.replace('http://', 'https://');
};
;
 //# sourceMappingURL=openAuthSession.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/generateCodeVerifier.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateCodeVerifier": (()=>generateCodeVerifier)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/globalHelpers/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Encoder.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const CODE_VERIFIER_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 *
 * @param length Desired length of the code verifier.
 *
 * **NOTE:** According to the [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636#section-4.1)
 * A code verifier must be with a length >= 43 and <= 128.
 *
 * @returns An object that contains the generated `codeVerifier` and a method
 * `toCodeChallenge` to generate the code challenge from the `codeVerifier`
 * following the spec of [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636#section-4.2).
 */ const generateCodeVerifier = (length)=>{
    const randomBytes = new Uint8Array(length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCrypto"])().getRandomValues(randomBytes);
    let value = '';
    let codeChallenge;
    for (const byte of randomBytes){
        value += CODE_VERIFIER_CHARSET.charAt(byte % CODE_VERIFIER_CHARSET.length);
    }
    return {
        value,
        method: 'S256',
        toCodeChallenge () {
            if (codeChallenge) {
                return codeChallenge;
            }
            codeChallenge = generateCodeChallenge(value);
            return codeChallenge;
        }
    };
};
function generateCodeChallenge(codeVerifier) {
    const awsCryptoHash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sha256"]();
    awsCryptoHash.update(codeVerifier);
    const codeChallenge = removePaddingChar(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Encoder"].convert(awsCryptoHash.digestSync(), {
        urlSafe: true
    }));
    return codeChallenge;
}
function removePaddingChar(base64Encoded) {
    return base64Encoded.replace(/=/g, '');
}
;
 //# sourceMappingURL=generateCodeVerifier.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/generateState.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateState": (()=>generateState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$generateRandomString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/generateRandomString.mjs [app-ssr] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const generateState = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$generateRandomString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomString"])(32);
};
;
 //# sourceMappingURL=generateState.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/cancelOAuthFlow.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "listenForOAuthFlowCancellation": (()=>listenForOAuthFlowCancellation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/createOAuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$handleFailure$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/handleFailure.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const listenForOAuthFlowCancellation = (store)=>{
    async function handleCancelOAuthFlow(event) {
        const isBfcache = event.persisted;
        if (isBfcache && await store.loadOAuthInFlight()) {
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOAuthError"])('User cancelled OAuth flow.');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$handleFailure$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleFailure"])(error);
        }
        window.removeEventListener('pageshow', handleCancelOAuthFlow);
    }
    window.addEventListener('pageshow', handleCancelOAuthFlow);
};
;
 //# sourceMappingURL=cancelOAuthFlow.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithRedirect.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signInWithRedirect": (()=>signInWithRedirect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$urlSafeEncode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/urlSafeEncode.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isBrowser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/isBrowser.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$enableOAuthListener$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/enableOAuthListener.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$types$2f$models$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/types/models.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$openAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/openAuthSession.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInHelpers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$generateCodeVerifier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/generateCodeVerifier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$generateState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/generateState.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$getRedirectUrl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/getRedirectUrl.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$handleFailure$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/handleFailure.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$completeOAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/completeOAuthFlow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/createOAuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$cancelOAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/cancelOAuthFlow.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Signs in a user with OAuth. Redirects the application to an Identity Provider.
 *
 * @param input - The SignInWithRedirectInput object, if empty it will redirect to Cognito HostedUI
 *
 * @throws AuthTokenConfigException - Thrown when the user pool config is invalid.
 * @throws OAuthNotConfigureException - Thrown when the oauth config is invalid.
 */ async function signInWithRedirect(input) {
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertOAuthConfig"])(authConfig);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].setAuthConfig(authConfig);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInHelpers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertUserNotAuthenticated"])();
    let provider = 'COGNITO'; // Default
    if (typeof input?.provider === 'string') {
        provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$types$2f$models$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoHostedUIIdentityProviderMap"][input.provider];
    } else if (input?.provider?.custom) {
        provider = input.provider.custom;
    }
    return oauthSignIn({
        oauthConfig: authConfig.loginWith.oauth,
        clientId: authConfig.userPoolClientId,
        provider,
        customState: input?.customState,
        preferPrivateSession: input?.options?.preferPrivateSession,
        options: {
            loginHint: input?.options?.loginHint,
            lang: input?.options?.lang,
            nonce: input?.options?.nonce
        }
    });
}
const oauthSignIn = async ({ oauthConfig, provider, clientId, customState, preferPrivateSession, options })=>{
    const { domain, redirectSignIn, responseType, scopes } = oauthConfig;
    const { loginHint, lang, nonce } = options ?? {};
    const randomState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$generateState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateState"])();
    /* encodeURIComponent is not URL safe, use urlSafeEncode instead. Cognito
    single-encodes/decodes url on first sign in and double-encodes/decodes url
    when user already signed in. Using encodeURIComponent, Base32, Base64 add
    characters % or = which on further encoding becomes unsafe. '=' create issue
    for parsing query params.
    Refer: https://github.com/aws-amplify/amplify-js/issues/5218 */ const state = customState ? `${randomState}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$urlSafeEncode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlSafeEncode"])(customState)}` : randomState;
    const { value, method, toCodeChallenge } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$generateCodeVerifier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCodeVerifier"])(128);
    const redirectUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$getRedirectUrl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRedirectUrl"])(oauthConfig.redirectSignIn);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$isBrowser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].storeOAuthInFlight(true);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].storeOAuthState(state);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"].storePKCE(value);
    const queryString = Object.entries({
        redirect_uri: redirectUri,
        response_type: responseType,
        client_id: clientId,
        identity_provider: provider,
        scope: scopes.join(' '),
        // eslint-disable-next-line camelcase
        ...loginHint && {
            login_hint: loginHint
        },
        ...lang && {
            lang
        },
        ...nonce && {
            nonce
        },
        state,
        ...responseType === 'code' && {
            code_challenge: toCodeChallenge(),
            code_challenge_method: method
        }
    }).map(([k, v])=>`${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
    // TODO(v6): use URL object instead
    const oAuthUrl = `https://${domain}/oauth2/authorize?${queryString}`;
    // this will only take effect in the following scenarios:
    // 1. the user cancels the OAuth flow on web via back button, and
    // 2. when bfcache is enabled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$cancelOAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listenForOAuthFlowCancellation"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthStore"]);
    // the following is effective only in react-native as openAuthSession resolves only in react-native
    const { type, error, url } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$openAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openAuthSession"])(oAuthUrl) ?? {};
    try {
        if (type === 'error') {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$createOAuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOAuthError"])(String(error));
        }
        if (type === 'success' && url) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$completeOAuthFlow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["completeOAuthFlow"])({
                currentUrl: url,
                clientId,
                domain,
                redirectUri,
                responseType,
                userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignInWithRedirect),
                preferPrivateSession
            });
        }
    } catch (err) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$handleFailure$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleFailure"])(err);
        // rethrow the error so it can be caught by `await signInWithRedirect()` in react-native
        throw err;
    }
};
;
 //# sourceMappingURL=signInWithRedirect.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/completeOAuthSignOut.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "completeOAuthSignOut": (()=>completeOAuthSignOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$clearCredentials$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/clearCredentials.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const completeOAuthSignOut = async (store)=>{
    await store.clearOAuthData();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"].clearTokens();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$clearCredentials$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCredentials"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].dispatch('auth', {
        event: 'signedOut'
    }, 'Auth', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
};
;
 //# sourceMappingURL=completeOAuthSignOut.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthSignOutRedirect.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "oAuthSignOutRedirect": (()=>oAuthSignOutRedirect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$openAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/openAuthSession.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$getRedirectUrl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/getRedirectUrl.mjs [app-ssr] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const oAuthSignOutRedirect = async (authConfig, preferPrivateSession = false, redirectUrl)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertOAuthConfig"])(authConfig);
    const { loginWith, userPoolClientId } = authConfig;
    const { domain, redirectSignOut } = loginWith.oauth;
    const signoutUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$getRedirectUrl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRedirectUrl"])(redirectSignOut, redirectUrl);
    const oAuthLogoutEndpoint = `https://${domain}/logout?${Object.entries({
        client_id: userPoolClientId,
        logout_uri: encodeURIComponent(signoutUri)
    }).map(([k, v])=>`${k}=${v}`).join('&')}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$openAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openAuthSession"])(oAuthLogoutEndpoint);
};
;
 //# sourceMappingURL=oAuthSignOutRedirect.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/handleOAuthSignOut.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleOAuthSignOut": (()=>handleOAuthSignOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$completeOAuthSignOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/completeOAuthSignOut.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthSignOutRedirect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthSignOutRedirect.mjs [app-ssr] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const handleOAuthSignOut = async (cognitoConfig, store, tokenOrchestrator, redirectUrl)=>{
    const { isOAuthSignIn } = await store.loadOAuthSignIn();
    const oauthMetadata = await tokenOrchestrator.getOAuthMetadata();
    // Clear everything before attempting to visted logout endpoint since the current application
    // state could be wiped away on redirect
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$completeOAuthSignOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["completeOAuthSignOut"])(store);
    // The isOAuthSignIn flag is propagated by the oAuthToken store which manages oauth keys in local storage only.
    // These keys are used to determine if a user is in an inflight or signedIn oauth states.
    // However, this behavior represents an issue when 2 apps share the same set of tokens in Cookie storage because the app that didn't
    // start the OAuth will not have access to the oauth keys.
    // A heuristic solution is to add oauth metadata to the tokenOrchestrator which will have access to the underlying
    // storage mechanism that is used by Amplify.
    if (isOAuthSignIn || oauthMetadata?.oauthSignIn) {
        // On web, this will always end up being a void action
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$oAuthSignOutRedirect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthSignOutRedirect"])(cognitoConfig, false, redirectUrl);
    }
};
;
 //# sourceMappingURL=handleOAuthSignOut.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRevokeTokenClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createRevokeTokenClient": (()=>createRevokeTokenClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createRevokeTokenClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('RevokeToken'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createRevokeTokenClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createGlobalSignOutClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createGlobalSignOutClient": (()=>createGlobalSignOutClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createGlobalSignOutClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('GlobalSignOut'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createGlobalSignOutClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signOut": (()=>signOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$clearCredentials$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/clearCredentials.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInWithRedirectStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInWithRedirectStore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$handleOAuthSignOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/handleOAuthSignOut.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRevokeTokenClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRevokeTokenClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createGlobalSignOutClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createGlobalSignOutClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsoleLogger"]('Auth');
/**
 * Signs a user out
 *
 * @param input - The SignOutInput object
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function signOut(input) {
    const cognitoConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(cognitoConfig);
    if (input?.global) {
        await globalSignOut(cognitoConfig);
    } else {
        await clientSignOut(cognitoConfig);
    }
    let hasOAuthConfig;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertOAuthConfig"])(cognitoConfig);
        hasOAuthConfig = true;
    } catch (err) {
        hasOAuthConfig = false;
    }
    if (hasOAuthConfig) {
        const oAuthStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$signInWithRedirectStore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultOAuthStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultStorage"]);
        oAuthStore.setAuthConfig(cognitoConfig);
        const { type } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$oauth$2f$handleOAuthSignOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleOAuthSignOut"])(cognitoConfig, oAuthStore, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"], input?.oauth?.redirectUrl) ?? {};
        if (type === 'error') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$AuthError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"]({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OAUTH_SIGNOUT_EXCEPTION"],
                message: `An error occurred when attempting to log out from OAuth provider.`
            });
        }
    } else {
        // complete sign out
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"].clearTokens();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$clearCredentials$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCredentials"])();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].dispatch('auth', {
            event: 'signedOut'
        }, 'Auth', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
    }
}
async function clientSignOut(cognitoConfig) {
    try {
        const { userPoolEndpoint, userPoolId, userPoolClientId } = cognitoConfig;
        const authTokens = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"].getTokenStore().loadTokens();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAuthTokensWithRefreshToken"])(authTokens);
        if (isSessionRevocable(authTokens.accessToken)) {
            const revokeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createRevokeTokenClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRevokeTokenClient"])({
                endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
                    endpointOverride: userPoolEndpoint
                })
            });
            await revokeToken({
                region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
                userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignOut)
            }, {
                ClientId: userPoolClientId,
                Token: authTokens.refreshToken
            });
        }
    } catch (err) {
        // this shouldn't throw
        logger.debug('Client signOut error caught but will proceed with token removal');
    }
}
async function globalSignOut(cognitoConfig) {
    try {
        const { userPoolEndpoint, userPoolId } = cognitoConfig;
        const authTokens = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$tokenProvider$2f$tokenProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenOrchestrator"].getTokenStore().loadTokens();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAuthTokens"])(authTokens);
        const globalSignOutClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createGlobalSignOutClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlobalSignOutClient"])({
            endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
                endpointOverride: userPoolEndpoint
            })
        });
        await globalSignOutClient({
            region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
            userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignOut)
        }, {
            AccessToken: authTokens.accessToken.toString()
        });
    } catch (err) {
        // it should not throw
        logger.debug('Global signOut error caught but will proceed with token removal');
    }
}
const isSessionRevocable = (token)=>!!token?.payload?.origin_jti;
;
 //# sourceMappingURL=signOut.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createGetUserAttributeVerificationCodeClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createGetUserAttributeVerificationCodeClient": (()=>createGetUserAttributeVerificationCodeClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createGetUserAttributeVerificationCodeClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('GetUserAttributeVerificationCode'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createGetUserAttributeVerificationCodeClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/sendUserAttributeVerificationCode.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendUserAttributeVerificationCode": (()=>sendUserAttributeVerificationCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createGetUserAttributeVerificationCodeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createGetUserAttributeVerificationCodeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Resends user's confirmation code when updating attributes while authenticated.
 *
 * @param input - The SendUserAttributeVerificationCodeInput object
 * @returns SendUserAttributeVerificationCodeOutput
 * @throws - {@link GetUserAttributeVerificationException}
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ const sendUserAttributeVerificationCode = async (input)=>{
    const { userAttributeKey, options } = input;
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    const clientMetadata = options?.clientMetadata;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { userPoolEndpoint, userPoolId } = authConfig;
    const { tokens } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAuthSession"])({
        forceRefresh: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAuthTokens"])(tokens);
    const getUserAttributeVerificationCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createGetUserAttributeVerificationCodeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGetUserAttributeVerificationCodeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    const { CodeDeliveryDetails } = await getUserAttributeVerificationCode({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SendUserAttributeVerificationCode)
    }, {
        AccessToken: tokens.accessToken.toString(),
        ClientMetadata: clientMetadata,
        AttributeName: userAttributeKey
    });
    const { DeliveryMedium, AttributeName, Destination } = {
        ...CodeDeliveryDetails
    };
    return {
        destination: Destination,
        deliveryMedium: DeliveryMedium,
        attributeName: AttributeName
    };
};
;
 //# sourceMappingURL=sendUserAttributeVerificationCode.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createVerifyUserAttributeClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createVerifyUserAttributeClient": (()=>createVerifyUserAttributeClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createVerifyUserAttributeClient = (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$handler$2f$cognitoUserPoolTransferHandler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cognitoUserPoolTransferHandler"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolSerializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolSerializer"])('VerifyUserAttribute'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$shared$2f$serde$2f$createUserPoolDeserializer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserPoolDeserializer"])(), {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SERVICE_CLIENT_API_CONFIG"],
        ...config
    });
;
 //# sourceMappingURL=createVerifyUserAttributeClient.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmUserAttribute.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "confirmUserAttribute": (()=>confirmUserAttribute)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/types/validation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertValidationError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createVerifyUserAttributeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createVerifyUserAttributeClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Confirms a user attribute with the confirmation code.
 *
 * @param input -  The ConfirmUserAttributeInput object
 * @throws  -{@link AuthValidationErrorCode } -
 * Thrown when `confirmationCode` is not defined.
 * @throws  -{@link VerifyUserAttributeException } - Thrown due to an invalid confirmation code or attribute.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */ async function confirmUserAttribute(input) {
    const authConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Amplify"].getConfig().Auth?.Cognito;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTokenProviderConfig"])(authConfig);
    const { userPoolEndpoint, userPoolId } = authConfig;
    const { confirmationCode, userAttributeKey } = input;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$utils$2f$assertValidationError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidationError"])(!!confirmationCode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$errors$2f$types$2f$validation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthValidationErrorCode"].EmptyConfirmUserAttributeCode);
    const { tokens } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAuthSession"])({
        forceRefresh: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$utils$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAuthTokens"])(tokens);
    const verifyUserAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$factories$2f$serviceClients$2f$cognitoIdentityProvider$2f$createVerifyUserAttributeClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVerifyUserAttributeClient"])({
        endpointResolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$factories$2f$createCognitoUserPoolEndpointResolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCognitoUserPoolEndpointResolver"])({
            endpointOverride: userPoolEndpoint
        })
    });
    await verifyUserAttribute({
        region: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$foundation$2f$parsers$2f$regionParsers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionFromUserPoolId"])(userPoolId),
        userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$utils$2f$getAuthUserAgentValue$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthUserAgentValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmUserAttribute)
    }, {
        AccessToken: tokens.accessToken.toString(),
        AttributeName: userAttributeKey,
        Code: confirmationCode
    });
}
;
 //# sourceMappingURL=confirmUserAttribute.mjs.map
}}),

};

//# sourceMappingURL=3a390_%40aws-amplify_auth_dist_esm_2e07fda1._.js.map