(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{294:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"pagination"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagination"}},[a._v("#")]),a._v(" Pagination")]),a._v(" "),s("p",[a._v("Two approaches are offered to set pagination. A cursor-based and a page-based approach.")]),a._v(" "),s("h2",{attrs:{id:"limit-offset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limit-offset"}},[a._v("#")]),a._v(" Limit & Offset")]),a._v(" "),s("p",[s("code",[a._v("limit()")]),a._v(" and "),s("code",[a._v("offset()")]),a._v(" allow you to limit your results, via a traditional cursor-based pagination.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$response")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$client")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("limit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("offset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[a._v("/users?limit=10&offset=5\n")])])])]),a._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[a._v("/users?page[limit]=10&page[offset]=5\n")])])])]),a._v(" "),s("Tab",{attrs:{label:"odata"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[a._v("/users?$top=10&$skip=5\n")])])])])],1),a._v(" "),s("h3",{attrs:{id:"take-skip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#take-skip"}},[a._v("#")]),a._v(" Take & Skip")]),a._v(" "),s("p",[s("code",[a._v("take()")]),a._v(" and "),s("code",[a._v("skip()")]),a._v(" are aliases for "),s("code",[a._v("limit()")]),a._v(" and "),s("code",[a._v("offset()")]),a._v(".\nThese have been added for the sake of convenience and are inspired by Laravel's "),s("a",{attrs:{href:"https://laravel.com/docs/7.x/queries#ordering-grouping-limit-and-offset",target:"_blank",rel:"noopener noreferrer"}},[a._v("Query Builder"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$response")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$client")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("take")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("skip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[a._v("/users?limit=10&offset=5\n")])])])]),a._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[a._v("/users?page[limit]=10&page[offset]=5\n")])])])]),a._v(" "),s("Tab",{attrs:{label:"odata"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[a._v("/users?$top=10&$skip=5\n")])])])])],1),a._v(" "),s("h2",{attrs:{id:"page-show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-show"}},[a._v("#")]),a._v(" Page & Show")]),a._v(" "),s("p",[a._v("If supported by the target API, you can use the page-based pagination methods instead.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$response")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$client")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[a._v("/users?page=3&show=25\n")])])])]),a._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[a._v("/users?page[number]=3&page[size]=25\n")])])])]),a._v(" "),s("Tab",{attrs:{label:"odata"}},[s("p",[s("strong",[a._v("Warning")]),a._v(": "),s("em",[a._v("Page-based pagination is not supported by OData")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/users\n")])])])])],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);