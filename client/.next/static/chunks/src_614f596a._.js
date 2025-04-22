(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_614f596a._.js", {

"[project]/src/state/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "globalSlice": (()=>globalSlice),
    "initialState": (()=>initialState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_@types+react@19.1.0_react@19.1.0_redux@5.0.1__react@19.1.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {};
const globalSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'global',
    initialState,
    reducers: {}
});
const {} = globalSlice.actions;
const __TURBOPACK__default__export__ = globalSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/state/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "api": (()=>api),
    "useGetAuthUserQuery": (()=>useGetAuthUserQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/getCurrentUser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_@types+react@19.1.0_react@19.1.0_redux@5.0.1__react@19.1.0/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_@types+react@19.1.0_react@19.1.0_redux@5.0.1__react@19.1.0/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: ("TURBOPACK compile-time value", "http://localhost:3001"),
        prepareHeaders: async (headers)=>{
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAuthSession"])();
            const { idToken } = session.tokens ?? {};
            if (idToken) {
                headers.set('Authorization', `Bearer ${idToken}`);
            }
            return headers;
        }
    }),
    reducerPath: 'api',
    tagTypes: [],
    endpoints: (build)=>({
            getAuthUser: build.query({
                queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBaseQuery)=>{
                    try {
                        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAuthSession"])();
                        const { idToken } = session.tokens ?? {};
                        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                        const userRole = idToken?.payload['custom:role'];
                        const endpoint = `/${userRole === 'manager' ? 'managers' : 'tenants'}/${user.userId}`;
                        let userDetailsResponse = await fetchWithBaseQuery(endpoint);
                        console.log('userDetailsResponse::', userDetailsResponse);
                        // If user doesn't exist, create new user
                        if (userDetailsResponse.error && userDetailsResponse.error.status === 404) {
                            userDetailsResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNewUserInDatabase"])(user, idToken, userRole, fetchWithBaseQuery);
                        }
                        return {
                            data: {
                                cognitoInfo: {
                                    ...user
                                },
                                userInfo: userDetailsResponse.data,
                                userRole
                            }
                        };
                    } catch (error) {
                        return {
                            error: error.message || 'Failed to fetch user data'
                        };
                    }
                }
            })
        })
});
const { useGetAuthUserQuery } = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/state/redux.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StoreProvider),
    "makeStore": (()=>makeStore),
    "useAppDispatch": (()=>useAppDispatch),
    "useAppSelector": (()=>useAppSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/redux@5.0.1/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_@types+react@19.1.0_react@19.1.0_redux@5.0.1__react@19.1.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_@types+react@19.1.0_react@19.1.0_redux@5.0.1__react@19.1.0/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-redux@9.2.0_@types+react@19.1.0_react@19.1.0_redux@5.0.1/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
/* REDUX STORE */ const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])({
    global: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].reducer
});
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].middleware)
    });
};
const useAppDispatch = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
};
_s(useAppDispatch, "jI3HA1r1Cumjdbu14H7G+TUj798=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
function StoreProvider({ children }) {
    _s1();
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$6$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupListeners"])(storeRef.current.dispatch);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/state/redux.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_s1(StoreProvider, "EtiU7pDwGhTDZwMnrKEqZbxjqXE=");
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(auth)/authProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$aws$2d$amplify$40$6$2e$14$2e$1$2f$node_modules$2f$aws$2d$amplify$2f$dist$2f$esm$2f$initSingleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__DefaultAmplify__as__Amplify$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/aws-amplify@6.14.1/node_modules/aws-amplify/dist/esm/initSingleton.mjs [app-client] (ecmascript) <export DefaultAmplify as Amplify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/Authenticator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Radio/Radio.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$RadioGroupField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/RadioGroupField/RadioGroupField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// docs.amplify.aws/gen1/javascript/tools/libraries/configure-categories
https: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$aws$2d$amplify$40$6$2e$14$2e$1$2f$node_modules$2f$aws$2d$amplify$2f$dist$2f$esm$2f$initSingleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__DefaultAmplify__as__Amplify$3e$__["Amplify"].configure({
    Auth: {
        Cognito: {
            userPoolId: ("TURBOPACK compile-time value", "ap-southeast-2_R67eHro5j"),
            userPoolClientId: ("TURBOPACK compile-time value", "1ghe1b9qglvrokp4hna4311bjd")
        }
    }
});
const components = {
    Header () {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
            className: "mt-4 mb-7 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    level: 3,
                    className: "!text-2xl !font-bold",
                    children: [
                        "KAME",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-secondary-500 font-light hover:!text-primary-300",
                            children: "HOMES"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/authProvider.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/authProvider.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground mt-2",
                    children: "Please sign in to continue"
                }, void 0, false, {
                    fileName: "[project]/src/app/(auth)/authProvider.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/authProvider.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    },
    SignIn: {
        Footer () {
            const { toSignUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                className: "text-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: [
                        "Don't have an account?",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toSignUp,
                            className: "text-primary hover:underline bg-transparent border-none p-0",
                            children: "Sign up here"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/authProvider.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/authProvider.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/authProvider.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this);
        }
    },
    SignUp: {
        FormFields () {
            const { validationErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Authenticator"].SignUp.FormFields, {}, void 0, false, {
                        fileName: "[project]/src/app/(auth)/authProvider.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$RadioGroupField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupField"], {
                        legend: "Role",
                        name: "custom:role",
                        errorMessage: validationErrors?.['custom:role'],
                        hasError: !!validationErrors?.['custom:role'],
                        isRequired: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radio"], {
                                value: "tenant",
                                className: "cursor-pointer",
                                children: "Tenant"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/authProvider.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radio"], {
                                value: "manager",
                                className: "cursor-pointer",
                                children: "Manager"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/authProvider.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/authProvider.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true);
        },
        Footer () {
            const { toSignIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                className: "text-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: [
                        "Already have an account?",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toSignIn,
                            className: "text-primary hover:underline bg-transparent border-none p-0",
                            children: "Sign in"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/authProvider.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/authProvider.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/authProvider.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this);
        }
    }
};
const formFields = {
    signIn: {
        username: {
            placeholder: 'Enter your email',
            label: 'Email',
            isRequired: true
        },
        password: {
            placeholder: 'Enter your password',
            label: 'Password',
            isRequired: true
        }
    },
    signUp: {
        username: {
            order: 1,
            placeholder: 'Choose a username',
            label: 'Username',
            isRequired: true
        },
        email: {
            order: 2,
            placeholder: 'Enter your email address',
            label: 'Email',
            isRequired: true
        },
        password: {
            order: 3,
            placeholder: 'Create a password',
            label: 'Password',
            isRequired: true
        },
        confirm_password: {
            order: 4,
            placeholder: 'Confirm your password',
            label: 'Confirm Password',
            isRequired: true
        }
    }
};
const Auth = ({ children })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "Auth.useAuthenticator": (context)=>[
                context.user
            ]
    }["Auth.useAuthenticator"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isAuthPage = pathname.match(/^\/(signin|signup)$/);
    const isDashboardPage = pathname.startsWith('/manager') || pathname.startsWith('/tenants');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Auth.useEffect": ()=>{
            // Redirect authenticated users
            if (user && isAuthPage) {
                router.push('/landing');
            }
        }
    }["Auth.useEffect"], [
        user,
        isAuthPage,
        router
    ]);
    // Allow access to public pages without authentication
    if (!isAuthPage && !isDashboardPage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Authenticator"], {
            initialState: pathname.includes('signup') ? 'signUp' : 'signIn',
            components: components,
            formFields: formFields,
            children: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: children
                }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/authProvider.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/authProvider.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
};
_s(Auth, "kcT5PVDO8Pamf+C6SKWzMRMGR9Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Auth;
const __TURBOPACK__default__export__ = Auth;
var _c;
__turbopack_context__.k.register(_c, "Auth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/providers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/Authenticator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/redux.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$authProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/authProvider.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const Providers = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Authenticator"].Provider, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$authProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/providers.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/providers.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = Providers;
const __TURBOPACK__default__export__ = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_614f596a._.js.map