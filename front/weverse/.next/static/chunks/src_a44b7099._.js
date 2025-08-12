(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/shop/MainBanner.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "bannerAlbumArt": "MainBanner-module__TfV_Nq__bannerAlbumArt",
  "bannerBg": "MainBanner-module__TfV_Nq__bannerBg",
  "bannerContainer": "MainBanner-module__TfV_Nq__bannerContainer",
  "bannerContent": "MainBanner-module__TfV_Nq__bannerContent",
  "bannerText": "MainBanner-module__TfV_Nq__bannerText",
  "mainBanner": "MainBanner-module__TfV_Nq__mainBanner",
});
}),
"[project]/src/components/shop/ArtistStoreBanner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/shop/ArtistStoreBanner.tsx (New File)
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$MainBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/shop/MainBanner.module.css [app-client] (css module)"); // Reusing MainBanner styles
"use client";
;
;
;
;
;
;
;
const ArtistStoreBanner = (param)=>{
    let { banners } = param;
    if (!banners || banners.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$MainBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContainer,
        style: {
            aspectRatio: '16 / 5'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
            ],
            spaceBetween: 0,
            slidesPerView: 1,
            navigation: true,
            pagination: {
                clickable: true
            },
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            children: banners.map((banner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$MainBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainBanner,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$MainBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerBg,
                                style: {
                                    backgroundImage: "url(".concat(banner.imgSrc, ")")
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$MainBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContent,
                                children: [
                                    banner.albumArt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: banner.albumArt,
                                        alt: "".concat(banner.title, " Album Art"),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$MainBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerAlbumArt
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
                                        lineNumber: 41,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$MainBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerText,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: banner.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: banner.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shop/ArtistStoreBanner.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ArtistStoreBanner;
const __TURBOPACK__default__export__ = ArtistStoreBanner;
var _c;
__turbopack_context__.k.register(_c, "ArtistStoreBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shop/NoticeSection.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "noticeCategory": "NoticeSection-module__5vFtDW__noticeCategory",
  "noticeList": "NoticeSection-module__5vFtDW__noticeList",
  "noticeTitle": "NoticeSection-module__5vFtDW__noticeTitle",
  "section": "NoticeSection-module__5vFtDW__section",
  "sectionHeader": "NoticeSection-module__5vFtDW__sectionHeader",
  "sectionTitle": "NoticeSection-module__5vFtDW__sectionTitle",
  "viewMore": "NoticeSection-module__5vFtDW__viewMore",
});
}),
"[project]/src/components/shop/NoticeSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/shop/NoticeSection.module.css [app-client] (css module)");
;
;
const NoticeSection = (param)=>{
    let { notices, title } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/NoticeSection.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewMore,
                        children: "더보기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/NoticeSection.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/NoticeSection.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noticeList,
                children: notices.length > 0 ? notices.map((notice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noticeTitle,
                                children: notice.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/NoticeSection.tsx",
                                lineNumber: 33,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/NoticeSection.tsx",
                            lineNumber: 30,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, notice.noticeId, false, {
                        fileName: "[project]/src/components/shop/NoticeSection.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noNotice,
                    children: "등록된 공지가 없습니다."
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/NoticeSection.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shop/NoticeSection.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/NoticeSection.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NoticeSection;
const __TURBOPACK__default__export__ = NoticeSection;
var _c;
__turbopack_context__.k.register(_c, "NoticeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/mockData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// data/mockData.ts (Updated)
__turbopack_context__.s({
    "allArtists": ()=>allArtists,
    "allProducts": ()=>allProducts,
    "bestProducts": ()=>bestProducts,
    "mainBanners": ()=>mainBanners,
    "notices": ()=>notices
});
const mainBanners = [
    {
        imgSrc: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/banner/GL-Main-Banner-240718-V-Solo-2nd-Album-MUSE-1.jpg',
        albumArt: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/p/20240718-V_MUSE_WVS-GL_1Q_FS/a804791e8470a4860b093240212f451f.jpg',
        title: "V 'MUSE'",
        subtitle: "지금 위버스샵에서 예약 판매 중!",
        artistName: 'BTS'
    },
    {
        imgSrc: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/banner/GL-Main-Banner-240715-CLOSE-YOUR-EYES-SNOWY-SUMMER-OFFICIAL-MERCH-1.jpg',
        albumArt: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/p/20240715-CLOSE-YOUR-EYES-SNOWY-SUMMER_ALBUM_1Q_FS/417d47864f7624190840b25d19d8544d.png',
        title: "CLOSE YOUR EYES SNOWY SUMMER",
        subtitle: "OFFICIAL MERCH",
        artistName: 'TOMORROW X TOGETHER'
    }
];
const detailImagePlaceholder = 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/d/20240419-BTS-POP-UP_Permission-to-Dance-in-SEOUL_S-S-T-SHIRT_BK_1Q_FD/18d87635c03c5453e938992147395048.jpg';
const sampleProducts = [
    {
        id: 1,
        name: '[MUSE] Charm of HOPE (Set)',
        price: 98700,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240315-j-hope_SET_1Q_FS/e50058b88301e40348a07722100868a8.jpg',
        category: 'ALBUM',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 2,
        name: '[MUSE] Charm of HOPE (MONO VER.)',
        price: 32900,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240315-j-hope_MONO_1Q_FS/01e51381e05a543f9a746091219b457e.jpg',
        category: 'ALBUM',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 3,
        name: '[MUSE] Charm of HOPE (COLOR VER.)',
        price: 32900,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240315-j-hope_COLOR_1Q_FS/84683f0f3532f41648a1492576b539c3.jpg',
        category: 'ALBUM',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 4,
        name: '[MUSE] Charm of HOPE (Sweet Dreams ver.)',
        price: 32900,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240315-j-hope_SWEET-DREAMS_1Q_FS/a8057e00889984920808a3d3c8c6f212.jpg',
        category: 'ALBUM',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 5,
        name: 'S/S T-shirt (BLACK)',
        price: 59000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240419-BTS-POP-UP_Permission-to-Dance-in-SEOUL_S-S-T-SHIRT_BK_1Q_FS/1f6187515f7564d7fa39a2d0c2e361ac.jpg',
        category: 'TOUR MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 6,
        name: 'ARMY MEMBERSHIP',
        price: 25000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/membership/s/ARMY-MEMBERSHIP_1Q_FS/38171128c682745a999710202e21245e.png',
        category: 'MEMBERSHIP',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 7,
        name: '2025 BTS FESTA : CAPSULE ALBUM Vol.1',
        price: 17800,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240604-2024-BTS-FESTA_CAPSULE-ALBUM_1Q_FS/ac139046f564f4340b08082692226f3b.jpg',
        category: 'MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 8,
        name: 'Tote Bag',
        price: 73000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240419-BTS-POP-UP_Permission-to-Dance-in-SEOUL_TOTE-BAG_1Q_FS/e521098516d7a46879815041a99f1874.jpg',
        category: 'MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 101,
        name: '[TXT X niceghostclub] Windbreaker',
        price: 109000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240426-TXT_niceghostclub_WINDBREAKER_1Q_FS/d1519d5c4149e49188a18357a7990141.jpg',
        category: 'MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 102,
        name: '[TXT X SENTIMENTS] Ring',
        price: 55000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240426-TXT_SENTIMENTS_RING_1Q_FS/67448208442a44b1c855a00a221f7360.jpg',
        category: 'MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 103,
        name: '[TXT X SENTIMENTS] Earring',
        price: 55000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240426-TXT_SENTIMENTS_EARRING_1Q_FS/e403d1964263f45c9944d18e8748382d.jpg',
        category: 'MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 104,
        name: 'Belt',
        price: 36000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240426-TXT_WORLD-TOUR_BELT_1Q_FS/25367675e46644f8f830635e98544e3f.jpg',
        category: 'TOUR MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 105,
        name: 'Official Light Stick Ver.2',
        price: 49000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240219-TXT_LIGHT-STICK-VER-2_1Q_FS/c901e637149d54e56b464019277f070b.jpg',
        category: 'MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 201,
        name: 'SEVENTEEN TOUR \'FOLLOW\' AGAIN TO SEOUL T-SHIRT',
        price: 45000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20240412-SVT_TOUR-FOLLOW-AGAIN-TO-SEOUL_S-S-T-SHIRT_WH_1Q_FS/4462153c3e8034d6185854612348981f.jpg',
        category: 'TOUR MERCH',
        detailImageUrl: detailImagePlaceholder
    },
    {
        id: 202,
        name: 'SEVENTEEN OFFICIAL LIGHT STICK VER.3',
        price: 62000,
        imageUrl: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/merch/s/20230818-SVT_LIGHT-STICK-VER-3_1Q_FS/0161476d05f8841459a0f0270a417641.jpg',
        category: 'MERCH',
        detailImageUrl: detailImagePlaceholder
    }
];
const assignProducts = ()=>sampleProducts.sort(()=>0.5 - Math.random()).slice(0, Math.floor(Math.random() * 6) + 6);
const allArtists = [
    {
        id: 1,
        name: 'BTS',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/3/logo/001_logo_1676529241584.png',
        products: assignProducts(),
        banners: [
            {
                imgSrc: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/banner/GL-Artist-Banner-240419-BTS-POP-UP-PERMISSION-TO-DANCE-in-SEOUL-1.jpg',
                title: 'BTS POP-UP',
                subtitle: 'Permission to Dance in SEOUL'
            },
            {
                imgSrc: 'https://weverseshop.io/weverseshop-cdn/media/kr/shop/banner/GL-Artist-Banner-240718-V-Solo-2nd-Album-MUSE-1.jpg',
                title: '[SPECIAL GIFT] Charm of HOPE',
                subtitle: '지금 바로 만나보세요'
            }
        ]
    },
    {
        id: 2,
        name: 'TOMORROW X TOGETHER',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/4/logo/001_logo_1676529252045.png',
        products: assignProducts()
    },
    {
        id: 4,
        name: 'SEVENTEEN',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/5/logo/001_logo_1676529261390.png',
        products: assignProducts()
    },
    {
        id: 5,
        name: 'fromis_9',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/14/logo/001_logo_1676529348982.png',
        products: assignProducts()
    },
    {
        id: 9,
        name: 'ENHYPEN',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/8/logo/001_logo_1676529294248.png',
        products: assignProducts()
    },
    {
        id: 10,
        name: 'LE SSERAFIM',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/43/logo/001_logo_1676529643485.png',
        products: assignProducts()
    },
    {
        id: 11,
        name: 'NewJeans',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/52/logo/001_logo_1676529732194.png',
        products: assignProducts()
    },
    {
        id: 8,
        name: 'TWS',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/70/logo/001_logo_1705541609139.png',
        products: assignProducts()
    },
    {
        id: 3,
        name: 'GFRIEND',
        logoUrl: 'https://weverseshop.io/weverseshop-cdn/media/jp/shop/artist/12/logo/001_logo_1676529330666.png',
        products: assignProducts()
    }
];
const allProducts = allArtists.flatMap((artist)=>artist.products.map((product)=>({
            ...product,
            artistName: artist.name
        })));
const bestProducts = [
    ...allProducts
].sort(()=>0.5 - Math.random()).slice(0, 8);
const notices = [
    {
        id: 1,
        category: 'Service',
        title: 'Weverse Shop 개인정보처리방침 개정 안내 (2024.08.08)'
    },
    {
        id: 2,
        category: 'Service',
        title: 'Weverse Shop 이용약관 개정 안내 (2024.08.08)'
    },
    {
        id: 3,
        category: 'Artist',
        title: 'V Solo Album ‘MUSE’ 예약 판매 안내'
    },
    {
        id: 4,
        category: 'Artist',
        title: 'TOMORROW X TOGETHER minisode 3: TOMORROW with Apple Music...'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/ArtistStorePage.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "ArtistStorePage-module__MH0P5q__active",
  "container": "ArtistStorePage-module__MH0P5q__container",
  "contentGrid": "ArtistStorePage-module__MH0P5q__contentGrid",
  "moreButton": "ArtistStorePage-module__MH0P5q__moreButton",
  "moreButtonWrapper": "ArtistStorePage-module__MH0P5q__moreButtonWrapper",
  "notFound": "ArtistStorePage-module__MH0P5q__notFound",
  "productCard": "ArtistStorePage-module__MH0P5q__productCard",
  "productGrid": "ArtistStorePage-module__MH0P5q__productGrid",
  "productImage": "ArtistStorePage-module__MH0P5q__productImage",
  "productImageWrapper": "ArtistStorePage-module__MH0P5q__productImageWrapper",
  "productInfo": "ArtistStorePage-module__MH0P5q__productInfo",
  "productName": "ArtistStorePage-module__MH0P5q__productName",
  "productPrice": "ArtistStorePage-module__MH0P5q__productPrice",
  "productsSection": "ArtistStorePage-module__MH0P5q__productsSection",
  "sectionTitle": "ArtistStorePage-module__MH0P5q__sectionTitle",
  "sidebar": "ArtistStorePage-module__MH0P5q__sidebar",
  "tabButton": "ArtistStorePage-module__MH0P5q__tabButton",
  "tabs": "ArtistStorePage-module__MH0P5q__tabs",
});
}),
"[project]/src/components/shop/ProductCard.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardLink": "ProductCard-module__6z8Uqa__cardLink",
  "productCard": "ProductCard-module__6z8Uqa__productCard",
  "productImage": "ProductCard-module__6z8Uqa__productImage",
  "productImageWrapper": "ProductCard-module__6z8Uqa__productImageWrapper",
  "productInfo": "ProductCard-module__6z8Uqa__productInfo",
  "productName": "ProductCard-module__6z8Uqa__productName",
  "productPrice": "ProductCard-module__6z8Uqa__productPrice",
});
}),
"[project]/src/components/shop/ProductCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/shop/ProductCard.tsx (Updated)
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// import { Product } from '@/data/mockData'; // 목업 데이터 제거
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/shop/ProductCard.module.css [app-client] (css module)");
;
;
;
const ProductCard = (param)=>{
    let { product } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/shop/products/".concat(product.productId),
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLink,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImageWrapper,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: product.productImage,
                        alt: product.productName,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/ProductCard.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/ProductCard.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productInfo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productName,
                                children: product.productName
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/ProductCard.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/ProductCard.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productPrice,
                            children: [
                                product.price.toLocaleString(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "원"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/ProductCard.tsx",
                                    lineNumber: 32,
                                    columnNumber: 45
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shop/ProductCard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shop/ProductCard.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shop/ProductCard.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shop/ProductCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/shop/[artistName]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/shop/[artistName]/page.tsx (Updated)
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ArtistStoreBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/ArtistStoreBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/NoticeSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArtistStorePage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/ProductCard.tsx [app-client] (ecmascript)"); // Import the shared, linked ProductCard
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const ArtistStorePage = ()=>{
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const artistName = decodeURIComponent(params.artistName);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('MERCH');
    const artist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArtistStorePage.useMemo[artist]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allArtists"].find({
                "ArtistStorePage.useMemo[artist]": (a)=>a.name === artistName
            }["ArtistStorePage.useMemo[artist]"])
    }["ArtistStorePage.useMemo[artist]"], [
        artistName
    ]);
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArtistStorePage.useMemo[products]": ()=>{
            if (!artist) return [];
            // In a real app, you would filter products based on the active tab.
            // Here, we're just showing the first 6 products for demonstration.
            return artist.products.slice(0, 6);
        }
    }["ArtistStorePage.useMemo[products]"], [
        artist,
        activeTab
    ]);
    if (!artist) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notFound,
                        children: "아티스트를 찾을 수 없습니다."
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    const hasBanners = artist.banners && artist.banners.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    hasBanners && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ArtistStoreBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        banners: artist.banners
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 24
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productsSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: "Products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabs,
                                        children: [
                                            'MERCH',
                                            'ALBUM',
                                            'TOUR MERCH',
                                            'DVD/MEDIA'
                                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === tab ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                                                onClick: ()=>setActiveTab(tab),
                                                children: tab
                                            }, tab, false, {
                                                fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGrid,
                                        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                product: product
                                            }, product.id, false, {
                                                fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreButtonWrapper,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/shop/".concat(encodeURIComponent(artist.name), "/all"),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreButton,
                                            children: "더보기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArtistStorePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        notices: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notices"],
                                        title: "Notice"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$NoticeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        notices: [],
                                        title: "Event"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/shop/[artistName]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ArtistStorePage, "Bbb5fcS+JfY7+NLdOe4h7XZL5KM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ArtistStorePage;
const __TURBOPACK__default__export__ = ArtistStorePage;
var _c;
__turbopack_context__.k.register(_c, "ArtistStorePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a44b7099._.js.map