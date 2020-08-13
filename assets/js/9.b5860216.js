(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{217:function(t,a,e){"use strict";e.r(a);var s=e(6),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("p",[t._v('The following are the events that the circuit breaker dispatches.\nThese can, for instance, be used to create "service monitoring" logic.')]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#has-closed"}},[t._v("Has Closed")])]),e("li",[e("a",{attrs:{href:"#has-open"}},[t._v("Has Open")])]),e("li",[e("a",{attrs:{href:"#has-half-open"}},[t._v("Has Half-Open")])]),e("li",[e("a",{attrs:{href:"#failure-reported"}},[t._v("Failure Reported")])])])]),e("p"),t._v(" "),e("p",[t._v("Each of these events offer the following methods:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("state()")]),t._v(": Returns the circuit breaker's current "),e("code",[t._v("State")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("lastFailure()")]),t._v(": Returns the last reported "),e("code",[t._v("Failure")]),t._v(" or "),e("code",[t._v("null")]),t._v(", if none available.")])]),t._v(" "),e("p",[t._v("Both "),e("code",[t._v("State")]),t._v(" and "),e("code",[t._v("Failure")]),t._v(" are immutable objects.\nPlease review "),e("code",[t._v("Aedart\\Contracts\\Circuits\\State")]),t._v(" and "),e("code",[t._v("Aedart\\Contracts\\Circuits\\Failure")]),t._v(" for additional information.")]),t._v(" "),e("h2",{attrs:{id:"has-closed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#has-closed"}},[t._v("#")]),t._v(" Has Closed")]),t._v(" "),e("p",[e("code",[t._v("Aedart\\Contracts\\Circuits\\Events\\HasClosed")]),t._v(" is dispatched when state, is changed to "),e("em",[t._v("Closed")]),t._v(" state ("),e("em",[t._v("initial / success state")]),t._v(").")]),t._v(" "),e("h2",{attrs:{id:"has-open"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#has-open"}},[t._v("#")]),t._v(" Has Open")]),t._v(" "),e("p",[e("code",[t._v("Aedart\\Contracts\\Circuits\\Events\\HasOpened")]),t._v(" is dispatched when state, is changed to "),e("em",[t._v("Open")]),t._v(" state ("),e("em",[t._v("circuit has tripped / failure state")]),t._v(").")]),t._v(" "),e("h2",{attrs:{id:"has-half-open"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#has-half-open"}},[t._v("#")]),t._v(" Has Half-Open")]),t._v(" "),e("p",[e("code",[t._v("Aedart\\Contracts\\Circuits\\Events\\HasHalfOpened")]),t._v(" is dispatched when state, is changed to "),e("em",[t._v("Half-Open")]),t._v(" state ("),e("em",[t._v("intermediate state / recovery attempt state")]),t._v(").")]),t._v(" "),e("h2",{attrs:{id:"failure-reported"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#failure-reported"}},[t._v("#")]),t._v(" Failure Reported")]),t._v(" "),e("p",[t._v("Whenever a failure has been reported, "),e("code",[t._v("Aedart\\Contracts\\Circuits\\Events\\FailureReported")]),t._v(" is dispatched.\nThis event offers a "),e("code",[t._v("failure()")]),t._v(" method. It guarantees to return a "),e("code",[t._v("Failure")]),t._v(" object, that contains information about the reported failure.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Aedart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Circuits"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("FailureReported")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotifyOnWhetherServiceFailure")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FailureReported "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$failure")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("failure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$reason")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$failure")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reason")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$failureTime")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$failure")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reportedAt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$totalReportedFailures")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$failure")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("totalFailures")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send notification about failure ... not shown here...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);