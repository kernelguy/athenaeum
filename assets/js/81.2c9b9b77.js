(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{290:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dates"}},[t._v("#")]),t._v(" Dates")]),t._v(" "),s("p",[t._v("The Http Query builder offers a few methods for adding date-based conditions, in you query string.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#formats"}},[t._v("Formats")])]),s("li",[s("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),s("li",[s("a",{attrs:{href:"#where-datetime"}},[t._v("Where Datetime")])]),s("li",[s("a",{attrs:{href:"#where-date"}},[t._v("Where Date")])]),s("li",[s("a",{attrs:{href:"#where-year"}},[t._v("Where Year")])]),s("li",[s("a",{attrs:{href:"#where-month"}},[t._v("Where Month")])]),s("li",[s("a",{attrs:{href:"#where-day"}},[t._v("Where Day")])]),s("li",[s("a",{attrs:{href:"#where-time"}},[t._v("Where Time")])]),s("li",[s("a",{attrs:{href:"#or-methods"}},[t._v("Or Methods")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"formats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formats"}},[t._v("#")]),t._v(" Formats")]),t._v(" "),s("p",[t._v("Before showing examples of each supported method, you should know that you can change the date and time formats, for each grammar.\nThis can be done in your "),s("code",[t._v("configs/http-clients.php")]),t._v(" configuration file, under each grammar profile.\nThe formats are parsed using PHP's "),s("a",{attrs:{href:"https://www.php.net/manual/en/datetime.format.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("DateTime::format()")]),t._v(" method"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... previous not shown ...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'profiles'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'driver'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Aedart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Clients"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Requests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Grammars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DefaultGrammar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'options'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n                 * Date formats\n                 */")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'datetime_format'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("DateTimeInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ISO8601")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'date_format'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Y-m-d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'year_format'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Y'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'month_format'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'m'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'day_format'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'time_format'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'H:i:s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("h2",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("p",[t._v("Each of the available date-based condition methods accept the following arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$field")]),t._v(": "),s("code",[t._v("string")]),t._v(" field/filter name")]),t._v(" "),s("li",[s("code",[t._v("$operator")]),t._v(": "),s("code",[t._v("string|DateTimeInterface")]),t._v(" string operator or value")]),t._v(" "),s("li",[s("code",[t._v("$value")]),t._v(": "),s("code",[t._v("string|DateTimeInterface")]),t._v(" ("),s("em",[t._v("optional")]),t._v(") date, either as a string or instance that inherits from "),s("code",[t._v("DateTimeInterface")]),t._v(". If omitted, the "),s("code",[t._v("$operator")]),t._v(" acts as the value.")])]),t._v(" "),s("p",[t._v("If no value is given, then the current datetime ("),s("code",[t._v("now")]),t._v(") is used as the default value.")]),t._v(" "),s("h2",{attrs:{id:"where-datetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-datetime"}},[t._v("#")]),t._v(" Where Datetime")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("whereDatetime()")]),t._v(' adds a condition using a full "date & time" format.')]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereDatetime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2020-04-05'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?created=2020-04-05T00:00:00+0000\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?filter[created]=2020-04-05T00:00:00+0000\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"odata"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?$filter=created eq 2020-04-05T00:00:00+0000\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"where-date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-date"}},[t._v("#")]),t._v(" Where Date")]),t._v(" "),s("p",[s("code",[t._v("whereDate()")]),t._v(' can be used to add a condition where "year, month and day" formats are expected.')]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'gt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'now'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?created[gt]=2020-04-05\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?filter[created][gt]=2020-04-05\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"odata"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?$filter=created gt 2020-04-05\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"where-year"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-year"}},[t._v("#")]),t._v(" Where Year")]),t._v(" "),s("p",[s("code",[t._v("whereYear()")]),t._v(' adds a date condition, where "year" is used as format.')]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereYear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'lt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'now'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?created[lt]=2020\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?filter[created][lt]=2020\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"odata"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?$filter=created lt 2020\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"where-month"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-month"}},[t._v("#")]),t._v(" Where Month")]),t._v(" "),s("p",[s("code",[t._v("whereMonth()")]),t._v(' adds a condition, where "month" is used as format.')]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereMonth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2020-07-15'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?created=07\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?filter[created]=07\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"odata"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?$filter=created eq 07\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"where-day"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-day"}},[t._v("#")]),t._v(" Where Day")]),t._v(" "),s("p",[t._v('To add a condition where "day" format is expected, use the '),s("code",[t._v("whereDay()")]),t._v(" method.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereDay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'gt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2020-07-15'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?created[gt]=15\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?filter[created][gt]=15\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"odata"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?$filter=created gt 15\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"where-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-time"}},[t._v("#")]),t._v(" Where Time")]),t._v(" "),s("p",[t._v('Conditions based on "time" format, can be added via '),s("code",[t._v("whereTime()")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'lt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'now'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"default"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?created[lt]=16:58:00\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"json api"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?filter[created][lt]=16:58:00\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"odata"}},[s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("/users?$filter=created lt 16:58:00\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"or-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#or-methods"}},[t._v("#")]),t._v(" Or Methods")]),t._v(" "),s("p",[t._v("You may also use the "),s("code",[t._v("orWhereDatetime()")]),t._v(", "),s("code",[t._v("orWhereDate()")]),t._v(", "),s("code",[t._v("orWhereYear()")]),t._v('...etc methods to add "or" conjunctions.\nBut, apart from '),s("a",{attrs:{href:"https://www.odata.org/getting-started/basic-tutorial/#queryData",target:"_blank",rel:"noopener noreferrer"}},[t._v("OData"),s("OutboundLink")],1),t._v(", these are "),s("strong",[t._v("NOT considered conventional")]),t._v('.\nFor additional information about "or" conjunctions, please read the '),s("RouterLink",{attrs:{to:"/archive/current/http/clients/query/where.html#or-where"}},[s("code",[t._v("orWhere()")]),t._v(" documentation")]),t._v(".")],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);