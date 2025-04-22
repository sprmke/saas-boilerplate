module.exports = {

"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @deprecated - will be removed in a future major version
 *
 * Some libraries may not follow Node ES module spec and could be loaded as CommonJS modules,
 * To ensure the interoperability between ESM and CJS, modules from those libraries have to be loaded via namespace import
 * And sanitized by the function below because unlike ESM namespace, CJS namespace set `module.exports` object on the `default` key
 * https://nodejs.org/api/esm.html#interoperability-with-commonjs
 */ __turbopack_context__.s({
    "areEmptyArrays": (()=>areEmptyArrays),
    "areEmptyObjects": (()=>areEmptyObjects),
    "capitalize": (()=>capitalize),
    "classNameModifier": (()=>classNameModifier),
    "classNameModifierByFlag": (()=>classNameModifierByFlag),
    "cloneDeep": (()=>cloneDeep),
    "groupLog": (()=>groupLog),
    "has": (()=>has),
    "isEmpty": (()=>isEmpty),
    "isEmptyObject": (()=>isEmptyObject),
    "isFunction": (()=>isFunction),
    "isMap": (()=>isMap),
    "isNil": (()=>isNil),
    "isObject": (()=>isObject),
    "isSet": (()=>isSet),
    "isString": (()=>isString),
    "isUndefined": (()=>isUndefined),
    "noop": (()=>noop),
    "sanitizeNamespaceImport": (()=>sanitizeNamespaceImport),
    "splitObject": (()=>splitObject),
    "templateJoin": (()=>templateJoin)
});
const sanitizeNamespaceImport = (namespaceModule)=>{
    const sanitizedNamespaceModule = {
        default: undefined,
        ...namespaceModule
    };
    return sanitizedNamespaceModule.default ?? sanitizedNamespaceModule;
};
/**
 * Checks if `value` is an Object (non-primitive, non-array, non-function)
 * Will return false for Arrays and functions
 *
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is an object, `false` otherwise
 */ function isObject(value) {
    return value != null && !Array.isArray(value) && typeof value === 'object';
}
/**
 * Checks if `value` is a string primitive or object
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is a string, `false` otherwise
 */ function isString(value) {
    return typeof value === 'string' || typeof value === 'object' && Object.prototype.toString.call(value) === '[object String]';
}
/**
 * Checks if `value` is a Map
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is a Map, `false` otherwise
 */ function isMap(value) {
    return isObject(value) && Object.prototype.toString.call(value) === '[object Map]';
}
/**
 * Checks if `value` is a Set
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is a Set, `false` otherwise
 */ function isSet(value) {
    return isObject(value) && Object.prototype.toString.call(value) === '[object Set]';
}
/**
 * Checks if `value` is undefined
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is undefined, `false` otherwise
 */ function isUndefined(value) {
    return value === undefined;
}
/**
 * Checks if `value` is nullish
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is nullish, `false` otherwise
 */ function isNil(value) {
    return value == null;
}
/**
 * Checks if `value` is empty
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is empty, `false` otherwise
 */ function isEmpty(value) {
    if (value === null || value === undefined) return true;
    if (isObject(value) && (isMap(value) || isSet(value))) {
        return !value.size;
    }
    if (isObject(value) && (isString(value) || Array.isArray(value))) {
        return !value.length;
    }
    for(const key in value){
        if (has(value, key)) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if `value` is an empty array
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is a empty, `false` otherwise
 */ function isEmptyArray(value) {
    return Array.isArray(value) && isEmpty(value);
}
/**
 * Checks if all members of the `values` param are empty arrays
 *
 * @param {unknown} value The values to check
 * @returns {boolean} Returns `true` if all members of `values` are empty, `false` otherwise
 */ function areEmptyArrays(...values) {
    return values.every(isEmptyArray);
}
/**
 * Checks if `value` is an empty object
 *
 * @param {unknown} value The value to check
 * @returns {boolean} Returns `true` if `value` is empty, `false` otherwise
 */ function isEmptyObject(value) {
    return isObject(value) && isEmpty(value);
}
/**
 * Checks if all members of the `values` param are empty objects
 *
 * @param {unknown} values The values to check
 * @returns {boolean} Returns `true` if all members of the `values` param are empty, `false` otherwise
 */ function areEmptyObjects(...values) {
    return values.every(isEmptyObject);
}
/**
 * Capitalizes `value` and its return type
 *
 * @param {string} value string to capitalize
 * @returns {string} capitalized string
 */ function capitalize(value) {
    return isString(value) ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}
/**
 * Checks if `key` is a direct property of `value`
 *
 * @param {unknown} value `object` potentially containing property
 * @param {string} key property key
 * @returns whether `key` param is a property of the `obj` param
 */ function has(value, key) {
    return value != null && Object.prototype.hasOwnProperty.call(value, key);
}
/**
 * Checks if `value` is a function
 *
 * @param {unknown} value param to check
 * @returns {boolean} whether `value` is a function
 */ function isFunction(value) {
    return typeof value === 'function';
}
/**
 * This helper function creates modifier class names that are used for our flat BEM styling
 * it takes in a base and modifier and returns the modified class if a modifier was passed in and null otherwise
 * @param base The base class of the output
 * @param modifier The modifier to add onto the base
 * @returns the modified class name or empty string
 */ const classNameModifier = (base, modifier)=>{
    return modifier ? `${base}--${modifier}` : '';
};
/**
 * This helper function creates modified class names that are used for our flat BEM styling
 * it takes in a base, modifier, and flag and returns the modified class name if the flag is true and null if the flag is false
 * @param base
 * @param modifier
 * @param flag
 * @returns the modified class name or empty string
 */ const classNameModifierByFlag = (base, modifier, flag)=>{
    return flag ? `${base}--${modifier}` : '';
};
/**
 * Similar to `Array.join`, with an optional callback/template param
 * for formatting returned string values
 *
 * @param {string[]} values string array
 * @param {(value: string) => string} template callback format param
 * @returns formatted string array
 */ function templateJoin(values, template) {
    return values.reduce((acc, curr)=>`${acc}${isString(curr) ? template(curr) : ''}`, '');
}
/**
 * A function that does nothing
 *
 * @param {any[]} _ accepts any parameters
 * @returns nothing
 */ function noop(..._) {
    return;
}
/**
 * @param {string} groupName name of group
 * @param events string values related to group
 */ function groupLog(groupName, ...events) {
    const hasEvents = !!events?.length;
    if (hasEvents) {
        // eslint-disable-next-line no-console
        console.groupCollapsed(groupName);
        events?.forEach((event)=>{
            // eslint-disable-next-line no-console
            console.log(event);
        });
        // eslint-disable-next-line no-console
        console.groupEnd();
    } else {
        // eslint-disable-next-line no-console
        console.log(groupName);
    }
}
/**
 * Splits an object into 2 objects based on a predicate
 *
 * @param {object} obj an object to split into two
 * @param {function} predicate function to determin where an element should go
 * @returns
 */ function splitObject(obj, predicate) {
    const left = {};
    const right = {};
    Object.entries(obj).forEach(([key, value])=>{
        if (predicate(key)) {
            left[key] = value;
        } else {
            right[key] = value;
        }
    });
    return [
        left,
        right
    ];
}
const cloneDeep = (obj)=>{
    if (obj === null || obj === undefined || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Array) {
        return obj.reduce((arr, item, i)=>{
            arr[i] = cloneDeep(item);
            return arr;
        }, []);
    }
    if (obj instanceof Object) {
        return Object.keys(obj || {}).reduce((cpObj, key)=>{
            cpObj[key] = cloneDeep(obj[key]);
            return cpObj;
        }, {});
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/setUserAgent/constants.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ACCOUNT_SETTINGS_INPUT_BASE": (()=>ACCOUNT_SETTINGS_INPUT_BASE),
    "AI_INPUT_BASE": (()=>AI_INPUT_BASE),
    "AUTHENTICATOR_INPUT_BASE": (()=>AUTHENTICATOR_INPUT_BASE),
    "FILE_UPLOADER_BASE_INPUT": (()=>FILE_UPLOADER_BASE_INPUT),
    "IN_APP_MESSAGING_INPUT_BASE": (()=>IN_APP_MESSAGING_INPUT_BASE),
    "LOCATION_SEARCH_INPUT_BASE": (()=>LOCATION_SEARCH_INPUT_BASE),
    "MAP_VIEW_INPUT_BASE": (()=>MAP_VIEW_INPUT_BASE),
    "STORAGE_BROWSER_INPUT_BASE": (()=>STORAGE_BROWSER_INPUT_BASE),
    "STORAGE_MANAGER_INPUT_BASE": (()=>STORAGE_MANAGER_INPUT_BASE)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs [app-ssr] (ecmascript)");
;
const AI_INPUT_BASE = {
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].AI,
    apis: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiAction"].CreateConversation,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiAction"].DeleteConversation,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiAction"].ListConversations,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiAction"].UpdateConversation,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiAction"].OnMessage,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiAction"].SendMessage,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiAction"].Generation
    ]
};
const ACCOUNT_SETTINGS_INPUT_BASE = {
    apis: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].DeleteUser,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].UpdatePassword
    ],
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].Auth
};
const AUTHENTICATOR_INPUT_BASE = {
    apis: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignUp,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignUp,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ResendSignUpCode,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignIn,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmSignIn,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].FetchUserAttributes,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignOut,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ResetPassword,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].ConfirmResetPassword,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAction"].SignInWithRedirect
    ],
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].Auth
};
const FILE_UPLOADER_BASE_INPUT = {
    apis: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].UploadData
    ],
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].Storage
};
const IN_APP_MESSAGING_INPUT_BASE = {
    apis: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InAppMessagingAction"].NotifyMessageInteraction
    ],
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].InAppMessaging
};
const LOCATION_SEARCH_INPUT_BASE = {
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].Geo,
    apis: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoAction"].SearchByText,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoAction"].SearchForSuggestions,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoAction"].SearchByPlaceId
    ]
};
const MAP_VIEW_INPUT_BASE = {
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].Geo,
    apis: []
};
const STORAGE_MANAGER_INPUT_BASE = {
    apis: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].UploadData
    ],
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].Storage
};
const STORAGE_BROWSER_INPUT_BASE = {
    apis: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].UploadData,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].Copy,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].GetUrl,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].List,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].Remove,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].GetDataAccess,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageAction"].ListCallerAccessGrants
    ],
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$types$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Category"].Storage
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/setUserAgent/setUserAgent.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "setUserAgent": (()=>setUserAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Platform/customUserAgent.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/setUserAgent/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
;
;
;
/**
 * @example
 * ```ts
 * // set user agent options
 * const clear = setUserAgent(input);
 *
 * // clear user agent options
 * clear();
 * ```
 */ const setUserAgent = ({ componentName, packageName, version })=>{
    const packageData = [
        `ui-${packageName}`,
        version
    ];
    switch(componentName){
        case 'AIConversation':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AI_INPUT_BASE"],
                    additionalDetails: [
                        [
                            componentName
                        ],
                        packageData
                    ]
                });
                break;
            }
        case 'Authenticator':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTHENTICATOR_INPUT_BASE"],
                    additionalDetails: [
                        [
                            componentName
                        ],
                        packageData
                    ]
                });
                break;
            }
        case 'ChangePassword':
        case 'DeleteUser':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACCOUNT_SETTINGS_INPUT_BASE"],
                    additionalDetails: [
                        [
                            'AccountSettings'
                        ],
                        packageData
                    ]
                });
                break;
            }
        case 'FileUploader':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FILE_UPLOADER_BASE_INPUT"],
                    additionalDetails: [
                        [
                            componentName
                        ],
                        packageData
                    ]
                });
                break;
            }
        case 'InAppMessaging':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IN_APP_MESSAGING_INPUT_BASE"],
                    additionalDetails: [
                        [
                            componentName
                        ],
                        packageData
                    ]
                });
                break;
            }
        case 'LocationSearch':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCATION_SEARCH_INPUT_BASE"],
                    additionalDetails: [
                        [
                            componentName
                        ],
                        packageData
                    ]
                });
                break;
            }
        case 'MapView':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP_VIEW_INPUT_BASE"],
                    additionalDetails: [
                        [
                            componentName
                        ],
                        packageData
                    ]
                });
                break;
            }
        case 'StorageManager':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_MANAGER_INPUT_BASE"],
                    additionalDetails: [
                        [
                            componentName
                        ],
                        packageData
                    ]
                });
                break;
            }
        case 'StorageBrowser':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Platform$2f$customUserAgent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCustomUserAgent"])({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$setUserAgent$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_BROWSER_INPUT_BASE"],
                    additionalDetails: [
                        [
                            componentName
                        ],
                        packageData
                    ]
                });
                break;
            }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/country-dial-codes.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "countryDialCodes": (()=>countryDialCodes)
});
const countryDialCodes = [
    '+1',
    '+7',
    '+20',
    '+27',
    '+30',
    '+31',
    '+32',
    '+33',
    '+34',
    '+36',
    '+39',
    '+40',
    '+41',
    '+43',
    '+44',
    '+45',
    '+46',
    '+47',
    '+48',
    '+49',
    '+51',
    '+52',
    '+53',
    '+54',
    '+55',
    '+56',
    '+57',
    '+58',
    '+60',
    '+61',
    '+62',
    '+63',
    '+64',
    '+65',
    '+66',
    '+81',
    '+82',
    '+84',
    '+86',
    '+90',
    '+91',
    '+92',
    '+93',
    '+94',
    '+95',
    '+98',
    '+212',
    '+213',
    '+216',
    '+218',
    '+220',
    '+221',
    '+222',
    '+223',
    '+224',
    '+225',
    '+226',
    '+227',
    '+228',
    '+229',
    '+230',
    '+231',
    '+232',
    '+233',
    '+234',
    '+235',
    '+236',
    '+237',
    '+238',
    '+239',
    '+240',
    '+241',
    '+242',
    '+243',
    '+244',
    '+245',
    '+246',
    '+248',
    '+249',
    '+250',
    '+251',
    '+252',
    '+253',
    '+254',
    '+255',
    '+256',
    '+257',
    '+258',
    '+260',
    '+261',
    '+262',
    '+263',
    '+264',
    '+265',
    '+266',
    '+267',
    '+268',
    '+269',
    '+290',
    '+291',
    '+297',
    '+298',
    '+299',
    '+345',
    '+350',
    '+351',
    '+352',
    '+353',
    '+354',
    '+355',
    '+356',
    '+357',
    '+358',
    '+359',
    '+370',
    '+371',
    '+372',
    '+373',
    '+374',
    '+375',
    '+376',
    '+377',
    '+378',
    '+379',
    '+380',
    '+381',
    '+382',
    '+385',
    '+386',
    '+387',
    '+389',
    '+420',
    '+421',
    '+423',
    '+500',
    '+501',
    '+502',
    '+503',
    '+504',
    '+505',
    '+506',
    '+507',
    '+508',
    '+509',
    '+537',
    '+590',
    '+591',
    '+593',
    '+594',
    '+595',
    '+596',
    '+597',
    '+598',
    '+599',
    '+670',
    '+672',
    '+673',
    '+674',
    '+675',
    '+676',
    '+677',
    '+678',
    '+679',
    '+680',
    '+681',
    '+682',
    '+683',
    '+685',
    '+686',
    '+687',
    '+688',
    '+689',
    '+690',
    '+691',
    '+692',
    '+850',
    '+852',
    '+853',
    '+855',
    '+856',
    '+872',
    '+880',
    '+886',
    '+960',
    '+961',
    '+962',
    '+963',
    '+964',
    '+965',
    '+966',
    '+967',
    '+968',
    '+970',
    '+971',
    '+972',
    '+973',
    '+974',
    '+975',
    '+976',
    '+977',
    '+992',
    '+993',
    '+994',
    '+995',
    '+996',
    '+998'
];
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/constants.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ALLOWED_SPECIAL_CHARACTERS": (()=>ALLOWED_SPECIAL_CHARACTERS),
    "NAVIGABLE_ROUTE_EVENT": (()=>NAVIGABLE_ROUTE_EVENT),
    "defaultFormFieldOptions": (()=>defaultFormFieldOptions),
    "emailRegex": (()=>emailRegex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$country$2d$dial$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/country-dial-codes.mjs [app-ssr] (ecmascript)");
;
;
/**
 * This file contains helpers related to forms and input attributes.
 */ const defaultFormFieldOptions = {
    birthdate: {
        label: 'Birthdate',
        placeholder: 'Enter your Birthdate',
        type: 'date',
        autocomplete: 'bday',
        isRequired: true
    },
    confirmation_code: {
        label: 'Confirmation Code',
        placeholder: 'Enter your Confirmation Code',
        type: 'text',
        autocomplete: 'one-time-code',
        isRequired: true
    },
    confirm_password: {
        label: 'Confirm Password',
        placeholder: 'Please confirm your Password',
        type: 'password',
        autocomplete: 'new-password',
        isRequired: true
    },
    email: {
        label: 'Email',
        placeholder: 'Enter your Email',
        type: 'email',
        autocomplete: 'username',
        isRequired: true
    },
    family_name: {
        label: 'Family Name',
        placeholder: 'Enter your Family Name',
        type: 'text',
        autocomplete: 'family-name',
        isRequired: true
    },
    given_name: {
        label: 'Given Name',
        placeholder: 'Enter your Given Name',
        type: 'text',
        autocomplete: 'given-name',
        isRequired: true
    },
    middle_name: {
        label: 'Middle Name',
        placeholder: 'Enter your Middle Name',
        type: 'text',
        autocomplete: 'additional-name',
        isRequired: true
    },
    name: {
        label: 'Name',
        placeholder: 'Enter your Name',
        type: 'text',
        autocomplete: 'name',
        isRequired: true
    },
    nickname: {
        label: 'Nickname',
        placeholder: 'Enter your Nickname',
        type: 'text',
        autocomplete: 'tel',
        isRequired: true
    },
    password: {
        label: 'Password',
        placeholder: 'Enter your Password',
        type: 'password',
        autocomplete: 'new-password',
        isRequired: true
    },
    phone_number: {
        label: 'Phone Number',
        placeholder: 'Enter your Phone Number',
        type: 'tel',
        autocomplete: 'tel',
        dialCode: '+1',
        dialCodeList: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$country$2d$dial$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countryDialCodes"],
        isRequired: true
    },
    preferred_username: {
        label: 'Preferred Username',
        placeholder: 'Enter your Preferred Username',
        type: 'text',
        isRequired: true
    },
    profile: {
        label: 'Profile',
        placeholder: 'Add your Profile',
        type: 'url',
        autocomplete: 'url',
        isRequired: true
    },
    website: {
        label: 'Website',
        placeholder: 'Add your Website',
        type: 'url',
        autocomplete: 'url',
        isRequired: true
    },
    username: {
        label: 'Username',
        placeholder: 'Enter your Username',
        type: 'text',
        autocomplete: 'username',
        isRequired: true
    }
};
/**
 * List of special characters that Cognito allows.
 *
 * Adapted from https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html
 */ // prettier-ignore
const ALLOWED_SPECIAL_CHARACTERS = [
    '^',
    '$',
    '*',
    '.',
    '[',
    ']',
    '{',
    '}',
    '(',
    ')',
    '?',
    '"',
    '!',
    '@',
    '#',
    '%',
    '&',
    '/',
    '\\',
    ',',
    '>',
    '<',
    "'",
    ':',
    ';',
    '|',
    '_',
    '~',
    '`',
    '=',
    '+',
    '-',
    ' '
];
/**
 * Email validation regex
 *
 * source: HTML5 spec https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
 */ const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/**
+ * map navigable route keys to auth event names
+ */ const NAVIGABLE_ROUTE_EVENT = {
    forgotPassword: 'FORGOT_PASSWORD',
    signIn: 'SIGN_IN',
    signUp: 'SIGN_UP'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/utils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "censorAllButFirstAndLast": (()=>censorAllButFirstAndLast),
    "censorContactMethod": (()=>censorContactMethod),
    "censorEmail": (()=>censorEmail),
    "censorPhoneNumber": (()=>censorPhoneNumber),
    "getTotpCodeURL": (()=>getTotpCodeURL),
    "hasSpecialChars": (()=>hasSpecialChars),
    "isValidEmail": (()=>isValidEmail),
    "trimValues": (()=>trimValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/constants.mjs [app-ssr] (ecmascript)");
;
// replaces all characters in a string with '*', except for the first and last char
const censorAllButFirstAndLast = (value)=>{
    const split = value.trim().split('');
    for(let i = 0; i < split.length; i++){
        if (i > 0 && i < split.length - 1) {
            split[i] = '*';
        }
    }
    return split.join('');
};
// censors all but the last four characters of a phone number
const censorPhoneNumber = (val)=>{
    if (val.length < 4) {
        return val;
    }
    const split = val.split('');
    for(let i = 0; i < split.length - 4; i++){
        split[i] = '*';
    }
    return split.join('');
};
// censors all but the first and last of the name of an email and keeps domain
const censorEmail = (val)=>{
    const splitEmail = val.split('@');
    const censoredName = censorAllButFirstAndLast(splitEmail[0]);
    return `${censoredName}@${splitEmail[1]}`;
};
// based on the ContactMethod type, returns a censored contact value
const censorContactMethod = (type, value)=>{
    return type === 'Phone Number' ? censorPhoneNumber(value) : censorEmail(value);
};
const hasSpecialChars = (password)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALLOWED_SPECIAL_CHARACTERS"].some((char)=>password.includes(char));
const getTotpCodeURL = (issuer, username, secret)=>encodeURI(`otpauth://totp/${issuer}:${username}?secret=${secret}&issuer=${issuer}`);
function trimValues(values, ...ignored) {
    return Object.entries(values).reduce((acc, [name, value])=>({
            ...acc,
            [name]: ignored.includes(name) ? value : value?.trim()
        }), {});
}
const isValidEmail = (value)=>{
    if (!value) return false;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailRegex"].test(value);
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/utils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSignUpInput": (()=>getSignUpInput),
    "getUserAttributes": (()=>getUserAttributes),
    "getUsernameSignUp": (()=>getUsernameSignUp),
    "sanitizePhoneNumber": (()=>sanitizePhoneNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pickBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
// default `autoSignIn` flag is `true`
const DEFAULT_AUTO_SIGN_IN = true;
const EMPTY_STRING = '';
const sanitizePhoneNumber = (dialCode, phoneNumber)=>`${dialCode}${phoneNumber}`.replace(/[^A-Z0-9+]/gi, '');
const selectUserAttributes = (_, key)=>{
    // Allowlist of Cognito User Pool Attributes (from OpenID Connect specification)
    // See: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html
    switch(key){
        case 'address':
        case 'birthdate':
        case 'email':
        case 'family_name':
        case 'gender':
        case 'given_name':
        case 'locale':
        case 'middle_name':
        case 'name':
        case 'nickname':
        case 'phone_number':
        case 'picture':
        case 'preferred_username':
        case 'profile':
        case 'updated_at':
        case 'website':
        case 'zoneinfo':
            return true;
        // Otherwise, it's a custom attribute
        default:
            return key.startsWith('custom:');
    }
};
const getUserAttributes = (formValues)=>{
    const { phone_number, ...userAttributes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pickBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formValues, selectUserAttributes);
    // only include `phone_number` attribute in `userAttributes` if it has a value
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(phone_number) && phone_number !== EMPTY_STRING) {
        const { country_code } = formValues;
        return {
            ...userAttributes,
            phone_number: sanitizePhoneNumber(country_code, phone_number)
        };
    }
    return userAttributes;
};
const getSignUpInput = (username, formValues, loginMechanism)=>{
    const { password, ...values } = formValues;
    const attributes = getUserAttributes(values);
    const options = {
        autoSignIn: DEFAULT_AUTO_SIGN_IN,
        userAttributes: {
            // use `username` value for `phone_number`
            ...loginMechanism === 'phone_number' ? {
                ...attributes,
                phone_number: username
            } : attributes
        }
    };
    return {
        username,
        password,
        options
    };
};
const getUsernameSignUp = ({ formValues, loginMechanisms })=>{
    const loginMechanism = loginMechanisms[0];
    if (loginMechanism === 'phone_number') {
        const { country_code, phone_number } = formValues;
        return sanitizePhoneNumber(country_code, phone_number);
    }
    return formValues[loginMechanism];
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actions.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ACTIONS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__actions$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/actions.js [app-ssr] (ecmascript) <export * as actions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const { assign } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__actions$3e$__["actions"];
const clearActorDoneData = assign({
    actorDoneData: undefined
});
const clearChallengeName = assign({
    challengeName: undefined
});
const clearMissingAttributes = assign({
    missingAttributes: undefined
});
const clearError = assign({
    remoteError: undefined
});
const clearFormValues = assign({
    formValues: {}
});
const clearTouched = assign({
    touched: {}
});
const clearUser = assign({
    user: undefined
});
const clearValidationError = assign({
    validationError: {}
});
/**
 * "set" actions
 */ const setTotpSecretCode = assign({
    totpSecretCode: (_, { data })=>{
        const { sharedSecret } = data.nextStep?.totpSetupDetails ?? {};
        return sharedSecret;
    }
});
const setAllowedMfaTypes = assign({
    allowedMfaTypes: (_, { data })=>{
        return data.nextStep?.allowedMFATypes;
    }
});
const setSignInStep = assign({
    step: 'SIGN_IN'
});
const setShouldVerifyUserAttributeStep = assign({
    step: 'SHOULD_CONFIRM_USER_ATTRIBUTE'
});
const setConfirmAttributeCompleteStep = assign({
    step: 'CONFIRM_ATTRIBUTE_COMPLETE'
});
// map v6 `signInStep` to v5 `challengeName`
const setChallengeName = assign({
    challengeName: (_, { data })=>{
        const { signInStep } = data.nextStep;
        switch(signInStep){
            case 'CONFIRM_SIGN_IN_WITH_SMS_CODE':
                return 'SMS_MFA';
            case 'CONFIRM_SIGN_IN_WITH_TOTP_CODE':
                return 'SOFTWARE_TOKEN_MFA';
            case 'CONFIRM_SIGN_IN_WITH_EMAIL_CODE':
                return 'EMAIL_OTP';
            case 'CONTINUE_SIGN_IN_WITH_MFA_SETUP_SELECTION':
            case 'CONTINUE_SIGN_IN_WITH_EMAIL_SETUP':
            case 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP':
                return 'MFA_SETUP';
            case 'CONTINUE_SIGN_IN_WITH_MFA_SELECTION':
                return 'SELECT_MFA_TYPE';
            default:
                return undefined;
        }
    }
});
const setUsernameForgotPassword = assign({
    username: ({ formValues, loginMechanisms })=>{
        const loginMechanism = loginMechanisms[0];
        const { username, country_code } = formValues;
        if (loginMechanism === 'phone_number') {
            // forgot password `formValues` uses `username` for base phone number value
            // prefix `country_code` for full `username`
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizePhoneNumber"])(country_code, username);
        }
        // default username field for loginMechanism === 'email' is "username" for SignIn
        return username;
    }
});
const setUsernameSignUp = assign({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsernameSignUp"]
});
const setUsernameSignIn = assign({
    username: ({ formValues, loginMechanisms })=>{
        const loginMechanism = loginMechanisms[0];
        const { username, country_code } = formValues;
        if (loginMechanism === 'phone_number') {
            // sign in `formValues` uses `username` for base phone number value
            // prefix `country_code` for full `username`
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizePhoneNumber"])(country_code, username);
        }
        // return `email` and `username`
        return username;
    }
});
const setNextSignInStep = assign({
    step: (_, { data })=>data.nextStep.signInStep === 'DONE' ? 'SIGN_IN_COMPLETE' : data.nextStep.signInStep
});
const setNextSignUpStep = assign({
    step: (_, { data })=>data.nextStep.signUpStep === 'DONE' ? 'SIGN_UP_COMPLETE' : data.nextStep.signUpStep
});
const setNextResetPasswordStep = assign({
    step: (_, { data })=>data.nextStep.resetPasswordStep === 'DONE' ? 'RESET_PASSWORD_COMPLETE' : data.nextStep.resetPasswordStep
});
const setMissingAttributes = assign({
    missingAttributes: (_, { data })=>data.nextStep?.missingAttributes
});
const setFieldErrors = assign({
    validationError: (_, { data })=>data
});
const setRemoteError = assign({
    remoteError: (_, { data })=>{
        if (data.name === 'NoUserPoolError') {
            return `Configuration error (see console) – please contact the administrator`;
        }
        return data?.message || data;
    }
});
const setUser = assign({
    user: (_, { data })=>data
});
const resolveCodeDeliveryDetails = (details)=>({
        Destination: details.destination,
        DeliveryMedium: details.deliveryMedium,
        AttributeName: details.attributName
    });
const setCodeDeliveryDetails = assign({
    codeDeliveryDetails: (_, { data })=>{
        if (data?.nextStep?.codeDeliveryDetails) {
            return resolveCodeDeliveryDetails(data.nextStep.codeDeliveryDetails);
        }
        return resolveCodeDeliveryDetails(data);
    }
});
const handleInput = assign({
    formValues: (context, { data })=>{
        const { name, value } = data;
        return {
            ...context['formValues'],
            [name]: value
        };
    }
});
const handleSubmit = assign({
    formValues: (context, { data })=>// do not trim password
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trimValues"])({
            ...context['formValues'],
            ...data
        }, 'password')
});
const handleBlur = assign({
    touched: (context, { data })=>({
            ...context['touched'],
            [data.name]: true
        })
});
const setUnverifiedUserAttributes = assign({
    unverifiedUserAttributes: (_, { data })=>{
        const { email, phone_number } = data;
        const unverifiedUserAttributes = {
            ...email && {
                email
            },
            ...phone_number && {
                phone_number
            }
        };
        return unverifiedUserAttributes;
    }
});
const clearSelectedUserAttribute = assign({
    selectedUserAttribute: undefined
});
const setSelectedUserAttribute = assign({
    selectedUserAttribute: (context)=>context.formValues?.unverifiedAttr
});
// Maps to unexposed `ConfirmSignUpSignUpStep`
const setConfirmSignUpSignUpStep = assign({
    step: 'CONFIRM_SIGN_UP'
});
const ACTIONS = {
    clearActorDoneData,
    clearChallengeName,
    clearError,
    clearFormValues,
    clearMissingAttributes,
    clearSelectedUserAttribute,
    clearTouched,
    clearUser,
    clearValidationError,
    handleBlur,
    handleInput,
    handleSubmit,
    setAllowedMfaTypes,
    setChallengeName,
    setCodeDeliveryDetails,
    setFieldErrors,
    setMissingAttributes,
    setNextResetPasswordStep,
    setNextSignInStep,
    setNextSignUpStep,
    setRemoteError,
    setConfirmAttributeCompleteStep,
    setConfirmSignUpSignUpStep,
    setShouldVerifyUserAttributeStep,
    setSelectedUserAttribute,
    setSignInStep,
    setTotpSecretCode,
    setUser,
    setUnverifiedUserAttributes,
    setUsernameForgotPassword,
    setUsernameSignIn,
    setUsernameSignUp
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/guards.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GUARDS)
});
const SIGN_IN_STEP_MFA_CONFIRMATION = [
    'CONFIRM_SIGN_IN_WITH_SMS_CODE',
    'CONFIRM_SIGN_IN_WITH_TOTP_CODE',
    'CONFIRM_SIGN_IN_WITH_EMAIL_CODE'
];
// response next step guards
const shouldConfirmSignInWithNewPassword = (_, { data })=>data?.nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED';
const shouldResetPasswordFromSignIn = (_, { data })=>data?.nextStep?.signInStep === 'RESET_PASSWORD';
const shouldConfirmSignUpFromSignIn = (_, { data })=>data?.nextStep.signInStep === 'CONFIRM_SIGN_UP';
const shouldAutoSignIn = (_, { data })=>data?.nextStep.signUpStep === 'COMPLETE_AUTO_SIGN_IN';
const hasCompletedSignIn = (_, { data })=>data?.nextStep.signInStep === 'DONE';
const hasCompletedSignUp = (_, { data })=>data?.nextStep.signUpStep === 'DONE';
const hasCompletedResetPassword = (_, { data })=>data?.nextStep.resetPasswordStep === 'DONE';
// actor done guards read `step` from actor exit event
const hasCompletedAttributeConfirmation = (_, { data })=>data?.step === 'CONFIRM_ATTRIBUTE_COMPLETE';
const isConfirmUserAttributeStep = (_, { data })=>data?.step === 'CONFIRM_ATTRIBUTE_WITH_CODE';
const isShouldConfirmUserAttributeStep = (_, { data })=>data?.step === 'SHOULD_CONFIRM_USER_ATTRIBUTE';
const isResetPasswordStep = (_, { data })=>data?.step === 'RESET_PASSWORD';
const isConfirmSignUpStep = (_, { data })=>data?.step === 'CONFIRM_SIGN_UP';
// actor entry guards read `step` from actor context
const shouldConfirmSignIn = ({ step })=>SIGN_IN_STEP_MFA_CONFIRMATION.includes(step);
const shouldSetupTotp = ({ step })=>step === 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP';
const shouldSetupEmail = ({ step })=>step === 'CONTINUE_SIGN_IN_WITH_EMAIL_SETUP';
const shouldSelectMfaType = ({ step })=>[
        'CONTINUE_SIGN_IN_WITH_MFA_SELECTION',
        'CONTINUE_SIGN_IN_WITH_MFA_SETUP_SELECTION'
    ].includes(step);
const shouldResetPassword = ({ step })=>step === 'RESET_PASSWORD';
const shouldConfirmResetPassword = ({ step })=>step === 'CONFIRM_RESET_PASSWORD_WITH_CODE';
const shouldConfirmSignUp = ({ step })=>step === 'CONFIRM_SIGN_UP';
// miscellaneous guards
const shouldVerifyAttribute = (_, { data })=>{
    const { phone_number_verified, email_verified } = data;
    // email/phone_verified is returned as a string
    const emailNotVerified = email_verified === undefined || email_verified === 'false';
    const phoneNotVerified = phone_number_verified === undefined || phone_number_verified === 'false';
    // only request verification if both email and phone are not verified
    return emailNotVerified && phoneNotVerified;
};
/**
 * This guard covers an edge case that exists in the current state of the UI.
 * As of now, our ConfirmSignUp screen only supports showing an input for a
 * confirmation code. However, a Cognito UserPool can instead verify users
 * through a link that gets emailed to them. If a user verifies through the
 * link and then they click on the "Resend Code" button, they will get an error
 * saying that the user has already been confirmed. If we encounter that error,
 * we want to just funnel them through the rest of the flow. In the future, we will
 * want to update our UI to support both confirmation codes and links.
 *
 * https://github.com/aws-amplify/amplify-ui/issues/219
 */ const isUserAlreadyConfirmed = (_, { data })=>data.message === 'User is already confirmed.';
const GUARDS = {
    hasCompletedAttributeConfirmation,
    hasCompletedResetPassword,
    hasCompletedSignIn,
    hasCompletedSignUp,
    isConfirmSignUpStep,
    isConfirmUserAttributeStep,
    isResetPasswordStep,
    isShouldConfirmUserAttributeStep,
    isUserAlreadyConfirmed,
    shouldAutoSignIn,
    shouldConfirmResetPassword,
    shouldConfirmSignIn,
    shouldConfirmSignInWithNewPassword,
    shouldConfirmSignUp,
    shouldConfirmSignUpFromSignIn,
    shouldResetPassword,
    shouldResetPasswordFromSignIn,
    shouldSetupTotp,
    shouldSetupEmail,
    shouldSelectMfaType,
    shouldVerifyAttribute
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/validators/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "runValidators": (()=>runValidators)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
// Runs all validators given. Resolves if there are no error. Rejects otherwise.
const runValidators = async (formData, touchData, passwordSettings, validators)=>{
    const errors = await Promise.all(validators.map((validator)=>validator(formData, touchData, passwordSettings)));
    const mergedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, ...errors);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(mergedError)) {
        // no errors were found
        return Promise.resolve();
    } else {
        return Promise.reject(mergedError);
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/defaultServices.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultServices": (()=>defaultServices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$aws$2d$amplify$40$6$2e$14$2e$1$2f$node_modules$2f$aws$2d$amplify$2f$dist$2f$esm$2f$initSingleton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__DefaultAmplify__as__Amplify$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/aws-amplify@6.14.1/node_modules/aws-amplify/dist/esm/initSingleton.mjs [app-ssr] (ecmascript) <export DefaultAmplify as Amplify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/getCurrentUser.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signIn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signUp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmSignIn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmSignUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmSignUp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmResetPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmResetPassword.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resetPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/resetPassword.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resendSignUpCode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/resendSignUpCode.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Cognito does not allow a password length less then 8 characters
const DEFAULT_COGNITO_PASSWORD_MIN_LENGTH = 8;
const isInvalidUserAtributes = (userAttributes)=>Array.isArray(userAttributes);
const parseUserAttributes = (userAttributes)=>{
    if (!userAttributes) {
        return undefined;
    }
    // `aws-amplify` versions <= 6.0.5 return an array of `userAttributes` rather than an object
    if (isInvalidUserAtributes(userAttributes)) {
        return Object.entries(userAttributes).map(([_, value])=>Object.keys(value)[0]);
    }
    return Object.keys(userAttributes);
};
const defaultServices = {
    async getAmplifyConfig () {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$aws$2d$amplify$40$6$2e$14$2e$1$2f$node_modules$2f$aws$2d$amplify$2f$dist$2f$esm$2f$initSingleton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__DefaultAmplify__as__Amplify$3e$__["Amplify"].getConfig();
        const cliConfig = result.Auth?.Cognito;
        const { loginWith, userAttributes } = result.Auth?.Cognito ?? {};
        const parsedLoginMechanisms = loginWith ? Object.entries(loginWith).filter(([key, _value])=>key !== 'oauth').filter(([_key, value])=>!!value).map((keyValueArray)=>{
            return keyValueArray[0] === 'phone' // the key for phone_number is phone in getConfig but everywhere else we treat is as phone_number
             ? 'phone_number' : keyValueArray[0];
        }) : undefined;
        const parsedSignupAttributes = parseUserAttributes(userAttributes);
        const parsedSocialProviders = loginWith?.oauth?.providers ? loginWith.oauth.providers?.map((provider)=>provider.toString().toLowerCase()) : undefined;
        return {
            ...cliConfig,
            loginMechanisms: parsedLoginMechanisms,
            signUpAttributes: parsedSignupAttributes,
            socialProviders: parsedSocialProviders
        };
    },
    getCurrentUser: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"],
    handleSignIn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"],
    handleSignUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signUp"],
    handleConfirmSignIn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmSignIn"],
    handleConfirmSignUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmSignUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmSignUp"],
    handleForgotPasswordSubmit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmResetPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmResetPassword"],
    handleForgotPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resetPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetPassword"],
    handleResendSignUpCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resendSignUpCode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resendSignUpCode"],
    // Validation hooks for overriding
    async validateCustomSignUp (_, __) {},
    async validateFormPassword (formData, touchData, passwordSettings) {
        const { password } = formData;
        const { password: touched_password } = touchData;
        /**
         * If the password is not touched,
         * or if the password settings are not set, we don't need to validate it.
         */ if (!touched_password || !passwordSettings) return null;
        const password_complexity = [];
        const policyMinLength = passwordSettings.minLength ?? DEFAULT_COGNITO_PASSWORD_MIN_LENGTH;
        if (password.length < policyMinLength) {
            password_complexity.push(`Password must have at least ${policyMinLength} characters`);
        }
        if (passwordSettings.requireLowercase && !/[a-z]/.test(password)) password_complexity.push('Password must have lower case letters');
        if (passwordSettings.requireUppercase && !/[A-Z]/.test(password)) password_complexity.push('Password must have upper case letters');
        if (passwordSettings.requireNumbers && !/[0-9]/.test(password)) password_complexity.push('Password must have numbers');
        // https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html
        if (passwordSettings.requireSpecialCharacters && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasSpecialChars"])(password)) password_complexity.push('Password must have special characters');
        /**
         * Only return an error if there is at least one error.
         */ return password_complexity.length !== 0 ? {
            password: password_complexity
        } : null;
    },
    async validateConfirmPassword (formData, touchData) {
        const { password, confirm_password } = formData;
        const { confirm_password: touched_confirm_password, password: touched_password } = touchData;
        if (!password && !confirm_password) {
            // these inputs are clean, don't complain yet
            return null;
        } else if ((password || confirm_password) && password !== confirm_password && (touched_confirm_password && touched_password || password?.length >= 6 && confirm_password?.length >= 6)) {
            // Only return an error if both fields have text entered,
            // the passwords do not match, and the fields have been
            // touched or the password and confirm password is longer then or equal to 6.
            return {
                confirm_password: 'Your passwords must match'
            };
        }
    },
    async validatePreferredUsername (_, __) {}
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/forgotPassword.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "forgotPasswordActor": (()=>forgotPasswordActor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/Machine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$validators$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/validators/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actions.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$guards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/guards.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/defaultServices.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function forgotPasswordActor({ services }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
        id: 'forgotPasswordActor',
        initial: 'init',
        predictableActionArguments: true,
        states: {
            init: {
                always: [
                    {
                        cond: 'shouldResetPassword',
                        target: 'confirmResetPassword'
                    },
                    {
                        cond: 'shouldConfirmResetPassword',
                        target: 'confirmResetPassword'
                    },
                    {
                        target: 'forgotPassword'
                    }
                ]
            },
            forgotPassword: {
                initial: 'edit',
                entry: 'sendUpdate',
                exit: [
                    'clearError',
                    'clearTouched'
                ],
                states: {
                    edit: {
                        entry: 'sendUpdate',
                        on: {
                            SUBMIT: {
                                actions: 'handleSubmit',
                                target: 'submit'
                            },
                            CHANGE: {
                                actions: 'handleInput'
                            },
                            BLUR: {
                                actions: 'handleBlur'
                            }
                        }
                    },
                    submit: {
                        tags: 'pending',
                        entry: [
                            'sendUpdate',
                            'clearError',
                            'setUsernameForgotPassword'
                        ],
                        invoke: {
                            src: 'handleResetPassword',
                            onDone: {
                                actions: [
                                    'setCodeDeliveryDetails',
                                    'setNextResetPasswordStep'
                                ],
                                target: '#forgotPasswordActor.confirmResetPassword'
                            },
                            onError: {
                                actions: 'setRemoteError',
                                target: 'edit'
                            }
                        }
                    }
                }
            },
            confirmResetPassword: {
                type: 'parallel',
                exit: [
                    'clearFormValues',
                    'clearError',
                    'clearTouched'
                ],
                states: {
                    validation: {
                        initial: 'pending',
                        states: {
                            pending: {
                                invoke: {
                                    src: 'validateFields',
                                    onDone: {
                                        target: 'valid',
                                        actions: 'clearValidationError'
                                    },
                                    onError: {
                                        target: 'invalid',
                                        actions: 'setFieldErrors'
                                    }
                                }
                            },
                            valid: {
                                entry: 'sendUpdate'
                            },
                            invalid: {
                                entry: 'sendUpdate'
                            }
                        },
                        on: {
                            CHANGE: {
                                actions: 'handleInput',
                                target: '.pending'
                            },
                            BLUR: {
                                actions: 'handleBlur',
                                target: '.pending'
                            }
                        }
                    },
                    submission: {
                        initial: 'idle',
                        states: {
                            idle: {
                                entry: 'sendUpdate',
                                on: {
                                    SUBMIT: {
                                        actions: 'handleSubmit',
                                        target: 'validate'
                                    },
                                    RESEND: 'resendCode',
                                    CHANGE: {
                                        actions: 'handleInput'
                                    },
                                    BLUR: {
                                        actions: 'handleBlur'
                                    }
                                }
                            },
                            validate: {
                                entry: 'sendUpdate',
                                invoke: {
                                    src: 'validateFields',
                                    onDone: {
                                        target: 'pending',
                                        actions: 'clearValidationError'
                                    },
                                    onError: {
                                        target: 'idle',
                                        actions: 'setFieldErrors'
                                    }
                                }
                            },
                            resendCode: {
                                tags: 'pending',
                                entry: [
                                    'clearError',
                                    'sendUpdate'
                                ],
                                invoke: {
                                    src: 'handleResetPassword',
                                    onDone: {
                                        target: 'idle'
                                    },
                                    onError: {
                                        actions: 'setRemoteError',
                                        target: 'idle'
                                    }
                                }
                            },
                            pending: {
                                tags: 'pending',
                                entry: [
                                    'clearError',
                                    'sendUpdate'
                                ],
                                invoke: {
                                    src: 'handleConfirmResetPassword',
                                    onDone: [
                                        {
                                            cond: 'hasCompletedResetPassword',
                                            actions: 'setNextResetPasswordStep',
                                            target: '#forgotPasswordActor.resolved'
                                        },
                                        {
                                            actions: 'setSignInStep',
                                            target: '#forgotPasswordActor.resolved'
                                        }
                                    ],
                                    onError: {
                                        actions: 'setRemoteError',
                                        target: 'idle'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            resolved: {
                type: 'final',
                data: ({ step })=>({
                        step
                    })
            }
        }
    }, {
        // sendUpdate is a HOC
        actions: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            sendUpdate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendUpdate"])()
        },
        guards: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$guards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        services: {
            handleResetPassword ({ username }) {
                return services.handleForgotPassword({
                    username
                });
            },
            handleConfirmResetPassword ({ formValues, username }) {
                const { confirmation_code: confirmationCode, password: newPassword } = formValues;
                return services.handleForgotPasswordSubmit({
                    confirmationCode,
                    newPassword,
                    username
                });
            },
            validateFields (context) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$validators$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runValidators"])(context.formValues, context.touched, context.passwordSettings, [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServices"].validateFormPassword,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServices"].validateConfirmPassword
                ]);
            }
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/utils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getConfirmSignInFormValuesKey": (()=>getConfirmSignInFormValuesKey),
    "getFederatedSignInState": (()=>getFederatedSignInState)
});
const getFederatedSignInState = (target)=>({
        entry: [
            'sendUpdate',
            'clearError'
        ],
        invoke: {
            src: 'signInWithRedirect',
            onDone: {
                target
            },
            onError: {
                actions: 'setRemoteError',
                target
            }
        }
    });
const getConfirmSignInFormValuesKey = (signInStep)=>{
    if ([
        'CONTINUE_SIGN_IN_WITH_MFA_SELECTION',
        'CONTINUE_SIGN_IN_WITH_MFA_SETUP_SELECTION'
    ].includes(signInStep)) {
        return 'mfa_type';
    }
    if (signInStep === 'CONTINUE_SIGN_IN_WITH_EMAIL_SETUP') {
        return 'email';
    }
    return 'confirmation_code';
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signIn.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signInActor": (()=>signInActor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/Machine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$fetchUserAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/fetchUserAttributes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resetPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/resetPassword.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmSignIn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithRedirect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithRedirect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$validators$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/validators/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actions.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/defaultServices.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$guards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/guards.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const handleSignInResponse = {
    onDone: [
        {
            cond: 'hasCompletedSignIn',
            actions: 'setNextSignInStep',
            target: '#signInActor.fetchUserAttributes'
        },
        {
            cond: 'shouldConfirmSignInWithNewPassword',
            actions: [
                'setMissingAttributes',
                'setNextSignInStep'
            ],
            target: '#signInActor.forceChangePassword'
        },
        {
            cond: 'shouldResetPasswordFromSignIn',
            actions: 'setNextSignInStep',
            target: '#signInActor.resetPassword'
        },
        {
            cond: 'shouldConfirmSignUpFromSignIn',
            actions: 'setNextSignInStep',
            target: '#signInActor.resendSignUpCode'
        },
        {
            actions: [
                'setChallengeName',
                'setMissingAttributes',
                'setNextSignInStep',
                'setTotpSecretCode',
                'setAllowedMfaTypes'
            ],
            target: '#signInActor.init'
        }
    ],
    onError: {
        actions: 'setRemoteError',
        target: 'edit'
    }
};
const handleFetchUserAttributesResponse = {
    onDone: [
        {
            cond: 'shouldVerifyAttribute',
            actions: [
                'setShouldVerifyUserAttributeStep',
                'setUnverifiedUserAttributes'
            ],
            target: '#signInActor.resolved'
        },
        {
            actions: 'setConfirmAttributeCompleteStep',
            target: '#signInActor.resolved'
        }
    ],
    onError: {
        actions: 'setConfirmAttributeCompleteStep',
        target: '#signInActor.resolved'
    }
};
const getDefaultConfirmSignInState = (exit)=>({
        initial: 'edit',
        exit,
        states: {
            edit: {
                entry: 'sendUpdate',
                on: {
                    SUBMIT: {
                        actions: 'handleSubmit',
                        target: 'submit'
                    },
                    SIGN_IN: '#signInActor.signIn',
                    CHANGE: {
                        actions: 'handleInput'
                    }
                }
            },
            submit: {
                tags: 'pending',
                entry: [
                    'sendUpdate',
                    'clearError'
                ],
                invoke: {
                    src: 'confirmSignIn',
                    ...handleSignInResponse
                }
            }
        }
    });
function signInActor({ services }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
        id: 'signInActor',
        initial: 'init',
        predictableActionArguments: true,
        states: {
            init: {
                always: [
                    {
                        cond: 'shouldConfirmSignIn',
                        target: 'confirmSignIn'
                    },
                    {
                        cond: 'shouldSetupTotp',
                        target: 'setupTotp'
                    },
                    {
                        cond: 'shouldSetupEmail',
                        target: 'setupEmail'
                    },
                    {
                        cond: 'shouldSelectMfaType',
                        target: 'selectMfaType'
                    },
                    {
                        cond: ({ step })=>step === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED',
                        actions: 'setActorDoneData',
                        target: 'forceChangePassword'
                    },
                    {
                        target: 'signIn'
                    }
                ]
            },
            federatedSignIn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFederatedSignInState"])('signIn'),
            fetchUserAttributes: {
                invoke: {
                    src: 'fetchUserAttributes',
                    ...handleFetchUserAttributesResponse
                }
            },
            resendSignUpCode: {
                invoke: {
                    src: 'handleResendSignUpCode',
                    onDone: {
                        actions: 'setCodeDeliveryDetails',
                        target: '#signInActor.resolved'
                    },
                    onError: {
                        actions: 'setRemoteError',
                        target: '#signInActor.signIn'
                    }
                }
            },
            resetPassword: {
                invoke: {
                    src: 'resetPassword',
                    onDone: [
                        {
                            actions: 'setCodeDeliveryDetails',
                            target: '#signInActor.resolved'
                        }
                    ],
                    onError: {
                        actions: [
                            'setRemoteError',
                            'sendUpdate'
                        ]
                    }
                }
            },
            signIn: {
                initial: 'edit',
                exit: 'clearTouched',
                states: {
                    edit: {
                        entry: 'sendUpdate',
                        on: {
                            CHANGE: {
                                actions: 'handleInput'
                            },
                            FEDERATED_SIGN_IN: {
                                target: '#signInActor.federatedSignIn'
                            },
                            SUBMIT: {
                                actions: 'handleSubmit',
                                target: 'submit'
                            }
                        }
                    },
                    submit: {
                        tags: 'pending',
                        entry: [
                            'clearError',
                            'sendUpdate',
                            'setUsernameSignIn'
                        ],
                        exit: 'clearFormValues',
                        invoke: {
                            src: 'handleSignIn',
                            ...handleSignInResponse
                        }
                    }
                }
            },
            confirmSignIn: getDefaultConfirmSignInState([
                'clearChallengeName',
                'clearFormValues',
                'clearError',
                'clearTouched'
            ]),
            forceChangePassword: {
                entry: 'sendUpdate',
                type: 'parallel',
                exit: [
                    'clearFormValues',
                    'clearError',
                    'clearTouched'
                ],
                states: {
                    validation: {
                        initial: 'pending',
                        states: {
                            pending: {
                                invoke: {
                                    src: 'validateFields',
                                    onDone: {
                                        target: 'valid',
                                        actions: 'clearValidationError'
                                    },
                                    onError: {
                                        target: 'invalid',
                                        actions: 'setFieldErrors'
                                    }
                                }
                            },
                            valid: {
                                entry: 'sendUpdate'
                            },
                            invalid: {
                                entry: 'sendUpdate'
                            }
                        },
                        on: {
                            SIGN_IN: {
                                actions: 'setSignInStep',
                                target: '#signInActor.resolved'
                            },
                            CHANGE: {
                                actions: 'handleInput',
                                target: '.pending'
                            },
                            BLUR: {
                                actions: 'handleBlur',
                                target: '.pending'
                            }
                        }
                    },
                    submit: {
                        initial: 'edit',
                        entry: 'clearError',
                        states: {
                            edit: {
                                entry: 'sendUpdate',
                                on: {
                                    SUBMIT: {
                                        actions: 'handleSubmit',
                                        target: 'validate'
                                    }
                                }
                            },
                            validate: {
                                entry: 'sendUpdate',
                                invoke: {
                                    src: 'validateFields',
                                    onDone: {
                                        actions: 'clearValidationError',
                                        target: 'pending'
                                    },
                                    onError: {
                                        actions: 'setFieldErrors',
                                        target: 'edit'
                                    }
                                }
                            },
                            pending: {
                                tags: 'pending',
                                entry: [
                                    'sendUpdate',
                                    'clearError'
                                ],
                                invoke: {
                                    src: 'handleForceChangePassword',
                                    ...handleSignInResponse
                                }
                            }
                        }
                    }
                }
            },
            setupTotp: getDefaultConfirmSignInState([
                'clearFormValues',
                'clearError',
                'clearTouched'
            ]),
            setupEmail: getDefaultConfirmSignInState([
                'clearFormValues',
                'clearError',
                'clearTouched'
            ]),
            selectMfaType: getDefaultConfirmSignInState([
                'clearFormValues',
                'clearError',
                'clearTouched'
            ]),
            resolved: {
                type: 'final',
                data: (context)=>({
                        codeDeliveryDetails: context.codeDeliveryDetails,
                        remoteError: context.remoteError,
                        step: context.step,
                        unverifiedUserAttributes: context.unverifiedUserAttributes,
                        username: context.username
                    })
            }
        }
    }, {
        // sendUpdate is a HOC
        actions: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            sendUpdate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendUpdate"])()
        },
        guards: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$guards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        services: {
            async fetchUserAttributes () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$fetchUserAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchUserAttributes"])();
            },
            resetPassword ({ username }) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resetPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetPassword"])({
                    username
                });
            },
            handleResendSignUpCode ({ username }) {
                return services.handleResendSignUpCode({
                    username
                });
            },
            handleSignIn ({ formValues, username }) {
                const { password } = formValues;
                return services.handleSignIn({
                    username,
                    password
                });
            },
            confirmSignIn ({ formValues, step }) {
                const formValuesKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfirmSignInFormValuesKey"])(step);
                const { [formValuesKey]: challengeResponse } = formValues;
                return services.handleConfirmSignIn({
                    challengeResponse
                });
            },
            async handleForceChangePassword ({ formValues }) {
                let { password: challengeResponse, phone_number, country_code, // destructure and toss UI confirm_password field
                // to prevent error from sending to confirmSignIn
                confirm_password, ...userAttributes } = formValues;
                let phoneNumberWithCountryCode;
                if (phone_number) {
                    phoneNumberWithCountryCode = `${country_code}${phone_number}`.replace(/[^A-Z0-9+]/gi, '');
                    userAttributes = {
                        ...userAttributes,
                        phone_number: phoneNumberWithCountryCode
                    };
                }
                const input = {
                    challengeResponse,
                    options: {
                        userAttributes
                    }
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmSignIn"])(input);
            },
            signInWithRedirect (_, { data }) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithRedirect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithRedirect"])(data);
            },
            async validateFields (context) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$validators$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runValidators"])(context.formValues, context.touched, context.passwordSettings, [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServices"].validateFormPassword,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServices"].validateConfirmPassword
                ]);
            }
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signUp.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signUpActor": (()=>signUpActor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/Machine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/autoSignIn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$fetchUserAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/fetchUserAttributes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithRedirect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signInWithRedirect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$validators$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/validators/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actions.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$guards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/guards.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const handleResetPasswordResponse = {
    onDone: [
        {
            actions: 'setCodeDeliveryDetails',
            target: '#signUpActor.resolved'
        }
    ],
    onError: {
        actions: [
            'setRemoteError',
            'sendUpdate'
        ]
    }
};
const handleAutoSignInResponse = {
    onDone: [
        {
            cond: 'hasCompletedSignIn',
            actions: 'setNextSignInStep',
            target: '#signUpActor.fetchUserAttributes'
        },
        {
            cond: 'shouldConfirmSignInWithNewPassword',
            actions: 'setNextSignInStep',
            target: '#signUpActor.resolved'
        },
        {
            cond: 'shouldResetPasswordFromSignIn',
            actions: 'setNextSignInStep',
            target: '#signUpActor.resetPassword'
        },
        {
            cond: 'shouldConfirmSignUpFromSignIn',
            actions: 'setNextSignInStep',
            target: '#signUpActor.resendSignUpCode'
        },
        {
            actions: [
                'setNextSignInStep',
                'setChallengeName',
                'setMissingAttributes',
                'setTotpSecretCode',
                'setAllowedMfaTypes'
            ],
            target: '#signUpActor.resolved'
        }
    ],
    onError: {
        actions: 'setRemoteError',
        target: '#signUpActor.resolved'
    }
};
const handleFetchUserAttributesResponse = {
    onDone: [
        {
            cond: 'shouldVerifyAttribute',
            actions: [
                'setShouldVerifyUserAttributeStep',
                'setUnverifiedUserAttributes'
            ],
            target: '#signUpActor.resolved'
        },
        {
            actions: 'setConfirmAttributeCompleteStep',
            target: '#signUpActor.resolved'
        }
    ],
    onError: {
        actions: 'setConfirmAttributeCompleteStep',
        target: '#signUpActor.resolved'
    }
};
function signUpActor({ services }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
        id: 'signUpActor',
        initial: 'init',
        predictableActionArguments: true,
        states: {
            init: {
                always: [
                    {
                        cond: 'shouldConfirmSignUp',
                        target: 'confirmSignUp'
                    },
                    {
                        target: 'signUp'
                    }
                ]
            },
            autoSignIn: {
                tags: 'pending',
                invoke: {
                    src: 'autoSignIn',
                    ...handleAutoSignInResponse
                }
            },
            fetchUserAttributes: {
                invoke: {
                    src: 'fetchUserAttributes',
                    ...handleFetchUserAttributesResponse
                }
            },
            federatedSignIn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFederatedSignInState"])('signUp'),
            resetPassword: {
                invoke: {
                    src: 'resetPassword',
                    ...handleResetPasswordResponse
                }
            },
            resendSignUpCode: {
                tags: 'pending',
                entry: 'sendUpdate',
                exit: 'sendUpdate',
                invoke: {
                    src: 'resendSignUpCode',
                    onDone: {
                        actions: [
                            'setCodeDeliveryDetails',
                            'sendUpdate'
                        ],
                        target: '#signUpActor.confirmSignUp'
                    },
                    onError: [
                        {
                            cond: 'isUserAlreadyConfirmed',
                            target: '#signUpActor.resolved'
                        },
                        {
                            actions: [
                                'setRemoteError',
                                'sendUpdate'
                            ]
                        }
                    ]
                }
            },
            signUp: {
                type: 'parallel',
                exit: 'clearTouched',
                on: {
                    FEDERATED_SIGN_IN: {
                        target: 'federatedSignIn'
                    }
                },
                states: {
                    validation: {
                        initial: 'pending',
                        states: {
                            pending: {
                                invoke: {
                                    src: 'validateSignUp',
                                    onDone: {
                                        actions: 'clearValidationError',
                                        target: 'valid'
                                    },
                                    onError: {
                                        actions: 'setFieldErrors',
                                        target: 'invalid'
                                    }
                                }
                            },
                            valid: {
                                entry: 'sendUpdate'
                            },
                            invalid: {
                                entry: 'sendUpdate'
                            }
                        },
                        on: {
                            BLUR: {
                                actions: 'handleBlur',
                                target: '.pending'
                            },
                            CHANGE: {
                                actions: 'handleInput',
                                target: '.pending'
                            }
                        }
                    },
                    submission: {
                        initial: 'idle',
                        states: {
                            idle: {
                                entry: [
                                    'sendUpdate'
                                ],
                                on: {
                                    SUBMIT: {
                                        actions: 'handleSubmit',
                                        target: 'validate'
                                    }
                                }
                            },
                            validate: {
                                entry: 'sendUpdate',
                                invoke: {
                                    src: 'validateSignUp',
                                    onDone: {
                                        target: 'handleSignUp',
                                        actions: 'clearValidationError'
                                    },
                                    onError: {
                                        actions: 'setFieldErrors',
                                        target: 'idle'
                                    }
                                }
                            },
                            handleSignUp: {
                                tags: 'pending',
                                entry: [
                                    'setUsernameSignUp',
                                    'clearError'
                                ],
                                exit: 'sendUpdate',
                                invoke: {
                                    src: 'handleSignUp',
                                    onDone: [
                                        {
                                            cond: 'hasCompletedSignUp',
                                            actions: 'setNextSignUpStep',
                                            target: '#signUpActor.resolved'
                                        },
                                        {
                                            cond: 'shouldAutoSignIn',
                                            actions: 'setNextSignUpStep',
                                            target: '#signUpActor.autoSignIn'
                                        },
                                        {
                                            actions: [
                                                'setCodeDeliveryDetails',
                                                'setNextSignUpStep'
                                            ],
                                            target: '#signUpActor.init'
                                        }
                                    ],
                                    onError: {
                                        actions: [
                                            'sendUpdate',
                                            'setRemoteError'
                                        ],
                                        target: 'idle'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            confirmSignUp: {
                initial: 'edit',
                entry: 'sendUpdate',
                states: {
                    edit: {
                        on: {
                            SUBMIT: {
                                actions: 'handleSubmit',
                                target: 'submit'
                            },
                            CHANGE: {
                                actions: 'handleInput'
                            },
                            BLUR: {
                                actions: 'handleBlur'
                            },
                            RESEND: '#signUpActor.resendSignUpCode'
                        }
                    },
                    submit: {
                        tags: 'pending',
                        entry: [
                            'clearError',
                            'sendUpdate'
                        ],
                        invoke: {
                            src: 'confirmSignUp',
                            onDone: [
                                {
                                    cond: 'shouldAutoSignIn',
                                    actions: [
                                        'setNextSignUpStep',
                                        'clearFormValues'
                                    ],
                                    target: '#signUpActor.autoSignIn'
                                },
                                {
                                    actions: 'setNextSignUpStep',
                                    target: '#signUpActor.init'
                                }
                            ],
                            onError: {
                                actions: [
                                    'setRemoteError',
                                    'sendUpdate'
                                ],
                                target: 'edit'
                            }
                        }
                    }
                }
            },
            resolved: {
                type: 'final',
                data: (context)=>({
                        challengeName: context.challengeName,
                        missingAttributes: context.missingAttributes,
                        remoteError: context.remoteError,
                        step: context.step,
                        totpSecretCode: context.totpSecretCode,
                        username: context.username,
                        unverifiedUserAttributes: context.unverifiedUserAttributes,
                        allowedMfaTypes: context.allowedMfaTypes
                    })
            }
        }
    }, {
        // sendUpdate is a HOC
        actions: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            sendUpdate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendUpdate"])()
        },
        guards: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$guards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        services: {
            autoSignIn () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$autoSignIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSignIn"])();
            },
            async fetchUserAttributes () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$fetchUserAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchUserAttributes"])();
            },
            confirmSignUp ({ formValues, username }) {
                const { confirmation_code: confirmationCode } = formValues;
                const input = {
                    username,
                    confirmationCode
                };
                return services.handleConfirmSignUp(input);
            },
            resendSignUpCode ({ username }) {
                return services.handleResendSignUpCode({
                    username
                });
            },
            signInWithRedirect (_, { data }) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signInWithRedirect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithRedirect"])(data);
            },
            handleSignUp (context) {
                const { formValues, loginMechanisms, username } = context;
                const loginMechanism = loginMechanisms[0];
                const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignUpInput"])(username, formValues, loginMechanism);
                return services.handleSignUp(input);
            },
            async validateSignUp (context) {
                // This needs to exist in the machine to reference new `services`
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$validators$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runValidators"])(context.formValues, context.touched, context.passwordSettings, [
                    // Validation of password
                    services.validateFormPassword,
                    // Validation for default form fields
                    services.validateConfirmPassword,
                    services.validatePreferredUsername,
                    // Validation for any custom Sign Up fields
                    services.validateCustomSignUp
                ]);
            }
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signOut.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signOutActor": (()=>signOutActor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/Machine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs [app-ssr] (ecmascript)");
;
;
const signOutActor = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
        initial: 'pending',
        id: 'signOutActor',
        predictableActionArguments: true,
        states: {
            pending: {
                tags: 'pending',
                invoke: {
                    src: 'signOut',
                    onDone: 'resolved',
                    onError: 'rejected'
                }
            },
            resolved: {
                type: 'final'
            },
            rejected: {
                type: 'final'
            }
        }
    }, {
        services: {
            signOut: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])()
        }
    });
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/verifyUserAttributes.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "verifyUserAttributesActor": (()=>verifyUserAttributesActor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/Machine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$sendUserAttributeVerificationCode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/sendUserAttributeVerificationCode.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmUserAttribute$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+auth@6.12.1_@aws-amplify+core@6.11.1/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmUserAttribute.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$validators$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/validators/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actions.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/defaultServices.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function verifyUserAttributesActor() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
        id: 'verifyUserAttributesActor',
        initial: 'selectUserAttributes',
        predictableActionArguments: true,
        states: {
            selectUserAttributes: {
                initial: 'edit',
                exit: [
                    'clearError',
                    'clearTouched',
                    'sendUpdate'
                ],
                states: {
                    edit: {
                        entry: 'sendUpdate',
                        on: {
                            SUBMIT: {
                                actions: 'handleSubmit',
                                target: 'submit'
                            },
                            SKIP: {
                                target: '#verifyUserAttributesActor.resolved'
                            },
                            CHANGE: {
                                actions: 'handleInput'
                            }
                        }
                    },
                    submit: {
                        tags: 'pending',
                        entry: [
                            'clearError',
                            'sendUpdate'
                        ],
                        invoke: {
                            src: 'sendUserAttributeVerificationCode',
                            onDone: {
                                actions: [
                                    'setSelectedUserAttribute',
                                    'setCodeDeliveryDetails'
                                ],
                                target: '#verifyUserAttributesActor.confirmVerifyUserAttribute'
                            },
                            onError: {
                                actions: 'setRemoteError',
                                target: 'edit'
                            }
                        }
                    }
                }
            },
            confirmVerifyUserAttribute: {
                initial: 'edit',
                exit: [
                    'clearError',
                    'clearFormValues',
                    'clearTouched'
                ],
                states: {
                    edit: {
                        entry: 'sendUpdate',
                        on: {
                            SUBMIT: {
                                actions: 'handleSubmit',
                                target: 'submit'
                            },
                            SKIP: '#verifyUserAttributesActor.resolved',
                            CHANGE: {
                                actions: 'handleInput'
                            }
                        }
                    },
                    submit: {
                        tags: 'pending',
                        entry: [
                            'clearError',
                            'sendUpdate'
                        ],
                        invoke: {
                            src: 'confirmVerifyUserAttribute',
                            onDone: {
                                actions: [
                                    'setConfirmAttributeCompleteStep',
                                    'clearSelectedUserAttribute'
                                ],
                                target: '#verifyUserAttributesActor.resolved'
                            },
                            onError: {
                                actions: 'setRemoteError',
                                target: 'edit'
                            }
                        }
                    }
                }
            },
            resolved: {
                type: 'final',
                data: ({ step })=>({
                        step
                    })
            }
        }
    }, {
        // sendUpdate is a HOC
        actions: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            sendUpdate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendUpdate"])()
        },
        services: {
            sendUserAttributeVerificationCode ({ formValues: { unverifiedAttr } }) {
                const input = {
                    userAttributeKey: unverifiedAttr
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$sendUserAttributeVerificationCode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserAttributeVerificationCode"])(input);
            },
            async confirmVerifyUserAttribute ({ formValues: { confirmation_code: confirmationCode }, selectedUserAttribute }) {
                const input = {
                    confirmationCode,
                    userAttributeKey: selectedUserAttribute
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$auth$40$6$2e$12$2e$1_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmUserAttribute$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmUserAttribute"])(input);
            },
            async validateFields (context) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$validators$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runValidators"])(context.formValues, context.touched, context.passwordSettings, [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServices"].validateFormPassword,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServices"].validateConfirmPassword
                ]);
            }
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAuthenticatorMachine": (()=>createAuthenticatorMachine)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/Machine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/interpreter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__actions$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@4.38.3/node_modules/xstate/es/actions.js [app-ssr] (ecmascript) <export * as actions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actions.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$guards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/guards.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$forgotPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/forgotPassword.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signIn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$signUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signUp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$signOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signOut.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$verifyUserAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/verifyUserAttributes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/defaultServices.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const getActorContext = (context, defaultStep)=>({
        ...context.actorDoneData,
        step: context?.actorDoneData?.step ?? defaultStep,
        // initialize empty objects on actor start
        formValues: {},
        touched: {},
        validationError: {},
        // values included on `context.config` that should be available in actors
        formFields: context.config?.formFields,
        loginMechanisms: context.config?.loginMechanisms,
        passwordSettings: context.config?.passwordSettings,
        signUpAttributes: context.config?.signUpAttributes,
        socialProviders: context.config?.socialProviders
    });
const { choose, stop } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__actions$3e$__["actions"];
const stopActor = (machineId)=>stop(machineId);
// setup step waits for ui to emit INIT action to proceed to configure
const LEGACY_WAIT_CONFIG = {
    on: {
        INIT: {
            actions: 'configure',
            target: 'getConfig'
        },
        SIGN_OUT: '#authenticator.signOut'
    }
};
// setup step proceeds directly to configure
const NEXT_WAIT_CONFIG = {
    always: {
        actions: 'configure',
        target: 'getConfig'
    }
};
function createAuthenticatorMachine(options) {
    const { useNextWaitConfig, ...overrideConfigServices } = options ?? {};
    const initConfig = useNextWaitConfig ? NEXT_WAIT_CONFIG : LEGACY_WAIT_CONFIG;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$Machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
        id: 'authenticator',
        initial: 'idle',
        context: {
            user: undefined,
            config: {},
            services: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServices"],
            actorRef: undefined,
            hasSetup: false
        },
        predictableActionArguments: true,
        states: {
            // See: https://xstate.js.org/docs/guides/communication.html#invoking-promises
            idle: {
                invoke: {
                    src: 'handleGetCurrentUser',
                    onDone: {
                        actions: 'setUser',
                        target: 'setup'
                    },
                    onError: {
                        target: 'setup'
                    }
                }
            },
            setup: {
                initial: 'initConfig',
                states: {
                    initConfig,
                    getConfig: {
                        invoke: {
                            src: 'getAmplifyConfig',
                            onDone: [
                                {
                                    actions: [
                                        'applyAmplifyConfig',
                                        'setHasSetup'
                                    ],
                                    cond: 'hasUser',
                                    target: '#authenticator.authenticated'
                                },
                                {
                                    actions: [
                                        'applyAmplifyConfig',
                                        'setHasSetup'
                                    ],
                                    target: 'goToInitialState'
                                }
                            ]
                        }
                    },
                    goToInitialState: {
                        always: [
                            {
                                cond: 'isInitialStateSignUp',
                                target: '#authenticator.signUpActor'
                            },
                            {
                                cond: 'isInitialStateResetPassword',
                                target: '#authenticator.forgotPasswordActor'
                            },
                            {
                                target: '#authenticator.signInActor'
                            }
                        ]
                    }
                }
            },
            getCurrentUser: {
                invoke: {
                    src: 'handleGetCurrentUser',
                    onDone: {
                        actions: 'setUser',
                        target: '#authenticator.authenticated'
                    },
                    onError: {
                        target: '#authenticator.setup'
                    }
                }
            },
            signInActor: {
                initial: 'spawnActor',
                states: {
                    spawnActor: {
                        always: {
                            actions: 'spawnSignInActor',
                            target: 'runActor'
                        }
                    },
                    runActor: {
                        entry: 'clearActorDoneData',
                        exit: stopActor('signInActor')
                    }
                },
                on: {
                    FORGOT_PASSWORD: 'forgotPasswordActor',
                    SIGN_IN: 'signInActor',
                    SIGN_UP: 'signUpActor',
                    'done.invoke.signInActor': [
                        {
                            cond: 'hasCompletedAttributeConfirmation',
                            target: '#authenticator.getCurrentUser'
                        },
                        {
                            cond: 'isShouldConfirmUserAttributeStep',
                            actions: 'setActorDoneData',
                            target: '#authenticator.verifyUserAttributesActor'
                        },
                        {
                            cond: 'isResetPasswordStep',
                            actions: 'setActorDoneData',
                            target: '#authenticator.forgotPasswordActor'
                        },
                        {
                            cond: 'isConfirmSignUpStep',
                            actions: 'setActorDoneData',
                            target: '#authenticator.signUpActor'
                        }
                    ]
                }
            },
            signUpActor: {
                initial: 'spawnActor',
                states: {
                    spawnActor: {
                        always: {
                            actions: 'spawnSignUpActor',
                            target: 'runActor'
                        }
                    },
                    runActor: {
                        entry: 'clearActorDoneData',
                        exit: stopActor('signUpActor')
                    }
                },
                on: {
                    SIGN_IN: 'signInActor',
                    'done.invoke.signUpActor': [
                        {
                            cond: 'hasCompletedAttributeConfirmation',
                            target: '#authenticator.getCurrentUser'
                        },
                        {
                            cond: 'isShouldConfirmUserAttributeStep',
                            actions: 'setActorDoneData',
                            target: '#authenticator.verifyUserAttributesActor'
                        },
                        {
                            cond: 'isConfirmUserAttributeStep',
                            target: '#authenticator.verifyUserAttributesActor'
                        },
                        {
                            actions: 'setActorDoneData',
                            target: '#authenticator.signInActor'
                        }
                    ]
                }
            },
            forgotPasswordActor: {
                initial: 'spawnActor',
                states: {
                    spawnActor: {
                        always: {
                            actions: 'spawnForgotPasswordActor',
                            target: 'runActor'
                        }
                    },
                    runActor: {
                        entry: 'clearActorDoneData',
                        exit: stopActor('forgotPasswordActor')
                    }
                },
                on: {
                    SIGN_IN: 'signInActor',
                    'done.invoke.forgotPasswordActor': [
                        {
                            target: '#authenticator.signInActor'
                        }
                    ]
                }
            },
            verifyUserAttributesActor: {
                initial: 'spawnActor',
                states: {
                    spawnActor: {
                        always: {
                            actions: 'spawnVerifyUserAttributesActor',
                            target: 'runActor'
                        }
                    },
                    runActor: {
                        entry: 'clearActorDoneData',
                        exit: stopActor('verifyUserAttributesActor')
                    }
                },
                on: {
                    'done.invoke.verifyUserAttributesActor': [
                        {
                            actions: 'setActorDoneData',
                            target: '#authenticator.getCurrentUser'
                        }
                    ]
                }
            },
            authenticated: {
                initial: 'idle',
                states: {
                    idle: {
                        on: {
                            TOKEN_REFRESH: 'refreshUser'
                        }
                    },
                    refreshUser: {
                        invoke: {
                            src: '#authenticator.getCurrentUser',
                            onDone: {
                                actions: 'setUser',
                                target: 'idle'
                            },
                            onError: {
                                target: '#authenticator.signOut'
                            }
                        }
                    }
                },
                on: {
                    SIGN_OUT: 'signOut'
                }
            },
            signOut: {
                initial: 'spawnActor',
                states: {
                    spawnActor: {
                        always: {
                            actions: 'spawnSignOutActor',
                            target: 'runActor'
                        }
                    },
                    runActor: {
                        entry: 'clearActorDoneData',
                        exit: stopActor('signOutActor')
                    }
                },
                on: {
                    'done.invoke.signOutActor': {
                        actions: 'clearUser',
                        target: 'setup.getConfig'
                    }
                }
            }
        },
        on: {
            SIGN_IN_WITH_REDIRECT: {
                target: '#authenticator.getCurrentUser'
            },
            CHANGE: {
                actions: 'forwardToActor'
            },
            BLUR: {
                actions: 'forwardToActor'
            },
            SUBMIT: {
                actions: 'forwardToActor'
            },
            FEDERATED_SIGN_IN: {
                actions: 'forwardToActor'
            },
            RESEND: {
                actions: 'forwardToActor'
            },
            SIGN_IN: {
                actions: 'forwardToActor'
            },
            SKIP: {
                actions: 'forwardToActor'
            }
        }
    }, {
        actions: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            forwardToActor: choose([
                {
                    cond: 'hasActor',
                    actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["forwardTo"])(({ actorRef })=>actorRef)
                }
            ]),
            setActorDoneData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                actorDoneData: (_, event)=>({
                        challengeName: event.data.challengeName,
                        codeDeliveryDetails: event.data.codeDeliveryDetails,
                        missingAttributes: event.data.missingAttributes,
                        remoteError: event.data.remoteError,
                        username: event.data.username,
                        step: event.data.step,
                        totpSecretCode: event.data.totpSecretCode,
                        unverifiedUserAttributes: event.data.unverifiedUserAttributes,
                        allowedMfaTypes: event.data.allowedMfaTypes
                    })
            }),
            applyAmplifyConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                config (context, { data: cliConfig }) {
                    // Prefer explicitly configured settings over default CLI values\
                    const { loginMechanisms = cliConfig.loginMechanisms ?? [], signUpAttributes = cliConfig.signUpAttributes ?? [], socialProviders = cliConfig.socialProviders ?? [], initialState, formFields: _formFields, passwordSettings = cliConfig.passwordFormat ?? {} } = context.config;
                    // By default, Cognito assumes `username`, so there isn't a different username attribute like `email`.
                    // We explicitly add it as a login mechanism to be consistent with Admin UI's language.
                    if (loginMechanisms.length === 0) {
                        loginMechanisms.push('username');
                    }
                    const formFields = convertFormFields(_formFields) ?? {};
                    return {
                        formFields,
                        initialState,
                        loginMechanisms,
                        passwordSettings,
                        signUpAttributes,
                        socialProviders
                    };
                }
            }),
            spawnSignInActor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                actorRef: (context, _)=>{
                    const { services } = context;
                    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInActor"])({
                        services
                    }).withContext(getActorContext(context, 'SIGN_IN'));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spawn"])(actor, {
                        name: 'signInActor'
                    });
                }
            }),
            spawnSignUpActor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                actorRef: (context, _)=>{
                    const { services } = context;
                    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$signUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signUpActor"])({
                        services
                    }).withContext(getActorContext(context, 'SIGN_UP'));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spawn"])(actor, {
                        name: 'signUpActor'
                    });
                }
            }),
            spawnForgotPasswordActor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                actorRef: (context, _)=>{
                    const { services } = context;
                    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$forgotPassword$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forgotPasswordActor"])({
                        services
                    }).withContext(getActorContext(context, 'FORGOT_PASSWORD'));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spawn"])(actor, {
                        name: 'forgotPasswordActor'
                    });
                }
            }),
            spawnVerifyUserAttributesActor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                actorRef: (context)=>{
                    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$verifyUserAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyUserAttributesActor"])().withContext(getActorContext(context));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spawn"])(actor, {
                        name: 'verifyUserAttributesActor'
                    });
                }
            }),
            spawnSignOutActor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                actorRef: (context)=>{
                    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$actors$2f$signOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOutActor"])().withContext({
                        user: context?.user
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$interpreter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spawn"])(actor, {
                        name: 'signOutActor'
                    });
                }
            }),
            configure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])((_, event)=>{
                const { services: customServices, ...config } = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(overrideConfigServices) ? overrideConfigServices : event.data ?? {};
                return {
                    services: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$defaultServices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServices"],
                        ...customServices
                    },
                    config
                };
            }),
            setHasSetup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$4$2e$38$2e$3$2f$node_modules$2f$xstate$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assign"])({
                hasSetup: true
            })
        },
        guards: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$machines$2f$authenticator$2f$guards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            hasActor: ({ actorRef })=>!!actorRef,
            isInitialStateSignUp: ({ config })=>config.initialState === 'signUp',
            isInitialStateResetPassword: ({ config })=>config.initialState === 'forgotPassword',
            shouldSetup: ({ hasSetup })=>!hasSetup,
            hasUser: ({ user })=>{
                return !!user;
            }
        },
        services: {
            getAmplifyConfig: ({ services })=>services.getAmplifyConfig(),
            handleGetCurrentUser: ({ services })=>services.getCurrentUser()
        }
    });
}
function convertFormFields(formFields) {
    if (formFields) {
        Object.keys(formFields).forEach((component)=>{
            Object.keys(formFields[component]).forEach((inputName)=>{
                let ff = formFields[component][inputName];
                ff.required = ff.isRequired;
            });
        });
    }
    return formFields;
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/defaultAuthHubHandler.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultAuthHubHandler": (()=>defaultAuthHubHandler),
    "listenToAuthHub": (()=>listenToAuthHub)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/types/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Handles Amplify JS Auth hub events, by forwarding hub events as appropriate
 * xstate events.
 */ const defaultAuthHubHandler = ({ payload }, service, options)=>{
    const { data, event } = payload;
    const { send } = service;
    const { onSignIn, onSignOut } = options ?? {};
    switch(event){
        case 'signedIn':
            {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(onSignIn)) {
                    onSignIn(payload);
                }
                break;
            }
        case 'signInWithRedirect':
            {
                send('SIGN_IN_WITH_REDIRECT');
                break;
            }
        case 'signedOut':
            {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(onSignOut)) {
                    onSignOut();
                }
                send('SIGN_OUT');
                break;
            }
        case 'tokenRefresh_failure':
            {
                if (data?.error?.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$types$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmplifyErrorCode"].NetworkError) {
                    return;
                }
                send('SIGN_OUT');
                break;
            }
    }
};
/**
 * Listens to external auth Hub events and sends corresponding event to
 * the `service.send` of interest
 *
 * @param service - contains state machine `send` function
 * @param handler - auth event handler
 * @returns function that unsubscribes to the hub evenmt
 */ const listenToAuthHub = (service, handler = defaultAuthHubHandler)=>{
    const eventHandler = (data)=>handler(data, service);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Hub$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hub"].listen('auth', eventHandler, 'authenticator-hub-handler');
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/actor.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * This file contains helpers that lets you easily access current actor's state
 * and context.
 */ /**
 * Get the state of current actor. This is useful for checking which screen
 * to render: e.g. `getActorState(state).matches('confirmSignUp.edit').
 */ __turbopack_context__.s({
    "getActorContext": (()=>getActorContext),
    "getActorState": (()=>getActorState)
});
const getActorState = (state)=>{
    return state.context.actorRef?.getSnapshot();
};
/**
 * Get the context of current actor. Useful for getting any nested context
 * like remoteError.
 */ const getActorContext = (state)=>{
    return getActorState(state)?.context;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/getRoute.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRoute": (()=>getRoute)
});
const getRoute = (state, actorState)=>{
    // 'federatedSignIn' exists as a state on both the 'signInActor' and 'signUpActor',
    // match against the `actorState` initially to determine if the federated sign in flow
    // has begun, then which actor has begun the flow and return the corresponding `route`
    if (actorState?.matches('federatedSignIn')) {
        if (state.matches('signUpActor')) {
            return 'signUp';
        }
        if (state.matches('signInActor')) {
            return 'signIn';
        }
    }
    switch(true){
        case state.matches('idle'):
            return 'idle';
        case state.matches('setup'):
            return 'setup';
        case state.matches('signOut'):
            return 'signOut';
        case state.matches('authenticated'):
            return 'authenticated';
        case actorState?.matches('confirmSignUp'):
        case actorState?.matches('resendSignUpCode'):
            return 'confirmSignUp';
        case actorState?.matches('confirmSignIn'):
            return 'confirmSignIn';
        case actorState?.matches('setupTotp.edit'):
        case actorState?.matches('setupTotp.submit'):
            return 'setupTotp';
        case actorState?.matches('signIn'):
            return 'signIn';
        case actorState?.matches('signUp'):
        case actorState?.matches('autoSignIn'):
            return 'signUp';
        case actorState?.matches('forceChangePassword'):
            return 'forceNewPassword';
        case actorState?.matches('forgotPassword'):
            return 'forgotPassword';
        case actorState?.matches('confirmResetPassword'):
            return 'confirmResetPassword';
        case actorState?.matches('selectUserAttributes'):
            return 'verifyUser';
        case actorState?.matches('confirmVerifyUserAttribute'):
            return 'confirmVerifyUser';
        case actorState?.matches('setupEmail'):
            return 'setupEmail';
        case actorState?.matches('selectMfaType'):
            return 'selectMfaType';
        case state.matches('getCurrentUser'):
        case actorState?.matches('fetchUserAttributes'):
            /**
             * This route is needed for autoSignIn to capture both the
             * autoSignIn.pending and the resolved states when the
             * signIn actor is running.
             */ return 'transition';
        default:
            return null;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/facade.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNextServiceContextFacade": (()=>getNextServiceContextFacade),
    "getNextServiceFacade": (()=>getNextServiceFacade),
    "getSendEventAliases": (()=>getSendEventAliases),
    "getServiceContextFacade": (()=>getServiceContextFacade),
    "getServiceFacade": (()=>getServiceFacade)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/actor.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$getRoute$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/getRoute.mjs [app-ssr] (ecmascript)");
;
;
;
/**
 * This file contains helpers that translates xstate internals to more
 * understandable authenticator contexts. We provide these contexts with
 * `useAuthenticator` hook/composable/service.
 */ /**
 * Creates public facing auth helpers that abstracts out xstate implementation
 * detail. Each framework implementation can export these helpers so that
 * developers can send events without having to learn internals.
 *
 * ```
 * const [state, send] = useActor(...);
 * const { submit } = getSendEventAliases(send);
 * submit({ username, password})
 * ```
 */ const getSendEventAliases = (send)=>{
    const sendToMachine = (type)=>{
        // TODO If these were created during the creation of the machine & provider,
        // then invalid transitions could be caught via https://xstate.js.org/docs/guides/states.html#state-can-event
        return (data)=>send({
                type,
                data
            });
    };
    return {
        initializeMachine: sendToMachine('INIT'),
        resendCode: sendToMachine('RESEND'),
        signOut: sendToMachine('SIGN_OUT'),
        submitForm: sendToMachine('SUBMIT'),
        updateForm: sendToMachine('CHANGE'),
        updateBlur: sendToMachine('BLUR'),
        // Actions that don't immediately invoke a service but instead transition to a screen
        // are prefixed with `to*`
        toFederatedSignIn: sendToMachine('FEDERATED_SIGN_IN'),
        toForgotPassword: sendToMachine('FORGOT_PASSWORD'),
        toSignIn: sendToMachine('SIGN_IN'),
        toSignUp: sendToMachine('SIGN_UP'),
        skipVerification: sendToMachine('SKIP')
    };
};
const getNextSendEventAliases = (send)=>{
    const { toFederatedSignIn, submitForm, resendCode, skipVerification } = getSendEventAliases(send);
    return {
        handleSubmit: submitForm,
        resendConfirmationCode: resendCode,
        // manual "route" navigation
        setRoute: (route)=>send({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAVIGABLE_ROUTE_EVENT"][route]
            }),
        skipAttributeVerification: skipVerification,
        toFederatedSignIn
    };
};
const getServiceContextFacade = (state)=>{
    const actorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorContext"])(state) ?? {};
    const { allowedMfaTypes, challengeName, codeDeliveryDetails, remoteError: error, validationError: validationErrors, totpSecretCode = null, unverifiedUserAttributes, username } = actorContext;
    const { socialProviders = [] } = state.context?.config ?? {};
    // check for user in actorContext prior to state context. actorContext is more "up to date",
    // but is not available on all states
    const user = actorContext?.user ?? state.context?.user;
    const hasValidationErrors = !!(validationErrors && Object.keys(validationErrors).length > 0);
    const actorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorState"])(state);
    const isPending = state.hasTag('pending') || actorState?.hasTag('pending');
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$getRoute$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoute"])(state, actorState);
    // Auth status represents the current state of the auth flow
    // The `configuring` state is used to indicate when the xState machine is loading
    const authStatus = ((route)=>{
        switch(route){
            case 'idle':
            case 'setup':
                return 'configuring';
            case 'authenticated':
                return 'authenticated';
            default:
                return 'unauthenticated';
        }
    })(route);
    const facade = {
        allowedMfaTypes,
        authStatus,
        challengeName,
        codeDeliveryDetails,
        error,
        hasValidationErrors,
        isPending,
        route,
        socialProviders,
        totpSecretCode,
        unverifiedUserAttributes,
        user,
        username,
        validationErrors
    };
    return facade;
};
const getNextServiceContextFacade = (state)=>{
    const actorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorContext"])(state) ?? {};
    const { allowedMfaTypes, challengeName, codeDeliveryDetails, remoteError: errorMessage, totpSecretCode, unverifiedUserAttributes, username } = actorContext;
    const { socialProviders: federatedProviders, loginMechanisms } = state.context?.config ?? {};
    const loginMechanism = loginMechanisms?.[0];
    const actorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorState"])(state);
    const isPending = state.hasTag('pending') || actorState?.hasTag('pending');
    // @todo-migration remove this cast for Authenticator.Next
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$getRoute$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoute"])(state, actorState);
    return {
        allowedMfaTypes,
        challengeName,
        codeDeliveryDetails,
        errorMessage,
        federatedProviders,
        isPending,
        loginMechanism,
        route,
        totpSecretCode,
        unverifiedUserAttributes,
        username
    };
};
const getServiceFacade = ({ send, state })=>{
    const sendEventAliases = getSendEventAliases(send);
    const serviceContext = getServiceContextFacade(state);
    return {
        ...sendEventAliases,
        ...serviceContext
    };
};
const getNextServiceFacade = ({ send, state })=>({
        ...getNextSendEventAliases(send),
        ...getNextServiceContextFacade(state)
    });
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/authenticator/attributes.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** Array of auth fields that we supply defaults with */ __turbopack_context__.s({
    "LoginMechanismArray": (()=>LoginMechanismArray),
    "authFieldsWithDefaults": (()=>authFieldsWithDefaults),
    "isAuthFieldsWithDefaults": (()=>isAuthFieldsWithDefaults),
    "signUpFieldsWithDefault": (()=>signUpFieldsWithDefault),
    "signUpFieldsWithoutDefault": (()=>signUpFieldsWithoutDefault)
});
const signUpFieldsWithDefault = [
    'birthdate',
    'email',
    'family_name',
    'given_name',
    'middle_name',
    'name',
    'nickname',
    'phone_number',
    'preferred_username',
    'profile',
    'website'
];
/** Array of auth fields that we do not supply defaults with */ const signUpFieldsWithoutDefault = [
    'address',
    'gender',
    'locale',
    'picture',
    'updated_at',
    'zoneinfo'
];
/** Array of known login mechanisms */ const LoginMechanismArray = [
    'username',
    'email',
    'phone_number'
];
const authFieldsWithDefaults = [
    ...LoginMechanismArray,
    ...signUpFieldsWithDefault,
    'confirmation_code',
    'password',
    'confirm_password'
];
const isAuthFieldsWithDefaults = (field)=>{
    return authFieldsWithDefaults.includes(field);
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/form.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getErrors": (()=>getErrors),
    "getFormDataFromEvent": (()=>getFormDataFromEvent),
    "isAuthFieldWithDefaults": (()=>isAuthFieldWithDefaults),
    "setFormOrder": (()=>setFormOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$attributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/authenticator/attributes.mjs [app-ssr] (ecmascript)");
;
;
const getFormDataFromEvent = (event)=>{
    const formData = new FormData(event.target);
    return Object.fromEntries(formData);
};
const setFormOrder = (formOverrides, fieldNames)=>{
    let orderedKeys = [];
    if (formOverrides) {
        orderedKeys = Object.keys(formOverrides).reduce((prev, key)=>{
            // reduce to array that can be sorted
            prev.push([
                key,
                formOverrides[key]?.order
            ]);
            return prev;
        }, []).sort((a, b)=>//sort them based on order
            a[1] - b[1]) // returned just key
        .filter((a)=>a[1] !== undefined).map((a)=>a[0]);
    }
    // remove duplicates
    return Array.from(new Set([
        ...orderedKeys,
        ...fieldNames
    ]));
};
const isAuthFieldWithDefaults = (field)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$attributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authFieldsWithDefaults"].includes(field);
};
const isArray = (val)=>{
    return Array.isArray(val);
};
const getErrors = (errors)=>{
    if (!errors) return null;
    if (isArray(errors)) {
        return errors;
    } else {
        return [
            errors
        ];
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/de.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deDict": (()=>deDict)
});
const deDict = {
    'Account recovery requires verified contact information': 'Zurücksetzen des Accounts benötigt einen verifizierten Account',
    'Add your Profile': 'Ihr Profil hinzufügen',
    'Add your Website': 'Ihre Website hinzufügen',
    'Authenticator App (TOTP)': 'Authentifikator-App (TOTP)',
    'Back to Sign In': 'Zurück zur Anmeldung',
    'Change Password': 'Passwort ändern',
    Changing: 'Ändern von',
    Code: 'Code',
    'Confirm Email Code': 'E-Mail-Code bestätigen',
    'Confirm Password': 'Passwort bestätigen',
    'Please confirm your Password': 'Bitte bestätigen Sie Ihr Passwort',
    'Confirm Sign Up': 'Registrierung bestätigen',
    'Confirm SMS Code': 'SMS-Code bestätigen',
    'Confirm TOTP Code': 'TOTP-Code bestätigen',
    Confirm: 'Bestätigen',
    'Confirmation Code': 'Bestätigungs-Code',
    Confirming: 'Wird bestätigt',
    'Create a new account': 'Einen neuen Account erstellen',
    'Create Account': 'Account erstellen',
    'Creating Account': 'Account wird erstellt',
    'Dismiss alert': 'Warnung verwerfen',
    Email: 'E-Mail',
    'Email Message': 'E-Mail-Nachricht',
    'Enter your Birthdate': 'Geben Sie Ihr Geburtsdatum ein',
    'Enter your code': 'Geben Sie Ihren Code ein',
    'Enter your Confirmation Code': 'Geben Sie Ihren Bestätigungs-Code ein',
    'Enter your Email': 'Geben Sie Ihre E-Mail ein',
    'Enter your Family Name': 'Geben Sie Ihren Nachnamen ein',
    'Enter your Given Name': 'Geben Sie Ihren Vornamen ein',
    'Enter your Middle Name': 'Geben Sie Ihren zweiten Vornamen ein',
    'Enter your Name': 'Geben Sie Ihren Namen ein',
    'Enter your Nickname': 'Geben Sie Ihren Spitznamen ein',
    'Enter your Password': 'Geben Sie Ihr Passwort ein',
    'Enter your password': 'Geben Sie Ihr Passwort ein',
    'Enter your email': 'Geben Sie Ihre E-Mail ein',
    'Enter your phone number': 'Geben Sie Ihre Telefonnummer ein',
    'Enter your Preferred Username': 'Geben Sie Ihren bevorzugten Benutzernamen ein',
    'Enter your username': 'Geben Sie Ihren Benutzernamen ein',
    'Forgot password?': 'Passwort vergessen?',
    'Forgot your password?': 'Passwort vergessen? ',
    'Hide password': 'Passwort verbergen',
    'It may take a minute to arrive': 'Es kann eine Minute dauern, bis er ankommt',
    Loading: 'Wird geladen',
    'Multi-Factor Authentication': 'Multifaktor-Authentifizierung',
    'Multi-Factor Authentication Setup': 'Einrichtung der Multifaktor-Authentifizierung',
    'New password': 'Neues Passwort',
    or: 'oder',
    Password: 'Passwort',
    'Phone Number': 'Telefonnummer',
    'Resend Code': 'Code erneut senden',
    'Reset your Password': 'Zurücksetzen des Passworts',
    'Reset your password': 'Zurücksetzen des passworts',
    'Select MFA Type': 'MFA-Typ auswählen',
    'Send code': 'Code senden',
    'Send Code': 'Code senden',
    Sending: 'Wird gesendet',
    'Setup Email': 'E-Mail einrichten',
    'Setup TOTP': 'TOTP einrichten',
    'Show password': 'Passwort anzeigen',
    'Sign in to your account': 'Melden Sie sich mit Ihrem Account an',
    'Sign In with Amazon': 'Mit Amazon anmelden',
    'Sign In with Apple': 'Mit Apple anmelden',
    'Sign In with Facebook': 'Mit Facebook anmelden',
    'Sign In with Google': 'Mit Google anmelden',
    'Sign in': 'Anmelden',
    'Sign In': 'Anmelden',
    'Signing in': 'Wird angemeldet',
    Skip: 'Überspringen',
    Submit: 'Abschicken',
    Submitting: 'Wird gesendet',
    'Text Message (SMS)': 'Textnachricht (SMS)',
    Username: 'Benutzername',
    'Verify Contact': 'Kontakt verifizieren',
    Verify: 'Verifizieren',
    'We Emailed You': 'E-Mail wurde versendet',
    'We Sent A Code': 'Wir haben einen Code gesendet',
    'We Texted You': 'Wir haben Ihnen eine SMS gesendet',
    'Your code is on the way. To log in, enter the code we emailed to': 'Ihr Bestätigungscode ist unterwegs. Um sich einzuloggen geben Sie den Code ein, den wir per E-Mail verschickt haben',
    'Your code is on the way. To log in, enter the code we sent you': 'Ihr Code ist unterwegs. Um sich anzumelden, geben Sie den Code ein, den wir Ihnen gesendet haben',
    'Your code is on the way. To log in, enter the code we texted to': 'Ihr Bestätigungscode ist unterwegs. Um sich einzuloggen geben Sie den Code ein, den wir per SMS verschickt haben',
    // Additional translations provided by customers
    'An account with the given email already exists.': 'Ein Account mit dieser E-Mail existiert bereits.',
    'Confirm a Code': 'Code bestätigen',
    'Confirm Sign In': 'Anmeldung bestätigen',
    'Create account': 'Hier registrieren',
    'Sign Up with Facebook': 'Mit Facebook registrieren',
    'Sign Up with Google': 'Mit Google registrieren',
    'Forgot Password': 'Passwort vergessen',
    'Have an account? ': 'Schon registriert? ',
    'Incorrect username or password': 'Falscher Benutzername oder falsches Passwort',
    'Invalid password format': 'Ungültiges Passwort-Format',
    'Invalid phone number format': `Ungültiges Telefonummern-Format. Benutze eine Nummer im Format: +12345678900`,
    'It may take a minute to arrive.': 'Es könnte eine Minute dauern, bis der Code eintrifft.',
    'Lost your code? ': 'Code verloren? ',
    'New Password': 'Neues Passwort',
    'No account? ': 'Kein Account? ',
    'Password attempts exceeded': 'Die maximale Anzahl der fehlerhaften Anmeldeversuche wurde erreicht',
    'Reset password': 'Passwort zurücksetzen',
    'Reset Password': 'Passwort Zurücksetzen',
    'Sign Out': 'Abmelden',
    'Sign Up': 'Registrieren',
    'User already exists': 'Dieser Benutzer existiert bereits',
    'User does not exist': 'Dieser Benutzer existiert nicht',
    'Username cannot be empty': 'Benutzername darf nicht leer sein'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/en.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "enDict": (()=>enDict)
});
const enDict = {
    'Account recovery requires verified contact information': 'Account recovery requires verified contact information',
    'Add your Profile': 'Add your Profile',
    'Add your Website': 'Add your Website',
    'Authenticator App (TOTP)': 'Authenticator App (TOTP)',
    'Back to Sign In': 'Back to Sign In',
    'Change Password': 'Change Password',
    Changing: 'Changing',
    Code: 'Code',
    'Confirm Email Code': 'Confirm Email Code',
    'Confirm Password': 'Confirm Password',
    'Confirm Sign Up': 'Confirm Sign Up',
    'Confirm SMS Code': 'Confirm SMS Code',
    'Confirm MFA Code': 'Confirm MFA Code',
    'Confirm TOTP Code': 'Confirm TOTP Code',
    Confirm: 'Confirm',
    'Confirmation Code': 'Confirmation Code',
    Confirming: 'Confirming',
    'Create a new account': 'Create a new account',
    'Create Account': 'Create Account',
    'Creating Account': 'Creating Account',
    'Dismiss alert': 'Dismiss alert',
    Email: 'Email',
    'Email Message': 'Email Message',
    'Enter your Birthdate': 'Enter your Birthdate',
    'Enter your code': 'Enter your code',
    'Enter your Confirmation Code': 'Enter your Confirmation Code',
    'Enter your Email': 'Enter your Email',
    'Enter your Family Name': 'Enter your Family Name',
    'Enter your Given Name': 'Enter your Given Name',
    'Enter your Middle Name': 'Enter your Middle Name',
    'Enter your Name': 'Enter your Name',
    'Enter your Nickname': 'Enter your Nickname',
    'Enter your Password': 'Enter your Password',
    'Enter your phone number': 'Enter your phone number',
    'Enter your Preferred Username': 'Enter your Preferred Username',
    'Enter your username': 'Enter your username',
    'Forgot password?': 'Forgot password?',
    'Forgot your password?': 'Forgot your password?',
    'Hide password': 'Hide password',
    'It may take a minute to arrive': 'It may take a minute to arrive',
    Loading: 'Loading',
    'Multi-Factor Authentication': 'Multi-Factor Authentication',
    'Multi-Factor Authentication Setup': 'Multi-Factor Authentication Setup',
    'New password': 'New password',
    or: 'or',
    Password: 'Password',
    'Phone Number': 'Phone Number',
    'Please confirm your Password': 'Please confirm your Password',
    'Resend Code': 'Resend Code',
    'Reset your password': 'Reset your password',
    'Reset your Password': 'Reset your Password',
    'Select MFA Type': 'Select MFA Type',
    'Send code': 'Send code',
    'Send Code': 'Send Code',
    Sending: 'Sending',
    'Setup Email': 'Setup Email',
    'Setup TOTP': 'Setup TOTP',
    'Show password': 'Show password',
    'Sign in to your account': 'Sign in to your account',
    'Sign In with Amazon': 'Sign In with Amazon',
    'Sign In with Apple': 'Sign In with Apple',
    'Sign In with Facebook': 'Sign In with Facebook',
    'Sign In with Google': 'Sign In with Google',
    'Sign in': 'Sign in',
    'Sign In': 'Sign In',
    'Signing in': 'Signing in',
    Skip: 'Skip',
    Submit: 'Submit',
    Submitting: 'Submitting',
    'Text Message (SMS)': 'Text Message (SMS)',
    Username: 'Username',
    'Verify Contact': 'Verify Contact',
    Verify: 'Verify',
    'We Emailed You': 'We Emailed You',
    'We Sent A Code': 'We Sent A Code',
    'We Texted You': 'We Texted You',
    'Your code is on the way. To log in, enter the code we emailed to': 'Your code is on the way. To log in, enter the code we emailed to',
    'Your code is on the way. To log in, enter the code we sent you': 'Your code is on the way. To log in, enter the code we sent you',
    'Your code is on the way. To log in, enter the code we texted to': 'Your code is on the way. To log in, enter the code we texted to'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/es.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "esDict": (()=>esDict)
});
const esDict = {
    'Account recovery requires verified contact information': 'La recuperación de la cuenta requiere información de contacto verificada',
    'Authenticator App (TOTP)': 'Aplicación de autenticación (TOTP)',
    'Back to Sign In': 'Volver a inicio de sesión',
    'Change Password': 'Cambiar contraseña',
    Changing: 'Cambiando',
    Code: 'Código',
    'Code *': 'Código *',
    'Confirm Email Code': 'Confirmar el código de correo electrónico',
    'Confirm Password': 'Confirmar contraseña',
    'Confirm Sign Up': 'Confirmar registro',
    'Confirm SMS Code': 'Confirmar el código de SMS',
    'Confirm TOTP Code': 'Confirmar código TOTP',
    Confirm: 'Confirmar',
    'Confirmation Code': 'Código de confirmación',
    Confirming: 'Confirmando',
    'Create a new account': 'Crear una cuenta nueva',
    'Create Account': 'Crear cuenta',
    'Creating Account': 'Creando cuenta',
    'Dismiss alert': 'Descartar alerta',
    Email: 'Email',
    'Email Message': 'Mensaje de correo electrónico',
    'Enter your code': 'Ingrese el código',
    'Enter your Email': 'Escriba su Email',
    'Enter your email': 'Escriba su email',
    'Enter your Password': 'Escriba su Contraseña',
    'Enter your phone number': 'Ingrese el número de teléfono',
    'Enter your username': 'Ingrese el nombre de usuario',
    'Forgot your password?': '¿Olvidó su contraseña?',
    'Hide password': 'Ocultar contraseña',
    'It may take a minute to arrive': 'Es posible que tarde un minuto en llegar',
    Loading: 'Cargando',
    'Multi-Factor Authentication': 'Autenticación multifactor',
    'Multi-Factor Authentication Setup': 'Configuración de autenticación multifactor',
    'New password': 'Nueva contraseña',
    or: 'o',
    Password: 'Contraseña',
    'Phone Number': 'Número de teléfono',
    'Resend Code': 'Reenviar código',
    'Reset your password': 'Restablecer su contraseña',
    'Reset your Password': 'Restablecer su Contraseña',
    'Select MFA Type': 'Seleccionar el tipo de MFA',
    'Send code': 'Enviar código',
    'Send Code': 'Enviar código',
    Sending: 'Enviando',
    'Setup Email': 'Configurar correo electrónico',
    'Setup TOTP': 'Configurar TOTP',
    'Show password': 'Mostrar contraseña',
    'Sign in to your account': 'Iniciar sesión en tu cuenta',
    'Sign In with Amazon': 'Iniciar Sesión con Amazon',
    'Sign In with Apple': 'Iniciar Sesión con Apple',
    'Sign In with Facebook': 'Iniciar Sesión con Facebook',
    'Sign In with Google': 'Iniciar Sesión con Google',
    'Sign in': 'Iniciar sesión',
    'Sign In': 'Iniciar Sesión',
    'Signing in': 'Iniciando sesión',
    Skip: 'Omitir',
    Submit: 'Enviar',
    Submitting: 'Enviando',
    'Text Message (SMS)': 'Mensaje de texto (SMS)',
    Username: 'Nombre de usuario',
    'Verify Contact': 'Verificar contacto',
    Verify: 'Verificar',
    'We Emailed You': 'Le hemos enviado un correo electrónico',
    'We Sent A Code': 'Hemos enviado un código',
    'We Texted You': 'Le hemos enviado un mensaje de texto',
    'Your code is on the way. To log in, enter the code we emailed to': 'El código está en camino. Para iniciar sesión, escriba el código que hemos enviado por correo electrónico a',
    'Your code is on the way. To log in, enter the code we sent you': 'El código está en camino. Para iniciar sesión, escriba el código que le hemos enviado',
    'Your code is on the way. To log in, enter the code we texted to': 'El código está en camino. Para iniciar sesión, escriba el código que hemos enviado por mensaje de texto a',
    // Additional translations provided by customers
    'An account with the given email already exists.': 'Ya existe una cuenta con el correo ingresado.',
    'Confirm a Code': 'Confirmar un código',
    'Confirm Sign In': 'Confirmar inicio de sesión',
    'Forgot Password': 'Olvidé mi contraseña',
    'Incorrect username or password.': 'Nombre de usuario o contraseña incorrecta',
    'Enter your Family Name': 'Escriba su apellido',
    'Enter your Given Name': 'Escriba su nombre',
    'Given Name': 'Nombre',
    'Family Name': 'Apellido',
    'Reset Password': 'Restablecer contraseña',
    'Please confirm your Password': 'Confirme su contraseña',
    'Invalid password format': 'Formato de contraseña inválido',
    'Invalid phone number format': 'Formato de número de teléfono inválido',
    'Loading...': 'Cargando...',
    'New Password': 'Nueva contraseña',
    'Resend a Code': 'Reenviar un código',
    'Sign Out': 'Cerrar sesión',
    'Sign Up with Amazon': 'Crear cuenta con Amazon',
    'Sign Up with Apple': 'Crear cuenta con Apple',
    'Sign Up with Facebook': 'Crear cuenta con Facebook',
    'Sign Up with Google': 'Crear cuenta con Google',
    'Sign Up': 'Crear cuenta',
    'User already exists': 'El usuario ya existe',
    'User does not exist': 'El usuario no existe',
    'Username/client id combination not found.': 'El usuario no existe',
    'Username cannot be empty': 'El nombre de usuario no puede estar vacío',
    'Your passwords must match': 'Las contraseñas deben coincidir',
    'Password must have at least 8 characters': 'La contraseña debe tener al menos 8 caracteres',
    'Password did not conform with policy: Password must have uppercase characters': 'La contraseña debe tener al menos un carácter en mayúscula',
    'Password did not conform with policy: Password must have numeric characters': 'La contraseña debe tener al menos un carácter numérico',
    'Password did not conform with policy: Password must have symbol characters': 'La contraseña debe tener al menos un símbolo',
    'Password did not conform with policy: Password must have lowercase characters': 'La contraseña debe tener al menos un carácter en minúsculas',
    'Invalid verification code provided, please try again.': 'Código de verificación no válido, inténtelo de nuevo.',
    'Attempt limit exceeded, please try after some time.': 'Número máximo de intentos excedido, por favor inténtelo de nuevo más tarde.',
    'A network error has occurred.': 'Se ha producido un error de red.'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/fr.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "frDict": (()=>frDict)
});
const frDict = {
    'Account recovery requires verified contact information': 'La récupération du compte nécessite des informations de contact vérifiées',
    'Authenticator App (TOTP)': 'Application d’authentification (TOTP)',
    'Back to Sign In': 'Retour à la connexion',
    'Change Password': 'Modifier le mot de passe',
    Changing: 'Modification en cours',
    Code: 'Code',
    'Confirm Email Code': 'Confirmer le code e-mail',
    'Confirm Password': 'Confirmez le mot de passe',
    'Confirm Sign Up': "Confirmer l'inscription",
    'Confirm SMS Code': 'Confirmer le code SMS',
    'Confirm TOTP Code': 'Confirmer le code TOTP',
    Confirm: 'Confirmer',
    'Confirmation Code': 'Code de confirmation',
    Confirming: 'Confirmation',
    'Create a new account': 'Créer un nouveau compte',
    'Create Account': 'Créer un compte',
    'Creating Account': `Création d'un compte`,
    'Dismiss alert': `Supprimer l'alerte`,
    Email: 'Email',
    'Email Message': 'Message de l’e-mail',
    'Enter your code': 'Saisissez cotre code de confirmation',
    'Enter your Email': 'Saisissez votre adresse e-mail',
    'Enter your email': 'Saisissez votre adresse e-mail',
    'Enter your phone number': 'Saisissez votre numéro de téléphone',
    'Enter your username': "Saisissez votre nom d'utilisateur",
    'Forgot your password?': 'Mot de passe oublié ? ',
    'Hide password': 'Masquer le mot de passe',
    'It may take a minute to arrive': 'Cela peut prendre une minute',
    Loading: 'Chargement en cours',
    'Multi-Factor Authentication': 'Authentification multifactorielle',
    'Multi-Factor Authentication Setup': 'Configuration de l’authentification multifactorielle',
    'New password': 'Nouveau mot de passe',
    or: 'ou',
    Password: 'Mot de passe',
    'Phone Number': 'Numéro de téléphone',
    'Resend Code': 'Renvoyer le code',
    'Reset your Password': 'Réinitialiser votre mot de passe',
    'Reset your password': 'Réinitialisez votre mot de passe',
    'Select MFA Type': 'Sélectionner le type de MFA',
    'Send code': 'Envoyer le code',
    'Send Code': "M'envoyer un code",
    Sending: 'Envoi en cours',
    'Setup Email': 'E-mail de configuration',
    'Setup TOTP': 'Configuration de TOTP',
    'Show password': 'Afficher le mot de passe',
    'Sign in to your account': 'Connexion à votre compte',
    'Sign In with Amazon': 'Se connecter avec Amazon',
    'Sign In with Apple': 'Se connecter avec Apple',
    'Sign In with Facebook': 'Se connecter avec Facebook',
    'Sign In with Google': 'Se connecter avec Google',
    'Sign in': 'Se connecter',
    'Sign In': 'Se connecter',
    'Signing in': 'Connexion en cours',
    Skip: 'Passer',
    Submit: 'Soumettre',
    Submitting: 'Envoi en cours',
    'Text Message (SMS)': 'Message texte (SMS)',
    Username: "Nom d'utilisateur",
    'Verify Contact': 'Vérifier le contact',
    Verify: 'Vérifier',
    'We Sent A Code': 'Nous avons envoyé un code',
    'We Texted You': 'Nous vous avons envoyé un SMS',
    'Your code is on the way. To log in, enter the code we sent you': `Votre code est en cours d'envoi. Pour vous connecter, saisissez le code que nous vous avons envoyé`,
    // Additional translations provided by customers
    'Add your Profile': 'Ajoutez votre profil',
    'Add your Website': 'Ajoutez votre site web',
    'An account with the given email already exists.': 'Un utilisateur avec cette adresse email existe déjà.',
    Birthdate: 'Date de naissance',
    Change: 'Modifier',
    'Confirm a Code': 'Confirmer un code',
    'Confirm Sign In': 'Confirmer la connexion',
    'Create account': 'Créer un compte',
    'Enter your Birthdate': 'Saisissez votre date de naissance',
    'Enter your Confirmation Code': 'Saisissez votre code de confirmation',
    'Enter your Family Name': 'Saisissez votre nom de famille',
    'Enter your Given Name': 'Saisissez votre prénom',
    'Enter your Middle Name': 'Saisissez votre deuxième prénom',
    'Enter your Name': 'Saisissez votre nom',
    'Enter your Nickname': 'Saisissez votre surnom',
    'Enter your Password': 'Saisissez votre mot de passe',
    'Enter your Phone Number': 'Saisissez votre numéro de téléphone',
    'Enter your Preferred Username': "Saisissez votre nom d'utilisateur",
    'Enter your password': 'Saisissez votre mot de passe',
    'Given Name': 'Prénom',
    'Family Name': 'Nom de famille',
    'Forgot Password': 'Mot de passe oublié',
    'Forgot Password?': 'Mot de passe oublié ?',
    'Incorrect username or password.': 'Identifiant ou mot de passe incorrect.',
    'Have an account? ': 'Déjà un compte ? ',
    Hello: 'Bonjour',
    'Incorrect username or password': 'Identifiant ou mot de passe incorrect',
    'Invalid password format': 'Format de mot de passe invalide',
    'Invalid phone number format': `Format de numéro de téléphone invalide. Veuillez utiliser un format +12345678900`,
    'Loading...': 'Chargement...',
    'Lost your code? ': 'Vous avez perdu votre code ? ',
    'Network error': 'Erreur réseau',
    'New Password': 'Nouveau mot de passe',
    Name: 'Nom',
    'No account? ': 'Pas de compte ? ',
    'Please confirm your Password': 'Confirmez votre mot de passe',
    'Preferred Username': "Nom d'utilisateur préféré",
    Profile: 'Profil',
    'Resend a Code': 'Renvoyer un code',
    'Reset password': 'Réinitialiser le mot de passe',
    'Reset Password': 'Réinitialiser le mot de passe',
    Send: 'Envoyer',
    'Sign In with AWS': 'Se connecter avec AWS',
    'Sign Out': 'Déconnexion',
    'Sign Up': "S'inscrire",
    SMS: 'SMS',
    'User already exists': "L'utilisateur existe déjà",
    'User does not exist': "L'utilisateur n'existe pas",
    'Username cannot be empty': "Le nom d'utilisateur doit être renseigné",
    'Username/client id combination not found.': "L'utilisateur n'existe pas",
    'We Emailed You': 'Nous vous avons envoyé un code',
    'Your code is on the way. To log in, enter the code we emailed to': 'Votre code est en route. Pour vous connecter entrez le code reçu sur cette adresse email',
    'Your code is on the way. To log in, enter the code we texted to': 'Votre code est en route. Pour vous connecter entrez le code reçu sur ce numéro de téléphone',
    'Your passwords must match': 'Vos mots de passe doivent être identiques',
    'It may take a minute to arrive.': 'Cela peut prendre quelques minutes.',
    Website: 'Site web',
    'Password must have at least 8 characters': 'Le mot de passe doit comporter au moins 8 caractères',
    'Password did not conform with policy: Password must have uppercase characters': 'Le mot de passe doit comporter des caractères majuscules',
    'Password did not conform with policy: Password must have numeric characters': 'Le mot de passe doit comporter des caractères numériques',
    'Password did not conform with policy: Password must have symbol characters': 'Le mot de passe doit comporter des symboles',
    'Password did not conform with policy: Password must have lowercase characters': 'Le mot de passe doit comporter des caractères minuscules',
    'Invalid verification code provided, please try again.': 'Code de vérification invalide, veuillez réessayer.',
    'Attempt limit exceeded, please try after some time.': 'Nombre maximum de tentatives dépassé, veuillez réessayer plus tard.',
    'A network error has occurred.': "Une erreur de réseau s'est produite."
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/it.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "itDict": (()=>itDict)
});
const itDict = {
    'Account recovery requires verified contact information': "Il ripristino dell'account richiede informazioni di contatto verificate",
    'Authenticator App (TOTP)': 'App di autenticazione (TOTP)',
    'Back to Sign In': 'Torna alla schermata di accesso',
    'Change Password': 'Cambia la password',
    Changing: 'Modifica in corso',
    Code: 'Codice',
    'Confirm Email Code': 'Conferma codice e-mail',
    'Confirm Password': 'Conferma la password',
    'Confirm Sign Up': 'Conferma registrazione',
    'Confirm SMS Code': 'Conferma codice SMS',
    'Confirm TOTP Code': 'Conferma codice TOTP',
    Confirm: 'Conferma',
    'Confirmation Code': 'Codice di verifica',
    Confirming: 'Conferma in corso',
    'Create a new account': 'Crea un nuovo account',
    'Create Account': 'Crea Account',
    'Creating Account': 'Creazione account in corso',
    'Dismiss alert': `Ignora l'avviso`,
    Email: 'Email',
    'Email Message': 'Messaggio e-mail',
    'Enter your code': 'Inserisci il tuo codice',
    'Enter your Email': 'Inserisci la tua e-mail',
    'Enter your phone number': 'Inserisci il tuo numero di telefono"',
    'Enter your username': 'Inserisci il tuo nome utente',
    'Forgot your password?': 'Password dimenticata?',
    'Hide password': 'Nascondi password',
    'It may take a minute to arrive': "L'arrivo potrebbe richiedere qualche minuto",
    Loading: 'Caricamento in corso',
    'Multi-Factor Authentication': 'Autenticazione a più fattori',
    'Multi-Factor Authentication Setup': "Configurazione dell'autenticazione a più fattori",
    'New password': 'Nuova password',
    or: 'oppure',
    Password: 'Password',
    'Phone Number': 'Numero di telefono',
    'Resend Code': 'Invia nuovamente il codice',
    'Reset your Password': 'Reimposta la tua Password',
    'Reset your password': 'Reimposta la tua password',
    'Select MFA Type': 'Seleziona il tipo di MFA',
    'Send code': 'Invia codice',
    'Send Code': 'Invia codice',
    Sending: 'Invio in corso',
    'Setup Email': "Configura l'e-mail",
    'Setup TOTP': 'Configura TOTP',
    'Show password': 'Mostra password',
    'Sign in to your account': 'Accedi al tuo account',
    'Sign In with Amazon': 'Accedi con Amazon',
    'Sign In with Apple': 'Accedi con Apple',
    'Sign In with Facebook': 'Accedi con Facebook',
    'Sign In with Google': 'Accedi con Google',
    'Sign in': 'Accedi',
    'Sign In': 'Accedi',
    'Signing in': 'Accesso in corso',
    Skip: 'Salta',
    Submit: 'Invia',
    Submitting: 'Invio in corso',
    'Text Message (SMS)': 'Messaggio di testo (SMS)',
    Username: 'Nome utente',
    'Verify Contact': 'Verifica contatto',
    Verify: 'Verifica',
    'We Emailed You': "Ti abbiamo inviato un'e-mail",
    'We Sent A Code': 'Ti abbiamo inviato un codice',
    'We Texted You': 'Ti abbiamo inviato un SMS',
    'Your code is on the way. To log in, enter the code we emailed to': "Il codice è in arrivo. Per effettuare l'accesso, immetti il codice che ti abbiamo inviato via e-mail",
    'Your code is on the way. To log in, enter the code we sent you': 'Il codice è in arrivo. Per accedere, immetti il codice che ti abbiamo inviato',
    'Your code is on the way. To log in, enter the code we texted to': 'Il codice è in arrivo. Per accedere, immetti il codice che abbiamo inviato tramite SMS',
    // Additional translations provided by customers
    'An account with the given email already exists.': 'Questa email è già utilizzata da un altro account.',
    'Confirm a Code': 'Conferma un codice',
    'Confirm Sign In': "Conferma l'accesso",
    'Create account': 'Crea account',
    'Enter your password': 'Inserisci la tua password',
    'Forgot Password?': 'Password dimenticata?',
    'Have an account? ': 'Già registrato?',
    'Incorrect username or password': 'Nome utente o password errati',
    'Invalid password format': 'Formato della password non valido',
    'Invalid phone number format': 'Formato del numero di telefono non valido',
    'Lost your code?': 'Codice smarrito?',
    'New Password': 'Nuova password',
    'No account? ': 'Non hai un account?',
    'Password attempts exceeded': 'Il numero massimo di tentativi di accesso falliti è stato raggiunto',
    'Reset password': 'Reimposta password',
    'Sign Out': 'Esci',
    'Sign Up': 'Registrati',
    'User already exists': 'Utente già esistente',
    'User does not exist': 'Utente inesistente',
    'Username cannot be empty': 'Il nome utente non può essere vuoto'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ja.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "jaDict": (()=>jaDict)
});
const jaDict = {
    'Account recovery requires verified contact information': 'アカウントの復旧には確認済みの連絡先が必要です',
    'Authenticator App (TOTP)': '認証アプリ (TOTP)',
    'Back to Sign In': 'サインインに戻る',
    'Change Password': 'パスワードを変える ',
    Changing: '変更中',
    Code: 'コード',
    'Confirm Email Code': 'E メールコードを確認',
    'Confirm Password': 'パスワードの確認',
    'Confirm Sign Up': '登録する',
    'Confirm SMS Code': 'SMS コードを確認',
    'Confirm TOTP Code': 'TOTP コードを確認',
    Confirm: '確定',
    'Confirmation Code': '確認コード',
    Confirming: '確認中',
    'Create a new account': '新しいアカウントを作る',
    'Create Account': 'アカウントを作る',
    'Creating Account': 'アカウントの作成中',
    'Dismiss alert': 'アラートを閉じる',
    Email: 'メールアドレス',
    'Email Message': 'E メールメッセージ',
    'Enter your code': 'コードを入力',
    'Enter your Email': 'メールアドレスを入力',
    'Enter your phone number': '電話番号を入力',
    'Enter your username': 'ユーザー名を入力 ',
    'Enter your Username': 'ユーザー名を入力 ',
    'Forgot your password?': 'パスワードを忘れましたか？ ',
    'Hide password': 'パスワードを非表示',
    'It may take a minute to arrive': '到着するまでに 1 分かかることがあります',
    Loading: 'ロード中',
    'Multi-Factor Authentication': '多要素認証',
    'Multi-Factor Authentication Setup': '多要素認証のセットアップ',
    'New password': '新しいパスワード',
    or: '又は',
    Password: 'パスワード ',
    'Phone Number': '電話番号',
    'Resend Code': 'コードを再送信',
    'Reset your Password': 'パスワードをリセット',
    'Reset your password': 'パスワードをリセットする',
    'Select MFA Type': 'MFA タイプを選択',
    'Send code': 'コードを送信',
    'Send Code': 'コードを送信',
    Sending: '送信中',
    'Setup Email': 'E メールをセットアップ',
    'Setup TOTP': 'TOTP をセットアップ',
    'Show password': 'パスワードを表示',
    'Sign in to your account': 'アカウントにサインイン ',
    'Sign In with Amazon': 'Amazonでサインイン',
    'Sign In with Apple': 'Apple でサインイン',
    'Sign In with Facebook': 'Facebookでサインイン',
    'Sign In with Google': 'Googleでサインイン',
    'Sign In': 'サインイン ',
    'Sign in': 'サインイン',
    'Signing in': 'サインイン中',
    Skip: 'スキップ',
    Submit: '送信',
    Submitting: '送信中',
    'Text Message (SMS)': 'テキストメッセージ (SMS)',
    Username: 'ユーザー名 ',
    'Verify Contact': '連絡先を確認',
    Verify: '確認',
    'We Sent A Code': 'コードが送信されました',
    'We Texted You': 'テキストが送信されました',
    'Your code is on the way. To log in, enter the code we sent you': 'コードが途中です。ログインするには、送信したコードを入力してください',
    // Additional translations provided by customers
    'An account with the given email already exists.': '入力されたメールアドレスのアカウントが既に存在します',
    'Confirm a Code': 'コードを確認',
    'Confirm Sign In': 'サインインする',
    'Create account': 'アカウントを作る ',
    'Enter your password': 'パスワードを入力 ',
    'Enter your Password': 'パスワードを入力',
    'Please confirm your Password': 'パスワードを入力',
    'Forgot Password': 'パスワードを忘れた ',
    'Have an account? ': 'アカウントを持っていますか？',
    'Incorrect username or password': 'ユーザー名かパスワードが異なります ',
    'Invalid password format': 'パスワードの形式が無効です ',
    'Invalid phone number format': '不正な電話番号の形式です。\n+12345678900 の形式で入力してください',
    'It may take a minute to arrive.': 'コードを受信するまで数分かかる場合があります。',
    'Lost your code? ': 'コードを失くしましたか？',
    'New Password': '新しいパスワード',
    'No account? ': 'アカウントが無いとき ',
    'Password attempts exceeded': 'サインインの試行回数が上限に達しました',
    'Reset password': 'パスワードをリセット ',
    'Reset Password': 'パスワードをリセット',
    'Sign Out': 'サインアウト ',
    'Sign Up': '登録 ',
    'User already exists': '既にユーザーが存在しています ',
    'User does not exist': 'ユーザーが存在しません ',
    'Username cannot be empty': 'ユーザー名は入力必須です',
    'We Emailed You': 'コードを送信しました',
    'Your code is on the way. To log in, enter the code we emailed to': 'ログインするには、メールに記載されたコードを入力してください。送信先:',
    'Your code is on the way. To log in, enter the code we texted to': 'ログインするには、テキストメッセージに記載されたコードを入力してください。送信先:'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/kr.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "krDict": (()=>krDict)
});
const krDict = {
    'Account recovery requires verified contact information': '계정 복구를 위해 연락처 확인이 필요합니다',
    'Authenticator App (TOTP)': '인증 앱(TOTP)',
    'Back to Sign In': '로그인으로 돌아가기',
    'Change Password': '비밀번호 변경하기',
    Changing: '변경중',
    Code: '코드',
    'Confirm Email Code': '이메일 코드 확인',
    'Confirm Password': '비밀번호 재확인',
    'Confirm Sign Up': '회원가입 확인',
    'Confirm SMS Code': '휴대폰 본인 확인',
    'Confirm TOTP Code': 'TOTP 인증번호 확인',
    Confirm: '확인',
    'Confirmation Code': '인증번호',
    Confirming: '확인중',
    'Create a new account': '회원가입',
    'Create Account': '회원가입',
    'Creating Account': '회원가입중',
    'Dismiss alert': '알림 무시',
    Email: '이메일',
    'Email Message': '이메일 메시지',
    'Enter your Birthdate': '생년월일 입력',
    'Enter your code': '인증번호를 입력해주세요',
    'Enter your Confirmation Code': '확인 코드 입력',
    'Enter your Email': '이메일 입력',
    'Enter your Family Name': '성 입력',
    'Enter your Given Name': '사용장 이름 입력',
    'Enter your Name': '이름 입력',
    'Enter your Nickname': '닉네임 입력',
    'Enter your Password': '비밀번호 입력',
    'Enter your phone number': '전화번호 입력',
    'Enter your Preferred Username': '선호하는 아이디 입력',
    'Enter your username': '아이디를 입력해주세요',
    'Forgot password?': '비밀번호를 잊으셨나요?',
    'Hide password': '비밀번호 숨기기',
    'It may take a minute to arrive': '도착하는 데 1분 정도 걸릴 수 있습니다',
    Loading: '로딩중',
    'Multi-Factor Authentication': '다중 인증',
    'Multi-Factor Authentication Setup': '다중 인증 설정',
    'New password': '새 비밀번호',
    or: '또는',
    Password: '비밀번호',
    'Phone Number': '전화번호',
    'Please confirm your Password': '비밀번호를 확인해 주세요.',
    'Resend Code': '인증번호 재전송',
    'Reset your password': '비밀번호 재설정',
    'Reset your Password': '비밀번호 재설정',
    'Select MFA Type': 'MFA 유형 선택',
    'Send code': '인증코드 보내기',
    'Send Code': '코드 전송',
    Sending: '전송중',
    'Setup Email': '이메일 설정',
    'Setup TOTP': 'TOTP 설정하기',
    'Show password': '비밀번호 보이기',
    'Sign in to your account': '로그인',
    'Sign In with Amazon': 'Amazon 로그인',
    'Sign In with Apple': 'Apple 로그인',
    'Sign In with Facebook': 'Facebook 로그인',
    'Sign In with Google': 'Google 로그인',
    'Sign in': '로그인',
    'Sign In': '로그인',
    'Signing in': '로그인중',
    Skip: '다음에 하기',
    Submit: '확인',
    Submitting: '확인중',
    'Text Message (SMS)': '문자 메시지(SMS)',
    Username: '아이디',
    'Verify Contact': '연락처 확인',
    Verify: '인증',
    'We Emailed You': '이메일을 보냄',
    'We Sent A Code': '코드를 보냄',
    'We Texted You': '문자 메시지를 보냄',
    'Your code is on the way. To log in, enter the code we emailed to': '코드가 전송 중입니다. 로그인하려면 이메일로 전송한 코드를 입력하세요',
    'Your code is on the way. To log in, enter the code we sent you': '코드가 전송 중입니다. 로그인하려면 전송한 코드를 입력하세요',
    'Your code is on the way. To log in, enter the code we texted to': '코드가 전송 중입니다. 로그인하려면 문자 메시지로 전송한 코드를 입력하세요',
    // Additional translations provided by customers
    Birthdate: '생년월일',
    'Family Name': '성',
    'Forgot your password?': '비밀번호를 잊으셨나요?',
    'Given Name': '이름',
    Name: '성함',
    Nickname: '닉네임',
    'Preferred Username': '닉네임',
    Profile: '프로필',
    'Reset Password': '비밀번호 재설정',
    Website: '웹사이트'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/nb.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nbDict": (()=>nbDict)
});
const nbDict = {
    'Account recovery requires verified contact information': 'Gjenoppretting av konto krever verifisert kontaktinformajson',
    'Add your Profile': 'Legg til profilen din',
    'Add your Website': 'Legg til nettsiden din',
    'Authenticator App (TOTP)': 'Autentiseringsapp (TOTP)',
    'Back to Sign In': 'Tilbake til innlogging',
    'Change Password': 'Bytt passord',
    Changing: 'Endre',
    Code: 'Kode',
    'Confirm Email Code': 'Bekreft e-postkode',
    'Confirm Password': 'Bekreft passordet',
    'Confirm Sign Up': 'Bekreft registrering',
    'Confirm SMS Code': 'Bekreft SMS-kode',
    'Confirm TOTP Code': 'Bekreft TOTP-kode',
    Confirm: 'Bekreft',
    'Confirmation Code': 'Bekreftelseskode',
    Confirming: 'Bekrefter',
    'Create a new account': 'Opprett en ny konto',
    'Create Account': 'Opprett konto',
    'Creating Account': 'Oppretter konto',
    'Dismiss alert': 'Avvis varsel',
    Email: 'E-post',
    'Email Message': 'E-postmelding',
    'Enter your Birthdate': 'Skriv inn fødselsdatoen din',
    'Enter your code': 'Skriv inn koden din',
    'Enter your Confirmation Code': 'Skriv inn bekreftelseskoden din',
    'Enter your Email': 'Skriv inn e-postadressen din',
    'Enter your Family Name': 'Skriv inn etternavnet ditt',
    'Enter your Given Name': 'Skriv inn fornavnet ditt',
    'Enter your Middle Name': 'Skriv inn mellomnavnet ditt',
    'Enter your Name': 'Skriv inn navnet ditt',
    'Enter your Nickname': 'Skriv inn kallenavnet ditt',
    'Enter your Password': 'Skriv inn passordet ditt',
    'Enter your phone number': 'Skriv inn telefonnummeret ditt',
    'Enter your Preferred Username': 'Skriv inn det foretrukne brukernavnet ditt',
    'Enter your username': 'Skriv inn brukernavnet ditt',
    'Forgot password?': 'Glemt passord?',
    'Forgot your password?': 'Glemt passordet ditt?',
    'Hide password': 'Skjul passordet',
    'It may take a minute to arrive': 'Det kan ta et minutt for å komme frem',
    Loading: 'Laster inn',
    'Multi-Factor Authentication': 'Flerfaktorautentisering',
    'Multi-Factor Authentication Setup': 'Oppsett av flerfaktorautentisering',
    'New password': 'Nytt passord',
    or: 'eller',
    Password: 'Passord',
    'Phone Number': 'Telefonnummer',
    'Please confirm your Password': 'Vennligst bekreft passordet ditt',
    'Resend Code': 'Send koden på nytt',
    'Reset your password': 'Nullstill passordet ditt',
    'Reset your Password': 'Nullstill passordet ditt',
    'Select MFA Type': 'Velg MFA-type',
    'Send code': 'Send kode',
    'Send Code': 'Send kode',
    Sending: 'Sender',
    'Setup Email': 'Konfigurer e-post',
    'Setup TOTP': 'Konfigurer TOTP',
    'Show password': 'Vis passordet',
    'Sign in to your account': 'Logg inn på kontoen din',
    'Sign In with Amazon': 'Logg inn med Amazon',
    'Sign In with Apple': 'Logg inn med Apple',
    'Sign In with Facebook': 'Logg inn med Facebook',
    'Sign In with Google': 'Logg inn med Google',
    'Sign in': 'Logg inn',
    'Sign In': 'Logg inn',
    'Signing in': 'Logger inn',
    Skip: 'Hopp over',
    Submit: 'Send inn',
    Submitting: 'Sender inn',
    'Text Message (SMS)': 'Tekstmelding (SMS)',
    Username: 'Brukernavn',
    'Verify Contact': 'Bekreft kontakt',
    Verify: 'Bekreft',
    'We Emailed You': 'Vi sendte deg en e-post',
    'We Sent A Code': 'Vi sendte en kode',
    'We Texted You': 'Vi sendte deg en tekstmelding',
    'Your code is on the way. To log in, enter the code we emailed to': 'Koden din er på vei. For å logge inn, skriv inn koden vi sendte e-post til',
    'Your code is on the way. To log in, enter the code we sent you': 'Koden din er på vei. For å logge inn, skriv inn koden vi sendte deg',
    'Your code is on the way. To log in, enter the code we texted to': 'Koden din er på vei. For å logge inn, skriv inn koden vi sendte tekstmelding til',
    // Additional translations provided by customers
    'An account with the given email already exists.': 'Det finnes allerede en konto med denne e-postadressen',
    'Confirm a Code': 'Bekreft koden',
    'Confirm Sign In': 'Bekreft innlogging',
    'Create account': 'Opprett konto',
    'Enter your password': 'Skriv inn passordet ditt',
    'Forgot Password': 'Glemt passordet',
    'Have an account? ': 'Har en konto allerede? ',
    'Incorrect username or password': 'Feil brukernavn eller passord',
    'Invalid password format': 'Ugyldig passordformat',
    'Invalid phone number format': 'Ugyldig telefonnummerformat',
    'Lost your code? ': 'Mistet koden? ',
    'New Password': 'Nytt passord',
    'No account? ': 'Ingen konto? ',
    'Password attempts exceeded': 'For mange mislykkede passordforsøk',
    'Reset password': 'Nullstill passord',
    'Sign Out': 'Logg ut',
    'Sign Up': 'Registrering',
    'User already exists': 'Brukeren finnes allerede',
    'User does not exist': 'Brukeren finnes ikke',
    'Username cannot be empty': 'Brukernavnet kan ikke være tomt'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/nl.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nlDict": (()=>nlDict)
});
const nlDict = {
    'Account recovery requires verified contact information': 'Accountherstel vereist geverifieerde contactgegevens',
    'Authenticator App (TOTP)': 'Authenticator-app (TOTP)',
    'Back to Sign In': 'Terug naar inloggen',
    'Change Password': 'Wachtwoord wijzigen',
    Changing: 'Wordt aangepast',
    Code: 'Code',
    'Confirm Email Code': 'E-mailcode bevestigen',
    'Confirm Password': 'Bevestig Wachtwoord',
    'Confirm Sign Up': 'Bevestig inschrijving',
    'Confirm SMS Code': 'Bevestig SMS Code',
    'Confirm TOTP Code': 'Bevestig TOTP Code',
    Confirm: 'Bevestig',
    'Confirmation Code': 'Bevestigingscode',
    Confirming: 'Bevestigen',
    'Create a new account': 'Nieuw account aanmaken',
    'Create Account': 'Account aanmaken',
    'Creating Account': 'Account wordt aangemaakt',
    'Dismiss alert': 'Waarschuwing sluiten',
    Email: 'E-mail',
    'Email Message': 'E-mailbericht',
    'Enter your code': 'Vul je code in',
    'Enter your Email': 'Vul je e-mail in',
    'Enter your Password': 'Vul je wachtwoord in',
    'Enter your phone number': 'Vul je telefoonnummer in',
    'Enter your username': 'Vul je gebruikersnaam in',
    'Enter your Username': 'Vul je gebruikersnaam in',
    'Forgot your password?': 'Wachtwoord vergeten? ',
    'Hide password': 'Verberg wachtwoord',
    'It may take a minute to arrive': 'Het kan even duren voordat deze aankomt',
    Loading: 'Laden',
    'Multi-Factor Authentication': 'Multi-Factor Authentication',
    'Multi-Factor Authentication Setup': 'Multi-Factor Authentication instellen',
    'New password': 'Nieuw wachtwoord',
    'New Password': 'Nieuw Wachtwoord',
    or: 'of',
    Password: 'Wachtwoord',
    'Phone Number': 'Telefoonnummer',
    'Please confirm your Password': 'Bevestig je wachtwoord',
    'Resend Code': 'Verstuur code nogmaals',
    'Reset Password': 'Wachtwoord resetten',
    'Reset your password': 'Reset je wachtwoord',
    'Reset your Password': 'Wachtwoord resetten',
    'Select MFA Type': 'MFA-type kiezen',
    'Send code': 'Verstuur code',
    'Send Code': 'Verstuur Code',
    Sending: 'Versturen',
    'Setup Email': 'E-mailadres instellen',
    'Setup TOTP': 'TOTP Instellingen',
    'Show password': 'Toon wachtwoord',
    'Sign in to your account': 'Inloggen op je account',
    'Sign In with Amazon': 'Inloggen met Amazon',
    'Sign In with Apple': 'Inloggen met Apple',
    'Sign In with Facebook': 'Inloggen met Facebook',
    'Sign In with Google': 'Inloggen met Google',
    'Sign in': 'Inloggen',
    'Sign In': 'Inloggen',
    'Signing in': 'Inloggen',
    Skip: 'Overslaan',
    Submit: 'Versturen',
    Submitting: 'Wordt verstuurd',
    'Text Message (SMS)': 'Tekstbericht (sms)',
    Username: 'Gebruikersnaam',
    'Verify Contact': 'Verifieer Contact',
    Verify: 'Verifieer',
    'We Emailed You': 'We hebben u een e-mail gestuurd',
    'We Sent A Code': 'We hebben een code gestuurd',
    'We Texted You': 'We hebben u een sms gestuurd',
    'Your code is on the way. To log in, enter the code we emailed to': 'Uw code is onderweg. Om in te loggen, voer de code in die we gemaild hebben naar',
    'Your code is on the way. To log in, enter the code we sent you': 'Uw code is onderweg. Om in te loggen, voer de code in die we u hebben gestuurd',
    'Your code is on the way. To log in, enter the code we texted to': 'Uw code is onderweg. Om in te loggen, voer de code in die we hebben gestuurd naar',
    'Your passwords must match': 'Je wachtwoorden moeten overeenkomen'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/pl.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "plDict": (()=>plDict)
});
const plDict = {
    'Account recovery requires verified contact information': 'Odzyskanie konta wymaga zweryfikowanych danych kontaktowych',
    'Authenticator App (TOTP)': 'Aplikacja uwierzytelniania (TOTP)',
    'Back to Sign In': 'Powrót do logowania',
    'Change Password': 'Zmień hasło',
    Changing: 'Zmienianie',
    Code: 'Kod',
    'Confirm Email Code': 'Potwierdź kod e-mail',
    'Confirm Password': 'Potwierdź Hasło',
    'Confirm Sign Up': 'Potwierdź rejestrację',
    'Confirm SMS Code': 'Potwierdź kod SMS',
    'Confirm TOTP Code': 'Potwierdź hasło jednorazowe',
    Confirm: 'Potwierdź',
    'Confirmation Code': 'Kod potwierdzenia',
    Confirming: 'Potwierdzanie',
    'Create a new account': 'Utwórz nowe konto',
    'Create Account': 'Utwórz konto',
    'Creating Account': 'Tworzenie konta',
    'Dismiss alert': 'Odrzuć alert',
    Email: 'E-mail',
    'Email Message': 'Wiadomość e-mail',
    'Enter your code': 'Wprowadź swój kod',
    'Enter your Email': 'Wpisz swój adres e-mail',
    'Enter your phone number': 'Wpisz swój numer telefonu',
    'Enter your username': 'Wprowadź swoją nazwę użytkownika',
    'Forgot your password?': 'Zapomniałeś hasła? ',
    'Hide password': 'Ukryj hasło',
    'It may take a minute to arrive': 'Może to chwilę potrwać',
    Loading: 'Ładowanie',
    'Multi-Factor Authentication': 'Uwierzytelnianie wieloskładnikowe',
    'Multi-Factor Authentication Setup': 'Konfigurowanie uwierzytelniania wieloskładnikowego',
    'New password': 'Nowe hasło',
    or: 'albo',
    Password: 'Hasło',
    'Phone Number': 'Numer telefonu',
    'Resend Code': 'Wyślij kod ponownie',
    'Reset your password': 'Zresetuj swoje hasło',
    'Reset your Password': 'Zresetuj swoje hasło',
    'Select MFA Type': 'Wybierz typ MFA',
    'Send code': 'Wyślij kod',
    'Send Code': 'Zresetuj hasło',
    Sending: 'Wysyłanie',
    'Setup Email': 'Konfiguracja poczty e-mail',
    'Setup TOTP': 'Konfiguruj TOTP',
    'Show password': 'Pokaż hasło',
    'Sign in to your account': 'Zaloguj się na swoje konto',
    'Sign In with Amazon': 'Zaloguj z Amazon',
    'Sign In with Apple': 'Zaloguj z Apple',
    'Sign In with Facebook': 'Zaloguj z Facebook',
    'Sign In with Google': 'Zaloguj z Google',
    'Sign In': 'Logowanie',
    'Sign in': 'Zaloguj',
    'Signing in': 'Logowanie',
    Skip: 'Pomiń',
    Submit: 'Wyślij',
    Submitting: 'Wysyłanie',
    'Text Message (SMS)': 'Wiadomość tekstowa (SMS)',
    Username: 'Nazwa użytkownika',
    'Verify Contact': 'Weryfikacja danych kontaktowych',
    Verify: 'Zweryfikuj',
    // Additional translations provided by customers
    Birthdate: 'Data urodzenia',
    'Family Name': 'Nazwisko',
    'Given Name': 'Pierwsze imię',
    'Middle Name': 'Drugie imię',
    Name: 'Imię i nazwisko',
    Nickname: 'Pseudonim',
    'Preferred Username': 'Preferowana nazwa użytkownika',
    Profile: 'Profil',
    Website: 'Strona internetowa',
    'We Emailed You': 'Wysłaliśmy Ci wiadomość e-mail',
    'We Sent A Code': 'Wysłaliśmy kod',
    'We Texted You': 'Wysłaliśmy Ci wiadomość SMS',
    'Your code is on the way. To log in, enter the code we emailed to': 'Twój kod został wysłany. Aby się zalogować, wprowadź kod wysłany na adres e-mail',
    'Your code is on the way. To log in, enter the code we sent you': 'Twój kod został wysłany. Aby się zalogować, wprowadź wysłany do Ciebie kod',
    'Your code is on the way. To log in, enter the code we texted to': 'Twój kod został wysłany. Aby się zalogować, wprowadź kod wysłany do Ciebie w wiadomości SMS pod numer'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/pt.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ptDict": (()=>ptDict)
});
const ptDict = {
    'Account recovery requires verified contact information': 'A recuperação da conta requer informações de contato verificadas',
    'Authenticator App (TOTP)': 'Aplicativo autenticador (TOTP)',
    'Add your Profile': 'Adicione seu Perfil',
    'Add your Website': 'Adicione seu Website',
    'Back to Sign In': 'Voltar para Entrar',
    'Change Password': 'Mudar senha',
    Changing: 'Mudando',
    Code: 'Código',
    'Confirm Email Code': 'Confirmar código de e-mail',
    'Confirm Password': 'Confirme a Senha',
    'Confirm Sign Up': 'Confirmar inscrição',
    'Confirm SMS Code': 'Confirme o código SMS',
    'Confirm MFA Code': 'Confirme o código MFA',
    'Confirm TOTP Code': 'Confirme o código TOTP',
    Confirm: 'confirme',
    'Confirmation Code': 'Código de confirmação',
    Confirming: 'Confirmando',
    'Create a new account': 'Criar uma nova conta',
    'Create Account': 'Criar Conta',
    'Creating Account': 'Criando conta',
    'Dismiss alert': 'Descartar alerta',
    Email: 'O email',
    'Email Message': 'Mensagem de e-mail',
    'Enter your Birthdate': 'Digite sua Data de Nascimento',
    'Enter your code': 'Insira seu código',
    'Enter your Confirmation Code': 'Digite seu código de confirmação',
    'Enter your Email': 'Digite seu e-mail',
    'Enter your Family Name': 'Digite seu Sobrenome',
    'Enter your Given Name': 'Digite seu Primeiro Nome',
    'Enter your Middle Name': 'Digite seu Nome do Meio',
    'Enter your Name': 'Digite seu Nome',
    'Enter your Nickname': 'Digite seu Apelido',
    'Enter your Password': 'Digite sua senha',
    'Enter your phone number': 'Digite seu número de telefone',
    'Enter your Preferred Username': 'Digite seu nome de usuário preferido',
    'Enter your username': 'Digite seu nome de usuário',
    'Forgot password?': 'Esqueceu a senha?',
    'Forgot your password?': 'Esqueceu sua senha?',
    'Hide password': 'Esconder a senha',
    'It may take a minute to arrive': 'Pode levar um minuto para chegar',
    Loading: 'Carregando',
    'Multi-Factor Authentication': 'Autenticação multifator',
    'Multi-Factor Authentication Setup': 'Configuração da autenticação multifator',
    'New password': 'Nova Senha',
    or: 'ou',
    Password: 'Senha',
    'Phone Number': 'Número de telefone',
    'Please confirm your Password': 'Por favor confirme sua Senha',
    'Resend Code': 'Reenviar código',
    'Reset your password': 'Redefina sua senha',
    'Reset your Password': 'Redefina sua senha',
    'Select MFA Type': 'Selecionar tipo de MFA',
    'Send code': 'Enviar código',
    'Send Code': 'Enviar código',
    Sending: 'Enviando',
    'Setup Email': 'Configurar e-mail',
    'Setup TOTP': 'Configurar TOTP',
    'Show password': 'Mostrar senha',
    'Sign in to your account': 'Faça login em sua conta',
    'Sign In with Amazon': 'Entrar com a Amazon',
    'Sign In with Apple': 'Entrar com a Apple',
    'Sign In with Facebook': 'Entrar com o Facebook',
    'Sign In with Google': 'Faça login no Google',
    'Sign in': 'Entrar',
    'Sign In': 'Entrar',
    'Signing in': 'Entrando',
    Skip: 'Pular',
    Submit: 'Enviar',
    Submitting: 'Enviando',
    'Text Message (SMS)': 'Mensagem de texto (SMS)',
    Username: 'Nome do usuário',
    'Verify Contact': 'Verificar contato',
    Verify: 'Verificar',
    'We Emailed You': 'Enviamos um e-mail para você',
    'We Sent A Code': 'Enviamos um código',
    'We Texted You': 'Enviamos um SMS para você',
    'Your code is on the way. To log in, enter the code we emailed to': 'Seu código está a caminho. Para fazer login, insira o código para o qual enviamos um e-mail',
    'Your code is on the way. To log in, enter the code we sent you': 'Seu código está a caminho. Para fazer login, insira o código que enviamos para você',
    'Your code is on the way. To log in, enter the code we texted to': 'Seu código está a caminho. Para fazer login, insira o código para o qual enviamos uma mensagem de texto',
    // Additional translations provided by customers
    'An account with the given email already exists.': 'Já existe uma conta com o email utilizado.',
    'Confirm a Code': 'Confirmar um Código',
    'Confirm Sign In': 'Confirmar Início de Sessão',
    'Forgot Password': 'Esqueci Minha Senha',
    'Incorrect username or password.': 'Nome de usuário ou senha incorreta',
    'Invalid password format': 'Formato de senha inválido',
    'Invalid phone number format': 'Formato de número de telefone inválido',
    'Loading...': 'Carregando...',
    'New Password': 'Nova Senha',
    'Resend a Code': 'Reenviar um Código',
    'Sign Out': 'Sair',
    'Sign Up with Amazon': 'Criar Conta com a Amazon',
    'Sign Up with Apple': 'Criar Conta com a Apple',
    'Sign Up with Facebook': 'Criar Conta com o Facebook',
    'Sign Up with Google': 'Criar Conta com o Google',
    'Sign Up': 'Criar Conta',
    'User already exists': 'Usuário já existe',
    'User does not exist': 'Usuário não existe',
    'Username cannot be empty': 'Nome de usuário não pode estar vazio',
    'Your passwords must match': 'Suas senhas devem ser iguais'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/zh.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "zhDict": (()=>zhDict)
});
const zhDict = {
    'Account recovery requires verified contact information': '账户恢复需要验证过的联系方式',
    'Authenticator App (TOTP)': 'Authenticator 应用程序（TOTP）',
    'Back to Sign In': '回到登录',
    'Change Password': '更改密码',
    Changing: '正在修改',
    Code: '确认码',
    'Confirm Email Code': '确认电子邮件代码',
    'Confirm Password': '确认密码',
    'Confirm Sign Up': '确认注册',
    'Confirm SMS Code': '确认短信验证码',
    'Confirm TOTP Code': '确认 TOTP 代码',
    Confirm: '确认',
    'Confirmation Code': '确认码',
    Confirming: '正在确认',
    'Create a new account': '创建新账户',
    'Create Account': '创建账户',
    'Creating Account': '正在创建账户',
    'Dismiss alert': '关闭警报',
    Email: '邮箱',
    'Email Message': '电子邮件消息',
    'Enter your code': '输入验证码',
    'Enter your Email': '输入电子邮件',
    'Enter your Password': '输入密码',
    'Enter your phone number': '输入电话号码',
    'Enter your username': '输入用户名',
    'Forgot your password?': '忘记密码了？',
    'Hide password': '隐藏密码',
    'It may take a minute to arrive': '可能需要一分钟才能到达',
    Loading: '正在加载',
    'Multi-Factor Authentication': '多重身份验证',
    'Multi-Factor Authentication Setup': '多重身份验证设置',
    'New password': '新密码',
    or: '或者',
    Password: '密码',
    'Phone Number': '电话',
    'Please confirm your Password': '请再次输入密码',
    'Resend Code': '重发验证码',
    'Reset your password': '重置密码',
    'Reset your Password': '重置密码',
    'Select MFA Type': '选择 MFA 类型',
    'Send Code': '发送确认码',
    'Send code': '发送验证码',
    Sending: '正在发送',
    'Setup Email': '设置电子邮件',
    'Setup TOTP': '设置 TOTP',
    'Show password': '显示密码',
    'Sign in to your account': '登录账户',
    'Sign In with Amazon': '通过 Amazon 登录',
    'Sign In with Apple': '通过 Apple 登录',
    'Sign In with Facebook': '通过 Facebook 登录',
    'Sign In with Google': '通过 Google 登录',
    'Sign in': '登录',
    'Sign In': '登录',
    'Signing in': '正在登录',
    Skip: '跳过',
    Submit: '提交',
    Submitting: '正在提交',
    'Text Message (SMS)': '短信（SMS）',
    Username: '用户名',
    'Verify Contact': '验证联系方式',
    Verify: '验证',
    'We Emailed You': '我们给您发送了电子邮件',
    'We Sent A Code': '我们发送了代码',
    'We Texted You': '我们给您发送了短信',
    'Your code is on the way. To log in, enter the code we emailed to': '您的代码正在发送中。要登录，请输入我们通过电子邮件发送给以下人员的代码：',
    'Your code is on the way. To log in, enter the code we sent you': '您的代码正在发送中。要登录，请输入我们发送给您的代码',
    'Your code is on the way. To log in, enter the code we texted to': '您的代码正在发送中。要登录，请输入我们通过短信发送给以下人员的代码：',
    // Additional translations provided by customers
    'Confirm a Code': '确认码',
    'Confirm Sign In': '确认登录',
    'Forgot Password': '忘记密码',
    'Incorrect username or password': '用户名或密码错误',
    'Invalid password format': '密码格式错误',
    'Invalid phone number format': '电话格式错误，请使用格式 +12345678900',
    'New Password': '新密码',
    'Resend a Code': '重发确认码',
    'Sign Out': '退出',
    'Sign Up': '注册',
    'User already exists': '用户已经存在',
    'User does not exist': '用户不存在'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/sv.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "svDict": (()=>svDict)
});
const svDict = {
    'Account recovery requires verified contact information': 'För att återställa kontot behöver du ett verifierat konto',
    'Authenticator App (TOTP)': 'Autentiseringsapp (TOTP)',
    'Back to Sign In': 'Tillbaka till inloggningen',
    'Change Password': 'Byt lösenord',
    Changing: 'Ändra',
    Code: 'Kod',
    'Confirm Email Code': 'Bekräfta e-postkod',
    'Confirm Password': 'Bekräfta lösenord',
    'Confirm Sign Up': 'Bekräfta registrering',
    'Confirm SMS Code': 'Bekräfta SMS-kod',
    'Confirm TOTP Code': 'Bekräfta TOTP-kod',
    Confirm: 'Bekräfta',
    'Confirmation Code': 'Verifikationskod',
    Confirming: 'Bekräftar',
    'Create a new account': 'Skapa ett nytt konto',
    'Create Account': 'Skapa konto',
    'Creating Account': 'Skapar konto',
    'Dismiss alert': 'Avvisa varning',
    Email: 'E-post',
    'Email Message': 'E-postmeddelande',
    'Enter your code': 'Skriv din kod',
    'Enter your Email': 'Ange din e-post',
    'Enter your phone number': 'Ange ditt telefonnummer',
    'Enter your username': 'Ange ditt användarnamn',
    'Forgot your password?': 'Glömt ditt lösenord? ',
    'Hide password': 'Dölj lösenord',
    'It may take a minute to arrive': 'Det kan ta en minut att komma fram',
    Loading: 'Laddar',
    'Multi-Factor Authentication': 'Multifaktorautentisering',
    'Multi-Factor Authentication Setup': 'Konfigurering av multifaktorautentisering',
    'New password': 'Nytt lösenord',
    or: 'eller',
    Password: 'Lösenord',
    'Phone Number': 'Telefonnummer',
    'Resend Code': 'Skicka koden igen',
    'Reset your password': 'Återställ ditt lösenord',
    'Reset your Password': 'Återställ ditt lösenord',
    'Select MFA Type': 'Välj MFA-typ',
    'Send code': 'Skicka kod',
    'Send Code': 'Skicka kod',
    Sending: 'Skickar',
    'Setup Email': 'Konfigurera e-post',
    'Setup TOTP': 'Konfigurera TOTP',
    'Show password': 'Visa lösenord',
    'Sign in to your account': 'Logga in till ditt konto',
    'Sign In with Amazon': 'Logga in med Amazon',
    'Sign In with Apple': 'Logga in med Apple',
    'Sign In with Facebook': 'Logga in med Facebook',
    'Sign In with Google': 'Logga in med Google',
    'Sign in': 'Logga in',
    'Sign In': 'Logga in',
    'Signing in': 'Loggar in',
    Skip: 'Hoppa över',
    Submit: 'Skicka',
    Submitting: 'Skickar in',
    'Text Message (SMS)': 'Textmeddelande (SMS)',
    Username: 'Användarnamn',
    'Verify Contact': 'Verifiera kontakt',
    Verify: 'Verifiera',
    'We Sent A Code': 'Vi skickade en kod',
    'We Texted You': 'Vi sms:ade dig',
    'Your code is on the way. To log in, enter the code we emailed to': 'Din kod är på väg. För att logga in, ange koden vi mejlade till',
    'Your code is on the way. To log in, enter the code we sent you': 'Din kod är på väg. För att logga in, ange koden vi skickade till dig',
    'Your code is on the way. To log in, enter the code we texted to': 'Din kod är på väg. För att logga in, ange koden vi sms:ade till',
    // Additional translations provided by customers
    'An account with the given email already exists.': 'Det finns redan ett konto med denna e-postadress',
    'Confirm a Code': 'Bekräfta koden',
    'Confirm Sign In': 'Bekräfta inloggning',
    'Create account': 'Skapa konto',
    'Enter your Password': 'Ange ditt lösenord',
    'Forgot Password?': 'Glömt lösenord?',
    'Have an account? ': 'Redan registrerad? ',
    'Incorrect username or password': 'Felaktigt användarnamn eller lösenord',
    'Invalid password format': 'Ogiltigt lösenordsformat',
    'Invalid phone number format': `Ogiltigt format för telefonnummer`,
    'Lost your code? ': 'Förlorat koden? ',
    'New Password': 'Nytt lösenord',
    'No account? ': 'Inget konto? ',
    'Password attempts exceeded': 'Maximalt antal felaktiga inloggningsförsök har uppnåtts',
    'Reset Password': 'Återställ lösenord',
    'Sign Out': 'Logga ut',
    'Sign Up': 'Registrering',
    'User already exists': 'Användaren finns redan',
    'User does not exist': 'Användaren finns inte',
    'Username cannot be empty': 'Användarnamnet kan inte vara tomt',
    'We Emailed You': 'Vi har skickat e-post till dig',
    'Please confirm your Password': 'Bekräfta ditt lösenord'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/id.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "idDict": (()=>idDict)
});
const idDict = {
    'Account recovery requires verified contact information': 'Pemulihan akun memerlukan informasi kontak terverifikasi',
    'Authenticator App (TOTP)': 'Aplikasi Pengauntentikasi (TOTP)',
    'Back to Sign In': 'Kembali ke Masuk',
    'Change Password': 'Ubah kata sandi',
    Changing: 'Mengubah',
    Code: 'Kode',
    'Confirm Email Code': 'Konfirmasi Kode Email',
    'Confirm Password': 'Konfirmasi kata sandi',
    'Confirm Sign Up': 'Konfirmasi Pendaftaran',
    'Confirm SMS Code': 'Konfirmasi Kode SMS',
    'Confirm TOTP Code': 'Konfirmasi Kode TOTP',
    Confirm: 'Konfirmasi',
    'Confirmation Code': 'Kode Konfirmasi',
    Confirming: 'Mengkonfirmasi',
    'Create a new account': 'Buat akun baru',
    'Create Account': 'Buat Akun',
    'Creating Account': 'Membuat Akun',
    'Dismiss alert': 'Hentikan pemberitahuan',
    Email: 'Email',
    'Email Message': 'Pesan Email',
    'Enter your code': 'Masukkan kode anda',
    'Enter your Email': 'Masukkan email anda',
    'Enter your phone number': 'Masukkan nomor telepon anda',
    'Enter your username': 'Masukkan nama akun anda',
    'Forgot your password?': 'Lupa kata sandi? ',
    'Hide password': 'Sembunyikan kata sandi',
    'It may take a minute to arrive': 'Mungkin perlu waktu satu menit untuk tiba',
    Loading: 'Memuat',
    'Multi-Factor Authentication': 'Autentikasi Multifaktor',
    'Multi-Factor Authentication Setup': 'Pengaturan Autentikasi Multifaktor',
    'New password': 'Kata sandi baru',
    or: 'atau',
    Password: 'Kata sandi',
    'Phone Number': 'Nomor telepon',
    'Resend Code': 'Kirim ulang kodenya',
    'Reset your Password': 'Reset Kata Sandi',
    'Reset your password': 'Ubah kata sandi anda',
    'Select MFA Type': 'Pilih tipe MFA',
    'Send code': 'Kirim kode',
    'Send Code': 'Kirim Kode',
    Sending: 'Mengirim',
    'Setup Email': 'Atur Email',
    'Setup TOTP': 'Siapkan TOTP',
    'Show password': 'Tampilkan kata sandi',
    'Sign in to your account': 'Masuk akun anda',
    'Sign In with Amazon': 'Masuk dengan Amazon',
    'Sign In with Apple': 'Masuk dengan Apple',
    'Sign In with Facebook': 'Masuk dengan Facebook',
    'Sign In with Google': 'Masuk dengan Google',
    'Sign in': 'Masuk',
    'Sign In': 'Masuk',
    'Signing in': 'Memasuki',
    Skip: 'Lewati',
    Submit: 'Ajukan',
    Submitting: 'Mengajukan',
    'Text Message (SMS)': 'Pesan Teks (SMS)',
    Username: 'Nama akun',
    'Verify Contact': 'Verifikasi Kontak',
    Verify: 'Verifikasi',
    'We Sent A Code': 'Kami Mengirim Kode',
    'We Texted You': 'Kami mengirim SMS kepada Anda',
    'Your code is on the way. To log in, enter the code we sent you': 'Kode Anda segera hadir. Untuk masuk, masukkan kode yang kami kirimkan kepada Anda',
    // Additional translations provided by customers
    'An account with the given email already exists.': 'Akun dengan email tersebut sudah terdaftar.',
    'Attempt limit exceeded, please try after some time.': 'Batas percobaan terlampaui, mohon coba lagi setelah beberapa waktu.',
    'Cannot reset password for the user as there is no registered/verified email or phone_number': 'Tidak dapat mengatur ulang kata sandi karena tidak ada email terdaftar / terverifikasi atau nomor telepon',
    Change: 'Ubah',
    'Confirm a Code': 'Konfirmasi kode',
    'Create account': 'Buat akun',
    'Enter your password': 'Masukkan kata sandi anda',
    'Forgot Password': 'Lupa kata sandi',
    'Have an account? ': 'Sudah punya akun? ',
    Hello: 'Halo',
    'Incorrect username or password.': 'Nama akun atau kata sandi salah.',
    'Invalid phone number format': 'Nomor telepon tidak sesuai dengan format.',
    'Invalid verification code provided, please try again.': 'Kode verifikasi tidak sesuai, mohon coba lagi.',
    'It may take a minute to arrive.': 'Mungkin perlu beberapa waktu untuk tiba.',
    'Lost your code? ': 'Kode anda hilang?',
    Name: 'Nama',
    'Network error': 'Galat jaringan',
    'No account? ': 'Tidak ada akun?',
    'Password did not conform with policy: Password not long enough': 'Kata sandi tidak sesuai dengan aturan: Kata sandi kurang panjang',
    'Resend a Code': 'Renvoyer un code',
    'Reset password': 'Ubah kata sandi anda',
    Send: 'Kirim',
    'Sign In with AWS': 'Masuk dengan AWS',
    'Sign Up with Amazon': 'Daftar dengan Amazon',
    'Sign Up with AWS': 'Daftar dengan AWS',
    'Sign Up with Facebook': 'Daftar dengan Facebook',
    'Sign Up with Google': 'Daftar dengan Google',
    SMS: 'SMS',
    'User already exists': 'Akun sudah terdaftar',
    'User does not exist.': 'Akun tidak terdaftar.',
    'User is disabled.': 'Akun dinonaktifkan.',
    'Username cannot be empty': 'Nama akun tidak boleh kosong',
    'Username/client id combination not found.': 'Nama akun atau id tidak ditemukan.',
    'We Emailed You': 'Kami mengirimkanmu email',
    'Your code is on the way. To log in, enter the code we emailed to': 'Kode anda dalam pengiriman. Untuk masuk, masukkan kode yang kami emailkan ke',
    'Your code is on the way. To log in, enter the code we texted to': 'Kode anda dalam pengiriman. Untuk masuk, masukkan kode yang kami tuliskan ke',
    'Your passwords must match': 'Kata sandi harus sama'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/tr.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "trDict": (()=>trDict)
});
const trDict = {
    'Account recovery requires verified contact information': 'Hesap kurtarma, doğrulanmış iletişim bilgilerini gerektirir',
    'Authenticator App (TOTP)': 'Kimlik Doğrulayıcı Uygulaması (TOTP)',
    'Add your Profile': 'Profilinizi ekleyin',
    'Add your Website': 'Web sitenizi ekleyin',
    'Back to Sign In': 'Oturum Açmaya Geri Dön',
    'Change Password': 'Şifreyi Değiştir',
    Changing: 'Değiştiriliyor',
    Code: 'Kod',
    'Confirm Email Code': 'E-posta Kodunu Onayla',
    'Confirm Password': 'Şifreyi Doğrula',
    'Confirm Sign Up': 'Kayıt İşlemini Doğrula',
    'Confirm SMS Code': 'SMS Kodunu Doğrula',
    'Confirm MFA Code': 'Çoklu Faktörlü Doğrulama Kodunu Doğrula',
    'Confirm TOTP Code': 'Tek Kullanımlık Şifreyi Doğrula',
    Confirm: 'Doğrula',
    'Confirmation Code': 'Doğrulama Kodu',
    Confirming: 'Doğrulanıyor',
    'Create a new account': 'Yeni bir hesap oluştur',
    'Create Account': 'Hesap Oluştur',
    'Creating Account': 'Hesap Oluşturuluyor',
    'Dismiss alert': 'Uyarıyı reddet',
    Email: 'E-posta',
    'Email Message': 'E-posta Mesajı',
    'Enter your Birthdate': 'Doğum gününüzü girin',
    'Enter your code': 'Kodu girin',
    'Enter your Confirmation Code': 'Doğrulama Kodunuzu Girin',
    'Enter your Email': 'E-posta adresinizi girin',
    'Enter your email': 'E-posta adresinizi girin',
    'Enter your Family Name': 'Ad Soyadınızı girin',
    'Enter your Given Name': 'Adınızı girin',
    'Enter your Middle Name': 'Soyadınızı girin',
    'Enter your Name': 'Adınızı girin',
    'Enter your Nickname': 'Takma adınızı girin',
    'Enter your Password': 'Şifrenizi girin',
    'Enter your phone number': 'Telefon numaranızı girin',
    'Enter your Preferred Username': 'Tercih ettiğiniz kullanıcı adınızı girin',
    'Enter your username': 'Kullanıcı adınızı girin',
    'Forgot Password?': 'Şifrenizi Mi Unuttunuz?',
    'Forgot password?': 'Şifrenizi mi unuttunuz?',
    'Forgot your password?': 'Şifrenizi mi unuttunuz?',
    'Hide password': 'Şifreyi gizle',
    'It may take a minute to arrive': 'Kodun gelmesi bir dakika sürebilir',
    Loading: 'Yükleniyor',
    'Multi-Factor Authentication': 'Çok Faktörlü Kimlik Doğrulama',
    'Multi-Factor Authentication Setup': 'Çok Faktörlü Kimlik Doğrulama Kurulumu',
    'New password': 'Yeni şifre',
    or: 'veya',
    Password: 'Şifre',
    'Phone Number': 'Telefon Numarası',
    'Please confirm your Password': 'Lütfen şifrenizi doğrulayın',
    'Resend Code': 'Kodu Yeniden Gönder',
    'Reset your password': 'Şifrenizi sıfırlayın',
    'Reset your Password': 'Şifrenizi Sıfırlayın',
    'Reset Password': 'Şifreyi Sıfırla',
    'Select MFA Type': 'MFA türünü seçin',
    'Send code': 'Kod gönder',
    'Send Code': 'Kod Gönder',
    Sending: 'Gönderiliyor',
    'Setup Email': 'E-postayı ayarla',
    'Setup TOTP': 'Tek kullanımlık şifre kurulumu yap',
    'Show password': 'Şifreyi göster',
    'Sign in to your account': 'Hesabınızda oturum açın',
    'Sign In with Amazon': 'Amazon ile Oturum Aç',
    'Sign In with Apple': 'Apple ile Oturum Aç',
    'Sign In with Facebook': 'Facebook ile Oturum Aç',
    'Sign In with Google': 'Google ile Oturum Aç',
    'Sign in': 'Oturum aç',
    'Sign In': 'Oturum Aç',
    'Sign Up with Facebook': 'Facebook ile Kayıt Ol',
    'Sign Up with Google': 'Google ile Kayıt Ol',
    'Signing in': 'Oturum açılıyor',
    Skip: 'Atla',
    Submit: 'Gönder',
    Submitting: 'Gönderiliyor',
    'Text Message (SMS)': 'Kısa Mesaj (SMS)',
    Username: 'Kullanıcı adı',
    'Verify Contact': 'Kişiyi Doğrula',
    Verify: 'Doğrula',
    'We Emailed You': 'Size E-posta Gönderdik',
    'We Sent A Code': 'Bir Kod Gönderdik',
    'We Texted You': 'Size Mesaj Gönderdik',
    'Your code is on the way. To log in, enter the code we emailed to': 'Kodunuz yolda. Oturum açmak için, gönderdiğimiz e-postadaki kodu girin',
    'Your code is on the way. To log in, enter the code we sent you': 'Kodunuz yolda. Oturum açmak için, size gönderdiğimiz kodu girin',
    'Your code is on the way. To log in, enter the code we texted to': 'Kodunuz yolda. Oturum açmak için, gönderdiğimiz mesajdaki kodu girin',
    // Additional translations provided by customers
    'An account with the given email already exists.': 'Bu e-postaya ait zaten bir hesap var.',
    'Confirm Sign In': 'Oturum Açmayı Doğrula',
    'Have an account? ': 'Hesabınız var mı? ',
    'Incorrect username or password': 'Yanlış kullanıcı adı ya da şifre',
    'Invalid password format': 'Geçersiz parola formatı',
    'Invalid phone number format': 'Geçersiz telefon numarası formatı',
    'Lost your code? ': 'Kodu mu kaybettiniz? ',
    'No account? ': 'Hesabınız yok mu? ',
    'Password attempts exceeded': 'Maksimum oturum açma girişimi aşıldı',
    'Sign Out': 'Çıkış yap',
    'Sign Up': 'Kayıt Ol',
    'User already exists': 'Bu kullanıcı zaten var',
    'User does not exist': 'Böyle bir kullanıcı mevcut değil',
    'Username cannot be empty': 'Kullanıcı adı boş olamaz'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ru.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ruDict": (()=>ruDict)
});
const ruDict = {
    'Account recovery requires verified contact information': 'Восстановление учетной записи требует проверки контактной информации',
    'Authenticator App (TOTP)': 'Приложение для аутентификации (TOTP)',
    'Back to Sign In': 'Назад, чтобы войти',
    'Change Password': 'изменять пароль',
    Changing: 'Изменение',
    Code: 'Код',
    'Confirm Email Code': 'Подтвердите код электронной почты',
    'Confirm Password': 'Подтверждение пароля',
    'Confirm Sign Up': 'Подтверждение зарегистрироваться',
    'Confirm SMS Code': 'Подтверждение CMC-Код',
    'Confirm TOTP Code': 'Подтверждение TOTP-Код',
    Confirm: 'Подтверждать',
    'Confirmation Code': 'код подтверждения',
    Confirming: 'подтверждение',
    'Create a new account': 'Создавать новую учетную запись',
    'Create Account': 'Создать учетную запись',
    'Creating Account': 'создание учетная запись',
    'Dismiss alert': 'Закрыть оповещение',
    Email: 'электронная почта',
    'Email Message': 'Сообщение по электронной почте',
    'Enter your code': 'ввести ваш Код',
    'Enter your Email': 'ввести ваш электронная почта',
    'Enter your phone number': 'ввести ваш номер телефона',
    'Enter your username': 'ввести ваш имя пользователя',
    'Forgot your password?': 'Забыли ваш пароль?',
    'Hide password': 'Скрывать пароль',
    'It may take a minute to arrive': 'Доставка может занять некоторое время',
    Loading: 'Загрузка',
    'Multi-Factor Authentication': 'Многофакторная аутентификация',
    'Multi-Factor Authentication Setup': 'Настройка многофакторной аутентификации',
    'New password': 'Новый пароль',
    or: 'или',
    Password: 'Пароль',
    'Phone Number': 'Номер телефона',
    'Resend Code': 'Отправь еще раз Код',
    'Reset your password': 'сброс ваш пароль',
    'Reset your Password': 'сброс ваш Пароль',
    'Select MFA Type': 'Выберите тип МФА',
    'Send code': 'Отправлять Код',
    'Send Code': 'Отправлять Код',
    Sending: 'отправка',
    'Setup Email': 'Настроить электронную почту',
    'Setup TOTP': 'Настраивать TOTP',
    'Show password': 'Показывать пароль',
    'Sign in to your account': 'знак в свой аккаунт',
    'Sign In with Amazon': 'знак в с Amazon',
    'Sign In with Apple': 'знак в с Apple',
    'Sign In with Facebook': 'знак в с Facebook',
    'Sign In with Google': 'знак в с Google',
    'Sign in': 'знак в',
    'Sign In': 'знак в',
    'Signing in': 'подписание в',
    Skip: 'Пропускать',
    Submit: 'Представлять на рассмотрение',
    Submitting: 'Представив',
    'Text Message (SMS)': 'Текстовое сообщение (SMS)',
    Username: 'Имя пользователя',
    'Verify Contact': 'Проверить контакт',
    Verify: 'Проверить',
    'We Emailed You': 'Мы отправили вам электронное письмо',
    'We Sent A Code': 'Мы отправили код',
    'We Texted You': 'Мы отправили вам текстовое сообщение',
    'Your code is on the way. To log in, enter the code we emailed to': 'Ваш код отправлен. Чтобы войти в систему, введите код, который мы отправили по электронной почте',
    'Your code is on the way. To log in, enter the code we sent you': 'Ваш код отправлен. Чтобы войти в систему, введите код, который мы послали вам',
    'Your code is on the way. To log in, enter the code we texted to': 'Ваш код отправлен. Чтобы войти в систему, введите код, который мы отправили текстовым сообщением'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/he.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "heDict": (()=>heDict)
});
const heDict = {
    'Account recovery requires verified contact information': 'שחזור לקוח דורש עוד מידע',
    'Authenticator App (TOTP)': 'אפליקציית אימות (TOTP)',
    'Back to Sign In': 'חזור להרשמה',
    'Change Password': 'עדכון סיסמא',
    Changing: 'מעדכן',
    Code: 'קוד',
    'Confirm Email Code': 'אמת קוד אימייל',
    'Confirm Password': 'אשר סיסמא',
    'Confirm Sign Up': 'אשר הרשמה',
    'Confirm SMS Code': 'אשר sms קוד',
    'Confirm TOTP Code': 'אשר totp קוד',
    Confirm: 'אישור',
    'Confirmation Code': 'אישור קוד',
    Confirming: 'מאשר',
    'Create a new account': 'צור משתמש חדש',
    'Create Account': 'צור משתמש',
    'Creating Account': 'יצירת משתמש',
    'Dismiss alert': 'הסר התראה',
    Email: 'אימייל',
    'Email Message': 'הודעת אימייל',
    'Enter your code': 'הכנס את הקוד',
    'Enter your Email': 'הכנס את המייל שלך',
    'Enter your phone number': 'הכנס את מספר הטלפון שלך',
    'Enter your username': 'הכנס את שם המתמש שלך',
    'Forgot your password?': 'שכחת סיסמא ?',
    'Hide password': 'הסתר סיסמא',
    Loading: 'טוען',
    'Multi-Factor Authentication': 'אימות רב-גורמי',
    'Multi-Factor Authentication Setup': 'הגדרת אימות רב-גורמי',
    'New password': 'סיסמא חדשה',
    or: 'אוֹ',
    Password: 'סיסמא',
    'Phone Number': 'מספר טלפון',
    'Resend Code': 'שלח קוד שוב',
    'Reset your password': 'אפס סיסמא',
    'Reset your Password': 'אפס סיסמא',
    'Select MFA Type': 'בחר סוג אימות רב-גורמי',
    'Send code': 'שלח קוד',
    'Send Code': 'שלח קוד',
    Sending: 'שולח',
    'Setup Email': 'הגדר אימייל',
    'Setup TOTP': 'Setup TOTP',
    'Show password': 'הצג סיסמא',
    'Sign in to your account': 'התחבר לחשבון שלך',
    'Sign In with Amazon': 'Sign In with Amazon',
    'Sign In with Apple': 'Sign In with Apple',
    'Sign In with Facebook': 'Sign In with Facebook',
    'Sign In with Google': 'Sign In with Google',
    'Sign in': 'התחבר',
    'Sign In': 'התחבר',
    'Signing in': 'מתחבר',
    Skip: 'דלג',
    Submit: 'שלח',
    Submitting: 'שולח',
    'Text Message (SMS)': 'הודעת טקסט (SMS)',
    Username: 'שם משתמש',
    'Verify Contact': 'אמת איש קשר',
    Verify: 'אמת'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ua.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "uaDict": (()=>uaDict)
});
const uaDict = {
    'Account recovery requires verified contact information': 'Відновлення облікового запису потребує контактної інформації',
    'Authenticator App (TOTP)': 'Додаток автентифікації (TOTP)',
    'Back to Sign In': 'Назад на сторінку входу',
    'Change Password': 'Змінити пароль',
    Changing: 'Змінюємо',
    Code: 'Код',
    'Confirm Email Code': 'Підтвердити код електронної пошти',
    'Confirm Password': 'Підтвердіть пароль',
    'Confirm Sign Up': 'Підтвердіть реєстрацію',
    'Confirm SMS Code': 'Підтвердіть SMS код',
    'Confirm TOTP Code': 'Підтвердіть TOTP код',
    Confirm: 'Підтвердити',
    'Confirmation Code': 'Код підтвердження',
    Confirming: 'Підтверджуємо',
    'Create a new account': 'Зареєструватися',
    'Create Account': 'Зареєструватися',
    'Creating Account': 'Реєструємо',
    'Dismiss alert': 'Відхилити сповіщення',
    Email: 'Email',
    'Email Message': 'Повідомлення електронної пошти',
    'Enter your code': 'Введіть код',
    'Enter your Email': 'Введіть ваш email',
    'Enter your phone number': 'Введіть ваш номер телефону',
    'Enter your username': 'Введіть ваше імʼя користувача',
    'Forgot password?': 'Забули пароль?',
    'Forgot your password?': 'Забули ваш пароль?',
    'Hide password': 'Сховати пароль',
    'It may take a minute to arrive': 'Доставка може тривати хвилину',
    Loading: 'Загружаємо',
    'Multi-Factor Authentication': 'Багатофакторна автентифікація',
    'Multi-Factor Authentication Setup': 'Налаштування багатофакторної автентифікації',
    'New password': 'Новий пароль',
    or: 'або',
    Password: 'Пароль',
    'Phone Number': 'Номер Телефону',
    'Resend Code': 'Відправити код повторно',
    'Reset your password': 'Скинути пароль',
    'Reset your Password': 'Скинути пароль',
    'Select MFA Type': 'Виберіть тип MFA',
    'Send code': 'Відправити код',
    'Send Code': 'Відправити код',
    Sending: 'Відправляємо',
    'Setup Email': 'Налаштувати електронну пошту',
    'Setup TOTP': 'Налаштувати TOTP',
    'Show password': 'Показати пароль',
    'Sign in to your account': 'Увійти у ваш обліковий запис',
    'Sign In with Amazon': 'Увійти з Amazon',
    'Sign In with Apple': 'Увійти з Apple',
    'Sign In with Facebook': 'Увійти з Facebook',
    'Sign In with Google': 'Увійти з Google',
    'Sign in': 'Увійти',
    'Sign In': 'Увійти',
    'Signing in': 'Входимо',
    Skip: 'Пропустити',
    Submit: 'Відправити',
    Submitting: 'Відправляємо',
    'Text Message (SMS)': 'Текстове повідомлення (SMS)',
    Username: 'Імʼя користувача',
    'Verify Contact': 'Підтвердити Контакт',
    Verify: 'Підтвердити',
    'We Emailed You': 'Ми відправили вам Email',
    'We Sent A Code': 'Ми відправили код',
    'We Texted You': 'Ми відправили вам текстове повідомлення',
    'Your code is on the way. To log in, enter the code we emailed to': 'Ваш код вже в дорозі. Щоб увійти, введіть код, що ми відправили вам на Email',
    'Your code is on the way. To log in, enter the code we sent you': 'Ваш код вже в дорозі. Щоб увійти, введіть код, що ми вам відправили',
    'Your code is on the way. To log in, enter the code we texted to': 'Ваш код вже в дорозі. Щоб увійти, введіть код, що ми відправили вам текстовим повідомленням',
    // Additional translations
    'An account with the given email already exists.': 'Обліковий запис з цим Email вже існує.',
    'Confirm a Code': 'Підтвердіть код',
    'Confirm Sign In': 'Підтвердіть вхід',
    'Forgot Password': 'Забули пароль',
    'Incorrect username or password.': 'Невірне імʼя користувача або пароль',
    'Invalid password format': 'Невірний формат паролю',
    'Invalid phone number format': 'Невірний формат номеру телефону',
    'Loading...': 'Загружаємо...',
    'New Password': 'Новий пароль',
    'Resend a Code': 'Відправити код повторно',
    'Reset Password': 'Скинути пароль',
    'Sign Out': 'Вийти',
    'Sign Up with Amazon': 'Зареєструватися з Amazon',
    'Sign Up with Apple': 'Зареєструватися з Apple',
    'Sign Up with Facebook': 'Зареєструватися з Facebook',
    'Sign Up with Google': 'Зареєструватися з Google',
    'Sign Up': 'Зареєструватися',
    'User already exists': 'Користувач вже існує',
    'User does not exist': 'Такий користувач не існує',
    'Username cannot be empty': 'Імʼя користувача не може бути пустим',
    'Your passwords must match': 'Паролі мають збігатися'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/th.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "thDict": (()=>thDict)
});
const thDict = {
    'Account recovery requires verified contact information': 'การกู้คืนบัญชีต้องมีข้อมูลติดต่อที่ได้รับการยืนยันแล้ว',
    'Add your Profile': 'เพิ่มโปรไฟล์ของคุณ',
    'Add your Website': 'เพิ่มเว็บไซต์ของคุณ',
    'Authenticator App (TOTP)': 'แอปพลิเคชันยืนยันตัวตน (TOTP)',
    'Back to Sign In': 'กลับไปที่การเข้าสู่ระบบ',
    'Change Password': 'เปลี่ยนรหัสผ่าน',
    Changing: 'กำลังเปลี่ยน',
    Code: 'รหัส',
    'Confirm Email Code': 'ยืนยันรหัสอีเมล',
    'Confirm Password': 'ยืนยันรหัสผ่าน',
    'Please confirm your Password': 'กรุณายืนยันรหัสผ่านของคุณ',
    'Confirm Sign Up': 'ยืนยันการลงทะเบียน',
    'Confirm SMS Code': 'ยืนยันรหัส SMS',
    'Confirm MFA Code': 'ยืนยันรหัส MFA',
    'Confirm TOTP Code': 'ยืนยันรหัส TOTP',
    Confirm: 'ยืนยัน',
    'Confirmation Code': 'รหัสยืนยัน',
    Confirming: 'กำลังยืนยัน',
    'Create a new account': 'สร้างบัญชีใหม่',
    'Create Account': 'สร้างบัญชี',
    'Creating Account': 'กำลังสร้างบัญชี',
    'Dismiss alert': 'ปิดการแจ้งเตือน',
    Email: 'อีเมล',
    'Email Message': 'ข้อความอีเมล',
    'Enter your Birthdate': 'กรอกวันเกิดของคุณ',
    'Enter your code': 'กรอกรหัสของคุณ',
    'Enter your Confirmation Code': 'กรอกรหัสยืนยันของคุณ',
    'Enter your Email': 'กรอกอีเมลของคุณ',
    'Enter your Family Name': 'กรอกนามสกุลของคุณ',
    'Enter your Given Name': 'กรอกชื่อของคุณ',
    'Enter your Middle Name': 'กรอกชื่อกลางของคุณ',
    'Enter your Name': 'กรอกชื่อของคุณ',
    'Enter your Nickname': 'กรอกชื่อเล่นของคุณ',
    'Enter your Password': 'กรอกรหัสผ่านของคุณ',
    'Enter your email': 'กรอกอีเมลของคุณ',
    'Enter your phone number': 'กรอกหมายเลขโทรศัพท์ของคุณ',
    'Enter your Preferred Username': 'กรอกชื่อผู้ใช้ที่ต้องการ',
    'Enter your username': 'กรอกชื่อผู้ใช้ของคุณ',
    'Forgot password?': 'ลืมรหัสผ่าน?',
    'Forgot your password?': 'ลืมรหัสผ่านใช่หรือไม่?',
    'Hide password': 'ซ่อนรหัสผ่าน',
    'It may take a minute to arrive': 'อาจใช้เวลาสักครู่',
    Loading: 'กำลังโหลด',
    'Multi-Factor Authentication': 'การยืนยันตัวตนหลายขั้นตอน',
    'Multi-Factor Authentication Setup': 'ตั้งค่าการยืนยันตัวตนแบบหลายขั้นตอน',
    'New password': 'รหัสผ่านใหม่',
    or: 'หรือ',
    Password: 'รหัสผ่าน',
    'Phone Number': 'หมายเลขโทรศัพท์',
    'Resend Code': 'ส่งรหัสอีกครั้ง',
    'Reset your Password': 'รีเซ็ตรหัสผ่านของคุณ',
    'Reset your password': 'รีเซ็ตรหัสผ่านของคุณ',
    'Select MFA Type': 'เลือกประเภท MFA',
    'Send code': 'ส่งรหัส',
    'Send Code': 'ส่งรหัส',
    Sending: 'กำลังส่ง',
    'Setup Email': 'ตั้งค่าอีเมล',
    'Setup TOTP': 'ตั้งค่า TOTP',
    'Show password': 'แสดงรหัสผ่าน',
    'Sign in to your account': 'เข้าสู่ระบบบัญชีของคุณ',
    'Sign In with Amazon': 'เข้าสู่ระบบด้วย Amazon',
    'Sign In with Apple': 'เข้าสู่ระบบด้วย Apple',
    'Sign In with Facebook': 'เข้าสู่ระบบด้วย Facebook',
    'Sign In with Google': 'เข้าสู่ระบบด้วย Google',
    'Sign in': 'เข้าสู่ระบบ',
    'Sign In': 'เข้าสู่ระบบ',
    'Signing in': 'กำลังเข้าสู่ระบบ',
    Skip: 'ข้าม',
    Submit: 'ส่ง',
    Submitting: 'กำลังส่ง',
    'Text Message (SMS)': 'ข้อความตัวอักษร (SMS)',
    Username: 'ชื่อผู้ใช้',
    'Verify Contact': 'ยืนยันการติดต่อ',
    Verify: 'ยืนยัน',
    'We Emailed You': 'เราได้ส่งอีเมลถึงคุณแล้ว',
    'We Sent A Code': 'เราได้ส่งรหัสแล้ว',
    'We Texted You': 'เราได้ส่ง SMS ถึงคุณแล้ว',
    'Your code is on the way. To log in, enter the code we emailed to': 'รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งไปยังอีเมล',
    'Your code is on the way. To log in, enter the code we sent you': 'รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งให้คุณ',
    'Your code is on the way. To log in, enter the code we texted to': 'รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งไปยัง SMS',
    // Additional translations
    'An account with the given email already exists.': 'บัญชีที่ใช้อีเมลนี้มีอยู่แล้ว',
    'Confirm a Code': 'ยืนยันรหัส',
    'Confirm Sign In': 'ยืนยันการเข้าสู่ระบบ',
    'Create account': 'สร้างบัญชี',
    'Sign Up with Facebook': 'ลงทะเบียนด้วย Facebook',
    'Sign Up with Google': 'ลงทะเบียนด้วย Google',
    'Sign Up with Apple': 'ลงทะเบียนด้วย Apple',
    'Sign Up with Line': 'ลงทะเบียนด้วย Line',
    'Forgot Password': 'ลืมรหัสผ่าน',
    'Have an account? ': 'มีบัญชีอยู่แล้ว? ',
    'Incorrect username or password': 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
    'Invalid password format': 'รูปแบบรหัสผ่านไม่ถูกต้อง',
    'It may take a minute to arrive.': 'อาจใช้เวลาสักครู่ในการมาถึง',
    'Lost your code? ': 'หารหัสไม่เจอ? ',
    'New Password': 'รหัสผ่านใหม่',
    'No account? ': 'ไม่มีบัญชี? ',
    'Password attempts exceeded': 'เกินจำนวนครั้งที่อนุญาตให้ใส่รหัสผ่าน',
    'Reset password': 'รีเซ็ตรหัสผ่าน',
    'Reset Password': 'รีเซ็ตรหัสผ่าน',
    'Sign Out': 'ออกจากระบบ',
    'Sign Up': 'ลงทะเบียน',
    'User already exists': 'ผู้ใช้นี้มีอยู่แล้ว',
    'User does not exist': 'ไม่มีผู้ใช้นี้',
    'Username cannot be empty': 'ต้องใส่ชื่อผู้ใช้งาน'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/defaultTexts.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultTexts": (()=>defaultTexts)
});
const defaultTexts = {
    ADD_PROFILE: 'Add your Profile',
    ADD_WEBSITE: 'Add your Website',
    BACK_SIGN_IN: 'Back to Sign In',
    BIRTHDATE: 'Birthdate',
    CHANGE_PASSWORD: 'Change Password',
    CHANGING_PASSWORD: 'Changing',
    CODE: 'Code',
    CODE_ARRIVAL: 'It may take a minute to arrive',
    CODE_EMAILED: 'Your code is on the way. To log in, enter the code we emailed to',
    CODE_SENT: 'Your code is on the way. To log in, enter the code we sent you',
    CODE_TEXTED: 'Your code is on the way. To log in, enter the code we texted to',
    CONFIRM_PASSWORD: 'Confirm Password',
    CONFIRM_PASSWORD_PLACEHOLDER: 'Please confirm your Password',
    CONFIRM_RESET_PASSWORD_HEADING: 'Reset your Password',
    CONFIRM_SIGNUP_HEADING: 'Confirm Sign Up',
    CONFIRM_SMS: 'Confirm SMS Code',
    CONFIRM_EMAIL: 'Confirm Email Code',
    // If challenge name is not returned
    CONFIRM_MFA_DEFAULT: 'Confirm MFA Code',
    CONFIRM_TOTP: 'Confirm TOTP Code',
    CONFIRM: 'Confirm',
    CONFIRMATION_CODE: 'Confirmation Code',
    CONFIRMING: 'Confirming',
    CREATE_ACCOUNT: 'Create Account',
    CREATING_ACCOUNT: 'Creating Account',
    EMAIL_ADDRESS: 'Email',
    EMAIL_OTP: 'Email Message',
    ENTER_BIRTHDATE: 'Enter your Birthdate',
    ENTER_CODE: 'Enter your code',
    ENTER_CONFIRMATION_CODE: 'Enter your Confirmation Code',
    ENTER_EMAIL: 'Enter your Email',
    ENTER_FAMILY_NAME: 'Enter your Family Name',
    ENTER_GIVEN_NAME: 'Enter your Given Name',
    ENTER_MIDDLE_NAME: 'Enter your Middle Name',
    ENTER_NAME: 'Enter your Name',
    ENTER_NICK_NAME: 'Enter your Nickname',
    ENTER_PASSWORD: 'Enter your Password',
    ENTER_PHONE_NUMBER: 'Enter your Phone Number',
    ENTER_PREFERRED_USERNAME: 'Enter your Preferred Username',
    ENTER_USERNAME: 'Enter your username',
    FAMILY_NAME: 'Family Name',
    GIVEN_NAME: 'Given Name',
    FORGOT_PASSWORD: 'Forgot Password?',
    FORGOT_YOUR_PASSWORD: 'Forgot your password?',
    HIDE_PASSWORD: 'Hide password',
    LOADING: 'Loading',
    LOGIN_NAME: 'Username',
    MIDDLE_NAME: 'Middle Name',
    MFA_SETUP_SELECTION: 'Multi-Factor Authentication Setup',
    MFA_SELECTION: 'Multi-Factor Authentication',
    NAME: 'Name',
    NICKNAME: 'Nickname',
    NEW_PASSWORD: 'New password',
    OR: 'or',
    PASSWORD: 'Password',
    PHONE_NUMBER: 'Phone Number',
    PREFERRED_USERNAME: 'Preferred Username',
    PROFILE: 'Profile',
    RESEND_CODE: 'Resend Code',
    RESET_PASSWORD_HEADING: 'Reset your password',
    RESET_PASSWORD: 'Reset Password',
    SEND_CODE: 'Send code',
    SENDING: 'Sending',
    SELECT_MFA_TYPE: 'Select MFA Type',
    SETUP_EMAIL: 'Setup Email',
    SETUP_TOTP: 'Setup TOTP',
    SHOW_PASSWORD: 'Show password',
    SIGN_IN_BUTTON: 'Sign in',
    SIGN_IN_TAB: 'Sign In',
    SIGN_IN_WITH_AMAZON: 'Sign In with Amazon',
    SIGN_IN_WITH_APPLE: 'Sign In with Apple',
    SIGN_IN_WITH_FACEBOOK: 'Sign In with Facebook',
    SIGN_IN_WITH_GOOGLE: 'Sign In with Google',
    SIGN_IN: 'Sign in to your account',
    SIGN_UP_BUTTON: 'Create a new account',
    SIGNING_IN_BUTTON: 'Signing in',
    SKIP: 'Skip',
    SMS_MFA: 'Text Message (SMS)',
    SUBMIT: 'Submit',
    SUBMITTING: 'Submitting',
    SOFTWARE_TOKEN_MFA: 'Authenticator App (TOTP)',
    UPPERCASE_COPY: 'COPY',
    VERIFY_CONTACT: 'Verify Contact',
    VERIFY_HEADING: 'Account recovery requires verified contact information',
    VERIFY: 'Verify',
    WE_EMAILED: 'We Emailed You',
    WE_SENT_CODE: 'We Sent A Code',
    WE_TEXTED: 'We Texted You',
    WEBSITE: 'Website'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deDict": (()=>deDict),
    "defaultTexts": (()=>defaultTexts),
    "enDict": (()=>enDict),
    "esDict": (()=>esDict),
    "frDict": (()=>frDict),
    "heDict": (()=>heDict),
    "idDict": (()=>idDict),
    "itDict": (()=>itDict),
    "jaDict": (()=>jaDict),
    "krDict": (()=>krDict),
    "nbDict": (()=>nbDict),
    "nlDict": (()=>nlDict),
    "plDict": (()=>plDict),
    "ptDict": (()=>ptDict),
    "ruDict": (()=>ruDict),
    "svDict": (()=>svDict),
    "thDict": (()=>thDict),
    "trDict": (()=>trDict),
    "uaDict": (()=>uaDict),
    "zhDict": (()=>zhDict)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$de$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/de.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$en$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/en.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/es.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$fr$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/fr.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$it$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/it.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$ja$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ja.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$kr$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/kr.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$nb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/nb.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$nl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/nl.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$pl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/pl.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$pt$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/pt.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$zh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/zh.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$sv$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/sv.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/id.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$tr$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/tr.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$ru$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ru.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$he$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/he.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$ua$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ua.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$th$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/th.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$defaultTexts$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/defaultTexts.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//merge all the new module translations in respective locale constants
const deDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$de$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deDict"]
};
const enDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$en$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enDict"]
};
const esDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["esDict"]
};
const frDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$fr$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frDict"]
};
const itDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$it$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itDict"]
};
const jaDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$ja$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jaDict"]
};
const krDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$kr$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["krDict"]
};
const nbDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$nb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nbDict"]
};
const nlDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$nl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nlDict"]
};
const plDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$pl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["plDict"]
};
const ptDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$pt$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ptDict"]
};
const zhDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$zh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zhDict"]
};
const svDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$sv$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svDict"]
};
const idDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["idDict"]
};
const trDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$tr$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trDict"]
};
const ruDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$ru$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ruDict"]
};
const heDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$he$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heDict"]
};
const uaDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$ua$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uaDict"]
};
const thDict = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$th$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thDict"]
};
const defaultTexts = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$authenticator$2f$defaultTexts$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTexts"]
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/translations.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultTexts": (()=>DefaultTexts),
    "hasTranslation": (()=>hasTranslation),
    "translate": (()=>translate),
    "translations": (()=>translations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/I18n/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/index.mjs [app-ssr] (ecmascript)");
;
;
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */ /**
 * Contains translatable strings that authenticator provides by default. Customers
 * can use this to add custom vocabularies:
 *
 * ```
 * I18n.putVocabulariesForLanguage("en", {
 *  [DefaultTexts.SIGN_IN]: "Custom Sign In Text",
 *  [DefaultTexts.SIGN_IN_BUTTON]: "Custom Click Here to Sign In"
 * });
 * ```
 */ const DefaultTexts = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTexts"]
};
/**
 * This helper type checks that given phrase is one of the texts @aws-amplify/ui
 * provides by default. This enables vscode autocompletion to help catch typos
 * during development.
 *
 * You can also use translate<string> to handle custom strings or dynamic content.
 */ function translate(phrase) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18n"].get(phrase);
}
/**
 * Whether I18n has a translation entry for given phrase
 */ function hasTranslation(phrase) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$I18n$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18n"].get(phrase) !== phrase;
}
const translations = {
    de: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deDict"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enDict"],
    es: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["esDict"],
    fr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frDict"],
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["idDict"],
    it: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itDict"],
    ja: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jaDict"],
    // TODO: remove kr in next major release
    kr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["krDict"],
    ko: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["krDict"],
    nb: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nbDict"],
    nl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nlDict"],
    pl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["plDict"],
    pt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ptDict"],
    zh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zhDict"],
    sv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svDict"],
    tr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trDict"],
    ru: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ruDict"],
    he: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heDict"],
    ua: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uaDict"],
    th: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thDict"]
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/utils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyTranslation": (()=>applyTranslation),
    "getPrimaryAlias": (()=>getPrimaryAlias),
    "sortFormFields": (()=>sortFormFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/translations.mjs [app-ssr] (ecmascript)");
;
const getPrimaryAlias = (state)=>{
    const loginMechanisms = state?.context.config?.loginMechanisms;
    /**
     * @migration this is where we grab only the first index of `aws_cognito_username_attributes`
     */ const [primaryAlias] = loginMechanisms ?? [
        'username'
    ];
    return primaryAlias;
};
/** Applies translations to label and placeholder */ const applyTranslation = (formFields)=>{
    const newFormFields = {
        ...formFields
    };
    for (const [name, options] of Object.entries(formFields)){
        const { label, placeholder } = options;
        newFormFields[name] = {
            ...options,
            label: label ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(label) : undefined,
            placeholder: placeholder ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(placeholder) : undefined
        };
    }
    return newFormFields;
};
/** Sorts formFields according to their `order`.  */ const sortFormFields = (formFields)=>{
    return Object.entries(formFields).sort((a, b)=>{
        const orderA = a[1].order || Number.MAX_VALUE;
        const orderB = b[1].order || Number.MAX_VALUE;
        return orderA - orderB;
    }).filter((formFieldEntry)=>formFieldEntry[1] !== undefined);
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/defaults.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_COUNTRY_CODE": (()=>DEFAULT_COUNTRY_CODE),
    "defaultFormFieldsGetters": (()=>defaultFormFieldsGetters),
    "getAliasDefaultFormField": (()=>getAliasDefaultFormField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/actor.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$form$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/form.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
/**
 * This file contains helpers that generate default formFields for each screen
 */ const DEFAULT_COUNTRY_CODE = '+1';
/** Helper function that gets the default formField for given field name */ const getDefaultFormField = (fieldName)=>{
    let options = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultFormFieldOptions"][fieldName];
    const { type } = options;
    if (type === 'tel') {
        options = {
            ...options,
            dialCode: DEFAULT_COUNTRY_CODE
        };
    }
    return options;
};
// Helper function that returns default form field for configured primary alias
const getAliasDefaultFormField = (state)=>{
    const primaryAlias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrimaryAlias"])(state);
    return {
        ...getDefaultFormField(primaryAlias),
        autocomplete: 'username'
    };
};
/** Reusable confirmation code form fields. */ const getConfirmationCodeFormFields = (_)=>({
        confirmation_code: {
            ...getDefaultFormField('confirmation_code'),
            label: 'Code *',
            placeholder: 'Code'
        }
    });
const getSignInFormFields = (state)=>({
        username: {
            ...getAliasDefaultFormField(state)
        },
        password: {
            ...getDefaultFormField('password'),
            autocomplete: 'current-password'
        }
    });
const getSignUpFormFields = (state)=>{
    const { loginMechanisms, signUpAttributes } = state.context.config;
    const primaryAlias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrimaryAlias"])(state);
    /**
     * @migration signUp Fields created here
     */ const fieldNames = Array.from(new Set([
        ...loginMechanisms,
        'password',
        'confirm_password',
        ...signUpAttributes
    ]));
    const formField = {};
    for (const fieldName of fieldNames){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$form$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthFieldWithDefaults"])(fieldName)) {
            const fieldAttrs = fieldName === primaryAlias ? getAliasDefaultFormField(state) : getDefaultFormField(fieldName);
            formField[fieldName] = {
                ...fieldAttrs
            };
        } else {
            // There's a `custom:*` attribute or one we don't already have an implementation for
            // eslint-disable-next-line no-console
            console.debug(`Authenticator does not have a default implementation for ${fieldName}. Customize SignUp FormFields to add your own.`);
        }
    }
    return formField;
};
const getConfirmSignUpFormFields = (_)=>({
        confirmation_code: {
            ...getDefaultFormField('confirmation_code'),
            placeholder: 'Enter your code'
        }
    });
const getForgotPasswordFormFields = (state)=>{
    const primaryAlias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrimaryAlias"])(state);
    const { label } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultFormFieldOptions"][primaryAlias];
    return {
        username: {
            ...getAliasDefaultFormField(state),
            label: `Enter your ${label.toLowerCase()}`,
            placeholder: `Enter your ${label.toLowerCase()}`
        }
    };
};
const getConfirmResetPasswordFormFields = (state)=>({
        ...getConfirmationCodeFormFields(),
        password: {
            ...getDefaultFormField('password'),
            label: 'New Password',
            placeholder: 'New Password'
        },
        confirm_password: {
            ...getDefaultFormField('confirm_password'),
            label: 'Confirm Password',
            placeholder: 'Confirm Password'
        }
    });
const getForceNewPasswordFormFields = (state)=>{
    const actorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorState"])(state);
    const { missingAttributes } = actorState.context;
    const fieldNames = Array.from(new Set([
        'password',
        'confirm_password',
        ...missingAttributes ?? []
    ]));
    const formField = {};
    for (const fieldName of fieldNames){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$form$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthFieldWithDefaults"])(fieldName)) {
            formField[fieldName] = {
                ...getDefaultFormField(fieldName)
            };
        } else {
            // There's a `custom:*` attribute or one we don't already have an implementation for
            // eslint-disable-next-line no-console
            console.debug(`Authenticator does not have a default implementation for ${fieldName}. Customize ForceNewPassword FormFields to add your own.`);
        }
    }
    return formField;
};
const getSetupEmailFormFields = (_)=>({
        email: getDefaultFormField('email')
    });
/** Collect all the defaultFormFields getters */ const defaultFormFieldsGetters = {
    signIn: getSignInFormFields,
    signUp: getSignUpFormFields,
    confirmSignUp: getConfirmSignUpFormFields,
    confirmSignIn: getConfirmationCodeFormFields,
    forceNewPassword: getForceNewPasswordFormFields,
    forgotPassword: getForgotPasswordFormFields,
    confirmResetPassword: getConfirmResetPasswordFormFields,
    confirmVerifyUser: getConfirmationCodeFormFields,
    setupEmail: getSetupEmailFormFields,
    setupTotp: getConfirmationCodeFormFields
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/formFields.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCustomFormFields": (()=>getCustomFormFields),
    "getDefaultFormFields": (()=>getDefaultFormFields),
    "getFormFields": (()=>getFormFields),
    "getSortedFormFields": (()=>getSortedFormFields),
    "removeOrderKeys": (()=>removeOrderKeys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$attributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/authenticator/attributes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/actor.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$defaults$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/defaults.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Gets the default formFields for given route
const getDefaultFormFields = (route, state)=>{
    const formFieldGetter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$defaults$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultFormFieldsGetters"][route];
    return formFieldGetter(state);
};
// Gets custom formFields, and applies default values
const getCustomFormFields = (route, state)=>{
    const customFormFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$actor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorContext"])(state)?.formFields?.[route];
    if (!customFormFields || Object.keys(customFormFields).length === 0) {
        return {};
    }
    return Object.entries(customFormFields).reduce((acc, [fieldName, customOptions])=>{
        if ((route === 'signIn' || route === 'forgotPassword') && fieldName === 'username') {
            // Unlike other screens, `signIn` and `forgotPassword` screens default login
            // alias field names to "username", even if it's a phone number or email.
            // In this case, we get the default formFieldOptions based on loginMechanism.
            const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$defaults$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAliasDefaultFormField"])(state);
            // apply default to fill any gaps that are not present in customOptions
            const mergedOptions = {
                ...defaultOptions,
                ...customOptions
            };
            return {
                ...acc,
                [fieldName]: mergedOptions
            };
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$attributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthFieldsWithDefaults"])(fieldName)) {
            // if this field is a known auth attribute that we have defaults for,
            // apply defaults to customOptions.
            const defaultOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultFormFieldOptions"][fieldName];
            const mergedOptions = {
                ...defaultOptions,
                ...customOptions
            };
            return {
                ...acc,
                [fieldName]: mergedOptions
            };
        } else {
            // if this is not a known field, use customOptions as is.
            return {
                ...acc,
                [fieldName]: customOptions
            };
        }
    }, {});
};
const getFormFields = (route, state)=>{
    const defaultFormFields = getDefaultFormFields(route, state);
    const customFormFields = getCustomFormFields(route, state);
    const formFields = {
        ...defaultFormFields,
        ...customFormFields
    };
    delete formFields['QR'];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTranslation"])(formFields);
};
const removeOrderKeys = (formFields)=>formFields.map((field)=>{
        const key = field[0];
        // Drop order key to prevent passing to form field UI components
        const values = {
            ...field[1],
            order: undefined
        };
        return [
            key,
            values
        ];
    });
/** Calls `getFormFields` above, then sorts it into an indexed array */ const getSortedFormFields = (route, state)=>{
    const formFields = getFormFields(route, state);
    return removeOrderKeys((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$formFields$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortFormFields"])(formFields));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authenticatorTextUtil": (()=>authenticatorTextUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/translations.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/index.mjs [app-ssr] (ecmascript)");
;
;
/**
 * ConfirmSignIn
 */ const getChallengeText = (challengeName)=>{
    switch(challengeName){
        case 'EMAIL_OTP':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CONFIRM_EMAIL);
        case 'SMS_MFA':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CONFIRM_SMS);
        case 'SOFTWARE_TOKEN_MFA':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CONFIRM_TOTP);
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CONFIRM_MFA_DEFAULT);
    }
};
/**
 * ConfirmSignUp
 */ const getDeliveryMessageText = (codeDeliveryDetails)=>{
    const { DeliveryMedium, Destination } = codeDeliveryDetails ?? {};
    const isEmailMessage = DeliveryMedium === 'EMAIL';
    const isTextMessage = DeliveryMedium === 'SMS';
    const arrivalMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CODE_ARRIVAL);
    if (!(isEmailMessage || isTextMessage)) {
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CODE_SENT)}. ${arrivalMessage}.`;
    }
    const instructionMessage = isEmailMessage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CODE_EMAILED) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CODE_TEXTED);
    return `${instructionMessage} ${Destination}. ${arrivalMessage}.`;
};
const getDeliveryMethodText = (codeDeliveryDetails)=>{
    const { DeliveryMedium } = codeDeliveryDetails ?? {};
    const isEmailMessage = DeliveryMedium === 'EMAIL';
    const isTextMessage = DeliveryMedium === 'SMS';
    if (!isEmailMessage && isTextMessage) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].WE_SENT_CODE);
    }
    return isEmailMessage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].WE_EMAILED) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].WE_TEXTED);
};
/**
 * FederatedSignIn
 */ const providerNameMap = {
    amazon: 'Amazon',
    apple: 'Apple',
    facebook: 'Facebook',
    google: 'Google'
};
const getSignInWithFederationText = (route, provider)=>{
    const isSignIn = route === 'signIn';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(`Sign ${isSignIn ? 'In' : 'Up'} with ${providerNameMap[provider]}`);
};
/**
 * SelectMfaType
 */ const getSelectMfaTypeByChallengeName = (challengeName)=>{
    if (challengeName === 'MFA_SETUP') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].MFA_SETUP_SELECTION);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].MFA_SELECTION);
};
const getMfaTypeLabelByValue = (mfaType)=>{
    switch(mfaType){
        case 'EMAIL':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTexts"].EMAIL_OTP);
        case 'SMS':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTexts"].SMS_MFA);
        case 'TOTP':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$dictionaries$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTexts"].SOFTWARE_TOKEN_MFA);
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(mfaType);
    }
};
const authenticatorTextUtil = {
    /** Shared */ getBackToSignInText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].BACK_SIGN_IN),
    getChangePasswordText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CHANGE_PASSWORD),
    getChangingText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CHANGING_PASSWORD),
    getConfirmText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CONFIRM),
    getConfirmingText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CONFIRMING),
    getCopyText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].UPPERCASE_COPY),
    getHidePasswordText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].HIDE_PASSWORD),
    getLoadingText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].LOADING),
    getOrText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].OR),
    getResendCodeText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].RESEND_CODE),
    getSendCodeText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SEND_CODE),
    getSendingText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SENDING),
    getShowPasswordText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SHOW_PASSWORD),
    getSubmitText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SUBMIT),
    getSubmittingText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SUBMITTING),
    /** SignInSignUpTabs */ getSignInTabText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SIGN_IN_TAB),
    getSignUpTabText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CREATE_ACCOUNT),
    /** SignIn */ getForgotPasswordText: (shortVersion)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(shortVersion ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].FORGOT_PASSWORD : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].FORGOT_YOUR_PASSWORD),
    getSigningInText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SIGNING_IN_BUTTON),
    getSignInText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SIGN_IN_BUTTON),
    /** SignUp */ getCreatingAccountText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CREATING_ACCOUNT),
    getCreateAccountText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].CREATE_ACCOUNT),
    /** ConfirmSignUp */ getDeliveryMessageText,
    getDeliveryMethodText,
    /** ConfirmSignIn */ getChallengeText,
    /** ForgotPassword */ getResetYourPasswordText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].RESET_PASSWORD),
    /** SetupEmail */ getSetupEmailText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SETUP_EMAIL),
    /** SetupTotp */ getSetupTotpText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SETUP_TOTP),
    // TODO: add defaultText for below
    getSetupTotpInstructionsText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])('Copy and paste the secret key below into an authenticator app and then enter the code in the text field below.'),
    // TODO: add defaultText for "COPIED"
    getCopiedText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])('COPIED'),
    /** FederatedSignIn */ getSignInWithFederationText,
    /** SelectMfaType */ getMfaTypeLabelByValue,
    getSelectMfaTypeByChallengeName,
    getSelectMfaTypeText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SELECT_MFA_TYPE),
    /** VerifyUser */ getSkipText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].SKIP),
    getVerifyText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].VERIFY),
    getVerifyContactText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].VERIFY_CONTACT),
    getAccountRecoveryInfoText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTexts"].VERIFY_HEADING),
    /** Validations */ // TODO: add defaultText
    getInvalidEmailText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])('Please enter a valid email'),
    // TODO: add defaultText
    getRequiredFieldText: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translate"])('This field is required')
}; // using `as const` so that keys are strongly typed
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "classNames": (()=>classNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
;
const classNames = (...args)=>{
    const classes = [];
    for (const arg of args){
        // skip falsey values
        if (!arg) {
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(arg)) {
            classes.push(arg);
            continue;
        }
        if (typeof arg === 'number') {
            classes.push(arg.toString());
            continue;
        }
        if (Array.isArray(arg)) {
            classes.push(classNames(...arg));
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(arg)) {
            // check if the object has a valid .toString() method
            if (arg.toString !== Object.prototype.toString && arg.toString() !== '[object Object]') {
                classes.push(arg.toString());
                continue;
            }
            for(const key in arg){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["has"])(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(' ');
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ComponentClassName": (()=>ComponentClassName)
});
const ComponentClassName = {
    Accordion: 'amplify-accordion',
    AccordionItem: 'amplify-accordion__item',
    AccordionItemTrigger: 'amplify-accordion__item__trigger',
    AccordionItemContent: 'amplify-accordion__item__content',
    AccordionItemIcon: 'amplify-accordion__item__icon',
    Alert: 'amplify-alert',
    AlertIcon: 'amplify-alert__icon',
    AlertHeading: 'amplify-alert__heading',
    AlertBody: 'amplify-alert__body',
    AlertDismiss: 'amplify-alert__dismiss',
    Autocomplete: 'amplify-autocomplete',
    AutocompleteMenu: 'amplify-autocomplete__menu',
    AutocompleteMenuEmpty: 'amplify-autocomplete__menu--empty',
    AutocompleteMenuFooter: 'amplify-autocomplete__menu__footer',
    AutocompleteMenuHeader: 'amplify-autocomplete__menu__header',
    AutocompleteMenuLoading: 'amplify-autocomplete__menu--loading',
    AutocompleteMenuOption: 'amplify-autocomplete__menu__option',
    AutocompleteMenuOptions: 'amplify-autocomplete__menu__options',
    Avatar: 'amplify-avatar',
    AvatarIcon: 'amplify-avatar__icon',
    AvatarImage: 'amplify-avatar__image',
    AvatarLoader: 'amplify-avatar__loader',
    AIConversation: 'amplify-ai-conversation',
    AIConversationScrollView: 'amplify-ai-conversation__scrollview',
    AIConversationAttachment: 'amplify-ai-conversation__attachment',
    AIConversationAttachmentList: 'amplify-ai-conversation__attachment__list',
    AIConversationAttachmentImage: 'amplify-ai-conversation__attachment__image',
    AIConversationAttachmentName: 'amplify-ai-conversation__attachment__name',
    AIConversationAttachmentSize: 'amplify-ai-conversation__attachment__size',
    AIConversationAttachmentRemove: 'amplify-ai-conversation__attachment__remove',
    AIConversationForm: 'amplify-ai-conversation__form',
    AIConversationFormAttach: 'amplify-ai-conversation__form__attach',
    AIConversationFormError: 'amplify-ai-conversation__form__error',
    AIConversationFormSend: 'amplify-ai-conversation__form__send',
    AIConversationFormField: 'amplify-ai-conversation__form__field',
    AIConversationFormDropzone: 'amplify-ai-conversation__form__dropzone',
    AIConversationMessage: 'amplify-ai-conversation__message',
    AIConversationMessageAvatar: 'amplify-ai-conversation__message__avatar',
    AIConversationMessageSender: 'amplify-ai-conversation__message__sender',
    AIConversationMessageSenderUsername: 'amplify-ai-conversation__message__sender__username',
    AIConversationMessageSenderTimestamp: 'amplify-ai-conversation__message__sender__timestamp',
    AIConversationMessageBody: 'amplify-ai-conversation__message__body',
    AIConversationMessageContent: 'amplify-ai-conversation__message__content',
    AIConversationMessageActions: 'amplify-ai-conversation__message__actions',
    AIConversationMessageList: 'amplify-ai-conversation__message__list',
    AIConversationPrompt: 'amplify-ai-conversation__prompt',
    Badge: 'amplify-badge',
    Breadcrumbs: 'amplify-breadcrumbs',
    BreadcrumbsList: 'amplify-breadcrumbs__list',
    BreadcrumbsItem: 'amplify-breadcrumbs__item',
    BreadcrumbsSeparator: 'amplify-breadcrumbs__separator',
    BreadcrumbsLink: 'amplify-breadcrumbs__link',
    Button: 'amplify-button',
    ButtonGroup: 'amplify-buttongroup',
    ButtonLoaderWrapper: 'amplify-button__loader-wrapper',
    Card: 'amplify-card',
    Checkbox: 'amplify-checkbox',
    CheckboxButton: 'amplify-checkbox__button',
    CheckboxIcon: 'amplify-checkbox__icon',
    CheckboxInput: 'amplify-checkbox__input',
    CheckboxLabel: 'amplify-checkbox__label',
    CheckboxField: 'amplify-checkboxfield',
    Collection: 'amplify-collection',
    CollectionItems: 'amplify-collection-items',
    CollectionSearch: 'amplify-collection-search',
    CollectionPagination: 'amplify-collection-pagination',
    CountryCodeSelect: 'amplify-countrycodeselect',
    DialCodeSelect: 'amplify-dialcodeselect',
    Divider: 'amplify-divider',
    DividerLabel: 'amplify-divider--label',
    DropZone: 'amplify-dropzone',
    Field: 'amplify-field',
    FieldDescription: 'amplify-field__description',
    FieldErrorMessage: 'amplify-field__error-message',
    FieldGroup: 'amplify-field-group',
    FieldGroupControl: 'amplify-field-group__control',
    FieldGroupOuterEnd: 'amplify-field-group__outer-end',
    FieldGroupOuterStart: 'amplify-field-group__outer-start',
    FieldGroupInnerEnd: 'amplify-field-group__inner-end',
    FieldGroupInnerStart: 'amplify-field-group__inner-start',
    FieldGroupIcon: 'amplify-field-group__icon',
    FieldGroupIconButton: 'amplify-field-group__icon-button',
    FieldGroupHasInnerEnd: 'amplify-field-group--has-inner-end',
    FieldGroupHasInnerStart: 'amplify-field-group--has-inner-start',
    FieldShowPassword: 'amplify-field__show-password',
    FieldGroupFieldWrapper: 'amplify-field-group__field-wrapper',
    Fieldset: 'amplify-fieldset',
    FieldsetLegend: 'amplify-fieldset__legend',
    FileUploader: 'amplify-fileuploader',
    FileUploaderDropZone: 'amplify-fileuploader__dropzone',
    FileUploaderDropZoneIcon: 'amplify-fileuploader__dropzone__icon',
    FileUploaderDropZoneText: 'amplify-fileuploader__dropzone__text',
    FileUploaderFilePicker: 'amplify-fileuploader__file__picker',
    FileUploaderFile: 'amplify-fileuploader__file',
    FileUploaderFileWrapper: 'amplify-fileuploader__file__wrapper',
    FileUploaderFileList: 'amplify-fileuploader__file__list',
    FileUploaderFileName: 'amplify-fileuploader__file__name',
    FileUploaderFileSize: 'amplify-fileuploader__file__size',
    FileUploaderFileInfo: 'amplify-fileuploader__file__info',
    FileUploaderFileImage: 'amplify-fileuploader__file__image',
    FileUploaderFileMain: 'amplify-fileuploader__file__main',
    FileUploaderFileStatus: 'amplify-fileuploader__file__status',
    FileUploaderLoader: 'amplify-fileuploader__loader',
    FileUploaderPreviewer: 'amplify-fileuploader__previewer',
    FileUploaderPreviewerText: 'amplify-fileuploader__previewer__text',
    FileUploaderPreviewerActions: 'amplify-fileuploader__previewer__actions',
    FileUploaderPreviewerFooter: 'amplify-fileuploader__previewer__footer',
    Flex: 'amplify-flex',
    Grid: 'amplify-grid',
    Heading: 'amplify-heading',
    HighlightMatch: 'amplify-highlightmatch',
    HighlightMatchHighlighted: 'amplify-highlightmatch__highlighted',
    Icon: 'amplify-icon',
    Image: 'amplify-image',
    Input: 'amplify-input',
    Label: 'amplify-label',
    Link: 'amplify-link',
    Loader: 'amplify-loader',
    LoaderLabel: 'amplify-loader__label',
    MenuContent: 'amplify-menu__content',
    MenuItem: 'amplify-menu__content__item',
    MenuTrigger: 'amplify-menu__trigger',
    MenuWrapper: 'amplify-menu__wrapper',
    Message: 'amplify-message',
    MessageIcon: 'amplify-message__icon',
    MessageHeading: 'amplify-message__heading',
    MessageBody: 'amplify-message__body',
    MessageContent: 'amplify-message__content',
    MessageDismiss: 'amplify-message__dismiss',
    Pagination: 'amplify-pagination',
    PaginationItem: 'amplify-pagination__item',
    PasswordField: 'amplify-passwordfield',
    PhoneNumberField: 'amplify-phonenumberfield',
    Placeholder: 'amplify-placeholder',
    Radio: 'amplify-radio',
    RadioButton: 'amplify-radio__button',
    RadioInput: 'amplify-radio__input',
    RadioLabel: 'amplify-radio__label',
    RadioGroupField: 'amplify-radiogroupfield',
    RadioGroup: 'amplify-radiogroup',
    Rating: 'amplify-rating',
    RatingItem: 'amplify-rating__item',
    RatingIcon: 'amplify-rating__icon',
    RatingLabel: 'amplify-rating__label',
    ScrollView: 'amplify-scrollview',
    SearchField: 'amplify-searchfield',
    SearchFieldClear: 'amplify-searchfield__clear',
    SearchFieldSearch: 'amplify-searchfield__search',
    Select: 'amplify-select',
    SelectField: 'amplify-selectfield',
    SelectWrapper: 'amplify-select__wrapper',
    SelectIcon: 'amplify-select__icon',
    SliderField: 'amplify-sliderfield',
    SliderFieldGroup: 'amplify-sliderfield__group',
    SliderFieldLabel: 'amplify-sliderfield__label',
    SliderFieldRange: 'amplify-sliderfield__range',
    SliderFieldRoot: 'amplify-sliderfield__root',
    SliderFieldThumb: 'amplify-sliderfield__thumb',
    SliderFieldTrack: 'amplify-sliderfield__track',
    StepperField: 'amplify-stepperfield',
    StepperFieldButtonDecrease: 'amplify-stepperfield__button--decrease',
    StepperFieldButtonIncrease: 'amplify-stepperfield__button--increase',
    StepperFieldInput: 'amplify-stepperfield__input',
    StorageImage: 'amplify-storageimage',
    StorageManager: 'amplify-storagemanager',
    StorageManagerDropZone: 'amplify-storagemanager__dropzone',
    StorageManagerDropZoneIcon: 'amplify-storagemanager__dropzone__icon',
    StorageManagerDropZoneText: 'amplify-storagemanager__dropzone__text',
    StorageManagerFilePicker: 'amplify-storagemanager__file__picker',
    StorageManagerFile: 'amplify-storagemanager__file',
    StorageManagerFileWrapper: 'amplify-storagemanager__file__wrapper',
    StorageManagerFileList: 'amplify-storagemanager__file__list',
    StorageManagerFileName: 'amplify-storagemanager__file__name',
    StorageManagerFileSize: 'amplify-storagemanager__file__size',
    StorageManagerFileInfo: 'amplify-storagemanager__file__info',
    StorageManagerFileImage: 'amplify-storagemanager__file__image',
    StorageManagerFileMain: 'amplify-storagemanager__file__main',
    StorageManagerFileStatus: 'amplify-storagemanager__file__status',
    StorageManagerLoader: 'amplify-storagemanager__loader',
    StorageManagerPreviewer: 'amplify-storagemanager__previewer',
    StorageManagerPreviewerText: 'amplify-storagemanager__previewer__text',
    StorageManagerPreviewerActions: 'amplify-storagemanager__previewer__actions',
    StorageManagerPreviewerFooter: 'amplify-storagemanager__previewer__footer',
    SwitchField: 'amplify-switchfield',
    SwitchLabel: 'amplify-switch__label',
    SwitchThumb: 'amplify-switch__thumb',
    SwitchTrack: 'amplify-switch__track',
    SwitchWrapper: 'amplify-switch__wrapper',
    Table: 'amplify-table',
    TableCaption: 'amplify-table__caption',
    TableBody: 'amplify-table__body',
    TableTd: 'amplify-table__td',
    TableTh: 'amplify-table__th',
    TableFoot: 'amplify-table__foot',
    TableHead: 'amplify-table__head',
    TableRow: 'amplify-table__row',
    Tabs: 'amplify-tabs',
    TabsList: 'amplify-tabs__list',
    TabsItem: 'amplify-tabs__item',
    TabsPanel: 'amplify-tabs__panel',
    Text: 'amplify-text',
    Textarea: 'amplify-textarea',
    TextAreaField: 'amplify-textareafield',
    TextField: 'amplify-textfield',
    ToggleButton: 'amplify-togglebutton',
    ToggleButtonGroup: 'amplify-togglebuttongroup',
    VisuallyHidden: 'amplify-visually-hidden'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/constants.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OPTIONS": (()=>OPTIONS),
    "REFERENCE_REGEX": (()=>REFERENCE_REGEX)
});
const OPTIONS = {
    openingCharacter: '{',
    closingCharacter: '}',
    separator: '.'
};
const REFERENCE_REGEX = /\{([^}]+)\}/g;
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/references.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getName": (()=>getName),
    "getPathFromName": (()=>getPathFromName),
    "resolveReference": (()=>resolveReference),
    "usesReference": (()=>usesReference)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/constants.mjs [app-ssr] (ecmascript)");
;
;
/**
 * Checks if the value uses a value reference.
 * @param {string} value
 * @returns {boolean} - True, if the value uses a value reference
 */ function usesReference(value) {
    const regex = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REFERENCE_REGEX"]);
    if (typeof value === 'string') {
        return regex.test(value);
    }
    if (typeof value === 'object') {
        let hasReference = false;
        // iterate over each property in the object,
        // if any element passes the regex test,
        // the whole thing should be true
        for(const key in value){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["has"])(value, key)) {
                const element = value[key];
                let reference = usesReference(element);
                if (reference) {
                    hasReference = true;
                    break;
                }
            }
        }
        return hasReference;
    }
    return false;
}
function resolveReference(path, obj) {
    let ref = obj;
    if (!Array.isArray(path)) {
        return;
    }
    for(let i = 0; i < path.length; i++){
        // Check for undefined as 0 is a valid, truthy value
        if (typeof ref[path[i]] !== 'undefined') {
            ref = ref[path[i]];
        } else {
            // set the reference as undefined if we don't find anything
            ref = undefined;
            break;
        }
    }
    return ref;
}
/**
 * Returns the path from a path name be splitting the name by a given separator.
 */ function getPathFromName(pathName) {
    if (typeof pathName !== 'string') {
        throw new Error('Getting path from name failed. Name must be a string');
    }
    return pathName.split(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OPTIONS"].separator);
}
/**
 * Returns the paths name be joining its parts with a given separator.
 */ function getName(path) {
    if (!path || !(path instanceof Array)) {
        throw new Error('Getting name for path failed. Path must be an array');
    }
    return path.join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OPTIONS"].separator);
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/utils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CSS_VARIABLE_PREFIX": (()=>CSS_VARIABLE_PREFIX),
    "cssNameTransform": (()=>cssNameTransform),
    "cssValue": (()=>cssValue),
    "deepExtend": (()=>deepExtend),
    "flattenProperties": (()=>flattenProperties),
    "isDesignToken": (()=>isDesignToken),
    "isShadowTokenObject": (()=>isShadowTokenObject),
    "propsToString": (()=>propsToString),
    "referenceValue": (()=>referenceValue),
    "setupToken": (()=>setupToken),
    "setupTokens": (()=>setupTokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$kebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/kebabCase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$references$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/references.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const CSS_VARIABLE_PREFIX = 'amplify';
/**
 * This will take an object like:
 * {paddingTop:'20px',color:'{colors.font.primary}'}
 * and turn it into a CSS string:
 * `padding-top:20px; color: var(--colors-font-primary);`
 */ function propsToString(props) {
    return Object.entries(props).map(([key, value])=>{
        const _value = isDesignToken(value) ? value.toString() : cssValue({
            value
        });
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$kebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key)}:${_value}; `;
    }).join(' ');
}
function cssNameTransform({ path = [] }) {
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$kebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
        CSS_VARIABLE_PREFIX,
        ...path
    ].join(' '))}`;
}
// Important: these properties should not be altered in
// order to maintain the expected order of the CSS `box-shadow` property
const SHADOW_PROPERTIES = [
    'offsetX',
    'offsetY',
    'blurRadius',
    'spreadRadius',
    'color'
];
/**
 * Will take a design token in a theme and return its value as CSS
 *
 * @param token
 * @returns
 */ function cssValue(token) {
    const { value } = token;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        return referenceValue(value);
    }
    if (isShadowTokenObject(value)) {
        return SHADOW_PROPERTIES.map((property)=>{
            return referenceValue(// lookup property against `token` first for custom non-nested value, then lookup
            // property against `value` for design token value
            isShadowTokenObject(token) ? token[property] : value[property]);
        }).join(' ');
    }
    return value;
}
/**
 * Helper function to test if something is a design token or not.
 * Used in the React component style props.
 *
 * @param value - thing to test if it is a design token or not
 * @returns boolean
 */ function isDesignToken(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["has"])(value, 'value');
}
function isShadowTokenObject(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["has"])(value, 'offsetX');
}
/**
 * Function that sees if a string contains a design token reference
 * and if so will turn that into a CSS variable.
 *
 * @param {string} value
 * @returns string
 */ function referenceValue(value) {
    if (!value) return '';
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$references$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usesReference"])(value)) {
        const path = value.replace(/\{|\}/g, '').replace('.value', '').split('.');
        return `var(--${cssNameTransform({
            path
        })})`;
    }
    return value;
}
/**
 * This will take a design token and add some data to it for it
 * to be used in JS/CSS. It will create its CSS var name and update
 * the value to use a CSS var if it is a reference. It will also
 * add a `.toString()` method to make it easier to use in JS.
 *
 * We should see if there is a way to share this logic with style dictionary...
 */ const setupToken = ({ token, path })=>{
    const name = `--${cssNameTransform({
        path
    })}`;
    const { value: original } = token;
    const value = cssValue(token);
    return {
        name,
        original,
        path,
        value,
        toString: ()=>`var(${name})`
    };
};
/**
 * Recursive function that will walk down the token object
 * and perform the setupToken function on each token.
 * Similar to what Style Dictionary does.
 */ function setupTokens({ tokens, path = [], setupToken }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["has"])(tokens, 'value')) {
        return setupToken({
            token: tokens,
            path
        });
    }
    const output = {};
    for(const name in tokens){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["has"])(tokens, name)) {
            const value = tokens[name];
            const nextTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(value) ? value : {
                value
            };
            output[name] = setupTokens({
                tokens: nextTokens,
                path: path.concat(name),
                setupToken
            });
        }
    }
    return output;
}
// Internal Style Dictionary methods
// copied from amzn/style-dictionary with the owner's permission
/**
 * Takes an plain javascript object and will make a flat array of all the leaf nodes.
 * A leaf node in this context has a 'value' property. Potentially refactor this to
 * be more generic.
 * @private
 * @param  {Object} properties - The plain object you want flattened into an array.
 * @param  {Array} [to_ret=[]] - Properties array. This function is recursive therefore this is what gets passed along.
 * @return {Array}
 */ function flattenProperties(properties, to_ret) {
    to_ret = to_ret || [];
    for(var name in properties){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["has"])(properties, name)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(properties[name]) && 'value' in properties[name]) {
                to_ret.push(properties[name]);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(properties[name])) {
                flattenProperties(properties[name], to_ret);
            }
        }
    }
    return to_ret;
}
/**
 * Performs an deep extend on the objects, from right to left.
 * @private
 * @param {Object[]} objects - An array of JS objects
 * @param {Function} collision - A function to be called when a merge collision happens.
 * @param {string[]} path - (for internal use) An array of strings which is the current path down the object when this is called recursively.
 * @returns {Object}
 */ function deepExtend(objects, collision, path) {
    if (objects == null) return {};
    var src, copyIsArray, copy, name, options, clone, target = objects[0] || {}, i = 1, length = objects.length;
    path = path || [];
    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object') {
        target = {};
    }
    for(; i < length; i++){
        // Only deal with non-null/undefined values
        if ((options = objects[i]) != null) {
            // Extend the base object
            for(name in options){
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["has"])(options, name)) continue;
                if (name === '__proto__') continue;
                src = target[name];
                copy = options[name];
                // Prevent never-ending loop
                if (target === copy) {
                    continue;
                }
                // Recurse if we're merging plain objects or arrays
                if (copy && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(copy) || (copyIsArray = Array.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    } else {
                        clone = src && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(src) ? src : {};
                    }
                    var nextPath = path.slice(0);
                    nextPath.push(name);
                    // Never move original objects, clone them
                    target[name] = deepExtend([
                        clone,
                        copy
                    ], collision, nextPath);
                // Don't bring in undefined values
                } else if (copy !== undefined) {
                    if (src != null && typeof collision == 'function') {
                        collision({
                            target: target,
                            copy: options,
                            path: path,
                            key: name
                        });
                    }
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/borderWidths.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "borderWidths": (()=>borderWidths)
});
const borderWidths = {
    small: {
        value: '1px'
    },
    medium: {
        value: '2px'
    },
    large: {
        value: '3px'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/colors.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "colors": (()=>colors)
});
const colors = {
    red: {
        10: {
            value: 'hsl(0, 75%, 95%)'
        },
        20: {
            value: 'hsl(0, 75%, 85%)'
        },
        40: {
            value: 'hsl(0, 75%, 75%)'
        },
        60: {
            value: 'hsl(0, 50%, 50%)'
        },
        80: {
            value: 'hsl(0, 95%, 30%)'
        },
        90: {
            value: 'hsl(0, 100%, 20%)'
        },
        100: {
            value: 'hsl(0, 100%, 15%)'
        }
    },
    orange: {
        10: {
            value: 'hsl(30, 75%, 95%)'
        },
        20: {
            value: 'hsl(30, 75%, 85%)'
        },
        40: {
            value: 'hsl(30, 75%, 75%)'
        },
        60: {
            value: 'hsl(30, 50%, 50%)'
        },
        80: {
            value: 'hsl(30, 95%, 30%)'
        },
        90: {
            value: 'hsl(30, 100%, 20%)'
        },
        100: {
            value: 'hsl(30, 100%, 15%)'
        }
    },
    yellow: {
        10: {
            value: 'hsl(60, 75%, 95%)'
        },
        20: {
            value: 'hsl(60, 75%, 85%)'
        },
        40: {
            value: 'hsl(60, 75%, 75%)'
        },
        60: {
            value: 'hsl(60, 50%, 50%)'
        },
        80: {
            value: 'hsl(60, 95%, 30%)'
        },
        90: {
            value: 'hsl(60, 100%, 20%)'
        },
        100: {
            value: 'hsl(60, 100%, 15%)'
        }
    },
    green: {
        10: {
            value: 'hsl(130, 60%, 95%)'
        },
        20: {
            value: 'hsl(130, 60%, 90%)'
        },
        40: {
            value: 'hsl(130, 44%, 63%)'
        },
        60: {
            value: 'hsl(130, 43%, 46%)'
        },
        80: {
            value: 'hsl(130, 33%, 37%)'
        },
        90: {
            value: 'hsl(130, 27%, 29%)'
        },
        100: {
            value: 'hsl(130, 22%, 23%)'
        }
    },
    teal: {
        10: {
            value: 'hsl(190, 75%, 95%)'
        },
        20: {
            value: 'hsl(190, 75%, 85%)'
        },
        40: {
            value: 'hsl(190, 70%, 70%)'
        },
        60: {
            value: 'hsl(190, 50%, 50%)'
        },
        80: {
            value: 'hsl(190, 95%, 30%)'
        },
        90: {
            value: 'hsl(190, 100%, 20%)'
        },
        100: {
            value: 'hsl(190, 100%, 15%)'
        }
    },
    blue: {
        10: {
            value: 'hsl(220, 95%, 95%)'
        },
        20: {
            value: 'hsl(220, 85%, 85%)'
        },
        40: {
            value: 'hsl(220, 70%, 70%)'
        },
        60: {
            value: 'hsl(220, 50%, 50%)'
        },
        80: {
            value: 'hsl(220, 95%, 30%)'
        },
        90: {
            value: 'hsl(220, 100%, 20%)'
        },
        100: {
            value: 'hsl(220, 100%, 15%)'
        }
    },
    purple: {
        10: {
            value: 'hsl(300, 95%, 95%)'
        },
        20: {
            value: 'hsl(300, 85%, 85%)'
        },
        40: {
            value: 'hsl(300, 70%, 70%)'
        },
        60: {
            value: 'hsl(300, 50%, 50%)'
        },
        80: {
            value: 'hsl(300, 95%, 30%)'
        },
        90: {
            value: 'hsl(300, 100%, 20%)'
        },
        100: {
            value: 'hsl(300, 100%, 15%)'
        }
    },
    pink: {
        10: {
            value: 'hsl(340, 95%, 95%)'
        },
        20: {
            value: 'hsl(340, 90%, 85%)'
        },
        40: {
            value: 'hsl(340, 70%, 70%)'
        },
        60: {
            value: 'hsl(340, 50%, 50%)'
        },
        80: {
            value: 'hsl(340, 95%, 30%)'
        },
        90: {
            value: 'hsl(340, 100%, 20%)'
        },
        100: {
            value: 'hsl(340, 100%, 15%)'
        }
    },
    neutral: {
        10: {
            value: 'hsl(210, 5%, 98%)'
        },
        20: {
            value: 'hsl(210, 5%, 94%)'
        },
        40: {
            value: 'hsl(210, 5%, 87%)'
        },
        60: {
            value: 'hsl(210, 10%, 58%)'
        },
        80: {
            value: 'hsl(210, 10%, 40%)'
        },
        90: {
            value: 'hsl(210, 25%, 25%)'
        },
        100: {
            value: 'hsl(210, 50%, 10%)'
        }
    },
    primary: {
        10: {
            value: '{colors.teal.10.value}'
        },
        20: {
            value: '{colors.teal.20.value}'
        },
        40: {
            value: '{colors.teal.40.value}'
        },
        60: {
            value: '{colors.teal.60.value}'
        },
        80: {
            value: '{colors.teal.80.value}'
        },
        90: {
            value: '{colors.teal.90.value}'
        },
        100: {
            value: '{colors.teal.100.value}'
        }
    },
    secondary: {
        10: {
            value: '{colors.purple.10.value}'
        },
        20: {
            value: '{colors.purple.20.value}'
        },
        40: {
            value: '{colors.purple.40.value}'
        },
        60: {
            value: '{colors.purple.60.value}'
        },
        80: {
            value: '{colors.purple.80.value}'
        },
        90: {
            value: '{colors.purple.90.value}'
        },
        100: {
            value: '{colors.purple.100.value}'
        }
    },
    font: {
        primary: {
            value: '{colors.neutral.100.value}'
        },
        secondary: {
            value: '{colors.neutral.90.value}'
        },
        tertiary: {
            value: '{colors.neutral.80.value}'
        },
        disabled: {
            value: '{colors.neutral.60.value}'
        },
        inverse: {
            value: '{colors.white.value}'
        },
        interactive: {
            value: '{colors.primary.80.value}'
        },
        // Hover and Focus colors are intentionally different colors.
        // This allows users to distinguish between the current keyboard focus
        // and the location of their pointer
        hover: {
            value: '{colors.primary.90.value}'
        },
        // Focus color is set to 100 to ensure enough contrast for accessibility
        focus: {
            value: '{colors.primary.100.value}'
        },
        active: {
            value: '{colors.primary.100.value}'
        },
        info: {
            value: '{colors.blue.90.value}'
        },
        warning: {
            value: '{colors.orange.90.value}'
        },
        error: {
            value: '{colors.red.90.value}'
        },
        success: {
            value: '{colors.green.90.value}'
        }
    },
    background: {
        primary: {
            value: '{colors.white.value}'
        },
        secondary: {
            value: '{colors.neutral.10.value}'
        },
        tertiary: {
            value: '{colors.neutral.20.value}'
        },
        quaternary: {
            value: '{colors.neutral.60.value}'
        },
        disabled: {
            value: '{colors.background.tertiary.value}'
        },
        info: {
            value: '{colors.blue.10.value}'
        },
        warning: {
            value: '{colors.orange.10.value}'
        },
        error: {
            value: '{colors.red.10.value}'
        },
        success: {
            value: '{colors.green.10.value}'
        }
    },
    border: {
        primary: {
            value: '{colors.neutral.60.value}'
        },
        secondary: {
            value: '{colors.neutral.40.value}'
        },
        tertiary: {
            value: '{colors.neutral.20.value}'
        },
        disabled: {
            value: '{colors.border.tertiary.value}'
        },
        pressed: {
            value: '{colors.primary.100.value}'
        },
        // Focus color is set to 100 to ensure enough contrast for accessibility
        focus: {
            value: '{colors.primary.100.value}'
        },
        error: {
            value: '{colors.red.80.value}'
        },
        info: {
            value: '{colors.blue.80.value}'
        },
        success: {
            value: '{colors.green.80.value}'
        },
        warning: {
            value: '{colors.orange.80.value}'
        }
    },
    shadow: {
        primary: {
            value: 'hsla(210, 50%, 10%, 0.25)'
        },
        secondary: {
            value: 'hsla(210, 50%, 10%, 0.15)'
        },
        tertiary: {
            value: 'hsla(210, 50%, 10%, 0.05)'
        }
    },
    overlay: {
        5: {
            value: 'hsla(0, 0%, 0%, 0.05)'
        },
        10: {
            value: 'hsla(0, 0%, 0%, 0.1)'
        },
        20: {
            value: 'hsla(0, 0%, 0%, 0.2)'
        },
        30: {
            value: 'hsla(0, 0%, 0%, 0.3)'
        },
        40: {
            value: 'hsla(0, 0%, 0%, 0.4)'
        },
        50: {
            value: 'hsla(0, 0%, 0%, 0.5)'
        },
        60: {
            value: 'hsla(0, 0%, 0%, 0.6)'
        },
        70: {
            value: 'hsla(0, 0%, 0%, 0.7)'
        },
        80: {
            value: 'hsla(0, 0%, 0%, 0.8)'
        },
        90: {
            value: 'hsla(0, 0%, 0%, 0.9)'
        }
    },
    black: {
        value: 'hsl(0, 0%, 0%)'
    },
    white: {
        value: 'hsl(0, 0%, 100%)'
    },
    transparent: {
        value: 'transparent'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/alert.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "alert": (()=>alert)
});
const alert = {
    // Default styles
    alignItems: {
        value: 'center'
    },
    justifyContent: {
        value: 'space-between'
    },
    color: {
        value: '{colors.font.primary.value}'
    },
    backgroundColor: {
        value: '{colors.background.tertiary.value}'
    },
    paddingBlock: {
        value: '{space.small.value}'
    },
    paddingInline: {
        value: '{space.medium.value}'
    },
    icon: {
        size: {
            value: '{fontSizes.xl.value}'
        }
    },
    heading: {
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        fontWeight: {
            value: '{fontWeights.bold.value}'
        }
    },
    // Variations
    info: {
        color: {
            value: '{colors.font.info.value}'
        },
        backgroundColor: {
            value: '{colors.background.info.value}'
        }
    },
    error: {
        color: {
            value: '{colors.font.error.value}'
        },
        backgroundColor: {
            value: '{colors.background.error.value}'
        }
    },
    warning: {
        color: {
            value: '{colors.font.warning.value}'
        },
        backgroundColor: {
            value: '{colors.background.warning.value}'
        }
    },
    success: {
        color: {
            value: '{colors.font.success.value}'
        },
        backgroundColor: {
            value: '{colors.background.success.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/aiConversation.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "aiConversation": (()=>aiConversation)
});
const aiConversation = {
    message: {
        backgroundColor: {
            value: '{colors.background.secondary.value}'
        },
        borderRadius: {
            value: '{radii.large.value}'
        },
        gap: {
            value: '{space.small.value}'
        },
        paddingBlock: {
            value: '{space.small.value}'
        },
        paddingInline: {
            value: '{space.small.value}'
        },
        user: {
            backgroundColor: {
                value: '{colors.background.secondary.value}'
            }
        },
        assistant: {
            backgroundColor: {
                value: '{colors.primary.10.value}'
            }
        },
        sender: {
            gap: {
                value: '{space.small.value}'
            },
            username: {
                color: {
                    value: '{colors.font.primary.value}'
                },
                fontSize: {
                    value: 'inherit'
                },
                fontWeight: {
                    value: '{fontWeights.bold.value}'
                }
            },
            timestamp: {
                color: {
                    value: '{colors.font.tertiary.value}'
                },
                fontSize: {
                    value: 'inherit'
                },
                fontWeight: {
                    value: 'inherit'
                }
            }
        },
        body: {
            gap: {
                value: '{space.xs.value}'
            }
        },
        actions: {
            gap: {
                value: '{space.xs.value}'
            }
        }
    },
    form: {
        gap: {
            value: '{space.small.value}'
        },
        padding: {
            value: '{space.small.value}'
        }
    },
    attachment: {
        borderColor: {
            value: '{colors.border.secondary.value}'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        borderRadius: {
            value: '{radii.small.value}'
        },
        fontSize: {
            value: '{fontSizes.small.value}'
        },
        paddingBlock: {
            value: '{space.xxxs.value}'
        },
        paddingInline: {
            value: '{space.xs.value}'
        },
        gap: {
            value: '{space.xs.value}'
        },
        list: {
            padding: {
                value: '{space.xs.value}'
            },
            paddingBlockStart: {
                value: '0'
            },
            gap: {
                value: '{space.xxs.value}'
            }
        },
        name: {
            color: {
                value: '{colors.font.primary.value}'
            },
            fontSize: {
                value: '{fontSizes.small.value}'
            },
            fontWeight: {
                value: '{fontWeights.normal.value}'
            }
        },
        size: {
            color: {
                value: '{colors.font.tertiary.value}'
            },
            fontSize: {
                value: '{fontSizes.small.value}'
            },
            fontWeight: {
                value: '{fontWeights.normal.value}'
            }
        },
        remove: {
            padding: {
                value: '{space.xxs.value}'
            }
        },
        image: {
            width: {
                value: '{fontSizes.medium.value}'
            },
            height: {
                value: '{fontSizes.medium.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/autocomplete.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "autocomplete": (()=>autocomplete)
});
const autocomplete = {
    menu: {
        width: {
            value: '100%'
        },
        marginBlockStart: {
            value: '{space.xxxs}'
        },
        backgroundColor: {
            value: '{colors.background.primary}'
        },
        borderColor: {
            value: '{colors.border.primary}'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderRadius: {
            value: '{radii.small}'
        },
        options: {
            display: {
                value: 'flex'
            },
            flexDirection: {
                value: 'column'
            },
            maxHeight: {
                value: '300px'
            }
        },
        option: {
            backgroundColor: {
                value: '{colors.background.primary}'
            },
            color: {
                value: 'currentcolor'
            },
            cursor: {
                value: 'pointer'
            },
            transitionDuration: {
                value: '{time.short}'
            },
            transitionProperty: {
                value: 'background-color, color'
            },
            transitionTimingFunction: {
                value: 'ease'
            },
            _active: {
                backgroundColor: {
                    value: '{colors.primary.80}'
                },
                color: {
                    value: '{colors.white}'
                }
            }
        },
        _empty: {
            display: {
                value: 'flex'
            }
        },
        _loading: {
            alignItems: {
                value: 'center'
            },
            display: {
                value: 'flex'
            },
            gap: {
                value: '{space.xxxs}'
            }
        },
        spaceShared: {
            paddingBlock: {
                value: '{space.xs}'
            },
            paddingInline: {
                value: '{space.small}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/authenticator.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authenticator": (()=>authenticator)
});
const authenticator = {
    maxWidth: {
        value: '60rem'
    },
    modal: {
        width: {
            value: '{space.relative.full}'
        },
        height: {
            value: '{space.relative.full}'
        },
        backgroundColor: {
            value: '{colors.overlay.50.value}'
        },
        top: {
            value: '{space.zero}'
        },
        left: {
            value: '{space.zero}'
        }
    },
    container: {
        widthMax: {
            value: '30rem'
        }
    },
    router: {
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderColor: {
            value: '{colors.border.primary.value}'
        },
        backgroundColor: {
            value: '{colors.background.primary.value}'
        },
        boxShadow: {
            value: '{shadows.medium.value}'
        }
    },
    footer: {
        paddingBottom: {
            value: '{space.medium.value}'
        }
    },
    form: {
        padding: {
            value: '{space.xl.value}'
        }
    },
    state: {
        inactive: {
            backgroundColor: {
                value: '{colors.background.secondary.value}'
            }
        }
    },
    orContainer: {
        color: {
            value: '{colors.neutral.80.value}'
        },
        orLine: {
            backgroundColor: {
                value: '{colors.background.primary.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/avatar.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "avatar": (()=>avatar)
});
const avatar = {
    // Default styles
    color: {
        value: '{colors.font.tertiary.value}'
    },
    lineHeight: {
        value: 1
    },
    fontWeight: {
        value: '{fontWeights.semibold.value}'
    },
    fontSize: {
        value: '{fontSizes.small.value}'
    },
    textAlign: {
        value: 'center'
    },
    width: {
        value: '{fontSizes.xxl.value}'
    },
    height: {
        value: '{fontSizes.xxl.value}'
    },
    backgroundColor: {
        value: '{colors.background.tertiary}'
    },
    borderRadius: {
        value: '100%'
    },
    borderColor: {
        value: '{colors.border.primary.value}'
    },
    borderWidth: {
        value: '{borderWidths.medium.value}'
    },
    // Color Theme Variations
    info: {
        color: {
            value: '{colors.font.info.value}'
        },
        backgroundColor: {
            value: '{colors.background.info.value}'
        },
        borderColor: {
            value: '{colors.border.info.value}'
        }
    },
    warning: {
        color: {
            value: '{colors.font.warning.value}'
        },
        backgroundColor: {
            value: '{colors.background.warning.value}'
        },
        borderColor: {
            value: '{colors.border.warning.value}'
        }
    },
    success: {
        color: {
            value: '{colors.font.success.value}'
        },
        backgroundColor: {
            value: '{colors.background.success.value}'
        },
        borderColor: {
            value: '{colors.border.success.value}'
        }
    },
    error: {
        color: {
            value: '{colors.font.error.value}'
        },
        backgroundColor: {
            value: '{colors.background.error.value}'
        },
        borderColor: {
            value: '{colors.border.error.value}'
        }
    },
    // Sizes
    small: {
        fontSize: {
            value: '{fontSizes.xs.value}'
        },
        width: {
            value: '{fontSizes.xl.value}'
        },
        height: {
            value: '{fontSizes.xl.value}'
        }
    },
    // medium is the default size
    large: {
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        width: {
            value: '{fontSizes.xxxl.value}'
        },
        height: {
            value: '{fontSizes.xxxl.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/badge.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "badge": (()=>badge)
});
const badge = {
    // Default styles
    color: {
        value: '{colors.font.primary.value}'
    },
    lineHeight: {
        value: 1
    },
    fontWeight: {
        value: '{fontWeights.semibold.value}'
    },
    fontSize: {
        value: '{fontSizes.small.value}'
    },
    textAlign: {
        value: 'center'
    },
    paddingVertical: {
        value: '{space.xs.value}'
    },
    paddingHorizontal: {
        value: '{space.small.value}'
    },
    backgroundColor: {
        value: '{colors.background.tertiary.value}'
    },
    // An arbitrarily large value to ensure that the left and right sides of the badge are perfectly rounded for any size variation
    borderRadius: {
        value: '{radii.xl.value}'
    },
    // Variations
    info: {
        color: {
            value: '{colors.font.info.value}'
        },
        backgroundColor: {
            value: '{colors.background.info.value}'
        }
    },
    warning: {
        color: {
            value: '{colors.font.warning.value}'
        },
        backgroundColor: {
            value: '{colors.background.warning.value}'
        }
    },
    success: {
        color: {
            value: '{colors.font.success.value}'
        },
        backgroundColor: {
            value: '{colors.background.success.value}'
        }
    },
    error: {
        color: {
            value: '{colors.font.error.value}'
        },
        backgroundColor: {
            value: '{colors.background.error.value}'
        }
    },
    // Sizes
    small: {
        fontSize: {
            value: '{fontSizes.xs.value}'
        },
        paddingVertical: {
            value: '{space.xxs.value}'
        },
        paddingHorizontal: {
            value: '{space.xs.value}'
        }
    },
    // medium is the default size
    large: {
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        paddingVertical: {
            value: '{space.small.value}'
        },
        paddingHorizontal: {
            value: '{space.medium.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/breadcrumbs.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "breadcrumbs": (()=>breadcrumbs)
});
const breadcrumbs = {
    flexDirection: {
        value: 'row'
    },
    flexWrap: {
        value: 'wrap'
    },
    gap: {
        value: '0'
    },
    color: {
        value: '{colors.font.tertiary}'
    },
    item: {
        flexDirection: {
            value: 'row'
        },
        color: {
            value: 'inherit'
        },
        fontSize: {
            value: 'inherit'
        },
        alignItems: {
            value: 'center'
        },
        lineHeight: {
            value: '1'
        }
    },
    separator: {
        color: {
            value: 'inherit'
        },
        fontSize: {
            value: 'inherit'
        },
        paddingInline: {
            value: '{space.xxs}'
        }
    },
    link: {
        color: {
            value: '{components.link.color}'
        },
        fontSize: {
            value: 'inherit'
        },
        fontWeight: {
            value: 'normal'
        },
        textDecoration: {
            value: 'none'
        },
        paddingInline: {
            value: '{space.xs}'
        },
        paddingBlock: {
            value: '{space.xxs}'
        },
        current: {
            color: {
                value: 'inherit'
            },
            fontSize: {
                value: 'inherit'
            },
            fontWeight: {
                value: 'normal'
            },
            textDecoration: {
                value: 'none'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/button.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "button": (()=>button)
});
const button = {
    // shared styles
    fontWeight: {
        value: '{fontWeights.bold.value}'
    },
    transitionDuration: {
        value: '{components.fieldcontrol.transitionDuration.value}'
    },
    fontSize: {
        value: '{components.fieldcontrol.fontSize.value}'
    },
    lineHeight: {
        value: '{components.fieldcontrol.lineHeight.value}'
    },
    paddingBlockStart: {
        value: '{components.fieldcontrol.paddingBlockStart.value}'
    },
    paddingBlockEnd: {
        value: '{components.fieldcontrol.paddingBlockEnd.value}'
    },
    paddingInlineStart: {
        value: '{components.fieldcontrol.paddingInlineStart.value}'
    },
    paddingInlineEnd: {
        value: '{components.fieldcontrol.paddingInlineEnd.value}'
    },
    backgroundColor: {
        value: 'transparent'
    },
    borderColor: {
        value: '{components.fieldcontrol.borderColor.value}'
    },
    borderWidth: {
        value: '{components.fieldcontrol.borderWidth.value}'
    },
    borderStyle: {
        value: '{components.fieldcontrol.borderStyle.value}'
    },
    borderRadius: {
        value: '{components.fieldcontrol.borderRadius.value}'
    },
    color: {
        value: '{colors.font.primary.value}'
    },
    _hover: {
        color: {
            value: '{colors.font.focus.value}'
        },
        backgroundColor: {
            value: '{colors.primary.10.value}'
        },
        borderColor: {
            value: '{colors.primary.60.value}'
        }
    },
    _focus: {
        color: {
            value: '{colors.font.focus.value}'
        },
        backgroundColor: {
            value: '{colors.primary.10.value}'
        },
        borderColor: {
            value: '{colors.border.focus.value}'
        },
        boxShadow: {
            value: '{components.fieldcontrol._focus.boxShadow.value}'
        }
    },
    _active: {
        color: {
            value: '{colors.font.active.value}'
        },
        backgroundColor: {
            value: '{colors.primary.20.value}'
        },
        borderColor: {
            value: '{colors.primary.100.value}'
        }
    },
    _loading: {
        color: {
            value: '{colors.font.disabled.value}'
        },
        backgroundColor: {
            value: 'transparent'
        },
        borderColor: {
            value: '{colors.border.tertiary.value}'
        }
    },
    _disabled: {
        color: {
            value: '{colors.font.disabled.value}'
        },
        backgroundColor: {
            value: 'transparent'
        },
        borderColor: {
            value: '{colors.border.tertiary.value}'
        }
    },
    // variations
    outlined: {
        info: {
            borderColor: {
                value: '{colors.blue.60.value}'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.blue.100}'
            },
            _hover: {
                borderColor: {
                    value: '{colors.blue.60.value}'
                },
                backgroundColor: {
                    value: '{colors.blue.10.value}'
                },
                color: {
                    value: '{colors.blue.100.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: '{colors.blue.100.value}'
                },
                backgroundColor: {
                    value: '{colors.blue.10.value}'
                },
                color: {
                    value: '{colors.blue.100.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.info._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: '{colors.blue.100.value}'
                },
                backgroundColor: {
                    value: '{colors.blue.20.value}'
                },
                color: {
                    value: '{colors.blue.100.value}'
                }
            }
        },
        warning: {
            borderColor: {
                value: '{colors.orange.60.value}'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.orange.100}'
            },
            _hover: {
                borderColor: {
                    value: '{colors.orange.60.value}'
                },
                backgroundColor: {
                    value: '{colors.orange.10.value}'
                },
                color: {
                    value: '{colors.orange.100.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: '{colors.orange.100.value}'
                },
                backgroundColor: {
                    value: '{colors.orange.10.value}'
                },
                color: {
                    value: '{colors.orange.100.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.warning._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: '{colors.orange.100.value}'
                },
                backgroundColor: {
                    value: '{colors.orange.20.value}'
                },
                color: {
                    value: '{colors.orange.100.value}'
                }
            }
        },
        success: {
            borderColor: {
                value: '{colors.green.60.value}'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.green.100}'
            },
            _hover: {
                borderColor: {
                    value: '{colors.green.60.value}'
                },
                backgroundColor: {
                    value: '{colors.green.10.value}'
                },
                color: {
                    value: '{colors.green.100.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: '{colors.green.100.value}'
                },
                backgroundColor: {
                    value: '{colors.green.10.value}'
                },
                color: {
                    value: '{colors.green.100.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.success._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: '{colors.green.100.value}'
                },
                backgroundColor: {
                    value: '{colors.green.20.value}'
                },
                color: {
                    value: '{colors.green.100.value}'
                }
            }
        },
        error: {
            borderColor: {
                value: '{colors.red.80.value}'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.red.100}'
            },
            _hover: {
                borderColor: {
                    value: '{colors.red.80.value}'
                },
                backgroundColor: {
                    value: '{colors.red.10.value}'
                },
                color: {
                    value: '{colors.red.100.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: '{colors.red.100.value}'
                },
                backgroundColor: {
                    value: '{colors.red.10.value}'
                },
                color: {
                    value: '{colors.red.100.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol._error._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: '{colors.red.100.value}'
                },
                backgroundColor: {
                    value: '{colors.red.20.value}'
                },
                color: {
                    value: '{colors.red.100.value}'
                }
            }
        },
        overlay: {
            borderColor: {
                value: '{colors.overlay.60.value}'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.font.primary.value}'
            },
            _hover: {
                borderColor: {
                    value: '{colors.overlay.60.value}'
                },
                backgroundColor: {
                    value: '{colors.overlay.5.value}'
                },
                color: {
                    value: '{colors.neutral.90.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: '{colors.overlay.90.value}'
                },
                backgroundColor: {
                    value: '{colors.overlay.5.value}'
                },
                color: {
                    value: '{colors.neutral.90.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.overlay._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: '{colors.overlay.90.value}'
                },
                backgroundColor: {
                    value: '{colors.overlay.10.value}'
                },
                color: {
                    value: '{colors.neutral.100.value}'
                }
            }
        }
    },
    primary: {
        borderColor: {
            value: 'transparent'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        backgroundColor: {
            value: '{colors.primary.80.value}'
        },
        color: {
            value: '{colors.font.inverse.value}'
        },
        _disabled: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.background.disabled.value}'
            },
            color: {
                value: '{colors.font.disabled.value}'
            }
        },
        _loading: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.background.disabled.value}'
            },
            color: {
                value: '{colors.font.disabled.value}'
            }
        },
        _hover: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.primary.90.value}'
            },
            color: {
                value: '{colors.font.inverse.value}'
            }
        },
        _focus: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.primary.90.value}'
            },
            color: {
                value: '{colors.font.inverse.value}'
            },
            boxShadow: {
                value: '{components.fieldcontrol._focus.boxShadow.value}'
            }
        },
        _active: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.primary.100.value}'
            },
            color: {
                value: '{colors.font.inverse.value}'
            }
        },
        info: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.blue.80}'
            },
            color: {
                value: '{colors.font.inverse.value}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.blue.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.blue.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.info._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.blue.100.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            }
        },
        warning: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.orange.80}'
            },
            color: {
                value: '{colors.font.inverse.value}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.orange.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.orange.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.overlay._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.orange.100.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            }
        },
        error: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.red.80}'
            },
            color: {
                value: '{colors.font.inverse.value}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.red.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.red.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol._error._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.red.100.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            }
        },
        success: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.green.80}'
            },
            color: {
                value: '{colors.font.inverse.value}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.green.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.green.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.success._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.green.100.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            }
        },
        overlay: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.overlay.70}'
            },
            color: {
                value: '{colors.font.inverse.value}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.overlay.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.overlay.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.overlay._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.overlay.90.value}'
                },
                color: {
                    value: '{colors.font.inverse.value}'
                }
            }
        }
    },
    menu: {
        borderWidth: {
            value: '{space.zero.value}'
        },
        backgroundColor: {
            value: 'transparent'
        },
        justifyContent: {
            value: 'start'
        },
        // Focus and hover styles are identical for menu variation
        // because for Menu primitive, menu items are forced to be focused even
        // for mouse interactions, making it impossible to distinguish the two interactions
        _hover: {
            color: {
                value: '{colors.font.inverse.value}'
            },
            backgroundColor: {
                value: '{colors.primary.80.value}'
            }
        },
        _focus: {
            color: {
                value: '{colors.font.inverse.value}'
            },
            backgroundColor: {
                value: '{colors.primary.80.value}'
            }
        },
        _active: {
            color: {
                value: '{colors.font.inverse.value}'
            },
            backgroundColor: {
                value: '{colors.primary.90.value}'
            }
        },
        _disabled: {
            color: {
                value: '{colors.font.disabled.value}'
            }
        }
    },
    link: {
        backgroundColor: {
            value: 'transparent'
        },
        borderColor: {
            value: 'transparent'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        color: {
            value: '{colors.font.interactive.value}'
        },
        _hover: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.primary.10.value}'
            },
            color: {
                value: '{colors.font.hover.value}'
            }
        },
        _focus: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.primary.10.value}'
            },
            color: {
                value: '{colors.font.focus.value}'
            },
            boxShadow: {
                value: '{components.fieldcontrol._focus.boxShadow.value}'
            }
        },
        _active: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.primary.20.value}'
            },
            color: {
                value: '{colors.font.active.value}'
            }
        },
        _disabled: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.font.disabled.value}'
            }
        },
        _loading: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.font.disabled.value}'
            }
        },
        info: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.blue.100}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.blue.10.value}'
                },
                color: {
                    value: '{colors.blue.90.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.blue.10.value}'
                },
                color: {
                    value: '{colors.blue.100.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.info._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.blue.20.value}'
                },
                color: {
                    value: '{colors.blue.100.value}'
                }
            }
        },
        warning: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.orange.100}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.orange.10.value}'
                },
                color: {
                    value: '{colors.orange.90.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.orange.10.value}'
                },
                color: {
                    value: '{colors.orange.100.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.warning._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.orange.20.value}'
                },
                color: {
                    value: '{colors.orange.100.value}'
                }
            }
        },
        success: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.green.100}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.green.10.value}'
                },
                color: {
                    value: '{colors.green.90.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.green.10.value}'
                },
                color: {
                    value: '{colors.green.100.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.success._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.green.20.value}'
                },
                color: {
                    value: '{colors.green.100.value}'
                }
            }
        },
        error: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.red.100}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.red.10.value}'
                },
                color: {
                    value: '{colors.red.90.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.red.10.value}'
                },
                color: {
                    value: '{colors.red.100.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol._error._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.red.20.value}'
                },
                color: {
                    value: '{colors.red.100.value}'
                }
            }
        },
        overlay: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.neutral.100}'
            },
            _hover: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.overlay.5.value}'
                },
                color: {
                    value: '{colors.overlay.80.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.overlay.5.value}'
                },
                color: {
                    value: '{colors.overlay.90.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol.overlay._focus.boxShadow.value}'
                }
            },
            _active: {
                borderColor: {
                    value: 'transparent'
                },
                backgroundColor: {
                    value: '{colors.overlay.10.value}'
                },
                color: {
                    value: '{colors.overlay.90.value}'
                }
            }
        }
    },
    warning: {
        backgroundColor: {
            value: 'transparent'
        },
        borderColor: {
            value: '{colors.red.60}'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        color: {
            value: '{colors.red.60}'
        },
        _hover: {
            borderColor: {
                value: '{colors.red.80}'
            },
            backgroundColor: {
                value: '{colors.red.10}'
            },
            color: {
                value: '{colors.font.error}'
            }
        },
        _focus: {
            borderColor: {
                value: '{colors.red.80}'
            },
            backgroundColor: {
                value: '{colors.red.10}'
            },
            color: {
                value: '{colors.red.80}'
            },
            boxShadow: {
                value: '{components.fieldcontrol._error._focus.boxShadow}'
            }
        },
        _active: {
            borderColor: {
                value: '{colors.red.100}'
            },
            backgroundColor: {
                value: '{colors.red.20}'
            },
            color: {
                value: '{colors.red.100}'
            }
        },
        _disabled: {
            borderColor: {
                value: '{colors.border.tertiary}'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.font.disabled}'
            }
        },
        _loading: {
            borderColor: {
                value: '{colors.border.tertiary}'
            },
            backgroundColor: {
                value: 'transparent'
            },
            color: {
                value: '{colors.font.disabled}'
            }
        }
    },
    destructive: {
        borderColor: {
            value: 'transparent'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        borderStyle: {
            value: 'solid'
        },
        backgroundColor: {
            value: '{colors.red.60}'
        },
        color: {
            value: '{colors.font.inverse}'
        },
        _disabled: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.background.disabled}'
            },
            color: {
                value: '{colors.font.disabled}'
            }
        },
        _loading: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.background.disabled}'
            },
            color: {
                value: '{colors.font.disabled}'
            }
        },
        _hover: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.red.80}'
            },
            color: {
                value: '{colors.font.inverse}'
            }
        },
        _focus: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.red.80}'
            },
            color: {
                value: '{colors.font.inverse}'
            },
            boxShadow: {
                value: '{components.fieldcontrol._error._focus.boxShadow}'
            }
        },
        _active: {
            borderColor: {
                value: 'transparent'
            },
            backgroundColor: {
                value: '{colors.red.100}'
            },
            color: {
                value: '{colors.font.inverse}'
            }
        }
    },
    // sizes
    small: {
        fontSize: {
            value: '{components.fieldcontrol.small.fontSize.value}'
        },
        paddingBlockStart: {
            value: '{components.fieldcontrol.small.paddingBlockStart.value}'
        },
        paddingBlockEnd: {
            value: '{components.fieldcontrol.small.paddingBlockEnd.value}'
        },
        paddingInlineStart: {
            value: '{components.fieldcontrol.small.paddingInlineStart.value}'
        },
        paddingInlineEnd: {
            value: '{components.fieldcontrol.small.paddingInlineEnd.value}'
        }
    },
    large: {
        fontSize: {
            value: '{components.fieldcontrol.large.fontSize.value}'
        },
        paddingBlockStart: {
            value: '{components.fieldcontrol.large.paddingBlockStart.value}'
        },
        paddingBlockEnd: {
            value: '{components.fieldcontrol.large.paddingBlockEnd.value}'
        },
        paddingInlineStart: {
            value: '{components.fieldcontrol.large.paddingInlineStart.value}'
        },
        paddingInlineEnd: {
            value: '{components.fieldcontrol.large.paddingInlineEnd.value}'
        }
    },
    loaderWrapper: {
        alignItems: {
            value: 'center'
        },
        gap: {
            value: '{space.xs.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/card.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "card": (()=>card)
});
const card = {
    backgroundColor: {
        value: '{colors.background.primary.value}'
    },
    borderRadius: {
        value: '{radii.xs.value}'
    },
    borderWidth: {
        value: '0'
    },
    borderStyle: {
        value: 'solid'
    },
    borderColor: {
        value: 'transparent'
    },
    boxShadow: {
        value: 'none'
    },
    padding: {
        value: '{space.medium.value}'
    },
    outlined: {
        backgroundColor: {
            value: '{components.card.backgroundColor.value}'
        },
        borderRadius: {
            value: '{radii.xs.value}'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderColor: {
            value: '{colors.border.primary.value}'
        },
        boxShadow: {
            value: '{components.card.boxShadow.value}'
        }
    },
    elevated: {
        backgroundColor: {
            value: '{components.card.backgroundColor.value}'
        },
        borderRadius: {
            value: '{radii.xs.value}'
        },
        borderWidth: {
            value: '0'
        },
        borderStyle: {
            value: 'solid'
        },
        borderColor: {
            value: 'transparent'
        },
        boxShadow: {
            value: '{shadows.medium.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/checkbox.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkbox": (()=>checkbox)
});
const checkbox = {
    cursor: {
        value: 'pointer'
    },
    alignItems: {
        value: 'center'
    },
    _disabled: {
        cursor: {
            value: 'not-allowed'
        }
    },
    button: {
        position: {
            value: 'relative'
        },
        alignItems: {
            value: 'center'
        },
        justifyContent: {
            value: 'center'
        },
        color: {
            value: '{colors.font.inverse.value}'
        },
        before: {
            width: {
                value: '100%'
            },
            height: {
                value: '100%'
            },
            borderWidth: {
                value: '{borderWidths.medium.value}'
            },
            borderRadius: {
                value: '20%'
            },
            borderStyle: {
                value: 'solid'
            },
            borderColor: {
                value: '{colors.border.primary.value}'
            }
        },
        _focus: {
            outlineColor: {
                value: '{colors.transparent.value}'
            },
            outlineStyle: {
                value: 'solid'
            },
            outlineWidth: {
                value: '{outlineWidths.medium.value}'
            },
            outlineOffset: {
                value: '{outlineOffsets.medium.value}'
            },
            borderColor: {
                value: '{colors.border.focus.value}'
            },
            boxShadow: {
                value: '{components.fieldcontrol._focus.boxShadow.value}'
            }
        },
        _disabled: {
            borderColor: {
                value: '{colors.border.disabled.value}'
            }
        },
        _error: {
            borderColor: {
                value: '{colors.border.error.value}'
            },
            _focus: {
                borderColor: {
                    value: '{colors.border.error.value}'
                },
                boxShadow: {
                    value: '{components.fieldcontrol._error._focus.boxShadow.value}'
                }
            }
        }
    },
    icon: {
        backgroundColor: {
            value: '{colors.primary.80.value}'
        },
        borderRadius: {
            value: '20%'
        },
        opacity: {
            value: '{opacities.0.value}'
        },
        transform: {
            value: 'scale(0)'
        },
        transitionProperty: {
            value: 'all'
        },
        transitionDuration: {
            value: '{time.short.value}'
        },
        transitionTimingFunction: {
            value: 'ease-in-out'
        },
        _checked: {
            opacity: {
                value: '{opacities.100.value}'
            },
            transform: {
                value: 'scale(1)'
            },
            _disabled: {
                backgroundColor: {
                    value: '{colors.background.disabled.value}'
                }
            }
        },
        _indeterminate: {
            opacity: {
                value: '{opacities.100.value}'
            },
            transform: {
                value: 'scale(1)'
            },
            _disabled: {
                backgroundColor: {
                    value: '{colors.background.disabled.value}'
                }
            }
        }
    },
    label: {
        color: {
            value: '{components.text.color.value}'
        },
        _disabled: {
            color: {
                value: '{colors.font.disabled.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/checkboxField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkboxfield": (()=>checkboxfield)
});
const checkboxfield = {
    alignItems: {
        value: 'flex-start'
    },
    alignContent: {
        value: 'center'
    },
    flexDirection: {
        value: 'column'
    },
    justifyContent: {
        value: 'center'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/collection.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//we are reusing the types from the nested components but new tokens need to be created that reference the previous tokens so that they can inherit the needed values but can be overwritten and only effect the collection component.
//only a subset of the design tokens of the nested components are being exposed, this can be expanded later.
__turbopack_context__.s({
    "collection": (()=>collection)
});
const collection = {
    pagination: {
        current: {
            color: {
                value: '{components.pagination.current.color}'
            },
            backgroundColor: {
                value: '{components.pagination.current.backgroundColor}'
            }
        },
        button: {
            color: {
                value: '{components.pagination.button.color}'
            },
            _hover: {
                backgroundColor: {
                    value: '{components.pagination.button.hover.backgroundColor}'
                },
                color: {
                    value: '{components.pagination.button.hover.color}'
                }
            },
            _disabled: {
                color: {
                    value: '{components.pagination.button.disabled.color}'
                }
            }
        }
    },
    search: {
        input: {
            color: {
                value: '{components.searchfield.color}'
            }
        },
        button: {
            color: {
                value: '{components.searchfield.button.color}'
            },
            _active: {
                backgroundColor: {
                    value: '{components.searchfield.button._active.backgroundColor}'
                },
                borderColor: {
                    value: '{components.searchfield.button._active.borderColor}'
                },
                color: {
                    value: '{components.searchfield.button._active.color}'
                }
            },
            _disabled: {
                backgroundColor: {
                    value: '{components.searchfield.button._disabled.backgroundColor}'
                },
                borderColor: {
                    value: '{components.searchfield.button._disabled.borderColor}'
                },
                color: {
                    value: '{components.searchfield.button._disabled.color}'
                }
            },
            _focus: {
                backgroundColor: {
                    value: '{components.searchfield.button._focus.backgroundColor}'
                },
                borderColor: {
                    value: '{components.searchfield.button._focus.borderColor}'
                },
                color: {
                    value: '{components.searchfield.button._focus.color}'
                }
            },
            _hover: {
                backgroundColor: {
                    value: '{components.searchfield.button._hover.backgroundColor}'
                },
                borderColor: {
                    value: '{components.searchfield.button._hover.borderColor}'
                },
                color: {
                    value: '{components.searchfield.button._hover.color}'
                }
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/copy.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "copy": (()=>copy)
});
const copy = {
    fontSize: {
        value: '{fontSizes.xs}'
    },
    gap: {
        value: '{space.relative.medium}'
    },
    svg: {
        path: {
            fill: {
                value: '{colors.font.primary}'
            }
        }
    },
    toolTip: {
        bottom: {
            value: '{space.large}'
        },
        color: {
            value: '{colors.teal.100}'
        },
        fontSize: {
            value: '{fontSizes.xxs}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/dialCodeSelect.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dialcodeselect": (()=>dialcodeselect)
});
const dialcodeselect = {
    height: {
        value: '{space.relative.full.value}'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/divider.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "divider": (()=>divider)
});
const divider = {
    borderStyle: {
        value: 'solid'
    },
    borderColor: {
        value: '{colors.border.primary.value}'
    },
    borderWidth: {
        value: '{borderWidths.medium.value}'
    },
    label: {
        color: {
            value: '{colors.font.tertiary.value}'
        },
        paddingInline: {
            value: '{space.medium.value}'
        },
        fontSize: {
            value: '{fontSizes.small.value}'
        },
        backgroundColor: {
            value: '{colors.background.primary.value}'
        }
    },
    small: {
        borderWidth: {
            value: '{borderWidths.small.value}'
        }
    },
    large: {
        borderWidth: {
            value: '{borderWidths.large.value}'
        }
    },
    opacity: {
        value: '{opacities.60.value}'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/dropZone.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dropzone": (()=>dropzone)
});
const dropzone = {
    backgroundColor: {
        value: '{colors.background.primary}'
    },
    borderRadius: {
        value: '{radii.small}'
    },
    borderColor: {
        value: '{colors.border.primary}'
    },
    borderStyle: {
        value: 'dashed'
    },
    borderWidth: {
        value: '{borderWidths.small}'
    },
    color: {
        value: '{colors.font.primary}'
    },
    gap: {
        value: '{space.small}'
    },
    paddingBlock: {
        value: '{space.xl}'
    },
    paddingInline: {
        value: '{space.large}'
    },
    textAlign: {
        value: 'center'
    },
    _active: {
        backgroundColor: {
            value: '{colors.primary.10}'
        },
        borderRadius: {
            value: '{components.dropzone.borderRadius}'
        },
        borderColor: {
            value: '{colors.border.pressed}'
        },
        borderStyle: {
            value: '{components.dropzone.borderStyle}'
        },
        borderWidth: {
            value: '{components.dropzone.borderWidth}'
        },
        color: {
            value: '{colors.font.primary}'
        }
    },
    _disabled: {
        backgroundColor: {
            value: '{colors.background.disabled}'
        },
        borderRadius: {
            value: '{components.dropzone.borderRadius}'
        },
        borderColor: {
            value: '{colors.border.disabled}'
        },
        borderStyle: {
            value: '{components.dropzone.borderStyle}'
        },
        borderWidth: {
            value: '{components.dropzone.borderWidth}'
        },
        color: {
            value: '{colors.font.disabled}'
        }
    },
    accepted: {
        backgroundColor: {
            value: '{colors.background.success}'
        },
        borderRadius: {
            value: '{components.dropzone.borderRadius}'
        },
        borderColor: {
            value: '{colors.border.success}'
        },
        borderStyle: {
            value: '{components.dropzone.borderStyle}'
        },
        borderWidth: {
            value: '{components.dropzone.borderWidth}'
        },
        color: {
            value: '{colors.font.success}'
        }
    },
    rejected: {
        backgroundColor: {
            value: '{colors.background.error}'
        },
        borderRadius: {
            value: '{components.dropzone.borderRadius}'
        },
        borderColor: {
            value: '{colors.border.pressed}'
        },
        borderStyle: {
            value: '{components.dropzone.borderStyle}'
        },
        borderWidth: {
            value: '{components.dropzone.borderWidth}'
        },
        color: {
            value: '{colors.font.error}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/accordion.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "accordion": (()=>accordion)
});
const accordion = {
    backgroundColor: {
        value: '{colors.background.primary.value}'
    },
    item: {
        borderColor: {
            value: '{colors.border.secondary.value}'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderRadius: {
            value: '{radii.small.value}'
        },
        trigger: {
            alignItems: {
                value: 'center'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            color: {
                value: 'inherit'
            },
            gap: {
                value: '{space.small.value}'
            },
            justifyContent: {
                value: 'space-between'
            },
            paddingBlock: {
                value: '{space.xs.value}'
            },
            paddingInline: {
                value: '{space.small.value}'
            },
            _hover: {
                color: {
                    value: 'inherit'
                },
                backgroundColor: {
                    value: '{colors.overlay.5.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: '{colors.border.focus.value}'
                },
                boxShadow: {
                    value: {
                        offsetX: '0',
                        offsetY: '0',
                        blurRadius: '0',
                        spreadRadius: '2px',
                        color: '{colors.border.focus.value}'
                    }
                }
            }
        },
        content: {
            color: {
                value: 'inherit'
            },
            paddingInline: {
                value: '{space.small.value}'
            },
            paddingBlockEnd: {
                value: '{space.small.value}'
            },
            paddingBlockStart: {
                value: '{space.xxxs.value}'
            }
        },
        icon: {
            color: {
                value: '{colors.font.tertiary.value}'
            },
            transitionDuration: {
                value: '{time.medium.value}'
            },
            transitionTimingFunction: {
                value: 'cubic-bezier(0.87, 0, 0.13, 1)'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/field.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "field": (()=>field)
});
const field = {
    // default styles
    gap: {
        value: '{space.xs.value}'
    },
    fontSize: {
        value: '{fontSizes.medium.value}'
    },
    flexDirection: {
        value: 'column'
    },
    // Adjust base fontSize and gap for small and large sizes
    small: {
        gap: {
            value: '{space.xxxs.value}'
        },
        fontSize: {
            value: '{fontSizes.small.value}'
        }
    },
    large: {
        gap: {
            value: '{space.small.value}'
        },
        fontSize: {
            value: '{fontSizes.large.value}'
        }
    },
    label: {
        color: {
            value: '{colors.font.secondary.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldControl.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fieldcontrol": (()=>fieldcontrol)
});
const fieldcontrol = {
    borderStyle: {
        value: 'solid'
    },
    borderColor: {
        value: '{colors.border.primary.value}'
    },
    borderWidth: {
        value: '{borderWidths.small.value}'
    },
    borderRadius: {
        value: '{radii.small.value}'
    },
    color: {
        value: '{colors.font.primary.value}'
    },
    paddingBlockStart: {
        value: '{space.xs.value}'
    },
    paddingBlockEnd: {
        value: '{space.xs.value}'
    },
    paddingInlineStart: {
        value: '{space.medium.value}'
    },
    paddingInlineEnd: {
        value: '{space.medium.value}'
    },
    fontSize: {
        value: '{components.field.fontSize.value}'
    },
    lineHeight: {
        value: '{lineHeights.medium.value}'
    },
    transitionDuration: {
        value: '{time.medium.value}'
    },
    outlineColor: {
        value: '{colors.transparent.value}'
    },
    outlineStyle: {
        value: 'solid'
    },
    outlineWidth: {
        value: '{outlineWidths.medium.value}'
    },
    outlineOffset: {
        value: '{outlineOffsets.medium.value}'
    },
    small: {
        fontSize: {
            value: '{components.field.small.fontSize.value}'
        },
        paddingBlockStart: {
            value: '{space.xxs.value}'
        },
        paddingBlockEnd: {
            value: '{space.xxs.value}'
        },
        paddingInlineStart: {
            value: '{space.small.value}'
        },
        paddingInlineEnd: {
            value: '{space.small.value}'
        }
    },
    large: {
        fontSize: {
            value: '{components.field.large.fontSize.value}'
        },
        paddingBlockStart: {
            value: '{space.xs.value}'
        },
        paddingBlockEnd: {
            value: '{space.xs.value}'
        },
        paddingInlineStart: {
            value: '{space.medium.value}'
        },
        paddingInlineEnd: {
            value: '{space.medium.value}'
        }
    },
    quiet: {
        borderStyle: {
            value: 'none'
        },
        borderInlineStart: {
            value: 'none'
        },
        borderInlineEnd: {
            value: 'none'
        },
        borderBlockStart: {
            value: 'none'
        },
        borderRadius: {
            value: '0'
        },
        _focus: {
            borderBlockEndColor: {
                value: 'transparent'
            },
            boxShadow: {
                value: '{components.fieldcontrol._focus.boxShadow.value}'
            }
        },
        _error: {
            borderBlockEndColor: {
                value: '{colors.border.error.value}'
            },
            _focus: {
                borderBlockEndColor: {
                    value: 'transparent'
                },
                boxShadow: {
                    value: '{components.fieldcontrol._error._focus.boxShadow.value}'
                }
            }
        }
    },
    _focus: {
        // These focus styles have been calibrated to create
        // a highly visible focus indicator per WCAG 2.2 guidlines:
        // See: https://www.w3.org/TR/WCAG22/#focus-appearance
        //
        // Key features:
        // * Focus indicator area is at least the 2 CSS px perimeter around the component.
        // * Contrast between focused and unfocused area of contrast has a ratio of 3:1
        //
        // IMPORTANT: Must recalibrate if `colors.border.focus` are changed
        borderColor: {
            value: '{colors.border.focus.value}'
        },
        boxShadow: {
            value: {
                offsetX: '0px',
                offsetY: '0px',
                blurRadius: '0px',
                spreadRadius: '2px',
                color: '{colors.border.focus.value}'
            }
        }
    },
    _disabled: {
        color: {
            value: '{colors.font.disabled.value}'
        },
        cursor: {
            value: 'not-allowed'
        },
        borderColor: {
            value: '{colors.transparent.value}'
        },
        backgroundColor: {
            value: '{colors.background.disabled.value}'
        }
    },
    _error: {
        borderColor: {
            value: '{colors.border.error.value}'
        },
        color: {
            value: '{colors.font.error.value}'
        },
        _focus: {
            boxShadow: {
                value: {
                    offsetX: '0px',
                    offsetY: '0px',
                    blurRadius: '0px',
                    spreadRadius: '2px',
                    color: '{colors.border.error.value}'
                }
            }
        }
    },
    info: {
        _focus: {
            boxShadow: {
                value: {
                    offsetX: '0px',
                    offsetY: '0px',
                    blurRadius: '0px',
                    spreadRadius: '2px',
                    color: '{colors.blue.100.value}'
                }
            }
        }
    },
    warning: {
        _focus: {
            boxShadow: {
                value: {
                    offsetX: '0px',
                    offsetY: '0px',
                    blurRadius: '0px',
                    spreadRadius: '2px',
                    color: '{colors.orange.100.value}'
                }
            }
        }
    },
    success: {
        _focus: {
            boxShadow: {
                value: {
                    offsetX: '0px',
                    offsetY: '0px',
                    blurRadius: '0px',
                    spreadRadius: '2px',
                    color: '{colors.green.100.value}'
                }
            }
        }
    },
    overlay: {
        _focus: {
            boxShadow: {
                value: {
                    offsetX: '0px',
                    offsetY: '0px',
                    blurRadius: '0px',
                    spreadRadius: '2px',
                    color: '{colors.overlay.90.value}'
                }
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldGroup.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fieldgroup": (()=>fieldgroup)
});
const fieldgroup = {
    gap: {
        value: '{space.zero.value}'
    },
    vertical: {
        alignItems: {
            value: 'center'
        }
    },
    outer: {
        alignItems: {
            value: 'center'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldset.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fieldset": (()=>fieldset)
});
const fieldset = {
    backgroundColor: {
        value: 'transparent'
    },
    borderRadius: {
        value: '{radii.xs.value}'
    },
    flexDirection: {
        value: 'column'
    },
    gap: {
        value: '{components.field.gap.value}'
    },
    legend: {
        color: {
            value: '{colors.font.primary.value}'
        },
        fontSize: {
            value: '{components.field.fontSize.value}'
        },
        fontWeight: {
            value: '{fontWeights.bold.value}'
        },
        lineHeight: {
            value: '{lineHeights.medium.value}'
        },
        small: {
            fontSize: '{components.field.small.fontSize.value}'
        },
        large: {
            fontSize: '{components.field.large.fontSize.value}'
        }
    },
    outlined: {
        padding: '{space.medium.value}',
        borderColor: '{colors.neutral.40.value}',
        borderWidth: '{borderWidths.small.value}',
        borderStyle: 'solid',
        small: {
            padding: '{space.small.value}'
        },
        large: {
            padding: '{space.large.value}'
        }
    },
    small: {
        gap: '{components.field.small.gap.value}'
    },
    large: {
        gap: '{components.field.large.gap.value}'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldMessages.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fieldmessages": (()=>fieldmessages)
});
const fieldmessages = {
    error: {
        color: {
            value: '{colors.font.error.value}'
        },
        fontSize: {
            value: '{fontSizes.small.value}'
        }
    },
    description: {
        color: {
            value: '{colors.font.secondary.value}'
        },
        fontStyle: {
            value: 'italic'
        },
        fontSize: {
            value: '{fontSizes.small.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fileuploader.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fileuploader": (()=>fileuploader)
});
const fileuploader = {
    dropzone: {
        backgroundColor: {
            value: '{colors.background.primary}'
        },
        borderRadius: {
            value: '{radii.small}'
        },
        borderColor: {
            value: '{colors.border.primary}'
        },
        borderStyle: {
            value: 'dashed'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        gap: {
            value: '{space.small}'
        },
        paddingBlock: {
            value: '{space.xl}'
        },
        paddingInline: {
            value: '{space.large}'
        },
        textAlign: {
            value: 'center'
        },
        _active: {
            backgroundColor: {
                value: '{colors.primary.10}'
            },
            borderRadius: {
                value: '{components.fileuploader.dropzone.borderRadius}'
            },
            borderColor: {
                value: '{colors.border.pressed}'
            },
            borderStyle: {
                value: '{components.fileuploader.dropzone.borderStyle}'
            },
            borderWidth: {
                value: '{borderWidths.medium}'
            }
        },
        icon: {
            color: {
                value: '{colors.border.primary}'
            },
            fontSize: {
                value: '{fontSizes.xxl}'
            }
        },
        text: {
            color: {
                value: '{colors.font.tertiary}'
            },
            fontSize: {
                value: '{fontSizes.medium}'
            },
            fontWeight: {
                value: '{fontWeights.bold}'
            }
        }
    },
    file: {
        backgroundColor: {
            value: '{colors.background.primary}'
        },
        borderRadius: {
            value: '{radii.small}'
        },
        borderColor: {
            value: '{colors.border.primary}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        paddingBlock: {
            value: '{space.xs}'
        },
        paddingInline: {
            value: '{space.small}'
        },
        gap: {
            value: '{space.small}'
        },
        alignItems: {
            value: 'baseline'
        },
        name: {
            fontSize: {
                value: '{fontSizes.medium}'
            },
            fontWeight: {
                value: '{fontWeights.bold}'
            },
            color: {
                value: '{colors.font.primary}'
            }
        },
        size: {
            fontSize: {
                value: '{fontSizes.small}'
            },
            fontWeight: {
                value: '{fontWeights.normal}'
            },
            color: {
                value: '{colors.font.tertiary}'
            }
        },
        image: {
            width: {
                value: '{space.xxl}'
            },
            height: {
                value: '{space.xxl}'
            },
            backgroundColor: {
                value: '{colors.background.secondary}'
            },
            color: {
                value: '{colors.font.tertiary}'
            },
            borderRadius: {
                value: '{radii.small}'
            }
        }
    },
    filelist: {
        flexDirection: {
            value: 'column'
        },
        gap: {
            value: '{space.small}'
        }
    },
    loader: {
        strokeLinecap: {
            value: 'round'
        },
        strokeEmpty: {
            value: '{colors.border.secondary}'
        },
        strokeFilled: {
            value: '{components.loader.strokeFilled}'
        },
        strokeWidth: {
            value: '{borderWidths.large}'
        }
    },
    previewer: {
        backgroundColor: {
            value: '{colors.background.primary}'
        },
        borderColor: {
            value: '{colors.border.primary}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        borderRadius: {
            value: '{radii.small}'
        },
        paddingBlock: {
            value: '{space.zero}'
        },
        paddingInline: {
            value: '{space.zero}'
        },
        maxHeight: {
            value: '40rem'
        },
        maxWidth: {
            value: 'auto'
        },
        text: {
            fontSize: {
                value: '{fontSizes.medium}'
            },
            fontWeight: {
                value: '{fontWeights.bold}'
            },
            color: {
                value: '{colors.font.primary}'
            }
        },
        body: {
            paddingBlock: {
                value: '{space.medium}'
            },
            paddingInline: {
                value: '{space.medium}'
            },
            gap: {
                value: '{space.small}'
            }
        },
        footer: {
            justifyContent: {
                value: 'flex-end'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/flex.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "flex": (()=>flex)
});
const flex = {
    gap: {
        value: '{space.medium.value}'
    },
    justifyContent: {
        value: 'normal'
    },
    alignItems: {
        value: 'stretch'
    },
    alignContent: {
        value: 'normal'
    },
    flexWrap: {
        value: 'nowrap'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/heading.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "heading": (()=>heading)
});
const heading = {
    color: {
        value: '{colors.font.primary.value}'
    },
    lineHeight: {
        value: '{lineHeights.small.value}'
    },
    1: {
        fontSize: {
            value: '{fontSizes.xxxxl.value}'
        },
        fontWeight: {
            value: '{fontWeights.light.value}'
        }
    },
    2: {
        fontSize: {
            value: '{fontSizes.xxxl.value}'
        },
        fontWeight: {
            value: '{fontWeights.normal.value}'
        }
    },
    3: {
        fontSize: {
            value: '{fontSizes.xxl.value}'
        },
        fontWeight: {
            value: '{fontWeights.medium.value}'
        }
    },
    4: {
        fontSize: {
            value: '{fontSizes.xl.value}'
        },
        fontWeight: {
            value: '{fontWeights.semibold.value}'
        }
    },
    5: {
        fontSize: {
            value: '{fontSizes.large.value}'
        },
        fontWeight: {
            value: '{fontWeights.bold.value}'
        }
    },
    6: {
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        fontWeight: {
            value: '{fontWeights.extrabold.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/highlightMatch.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "highlightmatch": (()=>highlightmatch)
});
const highlightmatch = {
    highlighted: {
        fontWeight: {
            value: '{fontWeights.bold}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/icon.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "icon": (()=>icon)
});
const icon = {
    lineHeight: {
        value: 1
    },
    height: {
        value: '1em'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/input.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "input": (()=>input)
});
const input = {
    color: {
        value: '{components.fieldcontrol.color.value}'
    },
    borderColor: {
        value: '{components.fieldcontrol.borderColor.value}'
    },
    fontSize: {
        value: '{components.fieldcontrol.fontSize.value}'
    },
    _focus: {
        borderColor: {
            value: '{components.fieldcontrol._focus.borderColor.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/image.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "image": (()=>image)
});
const image = {
    maxWidth: {
        value: '100%'
    },
    height: {
        value: 'auto'
    },
    objectFit: {
        value: 'initial'
    },
    objectPosition: {
        value: 'initial'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/inAppMessaging.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "inappmessaging": (()=>inappmessaging)
});
const inappmessaging = {
    banner: {
        height: {
            value: '150px '
        },
        width: {
            value: '400px '
        }
    },
    button: {
        backgroundColor: {
            value: '#e8e8e8'
        },
        borderRadius: {
            value: '5px'
        },
        color: {
            value: 'black'
        }
    },
    dialog: {
        height: {
            value: '50vh'
        },
        minHeight: {
            value: '400px'
        },
        minWidth: {
            value: '400px'
        },
        width: {
            value: '30vw'
        }
    },
    header: {
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        fontWeight: {
            value: '{fontWeights.extrabold.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/link.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "link": (()=>link)
});
const link = {
    active: {
        color: {
            value: '{colors.font.active.value}'
        }
    },
    color: {
        value: '{colors.font.interactive.value}'
    },
    focus: {
        color: {
            value: '{colors.font.focus.value}'
        }
    },
    hover: {
        color: {
            value: '{colors.font.hover.value}'
        }
    },
    visited: {
        color: {
            value: '{colors.font.interactive.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/liveness.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "liveness": (()=>liveness)
});
const liveness = {
    cameraModule: {
        backgroundColor: {
            value: '{colors.background.primary.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/loader.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "loader": (()=>loader)
});
const loader = {
    width: {
        value: '{fontSizes.medium.value}'
    },
    height: {
        value: '{fontSizes.medium.value}'
    },
    fontSize: {
        value: '{fontSizes.xs.value}'
    },
    strokeEmpty: {
        value: '{colors.neutral.20.value}'
    },
    strokeFilled: {
        value: '{colors.primary.80.value}'
    },
    strokeLinecap: {
        value: 'round'
    },
    animationDuration: {
        value: '1s'
    },
    small: {
        width: {
            value: '{fontSizes.small.value}'
        },
        height: {
            value: '{fontSizes.small.value}'
        },
        fontSize: {
            value: '{fontSizes.xxs.value}'
        }
    },
    large: {
        width: {
            value: '{fontSizes.large.value}'
        },
        height: {
            value: '{fontSizes.large.value}'
        },
        fontSize: {
            value: '{fontSizes.small.value}'
        }
    },
    linear: {
        width: {
            value: '100%'
        },
        minWidth: {
            value: '5rem'
        },
        fontSize: {
            value: '{fontSizes.xxs.value}'
        },
        strokeWidth: {
            value: '{fontSizes.xxs.value}'
        },
        strokeFilled: {
            value: '{colors.primary.80.value}'
        },
        strokeEmpty: {
            value: '{colors.neutral.20.value}'
        },
        strokeLinecap: {
            value: 'round'
        },
        animationDuration: {
            value: '1s'
        },
        small: {
            strokeWidth: {
                value: '{fontSizes.xxxs.value}'
            },
            fontSize: {
                value: '{fontSizes.xxxs.value}'
            }
        },
        large: {
            strokeWidth: {
                value: '{fontSizes.xs.value}'
            },
            fontSize: {
                value: '{fontSizes.xs.value}'
            }
        }
    },
    text: {
        fill: {
            value: '{colors.font.primary.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/menu.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "menu": (()=>menu)
});
const menu = {
    backgroundColor: {
        value: '{colors.background.primary.value}'
    },
    borderRadius: {
        value: '{radii.medium.value}'
    },
    borderWidth: {
        value: '{borderWidths.small.value}'
    },
    borderStyle: {
        value: 'solid'
    },
    borderColor: {
        value: '{colors.border.primary.value}'
    },
    boxShadow: {
        value: '{shadows.large.value}'
    },
    flexDirection: {
        value: 'column'
    },
    gap: {
        value: '{space.zero.value}'
    },
    maxWidth: {
        value: '30rem'
    },
    minWidth: {
        value: '14rem'
    },
    small: {
        width: {
            value: '{fontSizes.medium.value}'
        },
        height: {
            value: '{fontSizes.medium.value}'
        }
    },
    large: {
        width: {
            value: '{fontSizes.xxxl.value}'
        },
        height: {
            value: '{fontSizes.xxxl.value}'
        }
    },
    item: {
        minHeight: {
            value: '2.5rem'
        },
        paddingInlineStart: {
            value: '{space.medium.value}'
        },
        paddingInlineEnd: {
            value: '{space.medium.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/message.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "message": (()=>message)
});
const message = {
    // Default styles
    alignItems: {
        value: 'center'
    },
    backgroundColor: {
        value: '{colors.background.tertiary.value}'
    },
    borderColor: {
        value: 'transparent'
    },
    borderStyle: {
        value: 'solid'
    },
    borderWidth: {
        value: '{borderWidths.small.value}'
    },
    borderRadius: {
        value: '{radii.xs.value}'
    },
    color: {
        value: '{colors.font.primary.value}'
    },
    justifyContent: {
        value: 'flex-start'
    },
    paddingBlock: {
        value: '{space.small.value}'
    },
    paddingInline: {
        value: '{space.medium.value}'
    },
    lineHeight: {
        value: '{lineHeights.small.value}'
    },
    icon: {
        size: {
            value: '{fontSizes.xl.value}'
        }
    },
    heading: {
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        fontWeight: {
            value: '{fontWeights.bold.value}'
        }
    },
    dismiss: {
        gap: {
            value: '{space.xxs.value}'
        }
    },
    // Variations
    plain: {
        color: {
            value: '{colors.font.primary.value}'
        },
        backgroundColor: {
            value: '{colors.background.primary.value}'
        },
        borderColor: {
            value: 'transparent'
        },
        info: {
            color: {
                value: '{colors.font.info.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: 'transparent'
            }
        },
        error: {
            color: {
                value: '{colors.font.error.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: 'transparent'
            }
        },
        success: {
            color: {
                value: '{colors.font.success.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: 'transparent'
            }
        },
        warning: {
            color: {
                value: '{colors.font.warning.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: 'transparent'
            }
        }
    },
    outlined: {
        color: {
            value: '{colors.font.primary.value}'
        },
        backgroundColor: {
            value: '{colors.background.primary.value}'
        },
        borderColor: {
            value: '{colors.border.primary.value}'
        },
        info: {
            color: {
                value: '{colors.font.info.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: '{colors.border.info.value}'
            }
        },
        error: {
            color: {
                value: '{colors.font.error.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: '{colors.border.error.value}'
            }
        },
        success: {
            color: {
                value: '{colors.font.success.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: '{colors.border.success.value}'
            }
        },
        warning: {
            color: {
                value: '{colors.font.warning.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: '{colors.border.warning.value}'
            }
        }
    },
    filled: {
        color: {
            value: '{colors.font.primary.value}'
        },
        backgroundColor: {
            value: '{colors.background.secondary.value}'
        },
        borderColor: {
            value: 'transparent'
        },
        info: {
            color: {
                value: '{colors.font.info.value}'
            },
            backgroundColor: {
                value: '{colors.background.info.value}'
            },
            borderColor: {
                value: 'transparent'
            }
        },
        error: {
            color: {
                value: '{colors.font.error.value}'
            },
            backgroundColor: {
                value: '{colors.background.error.value}'
            },
            borderColor: {
                value: 'transparent'
            }
        },
        success: {
            color: {
                value: '{colors.font.success.value}'
            },
            backgroundColor: {
                value: '{colors.background.success.value}'
            },
            borderColor: {
                value: 'transparent'
            }
        },
        warning: {
            color: {
                value: '{colors.font.warning.value}'
            },
            backgroundColor: {
                value: '{colors.background.warning.value}'
            },
            borderColor: {
                value: 'transparent'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/pagination.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pagination": (()=>pagination)
});
const pagination = {
    current: {
        alignItems: {
            value: 'center'
        },
        justifyContent: {
            value: 'center'
        },
        color: {
            value: '{colors.font.inverse.value}'
        },
        fontSize: {
            value: '{fontSizes.small.value}'
        },
        backgroundColor: {
            value: '{colors.overlay.40.value}'
        }
    },
    button: {
        color: {
            value: '{colors.font.primary.value}'
        },
        paddingInlineStart: {
            value: '{space.xxs.value}'
        },
        paddingInlineEnd: {
            value: '{space.xxs.value}'
        },
        transitionProperty: {
            value: 'background-color'
        },
        transitionDuration: {
            value: '{time.medium.value}'
        },
        hover: {
            backgroundColor: {
                value: '{colors.overlay.10.value}'
            },
            color: {
                value: '{colors.font.primary.value}'
            }
        },
        disabled: {
            color: {
                value: '{colors.font.disabled.value}'
            }
        }
    },
    ellipsis: {
        alignItems: {
            value: 'baseline'
        },
        justifyContent: {
            value: 'center'
        },
        paddingInlineStart: {
            value: '{space.xs.value}'
        },
        paddingInlineEnd: {
            value: '{space.xs.value}'
        }
    },
    itemContainer: {
        marginLeft: {
            value: '{space.xxxs.value}'
        },
        marginRight: {
            value: '{space.xxxs.value}'
        }
    },
    itemShared: {
        height: {
            value: '{fontSizes.xxl.value}'
        },
        minWidth: {
            value: '{fontSizes.xxl.value}'
        },
        borderRadius: {
            value: '{fontSizes.medium.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/passwordField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "passwordfield": (()=>passwordfield)
});
const passwordfield = {
    color: {
        value: '{components.fieldcontrol.color.value}'
    },
    button: {
        color: {
            value: '{components.button.color.value}'
        },
        _active: {
            backgroundColor: {
                value: '{components.button._active.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button._active.borderColor.value}'
            },
            color: {
                value: '{components.button._active.color.value}'
            }
        },
        _disabled: {
            backgroundColor: {
                value: '{components.button._disabled.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button._disabled.borderColor.value}'
            },
            color: {
                value: '{components.button._disabled.color.value}'
            }
        },
        _error: {
            color: {
                value: '{components.button.outlined.error.color.value}'
            },
            backgroundColor: {
                value: '{components.button.outlined.error.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button.outlined.error.borderColor.value}'
            },
            _active: {
                borderColor: {
                    value: '{components.button.outlined.error._active.borderColor.value}'
                },
                backgroundColor: {
                    value: '{components.button.outlined.error._active.backgroundColor.value}'
                },
                color: {
                    value: '{components.button.outlined.error._active.color.value}'
                }
            },
            _focus: {
                borderColor: {
                    value: '{components.button.outlined.error._focus.borderColor.value}'
                },
                backgroundColor: {
                    value: '{components.button.outlined.error._focus.backgroundColor.value}'
                },
                color: {
                    value: '{components.button.outlined.error._focus.color.value}'
                },
                boxShadow: {
                    value: '{components.button.outlined.error._focus.boxShadow.value}'
                }
            },
            _hover: {
                borderColor: {
                    value: '{components.button.outlined.error._hover.borderColor.value}'
                },
                backgroundColor: {
                    value: '{components.button.outlined.error._hover.backgroundColor.value}'
                },
                color: {
                    value: '{components.button.outlined.error._hover.color.value}'
                }
            }
        },
        _focus: {
            backgroundColor: {
                value: '{components.button._focus.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button._focus.borderColor.value}'
            },
            color: {
                value: '{components.button._focus.color.value}'
            }
        },
        _hover: {
            backgroundColor: {
                value: '{components.button._hover.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button._hover.borderColor.value}'
            },
            color: {
                value: '{components.button._hover.color.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/phoneNumberField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "phonenumberfield": (()=>phonenumberfield)
});
const phonenumberfield = {
    color: {
        value: '{components.fieldcontrol.color}'
    },
    borderColor: {
        value: '{components.fieldcontrol.borderColor}'
    },
    fontSize: {
        value: '{components.fieldcontrol.fontSize}'
    },
    _focus: {
        borderColor: {
            value: '{components.fieldcontrol._focus.borderColor}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/placeholder.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "placeholder": (()=>placeholder)
});
const placeholder = {
    borderRadius: {
        value: '{radii.small.value}'
    },
    transitionDuration: {
        value: '{time.long.value}'
    },
    startColor: {
        value: '{colors.background.secondary.value}'
    },
    endColor: {
        value: '{colors.background.tertiary.value}'
    },
    // sizes
    small: {
        height: {
            value: '{space.small.value}'
        }
    },
    default: {
        height: {
            value: '{space.medium.value}'
        }
    },
    large: {
        height: {
            value: '{space.large.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/radio.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "radio": (()=>radio)
});
const radio = {
    alignItems: {
        value: 'center'
    },
    justifyContent: {
        value: 'flex-start'
    },
    gap: {
        value: 'inherit'
    },
    _disabled: {
        cursor: {
            value: 'not-allowed'
        }
    },
    button: {
        alignItems: {
            value: 'center'
        },
        justifyContent: {
            value: 'center'
        },
        width: {
            value: '{fontSizes.medium.value}'
        },
        height: {
            value: '{fontSizes.medium.value}'
        },
        boxSizing: {
            value: 'border-box'
        },
        borderWidth: {
            value: '{borderWidths.medium.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderRadius: {
            value: '50%'
        },
        borderColor: {
            value: '{colors.border.primary.value}'
        },
        color: {
            value: '{colors.background.primary.value}'
        },
        backgroundColor: {
            value: '{colors.background.primary.value}'
        },
        transitionProperty: {
            value: 'all'
        },
        transitionDuration: {
            value: '{time.medium.value}'
        },
        outlineColor: {
            value: '{colors.transparent.value}'
        },
        outlineStyle: {
            value: 'solid'
        },
        outlineWidth: {
            value: '{outlineWidths.medium.value}'
        },
        outlineOffset: {
            value: '{outlineOffsets.medium.value}'
        },
        // We want the dot inside the border to be a border-width from the border
        padding: {
            value: '{borderWidths.medium.value}'
        },
        small: {
            width: {
                value: '{fontSizes.small.value}'
            },
            height: {
                value: '{fontSizes.small.value}'
            }
        },
        large: {
            width: {
                value: '{fontSizes.large.value}'
            },
            height: {
                value: '{fontSizes.large.value}'
            }
        },
        _checked: {
            color: {
                value: '{colors.primary.80.value}'
            },
            _disabled: {
                color: {
                    value: '{colors.background.disabled.value}'
                }
            }
        },
        _focus: {
            borderColor: {
                value: '{colors.border.focus.value}'
            },
            boxShadow: {
                value: '{components.fieldcontrol._focus.boxShadow.value}'
            }
        },
        _error: {
            borderColor: {
                value: '{colors.border.error.value}'
            },
            _focus: {
                boxShadow: {
                    value: '{components.fieldcontrol._error._focus.boxShadow.value}'
                }
            }
        },
        _disabled: {
            borderColor: {
                value: '{colors.border.disabled.value}'
            },
            backgroundColor: {
                value: '{colors.background.primary.value}'
            }
        }
    },
    label: {
        color: {
            value: '{components.text.color.value}'
        },
        _disabled: {
            color: {
                value: '{colors.font.disabled.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/radioGroup.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "radiogroup": (()=>radiogroup)
});
const radiogroup = {
    radio: {
        borderWidth: {
            value: '{components.radio.button.borderWidth}'
        },
        borderColor: {
            value: '{components.radio.button.borderColor}'
        },
        backgroundColor: {
            value: '{components.radio.button.backgroundColor}'
        },
        _checked: {
            color: {
                value: '{components.radio.button._checked.color}'
            }
        },
        label: {
            color: {
                value: '{components.radio.label.color}'
            }
        }
    },
    legend: {
        color: {
            value: '{components.fieldset.legend.color}'
        },
        fontWeight: {
            value: '{fontWeights.normal}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/rating.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "rating": (()=>rating)
});
const rating = {
    large: {
        size: {
            value: '{fontSizes.xxxl.value}'
        }
    },
    default: {
        size: {
            value: '{fontSizes.xl.value}'
        }
    },
    small: {
        size: {
            value: '{fontSizes.small.value}'
        }
    },
    filled: {
        color: {
            value: '{colors.secondary.80.value}'
        }
    },
    empty: {
        color: {
            value: '{colors.background.tertiary.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/searchField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "searchfield": (()=>searchfield)
});
const searchfield = {
    color: {
        value: '{components.fieldcontrol.color.value}'
    },
    button: {
        color: {
            value: '{components.button.color.value}'
        },
        backgroundColor: {
            value: '{colors.background.primary.value}'
        },
        _active: {
            backgroundColor: {
                value: '{components.button._active.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button._active.borderColor.value}'
            },
            color: {
                value: '{components.button._active.color.value}'
            }
        },
        _disabled: {
            backgroundColor: {
                value: '{components.button._disabled.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button._disabled.borderColor.value}'
            },
            color: {
                value: '{components.button._disabled.color.value}'
            }
        },
        _focus: {
            backgroundColor: {
                value: '{components.button._focus.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button._focus.borderColor.value}'
            },
            color: {
                value: '{components.button._focus.color.value}'
            }
        },
        _hover: {
            backgroundColor: {
                value: '{components.button._hover.backgroundColor.value}'
            },
            borderColor: {
                value: '{components.button._hover.borderColor.value}'
            },
            color: {
                value: '{components.button._hover.color.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/select.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "select": (()=>select)
});
const select = {
    color: {
        value: '{components.fieldcontrol.color}'
    },
    backgroundColor: {
        value: '{colors.background.primary.value}'
    },
    paddingInlineEnd: {
        value: '{space.xxl.value}'
    },
    _disabled: {
        color: {
            value: '{colors.font.disabled.value}'
        },
        backgroundColor: {
            value: '{colors.background.disabled.value}'
        }
    },
    // wrappers
    wrapper: {
        flex: {
            value: '1'
        },
        display: {
            value: 'block'
        },
        position: {
            value: 'relative'
        },
        cursor: {
            value: 'pointer'
        }
    },
    iconWrapper: {
        alignItems: {
            value: 'center'
        },
        position: {
            value: 'absolute'
        },
        top: {
            value: '50%'
        },
        right: {
            value: '{space.medium.value}'
        },
        transform: {
            value: 'translateY(-50%)'
        },
        pointerEvents: {
            value: 'none'
        },
        small: {
            right: {
                value: '{space.xs.value}'
            }
        },
        large: {
            right: {
                value: '{space.medium.value}'
            }
        }
    },
    // It's important to test these option values on Chrome/FireFox/Edge
    // on Windows because they allow styling of the option element.
    // Chrome/Safari/Firefox on Mac uses the system ui.
    option: {
        backgroundColor: {
            value: 'transparent'
        },
        color: {
            value: '{colors.font.primary.value}'
        },
        _disabled: {
            color: {
                value: '{colors.font.disabled.value}'
            },
            backgroundColor: {
                value: 'transparent'
            }
        }
    },
    whiteSpace: {
        value: 'nowrap'
    },
    minWidth: {
        value: '6.5rem'
    },
    small: {
        minWidth: {
            value: '5.5rem'
        },
        paddingInlineEnd: {
            value: '{space.xl.value}'
        }
    },
    large: {
        minWidth: {
            value: '7.5rem'
        },
        paddingInlineEnd: {
            value: '{space.xxl.value}'
        }
    },
    expanded: {
        paddingBlock: {
            value: '{space.xs.value}'
        },
        paddingInline: {
            value: '{space.small.value}'
        },
        option: {
            paddingBlock: {
                value: '{space.xs.value}'
            },
            paddingInline: {
                value: '{space.small.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/selectField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "selectfield": (()=>selectfield)
});
const selectfield = {
    borderColor: {
        value: '{components.fieldcontrol.borderColor}'
    },
    color: {
        value: '{components.fieldcontrol.color}'
    },
    flexDirection: {
        value: 'column'
    },
    fontSize: {
        value: '{components.fieldcontrol.fontSize}'
    },
    _focus: {
        borderColor: {
            value: '{components.fieldcontrol._focus.borderColor}'
        }
    },
    label: {
        color: {
            value: '{components.field.label.color}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/sliderField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sliderfield": (()=>sliderfield)
});
const sliderfield = {
    paddingBlock: {
        value: '{space.xs.value}'
    },
    // The track is the thin background of the slider
    track: {
        backgroundColor: {
            value: '{colors.background.quaternary.value}'
        },
        borderRadius: {
            value: '9999px'
        },
        height: {
            value: '0.375rem'
        },
        minWidth: {
            value: '10rem'
        }
    },
    // The range is the filled part of the track
    range: {
        backgroundColor: {
            value: '{colors.primary.80.value}'
        },
        borderRadius: {
            value: '9999px'
        },
        _disabled: {
            backgroundColor: {
                value: '{colors.background.disabled.value}'
            }
        }
    },
    // The thumb is the circle above the track that the user drags
    thumb: {
        width: {
            value: '1.25rem'
        },
        height: {
            value: '1.25rem'
        },
        backgroundColor: {
            value: '{colors.background.primary.value}'
        },
        boxShadow: {
            value: '{shadows.small.value}'
        },
        borderRadius: {
            value: '50%'
        },
        borderWidth: {
            value: '{borderWidths.medium.value}'
        },
        borderColor: {
            value: '{colors.border.primary.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        _disabled: {
            backgroundColor: {
                value: '{colors.background.disabled.value}'
            },
            borderColor: {
                value: 'transparent'
            },
            boxShadow: {
                value: 'none'
            }
        },
        _hover: {
            backgroundColor: {
                value: '{colors.background.primary.value}'
            },
            borderColor: {
                value: '{colors.border.focus.value}'
            }
        },
        _focus: {
            borderColor: {
                value: '{colors.border.focus.value}'
            },
            boxShadow: {
                value: '{components.fieldcontrol._focus.boxShadow.value}'
            }
        }
    },
    small: {
        track: {
            height: {
                value: '0.25rem'
            }
        },
        thumb: {
            width: {
                value: '1rem'
            },
            height: {
                value: '1rem'
            }
        }
    },
    large: {
        track: {
            height: {
                value: '0.625rem'
            }
        },
        thumb: {
            width: {
                value: '1.5rem'
            },
            height: {
                value: '1.5rem'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/stepperField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "stepperfield": (()=>stepperfield)
});
const stepperfield = {
    borderColor: {
        value: '{components.fieldcontrol.borderColor}'
    },
    flexDirection: {
        value: 'column'
    },
    input: {
        color: {
            value: '{components.fieldcontrol.color}'
        },
        fontSize: {
            value: '{components.fieldcontrol.fontSize}'
        },
        textAlign: {
            value: 'center'
        }
    },
    button: {
        color: {
            value: '{components.button.color}'
        },
        backgroundColor: {
            value: '{colors.transparent}'
        },
        _active: {
            color: {
                value: '{components.button._active.color}'
            },
            backgroundColor: {
                value: '{components.button._active.backgroundColor}'
            }
        },
        _focus: {
            color: {
                value: '{components.button._focus.color}'
            },
            backgroundColor: {
                value: '{components.button._focus.backgroundColor}'
            }
        },
        _disabled: {
            color: {
                value: '{components.button._disabled.color}'
            },
            backgroundColor: {
                value: '{components.fieldcontrol._disabled.backgroundColor}'
            }
        },
        _hover: {
            color: {
                value: '{components.button._hover.color}'
            },
            backgroundColor: {
                value: '{components.button._hover.backgroundColor}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/storagemanager.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "storagemanager": (()=>storagemanager)
});
const storagemanager = {
    dropzone: {
        backgroundColor: {
            value: '{colors.background.primary}'
        },
        borderRadius: {
            value: '{radii.small}'
        },
        borderColor: {
            value: '{colors.border.primary}'
        },
        borderStyle: {
            value: 'dashed'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        gap: {
            value: '{space.small}'
        },
        paddingBlock: {
            value: '{space.xl}'
        },
        paddingInline: {
            value: '{space.large}'
        },
        textAlign: {
            value: 'center'
        },
        _active: {
            backgroundColor: {
                value: '{colors.primary.10}'
            },
            borderRadius: {
                value: '{components.storagemanager.dropzone.borderRadius}'
            },
            borderColor: {
                value: '{colors.border.pressed}'
            },
            borderStyle: {
                value: '{components.storagemanager.dropzone.borderStyle}'
            },
            borderWidth: {
                value: '{borderWidths.medium}'
            }
        },
        icon: {
            color: {
                value: '{colors.border.primary}'
            },
            fontSize: {
                value: '{fontSizes.xxl}'
            }
        },
        text: {
            color: {
                value: '{colors.font.tertiary}'
            },
            fontSize: {
                value: '{fontSizes.medium}'
            },
            fontWeight: {
                value: '{fontWeights.bold}'
            }
        }
    },
    file: {
        backgroundColor: {
            value: '{colors.background.primary}'
        },
        borderRadius: {
            value: '{radii.small}'
        },
        borderColor: {
            value: '{colors.border.primary}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        paddingBlock: {
            value: '{space.xs}'
        },
        paddingInline: {
            value: '{space.small}'
        },
        gap: {
            value: '{space.small}'
        },
        alignItems: {
            value: 'baseline'
        },
        name: {
            fontSize: {
                value: '{fontSizes.medium}'
            },
            fontWeight: {
                value: '{fontWeights.bold}'
            },
            color: {
                value: '{colors.font.primary}'
            }
        },
        size: {
            fontSize: {
                value: '{fontSizes.small}'
            },
            fontWeight: {
                value: '{fontWeights.normal}'
            },
            color: {
                value: '{colors.font.tertiary}'
            }
        },
        image: {
            width: {
                value: '{space.xxl}'
            },
            height: {
                value: '{space.xxl}'
            },
            backgroundColor: {
                value: '{colors.background.secondary}'
            },
            color: {
                value: '{colors.font.tertiary}'
            },
            borderRadius: {
                value: '{radii.small}'
            }
        }
    },
    filelist: {
        flexDirection: {
            value: 'column'
        },
        gap: {
            value: '{space.small}'
        }
    },
    loader: {
        strokeLinecap: {
            value: 'round'
        },
        strokeEmpty: {
            value: '{colors.border.secondary}'
        },
        strokeFilled: {
            value: '{components.loader.strokeFilled}'
        },
        strokeWidth: {
            value: '{borderWidths.large}'
        }
    },
    previewer: {
        backgroundColor: {
            value: '{colors.background.primary}'
        },
        borderColor: {
            value: '{colors.border.primary}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderWidth: {
            value: '{borderWidths.small}'
        },
        borderRadius: {
            value: '{radii.small}'
        },
        paddingBlock: {
            value: '{space.zero}'
        },
        paddingInline: {
            value: '{space.zero}'
        },
        maxHeight: {
            value: '40rem'
        },
        maxWidth: {
            value: 'auto'
        },
        text: {
            fontSize: {
                value: '{fontSizes.medium}'
            },
            fontWeight: {
                value: '{fontWeights.bold}'
            },
            color: {
                value: '{colors.font.primary}'
            }
        },
        body: {
            paddingBlock: {
                value: '{space.medium}'
            },
            paddingInline: {
                value: '{space.medium}'
            },
            gap: {
                value: '{space.small}'
            }
        },
        footer: {
            justifyContent: {
                value: 'flex-end'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/switchField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "switchfield": (()=>switchfield)
});
const switchfield = {
    // States
    _disabled: {
        opacity: {
            value: '{opacities.60.value}'
        }
    },
    _focused: {
        shadow: {
            value: '{components.fieldcontrol._focus.boxShadow.value}'
        }
    },
    // Sizes
    fontSize: {
        value: '{fontSizes.medium.value}'
    },
    large: {
        fontSize: {
            value: '{fontSizes.large.value}'
        }
    },
    small: {
        fontSize: {
            value: '{fontSizes.small.value}'
        }
    },
    // Child elements
    label: {
        padding: {
            value: '{space.xs.value}'
        }
    },
    thumb: {
        backgroundColor: {
            value: '{colors.background.primary.value}'
        },
        borderColor: {
            value: 'transparent'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderRadius: {
            value: '{radii.xxxl.value}'
        },
        checked: {
            transform: {
                value: '{transforms.slideX.medium.value}'
            }
        },
        transition: {
            duration: {
                value: '{time.medium.value}'
            }
        },
        width: {
            value: '{space.relative.medium.value}'
        }
    },
    track: {
        backgroundColor: {
            value: '{colors.background.quaternary.value}'
        },
        borderRadius: {
            value: '{radii.xxxl.value}'
        },
        checked: {
            backgroundColor: {
                value: '{colors.primary.80.value}'
            }
        },
        height: {
            value: '{space.relative.medium.value}'
        },
        padding: {
            value: '{outlineWidths.medium.value}'
        },
        transition: {
            duration: {
                value: '{time.short.value}'
            }
        },
        width: {
            value: '{space.relative.xl.value}'
        },
        _error: {
            backgroundColor: {
                value: '{colors.background.error.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/table.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "table": (()=>table)
});
const table = {
    /**
     * Default table styles
     */ borderCollapse: {
        value: 'collapse'
    },
    display: {
        value: 'table'
    },
    width: {
        value: '100%'
    },
    /**
     * Default table head styles
     */ head: {
        display: {
            value: 'table-header-group'
        },
        verticalAlign: {
            value: 'middle'
        }
    },
    /**
     * Default table body styles
     */ body: {
        display: {
            value: 'table-row-group'
        },
        verticalAlign: {
            value: 'middle'
        }
    },
    /**
     * Default table foot styles
     */ foot: {
        display: {
            value: 'table-footer-group'
        },
        verticalAlign: {
            value: 'middle'
        }
    },
    /**
     * Default table row styles
     */ row: {
        display: {
            value: 'table-row'
        },
        verticalAlign: {
            value: 'middle'
        },
        hover: {
            backgroundColor: {
                value: '{colors.background.tertiary.value}'
            }
        },
        striped: {
            backgroundColor: {
                value: '{colors.background.secondary.value}'
            }
        }
    },
    /**
     * Default table header cell styles
     */ header: {
        borderColor: {
            value: '{colors.border.tertiary.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        color: {
            value: '{colors.font.primary.value}'
        },
        display: {
            value: 'table-cell'
        },
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        fontWeight: {
            value: '{fontWeights.bold.value}'
        },
        padding: {
            value: '{space.medium.value}'
        },
        verticalAlign: {
            value: 'middle'
        },
        large: {
            fontSize: {
                value: '{fontSizes.large.value}'
            },
            padding: {
                value: '{space.large.value}'
            }
        },
        small: {
            fontSize: {
                value: '{fontSizes.small.value}'
            },
            padding: {
                value: '{space.xs.value}'
            }
        }
    },
    /**
     * Default table data cell styles
     */ data: {
        borderColor: {
            value: '{colors.border.tertiary.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        color: {
            value: '{colors.font.primary.value}'
        },
        display: {
            value: 'table-cell'
        },
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        fontWeight: {
            value: '{fontWeights.normal.value}'
        },
        padding: {
            value: '{space.medium.value}'
        },
        verticalAlign: {
            value: 'middle'
        },
        large: {
            fontSize: {
                value: '{fontSizes.large.value}'
            },
            padding: {
                value: '{space.large.value}'
            }
        },
        small: {
            fontSize: {
                value: '{fontSizes.small.value}'
            },
            padding: {
                value: '{space.xs.value}'
            }
        }
    },
    /**
     * Default table caption styles
     */ caption: {
        captionSide: {
            value: 'bottom'
        },
        color: {
            value: '{colors.font.primary.value}'
        },
        display: {
            value: 'table-caption'
        },
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        textAlign: {
            value: 'center'
        },
        wordBreak: {
            value: 'break-all'
        },
        large: {
            fontSize: {
                value: '{fontSizes.large.value}'
            }
        },
        small: {
            fontSize: {
                value: '{fontSizes.small.value}'
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/tabs.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "tabs": (()=>tabs)
});
const tabs = {
    backgroundColor: {
        value: 'transparent'
    },
    borderColor: {
        value: '{colors.border.secondary.value}'
    },
    borderStyle: {
        value: 'solid'
    },
    borderWidth: {
        value: '{borderWidths.medium.value}'
    },
    gap: {
        value: '0'
    },
    item: {
        backgroundColor: {
            value: 'transparent'
        },
        borderColor: {
            value: '{colors.border.secondary.value}'
        },
        borderStyle: {
            value: 'solid'
        },
        borderWidth: {
            value: '{borderWidths.medium.value}'
        },
        color: {
            value: '{colors.font.secondary.value}'
        },
        fontSize: {
            value: '{fontSizes.medium.value}'
        },
        fontWeight: {
            value: '{fontWeights.bold.value}'
        },
        paddingVertical: {
            value: '{space.small.value}'
        },
        paddingHorizontal: {
            value: '{space.medium.value}'
        },
        textAlign: {
            value: 'center'
        },
        transitionDuration: {
            value: '{time.medium.value}'
        },
        _hover: {
            backgroundColor: {
                value: 'transparent'
            },
            borderColor: {
                value: '{colors.border.focus.value}'
            },
            boxShadow: {
                value: 'none'
            },
            color: {
                value: '{colors.font.hover.value}'
            }
        },
        _focus: {
            backgroundColor: {
                value: 'transparent'
            },
            borderColor: {
                value: '{colors.border.focus.value}'
            },
            boxShadow: {
                value: {
                    offsetX: '0px',
                    offsetY: '0px',
                    blurRadius: '0px',
                    spreadRadius: '{borderWidths.medium}',
                    color: '{colors.border.focus.value}'
                }
            },
            color: {
                value: '{colors.font.focus.value}'
            }
        },
        _active: {
            backgroundColor: {
                value: 'transparent'
            },
            borderColor: {
                value: '{colors.font.interactive.value}'
            },
            boxShadow: {
                value: 'none'
            },
            color: {
                value: '{colors.font.interactive.value}'
            }
        },
        _disabled: {
            backgroundColor: {
                value: 'transparent'
            },
            borderColor: {
                value: '{colors.border.tertiary.value}'
            },
            boxShadow: {
                value: 'none'
            },
            color: {
                value: '{colors.font.disabled.value}'
            }
        }
    },
    panel: {
        backgroundColor: {
            value: 'transparent'
        },
        paddingInline: {
            value: '0'
        },
        paddingBlock: {
            value: '{space.small.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/text.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "text": (()=>text)
});
const text = {
    // default styles
    color: {
        value: '{colors.font.primary.value}'
    },
    // variations
    primary: {
        color: {
            value: '{colors.font.primary.value}'
        }
    },
    secondary: {
        color: {
            value: '{colors.font.secondary.value}'
        }
    },
    tertiary: {
        color: {
            value: '{colors.font.tertiary.value}'
        }
    },
    error: {
        color: {
            value: '{colors.font.error.value}'
        }
    },
    warning: {
        color: {
            value: '{colors.font.warning.value}'
        }
    },
    success: {
        color: {
            value: '{colors.font.success.value}'
        }
    },
    info: {
        color: {
            value: '{colors.font.info.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/textAreaField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "textareafield": (()=>textareafield)
});
const textareafield = {
    color: {
        value: '{components.fieldcontrol.color.value}'
    },
    borderColor: {
        value: '{components.fieldcontrol.borderColor.value}'
    },
    _focus: {
        borderColor: {
            value: '{components.fieldcontrol._focus.borderColor.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/textField.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "textfield": (()=>textfield)
});
const textfield = {
    color: {
        value: '{components.fieldcontrol.color.value}'
    },
    borderColor: {
        value: '{components.fieldcontrol.borderColor.value}'
    },
    fontSize: {
        value: '{components.fieldcontrol.fontSize.value}'
    },
    _focus: {
        borderColor: {
            value: '{components.fieldcontrol._focus.borderColor.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/toggleButton.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "togglebutton": (()=>togglebutton)
});
const togglebutton = {
    borderColor: {
        value: '{colors.border.primary.value}'
    },
    color: {
        value: '{colors.font.primary.value}'
    },
    _hover: {
        backgroundColor: {
            value: '{colors.overlay.10.value}'
        }
    },
    _focus: {
        borderColor: {
            value: '{colors.border.focus.value}'
        },
        color: {
            value: '{colors.font.primary.value}'
        }
    },
    _active: {
        backgroundColor: {
            value: '{colors.transparent.value}'
        }
    },
    _disabled: {
        backgroundColor: {
            value: '{colors.transparent.value}'
        },
        borderColor: {
            value: '{colors.border.disabled.value}'
        },
        color: {
            value: '{colors.font.disabled.value}'
        }
    },
    _pressed: {
        borderColor: {
            value: '{colors.border.pressed.value}'
        },
        color: {
            value: '{colors.font.primary.value}'
        },
        backgroundColor: {
            value: '{colors.overlay.20.value}'
        },
        _hover: {
            backgroundColor: {
                value: '{colors.overlay.30.value}'
            }
        }
    },
    primary: {
        backgroundColor: {
            value: '{colors.transparent.value}'
        },
        borderWidth: {
            value: '{borderWidths.small.value}'
        },
        _focus: {
            borderColor: {
                value: '{colors.border.focus.value}'
            },
            backgroundColor: {
                value: '{colors.transparent.value}'
            },
            boxShadow: {
                value: '{components.fieldcontrol._focus.boxShadow.value}'
            },
            color: {
                value: '{colors.font.primary.value}'
            }
        },
        _hover: {
            backgroundColor: {
                value: '{colors.overlay.10.value}'
            },
            color: {
                value: '{colors.font.primary.value}'
            }
        },
        _disabled: {
            borderColor: {
                value: '{colors.border.disabled.value}'
            },
            backgroundColor: {
                value: '{colors.background.disabled.value}'
            },
            color: {
                value: '{colors.font.disabled.value}'
            }
        },
        _pressed: {
            backgroundColor: {
                value: '{colors.primary.80.value}'
            },
            borderColor: {
                value: '{colors.primary.80.value}'
            },
            color: {
                value: '{colors.background.primary.value}'
            },
            _focus: {
                backgroundColor: {
                    value: '{colors.border.focus.value}'
                },
                borderColor: {
                    value: '{colors.border.focus.value}'
                },
                color: {
                    value: '{colors.background.primary.value}'
                }
            },
            _hover: {
                borderColor: {
                    value: '{colors.primary.60.value}'
                },
                backgroundColor: {
                    value: '{colors.primary.60.value}'
                },
                boxShadow: {
                    value: '{colors.primary.60.value}'
                },
                color: {
                    value: '{colors.background.primary.value}'
                }
            }
        }
    },
    link: {
        backgroundColor: {
            value: '{colors.transparent.value}'
        },
        color: {
            value: '{colors.overlay.50.value}'
        },
        _hover: {
            backgroundColor: {
                value: '{colors.transparent.value}'
            },
            color: {
                value: '{colors.overlay.50.value}'
            }
        },
        _focus: {
            backgroundColor: {
                value: '{colors.transparent.value}'
            },
            color: {
                value: '{colors.overlay.50.value}'
            }
        },
        _disabled: {
            backgroundColor: {
                value: '{colors.transparent.value}'
            },
            color: {
                value: '{colors.font.disabled.value}'
            }
        },
        _pressed: {
            backgroundColor: {
                value: '{colors.transparent.value}'
            },
            color: {
                value: '{colors.overlay.90.value}'
            },
            _focus: {
                backgroundColor: {
                    value: '{colors.transparent.value}'
                },
                color: {
                    value: '{colors.overlay.90.value}'
                }
            },
            _hover: {
                color: {
                    value: '{colors.overlay.90.value}'
                },
                backgroundColor: {
                    value: '{colors.transparent.value}'
                }
            }
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/toggleButtonGroup.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "togglebuttongroup": (()=>togglebuttongroup)
});
const togglebuttongroup = {
    alignItems: {
        value: 'center'
    },
    alignContent: {
        value: 'center'
    },
    justifyContent: {
        value: 'flex-start'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "components": (()=>components)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/alert.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$aiConversation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/aiConversation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$autocomplete$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/autocomplete.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$authenticator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/authenticator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$avatar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/avatar.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$badge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/badge.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$breadcrumbs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/breadcrumbs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$card$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/card.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$checkbox$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/checkbox.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$checkboxField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/checkboxField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$collection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/collection.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/copy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$dialCodeSelect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/dialCodeSelect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$divider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/divider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$dropZone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/dropZone.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$accordion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/accordion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$field$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/field.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fieldControl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldControl.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fieldGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fieldset$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldset.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fieldMessages$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldMessages.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fileuploader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fileuploader.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$flex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/flex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$heading$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/heading.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$highlightMatch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/highlightMatch.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/icon.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/input.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$image$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/image.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$inAppMessaging$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/inAppMessaging.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/link.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$liveness$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/liveness.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/loader.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/menu.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/message.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/pagination.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$passwordField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/passwordField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$phoneNumberField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/phoneNumberField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$placeholder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/placeholder.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$radio$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/radio.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$radioGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/radioGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$rating$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/rating.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$searchField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/searchField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$select$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/select.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$selectField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/selectField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$sliderField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/sliderField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$stepperField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/stepperField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$storagemanager$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/storagemanager.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$switchField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/switchField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/table.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$tabs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/tabs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$textAreaField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/textAreaField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$textField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/textField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$toggleButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/toggleButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$toggleButtonGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/toggleButtonGroup.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const components = {
    accordion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$accordion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accordion"],
    aiConversation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$aiConversation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aiConversation"],
    alert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alert"],
    authenticator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$authenticator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authenticator"],
    autocomplete: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$autocomplete$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autocomplete"],
    avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$avatar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatar"],
    badge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$badge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badge"],
    breadcrumbs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$breadcrumbs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breadcrumbs"],
    button: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["button"],
    card: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$card$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["card"],
    checkbox: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$checkbox$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkbox"],
    checkboxfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$checkboxField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkboxfield"],
    collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$collection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"],
    copy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"],
    countrycodeselect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$dialCodeSelect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dialcodeselect"],
    divider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$divider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["divider"],
    dropzone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$dropZone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dropzone"],
    field: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$field$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["field"],
    fieldcontrol: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fieldControl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldcontrol"],
    fieldgroup: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fieldGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldgroup"],
    fieldmessages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fieldMessages$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldmessages"],
    fieldset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fieldset$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldset"],
    fileuploader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$fileuploader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fileuploader"],
    flex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$flex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flex"],
    heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$heading$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heading"],
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icon"],
    highlightmatch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$highlightMatch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["highlightmatch"],
    image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$image$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["image"],
    inappmessaging: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$inAppMessaging$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inappmessaging"],
    input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["input"],
    link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["link"],
    liveness: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$liveness$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liveness"],
    loader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loader"],
    menu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menu"],
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["message"],
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pagination"],
    passwordfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$passwordField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["passwordfield"],
    phonenumberfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$phoneNumberField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phonenumberfield"],
    placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$placeholder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeholder"],
    radio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$radio$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radio"],
    radiogroup: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$radioGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radiogroup"],
    rating: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$rating$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rating"],
    searchfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$searchField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchfield"],
    select: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$select$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["select"],
    selectfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$selectField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectfield"],
    sliderfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$sliderField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliderfield"],
    stepperfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$stepperField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stepperfield"],
    storagemanager: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$storagemanager$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storagemanager"],
    switchfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$switchField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["switchfield"],
    table: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["table"],
    tabs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$tabs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabs"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["text"],
    textareafield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$textAreaField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textareafield"],
    textfield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$textField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textfield"],
    togglebutton: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$toggleButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["togglebutton"],
    togglebuttongroup: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$toggleButtonGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["togglebuttongroup"]
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fonts.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// TODO: update the design tokens to use an array
// export interface FontDesignToken {
//   value: Array<string>
// }
__turbopack_context__.s({
    "fonts": (()=>fonts)
});
const fonts = {
    default: {
        variable: {
            value: `'InterVariable', 'Inter var', 'Inter', -apple-system, BlinkMacSystemFont,
        'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans',
        sans-serif`
        },
        static: {
            value: `'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
        'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif`
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fontSizes.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fontSizes": (()=>fontSizes)
});
const fontSizes = {
    xxxs: {
        value: '0.375rem'
    },
    xxs: {
        value: '0.5rem'
    },
    xs: {
        value: '0.75rem'
    },
    small: {
        value: '0.875rem'
    },
    medium: {
        value: '1rem'
    },
    large: {
        value: '1.25rem'
    },
    xl: {
        value: '1.5rem'
    },
    xxl: {
        value: '2rem'
    },
    xxxl: {
        value: '2.5rem'
    },
    xxxxl: {
        value: '3rem'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fontWeights.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fontWeights": (()=>fontWeights)
});
const fontWeights = {
    hairline: {
        value: 100
    },
    thin: {
        value: 200
    },
    light: {
        value: 300
    },
    normal: {
        value: 400
    },
    medium: {
        value: 500
    },
    semibold: {
        value: 600
    },
    bold: {
        value: 700
    },
    extrabold: {
        value: 800
    },
    black: {
        value: 900
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/lineHeights.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "lineHeights": (()=>lineHeights)
});
const lineHeights = {
    small: {
        value: '1.25'
    },
    medium: {
        value: '1.5'
    },
    large: {
        value: '2'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/opacities.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "opacities": (()=>opacities)
});
const opacities = {
    0: {
        value: '0'
    },
    10: {
        value: '0.1'
    },
    20: {
        value: '0.2'
    },
    30: {
        value: '0.3'
    },
    40: {
        value: '0.4'
    },
    50: {
        value: '0.5'
    },
    60: {
        value: '0.6'
    },
    70: {
        value: '0.7'
    },
    80: {
        value: '0.8'
    },
    90: {
        value: '0.9'
    },
    100: {
        value: '1'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/outlineOffsets.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "outlineOffsets": (()=>outlineOffsets)
});
const outlineOffsets = {
    small: {
        value: '1px'
    },
    medium: {
        value: '2px'
    },
    large: {
        value: '3px'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/outlineWidths.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "outlineWidths": (()=>outlineWidths)
});
const outlineWidths = {
    small: {
        value: '1px'
    },
    medium: {
        value: '2px'
    },
    large: {
        value: '3px'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/radii.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "radii": (()=>radii)
});
const radii = {
    xs: {
        value: '0.125rem'
    },
    small: {
        value: '0.25rem'
    },
    medium: {
        value: '0.5rem'
    },
    large: {
        value: '1rem'
    },
    xl: {
        value: '2rem'
    },
    xxl: {
        value: '4rem'
    },
    xxxl: {
        value: '8rem'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/shadows.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shadows": (()=>shadows)
});
const shadows = {
    small: {
        value: {
            offsetX: '0px',
            offsetY: '2px',
            blurRadius: '4px',
            color: '{colors.shadow.tertiary.value}'
        }
    },
    medium: {
        value: {
            offsetX: '0px',
            offsetY: '2px',
            blurRadius: '6px',
            color: '{colors.shadow.secondary.value}'
        }
    },
    large: {
        value: {
            offsetX: '0px',
            offsetY: '4px',
            blurRadius: '12px',
            color: '{colors.shadow.primary.value}'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/space.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "space": (()=>space)
});
const space = {
    zero: {
        value: '0'
    },
    xxxs: {
        value: '0.25rem'
    },
    xxs: {
        value: '0.375rem'
    },
    xs: {
        value: '0.5rem'
    },
    small: {
        value: '0.75rem'
    },
    medium: {
        value: '1rem'
    },
    large: {
        value: '1.5rem'
    },
    xl: {
        value: '2.0rem'
    },
    xxl: {
        value: '3.0rem'
    },
    xxxl: {
        value: '4.5rem'
    },
    relative: {
        //creating a second set of sizes using em which will be sized relative to a parent instead of the root
        xxxs: {
            value: '0.25em'
        },
        xxs: {
            value: '0.375em'
        },
        xs: {
            value: '0.5em'
        },
        small: {
            value: '0.75em'
        },
        medium: {
            value: '1em'
        },
        large: {
            value: '1.5em'
        },
        xl: {
            value: '2.0em'
        },
        xxl: {
            value: '3.0em'
        },
        xxxl: {
            value: '4.5em'
        },
        full: {
            value: '100%'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/time.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "time": (()=>time)
});
const time = {
    short: {
        value: '100ms'
    },
    medium: {
        value: '250ms'
    },
    long: {
        value: '500ms'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/transforms.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "transforms": (()=>transforms)
});
const transforms = {
    // TODO: make this more generic and cross-platform
    slideX: {
        small: {
            value: 'translateX(0.5em)'
        },
        medium: {
            value: 'translateX(1em)'
        },
        large: {
            value: 'translateX(2em)'
        }
    }
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "reactNativeTokens": (()=>reactNativeTokens),
    "tokens": (()=>tokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$borderWidths$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/borderWidths.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/colors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fonts$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fonts.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fontSizes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontWeights$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fontWeights.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$lineHeights$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/lineHeights.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$opacities$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/opacities.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$outlineOffsets$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/outlineOffsets.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$outlineWidths$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/outlineWidths.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$radii$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/radii.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$shadows$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/shadows.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/space.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$time$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/time.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$transforms$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/transforms.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const tokens = {
    components: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$components$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["components"],
    borderWidths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$borderWidths$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderWidths"],
    colors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"],
    fonts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fonts$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fonts"],
    fontSizes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"],
    fontWeights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontWeights$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontWeights"],
    lineHeights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$lineHeights$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lineHeights"],
    opacities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$opacities$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["opacities"],
    outlineOffsets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$outlineOffsets$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["outlineOffsets"],
    outlineWidths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$outlineWidths$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["outlineWidths"],
    radii: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$radii$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radii"],
    shadows: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$shadows$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"],
    space: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"],
    time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$time$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["time"],
    transforms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$transforms$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transforms"]
};
const reactNativeTokens = {
    colors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$colors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"],
    borderWidths: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$borderWidths$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borderWidths"],
    fontSizes: {
        xxs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"].xxs,
        xs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"].xs,
        small: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"].small,
        medium: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"].medium,
        large: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"].large,
        xl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"].xl,
        xxl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"].xxl,
        xxxl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontSizes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSizes"].xxxl
    },
    fontWeights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$fontWeights$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontWeights"],
    opacities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$opacities$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["opacities"],
    // React Native doesn't need the relative space values
    space: {
        // use `space.xxxs` to output a value of `2` and avoid odd space numbers
        xxs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"].xxxs,
        xs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"].xs,
        small: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"].small,
        medium: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"].medium,
        large: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"].large,
        xl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"].xl,
        xxl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"].xxl,
        xxxl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$space$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["space"].xxxl
    },
    radii: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$radii$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radii"],
    time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$time$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["time"]
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/breakpoints.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Breakpoint unit is in pixels
__turbopack_context__.s({
    "breakpoints": (()=>breakpoints)
});
const breakpoints = {
    values: {
        base: 0,
        small: 480,
        medium: 768,
        large: 992,
        xl: 1280,
        xxl: 1536
    },
    defaultBreakpoint: 'base'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/defaultTheme.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultTheme": (()=>defaultTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/tokens/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/breakpoints.mjs [app-ssr] (ecmascript)");
;
;
const defaultTheme = {
    tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$tokens$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"],
    breakpoints: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breakpoints"],
    name: 'default-theme'
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createComponentCSS.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createComponentCSS": (()=>createComponentCSS),
    "recursiveComponentCSS": (()=>recursiveComponentCSS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
function addVars(selector, vars) {
    if (!vars) return '';
    return `${selector} { ${Object.entries(vars).map(([key, value])=>{
        return `--${key}:${value}; `;
    }).join(' ')}}\n`;
}
function recursiveComponentCSS(baseSelector, theme) {
    let str = '';
    const { _modifiers = {}, _element = {}, _vars, ...props } = theme;
    // if there are no props, skip
    if (Object.keys(props).length) {
        // separate psuedo/attribute selectors
        const [selectors, other] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitObject"])(props, (key)=>key.startsWith(':') || key.startsWith('['));
        Object.entries(selectors).forEach(([selector, value])=>{
            // need to remove nested things like vars and elements
            const { _modifiers = {}, _element = {}, _vars, ...props } = value;
            str += `${baseSelector}${selector} { ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propsToString"])(props)} }\n`;
            str += addVars(`${baseSelector}${selector}`, _vars);
        });
        str += `${baseSelector} { ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propsToString"])(other)} }\n`;
    }
    str += addVars(baseSelector, _vars);
    Object.entries(_modifiers).forEach(([key, value])=>{
        if (value && Object.keys(value).length) {
            str += recursiveComponentCSS(`${baseSelector}--${key}`, value);
        }
    });
    Object.entries(_element).forEach(([key, value])=>{
        if (value && Object.keys(value).length) {
            str += recursiveComponentCSS(`${baseSelector}__${key}`, value);
        }
    });
    return str;
}
/**
 * This will take a component theme and create the appropriate CSS for it.
 *
 */ function createComponentCSS({ theme, components }) {
    let cssText = '';
    const { tokens, name: themeName, breakpoints } = theme;
    components.forEach(({ name, theme, overrides })=>{
        const baseComponentClassName = `amplify-${name}`;
        const componentClassName = `[data-amplify-theme="${themeName}"] .${baseComponentClassName}`;
        // unwrap the component theme
        // if it is a function: call it with the defaultTheme to get a static object
        const componentTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(theme) ? theme(tokens) : theme;
        cssText += recursiveComponentCSS(componentClassName, componentTheme);
        // if the component theme has overrides
        // generate the appropriate CSS for each of them
        if (overrides) {
            overrides.forEach((override)=>{
                // unwrap the override component theme just like above
                const componentTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(override.theme) ? override.theme(tokens) : override.theme;
                if ('mediaQuery' in override) {
                    cssText += `@media (${override.mediaQuery}) {\n ${recursiveComponentCSS(componentClassName, componentTheme)} \n}`;
                }
                if ('breakpoint' in override) {
                    const breakpoint = breakpoints.values[override.breakpoint];
                    cssText += `\n@media (min-width: ${breakpoint}px) {\n ${recursiveComponentCSS(componentClassName, componentTheme)} \n}`;
                }
                if ('selector' in override) {
                    cssText += recursiveComponentCSS(`${override.selector} .${baseComponentClassName}`, componentTheme);
                }
                if ('colorMode' in override) {
                    cssText += `\n@media (prefers-color-scheme: ${override.colorMode}) {\n${recursiveComponentCSS(`[data-amplify-theme="${themeName}"][data-amplify-color-mode="system"] .${baseComponentClassName}`, componentTheme)}\n}\n`;
                    cssText += recursiveComponentCSS(`[data-amplify-theme="${themeName}"][data-amplify-color-mode="${override.colorMode}"] .${baseComponentClassName}`, componentTheme);
                }
            });
        }
    });
    return cssText;
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createColorPalette.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Takes a set of keys and a color name and returns an object of design tokens,
 * used for applying a primary color at the theme level to our tokens.
 *
 * createColorPalette({keys: ['10','20',...], value: 'red'})
 * returns {
 *   10: { value: '{colors.red.10.value}' },
 *   20: { value: '{colors.red.20.value}' },
 *   ...
 * }
 */ __turbopack_context__.s({
    "createColorPalette": (()=>createColorPalette)
});
function createColorPalette({ keys, value }) {
    return keys.reduce((acc, key)=>{
        return {
            ...acc,
            [key]: {
                value: `{colors.${value}.${key}.value}`
            }
        };
    }, {});
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createAnimationCSS.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAnimationCSS": (()=>createAnimationCSS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
function createAnimationCSS({ animations, tokens }) {
    let cssText = '';
    Object.entries(animations).forEach(([key, value])=>{
        cssText += `\n  @keyframes ${key} {`;
        Object.entries(value).forEach(([step, properties])=>{
            cssText += `\n    ${step} {\n`;
            const animationProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(properties) ? properties(tokens) : properties;
            cssText += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propsToString"])(animationProperties);
            cssText += `\n    }`;
        });
        cssText += `\n  }`;
    });
    return cssText;
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createTheme.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTheme": (()=>createTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$defaultTheme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/defaultTheme.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createComponentCSS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createComponentCSS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createColorPalette$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createColorPalette.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createAnimationCSS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createAnimationCSS.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * This will be used like `const myTheme = createTheme({})`
 * `myTheme` can then be passed to a Provider or the generated CSS
 * can be passed to a stylesheet at build-time or run-time.
 * const myTheme = createTheme({})
 * const myOtherTheme = createTheme({}, myTheme);
 */ function createTheme(theme, DefaultTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$defaultTheme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTheme"]) {
    // merge theme and DefaultTheme to get a complete theme
    // deepExtend is an internal Style Dictionary method
    // that performs a deep merge on n objects. We could change
    // this to another 3p deep merge solution too.
    const mergedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])([
        {},
        DefaultTheme,
        {
            ...theme,
            components: {}
        }
    ]);
    const { primaryColor, secondaryColor } = mergedTheme;
    // apply primaryColor and secondaryColor if present
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(primaryColor)) {
        mergedTheme.tokens.colors.primary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createColorPalette$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createColorPalette"])({
            keys: Object.keys(mergedTheme.tokens.colors[primaryColor]),
            value: primaryColor
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(secondaryColor)) {
        mergedTheme.tokens.colors.secondary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createColorPalette$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createColorPalette"])({
            keys: Object.keys(mergedTheme.tokens.colors[secondaryColor]),
            value: secondaryColor
        });
    }
    // Setting up the tokens. This is similar to what Style Dictionary
    // does. At the end of this, each token should have:
    // - CSS variable name of itself
    // - its value (reference to another CSS variable or raw value)
    const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupTokens"])({
        tokens: mergedTheme.tokens,
        setupToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupToken"]
    }); // Setting the type here because setupTokens is recursive
    const { breakpoints, name } = mergedTheme;
    // flattenProperties is another internal Style Dictionary function
    // that creates an array of all tokens.
    let cssText = `[data-amplify-theme="${name}"] {\n` + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenProperties"])(tokens).map((token)=>`${token.name}: ${token.value};`).join('\n') + `\n}\n`;
    if (theme?.components) {
        cssText += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createComponentCSS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createComponentCSS"])({
            theme: {
                ...mergedTheme,
                tokens
            },
            components: theme.components
        });
    }
    let overrides = [];
    if (mergedTheme.animations) {
        cssText += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createAnimationCSS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnimationCSS"])({
            animations: mergedTheme.animations,
            tokens
        });
    }
    /**
     * For each override, we setup the tokens and then generate the CSS.
     * This allows us to have one single CSS string for all possible overrides
     * and avoid re-renders in React, but also support other frameworks as well.
     */ if (mergedTheme.overrides) {
        overrides = mergedTheme.overrides.map((override)=>{
            const overrideTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupTokens"])({
                tokens: override.tokens,
                setupToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupToken"]
            });
            const customProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenProperties"])(overrideTokens).map((token)=>`${token.name}: ${token.value};`).join('\n');
            // Overrides can have a selector, media query, breakpoint, or color mode
            // for creating the selector
            if ('selector' in override) {
                cssText += `\n${override.selector} {\n${customProperties}\n}\n`;
            }
            if ('mediaQuery' in override) {
                cssText += `\n@media (${override.mediaQuery}) {
  [data-amplify-theme="${name}"] {
    ${customProperties}
  }
}\n`;
            }
            if ('breakpoint' in override) {
                const breakpoint = mergedTheme.breakpoints.values[override.breakpoint];
                cssText += `\n@media (min-width: ${breakpoint}px) {
  [data-amplify-theme="${name}"] {
    ${customProperties}
  }
}\n`;
            }
            if ('colorMode' in override) {
                cssText += `\n@media (prefers-color-scheme: ${override.colorMode}) {
          [data-amplify-theme="${name}"][data-amplify-color-mode="system"] {
            ${customProperties}
            color-scheme: ${override.colorMode};
          }
        }\n`;
                cssText += `\n[data-amplify-theme="${name}"][data-amplify-color-mode="${override.colorMode}"] {
          ${customProperties}
          color-scheme: ${override.colorMode};
        }\n`;
            }
            return {
                ...override,
                tokens: overrideTokens
            };
        });
    }
    return {
        tokens,
        breakpoints,
        name,
        cssText,
        containerProps: ({ colorMode } = {})=>{
            return {
                'data-amplify-theme': name,
                'data-amplify-color-mode': colorMode
            };
        },
        // keep overrides separate from base theme
        // this allows web platforms to use plain CSS scoped to a
        // selector and only override the CSS vars needed. This
        // means we could generate CSS at build-time in a postcss
        // plugin, or do it at runtime and inject the CSS into a
        // style tag.
        // This also allows RN to dynamically switch themes in a
        // provider.
        overrides
    };
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/authenticator/user.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** Federated IDPs that Authenticator supports */ __turbopack_context__.s({
    "FederatedIdentityProviders": (()=>FederatedIdentityProviders),
    "UnverifiedContactMethodType": (()=>UnverifiedContactMethodType)
});
var FederatedIdentityProviders;
(function(FederatedIdentityProviders) {
    FederatedIdentityProviders["Apple"] = "Apple";
    FederatedIdentityProviders["Amazon"] = "Amazon";
    FederatedIdentityProviders["Facebook"] = "Facebook";
    FederatedIdentityProviders["Google"] = "Google";
})(FederatedIdentityProviders || (FederatedIdentityProviders = {}));
/**
 * Cognito user contact method types that have not been verified as valid
 */ var UnverifiedContactMethodType;
(function(UnverifiedContactMethodType) {
    UnverifiedContactMethodType["Email"] = "email";
    UnverifiedContactMethodType["PhoneNumber"] = "phone_number";
})(UnverifiedContactMethodType || (UnverifiedContactMethodType = {}));
;
}}),

};

//# sourceMappingURL=46c82_%40aws-amplify_ui_dist_esm_6af42853._.js.map