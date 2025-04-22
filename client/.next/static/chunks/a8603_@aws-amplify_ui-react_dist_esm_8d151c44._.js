(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/a8603_@aws-amplify_ui-react_dist_esm_8d151c44._.js", {

"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/version.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VERSION": (()=>VERSION)
});
const VERSION = '6.10.0';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/hooks/useDeprecationWarning.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDeprecationWarning": (()=>useDeprecationWarning)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$hooks$2f$useDeprecationWarning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDeprecationWarning$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/hooks/useDeprecationWarning.mjs [app-client] (ecmascript) <export default as useDeprecationWarning>");
;
/**
 * Logs a deprecation warning `message` to the console.
 */ const useDeprecationWarning = ({ message, shouldWarn: _shouldWarn })=>{
    const shouldWarn = _shouldWarn && // show message on builds without Node `process` polyfill
    // or with process.env.NODE_ENV not production
    (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === 'undefined' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && ("TURBOPACK compile-time value", "development") !== 'production');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$hooks$2f$useDeprecationWarning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDeprecationWarning$3e$__["useDeprecationWarning"])({
        message,
        shouldWarn
    });
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CustomComponentsContext": (()=>CustomComponentsContext),
    "useCustomComponents": (()=>useCustomComponents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const CustomComponentsContext = // @ts-ignore
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useCustomComponents = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CustomComponentsContext);
    if (!context) {
        throw new Error('`useCustomComponents` cannot be used outside of a `CustomComponentsContext.Provider`');
    }
    return context;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "primitiveWithForwardRef": (()=>primitiveWithForwardRef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Updates the return type for primitives wrapped in `React.forwardRef` to
 * `React.ReactElement`. In React 18 the return type of `React.ExoticComponent`
 * was changed from `React.ReactElement` to `React.ReactNode`, which breaks
 * clients using React 16 and 17.
 *
 * @param primitive UI Primitive to be wrapped with `React.forwardRef`
 * @returns ForwaredRef wrapped UI Primitive
 */ const primitiveWithForwardRef = (primitive)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(primitive);
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Fieldset/useFieldset.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FieldsetContext": (()=>FieldsetContext),
    "useFieldset": (()=>useFieldset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const FieldsetContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isFieldsetDisabled: false
});
/**
 * @description Fieldsets in HTML can be disabled, which disables all child
 * fieldsets and input controls. `useFieldset` passes the disabled state down
 * via context.
 */ const useFieldset = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FieldsetContext);
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/types/style.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @internal May be removed in a future version
 * Maps from component style props to React `style` props
 * Note: Primarily needed to map from component style props that don't match CSS Properties directly
 * such as wrap => flexWrap and direction => flexDirection
 */ __turbopack_context__.s({
    "ComponentPropsToStylePropsMap": (()=>ComponentPropsToStylePropsMap),
    "ComponentPropsToStylePropsMapKeys": (()=>ComponentPropsToStylePropsMapKeys)
});
const ComponentPropsToStylePropsMap = {
    alignContent: 'alignContent',
    alignItems: 'alignItems',
    alignSelf: 'alignSelf',
    area: 'gridArea',
    aspectRatio: 'aspectRatio',
    autoColumns: 'gridAutoColumns',
    autoFlow: 'gridAutoFlow',
    autoRows: 'gridAutoRows',
    backgroundColor: 'backgroundColor',
    backgroundImage: 'backgroundImage',
    basis: 'flexBasis',
    border: 'border',
    borderRadius: 'borderRadius',
    borderColor: 'borderColor',
    borderWidth: 'borderWidth',
    borderStyle: 'borderStyle',
    bottom: 'bottom',
    boxShadow: 'boxShadow',
    color: 'color',
    column: 'gridColumn',
    columnEnd: 'gridColumnEnd',
    columnGap: 'columnGap',
    columnSpan: 'gridColumn',
    columnStart: 'gridColumnStart',
    direction: 'flexDirection',
    display: 'display',
    flex: 'flex',
    fontFamily: 'fontFamily',
    fontSize: 'fontSize',
    fontStyle: 'fontStyle',
    fontWeight: 'fontWeight',
    gap: 'gap',
    grow: 'flexGrow',
    height: 'height',
    justifyContent: 'justifyContent',
    left: 'left',
    letterSpacing: 'letterSpacing',
    lineHeight: 'lineHeight',
    margin: 'margin',
    marginBlock: 'marginBlock',
    marginBlockEnd: 'marginBlockEnd',
    marginBlockStart: 'marginBlockStart',
    marginBottom: 'marginBlockEnd',
    marginInline: 'marginInline',
    marginInlineEnd: 'marginInlineEnd',
    marginInlineStart: 'marginInlineStart',
    marginLeft: 'marginInlineStart',
    marginRight: 'marginInlineEnd',
    marginTop: 'marginBlockStart',
    maxHeight: 'maxHeight',
    maxWidth: 'maxWidth',
    minHeight: 'minHeight',
    minWidth: 'minWidth',
    objectFit: 'objectFit',
    objectPosition: 'objectPosition',
    opacity: 'opacity',
    order: 'order',
    overflow: 'overflow',
    padding: 'padding',
    paddingBlock: 'paddingBlock',
    paddingBlockEnd: 'paddingBlockEnd',
    paddingBlockStart: 'paddingBlockStart',
    paddingBottom: 'paddingBlockEnd',
    paddingInline: 'paddingInline',
    paddingInlineEnd: 'paddingInlineEnd',
    paddingInlineStart: 'paddingInlineStart',
    paddingLeft: 'paddingInlineStart',
    paddingRight: 'paddingInlineEnd',
    paddingTop: 'paddingBlockStart',
    position: 'position',
    resize: 'resize',
    right: 'right',
    row: 'gridRow',
    rowEnd: 'gridRowEnd',
    rowGap: 'rowGap',
    rowSpan: 'gridRow',
    rowStart: 'gridRowStart',
    shrink: 'flexShrink',
    templateAreas: 'gridTemplateAreas',
    templateColumns: 'gridTemplateColumns',
    templateRows: 'gridTemplateRows',
    textAlign: 'textAlign',
    textDecoration: 'textDecoration',
    textTransform: 'textTransform',
    top: 'top',
    transform: 'transform',
    transformOrigin: 'transformOrigin',
    width: 'width',
    whiteSpace: 'whiteSpace',
    wrap: 'flexWrap'
};
/**
 * @internal May be removed in a future version
 */ const ComponentPropsToStylePropsMapKeys = Object.keys(ComponentPropsToStylePropsMap);
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/constants.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// For internal use, no need to export
__turbopack_context__.s({
    "ARROW_DOWN": (()=>ARROW_DOWN),
    "ARROW_UP": (()=>ARROW_UP),
    "ComponentText": (()=>ComponentText),
    "ENTER_KEY": (()=>ENTER_KEY),
    "ESCAPE_KEY": (()=>ESCAPE_KEY),
    "stylePropsToThemeKeys": (()=>stylePropsToThemeKeys)
});
const ComponentText = {
    Alert: {
        dismissButtonLabel: 'Dismiss alert'
    },
    Autocomplete: {
        emptyText: 'No options found',
        loadingText: 'Loading options...'
    },
    Collection: {
        searchButtonLabel: 'Search',
        searchNoResultsFound: 'No results found'
    },
    Fields: {
        clearButtonLabel: 'Clear input'
    },
    Message: {
        dismissLabel: 'Dismiss message'
    },
    PaginationItem: {
        currentPageLabel: 'Page',
        nextLabel: 'Go to next page',
        pageLabel: 'Go to page',
        previousLabel: 'Go to previous page'
    },
    PhoneNumberField: {
        countryCodeLabel: 'Country code'
    },
    SearchField: {
        searchButtonLabel: 'Search'
    },
    PasswordField: {
        passwordIsHidden: 'Password is hidden',
        passwordIsShown: 'Password is shown',
        showPassword: 'Show password'
    },
    StepperField: {
        increaseButtonLabel: 'Increase to',
        decreaseButtonLabel: 'Decrease to'
    }
};
const stylePropsToThemeKeys = {
    backgroundColor: 'colors',
    borderColor: 'colors',
    borderWidth: 'borderWidths',
    color: 'colors',
    borderRadius: 'radii',
    fontSize: 'fontSizes',
    fontWeight: 'fontWeights',
    fontFamily: 'fonts',
    lineHeight: 'lineHeights',
    opacity: 'opacities',
    boxShadow: 'shadows',
    transform: 'transforms',
    left: 'space',
    right: 'space',
    top: 'space',
    bottom: 'space',
    height: 'space',
    width: 'space',
    letterSpacing: 'space',
    margin: 'space',
    marginBlock: 'space',
    marginBlockEnd: 'space',
    marginBlockStart: 'space',
    marginInline: 'space',
    marginInlineEnd: 'space',
    marginInlineStart: 'space',
    marginLeft: 'space',
    marginRight: 'space',
    marginTop: 'space',
    marginBottom: 'space',
    maxHeight: 'space',
    maxWidth: 'space',
    minHeight: 'space',
    minWidth: 'space',
    padding: 'space',
    paddingBlock: 'space',
    paddingBlockEnd: 'space',
    paddingBlockStart: 'space',
    paddingInline: 'space',
    paddingInlineEnd: 'space',
    paddingInlineStart: 'space',
    paddingLeft: 'space',
    paddingRight: 'space',
    paddingTop: 'space',
    paddingBottom: 'space',
    gap: 'space',
    columnGap: 'space',
    rowGap: 'space'
};
// key name
const ESCAPE_KEY = 'Escape';
const ENTER_KEY = 'Enter';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/types/theme.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isThemeStylePropKey": (()=>isThemeStylePropKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/constants.mjs [app-client] (ecmascript)");
;
const isThemeStylePropKey = (key)=>{
    return key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylePropsToThemeKeys"];
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/utils.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCSSVariableIfValueIsThemeKey": (()=>getCSSVariableIfValueIsThemeKey),
    "getConsecutiveIntArray": (()=>getConsecutiveIntArray),
    "isEmptyString": (()=>isEmptyString),
    "isNullOrEmptyString": (()=>isNullOrEmptyString),
    "objectKeys": (()=>objectKeys),
    "strHasLength": (()=>strHasLength)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$types$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/types/theme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/constants.mjs [app-client] (ecmascript)");
;
;
;
;
const strHasLength = (str)=>typeof str === 'string' && str.length > 0;
const isEmptyString = (value)=>typeof value === 'string' && value.length === 0;
const isNullOrEmptyString = (value)=>value == null || isEmptyString(value);
/**
 * Create a consecutive integer array from start value to end value.
 * @param start start value
 * @param end end value
 * @returns an integer array with elements from start to end consecutively
 */ const getConsecutiveIntArray = (start, end)=>{
    const length = end - start + 1;
    return Array.from({
        length
    }, (_, idx)=>idx + start);
};
/**
 * TS helper function to make using Object.keys more typesafe
 */ const objectKeys = (obj)=>{
    return Object.keys(obj);
};
const getCSSVariableIfValueIsThemeKey = (propKey, value, tokens)=>{
    if (typeof value !== 'string') {
        return value;
    }
    // For shorthand properties like `padding` which can accept 1, 2, 3, or 4 values
    // run this function on each value. This would not work on CSS shorthands that
    // mix types, like border which is a composite of borderWidth, borderStyle, and
    // borderColor.
    if (value.includes(' ')) {
        return value.split(' ').map((val)=>getCSSVariableIfValueIsThemeKey(propKey, val, tokens)).join(' ');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$types$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThemeStylePropKey"])(propKey)) {
        const path = value.split('.');
        const tokenKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylePropsToThemeKeys"][propKey];
        let tokenProps = tokens[tokenKey];
        for(let i = 0; i < path.length; i++){
            if (tokenProps) {
                // overwrite tokenProps with next nested value of tokenProps
                tokenProps = tokenProps[path[i]];
                continue;
            }
            break;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignToken"])(tokenProps) ? `var(--${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssNameTransform"])({
            path: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylePropsToThemeKeys"][propKey],
                ...path
            ]
        })})` : value;
    }
    return value;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/responsive/utils.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getValueAtCurrentBreakpoint": (()=>getValueAtCurrentBreakpoint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$defaultTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/defaultTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/utils.mjs [app-client] (ecmascript) <locals>");
;
;
const getClosestValueByBreakpoint = ({ breakpoint, breakpoints, values })=>{
    const value = values[breakpoint];
    // Check if breakpoint exists in values
    if (value !== undefined) {
        return value;
    }
    // Otherwise use a lower breakpoint value
    const breakpointsDesc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKeys"])(breakpoints).sort((a, b)=>breakpoints[b] - breakpoints[a]);
    const lowerBreakpoints = breakpointsDesc.slice(breakpointsDesc.indexOf(breakpoint));
    for (const breakpoint of lowerBreakpoints){
        // Check if breakpoint exists in values
        const value = values[breakpoint];
        if (value !== undefined) {
            return value;
        }
    }
    return null;
};
/**
 * This takes an object and will return an object that only has the
 * breakpoint keys
 * @param obj
 * @returns
 */ const valueObjToBreakpoints = (obj)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKeys"])(obj).reduce((acc, key)=>key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$defaultTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTheme"].breakpoints.values ? {
            ...acc,
            [key]: obj[key]
        } : acc, {});
};
const getValueAtCurrentBreakpoint = ({ breakpoint, breakpoints, values })=>{
    let breakpointCompatValues = {};
    const breakpointsAscending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKeys"])(breakpoints).sort((a, b)=>breakpoints[a] - breakpoints[b]);
    if (Array.isArray(values)) {
        values.forEach((value, index)=>{
            breakpointCompatValues[breakpointsAscending[index]] = value;
        });
    } else if (typeof values === 'object') {
        breakpointCompatValues = valueObjToBreakpoints(values);
    }
    return getClosestValueByBreakpoint({
        breakpoint,
        breakpoints,
        values: breakpointCompatValues
    });
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/responsive/getMediaQueries.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMediaQueries": (()=>getMediaQueries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/utils.mjs [app-client] (ecmascript) <locals>");
;
// Inspiration for getMediaQueries and useBreakpoint
// comes from https://github.com/iiroj/use-breakpoint/
const getMediaQueries = ({ breakpoints })=>{
    const sortedBreakpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKeys"])(breakpoints).sort((a, b)=>breakpoints[b] - breakpoints[a]);
    return sortedBreakpoints.map((breakpoint, index)=>{
        let query = '';
        const minWidth = breakpoints[breakpoint];
        const nextBreakpoint = sortedBreakpoints[index - 1];
        const maxWidth = nextBreakpoint ? breakpoints[nextBreakpoint] - 1 : null;
        if (minWidth >= 0) {
            query = `(min-width: ${minWidth}px)`;
        }
        if (maxWidth !== null) {
            if (query) {
                query += ' and ';
            }
            query += `(max-width: ${maxWidth}px)`;
        }
        return {
            breakpoint,
            query,
            maxWidth,
            minWidth
        };
    });
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/responsive/useBreakpoint.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useBreakpoint": (()=>useBreakpoint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$responsive$2f$getMediaQueries$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/responsive/getMediaQueries.mjs [app-client] (ecmascript)");
;
;
// Inspiration for getMediaQueries and useBreakpoint
// comes from https://github.com/iiroj/use-breakpoint/
const useIsomorphicEffect = typeof window === 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
const useBreakpoint = ({ breakpoints, defaultBreakpoint })=>{
    const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
    const matchMedia = supportMatchMedia ? window.matchMedia : null;
    const mediaQueries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBreakpoint.useMemo[mediaQueries]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$responsive$2f$getMediaQueries$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaQueries"])({
                breakpoints
            })
    }["useBreakpoint.useMemo[mediaQueries]"], [
        breakpoints
    ]);
    const [breakpoint, setBreakpoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultBreakpoint);
    const updateBreakpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBreakpoint.useCallback[updateBreakpoint]": (matches, breakpoint)=>{
            if (matches) {
                setBreakpoint(breakpoint);
            }
        }
    }["useBreakpoint.useCallback[updateBreakpoint]"], [
        setBreakpoint
    ]);
    useIsomorphicEffect({
        "useBreakpoint.useIsomorphicEffect": ()=>{
            if (!matchMedia) return;
            const unsubscribeList = mediaQueries.map({
                "useBreakpoint.useIsomorphicEffect.unsubscribeList": ({ query, breakpoint })=>{
                    const queryList = matchMedia(query);
                    updateBreakpoint(queryList.matches, breakpoint);
                    const handleMediaChange = {
                        "useBreakpoint.useIsomorphicEffect.unsubscribeList.handleMediaChange": (event)=>{
                            if (event.matches) {
                                setBreakpoint(breakpoint);
                            }
                        }
                    }["useBreakpoint.useIsomorphicEffect.unsubscribeList.handleMediaChange"];
                    queryList.addEventListener('change', handleMediaChange);
                    return ({
                        "useBreakpoint.useIsomorphicEffect.unsubscribeList": ()=>queryList.removeEventListener('change', handleMediaChange)
                    })["useBreakpoint.useIsomorphicEffect.unsubscribeList"];
                }
            }["useBreakpoint.useIsomorphicEffect.unsubscribeList"]);
            return ({
                "useBreakpoint.useIsomorphicEffect": ()=>{
                    unsubscribeList.forEach({
                        "useBreakpoint.useIsomorphicEffect": (unsubscribe)=>unsubscribe()
                    }["useBreakpoint.useIsomorphicEffect"]);
                }
            })["useBreakpoint.useIsomorphicEffect"];
        }
    }["useBreakpoint.useIsomorphicEffect"], [
        breakpoints,
        setBreakpoint,
        matchMedia,
        mediaQueries
    ]);
    /** Print a nice debug value for React Devtools */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(breakpoint, {
        "useBreakpoint.useDebugValue": (breakpoint)=>breakpoint
    }["useBreakpoint.useDebugValue"]);
    return breakpoint;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/ThemeProvider/ThemeContext.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeContext": (()=>ThemeContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createTheme.mjs [app-client] (ecmascript)");
;
;
const ThemeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTheme"])(),
    colorMode: undefined
});
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/hooks/useTheme.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getThemeFromContext": (()=>getThemeFromContext),
    "useColorMode": (()=>useColorMode),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/createTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$ThemeProvider$2f$ThemeContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/ThemeProvider/ThemeContext.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Get current Theme object value from Amplify context.
 * Returns a default theme if context is not available
 */ const getThemeFromContext = (context)=>{
    if (typeof context === 'undefined' || typeof context.theme === 'undefined') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTheme"])();
    }
    return context.theme;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/theming)
 */ const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$ThemeProvider$2f$ThemeContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    return getThemeFromContext(context);
};
/**
 * Internal use only
 */ const useColorMode = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$ThemeProvider$2f$ThemeContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    return context.colorMode;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/getStyleValue.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getStyleValue": (()=>getStyleValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/utils.mjs [app-client] (ecmascript) <locals>");
;
;
/**
 * This takes an unknown value, which could be a:
 * - design token: `color={tokens.colors.font.primary}`
 * - string, which could be a:
 *   - theme key: `color='font.primary'`
 *   - plain style: `color='red'`
 * - or a number: `padding={10}`
 * and returns the appropriate and resolved value
 */ const getStyleValue = ({ value, propKey, tokens })=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignToken"])(value)) {
        return value.toString();
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(value)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(propKey) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCSSVariableIfValueIsThemeKey"])(propKey, value, tokens) : value;
    }
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/styleUtils.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertGridSpan": (()=>convertGridSpan),
    "convertStylePropsToStyleObj": (()=>convertStylePropsToStyleObj),
    "getGridSpan": (()=>getGridSpan),
    "isSpanPrimitiveValue": (()=>isSpanPrimitiveValue),
    "useStyles": (()=>useStyles),
    "useTransformStyleProps": (()=>useTransformStyleProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$types$2f$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/types/style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$responsive$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/responsive/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$responsive$2f$useBreakpoint$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/responsive/useBreakpoint.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$hooks$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/hooks/useTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$getStyleValue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/getStyleValue.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/utils.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
const isSpanPrimitiveValue = (spanValue)=>{
    return spanValue === 'auto' || typeof spanValue === 'number' && !isNaN(spanValue) || typeof spanValue === 'string' && !isNaN(parseFloat(spanValue));
};
const getGridSpan = (spanValue)=>{
    return spanValue === 'auto' ? 'auto' : `span ${spanValue}`;
};
const convertGridSpan = (spanValue)=>{
    // PropertyType
    if (isSpanPrimitiveValue(spanValue)) {
        return getGridSpan(spanValue);
    }
    // PropertyType[]
    if (Array.isArray(spanValue)) {
        return spanValue.map((value)=>getGridSpan(value));
    }
    // ResponsiveObject<PropertyType>
    if (typeof spanValue === 'object' && spanValue != null) {
        return Object.entries(spanValue).reduce((acc, [key, value])=>({
                ...acc,
                [key]: getGridSpan(value)
            }), {});
    }
    return null;
};
/**
 * Transforms style props to another target prop
 * where the original is a simpler API than the target.
 * This function will remove the original prop and
 * replace target prop values with calculated
 * E.g. rowSpan => row, columnSpan => column
 */ const useTransformStyleProps = (props)=>{
    const { rowSpan, columnSpan, row, column, ...rest } = props;
    const { rowFromSpanValue, columnFromSpanValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransformStyleProps.useMemo": ()=>{
            return {
                rowFromSpanValue: convertGridSpan(rowSpan),
                columnFromSpanValue: convertGridSpan(columnSpan)
            };
        }
    }["useTransformStyleProps.useMemo"], [
        rowSpan,
        columnSpan
    ]);
    return {
        row: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNullOrEmptyString"])(row) ? row : rowFromSpanValue,
        column: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNullOrEmptyString"])(column) ? column : columnFromSpanValue,
        ...rest
    };
};
const isComponentStyleProp = (key)=>{
    return key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$types$2f$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentPropsToStylePropsMap"];
};
/**
 * Convert style props to CSS variables for React style prop
 * Note: Will filter out undefined, null, and empty string prop values
 */ const convertStylePropsToStyleObj = ({ props = {}, style = {}, breakpoint, breakpoints, tokens })=>{
    const nonStyleProps = {};
    Object.keys(props).filter((propKey)=>props[propKey] !== null).forEach((propKey)=>{
        if (isComponentStyleProp(propKey)) {
            const values = props[propKey];
            if (values === null || values === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEmptyString"])(values)) return;
            const reactStyleProp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$types$2f$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentPropsToStylePropsMap"][propKey];
            // short circuit the style prop here if it is a string or design token
            // so we don't have to call getValueAtCurrentBreakpoint every time
            let value = '';
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$theme$2f$createTheme$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignToken"])(values)) {
                value = values.toString();
            } else if (typeof values === 'string') {
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCSSVariableIfValueIsThemeKey"])(propKey, values, tokens);
            } else if (typeof values === 'number') {
                value = values;
            } else if (typeof values === 'object') {
                // here values should be a responsive array or object
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$getStyleValue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleValue"])({
                    propKey,
                    tokens,
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$responsive$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAtCurrentBreakpoint"])({
                        values,
                        breakpoint,
                        breakpoints
                    })
                });
            }
            style = {
                ...style,
                [reactStyleProp]: value
            };
        } else if (typeof props[propKey] !== 'undefined') {
            nonStyleProps[propKey] = props[propKey];
        }
    });
    return {
        propStyles: style,
        nonStyleProps
    };
};
const useStyles = (props, style)=>{
    const { breakpoints: { values: breakpoints, defaultBreakpoint }, tokens } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$hooks$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const breakpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$responsive$2f$useBreakpoint$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBreakpoint"])({
        breakpoints,
        defaultBreakpoint
    });
    const propStyles = useTransformStyleProps(props);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStyles.useMemo": ()=>convertStylePropsToStyleObj({
                props: propStyles,
                style,
                breakpoint,
                breakpoints,
                tokens
            })
    }["useStyles.useMemo"], [
        propStyles,
        style,
        breakpoints,
        breakpoint,
        tokens
    ]);
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "View": (()=>View)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$styleUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/styleUtils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
const ViewPrimitive = ({ as = 'div', children, testId, ariaLabel, isDisabled, style, inert, ...rest }, ref)=>{
    const { propStyles, nonStyleProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$styleUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])(rest, style);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(as, {
        'aria-label': ariaLabel,
        'data-testid': testId,
        disabled: isDisabled,
        ref,
        inert: inert ? '' : null,
        style: propStyles,
        ...nonStyleProps
    }, children);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/view)
 */ const View = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(ViewPrimitive);
View.displayName = 'View';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Flex": (()=>Flex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
const FlexPrimitive = ({ className, children, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Flex, className),
        ref: ref,
        ...rest
    }, children);
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/flex)
 */ const Flex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(FlexPrimitive);
Flex.displayName = 'Flex';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Loader/Loader.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CIRCULAR_EMPTY": (()=>CIRCULAR_EMPTY),
    "CIRCULAR_FILLED": (()=>CIRCULAR_FILLED),
    "CIRCULAR_STROKE_WIDTH": (()=>CIRCULAR_STROKE_WIDTH),
    "CIRCUMFERENCE": (()=>CIRCUMFERENCE),
    "LINEAR_EMPTY": (()=>LINEAR_EMPTY),
    "LINEAR_FILLED": (()=>LINEAR_FILLED),
    "Loader": (()=>Loader),
    "RADIUS": (()=>RADIUS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
const LINEAR_EMPTY = 'linear-empty';
const LINEAR_FILLED = 'linear-filled';
const CIRCULAR_EMPTY = 'circular-empty';
const CIRCULAR_FILLED = 'circular-filled';
// radius + strokeWidth = 50
const CIRCULAR_STROKE_WIDTH = 8;
const RADIUS = 42;
// circumference = 2 * r * PI  (r = 42)
const CIRCUMFERENCE = 2 * RADIUS * Math.PI;
const LoaderPrimitive = ({ className, filledColor, emptyColor, size, variation, isDeterminate = false, isPercentageTextHidden = false, percentage = 0, ...rest }, ref)=>{
    percentage = Math.min(percentage, 100);
    percentage = Math.max(percentage, 0);
    const percent = `${percentage}%`;
    const componentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Loader, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Loader, size), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Loader, variation), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Loader, 'determinate', isDeterminate), className);
    const linearLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("g", null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("line", {
        x1: "0",
        x2: "100%",
        y1: "50%",
        y2: "50%",
        style: {
            stroke: String(emptyColor)
        },
        "data-testid": LINEAR_EMPTY
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("line", {
        x1: "0",
        x2: isDeterminate ? percent : '100%',
        y1: "50%",
        y2: "50%",
        style: {
            // To get rid of the visible stroke linecap when percentage is 0
            stroke: isDeterminate && percentage === 0 ? 'none' : filledColor ? String(filledColor) : undefined
        },
        "data-testid": LINEAR_FILLED
    }), isDeterminate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("text", {
        "aria-live": "polite",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].LoaderLabel, isPercentageTextHidden ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].VisuallyHidden : null),
        // -1% offset makes the text position look nicest
        x: `${-1 + percentage}%`,
        y: "200%"
    }, percent) : null);
    // r + stroke-width should add up to 50% to avoid overflow
    const circularLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("g", null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: "50%",
        cy: "50%",
        r: `${RADIUS}%`,
        strokeWidth: `${CIRCULAR_STROKE_WIDTH}%`,
        style: {
            stroke: String(emptyColor)
        },
        "data-testid": CIRCULAR_EMPTY
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: "50%",
        cy: "50%",
        r: `${RADIUS}%`,
        strokeWidth: `${CIRCULAR_STROKE_WIDTH}%`,
        style: {
            stroke: String(filledColor),
            strokeDasharray: isDeterminate ? `${CIRCUMFERENCE}% ${CIRCUMFERENCE}%` : undefined,
            strokeDashoffset: isDeterminate ? `${CIRCUMFERENCE - CIRCUMFERENCE * percentage / 100}%` : undefined
        },
        "data-testid": CIRCULAR_FILLED
    }), isDeterminate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("text", {
        "aria-live": "polite",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].LoaderLabel, isPercentageTextHidden ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].VisuallyHidden : null),
        // this x and y make text position look nicest
        x: "130%",
        y: "80%"
    }, percent) : null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "svg",
        className: componentClasses,
        ref: ref,
        role: "img",
        ...rest
    }, variation === 'linear' ? linearLoader : circularLoader);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/loader)
 */ const Loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(LoaderPrimitive);
Loader.displayName = 'Loader';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Fieldset/useFieldset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Loader/Loader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
// These variations support colorThemes. 'undefined' accounts for our
// 'default' variation which is not named.
const supportedVariations = [
    'link',
    'primary',
    undefined
];
const ButtonPrimitive = ({ className, children, colorTheme, isFullWidth = false, isDisabled, isLoading, loadingText = '', size, type = 'button', variation, ...rest }, ref)=>{
    // Creates our colorTheme modifier string based on if the variation
    // supports colorThemes and a colorTheme is used.
    const colorThemeModifier = supportedVariations.includes(variation) && colorTheme ? `${variation ?? 'outlined'}--${colorTheme}` : undefined;
    const { isFieldsetDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldset"])();
    const shouldBeDisabled = isFieldsetDisabled ? isFieldsetDisabled : isDisabled ?? isLoading ?? rest['disabled'];
    const componentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Button, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupControl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Button, variation), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Button, colorThemeModifier), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Button, size), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Button, 'disabled', shouldBeDisabled), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Button, 'loading', isLoading), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Button, 'fullwidth', isFullWidth), className);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        ref: ref,
        as: "button",
        className: componentClasses,
        isDisabled: shouldBeDisabled,
        type: type,
        ...rest
    }, isLoading ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "span",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].ButtonLoaderWrapper
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
        size: size
    }), loadingText ? loadingText : null) : children);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/button)
 */ const Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(ButtonPrimitive);
Button.displayName = 'Button';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Heading": (()=>Heading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
const headingLevels = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6'
};
const HeadingPrimitive = ({ className, children, isTruncated, level = 6, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: headingLevels[level],
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Heading, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Heading, level), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Heading, 'truncated', isTruncated), className),
        ref: ref,
        ...rest
    }, children);
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/heading)
 */ const Heading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(HeadingPrimitive);
Heading.displayName = 'Heading';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Text/Text.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Text": (()=>Text)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
const TextPrimitive = ({ as = 'p', className, children, isTruncated, variation, ...rest }, ref)=>{
    const componentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Text, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Text, variation), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Text, 'truncated', isTruncated), className);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: as,
        className: componentClasses,
        ref: ref,
        ...rest
    }, children);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/text)
 */ const Text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(TextPrimitive);
Text.displayName = 'Text';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/helpers/utils.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getFormDataFromEvent": (()=>getFormDataFromEvent)
});
const getFormDataFromEvent = (event)=>{
    const formData = new FormData(event.target);
    return Object.fromEntries(formData);
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFormHandlers": (()=>useFormHandlers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/helpers/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
;
;
;
function useFormHandlers() {
    const { submitForm, updateBlur, updateForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "useFormHandlers.useAuthenticator": (context)=>[
                context.submitForm,
                context.updateBlur,
                context.updateForm
            ]
    }["useFormHandlers.useAuthenticator"]);
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormHandlers.useCallback[handleBlur]": ({ target: { name } })=>{
            updateBlur({
                name
            });
        }
    }["useFormHandlers.useCallback[handleBlur]"], [
        updateBlur
    ]);
    // @TODO: align multiple input type handling with react docs example for 3.0 release
    // example: https://reactjs.org/docs/forms.html#handling-multiple-inputs
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormHandlers.useCallback[handleChange]": ({ target: { checked, name, type, value } })=>{
            const isUncheckedCheckbox = type === 'checkbox' && !checked;
            updateForm({
                name,
                value: isUncheckedCheckbox ? undefined : value
            });
        }
    }["useFormHandlers.useCallback[handleChange]"], [
        updateForm
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormHandlers.useCallback[handleSubmit]": (event)=>{
            event.preventDefault();
            submitForm((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFormDataFromEvent"])(event));
        }
    }["useFormHandlers.useCallback[handleSubmit]"], [
        submitForm
    ]);
    return {
        handleBlur,
        handleChange,
        handleSubmit
    };
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/context/IconsContext.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconsContext": (()=>IconsContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const IconsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/context/useIcons.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIcons": (()=>useIcons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$IconsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/context/IconsContext.mjs [app-client] (ecmascript)");
;
;
function useIcons(component) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$IconsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconsContext"]);
    if (component && context) {
        return context[component];
    }
    return undefined;
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconCheckCircle.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconCheckCircle": (()=>IconCheckCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const IconCheckCircle = (props)=>{
    const { className, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "span",
        width: "1em",
        height: "1em",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconError.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconError": (()=>IconError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const IconError = (props)=>{
    const { className, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "span",
        width: "1em",
        height: "1em",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconInfo.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconInfo": (()=>IconInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const IconInfo = (props)=>{
    const { className, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "span",
        width: "1em",
        height: "1em",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconWarning.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconWarning": (()=>IconWarning)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const IconWarning = (props)=>{
    const { className, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "span",
        width: "1em",
        height: "1em",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Alert/AlertIcon.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertIcon": (()=>AlertIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$useIcons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/context/useIcons.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconCheckCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconCheckCircle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconInfo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconWarning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconWarning.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const AlertIcon = ({ variation, ariaHidden, ariaLabel, role })=>{
    const icons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$useIcons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIcons"])('alert');
    let icon;
    switch(variation){
        case 'info':
            icon = icons?.info ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconInfo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconInfo"], {
                "aria-hidden": ariaHidden,
                "aria-label": ariaLabel,
                role: role
            });
            break;
        case 'error':
            icon = icons?.error ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconError"], {
                "aria-hidden": ariaHidden,
                "aria-label": ariaLabel,
                role: role
            });
            break;
        case 'warning':
            icon = icons?.warning ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconWarning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWarning"], {
                "aria-hidden": ariaHidden,
                "aria-label": ariaLabel,
                role: role
            });
            break;
        case 'success':
            icon = icons?.success ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconCheckCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheckCircle"], {
                "aria-hidden": ariaHidden,
                "aria-label": ariaLabel,
                role: role
            });
            break;
    }
    return icon ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].AlertIcon
    }, icon) : null;
};
AlertIcon.displayName = 'AlertIcon';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconClose.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconClose": (()=>IconClose)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const IconClose = (props)=>{
    const { className, size, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "span",
        width: size ?? '1em',
        height: size ?? '1em',
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: size ? {
            width: size,
            height: size
        } : undefined
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Alert/Alert.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Alert$2f$AlertIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Alert/AlertIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$useIcons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/context/useIcons.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconClose$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconClose.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const AlertPrimitive = ({ buttonRef, children, className, dismissButtonLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentText"].Alert.dismissButtonLabel, hasIcon = true, heading, isDismissible = false, onDismiss, variation, ...rest }, ref)=>{
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const icons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$useIcons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIcons"])('alert');
    const dismissAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AlertPrimitive.useCallback[dismissAlert]": ()=>{
            setDismissed(!dismissed);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(onDismiss)) {
                onDismiss();
            }
        }
    }["AlertPrimitive.useCallback[dismissAlert]"], [
        setDismissed,
        onDismiss,
        dismissed
    ]);
    return !dismissed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Alert, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Alert, variation)),
        ref: ref,
        role: "alert",
        ...rest
    }, hasIcon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Alert$2f$AlertIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertIcon"], {
        variation: variation,
        ariaHidden: true
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        flex: "1"
    }, heading && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].AlertHeading
    }, heading), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].AlertBody
    }, children)), isDismissible && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ariaLabel: dismissButtonLabel,
        variation: "link",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].AlertDismiss,
        onClick: dismissAlert,
        ref: buttonRef
    }, icons?.close ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconClose$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClose"], {
        "aria-hidden": "true"
    }))) : null;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/alert)
 */ const Alert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(AlertPrimitive);
Alert.displayName = 'Alert';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RemoteErrorMessage": (()=>RemoteErrorMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/translations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Alert/Alert.mjs [app-client] (ecmascript)");
;
;
;
;
const RemoteErrorMessage = ()=>{
    const { error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "RemoteErrorMessage.useAuthenticator": (context)=>[
                context.error
            ]
    }["RemoteErrorMessage.useAuthenticator"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, error ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
        variation: "error",
        isDismissible: true
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(error)) : null);
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/VisuallyHidden/VisuallyHidden.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VisuallyHidden": (()=>VisuallyHidden)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
const VisuallyHiddenPrimitive = ({ as = 'span', children, className, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: as,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].VisuallyHidden, className),
        ref: ref,
        ...rest
    }, children);
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/visuallyhidden)
 */ const VisuallyHidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(VisuallyHiddenPrimitive);
VisuallyHidden.displayName = 'VisuallyHidden';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconVisibilityOff.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconVisibilityOff": (()=>IconVisibilityOff)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const IconVisibilityOff = (props)=>{
    const { className, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "span",
        width: "1em",
        height: "1em",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M12 6.0002C15.79 6.0002 19.17 8.1302 20.82 11.5002C20.23 12.7202 19.4 13.7702 18.41 14.6202L19.82 16.0302C21.21 14.8002 22.31 13.2602 23 11.5002C21.27 7.1102 17 4.0002 12 4.0002C10.73 4.0002 9.51 4.2002 8.36 4.5702L10.01 6.2202C10.66 6.0902 11.32 6.0002 12 6.0002ZM10.93 7.14019L13 9.2102C13.57 9.4602 14.03 9.9202 14.28 10.4902L16.35 12.5602C16.43 12.2202 16.49 11.8602 16.49 11.4902C16.5 9.0102 14.48 7.0002 12 7.0002C11.63 7.0002 11.28 7.05019 10.93 7.14019ZM2.01 3.8702L4.69 6.5502C3.06 7.8302 1.77 9.5302 1 11.5002C2.73 15.8902 7 19.0002 12 19.0002C13.52 19.0002 14.98 18.7102 16.32 18.1802L19.74 21.6002L21.15 20.1902L3.42 2.4502L2.01 3.8702ZM9.51 11.3702L12.12 13.9802C12.08 13.9902 12.04 14.0002 12 14.0002C10.62 14.0002 9.5 12.8802 9.5 11.5002C9.5 11.4502 9.51 11.4202 9.51 11.3702V11.3702ZM6.11 7.97019L7.86 9.7202C7.63 10.2702 7.5 10.8702 7.5 11.5002C7.5 13.9802 9.52 16.0002 12 16.0002C12.63 16.0002 13.23 15.8702 13.77 15.6402L14.75 16.6202C13.87 16.8602 12.95 17.0002 12 17.0002C8.21 17.0002 4.83 14.8702 3.18 11.5002C3.88 10.0702 4.9 8.89019 6.11 7.97019Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconVisibility.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconVisibility": (()=>IconVisibility)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const IconVisibility = (props)=>{
    const { className, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "span",
        width: "1em",
        height: "1em",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6ZM12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/PasswordField/ShowPasswordButton.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShowPasswordButton": (()=>ShowPasswordButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/VisuallyHidden/VisuallyHidden.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$useIcons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/context/useIcons.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconVisibilityOff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconVisibilityOff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconVisibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconVisibility.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const { passwordIsHidden, passwordIsShown, showPassword } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentText"].PasswordField;
const ShowPasswordButtonPrimitive = ({ fieldType, passwordIsHiddenLabel = passwordIsHidden, passwordIsShownLabel = passwordIsShown, showPasswordButtonLabel = showPassword, size, hasError, ...rest }, ref)=>{
    const icons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$useIcons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIcons"])('passwordField');
    const showPasswordButtonClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldShowPassword, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldShowPassword, 'error', hasError));
    const icon = fieldType === 'password' ? icons?.visibility ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconVisibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconVisibility"], {
        "aria-hidden": "true"
    }) : icons?.visibilityOff ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconVisibilityOff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconVisibilityOff"], {
        "aria-hidden": "true"
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "aria-checked": fieldType !== 'password',
        ariaLabel: showPasswordButtonLabel,
        className: showPasswordButtonClass,
        colorTheme: hasError ? 'error' : undefined,
        ref: ref,
        role: "switch",
        size: size,
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
        "aria-live": "polite"
    }, fieldType === 'password' ? passwordIsHiddenLabel : passwordIsShownLabel), icon);
};
const ShowPasswordButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(ShowPasswordButtonPrimitive);
ShowPasswordButton.displayName = 'ShowPasswordButton';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Field/FieldDescription.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FieldDescription": (()=>FieldDescription),
    "QA_FIELD_DESCRIPTION": (()=>QA_FIELD_DESCRIPTION)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Text/Text.mjs [app-client] (ecmascript)");
;
;
;
const QA_FIELD_DESCRIPTION = 'qa-field-description';
const FieldDescription = ({ descriptiveText, labelHidden, ...rest })=>descriptiveText ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        "data-testid": QA_FIELD_DESCRIPTION,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldDescription, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].VisuallyHidden]: labelHidden
        }),
        ...rest
    }, descriptiveText) : null;
FieldDescription.displayName = 'FieldDescription';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Field/FieldErrorMessage.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FieldErrorMessage": (()=>FieldErrorMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
;
;
;
const FieldErrorMessage = ({ errorMessage, hasError, ...rest })=>{
    return hasError && errorMessage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldErrorMessage,
        ...rest
    }, errorMessage) : null;
};
FieldErrorMessage.displayName = 'FieldErrorMessage';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/FieldGroup/FieldGroup.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FieldGroup": (()=>FieldGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
;
const FieldGroupPrimitive = ({ children, className, innerEndComponent, innerStartComponent, orientation = 'horizontal', outerEndComponent, outerStartComponent, variation, ...rest }, ref)=>{
    // Don't apply hasInner classnames unless a component was provided
    const hasInnerStartComponent = innerStartComponent != null;
    const hasInnerEndComponent = innerEndComponent != null;
    const fieldGroupHasInnerStartClassName = hasInnerStartComponent ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupHasInnerStart : null;
    const fieldGroupHasInnerEndClassName = hasInnerEndComponent ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupHasInnerEnd : null;
    const componentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroup, fieldGroupHasInnerStartClassName, fieldGroupHasInnerEndClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroup, orientation), className);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        className: componentClasses,
        ref: ref,
        ...rest
    }, outerStartComponent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupOuterStart, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupOuterStart, variation))
    }, outerStartComponent), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupFieldWrapper, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupFieldWrapper, orientation))
    }, innerStartComponent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupInnerStart
    }, innerStartComponent), children, innerEndComponent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupInnerEnd
    }, innerEndComponent)), outerEndComponent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupOuterEnd, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupOuterEnd, variation))
    }, outerEndComponent));
};
const FieldGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(FieldGroupPrimitive);
FieldGroup.displayName = 'FieldGroup';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Input/Input.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Fieldset/useFieldset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
;
const InputPrimitive = ({ autoComplete, checked, className, defaultChecked, defaultValue, id, isDisabled, isReadOnly, isRequired, size, type = 'text', hasError = false, value, variation, ...rest }, ref)=>{
    const componentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Input, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupControl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Input, variation), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Input, 'error', hasError), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Input, size), className);
    const { isFieldsetDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldset"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        "aria-invalid": hasError,
        as: "input",
        autoComplete: autoComplete,
        checked: checked,
        className: componentClasses,
        defaultChecked: defaultChecked,
        defaultValue: defaultValue,
        isDisabled: isFieldsetDisabled ? isFieldsetDisabled : isDisabled,
        id: id,
        readOnly: isReadOnly,
        ref: ref,
        required: isRequired,
        type: type,
        value: value,
        ...rest
    });
};
const Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(InputPrimitive);
Input.displayName = 'Input';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Label/Label.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
const LabelPrimitive = ({ children, className, visuallyHidden, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Label, className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].VisuallyHidden]: visuallyHidden
        }),
        ref: ref,
        ...rest
    }, children);
};
const Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(LabelPrimitive);
Label.displayName = 'Label';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/splitPrimitiveProps.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "splitPrimitiveProps": (()=>splitPrimitiveProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$types$2f$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/types/style.mjs [app-client] (ecmascript)");
;
const isStyleKey = (prop)=>{
    return prop in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$types$2f$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentPropsToStylePropsMap"];
};
/**
 * This function splits props into style props and non-style props. This is used
 * on Field primitives so we can apply style props on the wrapper element and
 * the rest on the input.
 * @param props this should be a destructured `rest` from the component's props
 */ const splitPrimitiveProps = (props)=>{
    const splitProps = {
        styleProps: {},
        rest: {}
    };
    Object.keys(props).forEach((prop)=>{
        if (isStyleKey(prop)) {
            // we know it is a style key
            // so we know we can assign the key in styleProps
            splitProps.styleProps = {
                ...splitProps.styleProps,
                [prop]: props[prop]
            };
        } else {
            splitProps.rest = {
                ...splitProps.rest,
                [prop]: props[prop]
            };
        }
    });
    return splitProps;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/useLayoutEffect.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLayoutEffect": (()=>useLayoutEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
// Source: https://github.com/radix-ui/primitives/blob/7ae63b6cce6ea53ea5d65b6d411894c004b38f47/packages/react/use-layout-effect/src/useLayoutEffect.tsx
/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */ const useLayoutEffect = globalThis?.document ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/useStableId.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AUTO_GENERATED_ID_PREFIX": (()=>AUTO_GENERATED_ID_PREFIX),
    "useStableId": (()=>useStableId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
;
;
// Adapted from https://github.com/radix-ui/primitives/blob/main/packages/react/id/src/id.tsx#L8
// Prefixed autogenerated id created by useStableId
const AUTO_GENERATED_ID_PREFIX = 'amplify-id';
// Create a local version of React.useId which will reference React.useId for React 18
// and fallback to noop for React 17 and below
// Note: We use `toString()` to prevent bundlers from trying to `import { useId } from 'react';`
// since it doesn't exist in React 17 and below (prevents https://github.com/aws-amplify/amplify-ui/issues/1154)
const useReactId = // disable eslint below to allow usage of casting React to `any`, which ensures that TS
// does not get confused about the existence of `useId` in React 17 and below
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__['useId'.toString()] || (()=>undefined);
let count = 0;
/**
 * Create a uuid to use with amplify fields unless
 * an id is provided
 * @param id user specified id
 * @returns string
 */ const useStableId = (id)=>{
    const [stableId, setStableId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(useReactId());
    // React versions older than 18 will have client-side ids only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useStableId.useLayoutEffect": ()=>{
            if (!id) {
                setStableId({
                    "useStableId.useLayoutEffect": (reactId)=>reactId ?? String(count++)
                }["useStableId.useLayoutEffect"]);
            }
        }
    }["useStableId.useLayoutEffect"], [
        id
    ]);
    return id ?? (stableId ? `${AUTO_GENERATED_ID_PREFIX}-${stableId}` : '');
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/createSpaceSeparatedIds.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Joins an array of strings and undefined values into a single string with spaces as separators.
 * If all elements are undefined, returns undefined.
 *
 * @param {(string | undefined)[]} ids - An array of strings or undefined values.
 * @returns {string | undefined} A single string with space-separated IDs, or undefined if all elements are undefined.
 */ __turbopack_context__.s({
    "createSpaceSeparatedIds": (()=>createSpaceSeparatedIds)
});
const createSpaceSeparatedIds = (ids)=>{
    const joinedIds = ids.filter((id)=>id !== undefined).join(' ');
    return joinedIds.length > 0 ? joinedIds : undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/helpers/constants.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DESCRIPTION_SUFFIX": (()=>DESCRIPTION_SUFFIX),
    "ERROR_SUFFIX": (()=>ERROR_SUFFIX)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
;
typeof Symbol !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(Symbol.for) ? Symbol.for('amplify_default') : '@@amplify_default';
const ERROR_SUFFIX = 'error';
const DESCRIPTION_SUFFIX = 'description';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/getUniqueComponentId.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUniqueComponentId": (()=>getUniqueComponentId)
});
const getUniqueComponentId = (id, suffix)=>id && suffix ? `${id}-${suffix}` : undefined;
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/TextField/TextField.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TextField": (()=>TextField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Field/FieldDescription.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Field/FieldErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$FieldGroup$2f$FieldGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/FieldGroup/FieldGroup.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Input/Input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Label$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Label/Label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$splitPrimitiveProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/splitPrimitiveProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/useStableId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$createSpaceSeparatedIds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/createSpaceSeparatedIds.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/helpers/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/getUniqueComponentId.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const TextFieldPrimitive = (props, ref)=>{
    const { className, descriptiveText, errorMessage, hasError = false, id, innerEndComponent, innerStartComponent, label, labelHidden = false, outerEndComponent, outerStartComponent, size, testId, variation, inputStyles, ..._rest } = props;
    const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableId"])(id);
    const stableId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableId"])();
    const descriptionId = descriptiveText ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueComponentId"])(stableId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESCRIPTION_SUFFIX"]) : undefined;
    const errorId = hasError ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueComponentId"])(stableId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_SUFFIX"]) : undefined;
    const ariaDescribedBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$createSpaceSeparatedIds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpaceSeparatedIds"])([
        errorId,
        descriptionId
    ]);
    const { styleProps, rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$splitPrimitiveProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitPrimitiveProps"])(_rest);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Field, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Field, size), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].TextField, className),
        testId: testId,
        ...styleProps
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Label$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        htmlFor: fieldId,
        visuallyHidden: labelHidden
    }, label), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldDescription"], {
        id: descriptionId,
        labelHidden: labelHidden,
        descriptiveText: descriptiveText
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$FieldGroup$2f$FieldGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldGroup"], {
        outerStartComponent: outerStartComponent,
        outerEndComponent: outerEndComponent,
        innerStartComponent: innerStartComponent,
        innerEndComponent: innerEndComponent,
        variation: variation
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        "aria-describedby": ariaDescribedBy,
        hasError: hasError,
        id: fieldId,
        ref: ref,
        size: size,
        variation: variation,
        ...inputStyles,
        ...rest
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldErrorMessage"], {
        id: errorId,
        hasError: hasError,
        errorMessage: errorMessage
    }));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/textfield)
 */ const TextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(TextFieldPrimitive);
TextField.displayName = 'TextField';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/PasswordField/PasswordField.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PasswordField": (()=>PasswordField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$PasswordField$2f$ShowPasswordButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/PasswordField/ShowPasswordButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/TextField/TextField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
;
const PasswordFieldPrimitive = ({ autoComplete = 'current-password', label, className, hideShowPassword = false, passwordIsHiddenLabel, passwordIsShownLabel, showPasswordButtonLabel, showPasswordButtonRef, size, hasError, ...rest }, ref)=>{
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('password');
    const showPasswordOnClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PasswordFieldPrimitive.useCallback[showPasswordOnClick]": ()=>{
            if (type === 'password') {
                setType('text');
            } else {
                setType('password');
            }
        }
    }["PasswordFieldPrimitive.useCallback[showPasswordOnClick]"], [
        setType,
        type
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
        autoComplete: autoComplete,
        outerEndComponent: hideShowPassword ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$PasswordField$2f$ShowPasswordButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShowPasswordButton"], {
            fieldType: type,
            onClick: showPasswordOnClick,
            passwordIsHiddenLabel: passwordIsHiddenLabel,
            passwordIsShownLabel: passwordIsShownLabel,
            ref: showPasswordButtonRef,
            size: size,
            showPasswordButtonLabel: showPasswordButtonLabel,
            hasError: hasError
        }),
        size: size,
        type: type,
        label: label,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].PasswordField, className),
        ref: ref,
        hasError: hasError,
        ...rest
    });
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/passwordfield)
 */ const PasswordField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(PasswordFieldPrimitive);
PasswordField.displayName = 'PasswordField';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconExpandMore.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconExpandMore": (()=>IconExpandMore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */ const IconExpandMore = (props)=>{
    const { className, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "span",
        width: "1em",
        height: "1em",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Select/Select.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$useIcons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/context/useIcons.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconExpandMore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/icons/IconExpandMore.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Fieldset/useFieldset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const SelectPrimitive = ({ autoComplete, className, size, variation, value, defaultValue, hasError, icon, iconColor, children, placeholder, isDisabled, isRequired, isMultiple = false, selectSize = 1, ...rest }, ref)=>{
    const DEFAULT_PLACEHOLDER_VALUE = '';
    // value === undefined is to make sure that component is used in uncontrolled way so that setting defaultValue is valid
    const shouldSetDefaultPlaceholderValue = value === undefined && defaultValue === undefined && placeholder;
    const isExpanded = isMultiple || selectSize > 1;
    const componentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Select, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldGroupControl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Select, size), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Select, variation), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Select, 'error', hasError), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Select, 'expanded', isExpanded), className);
    const icons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$context$2f$useIcons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIcons"])('select');
    const { isFieldsetDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldset"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].SelectWrapper
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        "aria-invalid": hasError,
        as: "select",
        autoComplete: autoComplete,
        value: value,
        defaultValue: shouldSetDefaultPlaceholderValue ? DEFAULT_PLACEHOLDER_VALUE : defaultValue,
        isDisabled: isFieldsetDisabled ? isFieldsetDisabled : isDisabled,
        multiple: isMultiple,
        size: selectSize,
        required: isRequired,
        className: componentClasses,
        ref: ref,
        ...rest
    }, placeholder && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("option", {
        value: ""
    }, placeholder), children), isExpanded ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].SelectIcon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].SelectIcon, size)),
        color: iconColor,
        "aria-hidden": "true"
    }, icon ?? icons?.expand ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$icons$2f$IconExpandMore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconExpandMore"], null)));
};
const Select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(SelectPrimitive);
Select.displayName = 'Select';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/SelectField/SelectField.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SelectField": (()=>SelectField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Field/FieldDescription.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Field/FieldErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Label$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Label/Label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$splitPrimitiveProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/splitPrimitiveProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/useStableId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$createSpaceSeparatedIds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/createSpaceSeparatedIds.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/helpers/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/getUniqueComponentId.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const selectFieldChildren = ({ children, options })=>{
    if (children) {
        if (options?.length) {
            // eslint-disable-next-line no-console
            console.warn('Amplify UI: <SelectField> component  defaults to rendering children over `options`. When using the `options` prop, omit children.');
        }
        return children;
    }
    return options?.map((option, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("option", {
            label: option,
            value: option,
            key: `${option}-${index}`
        }, option));
};
const SelectFieldPrimitive = (props, ref)=>{
    const { children, className, descriptiveText, errorMessage, hasError = false, id, label, labelHidden = false, options, size, testId, inputStyles, ..._rest } = props;
    const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableId"])(id);
    const stableId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableId"])();
    const descriptionId = descriptiveText ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueComponentId"])(stableId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESCRIPTION_SUFFIX"]) : undefined;
    const errorId = hasError ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueComponentId"])(stableId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_SUFFIX"]) : undefined;
    const ariaDescribedBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$createSpaceSeparatedIds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpaceSeparatedIds"])([
        errorId,
        descriptionId
    ]);
    const { styleProps, rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$splitPrimitiveProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitPrimitiveProps"])(_rest);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Field, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Field, size), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].SelectField, className),
        testId: testId,
        ...styleProps
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Label$2f$Label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        htmlFor: fieldId,
        visuallyHidden: labelHidden
    }, label), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldDescription"], {
        id: descriptionId,
        labelHidden: labelHidden,
        descriptiveText: descriptiveText
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        "aria-describedby": ariaDescribedBy,
        hasError: hasError,
        id: fieldId,
        ref: ref,
        size: size,
        ...rest,
        ...inputStyles
    }, selectFieldChildren({
        children,
        options
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldErrorMessage"], {
        id: errorId,
        hasError: hasError,
        errorMessage: errorMessage
    }));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/selectfield)
 */ const SelectField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(SelectFieldPrimitive);
SelectField.displayName = 'SelectField';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/PhoneNumberField/DialCodeSelect.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DialCodeSelect": (()=>DialCodeSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$country$2d$dial$2d$codes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/country-dial-codes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$SelectField$2f$SelectField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/SelectField/SelectField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
const DialCodeSelectPrimitive = ({ className, dialCodeList, isReadOnly, ...props }, ref)=>{
    const dialList = dialCodeList ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$country$2d$dial$2d$codes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countryDialCodes"];
    const dialCodeOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DialCodeSelectPrimitive.useMemo[dialCodeOptions]": ()=>dialList.map({
                "DialCodeSelectPrimitive.useMemo[dialCodeOptions]": (dialCode)=>// Regarding the `disabled` attribute, see comment in SelectField below
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("option", {
                        key: dialCode,
                        value: dialCode,
                        disabled: isReadOnly
                    }, dialCode)
            }["DialCodeSelectPrimitive.useMemo[dialCodeOptions]"])
    }["DialCodeSelectPrimitive.useMemo[dialCodeOptions]"], [
        dialList,
        isReadOnly
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$SelectField$2f$SelectField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
        "aria-disabled": isReadOnly,
        autoComplete: "tel-country-code",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].CountryCodeSelect, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].DialCodeSelect, className),
        labelHidden: true,
        ref: ref,
        ...props
    }, dialCodeOptions);
};
const DialCodeSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(DialCodeSelectPrimitive);
DialCodeSelect.displayName = 'DialCodeSelect';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/PhoneNumberField/PhoneNumberField.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PhoneNumberField": (()=>PhoneNumberField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$PhoneNumberField$2f$DialCodeSelect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/PhoneNumberField/DialCodeSelect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/shared/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/TextField/TextField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const PhoneNumberFieldPrimitive = ({ autoComplete = 'tel-national', className, defaultDialCode, dialCodeLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$shared$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentText"].PhoneNumberField.countryCodeLabel, dialCodeList, dialCodeName, dialCodeRef, hasError, isDisabled, isReadOnly, onDialCodeChange, onInput, size, variation, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
        outerStartComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$PhoneNumberField$2f$DialCodeSelect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialCodeSelect"], {
            defaultValue: defaultDialCode,
            dialCodeList: dialCodeList,
            className: className,
            hasError: hasError,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            label: dialCodeLabel,
            name: dialCodeName,
            onChange: onDialCodeChange,
            ref: dialCodeRef,
            size: size,
            variation: variation
        }),
        autoComplete: autoComplete,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].PhoneNumberField, className),
        hasError: hasError,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        onInput: onInput,
        ref: ref,
        size: size,
        type: "tel",
        variation: variation,
        ...rest
    });
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/phonenumberfield)
 */ const PhoneNumberField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(PhoneNumberFieldPrimitive);
PhoneNumberField.displayName = 'PhoneNumberField';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/shared/ValidationErrors.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ValidationErrors": (()=>ValidationErrors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/translations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Text/Text.mjs [app-client] (ecmascript)");
;
;
;
;
const ValidationErrors = ({ errors, id, dataAttr })=>{
    if (!(errors?.length > 0)) return null;
    const dataAttrProp = dataAttr ? {
        [dataAttr]: true
    } : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        ...dataAttrProp,
        id: id
    }, errors.map((error)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            key: error,
            role: "alert",
            variation: "error"
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(error));
    }));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormField.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FormField": (()=>FormField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$form$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/form.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$PasswordField$2f$PasswordField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/PasswordField/PasswordField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$PhoneNumberField$2f$PhoneNumberField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/PhoneNumberField/PhoneNumberField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/TextField/TextField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/useStableId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$shared$2f$ValidationErrors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/shared/ValidationErrors.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function FormField({ autocomplete: autoComplete, dialCode, name, type, ...props }) {
    const { validationErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "FormField.useAuthenticator": ({ validationErrors })=>[
                validationErrors
            ]
    }["FormField.useAuthenticator"]);
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormField.useMemo[errors]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$form$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrors"])(validationErrors[name])
    }["FormField.useMemo[errors]"], [
        name,
        validationErrors
    ]);
    const hasError = errors?.length > 0;
    const errorId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableId"])();
    const ariaDescribedBy = hasError ? errorId : undefined;
    if (type === 'tel') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$PhoneNumberField$2f$PhoneNumberField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneNumberField"], {
            ...props,
            name: name,
            defaultDialCode: dialCode,
            dialCodeName: "country_code",
            autoComplete: autoComplete,
            hasError: hasError,
            "aria-describedby": ariaDescribedBy
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$shared$2f$ValidationErrors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationErrors"], {
            dataAttr: "data-amplify-sign-up-errors",
            errors: errors,
            id: errorId
        }));
    } else if (type === 'password') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$PasswordField$2f$PasswordField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasswordField"], {
            ...props,
            name: name,
            autoCapitalize: "off",
            autoComplete: autoComplete,
            hasError: hasError,
            "aria-describedby": ariaDescribedBy
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$shared$2f$ValidationErrors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationErrors"], {
            dataAttr: "data-amplify-sign-up-errors",
            errors: errors,
            id: errorId
        }));
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
            ...props,
            name: name,
            autoCapitalize: "off",
            autoComplete: autoComplete,
            hasError: hasError,
            type: type,
            "aria-describedby": ariaDescribedBy
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$shared$2f$ValidationErrors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationErrors"], {
            dataAttr: "data-amplify-sign-up-errors",
            errors: errors,
            id: errorId
        }));
    }
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FormFields": (()=>FormFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
;
;
;
function FormFields() {
    const { fields } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "FormFields.useAuthenticator": ({ route })=>[
                route
            ]
    }["FormFields.useAuthenticator"]);
    const formFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fields.map({
        "FormFields.useRef": (field, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                // use index for key, field order is static
                key: index,
                ...field
            })
    }["FormFields.useRef"])).current;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, formFields);
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteContainer": (()=>RouteContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
;
;
;
;
// TODO replace usage of this util with the `isSignInOrSignUpRoute` util in v3.
// Currently `hasTabs` always returns `undefined` as the right condition always
// resolves to truthy. This prevents the "data-amplify-router-content" attribute
// from being applied below. Fixing it will cause consumer snapshot tests to break,
// so wait to update.
const hasTabs = (route)=>{
    return route === 'signIn' || 'signUp';
};
function RouteContainer({ children, className, variation = 'default' }) {
    const { route } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "RouteContainer.useAuthenticator": ({ route })=>[
                route
            ]
    }["RouteContainer.useAuthenticator"]);
    const { // @ts-ignore
    components: { Header, Footer } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        className: className,
        "data-amplify-authenticator": "",
        "data-variation": variation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        "data-amplify-container": ""
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        "data-amplify-router": "",
        "data-amplify-router-content": hasTabs(route) ? undefined : ("TURBOPACK unreachable", undefined)
    }, children), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null)));
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ConfirmSignUp/ConfirmSignUp.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfirmSignUp": (()=>ConfirmSignUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const { getDeliveryMessageText, getDeliveryMethodText, getConfirmingText, getConfirmText, getResendCodeText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
function ConfirmSignUp({ className, variation }) {
    const { isPending, resendCode, codeDeliveryDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "ConfirmSignUp.useAuthenticator": (context)=>[
                context.isPending,
                context.resendCode,
                context.codeDeliveryDetails
            ]
    }["ConfirmSignUp.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    ConfirmSignUp: { Header = ConfirmSignUp.Header, Footer = ConfirmSignUp.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return(// TODO Automatically add these namespaces again from `useAmplify`
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-confirmsignup": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        className: "amplify-authenticator__subtitle"
    }, getDeliveryMessageText(codeDeliveryDetails)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variation: "primary",
        isDisabled: isPending,
        type: "submit",
        loadingText: getConfirmingText(),
        isLoading: isPending
    }, getConfirmText()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: resendCode,
        type: "button"
    }, getResendCodeText())), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null)))));
}
const DefaultHeader = ()=>{
    const { codeDeliveryDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "DefaultHeader.useAuthenticator": (context)=>[
                context.codeDeliveryDetails
            ]
    }["DefaultHeader.useAuthenticator"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 4
    }, getDeliveryMethodText(codeDeliveryDetails));
};
ConfirmSignUp.Header = DefaultHeader;
ConfirmSignUp.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForceNewPassword/ForceNewPassword.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ForceNewPassword": (()=>ForceNewPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const { getChangePasswordText, getChangingText, getBackToSignInText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const ForceNewPassword = ({ className, variation })=>{
    const { isPending, toSignIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "ForceNewPassword.useAuthenticator": (context)=>[
                context.isPending,
                context.toSignIn
            ]
    }["ForceNewPassword.useAuthenticator"]);
    const { handleBlur, handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    ForceNewPassword: { FormFields = ForceNewPassword.FormFields, Header = ForceNewPassword.Header, Footer = ForceNewPassword.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-forcenewpassword": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit,
        onBlur: handleBlur
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(FormFields, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        isDisabled: isPending,
        type: "submit",
        variation: "primary",
        isLoading: isPending,
        loadingText: getChangingText()
    }, getChangePasswordText()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: toSignIn,
        type: "button",
        variation: "link",
        size: "small"
    }, getBackToSignInText()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null))));
};
ForceNewPassword.FormFields = function FormFields$1() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null);
};
ForceNewPassword.Header = function Header() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 4
    }, getChangePasswordText());
};
ForceNewPassword.Footer = function Footer() {
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/ConfirmSignInFooter.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfirmSignInFooter": (()=>ConfirmSignInFooter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
;
;
;
;
;
const { getConfirmText, getConfirmingText, getBackToSignInText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const ConfirmSignInFooter = ()=>{
    const { isPending, toSignIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "ConfirmSignInFooter.useAuthenticator": (context)=>[
                context.isPending,
                context.toSignIn
            ]
    }["ConfirmSignInFooter.useAuthenticator"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        isDisabled: isPending,
        type: "submit",
        variation: "primary",
        isLoading: isPending,
        loadingText: getConfirmingText()
    }, getConfirmText()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: toSignIn,
        type: "button",
        variation: "link",
        size: "small"
    }, getBackToSignInText()));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SetupTotp/SetupTotp.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SetupTotp": (()=>SetupTotp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qrcode$40$1$2e$5$2e$0$2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/qrcode@1.5.0/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+core@6.11.1/node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$ConfirmSignInFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/ConfirmSignInFooter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1$2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$Logger$2f$ConsoleLogger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleLogger"]('SetupTotp-logger');
const { getSetupTotpText, getCopiedText, getLoadingText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const SetupTotp = ({ className, variation })=>{
    const { totpSecretCode, isPending, username, QRFields } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "SetupTotp.useAuthenticator": (context)=>[
                context.isPending,
                context.totpSecretCode,
                context.username
            ]
    }["SetupTotp.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    SetupTotp: { Header = SetupTotp.Header, Footer = SetupTotp.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [qrCode, setQrCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [copyTextLabel, setCopyTextLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('COPY');
    const { totpIssuer = 'AWSCognito', totpUsername = username } = QRFields ?? {};
    const generateQRCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SetupTotp.useCallback[generateQRCode]": async ()=>{
            try {
                const totpCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotpCodeURL"])(totpIssuer, totpUsername, totpSecretCode);
                const qrCodeImageSource = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qrcode$40$1$2e$5$2e$0$2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toDataURL(totpCode);
                setQrCode(qrCodeImageSource);
            } catch (error) {
                logger.error(error);
            } finally{
                setIsLoading(false);
            }
        }
    }["SetupTotp.useCallback[generateQRCode]"], [
        totpIssuer,
        totpUsername,
        totpSecretCode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetupTotp.useEffect": ()=>{
            if (!qrCode) {
                generateQRCode();
            }
        }
    }["SetupTotp.useEffect"], [
        generateQRCode,
        qrCode
    ]);
    const copyText = ()=>{
        navigator.clipboard.writeText(totpSecretCode);
        setCopyTextLabel(getCopiedText());
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-setup-totp": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Header, null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, isLoading ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("p", null, getLoadingText(), "\u2026") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("img", {
        "data-amplify-qrcode": true,
        src: qrCode,
        alt: "qr code",
        width: "228",
        height: "228"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        "data-amplify-copy": true
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("div", null, totpSecretCode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        "data-amplify-copy-svg": true,
        onClick: copyText
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("div", {
        "data-amplify-copy-tooltip": true
    }, copyTextLabel), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z"
    })))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$ConfirmSignInFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignInFooter"], null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Footer, null))));
};
SetupTotp.Header = function Header() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 3
    }, getSetupTotpText());
};
SetupTotp.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsContext.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TabsContext": (()=>TabsContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const TabsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    groupId: '',
    activeTab: '',
    setActiveTab: ()=>{}
});
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/constants.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* WHITESPACE_VALUE is used to fill whitespace present in user-inputed `value` when creating id for TabsItem and TabsPanel */ __turbopack_context__.s({
    "WHITESPACE_VALUE": (()=>WHITESPACE_VALUE)
});
const WHITESPACE_VALUE = '-';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsItem.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TabsItem": (()=>TabsItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/constants.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const TabsItemPrimitive = ({ className, value, children, onClick, as = 'button', role = 'tab', ...rest }, ref)=>{
    const { activeTab, setActiveTab, groupId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContext"]);
    let idValue = value;
    if (typeof idValue === 'string') {
        idValue = idValue.replace(' ', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHITESPACE_VALUE"]);
    }
    const isActive = activeTab === value;
    const handleOnClick = (e)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(onClick)) {
            onClick?.(e);
        }
        setActiveTab(value);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        ...rest,
        role: role,
        as: as,
        id: `${groupId}-tab-${idValue}`,
        "aria-selected": isActive,
        "aria-controls": `${groupId}-panel-${idValue}`,
        tabIndex: !isActive ? -1 : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].TabsItem, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].TabsItem, 'active', activeTab === value), className),
        ref: ref,
        onClick: handleOnClick
    }, children);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/tabs)
 */ const TabsItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(TabsItemPrimitive);
TabsItem.displayName = 'Tabs.Item';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsList.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TabList": (()=>TabList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsContext.mjs [app-client] (ecmascript)");
;
;
;
;
;
const isValidTab = (child)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child);
const TabListPrimitive = ({ className, children, indicatorPosition, spacing, role = 'tablist', ...rest }, ref)=>{
    const internalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { activeTab, setActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "TabListPrimitive.useImperativeHandle": ()=>internalRef.current
    }["TabListPrimitive.useImperativeHandle"]);
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TabListPrimitive.useMemo[values]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).map({
                "TabListPrimitive.useMemo[values]": (child)=>{
                    if (child && isValidTab(child)) {
                        return child.props.value;
                    }
                }
            }["TabListPrimitive.useMemo[values]"]).filter({
                "TabListPrimitive.useMemo[values]": (child)=>!!child
            }["TabListPrimitive.useMemo[values]"])
    }["TabListPrimitive.useMemo[values]"], [
        children
    ]);
    const currentIndex = values.indexOf(activeTab);
    const nextTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabListPrimitive.useCallback[nextTab]": ()=>{
            let nextIndex = currentIndex === values.length - 1 ? 0 : currentIndex + 1;
            const elems = internalRef.current?.querySelectorAll('button') ?? [];
            while(elems[nextIndex].disabled){
                if (nextIndex === values.length - 1) {
                    nextIndex = 0;
                } else {
                    nextIndex++;
                }
            }
            const value = values[nextIndex];
            if (value) {
                setActiveTab(value);
                const elem = elems[nextIndex];
                elem?.focus();
                elem?.click();
            }
        }
    }["TabListPrimitive.useCallback[nextTab]"], [
        currentIndex,
        setActiveTab,
        values
    ]);
    const prevTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabListPrimitive.useCallback[prevTab]": ()=>{
            let prevIndex = currentIndex === 0 ? values.length - 1 : currentIndex - 1;
            const elems = internalRef.current?.querySelectorAll('button') ?? [];
            while(elems[prevIndex].disabled){
                if (prevIndex === 0) {
                    prevIndex = values.length - 1;
                } else {
                    prevIndex--;
                }
            }
            const value = values[prevIndex];
            if (value) {
                setActiveTab(value);
                const elem = elems[prevIndex];
                elem?.focus();
                elem?.click();
            }
        }
    }["TabListPrimitive.useCallback[prevTab]"], [
        currentIndex,
        setActiveTab,
        values
    ]);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabListPrimitive.useCallback[onKeyDown]": (event)=>{
            switch(event.key){
                case 'ArrowLeft':
                    event.preventDefault();
                    event.stopPropagation();
                    prevTab();
                    break;
                case 'ArrowUp':
                case 'ArrowRight':
                    event.preventDefault();
                    event.stopPropagation();
                    nextTab();
                    break;
            }
        }
    }["TabListPrimitive.useCallback[onKeyDown]"], [
        prevTab,
        nextTab
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        ...rest,
        role: role,
        onKeyDown: onKeyDown,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].TabsList, indicatorPosition ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].TabsList, indicatorPosition) : null, spacing ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].TabsList, spacing) : null, className),
        ref: internalRef
    }, children);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/tabs)
 */ const TabList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(TabListPrimitive);
TabList.displayName = 'Tabs.List';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsPanel.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TabPanel": (()=>TabPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/constants.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const TabPanelPrimitive = ({ className, value, children, role = 'tabpanel', ...rest }, ref)=>{
    const { activeTab, isLazy, groupId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContext"]);
    if (isLazy && activeTab !== value) return null;
    let idValue = value;
    if (typeof idValue === 'string') {
        idValue = idValue.replace(' ', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHITESPACE_VALUE"]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        ...rest,
        role: role,
        id: `${groupId}-panel-${idValue}`,
        "aria-labelledby": `${groupId}-tab-${idValue}`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].TabsPanel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].TabsPanel, 'active', activeTab === value), className),
        ref: ref
    }, children);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/tabs)
 */ const TabPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(TabPanelPrimitive);
TabPanel.displayName = 'Tabs.Panel';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsContainer.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TabsContainer": (()=>TabsContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/useStableId.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const TabsContainerPrimitive = ({ children, defaultValue, className, value: controlledValue, onValueChange, isLazy, ...rest }, ref)=>{
    const groupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableId"])(); // groupId is used to ensure uniqueness between Tab Groups in IDs
    const isControlled = controlledValue !== undefined;
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TabsContainerPrimitive.useState": ()=>isControlled ? controlledValue : defaultValue
    }["TabsContainerPrimitive.useState"]);
    const activeTab = isControlled ? controlledValue : localValue ?? '';
    const setActiveTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabsContainerPrimitive.useCallback[setActiveTab]": (newValue)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(onValueChange)) {
                onValueChange(newValue);
            }
            if (!isControlled) {
                setLocalValue(newValue);
            }
        }
    }["TabsContainerPrimitive.useCallback[setActiveTab]"], [
        onValueChange,
        isControlled
    ]);
    const _value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TabsContainerPrimitive.useMemo[_value]": ()=>{
            return {
                activeTab,
                isLazy,
                setActiveTab,
                groupId
            };
        }
    }["TabsContainerPrimitive.useMemo[_value]"], [
        activeTab,
        setActiveTab,
        isLazy,
        groupId
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContext"].Provider, {
        value: _value
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        ...rest,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(className, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Tabs)
    }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/tabs)
 */ const TabsContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(TabsContainerPrimitive);
TabsContainer.displayName = 'Tabs.Container';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/Tabs.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsItem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsList$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsList.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsPanel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsPanel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/TabsContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const TabsPrimitive = ({ items, indicatorPosition, justifyContent, spacing, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContainer"], {
        ...rest,
        ref: ref
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsList$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabList"], {
        indicatorPosition: indicatorPosition,
        justifyContent: justifyContent,
        spacing: spacing
    }, items?.map(({ value, label, content, ...rest })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsItem"], {
            ...rest,
            key: value,
            value: value
        }, label))), items?.map(({ value, content, isDisabled })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsPanel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabPanel"], {
            key: value,
            value: value,
            isDisabled: isDisabled
        }, content)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/tabs)
 */ const Tabs = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(TabsPrimitive), {
    Item: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsItem"],
    List: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsList$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabList"],
    Panel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsPanel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabPanel"],
    Container: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$TabsContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContainer"]
});
Tabs.displayName = 'Tabs';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Divider/Divider.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Divider": (()=>Divider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
;
;
;
;
const DividerPrimitive = ({ className, orientation = 'horizontal', size, label, ...rest }, ref)=>{
    const componentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Divider, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Divider, orientation), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Divider, size), className);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        "aria-orientation": orientation,
        as: "hr",
        className: componentClasses,
        "data-label": label,
        ref: ref,
        ...rest
    });
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/divider)
 */ const Divider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(DividerPrimitive);
Divider.displayName = 'Divider';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/Icon.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Icon": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
const defaultViewBox = {
    minX: 0,
    minY: 0,
    width: 24,
    height: 24
};
const IconPrimitive = ({ className, // as can be used to render other icon react components too
as = 'svg', fill = 'currentColor', pathData, viewBox = defaultViewBox, children, paths, ...rest }, ref)=>{
    const minX = viewBox.minX ? viewBox.minX : defaultViewBox.minX;
    const minY = viewBox.minY ? viewBox.minY : defaultViewBox.minY;
    const width = viewBox.width ? viewBox.width : defaultViewBox.width;
    const height = viewBox.height ? viewBox.height : defaultViewBox.height;
    // An icon can be drawn in 3 ways:
    // 1. Pass it children which should be valid SVG elements
    // 2. Pass an array of path-like objects to `paths` prop
    // 3. Supply `pathData` for a simple icons
    let _children;
    if (children) {
        _children = children;
    }
    if (paths) {
        _children = paths.map((path, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
                ...path,
                key: index
            }));
    }
    if (pathData) {
        _children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
            d: pathData,
            fill: fill
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: as,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Icon, className),
        ref: ref,
        viewBox: `${minX} ${minY} ${width} ${height}`,
        ...rest
    }, _children);
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/icon)
 */ const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(IconPrimitive);
Icon.displayName = 'Icon';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/FederatedSignIn/FederatedSignInButtons/FederatedSignInButton.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FederatedSignInButton": (()=>FederatedSignInButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Icon/Icon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Text/Text.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const AppleIcon = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        "aria-label": "Apple icon",
        className: "amplify-icon federated-sign-in-icon",
        fill: "#000",
        preserveAspectRatio: "xMidYMid",
        stroke: "#000",
        strokeWidth: "0",
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"
    }));
};
const GoogleIcon = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        "aria-label": "Google icon",
        className: "amplify-icon federated-sign-in-icon",
        viewBox: "0 0 256 262",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
        fill: "#4285F4"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
        fill: "#34A853"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
        fill: "#FBBC05"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
        fill: "#EB4335"
    }));
};
const FacebookIcon = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Icon$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
        className: "federated-sign-in-icon",
        ariaLabel: "Facebook icon",
        viewBox: {
            minX: 0,
            minY: 0,
            width: 279,
            height: 538
        },
        pathData: "M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z",
        fill: "#1877F2"
    });
};
const AmazonIcon = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        "aria-label": "Amazon icon",
        className: "amplify-icon federated-sign-in-icon",
        viewBox: "0 0 243 264",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M230.826 208.039C227.468 203.683 208.551 205.982 200.056 206.998C197.471 207.321 197.076 205.042 199.407 203.405C214.475 192.665 239.201 195.766 242.082 199.364C244.966 202.982 241.337 228.071 227.173 240.049C225.001 241.888 222.93 240.904 223.898 238.468C227.077 230.431 234.205 212.419 230.826 208.039ZM123.769 264C71.0234 264 39.0764 241.955 14.7853 217.542C9.97339 212.706 3.71799 206.296 0.311513 200.691C-1.09773 198.372 2.59096 195.022 5.04421 196.844C35.239 219.268 79.1012 239.538 122.53 239.538C151.82 239.538 188.046 227.47 217.669 214.868C222.147 212.966 222.147 219.18 221.512 221.061C221.183 222.032 206.515 236.221 186.247 247.047C167.304 257.166 143.397 264 123.769 264Z",
        fill: "#F2541B"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M142.943 111.185C142.943 124.756 143.268 136.054 136.406 148.123C130.856 157.913 122.027 163.95 112.222 163.95C98.8288 163.95 90.9806 153.772 90.9806 138.693C90.9806 109.036 117.677 103.647 142.943 103.647V111.185ZM178.166 196.081C175.858 198.15 171.635 198.22 169.914 196.894C157.974 187.684 149.89 173.688 149.89 173.688C130.706 193.156 117.127 199 92.2879 199C62.8772 199 40 180.905 40 144.729C40 116.461 55.3552 97.2408 77.2563 87.823C96.2094 79.5256 122.684 78.0173 142.943 75.7517C142.943 75.7517 144.633 53.933 138.699 45.9806C134.098 39.8163 126.272 36.9329 119.089 36.9329C106.127 36.8829 93.61 43.9051 91.1262 57.4188C90.4136 61.2829 87.5533 64.5261 84.54 64.206L51.0823 60.5922C48.5156 60.2951 45.0381 57.6639 45.8636 53.3081C53.644 12.3684 90.7373 0 123.989 0C140.983 0 163.21 4.51651 176.608 17.3349C193.597 33.1648 191.969 54.2755 191.969 77.2722V131.51C191.969 147.835 198.768 154.987 205.151 163.775C207.376 166.953 207.886 170.714 205.04 173.032C197.902 178.999 178.166 196.081 178.166 196.081Z",
        fill: "#F2541B"
    }));
};
const FederatedSignInButton = (props)=>{
    const { icon, provider, text } = props;
    const { toFederatedSignIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])();
    const handleClick = (event)=>{
        event.preventDefault();
        toFederatedSignIn({
            provider
        });
    };
    let iconComponent;
    if (icon === 'facebook') {
        iconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(FacebookIcon, null);
    } else if (icon === 'google') {
        iconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GoogleIcon, null);
    } else if (icon === 'amazon') {
        iconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AmazonIcon, null);
    } else if (icon === 'apple') {
        iconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AppleIcon, null);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: handleClick,
        className: "federated-sign-in-button",
        gap: "1rem"
    }, iconComponent, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        as: "span"
    }, text));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/FederatedSignIn/FederatedSignIn.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FederatedSignIn": (()=>FederatedSignIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/authenticator/user.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Divider/Divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignInButtons$2f$FederatedSignInButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/FederatedSignIn/FederatedSignInButtons/FederatedSignInButton.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const { getSignInWithFederationText, getOrText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
function FederatedSignIn() {
    const { route, socialProviders } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "FederatedSignIn.useAuthenticator": ({ route, socialProviders })=>[
                route,
                socialProviders
            ]
    }["FederatedSignIn.useAuthenticator"]);
    if (socialProviders.length === 0) {
        // @ts-ignore
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column",
        padding: `0 0 1rem 0`,
        className: "federated-sign-in-container"
    }, socialProviders.map((provider)=>{
        switch(provider){
            case 'amazon':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignInButtons$2f$FederatedSignInButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedSignInButton"], {
                    icon: "amazon",
                    key: provider,
                    provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedIdentityProviders"].Amazon,
                    text: getSignInWithFederationText(route, provider)
                });
            case 'apple':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignInButtons$2f$FederatedSignInButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedSignInButton"], {
                    icon: "apple",
                    key: provider,
                    provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedIdentityProviders"].Apple,
                    text: getSignInWithFederationText(route, provider)
                });
            case 'facebook':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignInButtons$2f$FederatedSignInButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedSignInButton"], {
                    icon: "facebook",
                    key: provider,
                    provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedIdentityProviders"].Facebook,
                    text: getSignInWithFederationText(route, provider)
                });
            case 'google':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignInButtons$2f$FederatedSignInButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedSignInButton"], {
                    icon: "google",
                    key: provider,
                    provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$authenticator$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedIdentityProviders"].Google,
                    text: getSignInWithFederationText(route, provider)
                });
            default:
                // eslint-disable-next-line no-console
                console.error(`Authenticator does not support ${provider}. Please open an issue: https://github.com/aws-amplify/amplify-ui/issues/choose`);
        }
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {
        size: "small",
        label: getOrText()
    }));
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SignIn/SignIn.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SignIn": (()=>SignIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/VisuallyHidden/VisuallyHidden.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/FederatedSignIn/FederatedSignIn.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const { getSignInText, getSigningInText, getForgotPasswordText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
function SignIn() {
    const { isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "SignIn.useAuthenticator": (context)=>[
                context.isPending
            ]
    }["SignIn.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    SignIn: { Header = SignIn.Header, Footer = SignIn.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-signin": "",
        method: "post",
        onSubmit: handleSubmit,
        onChange: handleChange
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedSignIn"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("legend", null, getSignInText())), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        isDisabled: isPending,
        type: "submit",
        variation: "primary",
        isLoading: isPending,
        loadingText: getSigningInText()
    }, getSignInText()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null))));
}
const DefaultFooter = ()=>{
    const { toForgotPassword } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "DefaultFooter.useAuthenticator": (context)=>[
                context.toForgotPassword
            ]
    }["DefaultFooter.useAuthenticator"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        "data-amplify-footer": ""
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: toForgotPassword,
        size: "small",
        variation: "link"
    }, getForgotPasswordText()));
};
SignIn.Footer = DefaultFooter;
SignIn.Header = function Header() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SignUp/SignUp.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SignUp": (()=>SignUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/FederatedSignIn/FederatedSignIn.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const { getCreateAccountText, getCreatingAccountText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
function SignUp() {
    const { hasValidationErrors, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "SignUp.useAuthenticator": (context)=>[
                context.hasValidationErrors,
                context.isPending
            ]
    }["SignUp.useAuthenticator"]);
    const { handleChange, handleBlur, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    SignUp: { Header = SignUp.Header, FormFields = SignUp.FormFields, Footer = SignUp.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-signup": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit,
        onBlur: handleBlur
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$FederatedSignIn$2f$FederatedSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FederatedSignIn"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(FormFields, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        isDisabled: hasValidationErrors || isPending,
        isFullWidth: true,
        type: "submit",
        variation: "primary",
        isLoading: isPending,
        loadingText: getCreatingAccountText()
    }, getCreateAccountText()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null))));
}
SignUp.Header = function Header() {
    // @ts-ignore
    return null;
};
SignUp.FormFields = function FormFields$1() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null);
};
SignUp.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/SignInSignUpTabs.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SignInSignUpTabs": (()=>SignInSignUpTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Tabs/Tabs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignIn$2f$SignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SignIn/SignIn.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignUp$2f$SignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SignUp/SignUp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const { getSignInTabText, getSignUpTabText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const SignInSignUpTabs = ({ className, hideSignUp, variation })=>{
    const { route, toSignIn, toSignUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "SignInSignUpTabs.useAuthenticator": (context)=>[
                context.route,
                context.toSignIn,
                context.toSignUp
            ]
    }["SignInSignUpTabs.useAuthenticator"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, hideSignUp ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        "data-amplify-router-content": ""
    }, route === 'signIn' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignIn$2f$SignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignIn"], null)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"].Container, {
        value: route,
        isLazy: true,
        onValueChange: (newRoute)=>{
            if (newRoute !== route) {
                newRoute === 'signIn' ? toSignIn() : toSignUp();
            }
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"].List, {
        spacing: "equal",
        indicatorPosition: "top"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"].Item, {
        value: "signIn"
    }, getSignInTabText()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"].Item, {
        value: "signUp"
    }, getSignUpTabText())), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"].Panel, {
        value: "signIn",
        "data-amplify-router-content": ""
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignIn$2f$SignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignIn"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"].Panel, {
        value: "signUp",
        "data-amplify-router-content": ""
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignUp$2f$SignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignUp"], null))));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/TwoButtonSubmitFooter.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TwoButtonSubmitFooter": (()=>TwoButtonSubmitFooter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
;
;
;
;
;
const { getSubmitText, getSubmittingText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const TwoButtonSubmitFooter = (props)=>{
    const { cancelButtonSendType, cancelButtonText, submitButtonText } = props;
    const { isPending, resendCode, skipVerification, toSignIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "TwoButtonSubmitFooter.useAuthenticator": (context)=>[
                context.isPending
            ]
    }["TwoButtonSubmitFooter.useAuthenticator"]);
    const onClick = ()=>{
        switch(cancelButtonSendType){
            case 'SKIP':
                skipVerification();
                break;
            case 'RESEND':
                resendCode();
                break;
            case 'SIGN_IN':
                toSignIn();
                break;
            default:
                return;
        }
    };
    const defaultSubmitText = isPending ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, getSubmittingText(), "\u2026") : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, getSubmitText());
    const submitText = submitButtonText ?? defaultSubmitText;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variation: "primary",
        isDisabled: isPending,
        type: "submit"
    }, submitText), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column",
        alignItems: "center"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: onClick,
        type: "button",
        variation: "link",
        size: "small"
    }, cancelButtonText)));
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/VerifyUser/ConfirmVerifyUser.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfirmVerifyUser": (()=>ConfirmVerifyUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$TwoButtonSubmitFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/TwoButtonSubmitFooter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const { getAccountRecoveryInfoText, getSkipText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const ConfirmVerifyUser = ({ className, variation })=>{
    const { isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "ConfirmVerifyUser.useAuthenticator": (context)=>[
                context.isPending
            ]
    }["ConfirmVerifyUser.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    ConfirmVerifyUser: { Header = ConfirmVerifyUser.Header, Footer = ConfirmVerifyUser.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-confirmverifyuser": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$TwoButtonSubmitFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwoButtonSubmitFooter"], {
        cancelButtonText: getSkipText(),
        cancelButtonSendType: "SKIP"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null))));
};
ConfirmVerifyUser.Header = function Header() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 3
    }, getAccountRecoveryInfoText());
};
ConfirmVerifyUser.Footer = function Footer() {
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/RadioGroupField/context.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RadioGroupContext": (()=>RadioGroupContext),
    "useRadioGroupContext": (()=>useRadioGroupContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const defaultValue = {
    name: 'default'
};
const RadioGroupContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultValue);
const useRadioGroupContext = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(RadioGroupContext);
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Radio/Radio.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Radio": (()=>Radio),
    "RadioPrimitive": (()=>RadioPrimitive)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Input/Input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/RadioGroupField/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Fieldset/useFieldset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const RadioPrimitive = ({ children, className, id, isDisabled = false, testId, value, labelPosition: radioLabelPosition, ...rest }, ref)=>{
    const { currentValue, defaultValue, name, hasError, isGroupDisabled = false, isRequired, isReadOnly, onChange, size, labelPosition: groupLabelPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRadioGroupContext"])();
    const { isFieldsetDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldset"])();
    const shouldBeDisabled = isFieldsetDisabled ? isFieldsetDisabled : isGroupDisabled || isDisabled || isReadOnly && defaultValue !== value;
    // for controlled component
    const checked = currentValue !== undefined ? value === currentValue : undefined;
    // for uncontrolled component
    const defaultChecked = defaultValue !== undefined ? value === defaultValue : undefined;
    const labelPosition = radioLabelPosition ? radioLabelPosition : groupLabelPosition;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Radio, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Radio, `disabled`, shouldBeDisabled), labelPosition ? `amplify-label-${labelPosition}` : null, className)
    }, children && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        as: "span",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].RadioLabel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifierByFlag"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].RadioLabel, `disabled`, shouldBeDisabled))
    }, children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        checked: checked,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].VisuallyHidden, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].RadioInput),
        defaultChecked: defaultChecked,
        hasError: hasError,
        id: id,
        isDisabled: shouldBeDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        onChange: onChange,
        ref: ref,
        type: "radio",
        name: name,
        value: value,
        ...rest
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        "aria-hidden": "true",
        as: "span",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].RadioButton, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].RadioButton, size)),
        testId: testId
    }));
};
const Radio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(RadioPrimitive);
Radio.displayName = 'Radio';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Fieldset/Fieldset.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Fieldset": (()=>Fieldset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/VisuallyHidden/VisuallyHidden.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Fieldset/useFieldset.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const FieldsetPrimitive = ({ children, className, isDisabled, legend, legendHidden, size, testId, variation = 'plain', ...rest }, ref)=>{
    const { isFieldsetDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldset"])();
    // Fieldsets that are nested within a disabled Fieldset should
    // also be disabled.
    const shouldBeDisabled = isFieldsetDisabled ? isFieldsetDisabled : isDisabled;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FieldsetPrimitive.useMemo[value]": ()=>({
                isFieldsetDisabled: shouldBeDisabled
            })
    }["FieldsetPrimitive.useMemo[value]"], [
        shouldBeDisabled
    ]);
    const fieldsetClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Fieldset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Fieldset, variation), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Fieldset, size), className);
    const legendClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldsetLegend, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].FieldsetLegend, size), {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].VisuallyHidden]: legendHidden
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$useFieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldsetContext"].Provider, {
        value: value
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        className: fieldsetClasses,
        ref: ref,
        disabled: shouldBeDisabled,
        testId: testId,
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
        as: "legend"
    }, legend), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
        as: "div",
        "aria-hidden": "true",
        className: legendClasses
    }, legend), children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/fieldset)
 */ const Fieldset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(FieldsetPrimitive);
Fieldset.displayName = 'Fieldset';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/RadioGroupField/RadioGroupField.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RadioGroupField": (()=>RadioGroupField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Field/FieldDescription.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Field/FieldErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$Fieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Fieldset/Fieldset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/RadioGroupField/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/getUniqueComponentId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/useStableId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/primitiveWithForwardRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$createSpaceSeparatedIds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/utils/createSpaceSeparatedIds.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/helpers/constants.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const RadioGroupFieldPrimitive = ({ children, className, defaultValue, descriptiveText, errorMessage, hasError = false, id, isDisabled, isRequired, isReadOnly, legend, legendHidden = false, labelPosition, onChange, name, size, testId, value, variation, ...rest }, ref)=>{
    const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableId"])(id);
    const stableId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$useStableId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableId"])();
    const descriptionId = descriptiveText ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueComponentId"])(stableId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESCRIPTION_SUFFIX"]) : undefined;
    const errorId = hasError ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueComponentId"])(stableId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$helpers$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_SUFFIX"]) : undefined;
    const ariaDescribedBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$createSpaceSeparatedIds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpaceSeparatedIds"])([
        errorId,
        descriptionId
    ]);
    const radioGroupTestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$getUniqueComponentId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueComponentId"])(testId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].RadioGroup);
    const radioGroupContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RadioGroupFieldPrimitive.useMemo[radioGroupContextValue]": ()=>({
                currentValue: value,
                defaultValue,
                hasError,
                isRequired,
                isReadOnly,
                isGroupDisabled: isDisabled,
                onChange,
                size,
                name,
                labelPosition
            })
    }["RadioGroupFieldPrimitive.useMemo[radioGroupContextValue]"], [
        defaultValue,
        hasError,
        isDisabled,
        isRequired,
        isReadOnly,
        onChange,
        size,
        name,
        value,
        labelPosition
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Fieldset$2f$Fieldset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fieldset"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$classNames$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Field, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNameModifier"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].Field, size), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].RadioGroupField, className),
        isDisabled: isDisabled,
        legend: legend,
        legendHidden: legendHidden,
        ref: ref,
        role: "radiogroup",
        size: size,
        testId: testId,
        variation: variation,
        ...rest
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldDescription"], {
        id: descriptionId,
        labelHidden: legendHidden,
        descriptiveText: descriptiveText
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        "aria-describedby": ariaDescribedBy,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$types$2f$primitives$2f$componentClassName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentClassName"].RadioGroup,
        id: fieldId,
        testId: radioGroupTestId
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupContext"].Provider, {
        value: radioGroupContextValue
    }, children)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Field$2f$FieldErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldErrorMessage"], {
        id: errorId,
        hasError: hasError,
        errorMessage: errorMessage
    }));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/radiogroupfield)
 */ const RadioGroupField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$utils$2f$primitiveWithForwardRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveWithForwardRef"])(RadioGroupFieldPrimitive);
RadioGroupField.displayName = 'RadioGroupField';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/VerifyUser/VerifyUser.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VerifyUser": (()=>VerifyUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/i18n/translations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Radio/Radio.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$RadioGroupField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/RadioGroupField/RadioGroupField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$TwoButtonSubmitFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/TwoButtonSubmitFooter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const { getSkipText, getVerifyText, getVerifyContactText, getAccountRecoveryInfoText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const generateRadioGroup = (attributes)=>{
    return Object.entries(attributes).map(([key, value], index)=>{
        const verificationType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFormFieldOptions"][key].label;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radio"], {
            name: "unverifiedAttr",
            value: key,
            key: key,
            defaultChecked: index === 0
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$i18n$2f$translations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(verificationType), ":", ' ', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["censorContactMethod"])(verificationType, value));
    });
};
const VerifyUser = ({ className, variation })=>{
    const { components: { // @ts-ignore
    VerifyUser: { Header = VerifyUser.Header, Footer = VerifyUser.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    const { isPending, unverifiedUserAttributes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "VerifyUser.useAuthenticator": ({ isPending, unverifiedUserAttributes })=>[
                isPending,
                unverifiedUserAttributes
            ]
    }["VerifyUser.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const footerSubmitText = isPending ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, "Verifying\u2026") : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, getVerifyText());
    const verificationRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$RadioGroupField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupField"], {
        legend: getVerifyContactText(),
        name: "verify_context",
        isDisabled: isPending,
        legendHidden: true
    }, generateRadioGroup(unverifiedUserAttributes));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-verifyuser": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), verificationRadioGroup, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$TwoButtonSubmitFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwoButtonSubmitFooter"], {
        cancelButtonText: getSkipText(),
        cancelButtonSendType: "SKIP",
        submitButtonText: footerSubmitText
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null))));
};
VerifyUser.Header = function Header() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 3
    }, getAccountRecoveryInfoText());
};
VerifyUser.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ConfirmSignIn/ConfirmSignIn.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfirmSignIn": (()=>ConfirmSignIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$ConfirmSignInFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/ConfirmSignInFooter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const { getChallengeText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const ConfirmSignIn = ({ className, variation })=>{
    const { isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "ConfirmSignIn.useAuthenticator": (context)=>[
                context.isPending
            ]
    }["ConfirmSignIn.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    ConfirmSignIn: { Header = ConfirmSignIn.Header, Footer = ConfirmSignIn.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-confirmsignin": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$ConfirmSignInFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignInFooter"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null))));
};
function Header() {
    const { challengeName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "Header.useAuthenticator": ({ challengeName })=>[
                challengeName
            ]
    }["Header.useAuthenticator"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 3
    }, getChallengeText(challengeName));
}
ConfirmSignIn.Header = Header;
ConfirmSignIn.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForgotPassword/ConfirmResetPassword.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfirmResetPassword": (()=>ConfirmResetPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$TwoButtonSubmitFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/TwoButtonSubmitFooter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const { getResendCodeText, getResetYourPasswordText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const ConfirmResetPassword = ({ className, variation })=>{
    const { isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "ConfirmResetPassword.useAuthenticator": (context)=>[
                context.isPending
            ]
    }["ConfirmResetPassword.useAuthenticator"]);
    const { handleBlur, handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    ConfirmResetPassword: { Header = ConfirmResetPassword.Header, Footer = ConfirmResetPassword.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-confirmresetpassword": "",
        method: "post",
        onSubmit: handleSubmit,
        onChange: handleChange,
        onBlur: handleBlur
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$TwoButtonSubmitFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwoButtonSubmitFooter"], {
        cancelButtonSendType: "RESEND",
        cancelButtonText: getResendCodeText()
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null))));
};
ConfirmResetPassword.Header = function Header() {
    const headerText = getResetYourPasswordText();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 3
    }, headerText);
};
ConfirmResetPassword.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForgotPassword/ForgotPassword.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ForgotPassword": (()=>ForgotPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$TwoButtonSubmitFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/TwoButtonSubmitFooter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const { getBackToSignInText, getSendingText, getSendCodeText, getResetYourPasswordText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const ForgotPassword = ({ className, variation })=>{
    const { isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "ForgotPassword.useAuthenticator": (context)=>[
                context.isPending
            ]
    }["ForgotPassword.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    ForgotPassword: { Header = ForgotPassword.Header, Footer = ForgotPassword.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-forgotpassword": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Header, null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$TwoButtonSubmitFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwoButtonSubmitFooter"], {
        cancelButtonText: getBackToSignInText(),
        cancelButtonSendType: "SIGN_IN",
        submitButtonText: isPending ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, getSendingText(), "\u2026") : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, getSendCodeText())
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Footer, null))));
};
ForgotPassword.Header = function Header() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 3
    }, getResetYourPasswordText());
};
ForgotPassword.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/utils.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isSignInOrSignUpRoute": (()=>isSignInOrSignUpRoute)
});
const isSignInOrSignUpRoute = (route)=>route === 'signIn' || route === 'signUp';
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SelectMfaType/SelectMfaType.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SelectMfaType": (()=>SelectMfaType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$RadioGroupField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/RadioGroupField/RadioGroupField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Radio/Radio.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$ConfirmSignInFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/ConfirmSignInFooter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const { getMfaTypeLabelByValue, getSelectMfaTypeByChallengeName, getSelectMfaTypeText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const SelectMfaType = ({ className, variation })=>{
    const { isPending, allowedMfaTypes = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "SelectMfaType.useAuthenticator": (context)=>{
            return [
                context.isPending,
                context.allowedMfaTypes
            ];
        }
    }["SelectMfaType.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    SelectMfaType: { Header = SelectMfaType.Header, Footer = SelectMfaType.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-select-mfa-type": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Header, null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$RadioGroupField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupField"], {
        name: "mfa_type",
        legend: getSelectMfaTypeText(),
        legendHidden: true,
        isDisabled: isPending,
        isRequired: true
    }, allowedMfaTypes.map((value, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radio"], {
            name: "mfa_type",
            key: value,
            value: value,
            defaultChecked: index === 0
        }, getMfaTypeLabelByValue(value)))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$ConfirmSignInFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignInFooter"], null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Footer, null))));
};
SelectMfaType.Header = function Header() {
    const { challengeName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "Header.useAuthenticator": (context)=>{
            return [
                context.challengeName
            ];
        }
    }["Header.useAuthenticator"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 3
    }, getSelectMfaTypeByChallengeName(challengeName));
};
SelectMfaType.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SetupEmail/SetupEmail.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SetupEmail": (()=>SetupEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useFormHandlers/useFormHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$ConfirmSignInFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/ConfirmSignInFooter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/RemoteErrorMessage.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/FormFields.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/RouteContainer/RouteContainer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const { getSetupEmailText } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$helpers$2f$authenticator$2f$textUtil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticatorTextUtil"];
const SetupEmail = ({ className, variation })=>{
    const { isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "SetupEmail.useAuthenticator": (context)=>[
                context.isPending
            ]
    }["SetupEmail.useAuthenticator"]);
    const { handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useFormHandlers$2f$useFormHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])();
    const { components: { // @ts-ignore
    SetupEmail: { Header = SetupEmail.Header, Footer = SetupEmail.Footer } } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponents"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$RouteContainer$2f$RouteContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteContainer"], {
        className: className,
        variation: variation
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("form", {
        "data-amplify-form": "",
        "data-amplify-authenticator-setup-email": "",
        method: "post",
        onChange: handleChange,
        onSubmit: handleSubmit
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        as: "fieldset",
        direction: "column",
        isDisabled: isPending
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Header, null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$FormFields$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$RemoteErrorMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteErrorMessage"], null)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$ConfirmSignInFooter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignInFooter"], null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Footer, null))));
};
SetupEmail.Header = function Header() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        level: 3
    }, getSetupEmailText());
};
SetupEmail.Footer = function Footer() {
    // @ts-ignore
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/Router/Router.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Router": (()=>Router)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignUp$2f$ConfirmSignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ConfirmSignUp/ConfirmSignUp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForceNewPassword$2f$ForceNewPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForceNewPassword/ForceNewPassword.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupTotp$2f$SetupTotp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SetupTotp/SetupTotp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$SignInSignUpTabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/shared/SignInSignUpTabs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$ConfirmVerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/VerifyUser/ConfirmVerifyUser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$VerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/VerifyUser/VerifyUser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignIn$2f$ConfirmSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ConfirmSignIn/ConfirmSignIn.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ConfirmResetPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForgotPassword/ConfirmResetPassword.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ForgotPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForgotPassword/ForgotPassword.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SelectMfaType$2f$SelectMfaType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SelectMfaType/SelectMfaType.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupEmail$2f$SetupEmail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SetupEmail/SetupEmail.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function RenderNothing() {
    // @ts-ignore
    return null;
}
const getRouteComponent = (route)=>{
    switch(route){
        case 'authenticated':
        case 'idle':
        case 'setup':
        case 'transition':
            return RenderNothing;
        case 'confirmSignUp':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignUp$2f$ConfirmSignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignUp"];
        case 'confirmSignIn':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignIn$2f$ConfirmSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignIn"];
        case 'selectMfaType':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SelectMfaType$2f$SelectMfaType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectMfaType"];
        case 'setupEmail':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupEmail$2f$SetupEmail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupEmail"];
        case 'setupTotp':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupTotp$2f$SetupTotp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupTotp"];
        case 'signIn':
        case 'signUp':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$shared$2f$SignInSignUpTabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignInSignUpTabs"];
        case 'forceNewPassword':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForceNewPassword$2f$ForceNewPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForceNewPassword"];
        case 'forgotPassword':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ForgotPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForgotPassword"];
        case 'confirmResetPassword':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ConfirmResetPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmResetPassword"];
        case 'verifyUser':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$VerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifyUser"];
        case 'confirmVerifyUser':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$ConfirmVerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmVerifyUser"];
        default:
            // eslint-disable-next-line no-console
            console.warn(`Unhandled Authenticator route - please open an issue: ${route}`);
            return RenderNothing;
    }
};
function Router({ className, hideSignUp, variation }) {
    const { route } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "Router.useAuthenticator": ({ route })=>[
                route
            ]
    }["Router.useAuthenticator"]);
    const RouterChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Router.useMemo[RouterChildren]": ()=>getRouteComponent(route)
    }["Router.useMemo[RouterChildren]"], [
        route
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RouterChildren, {
        className: className,
        // @ts-ignore
        hideSignUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSignInOrSignUpRoute"])(route) ? hideSignUp : undefined,
        variation: variation
    });
}
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/defaultComponents.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultComponents": (()=>defaultComponents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignIn$2f$SignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SignIn/SignIn.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignUp$2f$SignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SignUp/SignUp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignUp$2f$ConfirmSignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ConfirmSignUp/ConfirmSignUp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForceNewPassword$2f$ForceNewPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForceNewPassword/ForceNewPassword.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupTotp$2f$SetupTotp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SetupTotp/SetupTotp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignIn$2f$ConfirmSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ConfirmSignIn/ConfirmSignIn.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$ConfirmVerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/VerifyUser/ConfirmVerifyUser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$VerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/VerifyUser/VerifyUser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ConfirmResetPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForgotPassword/ConfirmResetPassword.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ForgotPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForgotPassword/ForgotPassword.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SelectMfaType$2f$SelectMfaType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SelectMfaType/SelectMfaType.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupEmail$2f$SetupEmail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SetupEmail/SetupEmail.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const defaultComponents = {
    // @ts-ignore
    Header: ()=>null,
    SignIn: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignIn$2f$SignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignIn"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignIn$2f$SignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignIn"].Footer
    },
    SignUp: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignUp$2f$SignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignUp"].Header,
        FormFields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignUp$2f$SignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignUp"].FormFields,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignUp$2f$SignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignUp"].Footer
    },
    ConfirmSignUp: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignUp$2f$ConfirmSignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignUp"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignUp$2f$ConfirmSignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignUp"].Footer
    },
    SelectMfaType: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SelectMfaType$2f$SelectMfaType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectMfaType"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SelectMfaType$2f$SelectMfaType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectMfaType"].Footer
    },
    SetupEmail: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupEmail$2f$SetupEmail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupEmail"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupEmail$2f$SetupEmail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupEmail"].Footer
    },
    SetupTotp: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupTotp$2f$SetupTotp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupTotp"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupTotp$2f$SetupTotp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupTotp"].Footer
    },
    ConfirmResetPassword: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ConfirmResetPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmResetPassword"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ConfirmResetPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmResetPassword"].Footer
    },
    ConfirmSignIn: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignIn$2f$ConfirmSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignIn"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ConfirmSignIn$2f$ConfirmSignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmSignIn"].Footer
    },
    VerifyUser: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$VerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifyUser"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$VerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifyUser"].Footer
    },
    ConfirmVerifyUser: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$ConfirmVerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmVerifyUser"].Header,
        // @ts-ignore
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$VerifyUser$2f$ConfirmVerifyUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmVerifyUser"].Footer
    },
    ForceNewPassword: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForceNewPassword$2f$ForceNewPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForceNewPassword"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForceNewPassword$2f$ForceNewPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForceNewPassword"].Footer,
        FormFields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForceNewPassword$2f$ForceNewPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForceNewPassword"].FormFields
    },
    ForgotPassword: {
        Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ForgotPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForgotPassword"].Header,
        Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ForgotPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForgotPassword"].Footer
    },
    // @ts-ignore
    Footer: ()=>null
};
;
}}),
"[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/Authenticator.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Authenticator": (()=>Authenticator),
    "AuthenticatorInternal": (()=>AuthenticatorInternal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_@playwright+test@1.51.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui@6.10.0_@aws-amplify+core@6.11.1_aws-amplify@6.14.1_xstate@4.38.3/node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$hooks$2f$useSetUserAgent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useSetUserAgent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/hooks/useSetUserAgent.mjs [app-client] (ecmascript) <export default as useSetUserAgent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$context$2f$AuthenticatorProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthenticatorProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/context/AuthenticatorProvider.mjs [app-client] (ecmascript) <export default as AuthenticatorProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticatorInitMachine$2f$useAuthenticatorInitMachine$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticatorInitMachine$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react-core@3.4.0_@aws-amplify+core@6.11.1_@types+react@19.1.0_aws-amplify@6.14.1_react@19.1.0/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticatorInitMachine/useAuthenticatorInitMachine.mjs [app-client] (ecmascript) <export default as useAuthenticatorInitMachine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/version.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$hooks$2f$useDeprecationWarning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/hooks/useDeprecationWarning.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/useCustomComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Router$2f$Router$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/Router/Router.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupTotp$2f$SetupTotp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SetupTotp/SetupTotp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignIn$2f$SignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SignIn/SignIn.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignUp$2f$SignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SignUp/SignUp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForceNewPassword$2f$ForceNewPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForceNewPassword/ForceNewPassword.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ForgotPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/ForgotPassword/ForgotPassword.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$defaultComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/hooks/useCustomComponents/defaultComponents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SelectMfaType$2f$SelectMfaType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SelectMfaType/SelectMfaType.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupEmail$2f$SetupEmail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aws-amplify+ui-react@6.10.0_@aws-amplify+core@6.11.1_@types+react-dom@19.1.1_@types+re_5354a4fd1fbe90026d1be20f43d5a74d/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/SetupEmail/SetupEmail.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// `AuthenticatorInternal` exists to give access to the context returned via `useAuthenticator`,
// which allows the `Authenticator` to just return `children` if a user is authenticated.
// Once the `Provider` is removed from the `Authenticator` component and exported as
// `AuthenticatorProvider`, this component should be renamed to `Authenticator`.
function AuthenticatorInternal({ children, className, components: customComponents, formFields, hideSignUp, initialState, loginMechanisms, passwordSettings, signUpAttributes, services, socialProviders, variation }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$hooks$2f$useDeprecationWarning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeprecationWarning"])({
        message: 'The `passwordSettings` prop has been deprecated and will be removed in a future major version of Amplify UI.',
        // shouldWarn: !!passwordSettings,
        /**
         * @migration turn off until getConfig returns zero config
         */ shouldWarn: false
    });
    const { route, signOut, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "AuthenticatorInternal.useAuthenticator": ({ route, signOut, user })=>[
                route,
                signOut,
                user
            ]
    }["AuthenticatorInternal.useAuthenticator"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticatorInitMachine$2f$useAuthenticatorInitMachine$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticatorInitMachine$3e$__["useAuthenticatorInitMachine"])({
        initialState,
        loginMechanisms,
        passwordSettings,
        services,
        signUpAttributes,
        socialProviders,
        formFields
    });
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthenticatorInternal.useMemo[value]": ()=>({
                components: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$defaultComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultComponents"],
                    ...customComponents
                }
            })
    }["AuthenticatorInternal.useMemo[value]"], [
        customComponents
    ]);
    const isAuthenticatedRoute = route === 'authenticated' || route === 'signOut';
    if (isAuthenticatedRoute) {
        // `Authenticator` might not have user defined `children` for non SPA use cases.
        if (!children) {
            // @ts-ignore
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_aws$2d$amplify$40$6$2e$14$2e$1_xstate$40$4$2e$38$2e$3$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2f$dist$2f$esm$2f$utils$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(children) ? children({
            signOut,
            user
        }) // children is a render prop
         : children);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$hooks$2f$useCustomComponents$2f$useCustomComponents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomComponentsContext"].Provider, {
        value: value
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Router$2f$Router$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Router"], {
        className: className,
        hideSignUp: hideSignUp,
        variation: variation
    }));
}
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/authenticator)
 */ function Authenticator(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$hooks$2f$useSetUserAgent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useSetUserAgent$3e$__["useSetUserAgent"])({
        componentName: 'Authenticator',
        packageName: 'react',
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$context$2f$AuthenticatorProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthenticatorProvider$3e$__["AuthenticatorProvider"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$26$2e$10_$40$playwright$2b$test$40$1$2e$51$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(AuthenticatorInternal, {
        ...props
    }));
}
Authenticator.Provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$2d$core$40$3$2e$4$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$40$19$2e$1$2e$0_aws$2d$amplify$40$6$2e$14$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$context$2f$AuthenticatorProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthenticatorProvider$3e$__["AuthenticatorProvider"];
Authenticator.ForgotPassword = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForgotPassword$2f$ForgotPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForgotPassword"];
Authenticator.SetupTotp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupTotp$2f$SetupTotp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupTotp"];
Authenticator.SignIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignIn$2f$SignIn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignIn"];
Authenticator.SignUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SignUp$2f$SignUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignUp"];
Authenticator.ForceNewPassword = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$ForceNewPassword$2f$ForceNewPassword$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForceNewPassword"];
Authenticator.SelectMfaType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SelectMfaType$2f$SelectMfaType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectMfaType"];
Authenticator.SetupEmail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aws$2d$amplify$2b$ui$2d$react$40$6$2e$10$2e$0_$40$aws$2d$amplify$2b$core$40$6$2e$11$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$1_$40$types$2b$re_5354a4fd1fbe90026d1be20f43d5a74d$2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$SetupEmail$2f$SetupEmail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupEmail"];
;
}}),
}]);

//# sourceMappingURL=a8603_%40aws-amplify_ui-react_dist_esm_8d151c44._.js.map