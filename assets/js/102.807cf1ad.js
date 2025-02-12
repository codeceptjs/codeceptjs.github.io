(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{398:function(t,s,e){"use strict";e.r(s);var a=e(14),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"visual-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-testing"}},[t._v("#")]),t._v(" Visual Testing")]),t._v(" "),s("p",[t._v("How does one test if the UI being rendered appears correctly to the users or how to test if each UI element appears in the right position and size? The traditional way to test the UI of the application has always been manually, which is time consuming.")]),t._v(" "),s("p",[t._v("Visual testing with help of CodeceptJS will help in improving such use cases for the QA folks.")]),t._v(" "),s("p",[t._v("By default CodeceptJS uses "),s("RouterLink",{attrs:{to:"/helpers/WebDriver/"}},[t._v("WebDriver")]),t._v(" helper and "),s("strong",[t._v("Selenium")]),t._v(" to automate browser. It is also capable of taking screenshots of the application and this could be used for visual testing.")],1),t._v(" "),s("p",[t._v("Currently there are two helpers available for Visual testing with CodeceptJS")]),t._v(" "),s("h2",{attrs:{id:"using-resemble-helper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-resemble-helper"}},[t._v("#")]),t._v(" Using Resemble helper")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/rsmbl/Resemble.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resemble.js"),s("OutboundLink")],1),t._v(" is a great tool for image comparison and analysis, which can be used with CodeceptJS")]),t._v(" "),s("h3",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("To install the package, just run")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install codeceptjs-resemblehelper --save\n")])])]),s("h3",{attrs:{id:"configuring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring"}},[t._v("#")]),t._v(" Configuring")]),t._v(" "),s("p",[t._v("This helper should be added to "),s("code",[t._v("codecept.conf.js")]),t._v(" config file.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"helpers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ResembleHelper"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"require"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"codeceptjs-resemblehelper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"screenshotFolder"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tests/output/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseFolder"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tests/screenshots/base/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"diffFolder"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tests/screenshots/diff/"')]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("To use the Helper, users must provide the three parameters:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("screenshotFolder")]),t._v(" : This will always have the same value as "),s("code",[t._v("output")]),t._v(" in Codecept configuration, this is the folder where WebDriver saves a screenshot when using "),s("code",[t._v("I.saveScreenshot")]),t._v(" method")]),t._v(" "),s("li",[s("code",[t._v("baseFolder")]),t._v(": This is the folder for base images, which will be used with screenshot for comparison")]),t._v(" "),s("li",[s("code",[t._v("diffFolder")]),t._v(": This will the folder where resemble would try to store the difference image, which can be viewed later.")])]),t._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("Details about the helper can be found on the "),s("a",{attrs:{href:"https://github.com/puneet0191/codeceptjs-resemblehelper",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repo"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Base Image is compared with the screenshot image and test results are derived based on the "),s("code",[t._v("mismatch tolerance")]),t._v(" level provided by the user for the comparison")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Lets consider visual testing for "),s("a",{attrs:{href:"https://codecept.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeceptJS Home"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Feature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'To test screen comparison with resemble Js Example test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scenario")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compare CodeceptIO Home Page @visual-test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveScreenshot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Codecept_IO_Screenshot_Image.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeVisualDiff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Codecept_IO_Screenshot_Image.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tolerance")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("prepareBaseImage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In this example, we are setting the expected mismatch tolerance level as "),s("code",[t._v("2")])]),t._v(" "),s("p",[s("code",[t._v("Base Image")]),t._v(" (Generated by User)\n"),s("img",{attrs:{src:"/img/Codecept_IO_Base_Image.png",alt:"Base Image"}})]),t._v(" "),s("p",[s("code",[t._v("Screenshot Image")]),t._v(" (Generated by Test)\n"),s("img",{attrs:{src:"/img/Codecept_IO_Screenshot_Image.png",alt:"Screenshot Image"}})]),t._v(" "),s("p",[t._v("Clearly the difference in both the images visible to human eye is the section about "),s("code",[t._v("Scenario Driven")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/difference_Image_Codecept_Home.png",alt:"Difference Image"}})]),t._v(" "),s("p",[s("code",[t._v("Diff Image")]),t._v(" generated by the helper clearly highlights the section which don't match")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/Difference%20Image%20Focus.png",alt:"Highlight"}})]),t._v(" "),s("p",[s("code",[t._v("Failed Test output")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('To test screen comparison with resemble Js Example test --\n  Compare CodeceptIO Home Page @visual-test\n    I see Visual Diff "Codecept_IO_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false}\nMisMatch Percentage Calculated is 2.85\n  ✖ FAILED in 418ms\n\n\n-- FAILURES:\n\n  1) To test screen comparison with resemble Js Example test\n       Compare CodeceptIO Home Page @visual-test:\n\n      MissMatch Percentage 2.85\n      + expected - actual\n\n      -false\n      +true\n')])])]),s("p",[s("code",[t._v("Codeceptjs-resemblehelper")]),t._v(" basically comes with two major functions")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("seeVisualDiff")]),t._v(" which can be used to compare two images and calculate the misMatch percentage.")]),t._v(" "),s("li",[s("code",[t._v("seeVisualDiffForElement")]),t._v(" which can be used to compare elements on the two images and calculate misMatch percentage.")])]),t._v(" "),s("h2",{attrs:{id:"using-applitools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-applitools"}},[t._v("#")]),t._v(" Using Applitools")]),t._v(" "),s("p",[t._v("Applitools helps Test Automation engineers, DevOps, and FrontEnd Developers continuously test and validate visually perfect mobile, web, and native apps. Now it can be used with CodeceptJS.")]),t._v(" "),s("h3",{attrs:{id:"setup-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-2"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("Create an account at "),s("a",{attrs:{href:"https://applitools.com/users/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("Applitools"),s("OutboundLink")],1),t._v(" and install the npm packages")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i codeceptjs-applitoolshelper --save\nnpm i webdriverio@5 --save\n")])])]),s("h3",{attrs:{id:"configuring-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-2"}},[t._v("#")]),t._v(" Configuring")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("helpers")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("WebDriver")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://applitools.com/helloworld'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("browser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("desiredCapabilities")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("chromeOptions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--headless'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--disable-extensions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--disable-gpu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--no-sandbox'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--disable-dev-shm-usage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("windowSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1920x600'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("smartWait")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeouts")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'script'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'page load'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ApplitoolsHelper")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'codeceptjs-applitoolshelper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("applitoolsKey")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_API_KEY'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("h4",{attrs:{id:"to-use-this-helper-you-need-to-provide-the-following-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-use-this-helper-you-need-to-provide-the-following-info"}},[t._v("#")]),t._v(" To use this helper you need to provide the following info:")]),t._v(" "),s("ul",[s("li",[t._v("applitoolsKey (Required): You can find your API key under the user menu located at the right hand side of the test manager toolbar")]),t._v(" "),s("li",[t._v("windowSize (Optional): the windows size as for instance 1440x700, if not provided, the default 1920x600 will be used. The windowSize will follow this precedence: ApplitoolsHelper, Webdriver.")]),t._v(" "),s("li",[t._v("appName (Optional): you can either provide your desired application name, if not provided, the default 'Application Under Test' will be used.")])]),t._v(" "),s("h3",{attrs:{id:"usage-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param pageToCheck {string} Name of page you want to check\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eyeCheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageToCheck"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("The first time you run this test a new baseline will be created, and subsequent test runs will be compared to this baseline. If any screenshot mismatch its baseline image in a perceptible way, there will be a "),s("code",[t._v("DiffsFoundException")]),t._v(" which includes a URL that points to a detailed report where you can see the detected differences and take appropriate actions such as reporting bugs, updating the baseline and more.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FAILURES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Applitools functionality\n       Check home page @test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n     Test "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Applitools functionality'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Application Under Test'")]),t._v(" detected differences"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" See details at"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("eyes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applitools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("batches"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00000251831777088983")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00000251831777088717")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Oh9tXI0e8VF8Ha_GLVA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("You can find the latest documentation here "),s("a",{attrs:{href:"https://applitools.com/tutorials/webdriverio5.html#run-your-first-test",target:"_blank",rel:"noopener noreferrer"}},[t._v("Applitools Docs"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Lets consider visual testing for "),s("a",{attrs:{href:"https://codecept.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeceptJS Home"),s("OutboundLink")],1),t._v(".\nYou can also find example repo here: https://github.com/PeterNgTr/codeceptjs-applitoolshelper")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Feature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Applitools functionality'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Before")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://applitools.com/helloworld'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scenario")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Check home page @test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eyeCheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Homepage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);