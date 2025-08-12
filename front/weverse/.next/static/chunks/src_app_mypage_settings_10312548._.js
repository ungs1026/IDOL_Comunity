(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/mypage/settings/settings.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "changeButton": "settings-module__gMtcNa__changeButton",
  "connectButton": "settings-module__gMtcNa__connectButton",
  "container": "settings-module__gMtcNa__container",
  "content": "settings-module__gMtcNa__content",
  "deleteAccount": "settings-module__gMtcNa__deleteAccount",
  "infoGrid": "settings-module__gMtcNa__infoGrid",
  "infoLabel": "settings-module__gMtcNa__infoLabel",
  "infoRow": "settings-module__gMtcNa__infoRow",
  "infoValue": "settings-module__gMtcNa__infoValue",
  "policyItem": "settings-module__gMtcNa__policyItem",
  "policyList": "settings-module__gMtcNa__policyList",
  "section": "settings-module__gMtcNa__section",
  "sectionTitle": "settings-module__gMtcNa__sectionTitle",
  "serviceButton": "settings-module__gMtcNa__serviceButton",
  "serviceDate": "settings-module__gMtcNa__serviceDate",
  "serviceItem": "settings-module__gMtcNa__serviceItem",
  "serviceName": "settings-module__gMtcNa__serviceName",
  "settingDesc": "settings-module__gMtcNa__settingDesc",
  "settingLabel": "settings-module__gMtcNa__settingLabel",
  "settingRow": "settings-module__gMtcNa__settingRow",
  "slider": "settings-module__gMtcNa__slider",
  "snsItem": "settings-module__gMtcNa__snsItem",
  "snsList": "settings-module__gMtcNa__snsList",
  "toggleSwitch": "settings-module__gMtcNa__toggleSwitch",
});
}),
"[project]/src/app/mypage/settings/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SettingsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/mypage/settings/settings.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// 커스텀 토글 스위치 컴포넌트 (기존 코드 유지)
const ToggleSwitch = (param)=>{
    let { id, checked, onChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: id,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleSwitch,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                id: id,
                checked: checked,
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/settings/page.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/settings/page.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/mypage/settings/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ToggleSwitch;
function SettingsPage() {
    _s();
    const { token, isAuthenticated, isLoading: isAuthLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // 인라인 편집을 위한 상태
    const [isEditingNickname, setIsEditingNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newNickname, setNewNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isEditingName, setIsEditingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newName, setNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        promotional: false,
        night: false,
        personalizedAds: false
    });
    const handleToggle = (e)=>{
        const { id, checked } = e.target;
        setNotifications((prev)=>({
                ...prev,
                [id]: checked
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPage.useEffect": ()=>{
            if (isAuthLoading) {
                return; // AuthContext 로딩 완료 대기
            }
            if (!isAuthenticated || !token) {
                setLoading(false);
                setError('로그인이 필요합니다.');
                return;
            }
            const fetchUserData = {
                "SettingsPage.useEffect.fetchUserData": async ()=>{
                    try {
                        const response = await fetch('http://localhost:80/api/user/me', {
                            headers: {
                                'Authorization': "Bearer ".concat(token)
                            }
                        });
                        if (response.ok) {
                            const data = await response.json();
                            setUserData(data);
                            setNewNickname(data.nickname || '');
                            setNewName(data.name || '');
                        } else {
                            const errorText = await response.text();
                            setError("사용자 정보를 불러오는데 실패했습니다: ".concat(errorText));
                        }
                    } catch (err) {
                        setError('네트워크 오류가 발생했습니다.');
                        console.error(err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["SettingsPage.useEffect.fetchUserData"];
            fetchUserData();
        }
    }["SettingsPage.useEffect"], [
        token,
        isAuthenticated,
        isAuthLoading
    ]);
    const handleUpdateProfile = async (field, value)=>{
        setMessage('');
        setError('');
        setLoading(true);
        try {
            const updateData = {};
            updateData[field] = value;
            const response = await fetch('http://localhost:80/api/user/me', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify(updateData)
            });
            if (response.ok) {
                setMessage("".concat(field === 'nickname' ? '닉네임' : '이름', "이 성공적으로 업데이트되었습니다."));
                setUserData((prev)=>({
                        ...prev,
                        [field]: value
                    }));
                if (field === 'nickname') setIsEditingNickname(false);
                if (field === 'name') setIsEditingName(false);
            } else {
                const errorText = await response.text();
                setError("정보 업데이트에 실패했습니다: ".concat(errorText));
            }
        } catch (err) {
            setError('네트워크 오류가 발생했습니다.');
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    const handleChangePassword = async ()=>{
        setMessage('');
        setError('');
        const newPass = prompt("새 비밀번호를 입력하세요:");
        if (!newPass) {
            setMessage("비밀번호 변경이 취소되었습니다.");
            return;
        }
        const confirmPass = prompt("새 비밀번호를 다시 입력하세요:");
        if (newPass !== confirmPass) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('http://localhost:80/api/user/me', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                    password: newPass
                })
            });
            if (response.ok) {
                setMessage("비밀번호가 성공적으로 변경되었습니다.");
            } else {
                const errorText = await response.text();
                setError("비밀번호 변경에 실패했습니다: ".concat(errorText));
            }
        } catch (err) {
            setError('네트워크 오류가 발생했습니다.');
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "로딩 중..."
                }, void 0, false, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 160,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/settings/page.tsx",
                lineNumber: 159,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/mypage/settings/page.tsx",
            lineNumber: 158,
            columnNumber: 13
        }, this);
    }
    if (error && error !== '로그인이 필요합니다.') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "오류: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 170,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/settings/page.tsx",
                lineNumber: 169,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/mypage/settings/page.tsx",
            lineNumber: 168,
            columnNumber: 13
        }, this);
    }
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 180,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/settings/page.tsx",
                lineNumber: 179,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/mypage/settings/page.tsx",
            lineNumber: 178,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                            children: "내 정보"
                        }, void 0, false, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                            children: "이메일"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                            children: (userData === null || userData === void 0 ? void 0 : userData.email) || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                            children: "닉네임"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 29
                                        }, this),
                                        isEditingNickname ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newNickname,
                                            onChange: (e)=>setNewNickname(e.target.value),
                                            style: {
                                                flexGrow: 1,
                                                padding: '4px',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                            children: (userData === null || userData === void 0 ? void 0 : userData.nickname) || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 33
                                        }, this),
                                        isEditingNickname ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleUpdateProfile('nickname', newNickname),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeButton,
                                                    style: {
                                                        marginLeft: '8px',
                                                        backgroundColor: '#28a745',
                                                        color: 'white',
                                                        border: 'none'
                                                    },
                                                    children: "저장"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setIsEditingNickname(false);
                                                        setNewNickname((userData === null || userData === void 0 ? void 0 : userData.nickname) || '');
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeButton,
                                                    style: {
                                                        marginLeft: '8px',
                                                        backgroundColor: '#6c757d',
                                                        color: 'white',
                                                        border: 'none'
                                                    },
                                                    children: "취소"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsEditingNickname(true),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeButton,
                                            children: "변경"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                            children: "이름"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 29
                                        }, this),
                                        isEditingName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newName,
                                            onChange: (e)=>setNewName(e.target.value),
                                            style: {
                                                flexGrow: 1,
                                                padding: '4px',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                            children: (userData === null || userData === void 0 ? void 0 : userData.name) || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this),
                                        isEditingName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleUpdateProfile('name', newName),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeButton,
                                                    style: {
                                                        marginLeft: '8px',
                                                        backgroundColor: '#28a745',
                                                        color: 'white',
                                                        border: 'none'
                                                    },
                                                    children: "저장"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setIsEditingName(false);
                                                        setNewName((userData === null || userData === void 0 ? void 0 : userData.name) || '');
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeButton,
                                                    style: {
                                                        marginLeft: '8px',
                                                        backgroundColor: '#6c757d',
                                                        color: 'white',
                                                        border: 'none'
                                                    },
                                                    children: "취소"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsEditingName(true),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeButton,
                                            children: "변경"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                            children: "비밀번호"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                            children: "●●●●●●●●"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleChangePassword,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeButton,
                                            children: "변경"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                            children: "국가"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                            children: (userData === null || userData === void 0 ? void 0 : userData.country) || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                            children: "SMS 인증"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                            children: (userData === null || userData === void 0 ? void 0 : userData.isSmsVerified) ? '인증됨' : '인증 정보가 없습니다.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 192,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 190,
                    columnNumber: 17
                }, this),
                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'green',
                        textAlign: 'center',
                        marginTop: '20px'
                    },
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 275,
                    columnNumber: 29
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'red',
                        textAlign: 'center',
                        marginTop: '20px'
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 276,
                    columnNumber: 27
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                            children: "연결된 SNS 계정"
                        }, void 0, false, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 280,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGoogle"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "구글"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connectButton,
                                            children: "연결하기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "트위터"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 52
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connectButton,
                                            children: "연결하기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 68
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snsItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaApple"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "애플"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connectButton,
                                            children: "연결하기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 65
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 281,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 279,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                            children: "연결된 서비스"
                        }, void 0, false, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 296,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serviceItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://weverse.io/favicon.ico",
                                    alt: "Weverse logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serviceName,
                                            children: "Weverse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serviceDate,
                                            children: [
                                                "가입일 ",
                                                (userData === null || userData === void 0 ? void 0 : userData.createdAt) ? new Date(userData.createdAt).toLocaleDateString() : 'N/A'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serviceButton,
                                    children: "서비스 탈퇴"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 297,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 295,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                            children: "이벤트 • 혜택 알림 설정"
                        }, void 0, false, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 309,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                            children: "광고성 정보 알림 받기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDesc,
                                            children: "아티스트의 최신 소식과 이벤트 정보부터 위버스 공식 상품에 대한 소식까지 알림으로 빠르게 받아보세요."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                    id: "promotional",
                                    checked: notifications.promotional,
                                    onChange: handleToggle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 310,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                            children: "야간 알림 받기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDesc,
                                            children: "오후 9시-오전 8시(KST)에도 아티스트의 중요한 이벤트와 혜택 알림을 놓치지 않고 받을 수 있어요."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                    id: "night",
                                    checked: notifications.night,
                                    onChange: handleToggle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 317,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 308,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                            children: "맞춤형 광고 및 서비스 보기"
                        }, void 0, false, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 328,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                            children: "맞춤형 광고 보기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDesc,
                                            children: "나의 관심사와 연관된 맞춤형 광고를 우선적으로 제공해 드려요."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                    id: "personalizedAds",
                                    checked: notifications.personalizedAds,
                                    onChange: handleToggle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 329,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 327,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                            children: "약관 및 정책"
                        }, void 0, false, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 340,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].policyList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].policyItem,
                                    children: [
                                        "개인정보처리방침 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].policyItem,
                                    children: [
                                        "이용약관 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
                                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mypage/settings/page.tsx",
                            lineNumber: 341,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 339,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mypage$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteAccount,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        children: "위버스 계정 탈퇴하기"
                    }, void 0, false, {
                        fileName: "[project]/src/app/mypage/settings/page.tsx",
                        lineNumber: 348,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/mypage/settings/page.tsx",
                    lineNumber: 347,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/mypage/settings/page.tsx",
            lineNumber: 188,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/mypage/settings/page.tsx",
        lineNumber: 187,
        columnNumber: 9
    }, this);
}
_s(SettingsPage, "sWqfseeqAQr1SBTkOou+L4P1fAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c1 = SettingsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToggleSwitch");
__turbopack_context__.k.register(_c1, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_mypage_settings_10312548._.js.map