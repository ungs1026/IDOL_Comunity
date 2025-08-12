(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/artist/[id]/ArtistPage.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "announcementList": "ArtistPage-module__2_zQSa__announcementList",
  "artistDescription": "ArtistPage-module__2_zQSa__artistDescription",
  "artistName": "ArtistPage-module__2_zQSa__artistName",
  "artistShopButton": "ArtistPage-module__2_zQSa__artistShopButton",
  "communityButton": "ArtistPage-module__2_zQSa__communityButton",
  "communityButtonContainer": "ArtistPage-module__2_zQSa__communityButtonContainer",
  "container": "ArtistPage-module__2_zQSa__container",
  "imageContainer": "ArtistPage-module__2_zQSa__imageContainer",
  "introductionContent": "ArtistPage-module__2_zQSa__introductionContent",
  "introductionSection": "ArtistPage-module__2_zQSa__introductionSection",
  "liveGrid": "ArtistPage-module__2_zQSa__liveGrid",
  "mediaGrid": "ArtistPage-module__2_zQSa__mediaGrid",
  "memberGrid": "ArtistPage-module__2_zQSa__memberGrid",
  "merchGrid": "ArtistPage-module__2_zQSa__merchGrid",
  "overlay": "ArtistPage-module__2_zQSa__overlay",
  "section": "ArtistPage-module__2_zQSa__section",
  "sectionHeader": "ArtistPage-module__2_zQSa__sectionHeader",
  "sectionTitle": "ArtistPage-module__2_zQSa__sectionTitle",
  "snsButton": "ArtistPage-module__2_zQSa__snsButton",
  "snsButtonsContainer": "ArtistPage-module__2_zQSa__snsButtonsContainer",
  "snsIcon": "ArtistPage-module__2_zQSa__snsIcon",
});
}),
"[project]/src/components/artistInfo/MemberCard.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "memberCard": "MemberCard-module__m0igZG__memberCard",
  "memberImage": "MemberCard-module__m0igZG__memberImage",
  "memberName": "MemberCard-module__m0igZG__memberName",
});
}),
"[project]/src/components/artistInfo/MemberCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MemberCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/MemberCard.module.css [app-client] (css module)");
;
;
;
const MemberCard = (param)=>{
    let { name, imageUrl, artistName, artistId, groupId } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/nickname?artistName=".concat(artistName, "&memberName=").concat(name, "&memberImage=").concat(imageUrl, "&artistId=").concat(artistId, "&groupId=").concat(groupId),
        legacyBehavior: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MemberCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "http://localhost:80".concat(imageUrl),
                    alt: name,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MemberCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberImage
                }, void 0, false, {
                    fileName: "[project]/src/components/artistInfo/MemberCard.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MemberCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberName,
                    children: name
                }, void 0, false, {
                    fileName: "[project]/src/components/artistInfo/MemberCard.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/artistInfo/MemberCard.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/artistInfo/MemberCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MemberCard;
const __TURBOPACK__default__export__ = MemberCard;
var _c;
__turbopack_context__.k.register(_c, "MemberCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/artistInfo/LiveCard.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "dateTime": "LiveCard-module__FQYguq__dateTime",
  "info": "LiveCard-module__FQYguq__info",
  "liveCard": "LiveCard-module__FQYguq__liveCard",
  "thumbnail": "LiveCard-module__FQYguq__thumbnail",
  "title": "LiveCard-module__FQYguq__title",
});
}),
"[project]/src/components/artistInfo/LiveCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$LiveCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/LiveCard.module.css [app-client] (css module)");
;
;
const LiveCard = (param)=>{
    let { thumbnail, date, time, title, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$LiveCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveCard,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: thumbnail,
                alt: title,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$LiveCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnail
            }, void 0, false, {
                fileName: "[project]/src/components/artistInfo/LiveCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$LiveCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$LiveCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateTime,
                        children: [
                            date,
                            " ",
                            time
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/artistInfo/LiveCard.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$LiveCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/artistInfo/LiveCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/artistInfo/LiveCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/artistInfo/LiveCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LiveCard;
const __TURBOPACK__default__export__ = LiveCard;
var _c;
__turbopack_context__.k.register(_c, "LiveCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/artistInfo/MediaCard.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "date": "MediaCard-module__c-quFW__date",
  "info": "MediaCard-module__c-quFW__info",
  "mediaCard": "MediaCard-module__c-quFW__mediaCard",
  "thumbnail": "MediaCard-module__c-quFW__thumbnail",
  "title": "MediaCard-module__c-quFW__title",
});
}),
"[project]/src/components/artistInfo/MediaCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MediaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/MediaCard.module.css [app-client] (css module)");
;
;
const MediaCard = (param)=>{
    let { thumbnail, title, date, time, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MediaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaCard,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: thumbnail,
                alt: title,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MediaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnail
            }, void 0, false, {
                fileName: "[project]/src/components/artistInfo/MediaCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MediaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MediaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/artistInfo/MediaCard.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MediaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
                        children: date
                    }, void 0, false, {
                        fileName: "[project]/src/components/artistInfo/MediaCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/artistInfo/MediaCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/artistInfo/MediaCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MediaCard;
const __TURBOPACK__default__export__ = MediaCard;
var _c;
__turbopack_context__.k.register(_c, "MediaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/artistInfo/MerchCard.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "info": "MerchCard-module__jURsGG__info",
  "merchCard": "MerchCard-module__jURsGG__merchCard",
  "merchImage": "MerchCard-module__jURsGG__merchImage",
  "merchName": "MerchCard-module__jURsGG__merchName",
  "merchPrice": "MerchCard-module__jURsGG__merchPrice",
});
}),
"[project]/src/components/artistInfo/MerchCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MerchCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/MerchCard.module.css [app-client] (css module)");
;
;
const MerchCard = (param)=>{
    let { image, name, price } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MerchCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].merchCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: image,
                alt: name,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MerchCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].merchImage
            }, void 0, false, {
                fileName: "[project]/src/components/artistInfo/MerchCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MerchCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MerchCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].merchName,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/artistInfo/MerchCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MerchCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].merchPrice,
                        children: price
                    }, void 0, false, {
                        fileName: "[project]/src/components/artistInfo/MerchCard.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/artistInfo/MerchCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/artistInfo/MerchCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MerchCard;
const __TURBOPACK__default__export__ = MerchCard;
var _c;
__turbopack_context__.k.register(_c, "MerchCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/artistInfo/AnnouncementCard.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "announcementCard": "AnnouncementCard-module__aj4hGq__announcementCard",
  "announcementTitle": "AnnouncementCard-module__aj4hGq__announcementTitle",
  "anon": "AnnouncementCard-module__aj4hGq__anon",
  "arrowButton": "AnnouncementCard-module__aj4hGq__arrowButton",
});
}),
"[project]/src/components/artistInfo/AnnouncementCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$AnnouncementCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/AnnouncementCard.module.css [app-client] (css module)");
;
;
const AnnouncementCard = (param)=>{
    let { title, create_at } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$AnnouncementCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].announcementCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$AnnouncementCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].anon,
                children: "공지"
            }, void 0, false, {
                fileName: "[project]/src/components/artistInfo/AnnouncementCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$AnnouncementCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].announcementTitle,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/artistInfo/AnnouncementCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$AnnouncementCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                children: ">"
            }, void 0, false, {
                fileName: "[project]/src/components/artistInfo/AnnouncementCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/artistInfo/AnnouncementCard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AnnouncementCard;
const __TURBOPACK__default__export__ = AnnouncementCard;
var _c;
__turbopack_context__.k.register(_c, "AnnouncementCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/artist/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/artist/[id]/ArtistPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/MemberCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$LiveCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/LiveCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/MediaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MerchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/MerchCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$AnnouncementCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/artistInfo/AnnouncementCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const ArtistPage = ()=>{
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const [groupInfo, setGroupInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [artistList, setArtistList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [liveData, setLiveData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 라이브 데이터 상태 추가
    const [mediaData, setMediaData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 라이브 데이터 상태 추가
    const [products, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 라이브 데이터 상태 추가
    const [noties, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 라이브 데이터 상태 추가
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtistPage.useEffect": ()=>{
            if (id) {
                const fetchGroupData = {
                    "ArtistPage.useEffect.fetchGroupData": async ()=>{
                        try {
                            setLoading(true);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:80/api/artist/group", {
                                params: {
                                    groupId: id
                                }
                            });
                            console.log("Group API Response Data:", response.data); // 서버 응답 데이터 전체를 확인하기 위한 로그
                            setGroupInfo(response.data.group);
                            setArtistList(response.data.artists || []);
                            setError(null);
                        } catch (err) {
                            setError('그룹 정보를 불러오는 데 실패했습니다.');
                            console.error('API Error:', err);
                        } finally{
                            setLoading(false);
                        }
                    }
                }["ArtistPage.useEffect.fetchGroupData"];
                fetchGroupData();
            }
        }
    }["ArtistPage.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtistPage.useEffect": ()=>{
            const fetchLiveData = {
                "ArtistPage.useEffect.fetchLiveData": async ()=>{
                    console.log("fetchLiveData");
                    if (id) {
                        try {
                            console.log("Fetching live data for groupId:", id);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:80/api/artistinfo/artistLive", {
                                params: {
                                    groupId: id
                                }
                            });
                            console.log('Live Data Response:', response.data); // API 응답 전체를 다시 확인
                            setLiveData(response.data);
                        } catch (err) {
                            console.error('Failed to fetch live data:', err);
                        }
                    }
                }
            }["ArtistPage.useEffect.fetchLiveData"];
            fetchLiveData();
        }
    }["ArtistPage.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtistPage.useEffect": ()=>{
            const fetchMediaData = {
                "ArtistPage.useEffect.fetchMediaData": async ()=>{
                    console.log("fetchMediaData");
                    if (id) {
                        try {
                            console.log("Fetching live data for groupId:", id);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:80/api/artistinfo/artistMedia", {
                                params: {
                                    groupId: id
                                }
                            });
                            console.log('Media Data Response:', response.data); // API 응답 전체를 다시 확인
                            setMediaData(response.data);
                        } catch (err) {
                            console.error('Failed to fetch live data:', err);
                        }
                    }
                }
            }["ArtistPage.useEffect.fetchMediaData"];
            fetchMediaData();
        }
    }["ArtistPage.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtistPage.useEffect": ()=>{
            const fetchProductData = {
                "ArtistPage.useEffect.fetchProductData": async ()=>{
                    console.log("fetchProductData");
                    if (id) {
                        try {
                            console.log("Fetching live data for groupId:", id);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:80/api/artistinfo/product", {
                                params: {
                                    groupId: id
                                }
                            });
                            console.log('product Data Response:', response.data); // API 응답 전체를 다시 확인
                            setProduct(response.data);
                        } catch (err) {
                            console.error('Failed to fetch product data:', err);
                        }
                    }
                }
            }["ArtistPage.useEffect.fetchProductData"];
            fetchProductData();
        }
    }["ArtistPage.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtistPage.useEffect": ()=>{
            const fetchNotice = {
                "ArtistPage.useEffect.fetchNotice": async ()=>{
                    console.log("fetchProductData");
                    if (id) {
                        try {
                            console.log("Fetching notice data for groupId:", id);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:80/api/artistinfo/board", {
                                params: {
                                    groupId: id
                                }
                            });
                            console.log('notice Data Response:', response.data); // API 응답 전체를 다시 확인
                            setNotice(response.data);
                        } catch (err) {
                            console.error('Failed to fetch notice data:', err);
                        }
                    }
                }
            }["ArtistPage.useEffect.fetchNotice"];
            fetchNotice();
        }
    }["ArtistPage.useEffect"], [
        id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centeredMessage,
            children: "로딩 중..."
        }, void 0, false, {
            fileName: "[project]/src/app/artist/[id]/page.tsx",
            lineNumber: 181,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centeredMessage,
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/artist/[id]/page.tsx",
            lineNumber: 185,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!groupInfo) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
        return null;
    }
    const handleLiveCardClick = (liveItem)=>{
        router.push("/artist-sns?artistId=".concat(groupInfo.groupId, "&artistName=").concat(groupInfo.groupName, "&activeTab=live&selectedItem=").concat(encodeURIComponent(JSON.stringify(liveItem))));
    };
    const handleMediaCardClick = (mediaItem)=>{
        router.push("/artist-sns?artistId=".concat(groupInfo.groupId, "&artistName=").concat(groupInfo.groupName, "&activeTab=media&selectedItem=").concat(encodeURIComponent(JSON.stringify(mediaItem))));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introductionSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                            style: {
                                backgroundImage: "url(http://localhost:80/".concat(groupInfo.groupProfileImage, ")")
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/artist/[id]/page.tsx",
                            lineNumber: 204,
                            columnNumber: 41
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introductionContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].artistName,
                                children: groupInfo.groupName
                            }, void 0, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].artistDescription,
                                children: [
                                    "여기에 ",
                                    groupInfo.groupName,
                                    "에 대한 소개 내용이 들어갑니다. ",
                                    groupInfo.groupName,
                                    "은(는) 전 세계 팬들에게 사랑받는 아티스트입니다. 그들의 음악과 퍼포먼스는 많은 사람들에게 영감을 줍니다."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "프로필"
                    }, void 0, false, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    artistList && artistList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberGrid,
                        children: artistList.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: member.stageName,
                                imageUrl: member.profileImage,
                                artistName: member.stageName,
                                artistId: member.artistId,
                                groupId: groupInfo.groupId
                            }, index, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Live"
                    }, void 0, false, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveGrid,
                        children: liveData.map((live)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$LiveCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                thumbnail: "http://localhost:80".concat(live.thumbnail),
                                date: live.date,
                                time: live.time,
                                title: live.title,
                                onClick: ()=>handleLiveCardClick(live)
                            }, live.id, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "미디어"
                    }, void 0, false, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaGrid,
                        children: mediaData.map((media)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                thumbnail: "http://localhost:80".concat(media.thumbnail),
                                date: media.date,
                                time: media.time,
                                title: media.title,
                                onClick: ()=>handleMediaCardClick(media)
                            }, media.id, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Merch"
                            }, void 0, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].artistShopButton,
                                children: "Artist Shop >"
                            }, void 0, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].merchGrid,
                        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$MerchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                image: "http://localhost:80".concat(product.thumbnail),
                                name: "상품명 ".concat(product.productName),
                                price: "".concat(product.price, "원")
                            }, product.id, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/artist/[id]/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '96%',
                    height: '2px',
                    background: '#929292',
                    marginBottom: '16px'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].announcementList,
                    children: noties.map((notice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$artistInfo$2f$AnnouncementCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "[NOTICE] 제목 ".concat(notice.title),
                            create_at: notice.create_at
                        }, notice.id, false, {
                            fileName: "[project]/src/app/artist/[id]/page.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/artist/[id]/page.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsButtonsContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: groupInfo.groupYoutube,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://via.placeholder.com/40/FF0000/FFFFFF?text=YT",
                                alt: "YouTube",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsIcon
                            }, void 0, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/artist/[id]/page.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: groupInfo.groupInstagram,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://via.placeholder.com/40/E4405F/FFFFFF?text=IG",
                                alt: "Instagram",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsIcon
                            }, void 0, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/artist/[id]/page.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: groupInfo.groupX,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://via.placeholder.com/40/000000/FFFFFF?text=X",
                                alt: "X (Twitter)",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsIcon
                            }, void 0, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/artist/[id]/page.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: groupInfo.groupTikTok,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://via.placeholder.com/40/00F2EA/FFFFFF?text=TK",
                                alt: "TikTok",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsIcon
                            }, void 0, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/artist/[id]/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: groupInfo.groupHomepage,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://via.placeholder.com/40/007BFF/FFFFFF?text=HP",
                                alt: "Homepage",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsIcon
                            }, void 0, false, {
                                fileName: "[project]/src/app/artist/[id]/page.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/artist/[id]/page.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/artist/[id]/page.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].communityButtonContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$artist$2f5b$id$5d2f$ArtistPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].communityButton,
                    children: "커뮤니티 바로가기"
                }, void 0, false, {
                    fileName: "[project]/src/app/artist/[id]/page.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/artist/[id]/page.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/artist/[id]/page.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ArtistPage, "h84JY6vJzBPnmgR8/3v8jvcR7n0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ArtistPage;
const __TURBOPACK__default__export__ = ArtistPage;
var _c;
__turbopack_context__.k.register(_c, "ArtistPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3d4ac510._.js.map