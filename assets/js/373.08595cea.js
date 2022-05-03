(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{883:function(a,t,s){"use strict";s.r(t);var e=s(34),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[a._v("#")]),a._v(" "),s("code",[a._v(a._s(a.$frontmatter.title))])]),a._v(" "),s("div",{staticStyle:{"white-space":"pre-wrap"}},[a._v(a._s(a.$frontmatter.usage))]),a._v(" "),s("h2",{attrs:{id:"signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[a._v("#")]),a._v(" Signature")]),a._v(" "),s("p",[s("code",[a._v("> str replace (find) (replace) ...rest --all --no-expand")])]),a._v(" "),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("find")]),a._v(": the pattern to find")]),a._v(" "),s("li",[s("code",[a._v("replace")]),a._v(": the replacement pattern")]),a._v(" "),s("li",[s("code",[a._v("...rest")]),a._v(": optionally find and replace text by column paths")]),a._v(" "),s("li",[s("code",[a._v("--all")]),a._v(": replace all occurrences of find string")]),a._v(" "),s("li",[s("code",[a._v("--no-expand")]),a._v(": do not expand the replace parameter as a regular expression")])]),a._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),s("p",[a._v("Find and replace contents with capture group")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'my_library.rb'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" str replace "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'(.+).rb'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'$1.nu'")]),a._v("\n")])])]),s("p",[a._v("Find and replace all occurrences of find string")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'abc abc abc'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" str replace -a "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'b'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'z'")]),a._v("\n")])])]),s("p",[a._v("Find and replace all occurrences of find string in table")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ColA ColB ColC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("abc abc ads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" str replace -a "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'b'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'z'")]),a._v(" ColA ColC\n")])])]),s("p",[a._v("Find and replace contents without using the replace parameter as a regular expression")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dogs_$1_cats'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" str replace "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\$1'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'$2'")]),a._v(" -n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);