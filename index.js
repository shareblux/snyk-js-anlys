(function() {                    if (window.scriptExecuted1693558544025) {                        return;                    }                    var script = document.createElement("script");                    script.setAttribute("type", "text/javascript");                    script.textContent = "\n\
            (function () {\n\
                try {\n\
                    var AG_onLoad=function(func){if(document.readyState===\"complete\"||document.readyState===\"interactive\")func();else if(document.addEventListener)document.addEventListener(\"DOMContentLoaded\",func);else if(document.attachEvent)document.attachEvent(\"DOMContentLoaded\",func)};\n\
var AG_removeElementById = function(id) { var element = document.getElementById(id); if (element && element.parentNode) { element.parentNode.removeChild(element); }};\n\
var AG_removeElementBySelector = function(selector) { if (!document.querySelectorAll) { return; } var nodes = document.querySelectorAll(selector); if (nodes) { for (var i = 0; i < nodes.length; i++) { if (nodes[i] && nodes[i].parentNode) { nodes[i].parentNode.removeChild(nodes[i]); } } } };\n\
var AG_each = function(selector, fn) { if (!document.querySelectorAll) return; var elements = document.querySelectorAll(selector); for (var i = 0; i < elements.length; i++) { fn(elements[i]); }; };\n\
var AG_removeParent = function(el, fn) { while (el && el.parentNode) { if (fn(el)) { el.parentNode.removeChild(el); return; } el = el.parentNode; } };\n\
var AG_removeCookie=function(a){var e=/./;/^\\/.+\\/$/.test(a)?e=new RegExp(a.slice(1,-1)):\"\"!==a&&(e=new RegExp(a.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")));a=function(){for(var a=document.cookie.split(\";\"),g=a.length;g--;){cookieStr=a[g];var d=cookieStr.indexOf(\"=\");if(-1!==d&&(d=cookieStr.slice(0,d).trim(),e.test(d)))for(var h=document.location.hostname.split(\".\"),f=0;f<h.length-1;f++){var b=h.slice(f).join(\".\");if(b){var c=d+\"=\",k=\"; domain=\"+b;b=\"; domain=.\"+b;document.cookie=c+\"; expires=Thu, 01 Jan 1970 00:00:00 GMT\";document.cookie=c+k+\"; expires=Thu, 01 Jan 1970 00:00:00 GMT\";document.cookie=c+b+\"; expires=Thu, 01 Jan 1970 00:00:00 GMT\";document.cookie=c+\"; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT\";document.cookie=c+k+\"; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT\";document.cookie=c+b+\"; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT\"}}}};a();window.addEventListener(\"beforeunload\",a)};\n\
var AG_defineProperty=function(){var p,q=Object.defineProperty;if(\"function\"==typeof WeakMap)p=WeakMap;else{var r=0,t=function(){this.a=(r+=Math.random()).toString()};t.prototype.set=function(a,b){var d=a[this.a];d&&d[0]===a?d[1]=b:q(a,this.a,{value:[a,b],writable:!0});return this};t.prototype.get=function(a){var b;return(b=a[this.a])&&b[0]===a?b[1]:void 0};t.prototype.has=function(a){var b=a[this.a];return b?b[0]===a:!1};p=t}function u(a){this.b=a;this.h=Object.create(null)}function v(a,b,d,e){this.a=a;this.i=b;this.c=d;this.f=e}function w(){this.g=/^([^\\\\\\.]|\\\\.)*?\\./;this.j=/\\\\(.)/g;this.a=new p}function x(a,b){var d=b.f;if(d&&!(\"beforeGet\"in d||\"beforeSet\"in d))return z(d);var e={get:function(){var c=b.f;c&&c.beforeGet&&c.beforeGet.call(this,b.a.b);a:if(c=b.g)c=A(c)?c.value:c.get?c.get.call(this):void 0;else{c=b.a.b;if(b.i in c&&(c=B(c),null!==c)){var d=C.call(c,b.i);c=d?d.call(this):c[b.i];break a}c=void 0}(this===b.a.b||D.call(b.a.b,this))&&E(a,c,b.c);return c},set:function(c){if(this===b.a.b||D.call(b.a.b,this)){b.f&&b.f.beforeSet&&(c=b.f.beforeSet.call(this,c,this));var d=b.g;d&&A(d)&&d.value===c?c=!0:(d=F(b,c,this),G(c)&&(c=H(a,c),I(a,c,b.c)),c=d)}else c=F(b,c,this);return c}};d&&J(d,e,K);return e}function I(a,b,d){for(var e in d.h){var c=d.h[e];if(b.h[e]){var h=a,g=b.h[e],k=c;!k.f||g.f||\"undefined\"===typeof g.a.b||g.g||(g.g=z(k.f));g.c&&k.c&&g.c!==k.c&&I(h,g.c,k.c)}else{g=h=void 0;k=a;var f=b,l=c.i,m=\"undefined\"!==typeof f.b,y=!1;m&&(g=L(f.b,l))&&!g.configurable&&(y=!0,h=f.b[l]);var n=y?H(k,h):new u(c.c.b);I(k,n,c.c);n=new v(f,l,n,c.f);f.h[l]=n;m&&(n.g=g,m=x(k,n),y?E(k,h,c.c):(q(f.b,l,m),g&&A(g)&&(M(m,g.value,f.b),E(k,g.value,c.c))))}}}function E(a,b,d){G(b)&&(b=H(a,b),I(a,b,d))}function F(a,b,d){var e=a.g;if(!e){e=B(a.a.b);if(null!==e&&(e=N.call(e,a.i)))return e.call(d,b);if(!O(a.a.b))return!1;a.g={value:b,configurable:!0,writable:!0,enumerable:!0};return!0}return M(e,b,d)}function H(a,b){var d=a.a.get(b);d||(d=new u(b),a.a.set(b,d));return d}function A(a){return\"undefined\"!==typeof a.writable}function J(a,b,d){for(var e=0,c=d.length;e<c;e++){var h=d[e];h in a&&(b[h]=a[h])}}function z(a){if(a){var b={};J(a,b,P);return b}}function M(a,b,d){if(A(a))return a.writable?(a.value=b,!0):!1;if(!a.set)return!1;a.set.call(d,b);return!0}var P=\"configurable enumerable value get set writable\".split(\" \"),K=P.slice(0,2),L=Object.getOwnPropertyDescriptor,O=Object.isExtensible,B=Object.getPrototypeOf,D=Object.prototype.isPrototypeOf,C=Object.prototype.__lookupGetter__||function(a){return(a=Q(this,a))&&a.get?a.get:void 0},N=Object.prototype.__lookupSetter__||function(a){return(a=Q(this,a))&&a.set?a.set:void 0};function Q(a,b){if(b in a){for(;!w.hasOwnProperty.call(a,b);)a=B(a);return L(a,b)}}function G(a){var b=typeof a;return\"function\"===b||\"object\"===b&&null!==a?!0:!1}var R;return function(a,b,d){R||(R=new w);var e=R;d=d||window;var c=new u;a+=\".\";var h=c||new u;for(var g=e.g,k=e.j,f,l,m;a;){f=g.exec(a);if(null===f)throw 1;f=f[0].length;l=a.slice(0,f-1).replace(k,\"$1\");a=a.slice(f);(f=h.h[l])?m=f.c:(m=new u,f=new v(h,l,m),h.h[l]=f);h=m}if(!f)throw 1;a=f;a.f=b;E(e,d,c)};}();\n\
var AG_abortOnPropertyWrite=function(a,b){var c=Math.random().toString(36).substr(2,8);AG_defineProperty(a,{beforeSet:function(){b&&console.warn(\"AdGuard aborted property write: \"+a);throw new ReferenceError(c);}});var d=window.onerror;window.onerror=function(e){if(\"string\"===typeof e&&-1!==e.indexOf(c))return b&&console.warn(\"AdGuard has caught window.onerror: \"+a),!0;if(d instanceof Function)return d.apply(this,arguments)}};\n\
var AG_abortOnPropertyRead=function(a,b){var c=Math.random().toString(36).substr(2,8);AG_defineProperty(a,{beforeGet:function(){b&&console.warn(\"AdGuard aborted property read: \"+a);throw new ReferenceError(c);}});var d=window.onerror;window.onerror=function(e){if(\"string\"===typeof e&&-1!==e.indexOf(c))return b&&console.warn(\"AdGuard has caught window.onerror: \"+a),!0;if(d instanceof Function)return d.apply(this,arguments)}};\n\
var AG_abortInlineScript=function(g,b,c){var d=function(){if(\"currentScript\"in document)return document.currentScript;var a=document.getElementsByTagName(\"script\");return a[a.length-1]},e=Math.random().toString(36).substr(2,8),h=d();AG_defineProperty(b,{beforeGet:function(){var a=d();if(a instanceof HTMLScriptElement&&a!==h&&\"\"===a.src&&g.test(a.textContent))throw c&&console.warn(\"AdGuard aborted execution of an inline script\"),new ReferenceError(e);}});var f=window.onerror;window.onerror=function(a){if(\"string\"===typeof a&&-1!==a.indexOf(e))return c&&console.warn(\"AdGuard has caught window.onerror: \"+b),!0;if(f instanceof Function)return f.apply(this,arguments)}};\n\
var AG_setConstant=function(e,a){if(\"undefined\"===a)a=void 0;else if(\"false\"===a)a=!1;else if(\"true\"===a)a=!0;else if(\"noopFunc\"===a)a=function(){};else if(\"trueFunc\"===a)a=function(){return!0};else if(\"falseFunc\"===a)a=function(){return!1};else if(/^\\d+$/.test(a)){if(a=parseFloat(a),isNaN(a)||32767<Math.abs(a))return}else return;var b=!1;AG_defineProperty(e,{get:function(){return a},set:function(c){if(b)var d=!0;else void 0!==c&&void 0!==a&&typeof c!==typeof a&&(b=!0),d=b;d&&(a=c)}})};\n\
(function setConstant(source, args) {\n\
      function setConstant(source, property, value, stack) {\n\
        if (!property || !matchStackTrace(stack, new Error().stack)) {\n\
          return;\n\
        }\n\
        const emptyArr = noopArray();\n\
        const emptyObj = noopObject();\n\
        let constantValue;\n\
        if (value === \"undefined\") {\n\
          constantValue = undefined;\n\
        } else if (value === \"false\") {\n\
          constantValue = false;\n\
        } else if (value === \"true\") {\n\
          constantValue = true;\n\
        } else if (value === \"null\") {\n\
          constantValue = null;\n\
        } else if (value === \"emptyArr\") {\n\
          constantValue = emptyArr;\n\
        } else if (value === \"emptyObj\") {\n\
          constantValue = emptyObj;\n\
        } else if (value === \"noopFunc\") {\n\
          constantValue = noopFunc;\n\
        } else if (value === \"noopCallbackFunc\") {\n\
          constantValue = noopCallbackFunc;\n\
        } else if (value === \"trueFunc\") {\n\
          constantValue = trueFunc;\n\
        } else if (value === \"falseFunc\") {\n\
          constantValue = falseFunc;\n\
        } else if (value === \"throwFunc\") {\n\
          constantValue = throwFunc;\n\
        } else if (value === \"noopPromiseResolve\") {\n\
          constantValue = noopPromiseResolve;\n\
        } else if (value === \"noopPromiseReject\") {\n\
          constantValue = noopPromiseReject;\n\
        } else if (/^\\d+$/.test(value)) {\n\
          constantValue = parseFloat(value);\n\
          if (nativeIsNaN(constantValue)) {\n\
            return;\n\
          }\n\
          if (Math.abs(constantValue) > 32767) {\n\
            return;\n\
          }\n\
        } else if (value === \"-1\") {\n\
          constantValue = -1;\n\
        } else if (value === \"\") {\n\
          constantValue = \"\";\n\
        } else if (value === \"yes\") {\n\
          constantValue = \"yes\";\n\
        } else if (value === \"no\") {\n\
          constantValue = \"no\";\n\
        } else {\n\
          return;\n\
        }\n\
        let canceled = false;\n\
        const mustCancel = function mustCancel(value) {\n\
          if (canceled) {\n\
            return canceled;\n\
          }\n\
          canceled = value !== undefined && constantValue !== undefined && typeof value !== typeof constantValue && value !== null;\n\
          return canceled;\n\
        };\n\
        const trapProp = function trapProp(base, prop, configurable, handler) {\n\
          if (!handler.init(base[prop])) {\n\
            return false;\n\
          }\n\
          const origDescriptor = Object.getOwnPropertyDescriptor(base, prop);\n\
          let prevSetter;\n\
          if (origDescriptor instanceof Object) {\n\
            if (!origDescriptor.configurable) {\n\
              const message = \"Property \'\".concat(prop, \"\' is not configurable\");\n\
              logMessage(source, message);\n\
              return false;\n\
            }\n\
            base[prop] = constantValue;\n\
            if (origDescriptor.set instanceof Function) {\n\
              prevSetter = origDescriptor.set;\n\
            }\n\
          }\n\
          Object.defineProperty(base, prop, {\n\
            configurable: configurable,\n\
            get() {\n\
              return handler.get();\n\
            },\n\
            set(a) {\n\
              if (prevSetter !== undefined) {\n\
                prevSetter(a);\n\
              }\n\
              handler.set(a);\n\
            }\n\
          });\n\
          return true;\n\
        };\n\
        const setChainPropAccess = function setChainPropAccess(owner, property) {\n\
          const chainInfo = getPropertyInChain(owner, property);\n\
          const base = chainInfo.base;\n\
          const prop = chainInfo.prop,\n\
            chain = chainInfo.chain;\n\
          const inChainPropHandler = {\n\
            factValue: undefined,\n\
            init(a) {\n\
              this.factValue = a;\n\
              return true;\n\
            },\n\
            get() {\n\
              return this.factValue;\n\
            },\n\
            set(a) {\n\
              if (this.factValue === a) {\n\
                return;\n\
              }\n\
              this.factValue = a;\n\
              if (a instanceof Object) {\n\
                setChainPropAccess(a, chain);\n\
              }\n\
            }\n\
          };\n\
          const endPropHandler = {\n\
            init(a) {\n\
              if (mustCancel(a)) {\n\
                return false;\n\
              }\n\
              return true;\n\
            },\n\
            get() {\n\
              return constantValue;\n\
            },\n\
            set(a) {\n\
              if (!mustCancel(a)) {\n\
                return;\n\
              }\n\
              constantValue = a;\n\
            }\n\
          };\n\
          if (!chain) {\n\
            const isTrapped = trapProp(base, prop, false, endPropHandler);\n\
            if (isTrapped) {\n\
              hit(source);\n\
            }\n\
            return;\n\
          }\n\
          if (base !== undefined && base[prop] === null) {\n\
            trapProp(base, prop, true, inChainPropHandler);\n\
            return;\n\
          }\n\
          if ((base instanceof Object || typeof base === \"object\") && isEmptyObject(base)) {\n\
            trapProp(base, prop, true, inChainPropHandler);\n\
          }\n\
          const propValue = owner[prop];\n\
          if (propValue instanceof Object || typeof propValue === \"object\" && propValue !== null) {\n\
            setChainPropAccess(propValue, chain);\n\
          }\n\
          trapProp(base, prop, true, inChainPropHandler);\n\
        };\n\
        setChainPropAccess(window, property);\n\
      }\n\
      function hit(source) {\n\
        if (source.verbose !== true) {\n\
          return;\n\
        }\n\
        try {\n\
          const log = console.log.bind(console);\n\
          const trace = console.trace.bind(console);\n\
          let prefix = source.ruleText || \"\";\n\
          if (source.domainName) {\n\
            const AG_SCRIPTLET_MARKER = \"#%#//\";\n\
            const UBO_SCRIPTLET_MARKER = \"##+js\";\n\
            let ruleStartIndex;\n\
            if (source.ruleText.indexOf(AG_SCRIPTLET_MARKER) > -1) {\n\
              ruleStartIndex = source.ruleText.indexOf(AG_SCRIPTLET_MARKER);\n\
            } else if (source.ruleText.indexOf(UBO_SCRIPTLET_MARKER) > -1) {\n\
              ruleStartIndex = source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);\n\
            }\n\
            const rulePart = source.ruleText.slice(ruleStartIndex);\n\
            prefix = \"\".concat(source.domainName).concat(rulePart);\n\
          }\n\
          log(\"\".concat(prefix, \" trace start\"));\n\
          if (trace) {\n\
            trace();\n\
          }\n\
          log(\"\".concat(prefix, \" trace end\"));\n\
        } catch (e) {}\n\
        if (typeof window.__debug === \"function\") {\n\
          window.__debug(source);\n\
        }\n\
      }\n\
      function logMessage(source, message) {\n\
        let forced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\
        let convertMessageToString = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n\
        const name = source.name,\n\
          ruleText = source.ruleText,\n\
          verbose = source.verbose;\n\
        if (!forced && !verbose) {\n\
          return;\n\
        }\n\
        const nativeConsole = console.log;\n\
        if (!convertMessageToString) {\n\
          nativeConsole(\"\".concat(name, \":\"), message);\n\
          return;\n\
        }\n\
        let messageStr = \"\".concat(name, \": \").concat(message);\n\
        if (ruleText) {\n\
          const RULE_MARKER = \"#%#//scriptlet\";\n\
          const markerIdx = ruleText.indexOf(RULE_MARKER);\n\
          if (markerIdx > -1) {\n\
            const ruleWithoutDomains = ruleText.slice(markerIdx, ruleText.length);\n\
            messageStr += \"; cannot apply rule: \".concat(ruleWithoutDomains);\n\
          }\n\
        }\n\
        nativeConsole(messageStr);\n\
      }\n\
      function noopArray() {\n\
        return [];\n\
      }\n\
      function noopObject() {\n\
        return {};\n\
      }\n\
      function noopFunc() {}\n\
      function noopCallbackFunc() {\n\
        return noopFunc;\n\
      }\n\
      function trueFunc() {\n\
        return true;\n\
      }\n\
      function falseFunc() {\n\
        return false;\n\
      }\n\
      function throwFunc() {\n\
        throw new Error();\n\
      }\n\
      function noopPromiseReject() {\n\
        return Promise.reject();\n\
      }\n\
      function noopPromiseResolve() {\n\
        let responseBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"{}\";\n\
        let responseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n\
        let responseType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"default\";\n\
        if (typeof Response === \"undefined\") {\n\
          return;\n\
        }\n\
        const response = new Response(responseBody, {\n\
          status: 200,\n\
          statusText: \"OK\"\n\
        });\n\
        Object.defineProperties(response, {\n\
          url: {\n\
            value: responseUrl\n\
          },\n\
          type: {\n\
            value: responseType\n\
          }\n\
        });\n\
        return Promise.resolve(response);\n\
      }\n\
      function getPropertyInChain(base, chain) {\n\
        const pos = chain.indexOf(\".\");\n\
        if (pos === -1) {\n\
          return {\n\
            base: base,\n\
            prop: chain\n\
          };\n\
        }\n\
        const prop = chain.slice(0, pos);\n\
        if (base === null) {\n\
          return {\n\
            base: base,\n\
            prop: prop,\n\
            chain: chain\n\
          };\n\
        }\n\
        const nextBase = base[prop];\n\
        chain = chain.slice(pos + 1);\n\
        if ((base instanceof Object || typeof base === \"object\") && isEmptyObject(base)) {\n\
          return {\n\
            base: base,\n\
            prop: prop,\n\
            chain: chain\n\
          };\n\
        }\n\
        if (nextBase === null) {\n\
          return {\n\
            base: base,\n\
            prop: prop,\n\
            chain: chain\n\
          };\n\
        }\n\
        if (nextBase !== undefined) {\n\
          return getPropertyInChain(nextBase, chain);\n\
        }\n\
        Object.defineProperty(base, prop, {\n\
          configurable: true\n\
        });\n\
        return {\n\
          base: base,\n\
          prop: prop,\n\
          chain: chain\n\
        };\n\
      }\n\
      function toRegExp() {\n\
        let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\
        const DEFAULT_VALUE = \".?\";\n\
        const FORWARD_SLASH = \"/\";\n\
        if (input === \"\") {\n\
          return new RegExp(DEFAULT_VALUE);\n\
        }\n\
        if (input[0] === FORWARD_SLASH && input[input.length - 1] === FORWARD_SLASH) {\n\
          return new RegExp(input.slice(1, -1));\n\
        }\n\
        const escaped = input.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n\
        return new RegExp(escaped);\n\
      }\n\
      function matchStackTrace(stackMatch, stackTrace) {\n\
        if (!stackMatch || stackMatch === \"\") {\n\
          return true;\n\
        }\n\
        if (shouldAbortInlineOrInjectedScript(stackMatch, stackTrace)) {\n\
          return true;\n\
        }\n\
        const stackRegexp = toRegExp(stackMatch);\n\
        const refinedStackTrace = stackTrace.split(\"\\n\").slice(2).map(function (line) {\n\
          return line.trim();\n\
        }).join(\"\\n\");\n\
        return getNativeRegexpTest().call(stackRegexp, refinedStackTrace);\n\
      }\n\
      function nativeIsNaN(num) {\n\
        const native = Number.isNaN || window.isNaN;\n\
        return native(num);\n\
      }\n\
      function isEmptyObject(obj) {\n\
        return Object.keys(obj).length === 0 && !obj.prototype;\n\
      }\n\
      function getNativeRegexpTest() {\n\
        return Object.getOwnPropertyDescriptor(RegExp.prototype, \"test\").value;\n\
      }\n\
      function shouldAbortInlineOrInjectedScript(stackMatch, stackTrace) {\n\
        const INLINE_SCRIPT_STRING = \"inlineScript\";\n\
        const INJECTED_SCRIPT_STRING = \"injectedScript\";\n\
        const INJECTED_SCRIPT_MARKER = \"<anonymous>\";\n\
        const isInlineScript = function isInlineScript(stackMatch) {\n\
          return stackMatch.indexOf(INLINE_SCRIPT_STRING) > -1;\n\
        };\n\
        const isInjectedScript = function isInjectedScript(stackMatch) {\n\
          return stackMatch.indexOf(INJECTED_SCRIPT_STRING) > -1;\n\
        };\n\
        if (!(isInlineScript(stackMatch) || isInjectedScript(stackMatch))) {\n\
          return false;\n\
        }\n\
        let documentURL = window.location.href;\n\
        const pos = documentURL.indexOf(\"#\");\n\
        if (pos !== -1) {\n\
          documentURL = documentURL.slice(0, pos);\n\
        }\n\
        const stackSteps = stackTrace.split(\"\\n\").slice(2).map(function (line) {\n\
          return line.trim();\n\
        });\n\
        const stackLines = stackSteps.map(function (line) {\n\
          let stack;\n\
          const getStackTraceURL = /(.*?@)?(\\S+)(:\\d+):\\d+\\)?$/.exec(line);\n\
          if (getStackTraceURL) {\n\
            let stackURL = getStackTraceURL[2];\n\
            if (startsWith(stackURL, \"(\")) {\n\
              stackURL = stackURL.slice(1);\n\
            }\n\
            if (startsWith(stackURL, INJECTED_SCRIPT_MARKER)) {\n\
              stackURL = INJECTED_SCRIPT_STRING;\n\
              let stackFunction = getStackTraceURL[1] !== undefined ? getStackTraceURL[1].slice(0, -1) : line.slice(0, getStackTraceURL.index).trim();\n\
              if (startsWith(stackFunction, \"at\")) {\n\
                stackFunction = stackFunction.slice(2).trim();\n\
              }\n\
              stack = \"\".concat(stackFunction, \" \").concat(stackURL).trim();\n\
            } else {\n\
              stack = stackURL;\n\
            }\n\
          } else {\n\
            stack = line;\n\
          }\n\
          return stack;\n\
        });\n\
        if (stackLines) {\n\
          for (let index = 0; index < stackLines.length; index += 1) {\n\
            if (isInlineScript(stackMatch) && documentURL === stackLines[index]) {\n\
              return true;\n\
            }\n\
            if (isInjectedScript(stackMatch) && startsWith(stackLines[index], INJECTED_SCRIPT_STRING)) {\n\
              return true;\n\
            }\n\
          }\n\
        }\n\
        return false;\n\
      }\n\
      const updatedArgs = args ? [].concat(source).concat(args) : [source];\n\
      try {\n\
        setConstant.apply(this, updatedArgs);\n\
      } catch (e) {\n\
        console.log(e);\n\
      }\n\
    })({\"args\":[\"PartnersCoupang\",\"undefined\"],\"engine\":\"extension\",\"name\":\"set-constant\",\"ruleText\":\"~coupang.com,~coupangcdn.com#%#//scriptlet(\'set-constant\', \'PartnersCoupang\', \'undefined\')\",\"verbose\":false,\"domainName\":\"http://cassandra.pw/scan.php\",\"version\":\"4.1.57\"}, [\"PartnersCoupang\",\"undefined\"]);\n\
                } catch (ex) {\n\
                    console.error(\'Error executing AG js: \' + ex);\n\
                }\n\
            })();\n\
            ";                    var FRAME_REQUESTS_LIMIT = 500;                    var frameRequests = 0;                    function waitParent () {                        frameRequests += 1;                        var parent = document.head || document.documentElement;                        if (parent) {                            try {                                parent.appendChild(script);                                parent.removeChild(script);                            } catch (e) {                            } finally {                                window.scriptExecuted1693558544025 = true;                                return true;                            }                        }                        if(frameRequests < FRAME_REQUESTS_LIMIT) {                            requestAnimationFrame(waitParent);                        } else {                            console.log("AdGuard: document.head or document.documentElement were unavailable too long");                        }                    }                    waitParent();                })()
