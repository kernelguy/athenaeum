(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{346:function(t,s,e){"use strict";e.r(s);var a=e(6),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"overload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overload"}},[t._v("#")]),t._v(" Overload")]),t._v(" "),e("p",[e("code",[t._v("\\Aedart\\Properties\\Overload")]),t._v(" provides means to dynamically deal with inaccessible properties, by implementing PHP's magic methods;\n"),e("code",[t._v("__get()")]),t._v(", "),e("code",[t._v("__set()")]),t._v(", "),e("code",[t._v("__isset()")]),t._v(", and "),e("code",[t._v("__unset()")]),t._v(".\nThe usage of getters- and setters-methods is enforced, ensuring that if a property is indeed available, then its corresponding getter or setter method will be invoked. The term 'overload', in this context, refers to "),e("a",{attrs:{href:"http://php.net/manual/en/language.oop5.overloading.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP’s own definition hereof"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"when-to-use-this"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-this"}},[t._v("#")]),t._v(" When to use this")]),t._v(" "),e("p",[t._v("Generally speaking, magic methods can be very troublesome to use.\nFor the most part, they prohibit the usage of auto-completion in IDEs and if not documented, developers are forced to read large sections of the source code, in order to gain understanding of what’s going on. Depending upon implementation, there might not be any validation, when dynamically assigning new properties to objects, which can break dependent components.\nIn addition to this, it can also be very difficult to write tests for components that are using such magic methods.")]),t._v(" "),e("p",[t._v("This package will not be able to solve any of the mentioned problems, because at the end of the day, as a developer, you still have to ensure that the code readable / understandable, testable and documented.\nTherefore, it is recommend that this component is only used, if and only if, the following are all true;")]),t._v(" "),e("ul",[e("li",[t._v("Properties should not be allowed to be dynamically created and assigned to an object, without prior knowledge about them. Thus, properties must always be predefined.")]),t._v(" "),e("li",[t._v("Getters and setters must always be used for reading / writing properties")]),t._v(" "),e("li",[t._v("You wish to allow access to an object’s properties like such: "),e("code",[t._v("$person->age;")]),t._v(" but still enforce some kind of control when it's being accessed or set.")])]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Aedart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Properties"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Overload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @property string $name Name of a person\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Overload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("empty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvalidArgumentException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Provided name is invalid'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Some place else, in your application, you can then invoke the following:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Alin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invokes the setName(...)")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invokes the getName(), then outputs 'Alin'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invokes the __isset(), then outputs true")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invokes the __unset() and destroys the name property")]),t._v("\n")])])]),e("h2",{attrs:{id:"use-phpdoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-phpdoc"}},[t._v("#")]),t._v(" Use PHPDoc")]),t._v(" "),e("p",[t._v("When using PHP’s magic methods for overloading properties, it is a very good idea to make use pf PHPDoc's "),e("code",[t._v("@property")]),t._v("-tag.\nMost IDEs can read it and make use of it to provide auto-completion.\nSee "),e("a",{attrs:{href:"http://www.phpdoc.org/docs/latest/references/phpdoc/tags/property.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpdoc.org"),e("OutboundLink")],1),t._v(" for additional information.")]),t._v(" "),e("h2",{attrs:{id:"naming-convention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming-convention"}},[t._v("#")]),t._v(" Naming Convention")]),t._v(" "),e("h3",{attrs:{id:"property-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#property-names"}},[t._v("#")]),t._v(" Property Names")]),t._v(" "),e("p",[t._v("Properties can either be stated in "),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/CamelCase",target:"_blank",rel:"noopener noreferrer"}},[t._v("CamelCase"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/Snake_case",target:"_blank",rel:"noopener noreferrer"}},[t._v("Snake Case"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("personId")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("78")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Valid")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("category_name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Products'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Valid")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invalid, because its a mix of both camelCase and underscore")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("swordFish_length")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("63")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"getter-setter-method-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getter-setter-method-names"}},[t._v("#")]),t._v(" Getter / Setter Method Names")]),t._v(" "),e("p",[t._v("Getters and setters follow a most strict naming convention; the must follow "),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/CamelCase",target:"_blank",rel:"noopener noreferrer"}},[t._v("CamelCase"),e("OutboundLink")],1),t._v(" and be prefixed with "),e("code",[t._v("get")]),t._v(" for getter methods and "),e("code",[t._v("set")]),t._v(" for setter methods.\nIn addition, the "),e("code",[t._v("Overload")]),t._v(" component uses the following syntax or rules when searching for a property’s corresponding getter or setter:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('getterMethod = getPrefix, camelCasePropertyName;\ngetPrefix = "get";\n\nsetterMethod = setPrefix, camelCasePropertyName;\nsetPrefix = "set";\n\ncamelCasePropertyName = {uppercaseLetter, {lowercaseLetter}};\n\nuppercaseLetter = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K"\n| "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X"\n| "Y" | "Z" ;\n\nlowercaseLetter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k"\n| "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"\n| "y" | "z" ;\n')])])]),e("p",[e("em",[t._v("Above stated syntax / rules is expressed in "),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form",target:"_blank",rel:"noopener noreferrer"}},[t._v("EBNF"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Looks for getPersonId(), setPersonId($value);")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("personId")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("78")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Looks for getCategoryName() and setCategoryName($value);")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$person")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("category_name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Products'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"protected-vs-private-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#protected-vs-private-properties"}},[t._v("#")]),t._v(" Protected vs. Private properties")]),t._v(" "),e("p",[t._v("By default, only "),e("code",[t._v("protected")]),t._v(" properties will be accessible ("),e("em",[t._v("overloaded")]),t._v(").\nThis means that "),e("code",[t._v("private")]),t._v(" declared properties are inaccessible.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Aedart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Properties"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Overload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Overload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Accessible")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$age")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inaccessible")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...remaining not shown ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"behaviour-override"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#behaviour-override"}},[t._v("#")]),t._v(" Behaviour override")]),t._v(" "),e("p",[t._v("Should you wish to also expose your private declared properties, then this behaviour can be set per object, from an inside scope.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Aedart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Properties"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AccessibilityLevels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Aedart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Properties"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Overload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Overload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Accessible")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$age")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Accessible")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change the property accessibility to private")]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPropertyAccessibilityLevel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AccessibilityLevels"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PRIVATE_LEVEL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);