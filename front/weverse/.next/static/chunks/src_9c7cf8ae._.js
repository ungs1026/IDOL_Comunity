(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/styles/ProductDetailPage.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionButtons": "ProductDetailPage-module__c7lgqW__actionButtons",
  "active": "ProductDetailPage-module__c7lgqW__active",
  "artistName": "ProductDetailPage-module__c7lgqW__artistName",
  "buyButton": "ProductDetailPage-module__c7lgqW__buyButton",
  "cautionsContent": "ProductDetailPage-module__c7lgqW__cautionsContent",
  "container": "ProductDetailPage-module__c7lgqW__container",
  "detailImage": "ProductDetailPage-module__c7lgqW__detailImage",
  "divider": "ProductDetailPage-module__c7lgqW__divider",
  "imageWrapper": "ProductDetailPage-module__c7lgqW__imageWrapper",
  "infoWrapper": "ProductDetailPage-module__c7lgqW__infoWrapper",
  "notFound": "ProductDetailPage-module__c7lgqW__notFound",
  "productDetails": "ProductDetailPage-module__c7lgqW__productDetails",
  "productImage": "ProductDetailPage-module__c7lgqW__productImage",
  "productName": "ProductDetailPage-module__c7lgqW__productName",
  "productPrice": "ProductDetailPage-module__c7lgqW__productPrice",
  "productSummary": "ProductDetailPage-module__c7lgqW__productSummary",
  "quantityControls": "ProductDetailPage-module__c7lgqW__quantityControls",
  "quantitySelector": "ProductDetailPage-module__c7lgqW__quantitySelector",
  "relatedProductsSection": "ProductDetailPage-module__c7lgqW__relatedProductsSection",
  "tabButton": "ProductDetailPage-module__c7lgqW__tabButton",
  "tabContent": "ProductDetailPage-module__c7lgqW__tabContent",
  "tabHeader": "ProductDetailPage-module__c7lgqW__tabHeader",
  "totalPrice": "ProductDetailPage-module__c7lgqW__totalPrice",
  "totalPriceSection": "ProductDetailPage-module__c7lgqW__totalPriceSection",
});
}),
"[project]/src/components/shop/BestProductSection.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "desktopOnly": "BestProductSection-module__f-qBmG__desktopOnly",
  "mobileOnly": "BestProductSection-module__f-qBmG__mobileOnly",
  "productCard": "BestProductSection-module__f-qBmG__productCard",
  "productGrid": "BestProductSection-module__f-qBmG__productGrid",
  "productImage": "BestProductSection-module__f-qBmG__productImage",
  "productImageWrapper": "BestProductSection-module__f-qBmG__productImageWrapper",
  "productInfo": "BestProductSection-module__f-qBmG__productInfo",
  "productName": "BestProductSection-module__f-qBmG__productName",
  "productPrice": "BestProductSection-module__f-qBmG__productPrice",
  "productSlider": "BestProductSection-module__f-qBmG__productSlider",
  "section": "BestProductSection-module__f-qBmG__section",
  "sectionHeader": "BestProductSection-module__f-qBmG__sectionHeader",
  "sectionTitle": "BestProductSection-module__f-qBmG__sectionTitle",
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
"[project]/src/components/shop/BestProductSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/shop/BestProductSection.tsx (Updated)
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/grid.mjs [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/shop/BestProductSection.module.css [app-client] (css module)");
// import { Product } from '@/data/mockData'; // 목업 데이터 제거
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/ProductCard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const BestProductSection = (param)=>{
    let { products, title = "Best" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/BestProductSection.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shop/BestProductSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGrid, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopOnly),
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.productId, false, {
                        fileName: "[project]/src/components/shop/BestProductSection.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/shop/BestProductSection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productSlider, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileOnly),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                    ],
                    spaceBetween: 15,
                    slidesPerView: 2.2,
                    navigation: true,
                    grid: {
                        rows: 2,
                        fill: 'row'
                    },
                    className: "best-product-swiper",
                    children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            style: {
                                height: 'auto'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/BestProductSection.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, product.productId, false, {
                            fileName: "[project]/src/components/shop/BestProductSection.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/BestProductSection.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shop/BestProductSection.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/BestProductSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BestProductSection;
const __TURBOPACK__default__export__ = BestProductSection;
var _c;
__turbopack_context__.k.register(_c, "BestProductSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/shop/products/[productId]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/shop/products/[productId]/page.tsx (Modified)
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ProductDetailPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/BestProductSection.tsx [app-client] (ecmascript)");
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
const ProductDetailPage = ()=>{
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const productId = params.productId;
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('details');
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[product]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProducts"].find({
                "ProductDetailPage.useMemo[product]": (p)=>p.id === parseInt(productId)
            }["ProductDetailPage.useMemo[product]"])
    }["ProductDetailPage.useMemo[product]"], [
        productId
    ]);
    const relatedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[relatedProducts]": ()=>{
            if (!product) return [];
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProducts"].filter({
                "ProductDetailPage.useMemo[relatedProducts]": (p)=>p.artistName === product.artistName && p.id !== product.id
            }["ProductDetailPage.useMemo[relatedProducts]"]).slice(0, 5);
        }
    }["ProductDetailPage.useMemo[relatedProducts]"], [
        product
    ]);
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notFound,
                        children: "상품을 찾을 수 없습니다."
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    const handleQuantityChange = (amount)=>{
        setQuantity((prev)=>Math.max(1, prev + amount));
    };
    const totalPrice = product.price * quantity;
    const handlePurchase = ()=>{
        // 결제 페이지로 이동하면서 상품 정보를 쿼리 파라미터로 전달
        router.push("/shop/checkout?productId=".concat(product.id, "&quantity=").concat(quantity, "&totalPrice=").concat(totalPrice));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productSummary,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.imageUrl,
                                    alt: product.name,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].artistName,
                                        children: [
                                            product.artistName,
                                            " >"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productName,
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productPrice,
                                        children: [
                                            product.price.toLocaleString(),
                                            "원"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quantitySelector,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "수량"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quantityControls,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleQuantityChange(-1),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMinus"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 66
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: quantity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleQuantityChange(1),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 65
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalPriceSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "총 상품 금액"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalPrice,
                                                children: [
                                                    totalPrice.toLocaleString(),
                                                    "원"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButtons,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buyButton,
                                            onClick: handlePurchase,
                                            children: "구매하기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === 'details' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                                        onClick: ()=>setActiveTab('details'),
                                        children: "상세정보"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === 'cautions' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                                        onClick: ()=>setActiveTab('cautions'),
                                        children: "유의사항"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabContent,
                                children: [
                                    activeTab === 'details' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsContent,
                                        children: product.detailImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: product.detailImageUrl,
                                            alt: "".concat(product.name, " 상세 정보"),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailImage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "상세 정보 이미지가 없습니다."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeTab === 'cautions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cautionsContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "교환/환불 안내"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "- 상품을 수령하신 날로부터 7일 이내에만 교환/환불이 가능합니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "- 고객의 부주의로 인한 상품 훼손 및 포장 개봉의 경우 교환/환불이 불가합니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "유의사항"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "- 본 상품은 한정 수량으로 제작되어 조기 품절될 수 있습니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    relatedProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ProductDetailPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relatedProductsSection,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$BestProductSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            products: relatedProducts,
                            title: "".concat(product.artistName, "의 다른 상품")
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                            lineNumber: 130,
                            columnNumber: 18
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/shop/products/[productId]/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ProductDetailPage, "jtPkjDQun3wuiWQpp5JalBXDrcA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductDetailPage;
const __TURBOPACK__default__export__ = ProductDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9c7cf8ae._.js.map