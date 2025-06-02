"use strict";
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 2319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReactAPIPage)
});

// EXTERNAL MODULE: external "/Users/yvonnetran/Desktop/Deployment of Web Applications/wdv463_memory_lane_assignment/memory-lane-blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(2052);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/images/api-structure.png
/* harmony default export */ const api_structure = ("/static/api-structure-58630d52f530e659e7c9c80b6b5dba31.png");
;// ./src/pages/api-best-practices.js
function ReactAPIPage(){return/*#__PURE__*/index_js_default().createElement("main",{className:"max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"inline-block mb-6 text-indigo-600 hover:underline font-semibold"},"\u2190 Back to Home"),/*#__PURE__*/index_js_default().createElement("h1",{className:"text-3xl font-bold text-indigo-600 mb-4"},"Best Practices for Using APIs Within React"),/*#__PURE__*/index_js_default().createElement("img",{src:api_structure,alt:"React API Flow",className:"rounded-lg shadow-lg mb-6"}),/*#__PURE__*/index_js_default().createElement("p",{className:"mb-4"},"When using APIs in React, organizing your fetch logic and separating concerns is key to building maintainable applications. It also helps avoid unnecessary re-renders and improves performance."),/*#__PURE__*/index_js_default().createElement("ul",{className:"list-disc list-inside space-y-2"},/*#__PURE__*/index_js_default().createElement("li",null,"\u2705 ",/*#__PURE__*/index_js_default().createElement("strong",null,"Use `useEffect` + `fetch` or `axios`"),": Always call APIs in `useEffect` when components mount."),/*#__PURE__*/index_js_default().createElement("li",null,"\u2705 ",/*#__PURE__*/index_js_default().createElement("strong",null,"Abstract API logic"),": Move `fetch` or `axios` logic into helper files for reuse."),/*#__PURE__*/index_js_default().createElement("li",null,"\u2705 ",/*#__PURE__*/index_js_default().createElement("strong",null,"Handle errors"),": Wrap calls in `try/catch` and display fallback UI when needed."),/*#__PURE__*/index_js_default().createElement("li",null,"\u2705 ",/*#__PURE__*/index_js_default().createElement("strong",null,"Use `useState` and `useReducer` wisely"),": Store response data cleanly and update only when needed."),/*#__PURE__*/index_js_default().createElement("li",null,"\u2705 ",/*#__PURE__*/index_js_default().createElement("strong",null,"Debounce inputs"),": When searching or filtering via API, debounce user input to reduce calls.")),/*#__PURE__*/index_js_default().createElement("p",{className:"mt-4"},"Following these best practices can help make your API integration clean, responsive, and future-proof."));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-api-best-practices-js.js.map