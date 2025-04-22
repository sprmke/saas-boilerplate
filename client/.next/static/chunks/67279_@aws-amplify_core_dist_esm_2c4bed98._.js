(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/67279_@aws-amplify_core_dist_esm_2c4bed98._.js", {

"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/customUserAgent.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Maintains custom user-agent state set by external consumers.
__turbopack_context__.s({
    "getCustomUserAgent": (()=>getCustomUserAgent),
    "setCustomUserAgent": (()=>setCustomUserAgent)
});
const customUserAgentState = {};
/**
 * Sets custom user agent state which will be appended to applicable requests. Returns a function that can be used to
 * clean up any custom state set with this API.
 *
 * @note
 * This API operates globally. Calling this API multiple times will result in the most recently set values for a
 * particular API being used.
 *
 * @note
 * This utility IS NOT compatible with SSR.
 *
 * @param input - SetCustomUserAgentInput that defines custom state to apply to the specified APIs.
 */ const setCustomUserAgent = (input)=>{
    // Save custom user-agent state & increment reference counter
    // TODO Remove `any` when we upgrade to TypeScript 5.2, see: https://github.com/microsoft/TypeScript/issues/44373
    customUserAgentState[input.category] = input.apis.reduce((acc, api)=>({
            ...acc,
            [api]: {
                refCount: acc[api]?.refCount ? acc[api].refCount + 1 : 1,
                additionalDetails: input.additionalDetails
            }
        }), customUserAgentState[input.category] ?? {});
    // Callback that cleans up state for APIs recorded by this call
    let cleanUpCallbackCalled = false;
    const cleanUpCallback = ()=>{
        // Only allow the cleanup callback to be called once
        if (cleanUpCallbackCalled) {
            return;
        }
        cleanUpCallbackCalled = true;
        input.apis.forEach((api)=>{
            const apiRefCount = customUserAgentState[input.category][api].refCount;
            if (apiRefCount > 1) {
                customUserAgentState[input.category][api].refCount = apiRefCount - 1;
            } else {
                delete customUserAgentState[input.category][api];
                // Clean up category if no more APIs set
                if (!Object.keys(customUserAgentState[input.category]).length) {
                    delete customUserAgentState[input.category];
                }
            }
        });
    };
    return cleanUpCallback;
};
const getCustomUserAgent = (category, api)=>customUserAgentState[category]?.[api]?.additionalDetails;
;
 //# sourceMappingURL=customUserAgent.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "AiAction": (()=>AiAction),
    "AnalyticsAction": (()=>AnalyticsAction),
    "ApiAction": (()=>ApiAction),
    "AuthAction": (()=>AuthAction),
    "Category": (()=>Category),
    "DataStoreAction": (()=>DataStoreAction),
    "Framework": (()=>Framework),
    "GeoAction": (()=>GeoAction),
    "InAppMessagingAction": (()=>InAppMessagingAction),
    "InteractionsAction": (()=>InteractionsAction),
    "PredictionsAction": (()=>PredictionsAction),
    "PubSubAction": (()=>PubSubAction),
    "PushNotificationAction": (()=>PushNotificationAction),
    "StorageAction": (()=>StorageAction)
});
var Framework;
(function(Framework) {
    // < 100 - Web frameworks
    Framework["WebUnknown"] = "0";
    Framework["React"] = "1";
    Framework["NextJs"] = "2";
    Framework["Angular"] = "3";
    Framework["VueJs"] = "4";
    Framework["Nuxt"] = "5";
    Framework["Svelte"] = "6";
    // 100s - Server side frameworks
    Framework["ServerSideUnknown"] = "100";
    Framework["ReactSSR"] = "101";
    Framework["NextJsSSR"] = "102";
    Framework["AngularSSR"] = "103";
    Framework["VueJsSSR"] = "104";
    Framework["NuxtSSR"] = "105";
    Framework["SvelteSSR"] = "106";
    // 200s - Mobile framework
    Framework["ReactNative"] = "201";
    Framework["Expo"] = "202";
})(Framework || (Framework = {}));
var Category;
(function(Category) {
    Category["AI"] = "ai";
    Category["API"] = "api";
    Category["Auth"] = "auth";
    Category["Analytics"] = "analytics";
    Category["DataStore"] = "datastore";
    Category["Geo"] = "geo";
    Category["InAppMessaging"] = "inappmessaging";
    Category["Interactions"] = "interactions";
    Category["Predictions"] = "predictions";
    Category["PubSub"] = "pubsub";
    Category["PushNotification"] = "pushnotification";
    Category["Storage"] = "storage";
})(Category || (Category = {}));
var AiAction;
(function(AiAction) {
    AiAction["CreateConversation"] = "1";
    AiAction["GetConversation"] = "2";
    AiAction["ListConversations"] = "3";
    AiAction["DeleteConversation"] = "4";
    AiAction["SendMessage"] = "5";
    AiAction["ListMessages"] = "6";
    AiAction["OnMessage"] = "7";
    AiAction["Generation"] = "8";
    AiAction["UpdateConversation"] = "9";
})(AiAction || (AiAction = {}));
var AnalyticsAction;
(function(AnalyticsAction) {
    AnalyticsAction["Record"] = "1";
    AnalyticsAction["IdentifyUser"] = "2";
})(AnalyticsAction || (AnalyticsAction = {}));
var ApiAction;
(function(ApiAction) {
    ApiAction["GraphQl"] = "1";
    ApiAction["Get"] = "2";
    ApiAction["Post"] = "3";
    ApiAction["Put"] = "4";
    ApiAction["Patch"] = "5";
    ApiAction["Del"] = "6";
    ApiAction["Head"] = "7";
})(ApiAction || (ApiAction = {}));
var AuthAction;
(function(AuthAction) {
    AuthAction["SignUp"] = "1";
    AuthAction["ConfirmSignUp"] = "2";
    AuthAction["ResendSignUpCode"] = "3";
    AuthAction["SignIn"] = "4";
    AuthAction["FetchMFAPreference"] = "6";
    AuthAction["UpdateMFAPreference"] = "7";
    AuthAction["SetUpTOTP"] = "10";
    AuthAction["VerifyTOTPSetup"] = "11";
    AuthAction["ConfirmSignIn"] = "12";
    AuthAction["DeleteUserAttributes"] = "15";
    AuthAction["DeleteUser"] = "16";
    AuthAction["UpdateUserAttributes"] = "17";
    AuthAction["FetchUserAttributes"] = "18";
    AuthAction["ConfirmUserAttribute"] = "22";
    AuthAction["SignOut"] = "26";
    AuthAction["UpdatePassword"] = "27";
    AuthAction["ResetPassword"] = "28";
    AuthAction["ConfirmResetPassword"] = "29";
    AuthAction["FederatedSignIn"] = "30";
    AuthAction["RememberDevice"] = "32";
    AuthAction["ForgetDevice"] = "33";
    AuthAction["FetchDevices"] = "34";
    AuthAction["SendUserAttributeVerificationCode"] = "35";
    AuthAction["SignInWithRedirect"] = "36";
    AuthAction["StartWebAuthnRegistration"] = "37";
    AuthAction["CompleteWebAuthnRegistration"] = "38";
    AuthAction["ListWebAuthnCredentials"] = "39";
    AuthAction["DeleteWebAuthnCredential"] = "40";
})(AuthAction || (AuthAction = {}));
var DataStoreAction;
(function(DataStoreAction) {
    DataStoreAction["Subscribe"] = "1";
    DataStoreAction["GraphQl"] = "2";
})(DataStoreAction || (DataStoreAction = {}));
var GeoAction;
(function(GeoAction) {
    GeoAction["SearchByText"] = "0";
    GeoAction["SearchByCoordinates"] = "1";
    GeoAction["SearchForSuggestions"] = "2";
    GeoAction["SearchByPlaceId"] = "3";
    GeoAction["SaveGeofences"] = "4";
    GeoAction["GetGeofence"] = "5";
    GeoAction["ListGeofences"] = "6";
    GeoAction["DeleteGeofences"] = "7";
})(GeoAction || (GeoAction = {}));
var InAppMessagingAction;
(function(InAppMessagingAction) {
    InAppMessagingAction["SyncMessages"] = "1";
    InAppMessagingAction["IdentifyUser"] = "2";
    InAppMessagingAction["NotifyMessageInteraction"] = "3";
})(InAppMessagingAction || (InAppMessagingAction = {}));
var InteractionsAction;
(function(InteractionsAction) {
    InteractionsAction["None"] = "0";
})(InteractionsAction || (InteractionsAction = {}));
var PredictionsAction;
(function(PredictionsAction) {
    PredictionsAction["Convert"] = "1";
    PredictionsAction["Identify"] = "2";
    PredictionsAction["Interpret"] = "3";
})(PredictionsAction || (PredictionsAction = {}));
var PubSubAction;
(function(PubSubAction) {
    PubSubAction["Subscribe"] = "1";
})(PubSubAction || (PubSubAction = {}));
var PushNotificationAction;
(function(PushNotificationAction) {
    PushNotificationAction["InitializePushNotifications"] = "1";
    PushNotificationAction["IdentifyUser"] = "2";
})(PushNotificationAction || (PushNotificationAction = {}));
var StorageAction;
(function(StorageAction) {
    StorageAction["UploadData"] = "1";
    StorageAction["DownloadData"] = "2";
    StorageAction["List"] = "3";
    StorageAction["Copy"] = "4";
    StorageAction["Remove"] = "5";
    StorageAction["GetProperties"] = "6";
    StorageAction["GetUrl"] = "7";
    StorageAction["GetDataAccess"] = "8";
    StorageAction["ListCallerAccessGrants"] = "9";
})(StorageAction || (StorageAction = {}));
;
 //# sourceMappingURL=types.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/constants.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Logging constants
__turbopack_context__.s({
    "AWS_CLOUDWATCH_CATEGORY": (()=>AWS_CLOUDWATCH_CATEGORY),
    "NO_HUBCALLBACK_PROVIDED_EXCEPTION": (()=>NO_HUBCALLBACK_PROVIDED_EXCEPTION),
    "USER_AGENT_HEADER": (()=>USER_AGENT_HEADER)
});
const AWS_CLOUDWATCH_CATEGORY = 'Logging';
const USER_AGENT_HEADER = 'x-amz-user-agent';
// Error exception code constants
const NO_HUBCALLBACK_PROVIDED_EXCEPTION = 'NoHubcallbackProvidedException';
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/types.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "LogType": (()=>LogType)
});
var LogType;
(function(LogType) {
    LogType["DEBUG"] = "DEBUG";
    LogType["ERROR"] = "ERROR";
    LogType["INFO"] = "INFO";
    LogType["WARN"] = "WARN";
    LogType["VERBOSE"] = "VERBOSE";
    LogType["NONE"] = "NONE";
})(LogType || (LogType = {}));
;
 //# sourceMappingURL=types.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConsoleLogger": (()=>ConsoleLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/types.mjs [app-client] (ecmascript)");
;
;
/* eslint-disable no-console */ // Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const LOG_LEVELS = {
    VERBOSE: 1,
    DEBUG: 2,
    INFO: 3,
    WARN: 4,
    ERROR: 5,
    NONE: 6
};
/**
 * Write logs
 * @class Logger
 */ class ConsoleLogger {
    /**
     * @constructor
     * @param {string} name - Name of the logger
     */ constructor(name, level = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].WARN){
        this.name = name;
        this.level = level;
        this._pluggables = [];
    }
    _padding(n) {
        return n < 10 ? '0' + n : '' + n;
    }
    _ts() {
        const dt = new Date();
        return [
            this._padding(dt.getMinutes()),
            this._padding(dt.getSeconds())
        ].join(':') + '.' + dt.getMilliseconds();
    }
    configure(config) {
        if (!config) return this._config;
        this._config = config;
        return this._config;
    }
    /**
     * Write log
     * @method
     * @memeberof Logger
     * @param {LogType|string} type - log type, default INFO
     * @param {string|object} msg - Logging message or object
     */ _log(type, ...msg) {
        let loggerLevelName = this.level;
        if (ConsoleLogger.LOG_LEVEL) {
            loggerLevelName = ConsoleLogger.LOG_LEVEL;
        }
        if (typeof window !== 'undefined' && window.LOG_LEVEL) {
            loggerLevelName = window.LOG_LEVEL;
        }
        const loggerLevel = LOG_LEVELS[loggerLevelName];
        const typeLevel = LOG_LEVELS[type];
        if (!(typeLevel >= loggerLevel)) {
            // Do nothing if type is not greater than or equal to logger level (handle undefined)
            return;
        }
        let log = console.log.bind(console);
        if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].ERROR && console.error) {
            log = console.error.bind(console);
        }
        if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].WARN && console.warn) {
            log = console.warn.bind(console);
        }
        if (ConsoleLogger.BIND_ALL_LOG_LEVELS) {
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].INFO && console.info) {
                log = console.info.bind(console);
            }
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].DEBUG && console.debug) {
                log = console.debug.bind(console);
            }
        }
        const prefix = `[${type}] ${this._ts()} ${this.name}`;
        let message = '';
        if (msg.length === 1 && typeof msg[0] === 'string') {
            message = `${prefix} - ${msg[0]}`;
            log(message);
        } else if (msg.length === 1) {
            message = `${prefix} ${msg[0]}`;
            log(prefix, msg[0]);
        } else if (typeof msg[0] === 'string') {
            let obj = msg.slice(1);
            if (obj.length === 1) {
                obj = obj[0];
            }
            message = `${prefix} - ${msg[0]} ${obj}`;
            log(`${prefix} - ${msg[0]}`, obj);
        } else {
            message = `${prefix} ${msg}`;
            log(prefix, msg);
        }
        for (const plugin of this._pluggables){
            const logEvent = {
                message,
                timestamp: Date.now()
            };
            plugin.pushLogs([
                logEvent
            ]);
        }
    }
    /**
     * Write General log. Default to INFO
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */ log(...msg) {
        this._log(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].INFO, ...msg);
    }
    /**
     * Write INFO log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */ info(...msg) {
        this._log(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].INFO, ...msg);
    }
    /**
     * Write WARN log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */ warn(...msg) {
        this._log(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].WARN, ...msg);
    }
    /**
     * Write ERROR log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */ error(...msg) {
        this._log(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].ERROR, ...msg);
    }
    /**
     * Write DEBUG log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */ debug(...msg) {
        this._log(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].DEBUG, ...msg);
    }
    /**
     * Write VERBOSE log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */ verbose(...msg) {
        this._log(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogType"].VERBOSE, ...msg);
    }
    addPluggable(pluggable) {
        if (pluggable && pluggable.getCategoryName() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AWS_CLOUDWATCH_CATEGORY"]) {
            this._pluggables.push(pluggable);
            pluggable.configure(this._config);
        }
    }
    listPluggables() {
        return this._pluggables;
    }
}
ConsoleLogger.LOG_LEVEL = null;
ConsoleLogger.BIND_ALL_LOG_LEVELS = false;
;
 //# sourceMappingURL=ConsoleLogger.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AmplifyError": (()=>AmplifyError)
});
class AmplifyError extends Error {
    /**
     *  Constructs an AmplifyError.
     *
     * @param message text that describes the main problem.
     * @param underlyingError the underlying cause of the error.
     * @param recoverySuggestion suggestion to recover from the error.
     *
     */ constructor({ message, name, recoverySuggestion, underlyingError, metadata }){
        super(message);
        this.name = name;
        this.underlyingError = underlyingError;
        this.recoverySuggestion = recoverySuggestion;
        if (metadata) {
            // If metadata exists, explicitly only record the following properties.
            const { extendedRequestId, httpStatusCode, requestId } = metadata;
            this.metadata = {
                extendedRequestId,
                httpStatusCode,
                requestId
            };
        }
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = AmplifyError;
        Object.setPrototypeOf(this, AmplifyError.prototype);
    }
}
;
 //# sourceMappingURL=AmplifyError.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AMPLIFY_SYMBOL": (()=>AMPLIFY_SYMBOL),
    "Hub": (()=>Hub),
    "HubClass": (()=>HubClass),
    "HubInternal": (()=>HubInternal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-client] (ecmascript)");
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const AMPLIFY_SYMBOL = typeof Symbol !== 'undefined' ? Symbol('amplify_default') : '@@amplify_default';
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleLogger"]('Hub');
class HubClass {
    constructor(name){
        this.listeners = new Map();
        this.protectedChannels = [
            'core',
            'auth',
            'api',
            'analytics',
            'interactions',
            'pubsub',
            'storage',
            'ui',
            'xr'
        ];
        this.name = name;
    }
    /**
     * Used internally to remove a Hub listener.
     *
     * @remarks
     * This private method is for internal use only. Instead of calling Hub.remove, call the result of Hub.listen.
     */ _remove(channel, listener) {
        const holder = this.listeners.get(channel);
        if (!holder) {
            logger.warn(`No listeners for ${channel}`);
            return;
        }
        this.listeners.set(channel, [
            ...holder.filter(({ callback })=>callback !== listener)
        ]);
    }
    dispatch(channel, payload, source, ampSymbol) {
        if (typeof channel === 'string' && this.protectedChannels.indexOf(channel) > -1) {
            const hasAccess = ampSymbol === AMPLIFY_SYMBOL;
            if (!hasAccess) {
                logger.warn(`WARNING: ${channel} is protected and dispatching on it can have unintended consequences`);
            }
        }
        const capsule = {
            channel,
            payload: {
                ...payload
            },
            source,
            patternInfo: []
        };
        try {
            this._toListeners(capsule);
        } catch (e) {
            logger.error(e);
        }
    }
    listen(channel, callback, listenerName = 'noname') {
        let cb;
        if (typeof callback !== 'function') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyError"]({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NO_HUBCALLBACK_PROVIDED_EXCEPTION"],
                message: 'No callback supplied to Hub'
            });
        } else {
            // Needs to be casted as a more generic type
            cb = callback;
        }
        let holder = this.listeners.get(channel);
        if (!holder) {
            holder = [];
            this.listeners.set(channel, holder);
        }
        holder.push({
            name: listenerName,
            callback: cb
        });
        return ()=>{
            this._remove(channel, cb);
        };
    }
    _toListeners(capsule) {
        const { channel, payload } = capsule;
        const holder = this.listeners.get(channel);
        if (holder) {
            holder.forEach((listener)=>{
                logger.debug(`Dispatching to ${channel} with `, payload);
                try {
                    listener.callback(capsule);
                } catch (e) {
                    logger.error(e);
                }
            });
        }
    }
}
/* We export a __default__ instance of HubClass to use it as a
pseudo Singleton for the main messaging bus, however you can still create
your own instance of HubClass() for a separate "private bus" of events. */ const Hub = new HubClass('__default__');
/**
 * @internal
 *
 * Internal hub used for core Amplify functionality. Not intended for use outside of Amplify.
 *
 */ const HubInternal = new HubClass('internal-hub');
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/deepFreeze.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "deepFreeze": (()=>deepFreeze)
});
const deepFreeze = (object)=>{
    const propNames = Reflect.ownKeys(object);
    for (const name of propNames){
        const value = object[name];
        if (value && typeof value === 'object' || typeof value === 'function') {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
};
;
 //# sourceMappingURL=deepFreeze.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/constants.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "ADD_OAUTH_LISTENER": (()=>ADD_OAUTH_LISTENER)
});
const ADD_OAUTH_LISTENER = Symbol('oauth-listener');
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/parseAWSExports.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAWSExports": (()=>parseAWSExports)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-client] (ecmascript)");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleLogger"]('parseAWSExports');
const authTypeMapping = {
    API_KEY: 'apiKey',
    AWS_IAM: 'iam',
    AMAZON_COGNITO_USER_POOLS: 'userPool',
    OPENID_CONNECT: 'oidc',
    NONE: 'none',
    AWS_LAMBDA: 'lambda',
    // `LAMBDA` is an incorrect value that was added during the v6 rewrite.
    // Keeping it as a valid value until v7 to prevent breaking customers who might
    // be relying on it as a workaround.
    // ref: https://github.com/aws-amplify/amplify-js/pull/12922
    // TODO: @v7 remove next line
    LAMBDA: 'lambda'
};
/**
 * Converts the object imported from `aws-exports.js` or `amplifyconfiguration.json` files generated by
 * the Amplify CLI into an object that conforms to the {@link ResourcesConfig}.
 *
 * @param config A configuration object imported  from `aws-exports.js` or `amplifyconfiguration.json`.
 *
 * @returns An object that conforms to the {@link ResourcesConfig} .
 */ const parseAWSExports = (config = {})=>{
    if (!Object.prototype.hasOwnProperty.call(config, 'aws_project_region')) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyError"]({
            name: 'InvalidParameterException',
            message: 'Invalid config parameter.',
            recoverySuggestion: 'Ensure passing the config object imported from  `amplifyconfiguration.json`.'
        });
    }
    const { aws_appsync_apiKey, aws_appsync_authenticationType, aws_appsync_graphqlEndpoint, aws_appsync_region, aws_bots_config, aws_cognito_identity_pool_id, aws_cognito_sign_up_verification_method, aws_cognito_mfa_configuration, aws_cognito_mfa_types, aws_cognito_password_protection_settings, aws_cognito_verification_mechanisms, aws_cognito_signup_attributes, aws_cognito_social_providers, aws_cognito_username_attributes, aws_mandatory_sign_in, aws_mobile_analytics_app_id, aws_mobile_analytics_app_region, aws_user_files_s3_bucket, aws_user_files_s3_bucket_region, aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing, aws_user_pools_id, aws_user_pools_web_client_id, geo, oauth, predictions, aws_cloud_logic_custom, Notifications, modelIntrospection } = config;
    const amplifyConfig = {};
    // Analytics
    if (aws_mobile_analytics_app_id) {
        amplifyConfig.Analytics = {
            Pinpoint: {
                appId: aws_mobile_analytics_app_id,
                region: aws_mobile_analytics_app_region
            }
        };
    }
    // Notifications
    const { InAppMessaging, Push } = Notifications ?? {};
    if (InAppMessaging?.AWSPinpoint || Push?.AWSPinpoint) {
        if (InAppMessaging?.AWSPinpoint) {
            const { appId, region } = InAppMessaging.AWSPinpoint;
            amplifyConfig.Notifications = {
                InAppMessaging: {
                    Pinpoint: {
                        appId,
                        region
                    }
                }
            };
        }
        if (Push?.AWSPinpoint) {
            const { appId, region } = Push.AWSPinpoint;
            amplifyConfig.Notifications = {
                ...amplifyConfig.Notifications,
                PushNotification: {
                    Pinpoint: {
                        appId,
                        region
                    }
                }
            };
        }
    }
    // Interactions
    if (Array.isArray(aws_bots_config)) {
        amplifyConfig.Interactions = {
            LexV1: Object.fromEntries(aws_bots_config.map((bot)=>[
                    bot.name,
                    bot
                ]))
        };
    }
    // API
    if (aws_appsync_graphqlEndpoint) {
        const defaultAuthMode = authTypeMapping[aws_appsync_authenticationType];
        if (!defaultAuthMode) {
            logger.debug(`Invalid authentication type ${aws_appsync_authenticationType}. Falling back to IAM.`);
        }
        amplifyConfig.API = {
            GraphQL: {
                endpoint: aws_appsync_graphqlEndpoint,
                apiKey: aws_appsync_apiKey,
                region: aws_appsync_region,
                defaultAuthMode: defaultAuthMode ?? 'iam'
            }
        };
        if (modelIntrospection) {
            amplifyConfig.API.GraphQL.modelIntrospection = modelIntrospection;
        }
    }
    // Auth
    const mfaConfig = aws_cognito_mfa_configuration ? {
        status: aws_cognito_mfa_configuration && aws_cognito_mfa_configuration.toLowerCase(),
        totpEnabled: aws_cognito_mfa_types?.includes('TOTP') ?? false,
        smsEnabled: aws_cognito_mfa_types?.includes('SMS') ?? false
    } : undefined;
    const passwordFormatConfig = aws_cognito_password_protection_settings ? {
        minLength: aws_cognito_password_protection_settings.passwordPolicyMinLength,
        requireLowercase: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes('REQUIRES_LOWERCASE') ?? false,
        requireUppercase: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes('REQUIRES_UPPERCASE') ?? false,
        requireNumbers: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes('REQUIRES_NUMBERS') ?? false,
        requireSpecialCharacters: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes('REQUIRES_SYMBOLS') ?? false
    } : undefined;
    const mergedUserAttributes = Array.from(new Set([
        ...aws_cognito_verification_mechanisms ?? [],
        ...aws_cognito_signup_attributes ?? []
    ]));
    const userAttributes = mergedUserAttributes.reduce((attributes, key)=>({
            ...attributes,
            // All user attributes generated by the CLI are required
            [key.toLowerCase()]: {
                required: true
            }
        }), {});
    const loginWithEmailEnabled = aws_cognito_username_attributes?.includes('EMAIL') ?? false;
    const loginWithPhoneEnabled = aws_cognito_username_attributes?.includes('PHONE_NUMBER') ?? false;
    if (aws_cognito_identity_pool_id || aws_user_pools_id) {
        amplifyConfig.Auth = {
            Cognito: {
                identityPoolId: aws_cognito_identity_pool_id,
                allowGuestAccess: aws_mandatory_sign_in !== 'enable',
                signUpVerificationMethod: aws_cognito_sign_up_verification_method,
                userAttributes,
                userPoolClientId: aws_user_pools_web_client_id,
                userPoolId: aws_user_pools_id,
                mfa: mfaConfig,
                passwordFormat: passwordFormatConfig,
                loginWith: {
                    username: !(loginWithEmailEnabled || loginWithPhoneEnabled),
                    email: loginWithEmailEnabled,
                    phone: loginWithPhoneEnabled
                }
            }
        };
    }
    const hasOAuthConfig = oauth ? Object.keys(oauth).length > 0 : false;
    const hasSocialProviderConfig = aws_cognito_social_providers ? aws_cognito_social_providers.length > 0 : false;
    if (amplifyConfig.Auth && hasOAuthConfig) {
        amplifyConfig.Auth.Cognito.loginWith = {
            ...amplifyConfig.Auth.Cognito.loginWith,
            oauth: {
                ...getOAuthConfig(oauth),
                ...hasSocialProviderConfig && {
                    providers: parseSocialProviders(aws_cognito_social_providers)
                }
            }
        };
    }
    // Storage
    if (aws_user_files_s3_bucket) {
        amplifyConfig.Storage = {
            S3: {
                bucket: aws_user_files_s3_bucket,
                region: aws_user_files_s3_bucket_region,
                dangerouslyConnectToHttpEndpointForTesting: aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing
            }
        };
    }
    // Geo
    if (geo) {
        const { amazon_location_service } = geo;
        amplifyConfig.Geo = {
            LocationService: {
                maps: amazon_location_service.maps,
                geofenceCollections: amazon_location_service.geofenceCollections,
                searchIndices: amazon_location_service.search_indices,
                region: amazon_location_service.region
            }
        };
    }
    // REST API
    if (aws_cloud_logic_custom) {
        amplifyConfig.API = {
            ...amplifyConfig.API,
            REST: aws_cloud_logic_custom.reduce((acc, api)=>{
                const { name, endpoint, region, service } = api;
                return {
                    ...acc,
                    [name]: {
                        endpoint,
                        ...service ? {
                            service
                        } : undefined,
                        ...region ? {
                            region
                        } : undefined
                    }
                };
            }, {})
        };
    }
    // Predictions
    if (predictions) {
        // map VoiceId from speechGenerator defaults to voiceId
        const { VoiceId: voiceId } = predictions?.convert?.speechGenerator?.defaults ?? {};
        amplifyConfig.Predictions = voiceId ? {
            ...predictions,
            convert: {
                ...predictions.convert,
                speechGenerator: {
                    ...predictions.convert.speechGenerator,
                    defaults: {
                        voiceId
                    }
                }
            }
        } : predictions;
    }
    return amplifyConfig;
};
const getRedirectUrl = (redirectStr)=>redirectStr?.split(',') ?? [];
const getOAuthConfig = ({ domain, scope, redirectSignIn, redirectSignOut, responseType })=>({
        domain,
        scopes: scope,
        redirectSignIn: getRedirectUrl(redirectSignIn),
        redirectSignOut: getRedirectUrl(redirectSignOut),
        responseType
    });
const parseSocialProviders = (aws_cognito_social_providers)=>{
    return aws_cognito_social_providers.map((provider)=>{
        const updatedProvider = provider.toLowerCase();
        return updatedProvider.charAt(0).toUpperCase() + updatedProvider.slice(1);
    });
};
;
 //# sourceMappingURL=parseAWSExports.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/parseAmplifyOutputs.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "isAmplifyOutputs": (()=>isAmplifyOutputs),
    "parseAmplifyOutputs": (()=>parseAmplifyOutputs),
    "parseAnalytics": (()=>parseAnalytics)
});
function isAmplifyOutputs(config) {
    // version format initially will be '1' but is expected to be something like x.y where x is major and y minor version
    const { version } = config;
    if (!version) {
        return false;
    }
    return version.startsWith('1');
}
function parseStorage(amplifyOutputsStorageProperties) {
    if (!amplifyOutputsStorageProperties) {
        return undefined;
    }
    const { bucket_name, aws_region, buckets } = amplifyOutputsStorageProperties;
    return {
        S3: {
            bucket: bucket_name,
            region: aws_region,
            buckets: buckets && createBucketInfoMap(buckets)
        }
    };
}
function parseAuth(amplifyOutputsAuthProperties) {
    if (!amplifyOutputsAuthProperties) {
        return undefined;
    }
    const { user_pool_id, user_pool_client_id, identity_pool_id, password_policy, mfa_configuration, mfa_methods, unauthenticated_identities_enabled, oauth, username_attributes, standard_required_attributes, groups } = amplifyOutputsAuthProperties;
    const authConfig = {
        Cognito: {
            userPoolId: user_pool_id,
            userPoolClientId: user_pool_client_id,
            groups
        }
    };
    if (identity_pool_id) {
        authConfig.Cognito = {
            ...authConfig.Cognito,
            identityPoolId: identity_pool_id
        };
    }
    if (password_policy) {
        authConfig.Cognito.passwordFormat = {
            requireLowercase: password_policy.require_lowercase,
            requireNumbers: password_policy.require_numbers,
            requireUppercase: password_policy.require_uppercase,
            requireSpecialCharacters: password_policy.require_symbols,
            minLength: password_policy.min_length ?? 6
        };
    }
    if (mfa_configuration) {
        authConfig.Cognito.mfa = {
            status: getMfaStatus(mfa_configuration),
            smsEnabled: mfa_methods?.includes('SMS'),
            totpEnabled: mfa_methods?.includes('TOTP')
        };
    }
    if (unauthenticated_identities_enabled) {
        authConfig.Cognito.allowGuestAccess = unauthenticated_identities_enabled;
    }
    if (oauth) {
        authConfig.Cognito.loginWith = {
            oauth: {
                domain: oauth.domain,
                redirectSignIn: oauth.redirect_sign_in_uri,
                redirectSignOut: oauth.redirect_sign_out_uri,
                responseType: oauth.response_type === 'token' ? 'token' : 'code',
                scopes: oauth.scopes,
                providers: getOAuthProviders(oauth.identity_providers)
            }
        };
    }
    if (username_attributes) {
        authConfig.Cognito.loginWith = {
            ...authConfig.Cognito.loginWith,
            email: username_attributes.includes('email'),
            phone: username_attributes.includes('phone_number'),
            // Signing in with a username is not currently supported in Gen2, this should always evaluate to false
            username: username_attributes.includes('username')
        };
    }
    if (standard_required_attributes) {
        authConfig.Cognito.userAttributes = standard_required_attributes.reduce((acc, curr)=>({
                ...acc,
                [curr]: {
                    required: true
                }
            }), {});
    }
    return authConfig;
}
function parseAnalytics(amplifyOutputsAnalyticsProperties) {
    if (!amplifyOutputsAnalyticsProperties?.amazon_pinpoint) {
        return undefined;
    }
    const { amazon_pinpoint } = amplifyOutputsAnalyticsProperties;
    return {
        Pinpoint: {
            appId: amazon_pinpoint.app_id,
            region: amazon_pinpoint.aws_region
        }
    };
}
function parseGeo(amplifyOutputsAnalyticsProperties) {
    if (!amplifyOutputsAnalyticsProperties) {
        return undefined;
    }
    const { aws_region, geofence_collections, maps, search_indices } = amplifyOutputsAnalyticsProperties;
    return {
        LocationService: {
            region: aws_region,
            searchIndices: search_indices,
            geofenceCollections: geofence_collections,
            maps
        }
    };
}
function parseData(amplifyOutputsDataProperties) {
    if (!amplifyOutputsDataProperties) {
        return undefined;
    }
    const { aws_region, default_authorization_type, url, api_key, model_introspection } = amplifyOutputsDataProperties;
    const GraphQL = {
        endpoint: url,
        defaultAuthMode: getGraphQLAuthMode(default_authorization_type),
        region: aws_region,
        apiKey: api_key,
        modelIntrospection: model_introspection
    };
    return {
        GraphQL
    };
}
function parseCustom(amplifyOutputsCustomProperties) {
    if (!amplifyOutputsCustomProperties?.events) {
        return undefined;
    }
    const { url, aws_region, api_key, default_authorization_type } = amplifyOutputsCustomProperties.events;
    const Events = {
        endpoint: url,
        defaultAuthMode: getGraphQLAuthMode(default_authorization_type),
        region: aws_region,
        apiKey: api_key
    };
    return {
        Events
    };
}
function parseNotifications(amplifyOutputsNotificationsProperties) {
    if (!amplifyOutputsNotificationsProperties) {
        return undefined;
    }
    const { aws_region, channels, amazon_pinpoint_app_id } = amplifyOutputsNotificationsProperties;
    const hasInAppMessaging = channels.includes('IN_APP_MESSAGING');
    const hasPushNotification = channels.includes('APNS') || channels.includes('FCM');
    if (!(hasInAppMessaging || hasPushNotification)) {
        return undefined;
    }
    // At this point, we know the Amplify outputs contains at least one supported channel
    const notificationsConfig = {};
    if (hasInAppMessaging) {
        notificationsConfig.InAppMessaging = {
            Pinpoint: {
                appId: amazon_pinpoint_app_id,
                region: aws_region
            }
        };
    }
    if (hasPushNotification) {
        notificationsConfig.PushNotification = {
            Pinpoint: {
                appId: amazon_pinpoint_app_id,
                region: aws_region
            }
        };
    }
    return notificationsConfig;
}
function parseAmplifyOutputs(amplifyOutputs) {
    const resourcesConfig = {};
    if (amplifyOutputs.storage) {
        resourcesConfig.Storage = parseStorage(amplifyOutputs.storage);
    }
    if (amplifyOutputs.auth) {
        resourcesConfig.Auth = parseAuth(amplifyOutputs.auth);
    }
    if (amplifyOutputs.analytics) {
        resourcesConfig.Analytics = parseAnalytics(amplifyOutputs.analytics);
    }
    if (amplifyOutputs.geo) {
        resourcesConfig.Geo = parseGeo(amplifyOutputs.geo);
    }
    if (amplifyOutputs.data) {
        resourcesConfig.API = parseData(amplifyOutputs.data);
    }
    if (amplifyOutputs.custom) {
        const customConfig = parseCustom(amplifyOutputs.custom);
        if (customConfig && 'Events' in customConfig) {
            resourcesConfig.API = {
                ...resourcesConfig.API,
                ...customConfig
            };
        }
    }
    if (amplifyOutputs.notifications) {
        resourcesConfig.Notifications = parseNotifications(amplifyOutputs.notifications);
    }
    return resourcesConfig;
}
const authModeNames = {
    AMAZON_COGNITO_USER_POOLS: 'userPool',
    API_KEY: 'apiKey',
    AWS_IAM: 'iam',
    AWS_LAMBDA: 'lambda',
    OPENID_CONNECT: 'oidc'
};
function getGraphQLAuthMode(authType) {
    return authModeNames[authType];
}
const providerNames = {
    GOOGLE: 'Google',
    LOGIN_WITH_AMAZON: 'Amazon',
    FACEBOOK: 'Facebook',
    SIGN_IN_WITH_APPLE: 'Apple'
};
function getOAuthProviders(providers = []) {
    return providers.reduce((oAuthProviders, provider)=>{
        if (providerNames[provider] !== undefined) {
            oAuthProviders.push(providerNames[provider]);
        }
        return oAuthProviders;
    }, []);
}
function getMfaStatus(mfaConfiguration) {
    if (mfaConfiguration === 'OPTIONAL') return 'optional';
    if (mfaConfiguration === 'REQUIRED') return 'on';
    return 'off';
}
function createBucketInfoMap(buckets) {
    const mappedBuckets = {};
    buckets.forEach(({ name, bucket_name: bucketName, aws_region: region, paths })=>{
        if (name in mappedBuckets) {
            throw new Error(`Duplicate friendly name found: ${name}. Name must be unique.`);
        }
        const sanitizedPaths = paths ? Object.entries(paths).reduce((acc, [key, value])=>{
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {}) : undefined;
        mappedBuckets[name] = {
            bucketName,
            region,
            paths: sanitizedPaths
        };
    });
    return mappedBuckets;
}
;
 //# sourceMappingURL=parseAmplifyOutputs.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/parseAmplifyConfig.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAmplifyConfig": (()=>parseAmplifyConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$parseAWSExports$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/parseAWSExports.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$parseAmplifyOutputs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/parseAmplifyOutputs.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Parses the variety of configuration shapes that Amplify can accept into a ResourcesConfig.
 *
 * @param amplifyConfig An Amplify configuration object conforming to one of the supported schemas.
 * @return A ResourcesConfig for the provided configuration object.
 */ const parseAmplifyConfig = (amplifyConfig)=>{
    if (Object.keys(amplifyConfig).some((key)=>key.startsWith('aws_'))) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$parseAWSExports$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAWSExports"])(amplifyConfig);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$parseAmplifyOutputs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAmplifyOutputs"])(amplifyConfig)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$parseAmplifyOutputs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAmplifyOutputs"])(amplifyConfig);
    } else {
        return amplifyConfig;
    }
};
;
 //# sourceMappingURL=parseAmplifyConfig.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthClass": (()=>AuthClass)
});
class AuthClass {
    /**
     * Configure Auth category
     *
     * @internal
     *
     * @param authResourcesConfig - Resources configurations required by Auth providers.
     * @param authOptions - Client options used by library
     *
     * @returns void
     */ configure(authResourcesConfig, authOptions) {
        this.authConfig = authResourcesConfig;
        this.authOptions = authOptions;
    }
    /**
     * Fetch the auth tokens, and the temporary AWS credentials and identity if they are configured. By default it
     * does not refresh the auth tokens or credentials if they are loaded in storage already. You can force a refresh
     * with `{ forceRefresh: true }` input.
     *
     * @param options - Options configuring the fetch behavior.
     *
     * @returns Promise of current auth session {@link AuthSession}.
     */ async fetchAuthSession(options = {}) {
        let credentialsAndIdentityId;
        let userSub;
        // Get tokens will throw if session cannot be refreshed (network or service error) or return null if not available
        const tokens = await this.getTokens(options);
        if (tokens) {
            userSub = tokens.accessToken?.payload?.sub;
            // getCredentialsAndIdentityId will throw if cannot get credentials (network or service error)
            credentialsAndIdentityId = await this.authOptions?.credentialsProvider?.getCredentialsAndIdentityId({
                authConfig: this.authConfig,
                tokens,
                authenticated: true,
                forceRefresh: options.forceRefresh
            });
        } else {
            // getCredentialsAndIdentityId will throw if cannot get credentials (network or service error)
            credentialsAndIdentityId = await this.authOptions?.credentialsProvider?.getCredentialsAndIdentityId({
                authConfig: this.authConfig,
                authenticated: false,
                forceRefresh: options.forceRefresh
            });
        }
        return {
            tokens,
            credentials: credentialsAndIdentityId?.credentials,
            identityId: credentialsAndIdentityId?.identityId,
            userSub
        };
    }
    async clearCredentials() {
        await this.authOptions?.credentialsProvider?.clearCredentialsAndIdentityId();
    }
    async getTokens(options) {
        return await this.authOptions?.tokenProvider?.getTokens(options) ?? undefined;
    }
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Amplify": (()=>Amplify),
    "AmplifyClass": (()=>AmplifyClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$deepFreeze$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/deepFreeze.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$parseAmplifyConfig$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/parseAmplifyConfig.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$hex$2d$encoding$40$2$2e$0$2e$0$2f$node_modules$2f40$smithy$2f$util$2d$hex$2d$encoding$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-hex-encoding@2.0.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/index.mjs [app-client] (ecmascript)");
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
class AmplifyClass {
    constructor(){
        this.oAuthListener = undefined;
        this.resourcesConfig = {};
        this.libraryOptions = {};
        this.Auth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthClass"]();
    }
    /**
     * Configures Amplify for use with your back-end resources.
     *
     * @remarks
     * This API does not perform any merging of either `resourcesConfig` or `libraryOptions`. The most recently
     * provided values will be used after configuration.
     *
     * @remarks
     * `configure` can be used to specify additional library options where available for supported categories.
     *
     * @param resourceConfig - Back-end resource configuration. Typically provided via the `aws-exports.js` file.
     * @param libraryOptions - Additional options for customizing the behavior of the library.
     */ configure(resourcesConfig, libraryOptions) {
        const resolvedResourceConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$parseAmplifyConfig$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAmplifyConfig"])(resourcesConfig);
        this.resourcesConfig = resolvedResourceConfig;
        if (libraryOptions) {
            this.libraryOptions = libraryOptions;
        }
        // Make resource config immutable
        this.resourcesConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$deepFreeze$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepFreeze"])(this.resourcesConfig);
        this.Auth.configure(this.resourcesConfig.Auth, this.libraryOptions.Auth);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hub"].dispatch('core', {
            event: 'configure',
            data: this.resourcesConfig
        }, 'Configure', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMPLIFY_SYMBOL"]);
        this.notifyOAuthListener();
    }
    /**
     * Provides access to the current back-end resource configuration for the Library.
     *
     * @returns Returns the immutable back-end resource configuration.
     */ getConfig() {
        return this.resourcesConfig;
    }
    /** @internal */ [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADD_OAUTH_LISTENER"]](listener) {
        if (this.resourcesConfig.Auth?.Cognito.loginWith?.oauth) {
            // when Amplify has been configured with a valid OAuth config while adding the listener, run it directly
            listener(this.resourcesConfig.Auth?.Cognito);
        } else {
            // otherwise register the listener and run it later when Amplify gets configured with a valid oauth config
            this.oAuthListener = listener;
        }
    }
    notifyOAuthListener() {
        if (!this.resourcesConfig.Auth?.Cognito.loginWith?.oauth || !this.oAuthListener) {
            return;
        }
        this.oAuthListener(this.resourcesConfig.Auth?.Cognito);
        // the listener should only be notified once with a valid oauth config
        this.oAuthListener = undefined;
    }
}
/**
 * The `Amplify` utility is used to configure the library.
 *
 * @remarks
 * `Amplify` orchestrates cross-category communication within the library.
 */ const Amplify = new AmplifyClass();
;
 //# sourceMappingURL=Amplify.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/globalHelpers/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAtob": (()=>getAtob),
    "getBtoa": (()=>getBtoa),
    "getCrypto": (()=>getCrypto)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-client] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getCrypto = ()=>{
    if (typeof window === 'object' && typeof window.crypto === 'object') {
        return window.crypto;
    }
    // Next.js global polyfill
    if (typeof crypto === 'object') {
        return crypto;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyError"]({
        name: 'MissingPolyfill',
        message: 'Cannot resolve the `crypto` function from the environment.'
    });
};
const getBtoa = ()=>{
    // browser
    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
        return window.btoa;
    }
    // Next.js global polyfill
    if (typeof btoa === 'function') {
        return btoa;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyError"]({
        name: 'Base64EncoderError',
        message: 'Cannot resolve the `btoa` function from the environment.'
    });
};
const getAtob = ()=>{
    // browser
    if (typeof window !== 'undefined' && typeof window.atob === 'function') {
        return window.atob;
    }
    // Next.js global polyfill
    if (typeof atob === 'function') {
        return atob;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyError"]({
        name: 'Base64EncoderError',
        message: 'Cannot resolve the `atob` function from the environment.'
    });
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Decoder.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "base64Decoder": (()=>base64Decoder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/globalHelpers/index.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const base64Decoder = {
    convert (input, options) {
        let inputStr = input;
        // urlSafe character replacement options conform to the base64 url spec
        // https://datatracker.ietf.org/doc/html/rfc4648#page-7
        if (options?.urlSafe) {
            inputStr = inputStr.replace(/-/g, '+').replace(/_/g, '/');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAtob"])()(inputStr);
    }
};
;
 //# sourceMappingURL=base64Decoder.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAssertionFunction": (()=>createAssertionFunction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createAssertionFunction = (errorMap, AssertionError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyError"])=>(assertion, name, additionalContext)=>{
        const { message, recoverySuggestion } = errorMap[name];
        if (!assertion) {
            throw new AssertionError({
                name,
                message: additionalContext ? `${message} ${additionalContext}` : message,
                recoverySuggestion
            });
        }
    };
;
 //# sourceMappingURL=createAssertionFunction.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/errorHelpers.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthConfigurationErrorCode": (()=>AuthConfigurationErrorCode),
    "assert": (()=>assert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$createAssertionFunction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs [app-client] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var AuthConfigurationErrorCode;
(function(AuthConfigurationErrorCode) {
    AuthConfigurationErrorCode["AuthTokenConfigException"] = "AuthTokenConfigException";
    AuthConfigurationErrorCode["AuthUserPoolAndIdentityPoolException"] = "AuthUserPoolAndIdentityPoolException";
    AuthConfigurationErrorCode["AuthUserPoolException"] = "AuthUserPoolException";
    AuthConfigurationErrorCode["InvalidIdentityPoolIdException"] = "InvalidIdentityPoolIdException";
    AuthConfigurationErrorCode["OAuthNotConfigureException"] = "OAuthNotConfigureException";
})(AuthConfigurationErrorCode || (AuthConfigurationErrorCode = {}));
const authConfigurationErrorMap = {
    [AuthConfigurationErrorCode.AuthTokenConfigException]: {
        message: 'Auth Token Provider not configured.',
        recoverySuggestion: 'Make sure to call Amplify.configure in your app.'
    },
    [AuthConfigurationErrorCode.AuthUserPoolAndIdentityPoolException]: {
        message: 'Auth UserPool or IdentityPool not configured.',
        recoverySuggestion: 'Make sure to call Amplify.configure in your app with UserPoolId and IdentityPoolId.'
    },
    [AuthConfigurationErrorCode.AuthUserPoolException]: {
        message: 'Auth UserPool not configured.',
        recoverySuggestion: 'Make sure to call Amplify.configure in your app with userPoolId and userPoolClientId.'
    },
    [AuthConfigurationErrorCode.InvalidIdentityPoolIdException]: {
        message: 'Invalid identity pool id provided.',
        recoverySuggestion: 'Make sure a valid identityPoolId is given in the config.'
    },
    [AuthConfigurationErrorCode.OAuthNotConfigureException]: {
        message: 'oauth param not configured.',
        recoverySuggestion: 'Make sure to call Amplify.configure with oauth parameter in your app.'
    }
};
const assert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$createAssertionFunction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssertionFunction"])(authConfigurationErrorMap);
;
 //# sourceMappingURL=errorHelpers.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertIdentityPoolIdConfig": (()=>assertIdentityPoolIdConfig),
    "assertOAuthConfig": (()=>assertOAuthConfig),
    "assertTokenProviderConfig": (()=>assertTokenProviderConfig),
    "decodeJWT": (()=>decodeJWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Decoder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Decoder.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/errorHelpers.mjs [app-client] (ecmascript)");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertTokenProviderConfig(cognitoConfig) {
    let assertionValid = true; // assume valid until otherwise proveed
    if (!cognitoConfig) {
        assertionValid = false;
    } else {
        assertionValid = !!cognitoConfig.userPoolId && !!cognitoConfig.userPoolClientId;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(assertionValid, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthConfigurationErrorCode"].AuthUserPoolException);
}
function assertOAuthConfig(cognitoConfig) {
    const validOAuthConfig = !!cognitoConfig?.loginWith?.oauth?.domain && !!cognitoConfig?.loginWith?.oauth?.redirectSignOut && !!cognitoConfig?.loginWith?.oauth?.redirectSignIn && !!cognitoConfig?.loginWith?.oauth?.responseType;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(validOAuthConfig, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthConfigurationErrorCode"].OAuthNotConfigureException);
}
function assertIdentityPoolIdConfig(cognitoConfig) {
    const validConfig = !!cognitoConfig?.identityPoolId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(validConfig, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Auth$2f$utils$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthConfigurationErrorCode"].InvalidIdentityPoolIdException);
}
/**
 * Decodes payload of JWT token
 *
 * @param {String} token A string representing a token to be decoded
 * @throws {@link Error} - Throws error when token is invalid or payload malformed.
 */ function decodeJWT(token) {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
        throw new Error('Invalid token');
    }
    try {
        const base64WithUrlSafe = tokenParts[1];
        const base64 = base64WithUrlSafe.replace(/-/g, '+').replace(/_/g, '/');
        const jsonStr = decodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$base64Decoder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64Decoder"].convert(base64).split('').map((char)=>`%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`).join(''));
        const payload = JSON.parse(jsonStr);
        return {
            toString: ()=>token,
            payload
        };
    } catch (err) {
        throw new Error('Invalid token payload');
    }
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/CookieStorage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CookieStorage": (()=>CookieStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class CookieStorage {
    constructor(data = {}){
        const { path, domain, expires, sameSite, secure } = data;
        this.domain = domain;
        this.path = path || '/';
        this.expires = Object.prototype.hasOwnProperty.call(data, 'expires') ? expires : 365;
        this.secure = Object.prototype.hasOwnProperty.call(data, 'secure') ? secure : true;
        if (Object.prototype.hasOwnProperty.call(data, 'sameSite')) {
            if (!sameSite || ![
                'strict',
                'lax',
                'none'
            ].includes(sameSite)) {
                throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
            }
            if (sameSite === 'none' && !this.secure) {
                throw new Error('sameSite = None requires the Secure attribute in latest browser versions.');
            }
            this.sameSite = sameSite;
        }
    }
    async setItem(key, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set(key, value, this.getData());
    }
    async getItem(key) {
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(key);
        return item ?? null;
    }
    async removeItem(key) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove(key, this.getData());
    }
    async clear() {
        const cookie = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get();
        const promises = Object.keys(cookie).map((key)=>this.removeItem(key));
        await Promise.all(promises);
    }
    getData() {
        return {
            path: this.path,
            expires: this.expires,
            domain: this.domain,
            secure: this.secure,
            ...this.sameSite && {
                sameSite: this.sameSite
            }
        };
    }
}
;
 //# sourceMappingURL=CookieStorage.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AmplifyErrorCode": (()=>AmplifyErrorCode)
});
var AmplifyErrorCode;
(function(AmplifyErrorCode) {
    AmplifyErrorCode["NoEndpointId"] = "NoEndpointId";
    AmplifyErrorCode["PlatformNotSupported"] = "PlatformNotSupported";
    AmplifyErrorCode["Unknown"] = "Unknown";
    AmplifyErrorCode["NetworkError"] = "NetworkError";
})(AmplifyErrorCode || (AmplifyErrorCode = {}));
;
 //# sourceMappingURL=errors.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/PlatformNotSupportedError.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlatformNotSupportedError": (()=>PlatformNotSupportedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class PlatformNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyError"] {
    constructor(){
        super({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyErrorCode"].PlatformNotSupported,
            message: 'Function not supported on current platform'
        });
    }
}
;
 //# sourceMappingURL=PlatformNotSupportedError.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/KeyValueStorage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KeyValueStorage": (()=>KeyValueStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$PlatformNotSupportedError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/PlatformNotSupportedError.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ class KeyValueStorage {
    constructor(storage){
        this.storage = storage;
    }
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */ async setItem(key, value) {
        if (!this.storage) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$PlatformNotSupportedError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformNotSupportedError"]();
        this.storage.setItem(key, value);
    }
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */ async getItem(key) {
        if (!this.storage) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$PlatformNotSupportedError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformNotSupportedError"]();
        return this.storage.getItem(key);
    }
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */ async removeItem(key) {
        if (!this.storage) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$PlatformNotSupportedError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformNotSupportedError"]();
        this.storage.removeItem(key);
    }
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */ async clear() {
        if (!this.storage) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$PlatformNotSupportedError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformNotSupportedError"]();
        this.storage.clear();
    }
}
;
 //# sourceMappingURL=KeyValueStorage.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/InMemoryStorage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ __turbopack_context__.s({
    "InMemoryStorage": (()=>InMemoryStorage)
});
class InMemoryStorage {
    constructor(){
        this.storage = new Map();
    }
    get length() {
        return this.storage.size;
    }
    key(index) {
        if (index > this.length - 1) {
            return null;
        }
        return Array.from(this.storage.keys())[index];
    }
    setItem(key, value) {
        this.storage.set(key, value);
    }
    getItem(key) {
        return this.storage.get(key) ?? null;
    }
    removeItem(key) {
        this.storage.delete(key);
    }
    clear() {
        this.storage.clear();
    }
}
;
 //# sourceMappingURL=InMemoryStorage.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/utils.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLocalStorageWithFallback": (()=>getLocalStorageWithFallback),
    "getSessionStorageWithFallback": (()=>getSessionStorageWithFallback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$InMemoryStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/InMemoryStorage.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 * @returns Either a reference to window.localStorage or an in-memory storage as fallback
 */ const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleLogger"]('CoreStorageUtils');
const getLocalStorageWithFallback = ()=>{
    try {
        // Attempt to use localStorage directly
        if (typeof window !== 'undefined' && window.localStorage) {
            return window.localStorage;
        }
    } catch (e) {
        // Handle any errors related to localStorage access
        logger.info('localStorage not found. InMemoryStorage is used as a fallback.');
    }
    // Return in-memory storage as a fallback if localStorage is not accessible
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$InMemoryStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryStorage"]();
};
/**
 * @internal
 * @returns Either a reference to window.sessionStorage or an in-memory storage as fallback
 */ const getSessionStorageWithFallback = ()=>{
    try {
        // Attempt to use sessionStorage directly
        if (typeof window !== 'undefined' && window.sessionStorage) {
            // Verify we can actually use it by testing access
            window.sessionStorage.getItem('test');
            return window.sessionStorage;
        }
        throw new Error('sessionStorage is not defined');
    } catch (e) {
        // Handle any errors related to sessionStorage access
        logger.info('sessionStorage not found. InMemoryStorage is used as a fallback.');
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$InMemoryStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryStorage"]();
    }
};
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/DefaultStorage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultStorage": (()=>DefaultStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$KeyValueStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/KeyValueStorage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/utils.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ class DefaultStorage extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$KeyValueStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyValueStorage"] {
    constructor(){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalStorageWithFallback"])());
    }
}
;
 //# sourceMappingURL=DefaultStorage.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/SessionStorage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SessionStorage": (()=>SessionStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$KeyValueStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/KeyValueStorage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/utils.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ class SessionStorage extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$KeyValueStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyValueStorage"] {
    constructor(){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionStorageWithFallback"])());
    }
}
;
 //# sourceMappingURL=SessionStorage.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/SyncKeyValueStorage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SyncKeyValueStorage": (()=>SyncKeyValueStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$PlatformNotSupportedError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/PlatformNotSupportedError.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ class SyncKeyValueStorage {
    constructor(storage){
        this._storage = storage;
    }
    get storage() {
        if (!this._storage) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$PlatformNotSupportedError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformNotSupportedError"]();
        return this._storage;
    }
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */ setItem(key, value) {
        this.storage.setItem(key, value);
    }
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */ getItem(key) {
        return this.storage.getItem(key);
    }
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */ removeItem(key) {
        this.storage.removeItem(key);
    }
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */ clear() {
        this.storage.clear();
    }
}
;
 //# sourceMappingURL=SyncKeyValueStorage.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/SyncSessionStorage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SyncSessionStorage": (()=>SyncSessionStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$SyncKeyValueStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/SyncKeyValueStorage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/utils.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */ class SyncSessionStorage extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$SyncKeyValueStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncKeyValueStorage"] {
    constructor(){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionStorageWithFallback"])());
    }
}
;
 //# sourceMappingURL=SyncSessionStorage.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultStorage": (()=>defaultStorage),
    "sessionStorage": (()=>sessionStorage),
    "sharedInMemoryStorage": (()=>sharedInMemoryStorage),
    "syncSessionStorage": (()=>syncSessionStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$DefaultStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/DefaultStorage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$InMemoryStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/InMemoryStorage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$KeyValueStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/KeyValueStorage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$SessionStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/SessionStorage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$SyncSessionStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/storage/SyncSessionStorage.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const defaultStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$DefaultStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultStorage"]();
const sessionStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$SessionStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionStorage"]();
const syncSessionStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$SyncSessionStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncSessionStorage"]();
const sharedInMemoryStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$KeyValueStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyValueStorage"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$storage$2f$InMemoryStorage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryStorage"]());
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/deDupeAsyncFunction.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * returns in-flight promise if there is one
 *
 * @param asyncFunction - asyncFunction to be deduped.
 * @returns - the return type of the callback
 */ __turbopack_context__.s({
    "deDupeAsyncFunction": (()=>deDupeAsyncFunction)
});
const deDupeAsyncFunction = (asyncFunction)=>{
    let inflightPromise;
    return async (...args)=>{
        if (inflightPromise) return inflightPromise;
        inflightPromise = new Promise((resolve, reject)=>{
            asyncFunction(...args).then((result)=>{
                resolve(result);
            }).catch((error)=>{
                reject(error);
            }).finally(()=>{
                inflightPromise = undefined;
            });
        });
        return inflightPromise;
    };
};
;
 //# sourceMappingURL=deDupeAsyncFunction.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Compose a service API handler that accepts input as defined shape and responds conforming to defined output shape.
 * A service API handler is composed with:
 * * A transfer handler
 * * A serializer function
 * * A deserializer function
 * * A default config object
 *
 * The returned service API handler, when called, will trigger the following workflow:
 * 1. When calling the service API handler function, the default config object is merged into the input config
 * object to assign the default values of some omitted configs, resulting to a resolved config object.
 * 2. The `endpointResolver` function from the default config object will be invoked with the resolved config object and
 * API input object resulting to an endpoint instance.
 * 3. The serializer function is invoked with API input object and the endpoint instance resulting to an HTTP request
 * instance.
 * 4. The HTTP request instance and the resolved config object is passed to the transfer handler function.
 * 5. The transfer handler function resolves to an HTTP response instance(can be either successful or failed status code).
 * 6. The deserializer function is invoked with the HTTP response instance resulting to the API output object, and
 * return to the caller.
 *
 *
 * @param transferHandler Async function for dispatching HTTP requests and returning HTTP response.
 * @param serializer  Async function for converting object in defined input shape into HTTP request targeting a given
 * 	endpoint.
 * @param deserializer Async function for converting HTTP response into output object in defined output shape, or error
 * 	shape.
 * @param defaultConfig  object containing default options to be consumed by transfer handler, serializer and
 *  deserializer.
 * @returns a async service API handler function that accepts a config object and input object in defined shape, returns
 * 	an output object in defined shape. It may also throw error instance in defined shape in deserializer. The config
 *  object type is composed with options type of transferHandler, endpointResolver function as well as endpointResolver
 *  function's input options type, region string. The config object property will be marked as optional if it's also
 * 	defined in defaultConfig.
 *
 * @internal
 */ __turbopack_context__.s({
    "composeServiceApi": (()=>composeServiceApi)
});
const composeServiceApi = (transferHandler, serializer, deserializer, defaultConfig)=>{
    return async (config, input)=>{
        const resolvedConfig = {
            ...defaultConfig,
            ...config
        };
        // We need to allow different endpoints based on both given config(other than region) and input.
        // However for most of non-S3 services, region is the only input for endpoint resolver.
        const endpoint = await resolvedConfig.endpointResolver(resolvedConfig, input);
        // Unlike AWS SDK clients, a serializer should NOT populate the `host` or `content-length` headers.
        // Both of these headers are prohibited per Spec(https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name).
        // They will be populated automatically by browser, or node-fetch polyfill.
        const request = await serializer(input, endpoint);
        const response = await transferHandler(request, {
            ...resolvedConfig
        });
        return deserializer(response);
    };
};
;
 //# sourceMappingURL=composeServiceApi.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/responseInfo.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "parseMetadata": (()=>parseMetadata)
});
const parseMetadata = (response)=>{
    const { headers, statusCode } = response;
    return {
        ...isMetadataBearer(response) ? response.$metadata : {},
        httpStatusCode: statusCode,
        requestId: headers['x-amzn-requestid'] ?? headers['x-amzn-request-id'] ?? headers['x-amz-request-id'],
        extendedRequestId: headers['x-amz-id-2'],
        cfId: headers['x-amz-cf-id']
    };
};
const isMetadataBearer = (response)=>typeof response?.$metadata === 'object';
;
 //# sourceMappingURL=responseInfo.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseJsonBody": (()=>parseJsonBody),
    "parseJsonError": (()=>parseJsonError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$responseInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/responseInfo.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Utility functions for serializing and deserializing of JSON protocol in general(including: REST-JSON, JSON-RPC, etc.)
 */ /**
 * Error parser for AWS JSON protocol.
 */ const parseJsonError = async (response)=>{
    if (!response || response.statusCode < 300) {
        return;
    }
    const body = await parseJsonBody(response);
    const sanitizeErrorCode = (rawValue)=>{
        const [cleanValue] = rawValue.toString().split(/[,:]+/);
        if (cleanValue.includes('#')) {
            return cleanValue.split('#')[1];
        }
        return cleanValue;
    };
    const code = sanitizeErrorCode(response.headers['x-amzn-errortype'] ?? body.code ?? body.__type ?? 'UnknownError');
    const message = body.message ?? body.Message ?? 'Unknown error';
    const error = new Error(message);
    return Object.assign(error, {
        name: code,
        $metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$responseInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMetadata"])(response)
    });
};
/**
 * Parse JSON response body to JavaScript object.
 */ const parseJsonBody = async (response)=>{
    if (!response.body) {
        throw new Error('Missing response payload');
    }
    const output = await response.body.json();
    return Object.assign(output, {
        $metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$responseInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMetadata"])(response)
    });
};
;
 //# sourceMappingURL=json.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeTransferHandler.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Compose a transfer handler with a core transfer handler and a list of middleware.
 * @param coreHandler Core transfer handler
 * @param middleware	List of middleware
 * @returns A transfer handler whose option type is the union of the core
 * 	transfer handler's option type and the middleware's option type.
 * @internal
 */ __turbopack_context__.s({
    "composeTransferHandler": (()=>composeTransferHandler)
});
const composeTransferHandler = (coreHandler, middleware)=>(request, options)=>{
        const context = {};
        let composedHandler = (composeHandlerRequest)=>coreHandler(composeHandlerRequest, options);
        for(let i = middleware.length - 1; i >= 0; i--){
            const m = middleware[i];
            const resolvedMiddleware = m(options);
            composedHandler = resolvedMiddleware(composedHandler, context);
        }
        return composedHandler(request);
    };
;
 //# sourceMappingURL=composeTransferHandler.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/constants.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "AMZ_SDK_INVOCATION_ID_HEADER": (()=>AMZ_SDK_INVOCATION_ID_HEADER),
    "AMZ_SDK_REQUEST_HEADER": (()=>AMZ_SDK_REQUEST_HEADER),
    "DEFAULT_MAX_DELAY_MS": (()=>DEFAULT_MAX_DELAY_MS),
    "DEFAULT_RETRY_ATTEMPTS": (()=>DEFAULT_RETRY_ATTEMPTS)
});
const DEFAULT_RETRY_ATTEMPTS = 3;
const AMZ_SDK_INVOCATION_ID_HEADER = 'amz-sdk-invocation-id';
const AMZ_SDK_REQUEST_HEADER = 'amz-sdk-request';
const DEFAULT_MAX_DELAY_MS = 5 * 60 * 1000;
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/retryMiddleware.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "retryMiddlewareFactory": (()=>retryMiddlewareFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/constants.mjs [app-client] (ecmascript)");
;
/**
 * Middleware that executes the retry logic.
 */ const retryMiddlewareFactory = ({ maxAttempts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RETRY_ATTEMPTS"], retryDecider, computeDelay, abortSignal })=>{
    if (maxAttempts < 1) {
        throw new Error('maxAttempts must be greater than 0');
    }
    return (next, context)=>async function retryMiddleware(request) {
            let error;
            let attemptsCount = context.attemptsCount ?? 0;
            let response;
            // When retry is not needed or max attempts is reached, either error or response will be set. This function handles either cases.
            const handleTerminalErrorOrResponse = ()=>{
                if (response) {
                    addOrIncrementMetadataAttempts(response, attemptsCount);
                    return response;
                } else {
                    addOrIncrementMetadataAttempts(error, attemptsCount);
                    throw error;
                }
            };
            while(!abortSignal?.aborted && attemptsCount < maxAttempts){
                try {
                    response = await next(request);
                    error = undefined;
                } catch (e) {
                    error = e;
                    response = undefined;
                }
                // context.attemptsCount may be updated after calling next handler which may retry the request by itself.
                attemptsCount = (context.attemptsCount ?? 0) > attemptsCount ? context.attemptsCount ?? 0 : attemptsCount + 1;
                context.attemptsCount = attemptsCount;
                const { isCredentialsExpiredError, retryable } = await retryDecider(response, error, context);
                if (retryable) {
                    // Setting isCredentialsInvalid flag to notify signing middleware to forceRefresh credentials provider.
                    context.isCredentialsExpired = !!isCredentialsExpiredError;
                    if (!abortSignal?.aborted && attemptsCount < maxAttempts) {
                        // prevent sleep for last attempt or cancelled request;
                        const delay = computeDelay(attemptsCount);
                        await cancellableSleep(delay, abortSignal);
                    }
                    continue;
                } else {
                    return handleTerminalErrorOrResponse();
                }
            }
            if (abortSignal?.aborted) {
                throw new Error('Request aborted.');
            } else {
                return handleTerminalErrorOrResponse();
            }
        };
};
const cancellableSleep = (timeoutMs, abortSignal)=>{
    if (abortSignal?.aborted) {
        return Promise.resolve();
    }
    let timeoutId;
    let sleepPromiseResolveFn;
    const sleepPromise = new Promise((resolve)=>{
        sleepPromiseResolveFn = resolve;
        timeoutId = setTimeout(resolve, timeoutMs);
    });
    abortSignal?.addEventListener('abort', function cancelSleep(_) {
        clearTimeout(timeoutId);
        abortSignal?.removeEventListener('abort', cancelSleep);
        sleepPromiseResolveFn();
    });
    return sleepPromise;
};
const addOrIncrementMetadataAttempts = (nextHandlerOutput, attempts)=>{
    if (Object.prototype.toString.call(nextHandlerOutput) !== '[object Object]') {
        return;
    }
    nextHandlerOutput.$metadata = {
        ...nextHandlerOutput.$metadata ?? {},
        attempts
    };
};
;
 //# sourceMappingURL=retryMiddleware.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUuid/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "amplifyUuid": (()=>amplifyUuid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const amplifyUuid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"];
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/amzSdkInvocationIdHeaderMiddleware.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "amzSdkInvocationIdHeaderMiddlewareFactory": (()=>amzSdkInvocationIdHeaderMiddlewareFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUuid$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUuid/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$hex$2d$encoding$40$2$2e$0$2e$0$2f$node_modules$2f40$smithy$2f$util$2d$hex$2d$encoding$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-hex-encoding@2.0.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/constants.mjs [app-client] (ecmascript)");
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
 * Middleware injects a UUID string to `amz-sdk-invocation-id` header.
 * if the header is not set already. This header is helpful to provide
 * observability to group the requests caused by automatic retry.
 *
 * This middleware is standalone because of extra UUID dependency, we will
 * NOT use this middleware for API categories.
 *
 * Ref: https://sdk.amazonaws.com/kotlin/api/smithy-kotlin/api/1.0.9/http-client/aws.smithy.kotlin.runtime.http.operation/-http-operation-context/-sdk-invocation-id.html
 */ const amzSdkInvocationIdHeaderMiddlewareFactory = ()=>(next)=>{
        return async function amzSdkInvocationIdHeaderMiddleware(request) {
            if (!request.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMZ_SDK_INVOCATION_ID_HEADER"]]) {
                request.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMZ_SDK_INVOCATION_ID_HEADER"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUuid$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amplifyUuid"])();
            }
            return next(request);
        };
    };
;
 //# sourceMappingURL=amzSdkInvocationIdHeaderMiddleware.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/amzSdkRequestHeaderMiddleware.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "amzSdkRequestHeaderMiddlewareFactory": (()=>amzSdkRequestHeaderMiddlewareFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/constants.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Middleware injects `amz-sdk-request` header to indicate the retry state at the time an HTTP request is made.
 * This middleware should co-exist with retryMiddleware as it relies on the retryAttempts value in middleware context
 * set by the retry middleware.
 *
 * Example header: `amz-sdk-request: attempt=1; max=3`.
 *
 * This middleware is standalone because of extra headers may conflict with custom endpoint settings(e.g. CORS), we will
 * NOT use this middleware for API categories.
 */ const amzSdkRequestHeaderMiddlewareFactory = ({ maxAttempts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RETRY_ATTEMPTS"] })=>(next, context)=>{
        return async function amzSdkRequestHeaderMiddleware(request) {
            const attemptsCount = context.attemptsCount ?? 0;
            request.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMZ_SDK_REQUEST_HEADER"]] = `attempt=${attemptsCount + 1}; max=${maxAttempts}`;
            return next(request);
        };
    };
;
 //# sourceMappingURL=amzSdkRequestHeaderMiddleware.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/userAgent/middleware.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Middleware injects user agent string to specified header(default to 'x-amz-user-agent'),
 * if the header is not set already.
 *
 * TODO: incorporate new user agent design
 */ __turbopack_context__.s({
    "userAgentMiddlewareFactory": (()=>userAgentMiddlewareFactory)
});
const userAgentMiddlewareFactory = ({ userAgentHeader = 'x-amz-user-agent', userAgentValue = '' })=>(next)=>{
        return async function userAgentMiddleware(request) {
            if (userAgentValue.trim().length === 0) {
                const result = await next(request);
                return result;
            } else {
                const headerName = userAgentHeader.toLowerCase();
                request.headers[headerName] = request.headers[headerName] ? `${request.headers[headerName]} ${userAgentValue}` : userAgentValue;
                const response = await next(request);
                return response;
            }
        };
    };
;
 //# sourceMappingURL=middleware.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/utils/memoization.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Cache the payload of a response body. It allows multiple calls to the body,
 * for example, when reading the body in both retry decider and error deserializer.
 * Caching body is allowed here because we call the body accessor(blob(), json(),
 * etc.) when body is small or streaming implementation is not available(RN).
 *
 * @internal
 */ __turbopack_context__.s({
    "withMemoization": (()=>withMemoization)
});
const withMemoization = (payloadAccessor)=>{
    let cached;
    return ()=>{
        if (!cached) {
            // Explicitly not awaiting. Intermediate await would add overhead and
            // introduce a possible race in the event that this wrapper is called
            // again before the first `payloadAccessor` call resolves.
            cached = payloadAccessor();
        }
        return cached;
    };
};
;
 //# sourceMappingURL=memoization.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/handlers/fetch.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchTransferHandler": (()=>fetchTransferHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$utils$2f$memoization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/utils/memoization.mjs [app-client] (ecmascript)");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const shouldSendBody = (method)=>![
        'HEAD',
        'GET',
        'DELETE'
    ].includes(method.toUpperCase());
// TODO[AllanZhengYP]: we need to provide isCanceledError utility
const fetchTransferHandler = async ({ url, method, headers, body }, { abortSignal, cache, withCrossDomainCredentials })=>{
    let resp;
    try {
        resp = await fetch(url, {
            method,
            headers,
            body: shouldSendBody(method) ? body : undefined,
            signal: abortSignal,
            cache,
            credentials: withCrossDomainCredentials ? 'include' : 'same-origin'
        });
    } catch (e) {
        if (e instanceof TypeError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$AmplifyError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyError"]({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyErrorCode"].NetworkError,
                message: 'A network error has occurred.',
                underlyingError: e
            });
        }
        throw e;
    }
    const responseHeaders = {};
    resp.headers?.forEach((value, key)=>{
        responseHeaders[key.toLowerCase()] = value;
    });
    const httpResponse = {
        statusCode: resp.status,
        headers: responseHeaders,
        body: null
    };
    // resp.body is a ReadableStream according to Fetch API spec, but React Native
    // does not implement it.
    const bodyWithMixin = Object.assign(resp.body ?? {}, {
        text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$utils$2f$memoization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withMemoization"])(()=>resp.text()),
        blob: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$utils$2f$memoization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withMemoization"])(()=>resp.blob()),
        json: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$utils$2f$memoization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withMemoization"])(()=>resp.json())
    });
    return {
        ...httpResponse,
        body: bodyWithMixin
    };
};
;
 //# sourceMappingURL=fetch.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/handlers/aws/unauthenticated.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "unauthenticatedHandler": (()=>unauthenticatedHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$retryMiddleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/retryMiddleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$amzSdkInvocationIdHeaderMiddleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/amzSdkInvocationIdHeaderMiddleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$amzSdkRequestHeaderMiddleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/amzSdkRequestHeaderMiddleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$userAgent$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/userAgent/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeTransferHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeTransferHandler.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$handlers$2f$fetch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/handlers/fetch.mjs [app-client] (ecmascript)");
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
const unauthenticatedHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeTransferHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeTransferHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$handlers$2f$fetch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchTransferHandler"], [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$userAgent$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAgentMiddlewareFactory"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$amzSdkInvocationIdHeaderMiddleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amzSdkInvocationIdHeaderMiddlewareFactory"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$retryMiddleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retryMiddlewareFactory"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$amzSdkRequestHeaderMiddleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amzSdkRequestHeaderMiddlewareFactory"]
]);
;
 //# sourceMappingURL=unauthenticated.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/isClockSkewError.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// via https://github.com/aws/aws-sdk-js-v3/blob/ab0e7be36e7e7f8a0c04834357aaad643c7912c3/packages/service-error-classification/src/constants.ts#L8
__turbopack_context__.s({
    "isClockSkewError": (()=>isClockSkewError)
});
const CLOCK_SKEW_ERROR_CODES = [
    'AuthFailure',
    'InvalidSignatureException',
    'RequestExpired',
    'RequestInTheFuture',
    'RequestTimeTooSkewed',
    'SignatureDoesNotMatch',
    'BadRequestException'
];
/**
 * Given an error code, returns true if it is related to a clock skew error.
 *
 * @param errorCode String representation of some error.
 * @returns True if given error is present in `CLOCK_SKEW_ERROR_CODES`, false otherwise.
 *
 * @internal
 */ const isClockSkewError = (errorCode)=>!!errorCode && CLOCK_SKEW_ERROR_CODES.includes(errorCode);
;
 //# sourceMappingURL=isClockSkewError.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/defaultRetryDecider.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRetryDecider": (()=>getRetryDecider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$isClockSkewError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/isClockSkewError.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Get retry decider function
 * @param errorParser Function to load JavaScript error from HTTP response
 */ const getRetryDecider = (errorParser)=>async (response, error)=>{
        const parsedError = error ?? await errorParser(response) ?? undefined;
        const errorCode = parsedError?.code || parsedError?.name;
        const statusCode = response?.statusCode;
        const isRetryable = isConnectionError(error) || isThrottlingError(statusCode, errorCode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$isClockSkewError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isClockSkewError"])(errorCode) || isServerSideError(statusCode, errorCode);
        return {
            retryable: isRetryable
        };
    };
// reference: https://github.com/aws/aws-sdk-js-v3/blob/ab0e7be36e7e7f8a0c04834357aaad643c7912c3/packages/service-error-classification/src/constants.ts#L22-L37
const THROTTLING_ERROR_CODES = [
    'BandwidthLimitExceeded',
    'EC2ThrottledException',
    'LimitExceededException',
    'PriorRequestNotComplete',
    'ProvisionedThroughputExceededException',
    'RequestLimitExceeded',
    'RequestThrottled',
    'RequestThrottledException',
    'SlowDown',
    'ThrottledException',
    'Throttling',
    'ThrottlingException',
    'TooManyRequestsException'
];
const TIMEOUT_ERROR_CODES = [
    'TimeoutError',
    'RequestTimeout',
    'RequestTimeoutException'
];
const isThrottlingError = (statusCode, errorCode)=>statusCode === 429 || !!errorCode && THROTTLING_ERROR_CODES.includes(errorCode);
const isConnectionError = (error)=>[
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyErrorCode"].NetworkError,
        // TODO(vNext): unify the error code `ERR_NETWORK` used by the Storage XHR handler
        'ERR_NETWORK'
    ].includes(error?.name);
const isServerSideError = (statusCode, errorCode)=>!!statusCode && [
        500,
        502,
        503,
        504
    ].includes(statusCode) || !!errorCode && TIMEOUT_ERROR_CODES.includes(errorCode);
;
 //# sourceMappingURL=defaultRetryDecider.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/retry/constants.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "MAX_DELAY_MS": (()=>MAX_DELAY_MS)
});
const MAX_DELAY_MS = 5 * 60 * 1000;
;
 //# sourceMappingURL=constants.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/retry/jitteredBackoff.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "jitteredBackoff": (()=>jitteredBackoff)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/retry/constants.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @private
 * Internal use of Amplify only
 */ function jitteredBackoff(maxDelayMs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_DELAY_MS"]) {
    const BASE_TIME_MS = 100;
    const JITTER_FACTOR = 100;
    return (attempt)=>{
        const delay = 2 ** attempt * BASE_TIME_MS + JITTER_FACTOR * Math.random();
        return delay > maxDelayMs ? false : delay;
    };
}
;
 //# sourceMappingURL=jitteredBackoff.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/jitteredBackoff.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "jitteredBackoff": (()=>jitteredBackoff)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$retry$2f$jitteredBackoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/retry/jitteredBackoff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/constants.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// TODO: [v6] The separate retry utility is used by Data packages now and will replaced by retry middleware.
const jitteredBackoff = (attempt)=>{
    const delayFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$retry$2f$jitteredBackoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jitteredBackoff"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MAX_DELAY_MS"]);
    const delay = delayFunction(attempt);
    // The delayFunction returns false when the delay is greater than the max delay(5 mins).
    // In this case, the retry middleware will delay 5 mins instead, as a ceiling of the delay.
    return delay === false ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MAX_DELAY_MS"] : delay;
};
;
 //# sourceMappingURL=jitteredBackoff.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/version.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// generated by genversion
__turbopack_context__.s({
    "version": (()=>version)
});
const version = '6.14.1';
;
 //# sourceMappingURL=version.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "documentExists": (()=>documentExists),
    "globalExists": (()=>globalExists),
    "globalThisExists": (()=>globalThisExists),
    "keyPrefixMatch": (()=>keyPrefixMatch),
    "processExists": (()=>processExists),
    "windowExists": (()=>windowExists)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const globalExists = ()=>{
    return typeof global !== 'undefined';
};
const globalThisExists = ()=>{
    return typeof globalThis !== 'undefined';
};
const windowExists = ()=>{
    return typeof window !== 'undefined';
};
const documentExists = ()=>{
    return typeof document !== 'undefined';
};
const processExists = ()=>{
    return typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined';
};
const keyPrefixMatch = (object, prefix)=>{
    return !!Object.keys(object).find((key)=>key.startsWith(prefix));
};
;
 //# sourceMappingURL=helpers.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/React.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "reactSSRDetect": (()=>reactSSRDetect),
    "reactWebDetect": (()=>reactWebDetect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with react 18.2 - built using Vite
function reactWebDetect() {
    const elementKeyPrefixedWithReact = (key)=>{
        return key.startsWith('_react') || key.startsWith('__react');
    };
    const elementIsReactEnabled = (element)=>{
        return Object.keys(element).find(elementKeyPrefixedWithReact);
    };
    const allElementsWithId = ()=>Array.from(document.querySelectorAll('[id]'));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentExists"])() && allElementsWithId().some(elementIsReactEnabled);
}
function reactSSRDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processExists"])() && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' && !!Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env).find((key)=>key.includes('react'));
}
;
 //# sourceMappingURL=React.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Vue.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "vueSSRDetect": (()=>vueSSRDetect),
    "vueWebDetect": (()=>vueWebDetect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with vue 3.3.2
function vueWebDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["windowExists"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyPrefixMatch"])(window, '__VUE');
}
function vueSSRDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalExists"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyPrefixMatch"])(global, '__VUE');
}
;
 //# sourceMappingURL=Vue.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Svelte.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "svelteSSRDetect": (()=>svelteSSRDetect),
    "svelteWebDetect": (()=>svelteWebDetect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with svelte 3.59
function svelteWebDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["windowExists"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyPrefixMatch"])(window, '__SVELTE');
}
function svelteSSRDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processExists"])() && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' && !!Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env).find((key)=>key.includes('svelte'));
}
;
 //# sourceMappingURL=Svelte.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Next.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nextSSRDetect": (()=>nextSSRDetect),
    "nextWebDetect": (()=>nextWebDetect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with next 13.4 / react 18.2
function nextWebDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["windowExists"])() && window.next && typeof window.next === 'object';
}
function nextSSRDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalExists"])() && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyPrefixMatch"])(global, '__next') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyPrefixMatch"])(global, '__NEXT'));
}
;
 //# sourceMappingURL=Next.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Nuxt.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nuxtSSRDetect": (()=>nuxtSSRDetect),
    "nuxtWebDetect": (()=>nuxtWebDetect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with nuxt 2.15 / vue 2.7
function nuxtWebDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["windowExists"])() && (window.__NUXT__ !== undefined || window.$nuxt !== undefined);
}
function nuxtSSRDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalExists"])() && typeof global.__NUXT_PATHS__ !== 'undefined';
}
;
 //# sourceMappingURL=Nuxt.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Angular.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "angularSSRDetect": (()=>angularSSRDetect),
    "angularWebDetect": (()=>angularWebDetect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with @angular/core 16.0.0
function angularWebDetect() {
    const angularVersionSetInDocument = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentExists"])() && document.querySelector('[ng-version]'));
    const angularContentSetInWindow = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["windowExists"])() && typeof window.ng !== 'undefined');
    return angularVersionSetInDocument || angularContentSetInWindow;
}
function angularSSRDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processExists"])() && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === 'object' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.npm_lifecycle_script?.startsWith('ng ') || false;
}
;
 //# sourceMappingURL=Angular.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/ReactNative.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with react-native 0.17.7
__turbopack_context__.s({
    "reactNativeDetect": (()=>reactNativeDetect)
});
function reactNativeDetect() {
    return typeof navigator !== 'undefined' && typeof navigator.product !== 'undefined' && navigator.product === 'ReactNative';
}
;
 //# sourceMappingURL=ReactNative.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Expo.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "expoDetect": (()=>expoDetect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with expo 48 / react-native 0.71.3
function expoDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalExists"])() && typeof global.expo !== 'undefined';
}
;
 //# sourceMappingURL=Expo.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Web.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "webDetect": (()=>webDetect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function webDetect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$helpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["windowExists"])();
}
;
 //# sourceMappingURL=Web.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "detect": (()=>detect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$React$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/React.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Vue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Vue.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Svelte$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Svelte.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Next$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Next.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Nuxt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Nuxt.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Angular$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Angular.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$ReactNative$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/ReactNative.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Expo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Expo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Web$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/Web.mjs [app-client] (ecmascript)");
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
// These are in the order of detection where when both are detectable, the early Framework will be reported
const detectionMap = [
    // First, detect mobile
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].Expo,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Expo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expoDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].ReactNative,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$ReactNative$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactNativeDetect"]
    },
    // Next, detect web frameworks
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].NextJs,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Next$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextWebDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].Nuxt,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Nuxt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nuxtWebDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].Angular,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Angular$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["angularWebDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].React,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$React$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactWebDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].VueJs,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Vue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vueWebDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].Svelte,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Svelte$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svelteWebDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].WebUnknown,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Web$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webDetect"]
    },
    // Last, detect ssr frameworks
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].NextJsSSR,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Next$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextSSRDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].NuxtSSR,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Nuxt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nuxtSSRDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].ReactSSR,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$React$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactSSRDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].VueJsSSR,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Vue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vueSSRDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].AngularSSR,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Angular$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["angularSSRDetect"]
    },
    {
        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].SvelteSSR,
        detectionMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$Svelte$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svelteSSRDetect"]
    }
];
function detect() {
    return detectionMap.find((detectionEntry)=>detectionEntry.detectionMethod())?.platform || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].ServerSideUnknown;
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detectFramework.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearCache": (()=>clearCache),
    "detectFramework": (()=>detectFramework),
    "frameworkChangeObservers": (()=>frameworkChangeObservers),
    "observeFrameworkChanges": (()=>observeFrameworkChanges)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detection/index.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// We want to cache detection since the framework won't change
let frameworkCache;
const frameworkChangeObservers = [];
// Setup the detection reset tracking / timeout delays
let resetTriggered = false;
const SSR_RESET_TIMEOUT = 10; // ms
const WEB_RESET_TIMEOUT = 10; // ms
const PRIME_FRAMEWORK_DELAY = 1000; // ms
const detectFramework = ()=>{
    if (!frameworkCache) {
        frameworkCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detection$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detect"])();
        if (resetTriggered) {
            // The final run of detectFramework:
            // Starting from this point, the `frameworkCache` becomes "final".
            // So we don't need to notify the observers again so the observer
            // can be removed after the final notice.
            while(frameworkChangeObservers.length){
                frameworkChangeObservers.pop()?.();
            }
        } else {
            // The first run of detectFramework:
            // Every time we update the cache, call each observer function
            frameworkChangeObservers.forEach((fcn)=>{
                fcn();
            });
        }
        // Retry once for either Unknown type after a delay (explained below)
        resetTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].ServerSideUnknown, SSR_RESET_TIMEOUT);
        resetTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].WebUnknown, WEB_RESET_TIMEOUT);
    }
    return frameworkCache;
};
/**
 * @internal Setup observer callback that will be called everytime the framework changes
 */ const observeFrameworkChanges = (fcn)=>{
    // When the `frameworkCache` won't be updated again, we ignore all incoming
    // observers.
    if (resetTriggered) {
        return;
    }
    frameworkChangeObservers.push(fcn);
};
function clearCache() {
    frameworkCache = undefined;
}
// For a framework type and a delay amount, setup the event to re-detect
//   During the runtime boot, it is possible that framework detection will
//   be triggered before the framework has made modifications to the
//   global/window/etc needed for detection. When no framework is detected
//   we will reset and try again to ensure we don't use a cached
//   non-framework detection result for all requests.
function resetTimeout(framework, delay) {
    if (frameworkCache === framework && !resetTriggered) {
        setTimeout(()=>{
            clearCache();
            resetTriggered = true;
            setTimeout(detectFramework, PRIME_FRAMEWORK_DELAY);
        }, delay);
    }
}
;
 //# sourceMappingURL=detectFramework.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Platform": (()=>Platform),
    "getAmplifyUserAgent": (()=>getAmplifyUserAgent),
    "getAmplifyUserAgentObject": (()=>getAmplifyUserAgentObject),
    "sanitizeAmplifyVersion": (()=>sanitizeAmplifyVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/version.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detectFramework$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detectFramework.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/customUserAgent.mjs [app-client] (ecmascript)");
;
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const BASE_USER_AGENT = `aws-amplify`;
/** Sanitize Amplify version string be removing special character + and character post the special character  */ const sanitizeAmplifyVersion = (amplifyVersion)=>amplifyVersion.replace(/\+.*/, '');
class PlatformBuilder {
    constructor(){
        this.userAgent = `${BASE_USER_AGENT}/${sanitizeAmplifyVersion(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"])}`;
    }
    get framework() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detectFramework$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectFramework"])();
    }
    get isReactNative() {
        return this.framework === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].ReactNative || this.framework === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Framework"].Expo;
    }
    observeFrameworkChanges(fcn) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detectFramework$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeFrameworkChanges"])(fcn);
    }
}
const Platform = new PlatformBuilder();
const getAmplifyUserAgentObject = ({ category, action } = {})=>{
    const userAgent = [
        [
            BASE_USER_AGENT,
            sanitizeAmplifyVersion(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"])
        ]
    ];
    if (category) {
        userAgent.push([
            category,
            action
        ]);
    }
    userAgent.push([
        'framework',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detectFramework$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectFramework"])()
    ]);
    if (category && action) {
        const customState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomUserAgent"])(category, action);
        if (customState) {
            customState.forEach((state)=>{
                userAgent.push(state);
            });
        }
    }
    return userAgent;
};
const getAmplifyUserAgent = (customUserAgentDetails)=>{
    const userAgent = getAmplifyUserAgentObject(customUserAgentDetails);
    const userAgentString = userAgent.map(([agentKey, agentValue])=>agentKey && agentValue ? `${agentKey}/${agentValue}` : agentKey).join(' ');
    return userAgentString;
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "AmplifyUrl": (()=>AmplifyUrl),
    "AmplifyUrlSearchParams": (()=>AmplifyUrlSearchParams)
});
const AmplifyUrl = URL;
const AmplifyUrlSearchParams = URLSearchParams;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/endpoints/partitions.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Default partition for AWS services. This is used when the region is not provided or the region is not recognized.
 *
 * @internal
 */ __turbopack_context__.s({
    "defaultPartition": (()=>defaultPartition),
    "partitionsInfo": (()=>partitionsInfo)
});
const defaultPartition = {
    id: 'aws',
    outputs: {
        dnsSuffix: 'amazonaws.com'
    },
    regionRegex: '^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$',
    regions: [
        'aws-global'
    ]
};
/**
 * This data is adapted from the partition file from AWS SDK shared utilities but remove some contents for bundle size
 * concern. Information removed are `dualStackDnsSuffix`, `supportDualStack`, `supportFIPS`, restricted partitions, and
 * list of regions for each partition other than global regions.
 *
 * * Ref: https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints
 * * Ref: https://github.com/aws/aws-sdk-js-v3/blob/0201baef03c2379f1f6f7150b9d401d4b230d488/packages/util-endpoints/src/lib/aws/partitions.json#L1
 *
 * @internal
 */ const partitionsInfo = {
    partitions: [
        defaultPartition,
        {
            id: 'aws-cn',
            outputs: {
                dnsSuffix: 'amazonaws.com.cn'
            },
            regionRegex: '^cn\\-\\w+\\-\\d+$',
            regions: [
                'aws-cn-global'
            ]
        }
    ]
};
;
 //# sourceMappingURL=partitions.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/endpoints/getDnsSuffix.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDnsSuffix": (()=>getDnsSuffix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$endpoints$2f$partitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/endpoints/partitions.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Get the AWS Services endpoint URL's DNS suffix for a given region. A typical AWS regional service endpoint URL will
 * follow this pattern: {endpointPrefix}.{region}.{dnsSuffix}. For example, the endpoint URL for Cognito Identity in
 * us-east-1 will be cognito-identity.us-east-1.amazonaws.com. Here the DnsSuffix is `amazonaws.com`.
 *
 * @param region
 * @returns The DNS suffix
 *
 * @internal
 */ const getDnsSuffix = (region)=>{
    const { partitions } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$endpoints$2f$partitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partitionsInfo"];
    for (const { regions, outputs, regionRegex } of partitions){
        const regex = new RegExp(regionRegex);
        if (regions.includes(region) || regex.test(region)) {
            return outputs.dnsSuffix;
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$endpoints$2f$partitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPartition"].outputs.dnsSuffix;
};
;
 //# sourceMappingURL=getDnsSuffix.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/isBrowser.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "isBrowser": (()=>isBrowser)
});
const isBrowser = ()=>typeof window !== 'undefined' && typeof window.document !== 'undefined';
;
 //# sourceMappingURL=isBrowser.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/isTokenExpired.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "isTokenExpired": (()=>isTokenExpired)
});
function isTokenExpired({ expiresAt, clockDrift, tolerance = 5000 }) {
    const currentTime = Date.now();
    return currentTime + clockDrift + tolerance > expiresAt;
}
;
 //# sourceMappingURL=isTokenExpired.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/base.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildHttpRpcRequest": (()=>buildHttpRpcRequest),
    "cognitoIdentityTransferHandler": (()=>cognitoIdentityTransferHandler),
    "defaultConfig": (()=>defaultConfig),
    "getSharedHeaders": (()=>getSharedHeaders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$endpoints$2f$getDnsSuffix$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/endpoints/getDnsSuffix.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$handlers$2f$aws$2f$unauthenticated$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/handlers/aws/unauthenticated.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$jitteredBackoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/jitteredBackoff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$defaultRetryDecider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/defaultRetryDecider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$hex$2d$encoding$40$2$2e$0$2e$0$2f$node_modules$2f40$smithy$2f$util$2d$hex$2d$encoding$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-hex-encoding@2.0.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeTransferHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeTransferHandler.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detectFramework$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/detectFramework.mjs [app-client] (ecmascript)");
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
/**
 * The service name used to sign requests if the API requires authentication.
 */ const SERVICE_NAME = 'cognito-identity';
/**
 * The endpoint resolver function that returns the endpoint URL for a given region.
 */ const endpointResolver = ({ region })=>({
        url: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$amplifyUrl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmplifyUrl"](`https://cognito-identity.${region}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$endpoints$2f$getDnsSuffix$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDnsSuffix"])(region)}`)
    });
/**
 * A Cognito Identity-specific middleware that disables caching for all requests.
 */ const disableCacheMiddlewareFactory = ()=>(next)=>async function disableCacheMiddleware(request) {
            request.headers['cache-control'] = 'no-store';
            return next(request);
        };
/**
 * A Cognito Identity-specific transfer handler that does NOT sign requests, and
 * disables caching.
 *
 * @internal
 */ const cognitoIdentityTransferHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeTransferHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeTransferHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$handlers$2f$aws$2f$unauthenticated$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unauthenticatedHandler"], [
    disableCacheMiddlewareFactory
]);
/**
 * @internal
 */ const defaultConfig = {
    service: SERVICE_NAME,
    endpointResolver,
    retryDecider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$defaultRetryDecider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRetryDecider"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJsonError"]),
    computeDelay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$middleware$2f$retry$2f$jitteredBackoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jitteredBackoff"],
    userAgentValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAmplifyUserAgent"])(),
    cache: 'no-store'
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$detectFramework$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeFrameworkChanges"])(()=>{
    defaultConfig.userAgentValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAmplifyUserAgent"])();
});
/**
 * @internal
 */ const getSharedHeaders = (operation)=>({
        'content-type': 'application/x-amz-json-1.1',
        'x-amz-target': `AWSCognitoIdentityService.${operation}`
    });
/**
 * @internal
 */ const buildHttpRpcRequest = ({ url }, headers, body)=>({
        headers,
        url,
        body,
        method: 'POST'
    });
;
 //# sourceMappingURL=base.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/getCredentialsForIdentity.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCredentialsForIdentity": (()=>getCredentialsForIdentity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$hex$2d$encoding$40$2$2e$0$2e$0$2f$node_modules$2f40$smithy$2f$util$2d$hex$2d$encoding$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-hex-encoding@2.0.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$responseInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/responseInfo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/base.mjs [app-client] (ecmascript)");
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
const getCredentialsForIdentitySerializer = (input, endpoint)=>{
    const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSharedHeaders"])('GetCredentialsForIdentity');
    const body = JSON.stringify(input);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHttpRpcRequest"])(endpoint, headers, body);
};
const getCredentialsForIdentityDeserializer = async (response)=>{
    if (response.statusCode >= 300) {
        const error = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJsonError"])(response);
        throw error;
    } else {
        const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJsonBody"])(response);
        return {
            IdentityId: body.IdentityId,
            Credentials: deserializeCredentials(body.Credentials),
            $metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$responseInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMetadata"])(response)
        };
    }
};
const deserializeCredentials = ({ AccessKeyId, SecretKey, SessionToken, Expiration } = {})=>{
    return {
        AccessKeyId,
        SecretKey,
        SessionToken,
        Expiration: Expiration && new Date(Expiration * 1000)
    };
};
/**
 * @internal
 */ const getCredentialsForIdentity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cognitoIdentityTransferHandler"], getCredentialsForIdentitySerializer, getCredentialsForIdentityDeserializer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"]);
;
 //# sourceMappingURL=getCredentialsForIdentity.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/getId.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getId": (()=>getId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$crypto$2b$sha256$2d$js$40$5$2e$2$2e$0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$smithy$2b$util$2d$hex$2d$encoding$40$2$2e$0$2e$0$2f$node_modules$2f40$smithy$2f$util$2d$hex$2d$encoding$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@smithy+util-hex-encoding@2.0.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$responseInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/responseInfo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/awsClients/cognitoIdentity/base.mjs [app-client] (ecmascript)");
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
const getIdSerializer = (input, endpoint)=>{
    const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSharedHeaders"])('GetId');
    const body = JSON.stringify(input);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHttpRpcRequest"])(endpoint, headers, body);
};
const getIdDeserializer = async (response)=>{
    if (response.statusCode >= 300) {
        const error = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJsonError"])(response);
        throw error;
    } else {
        const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$json$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJsonBody"])(response);
        return {
            IdentityId: body.IdentityId,
            $metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$serde$2f$responseInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMetadata"])(response)
        };
    }
};
/**
 * @internal
 */ const getId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$clients$2f$internal$2f$composeServiceApi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeServiceApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cognitoIdentityTransferHandler"], getIdSerializer, getIdDeserializer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$awsClients$2f$cognitoIdentity$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"]);
;
 //# sourceMappingURL=getId.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/bytesToString.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "bytesToString": (()=>bytesToString)
});
function bytesToString(input) {
    return Array.from(input, (byte)=>String.fromCodePoint(byte)).join('');
}
;
 //# sourceMappingURL=bytesToString.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Encoder.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "base64Encoder": (()=>base64Encoder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/globalHelpers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$bytesToString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/bytesToString.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const base64Encoder = {
    /**
     * Convert input to base64-encoded string
     * @param input - string to convert to base64
     * @param options - encoding options that can optionally produce a base64url string
     * @returns base64-encoded string
     */ convert (input, options = {
        urlSafe: false,
        skipPadding: false
    }) {
        const inputStr = typeof input === 'string' ? input : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$convert$2f$base64$2f$bytesToString$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToString"])(input);
        let encodedStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBtoa"])()(inputStr);
        // urlSafe char replacement and skipPadding options conform to the base64url spec
        // https://datatracker.ietf.org/doc/html/rfc4648#section-5
        if (options.urlSafe) {
            encodedStr = encodedStr.replace(/\+/g, '-').replace(/\//g, '_');
        }
        if (options.skipPadding) {
            encodedStr = encodedStr.replace(/=/g, '');
        }
        return encodedStr;
    }
};
;
 //# sourceMappingURL=base64Encoder.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/deviceName/getDeviceName.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Retrieves the device name using the User-Agent Client Hints API if available,
 * falling back to the traditional userAgent string if not.
 *
 * @returns {Promise<string>} A promise that resolves with a string representing the device name.
 *
 * Example Output:
 * navigator.userAgentData:
 *   'macOS 14.2.1 arm macOS Not A(Brand/99.0.0.0;Google Chrome/121.0.6167.160;Chromium/121.0.6167.160'
 * navigator.userAgent:
 *   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0'
 */ __turbopack_context__.s({
    "getDeviceName": (()=>getDeviceName)
});
const getDeviceName = async ()=>{
    const { userAgentData } = navigator;
    if (!userAgentData) return navigator.userAgent;
    const { platform = '', platformVersion = '', model = '', architecture = '', fullVersionList = [] } = await userAgentData.getHighEntropyValues([
        'platform',
        'platformVersion',
        'architecture',
        'model',
        'fullVersionList'
    ]);
    const versionList = fullVersionList.map((v)=>`${v.brand}/${v.version}`).join(';');
    const deviceName = [
        platform,
        platformVersion,
        architecture,
        model,
        platform,
        versionList
    ].filter((value)=>value).join(' ');
    return deviceName || navigator.userAgent;
};
;
 //# sourceMappingURL=getDeviceName.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/cryptoSecureRandomInt.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cryptoSecureRandomInt": (()=>cryptoSecureRandomInt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/globalHelpers/index.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/*
 * Cryptographically secure pseudorandom number generator
 * As Math.random() is cryptographically not safe to use
 */ function cryptoSecureRandomInt() {
    const crypto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrypto"])();
    const randomResult = crypto.getRandomValues(new Uint32Array(1))[0];
    return randomResult;
}
;
 //# sourceMappingURL=cryptoSecureRandomInt.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/WordArray.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WordArray": (()=>WordArray)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$cryptoSecureRandomInt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/cryptoSecureRandomInt.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Hex encoding strategy.
 * Converts a word array to a hex string.
 * @param {WordArray} wordArray The word array.
 * @return {string} The hex string.
 * @static
 */ function hexStringify(wordArray) {
    // Shortcuts
    const { words } = wordArray;
    const { sigBytes } = wordArray;
    // Convert
    const hexChars = [];
    for(let i = 0; i < sigBytes; i++){
        const bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
        hexChars.push((bite >>> 4).toString(16));
        hexChars.push((bite & 0x0f).toString(16));
    }
    return hexChars.join('');
}
class WordArray {
    constructor(words, sigBytes){
        this.words = [];
        let Words = words;
        Words = this.words = Words || [];
        if (sigBytes !== undefined) {
            this.sigBytes = sigBytes;
        } else {
            this.sigBytes = Words.length * 4;
        }
    }
    random(nBytes) {
        const words = [];
        for(let i = 0; i < nBytes; i += 4){
            words.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$cryptoSecureRandomInt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cryptoSecureRandomInt"])());
        }
        return new WordArray(words, nBytes);
    }
    toString() {
        return hexStringify(this);
    }
}
;
 //# sourceMappingURL=WordArray.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/internal/fetchAuthSession.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "fetchAuthSession": (()=>fetchAuthSession)
});
const fetchAuthSession = (amplify, options)=>{
    return amplify.Auth.fetchAuthSession(options);
};
;
 //# sourceMappingURL=fetchAuthSession.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/urlSafeEncode.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "urlSafeEncode": (()=>urlSafeEncode)
});
function urlSafeEncode(str) {
    return str.split('').map((char)=>char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}
;
 //# sourceMappingURL=urlSafeEncode.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/urlSafeDecode.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s({
    "urlSafeDecode": (()=>urlSafeDecode)
});
function urlSafeDecode(hex) {
    const matchArr = hex.match(/.{2}/g) || [];
    return matchArr.map((char)=>String.fromCharCode(parseInt(char, 16))).join('');
}
;
 //# sourceMappingURL=urlSafeDecode.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/generateRandomString.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateRandomString": (()=>generateRandomString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/utils/globalHelpers/index.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const generateRandomString = (length)=>{
    const STATE_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const result = [];
    const randomNums = new Uint8Array(length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$utils$2f$globalHelpers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrypto"])().getRandomValues(randomNums);
    for (const num of randomNums){
        result.push(STATE_CHARSET[num % STATE_CHARSET.length]);
    }
    return result.join('');
};
;
 //# sourceMappingURL=generateRandomString.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/clearCredentials.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearCredentials": (()=>clearCredentials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function clearCredentials() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Amplify"].Auth.clearCredentials();
}
;
 //# sourceMappingURL=clearCredentials.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchAuthSession": (()=>fetchAuthSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$internal$2f$fetchAuthSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/singleton/apis/internal/fetchAuthSession.mjs [app-client] (ecmascript)");
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Fetch the auth session including the tokens and credentials if they are available. By default it
 * does not refresh the auth tokens or credentials if they are loaded in storage already. You can force a refresh
 * with `{ forceRefresh: true }` input.
 *
 * @param options - Options configuring the fetch behavior.
 * @throws {@link AuthError} - Throws error when session information cannot be refreshed.
 * @returns Promise<AuthSession>
 */ const fetchAuthSession = (options)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$internal$2f$fetchAuthSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAuthSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$Amplify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Amplify"], options);
};
;
 //# sourceMappingURL=fetchAuthSession.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/I18n/I18n.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "I18n": (()=>I18n$1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-client] (ecmascript)");
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleLogger"]('I18n');
/**
 * Language translation utility.
 */ let I18n$1 = class I18n {
    constructor(){
        /**
         * @private
         */ this._options = null;
        /**
         * @private
         */ this._lang = null;
        /**
         * @private
         */ this._dict = {};
    }
    /**
     * Sets the default language from the configuration when required.
     */ setDefaultLanguage() {
        // Default to window language if not set in instance
        if (!this._lang && typeof window !== 'undefined' && window && window.navigator) {
            this._lang = window.navigator.language;
        }
        logger.debug(this._lang);
    }
    /**
     * @method
     * Explicitly setting language
     * @param {String} lang
     */ setLanguage(lang) {
        this._lang = lang;
    }
    /**
     * @method
     * Get value
     * @param {String} key
     * @param {String} defVal - Default value
     */ get(key, defVal = undefined) {
        this.setDefaultLanguage();
        if (!this._lang) {
            return typeof defVal !== 'undefined' ? defVal : key;
        }
        const lang = this._lang;
        let val = this.getByLanguage(key, lang);
        if (val) {
            return val;
        }
        if (lang.indexOf('-') > 0) {
            val = this.getByLanguage(key, lang.split('-')[0]);
        }
        if (val) {
            return val;
        }
        return typeof defVal !== 'undefined' ? defVal : key;
    }
    /**
     * @method
     * Get value according to specified language
     * @param {String} key
     * @param {String} language - Specified langurage to be used
     * @param {String} defVal - Default value
     */ getByLanguage(key, language, defVal = null) {
        if (!language) {
            return defVal;
        }
        const langDict = this._dict[language];
        if (!langDict) {
            return defVal;
        }
        return langDict[key];
    }
    /**
     * @method
     * Add vocabularies for one language
     * @param {String} language - Language of the dictionary
     * @param {Object} vocabularies - Object that has key-value as dictionary entry
     */ putVocabulariesForLanguage(language, vocabularies) {
        let langDict = this._dict[language];
        if (!langDict) {
            langDict = this._dict[language] = {};
        }
        this._dict[language] = {
            ...langDict,
            ...vocabularies
        };
    }
    /**
     * @method
     * Add vocabularies for one language
     * @param {Object} vocabularies - Object that has language as key,
     *                                vocabularies of each language as value
     */ putVocabularies(vocabularies) {
        Object.keys(vocabularies).forEach((key)=>{
            this.putVocabulariesForLanguage(key, vocabularies[key]);
        });
    }
};
;
 //# sourceMappingURL=I18n.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/I18n/errorHelpers.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "I18nErrorCode": (()=>I18nErrorCode),
    "assert": (()=>assert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$createAssertionFunction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs [app-client] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var I18nErrorCode;
(function(I18nErrorCode) {
    I18nErrorCode["NotConfigured"] = "NotConfigured";
})(I18nErrorCode || (I18nErrorCode = {}));
const i18nErrorMap = {
    [I18nErrorCode.NotConfigured]: {
        message: 'i18n is not configured.'
    }
};
const assert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$errors$2f$createAssertionFunction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssertionFunction"])(i18nErrorMap);
;
 //# sourceMappingURL=errorHelpers.mjs.map
}}),
"[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/I18n/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "I18n": (()=>I18n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$I18n$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/I18n/I18n.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/I18n/errorHelpers.mjs [app-client] (ecmascript)");
;
;
;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleLogger"]('I18n');
let _config = {
    language: null
};
let _i18n = null;
/**
 * Export I18n APIs
 */ class I18n {
    /**
     * @static
     * @method
     * Configure I18n part
     * @param {Object} config - Configuration of the I18n
     */ static configure(config) {
        logger.debug('configure I18n');
        if (!config) {
            return _config;
        }
        _config = Object.assign({}, _config, config.I18n || config);
        I18n.createInstance();
        return _config;
    }
    static getModuleName() {
        return 'I18n';
    }
    /**
     * @static
     * @method
     * Create an instance of I18n for the library
     */ static createInstance() {
        logger.debug('create I18n instance');
        if (_i18n) {
            return;
        }
        _i18n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$I18n$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18n"]();
    }
    /**
     * @static @method
     * Explicitly setting language
     * @param {String} lang
     */ static setLanguage(lang) {
        I18n.checkConfig();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!!_i18n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nErrorCode"].NotConfigured);
        _i18n.setLanguage(lang);
    }
    /**
     * @static @method
     * Get value
     * @param {String} key
     * @param {String} defVal - Default value
     */ static get(key, defVal) {
        if (!I18n.checkConfig()) {
            return typeof defVal === 'undefined' ? key : defVal;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!!_i18n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nErrorCode"].NotConfigured);
        return _i18n.get(key, defVal);
    }
    /**
     * @static
     * @method
     * Add vocabularies for one language
     * @param {String} language - Language of the dictionary
     * @param {Object} vocabularies - Object that has key-value as dictionary entry
     */ static putVocabulariesForLanguage(language, vocabularies) {
        I18n.checkConfig();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!!_i18n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nErrorCode"].NotConfigured);
        _i18n.putVocabulariesForLanguage(language, vocabularies);
    }
    /**
     * @static
     * @method
     * Add vocabularies for one language
     * @param {Object} vocabularies - Object that has language as key,
     *                                vocabularies of each language as value
     */ static putVocabularies(vocabularies) {
        I18n.checkConfig();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!!_i18n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$errorHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nErrorCode"].NotConfigured);
        _i18n.putVocabularies(vocabularies);
    }
    static checkConfig() {
        if (!_i18n) {
            I18n.createInstance();
        }
        return true;
    }
}
// Create an instance of I18n in the static class
I18n.createInstance();
;
 //# sourceMappingURL=index.mjs.map
}}),
}]);

//# sourceMappingURL=67279_%40aws-amplify_core_dist_esm_2c4bed98._.js.map