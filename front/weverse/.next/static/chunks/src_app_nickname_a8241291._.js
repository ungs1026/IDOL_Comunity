(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/nickname/nickname.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "nickname-module__qKqy4W__button",
  "container": "nickname-module__qKqy4W__container",
  "form": "nickname-module__qKqy4W__form",
  "input": "nickname-module__qKqy4W__input",
  "label": "nickname-module__qKqy4W__label",
  "profileImage": "nickname-module__qKqy4W__profileImage",
  "title": "nickname-module__qKqy4W__title",
});
}),
"[project]/src/app/nickname/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/nickname/nickname.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const NicknamePage = ()=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const artistName = searchParams.get('artistName');
    const artistId = searchParams.get('artistId'); // Assuming artistId is also passed from MemberCard
    const groupId = searchParams.get('groupId'); // Assuming artistId is also passed from MemberCard
    const memberName = searchParams.get('memberName');
    const memberImage = searchParams.get('memberImage');
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleNicknameChange = (e)=>{
        setNickname(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (nickname.length < 6) {
            alert('닉네임은 6글자 이상 작성해야됩니다.');
        } else {
            router.push("/artist-sns?artistId=".concat(artistId, "&groupId=").concat(groupId, "&artistName=").concat(artistName).concat(memberName ? "&memberName=".concat(memberName) : ''));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: [
                    artistName,
                    " 위버스에 가입하고 최신 콘텐츠를 즐겨보세요!",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/nickname/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "위버스에서 사용할 닉네임을 입력해주세요."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/nickname/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                onSubmit: handleSubmit,
                children: [
                    memberImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileImageContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "userIcon.jpg",
                            alt: memberName || 'Profile',
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileImage
                        }, void 0, false, {
                            fileName: "[project]/src/app/nickname/page.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/nickname/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "nickname",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: "닉네임"
                    }, void 0, false, {
                        fileName: "[project]/src/app/nickname/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        id: "nickname",
                        placeholder: "닉네임을 입력하세요",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        value: nickname,
                        onChange: handleNicknameChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/nickname/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nickname$2f$nickname$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                        children: "완료"
                    }, void 0, false, {
                        fileName: "[project]/src/app/nickname/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/nickname/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/nickname/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NicknamePage, "w83wG6w/6C4Itto9A588H2a8TXo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NicknamePage;
const __TURBOPACK__default__export__ = NicknamePage;
var _c;
__turbopack_context__.k.register(_c, "NicknamePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_nickname_a8241291._.js.map