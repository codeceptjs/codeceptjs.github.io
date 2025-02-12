(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{343:function(e,s,t){"use strict";t.r(s);var a=t(14),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),s("h2",{attrs:{id:"run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[e._v("#")]),e._v(" Run")]),e._v(" "),s("p",[e._v("Executes tests. Requires "),s("code",[e._v("codecept.conf.js")]),e._v(" config to be present in provided path.")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("Run all tests from current dir")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run\n")])])]),s("p",[e._v("Load config and run tests from "),s("code",[e._v("test")]),e._v(" dir")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),s("p",[e._v('Run only tests with "signin" word in name')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--grep")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"signin"')]),e._v("\n")])])]),s("p",[e._v('Run all tests without "@IEOnly" word in name')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--grep")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@IEOnly"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--invert")]),e._v("\n")])])]),s("p",[e._v("Run single test [path to codecept.js] [test filename]")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run github_test.js\n")])])]),s("p",[e._v("Run single test with steps printed")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run github_test.js "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--steps")]),e._v("\n")])])]),s("p",[e._v("Run single test in debug mode (see more in "),s("a",{attrs:{href:"#Debugging"}},[e._v("debugging")]),e._v(" section)")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run github_test.js "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--debug")]),e._v("\n")])])]),s("p",[e._v("Select config file manually ("),s("code",[e._v("-c")]),e._v(" or "),s("code",[e._v("--config")]),e._v(" option)")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" my.codecept.conf.js\nnpx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--config")]),e._v(" path/to/codecept.conf.js\n")])])]),s("p",[e._v("Override config on the fly. Provide valid JSON which will be merged into current config:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--override")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{ "helpers": {"WebDriver": {"browser": "chrome"}}}\'')]),e._v("\n")])])]),s("p",[e._v("Run tests and produce xunit report:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--reporter")]),e._v(" xunit\n")])])]),s("p",[e._v("Use any of "),s("a",{attrs:{href:"https://github.com/mochajs/mocha/tree/master/lib/reporters",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mocha reporters"),s("OutboundLink")],1),e._v(" used.")]),e._v(" "),s("h4",{attrs:{id:"debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),s("p",[e._v("Run single test in debug mode")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--debug")]),e._v("\n")])])]),s("p",[e._v("Run test with internal logs printed.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verbose")]),e._v("\n")])])]),s("p",[e._v("Display complete debug output including scheduled promises")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("DEBUG=codeceptjs:* npx codeceptjs run\n")])])]),s("h2",{attrs:{id:"run-workers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-workers"}},[e._v("#")]),e._v(" Run Workers")]),e._v(" "),s("p",[e._v("Run tests in parallel threads.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx codeceptjs run-workers 3\n")])])]),s("h2",{attrs:{id:"run-rerun"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-rerun"}},[e._v("#")]),e._v(" Run Rerun "),s("Badge",{attrs:{text:"Since 3.3.6",type:"warning"}})],1),e._v(" "),s("p",[e._v("Run tests multiple times to detect and fix flaky tests.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx codeceptjs run-rerun\n")])])]),s("p",[e._v("For this command configuration is required:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// inside codecept.conf.js")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("rerun")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// how many times all tests should pass")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("minSuccess")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// how many times to try to rerun all tests")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("maxReruns")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Use Cases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("minSuccess: 1, maxReruns: 5")]),e._v(" - run all tests no more than 5 times, until first successful run.")]),e._v(" "),s("li",[s("code",[e._v("minSuccess: 3, maxReruns: 5")]),e._v(" - run all tests no more than 5 times, until reaching 3 successfull runs.")]),e._v(" "),s("li",[s("code",[e._v("minSuccess: 10, maxReruns: 10")]),e._v(" - run all tests exactly 10 times, to check their stability.")])]),e._v(" "),s("h2",{attrs:{id:"dry-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dry-run"}},[e._v("#")]),e._v(" Dry Run")]),e._v(" "),s("p",[e._v("Prints test scenarios without executing them")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx codeceptjs dry-run\n")])])]),s("p",[e._v("When passed "),s("code",[e._v("--steps")]),e._v(" or "),s("code",[e._v("--debug")]),e._v(" option runs tests, disabling all plugins and helpers, so you can get step-by-step report with no tests actually executed.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx codeceptjs dry-run --steps\n")])])]),s("p",[e._v("If a plugin needs to be enabled in "),s("code",[e._v("dry-run")]),e._v(" mode, pass its name in "),s("code",[e._v("-p")]),e._v(" option:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx codeceptjs dry-run --steps -p allure\n")])])]),s("p",[e._v("If some plugins need to be enabled in "),s("code",[e._v("dry-run")]),e._v(" mode, pass its name in "),s("code",[e._v("-p")]),e._v(" option:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx codeceptjs dry-run --steps -p allure,customLocator\n")])])]),s("p",[e._v("If all plugins need to be enabled in "),s("code",[e._v("dry-run")]),e._v(" mode, pass its name in "),s("code",[e._v("-p")]),e._v(" option:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx codeceptjs dry-run --steps -p all\n")])])]),s("p",[e._v("To enable bootstrap script in dry-run mode, pass in "),s("code",[e._v("--bootstrap")]),e._v(" option when running with "),s("code",[e._v("--steps")]),e._v(" or "),s("code",[e._v("--debug")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx codeceptjs dry-run --steps --bootstrap\n")])])]),s("h2",{attrs:{id:"run-multiple"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-multiple"}},[e._v("#")]),e._v(" Run Multiple")]),e._v(" "),s("blockquote",[s("p",[e._v("⚠️ prefer using run-workers instead")])]),e._v(" "),s("p",[e._v("Run multiple suites. Unlike "),s("code",[e._v("run-workers")]),e._v(" spawns processes to execute tests.\n"),s("a",{attrs:{href:"/advanced#multiple-browsers-execution"}},[e._v("Requires additional configuration")]),e._v(" and can be used to execute tests in multiple browsers.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs run-multiple smoke:chrome regression:firefox\n")])])]),s("h2",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[e._v("#")]),e._v(" Init")]),e._v(" "),s("p",[e._v("Creates "),s("code",[e._v("codecept.conf.js")]),e._v(" file in current directory:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs init\n")])])]),s("p",[e._v("Or in provided path")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codecept init "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),s("h2",{attrs:{id:"migrate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrate"}},[e._v("#")]),e._v(" Migrate")]),e._v(" "),s("p",[e._v("Migrate your current "),s("code",[e._v("codecept.json")]),e._v(" to "),s("code",[e._v("codecept.conf.js")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs migrate\n")])])]),s("h2",{attrs:{id:"shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[e._v("#")]),e._v(" Shell")]),e._v(" "),s("p",[e._v("Interactive shell. Allows to try "),s("code",[e._v("I.")]),e._v(" commands in runtime")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs shell\n")])])]),s("h2",{attrs:{id:"generators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generators"}},[e._v("#")]),e._v(" Generators")]),e._v(" "),s("p",[e._v("Create new test")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs generate:test\n")])])]),s("p",[e._v("Create new pageobject")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs generate:pageobject\n")])])]),s("p",[e._v("Create new helper")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs generate:helper\n")])])]),s("h2",{attrs:{id:"typescript-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-definitions"}},[e._v("#")]),e._v(" TypeScript Definitions")]),e._v(" "),s("p",[e._v("TypeScript Definitions allows IDEs to provide autocompletion when writing tests.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs def\nnpx codeceptjs def "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--config")]),e._v(" path/to/codecept.conf.js\n")])])]),s("p",[e._v("After doing that IDE should provide autocompletion for "),s("code",[e._v("I")]),e._v(" object inside "),s("code",[e._v("Scenario")]),e._v(" and "),s("code",[e._v("within")]),e._v(" blocks.")]),e._v(" "),s("p",[e._v("Add optional parameter "),s("code",[e._v("output")]),e._v(" (or shortcut "),s("code",[e._v("-o")]),e._v("), if you want to place your definition file in specific folder:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs def "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--output")]),e._v(" ./tests/typings\nnpx codeceptjs def "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" ./tests/typings\n")])])]),s("h2",{attrs:{id:"list-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-commands"}},[e._v("#")]),e._v(" List Commands")]),e._v(" "),s("p",[e._v("Prints all available methods of "),s("code",[e._v("I")]),e._v(" to console")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs list\n")])])]),s("h2",{attrs:{id:"local-environment-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-environment-information"}},[e._v("#")]),e._v(" Local Environment Information")]),e._v(" "),s("p",[e._v("Prints debugging information concerning the local environment")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx codeceptjs info\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);