(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{322:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"testing-with-nightmare"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-with-nightmare"}},[t._v("#")]),t._v(" Testing with Nightmare")]),t._v(" "),s("p",[t._v("Selenium WebDriver is considered to be standard for end to end testing of web applications.\nDespite its popularity it have its drawbacks, it requires a real browser and Selenium server to control it.\nThis hardens setting it up testing environment for CI server and slows down test execution.")]),t._v(" "),s("p",[t._v("Is there a sane alternative to Selenium?")]),t._v(" "),s("p",[t._v("Yes, how about "),s("a",{attrs:{href:"https://www.nightmarejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("NightmareJS"),s("OutboundLink")],1),t._v("?")]),t._v(" "),s("p",[t._v("It is modern Electron based testing framework which allows to execute tests in headless mode as well as in window mode for debug purposes.\nThis makes Nightmare very useful, much more handy than PhantomJS. Nightmare is in active development and has nice API for writing acceptance tests.\nUnfortunately, as all other JavaScript testing frameworks it has its own very custom API.\nWhat if you choose it for a project and suddenly you realize that you need something more powerful, like Selenium?\nYes, that might be a problem if you are not using CodeceptJS.\nThe one idea behind CodeceptJS is to unify different testing backends under one API, so you could easily write tests the same way no matter what engines you use: webdriverio, Protractor, or Nightmare.")]),t._v(" "),s("p",[t._v("Compare a test written using Nightmare API:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("nightmare\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://yahoo.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form[action*=\"/search\"] [name=p]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github nightmare'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form[action*=\"/search\"] [type=submit]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("evaluate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main .searchCenterMiddle li a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("with a similar CodeceptJS test:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://yahoo.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github nightmare'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Search Web'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitForElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main .searchCenterMiddle li a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"//a[contains(@href,'github.com/segmentio/nightmare')]\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("see")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'segmentio/nightmare'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main li a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("NightmareJS support only CSS locators for web elements, while CodeceptJS improves it to use XPath as well.\nThis is how form can be located by labels, and buttons by text in examples above. It is done by injecting\nclient-side scrips (for element location) to every loaded page. Also all events like click, doubleClick, keyPress are "),s("strong",[t._v("simulated")]),t._v(" by JavaScript,\nthis makes testing less relevant, as they are not native to operating systems.")]),t._v(" "),s("h2",{attrs:{id:"how-fast-is-nightmare-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-fast-is-nightmare-js"}},[t._v("#")]),t._v(" How Fast Is Nightmare JS?")]),t._v(" "),s("p",[t._v("Let's execute the test above within WebDriver using headless Firefox + Selenium Server packed in Docker container.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4444")]),t._v(":4444 selenium/standalone-firefox:2.53.0\ncodeceptjs run yahoo_test.js "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--steps")]),t._v("\n")])])]),s("p",[t._v("This provides use with output:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v(" Yahoo basic "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" WebDriver._before\n • I am on page "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://yahoo.com"')]),t._v("\n • I fill field "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github nightmare"')]),t._v("\n • I click "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Search Web"')]),t._v("\n • I "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#main"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n • I see element "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#main .searchCenterMiddle li a"')]),t._v("\n • I see "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"segmentio/nightmare"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li a"')]),t._v("\n ✓ OK "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 17591ms\n")])])]),s("p",[t._v("When we switch helper to Nightmare:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v(" Yahoo basic "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Nightmare._before\n • I am on page "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://yahoo.com"')]),t._v("\n • I fill field "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github nightmare"')]),t._v("\n • I click "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Search Web"')]),t._v("\n • I "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#main"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n • I see element "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#main .searchCenterMiddle li a"')]),t._v("\n • I see "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"segmentio/nightmare"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li a"')]),t._v("\n ✓ OK "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 5490ms\n")])])]),s("p",[t._v("As you see the Nightmare test was almost "),s("strong",[t._v("3 times faster")]),t._v(" than Selenium test.\nSure, this can't be taken as a valuable benchmark but more like a proof of concept.")]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("To start you need CodeceptJS with nightmare package installed.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" nightmare\n")])])]),s("p",[t._v("And a basic project initialized")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("codeceptjs init\n")])])]),s("p",[t._v("You will be asked for a Helper to use, you should select Nightmare and provide url of a website you are testing.\nSetup process is explained on "),s("a",{attrs:{href:"https://codecept.io/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QuickStart page"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("(If you already have CodeceptJS project, just install nightmare globally or locally and enable it in config)")]),t._v(" "),s("h2",{attrs:{id:"configuring-nightmare"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-nightmare"}},[t._v("#")]),t._v(" Configuring Nightmare")]),t._v(" "),s("p",[t._v("Enable "),s("code",[t._v("Nightmare")]),t._v(" helper in "),s("code",[t._v("codecept.json")]),t._v(" config:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"helpers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"Nightmare"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"show"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"restart"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Turn on the "),s("code",[t._v("show")]),t._v(" option if you want to follow test progress in a window. This is very useful for debugging.\nAll other options can be taken from "),s("a",{attrs:{href:"https://github.com/segmentio/nightmare#api",target:"_blank",rel:"noopener noreferrer"}},[t._v("NightmareJS API"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Turn off the "),s("code",[t._v("restart")]),t._v(" option if you want to run your suite in a single browser instance.")]),t._v(" "),s("p",[t._v("Option "),s("code",[t._v("waitForAction")]),t._v(" defines how long to wait after a click, doubleClick or pressKey action is performed.\nTest execution may happen much faster than the response is rendered, so make sure you set a proper delay value.\nBy default CodeceptJS waits for 500ms.")]),t._v(" "),s("h2",{attrs:{id:"opening-a-web-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-web-page"}},[t._v("#")]),t._v(" Opening a Web Page")]),t._v(" "),s("p",[t._v("Nightmare provides you with more control to browser engine than Selenium does.\nThis allows you to use headers in your tests. For instance, CodeceptJS provides "),s("code",[t._v("haveHeader")]),t._v(" method\nto set default headers for all your HTTP requests:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("haveHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-tested-with'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'codeceptjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("When opening a web page you can set headers as well. "),s("code",[t._v("amOnPage")]),t._v(" methods can take headers as second parameter:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use basic http auth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'Authorization'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Basic '")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("token "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("As a small bonus: all "),s("code",[t._v("console.log")]),t._v(" calls on a page will be also shown in "),s("code",[t._v("--debug")]),t._v(" mode.")]),t._v(" "),s("h2",{attrs:{id:"manipulating-web-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manipulating-web-page"}},[t._v("#")]),t._v(" Manipulating Web Page")]),t._v(" "),s("p",[t._v("Nightmare helper is supposed to work in the same manner as WebDriver or Protractor.\nThis means that all CodeceptJS actions like "),s("code",[t._v("click")]),t._v(", "),s("code",[t._v("fillField")]),t._v(", "),s("code",[t._v("selectOption")]),t._v(" and others are supposed to work in the very same manner.\nThey are expressive and flexible to accept CSS, XPath, names, values, or strict locators. Follow the helper reference for detailed description.")]),t._v(" "),s("p",[t._v("Assertions start with "),s("code",[t._v("see")]),t._v(" prefix. You can check text on a page, elements on page and others.")]),t._v(" "),s("h2",{attrs:{id:"extending-nightmare-helper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extending-nightmare-helper"}},[t._v("#")]),t._v(" Extending Nightmare Helper")]),t._v(" "),s("p",[t._v("CodeceptJS allows you to define and connect own helpers. If some functionality of\nNightmare helper is missing you can easily create "),s("code",[t._v("ExtendedNightmare")]),t._v(" helper by running:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("codeceptjs gh\n")])])]),s("p",[t._v("Learn more about "),s("a",{attrs:{href:"https://codecept.io/helpers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Helpers"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Nightmare instance can be accessed by custom helper:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns current nightmare instance")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nightmare'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This way you can call "),s("a",{attrs:{href:"https://github.com/segmentio/nightmare#interact-with-the-page",target:"_blank",rel:"noopener noreferrer"}},[t._v("native Nightmare commands"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("It is important to understand that Nightmare executes JavaScript on client and on server side.\nIf you need to find an element you should search for it using client side script, but if you want\nto do an assertion you should return a data to server side.")]),t._v(" "),s("p",[t._v("Nightmare provides "),s("code",[t._v("evaluate")]),t._v(" method to execute client-side JavaScript. CodeceptJS registers "),s("code",[t._v("codeceptjs")]),t._v("\nobject globally on client side with "),s("code",[t._v("findElement")]),t._v(" and "),s("code",[t._v("findElements")]),t._v(" methods in it. They return IDs of matched elements\nso you can access them in next calls to "),s("code",[t._v("evaluate")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inside a custom helper class")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeAttributeContains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("locator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expectedValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let's use chai assertion library")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assert "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chai'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get nightmare instance")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nightmare'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// find an element by CSS or XPath:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" els "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nightmare'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_locate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we received an array with IDs of matched elements")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now let's execute client-side script to get attribute for the first element")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" attributeValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("evaluate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is executed inside a web page!")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" codeceptjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" els"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function + its params")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get attribute value and back to server side")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// execute an assertion")]),t._v("\n  assert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attributeValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expectedValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("It can be used in tests like:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeAttributeContains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main img'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/cat.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This sample assertion used "),s("code",[t._v("_locate")]),t._v(" helper method which searched for elements\nby CSS/XPath or a strict locator. Then "),s("code",[t._v("browser.evaluate")]),t._v(" method was called to\nuse locate found elements on a page and return attribute from the first of them.")])])}),[],!1,null,null,null);s.default=n.exports}}]);