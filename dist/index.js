/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kjsUtils"] = factory();
	else
		root["kjsUtils"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.ts":
/*!****************************!*\
  !*** ./src/array/chunk.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.chunk = void 0;\n/**\n * @description 数组分块\n * @param {Array} array 原数组\n * @param {Number} size 分块大小\n * @return {Array}\n */\nfunction chunk(array, size) {\n    if (size === void 0) { size = 1; }\n    if (!Array.isArray(array)) {\n        throw new TypeError(\"not a array\");\n    }\n    if (array.length === 0) {\n        return [];\n    }\n    var result = [];\n    var tmp = [];\n    array.forEach(function (item) {\n        if (tmp.length === 0) {\n            result.push(tmp);\n        }\n        tmp.push(item);\n        if (tmp.length === size) {\n            tmp = [];\n        }\n    });\n    return result;\n}\nexports.chunk = chunk;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/chunk.ts?");

/***/ }),

/***/ "./src/array/concat.ts":
/*!*****************************!*\
  !*** ./src/array/concat.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nexports.__esModule = true;\nexports.concat = void 0;\n/**\n * @description 数组合并\n * @param {Array} arr1\n * @param {*} args\n */\nfunction concat(arr1) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    var result = __spreadArray([], arr1, true);\n    args.forEach(function (item) {\n        if (Array.isArray(item)) {\n            result = __spreadArray(__spreadArray([], result, true), item, true);\n        }\n        else {\n            result.push(item);\n        }\n    });\n    return result;\n}\nexports.concat = concat;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/concat.ts?");

/***/ }),

/***/ "./src/array/decleares.ts":
/*!********************************!*\
  !*** ./src/array/decleares.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/**\n * @Desc 数组相关方法\n * @Author wk.Shu\n * @Date 2021-11-11\n */\nexports.__esModule = true;\nexports.some = exports.every = exports.findIndex = exports.find = exports.filter = exports.reduce = exports.map = void 0;\n/**\n * @description 数组遍历\n * @param {Array} arr 调用数组\n * @param {Function} callback 回调函数\n * @return {Array}\n */\nfunction map(arr, callback) {\n    if (!Array.isArray(arr)) {\n        throw new TypeError(\"not a array, please in array\");\n    }\n    // 声明一个空数组\n    var result = [];\n    for (var i = 0; i < arr.length; i++) {\n        // 执行回掉\n        var element = arr[i];\n        result.push(callback(element, i, arr));\n    }\n    return result;\n}\nexports.map = map;\n/**\n * @description 数组reduce方法\n * @param {Array} arr 调用数组\n * @param {Function} callback 回调函数\n * @param {Number} initValue 初始值\n * @return {Number | String}\n */\nfunction reduce(arr, callback, initValue) {\n    if (initValue === void 0) { initValue = 0; }\n    var result = initValue;\n    for (var i = 0; i < arr.length; i++) {\n        var element = arr[i];\n        result = callback(result, element, i, arr);\n    }\n    return result;\n}\nexports.reduce = reduce;\n/**\n * @description 数组过滤\n * @param {Array} arr 原数组\n * @param {Function} callback 回调函数\n * @return {Array}\n */\nfunction filter(arr, callback) {\n    var result = [];\n    for (var i = 0; i < arr.length; i++) {\n        var element = arr[i];\n        // 如果结果为真，放入result数组\n        if (callback(element, i, arr)) {\n            result.push(element);\n        }\n    }\n    return result;\n}\nexports.filter = filter;\n/**\n * @description 数组查找\n * @param {Array} arr 原数组\n * @param {Function} callback 回调函数\n * @return {*}\n */\nfunction find(arr, callback) {\n    for (var i = 0; i < arr.length; i++) {\n        var element = arr[i];\n        if (callback(element, i, arr)) {\n            return element;\n        }\n    }\n}\nexports.find = find;\n/**\n * @description 数组查找下标\n * @param {Array} arr 原数组\n * @param {Function} callback 回调函数\n * @return {Number}\n */\nfunction findIndex(arr, callback) {\n    for (var i = 0; i < arr.length; i++) {\n        var element = arr[i];\n        if (callback(element, i, arr)) {\n            return i;\n        }\n    }\n    return -1;\n}\nexports.findIndex = findIndex;\n/**\n * @description 数组所有元素是否满足条件\n * @param {Array} arr\n * @param {Function} callback\n * @return {Boolean}\n */\nfunction every(arr, callback) {\n    for (var i = 0; i < arr.length; i++) {\n        var element = arr[i];\n        if (!callback(element, i, arr)) {\n            return false;\n        }\n    }\n    return true;\n}\nexports.every = every;\n/**\n * @description 数组是否有元素满足条件\n * @param {Array} arr\n * @param {function} callback\n * @return {Boolean}\n */\nfunction some(arr, callback) {\n    for (var i = 0; i < arr.length; i++) {\n        var element = arr[i];\n        if (callback(element, i, arr)) {\n            return true;\n        }\n    }\n    return false;\n}\nexports.some = some;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/decleares.ts?");

/***/ }),

/***/ "./src/array/difference.ts":
/*!*********************************!*\
  !*** ./src/array/difference.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nexports.__esModule = true;\nexports.difference = void 0;\n/**\n * @description 数组取差集\n * @param {Array} arr1 数组1\n * @param {Array} arr2 数组2\n */\nfunction difference(arr1, arr2) {\n    if (arr1.length === 0) {\n        return [];\n    }\n    else if (arr2.length === 0) {\n        return __spreadArray([], arr1, true);\n    }\n    return arr1.filter(function (item) { return !arr2.includes(item); });\n}\nexports.difference = difference;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/difference.ts?");

/***/ }),

/***/ "./src/array/drop.ts":
/*!***************************!*\
  !*** ./src/array/drop.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.dropRight = exports.drop = void 0;\n/**\n * @description 获取数组部分元素\n * @param {Array} array\n * @param {Number} size\n * @return {Array}\n */\nfunction drop(array, size) {\n    return array.filter(function (item, i) { return i >= size; });\n}\nexports.drop = drop;\n/**\n * @description 获取数组部分元素(从尾部开始)\n * @param {Array} array\n * @param {*} size\n * @return {Array}\n */\nfunction dropRight(array, size) {\n    return array.filter(function (_, i) { return i < array.length - size; });\n}\nexports.dropRight = dropRight;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/drop.ts?");

/***/ }),

/***/ "./src/array/flatten.ts":
/*!******************************!*\
  !*** ./src/array/flatten.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nexports.__esModule = true;\nexports.flatten2 = exports.flatten = void 0;\n/**\n * @description 数组扁平化\n * @param {Array} array\n */\nfunction flatten(array) {\n    var result = [];\n    array.forEach(function (item) {\n        if (Array.isArray(item)) {\n            result = __spreadArray(__spreadArray([], result, true), flatten(item), true);\n        }\n        else {\n            result.push(item);\n        }\n    });\n    return result;\n}\nexports.flatten = flatten;\n/**\n * @description 数组扁平化\n * @param {Array} array\n */\nfunction flatten2(array) {\n    var result = __spreadArray([], array, true);\n    while (result.some(function (item) { return Array.isArray(item); })) {\n        result = [].concat.apply([], result);\n    }\n    return result;\n}\nexports.flatten2 = flatten2;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/flatten.ts?");

/***/ }),

/***/ "./src/array/pull.ts":
/*!***************************!*\
  !*** ./src/array/pull.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nexports.__esModule = true;\nexports.pullAll = exports.pull = void 0;\n/**\n * @description 删除数组中的元素,返回删除的元素数组\n * @param {Array} array\n * @param  {...any} args\n * @return {Array}\n */\nfunction pull(array) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    var result = [];\n    for (var i = 0; i < array.length; i++) {\n        var element = array[i];\n        if (args.includes(element)) {\n            result.push(element);\n            array.splice(i, 1);\n            i--;\n        }\n    }\n    // result = array.filter(item => args.includes(item))\n    // array = array.filter(item => !args.includes(item))\n    return result;\n}\nexports.pull = pull;\n/**\n * @description  删除数组中的元素,返回删除的元素数组\n * @param {Array} array\n * @param {Array} args\n */\nfunction pullAll(array, args) {\n    return pull.apply(void 0, __spreadArray([array], args, false));\n}\nexports.pullAll = pullAll;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/pull.ts?");

/***/ }),

/***/ "./src/array/slice.ts":
/*!****************************!*\
  !*** ./src/array/slice.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.slice = void 0;\n/**\n * @description 数组切片(左闭右开)\n * @param {Array} array\n * @param {Number} start\n * @param {Number} end\n */\nfunction slice(array, start, end) {\n    if (start === void 0) { start = 0; }\n    var result = [];\n    if (array.length === 0 || start >= array.length) {\n        return [];\n    }\n    // 如果参数为负数，则从最后开始往前取\n    if (start < 0 && !end) {\n        for (var i = array.length + start; i < array.length; i++) {\n            result.push(array[i]);\n        }\n        return result;\n    }\n    end = end || array.length;\n    if (end < start) {\n        end = array.length;\n    }\n    for (var i = 0; i < array.length; i++) {\n        var element = array[i];\n        if (i >= start && i < end) {\n            result.push(element);\n        }\n    }\n    return result;\n}\nexports.slice = slice;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/slice.ts?");

/***/ }),

/***/ "./src/array/unique.ts":
/*!*****************************!*\
  !*** ./src/array/unique.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.unique3 = exports.unique2 = exports.unique = void 0;\n/**\n * @description 数组去重(借用includes或者indexof方法，实际两层循环)\n * @param {Array} array 原数组\n * @return {Array}\n */\nfunction unique(array) {\n    var result = [];\n    for (var i = 0; i < array.length; i++) {\n        var element = array[i];\n        if (!result.includes(element)) {\n            result.push(element);\n        }\n    }\n    return result;\n}\nexports.unique = unique;\n/**\n * @description 数组去重2(借用对象)，一层循环完成\n * @param {Array} array 原数组\n * @return {Array}\n */\nfunction unique2(array) {\n    var result = [];\n    var tmp = {};\n    for (var i = 0; i < array.length; i++) {\n        var item = array[i];\n        if (!tmp[item]) {\n            tmp[item] = true;\n            result.push(item);\n        }\n    }\n    return result;\n}\nexports.unique2 = unique2;\n/**\n * @description 数组去重3(借用ES6集合Set, 代码简洁)\n * @param {Array} array 原数组\n * @return {Array}\n */\nfunction unique3(array) {\n    return Array.from(new Set(array));\n}\nexports.unique3 = unique3;\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/unique.ts?");

/***/ }),

/***/ "./src/axios/index.ts":
/*!****************************!*\
  !*** ./src/axios/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.axios = void 0;\n/**\n *\n * @param {Object} param0\n * @return {Promise}\n */\nfunction axios(_a) {\n    var method = _a.method, url = _a.url, params = _a.params, data = _a.data;\n    return new Promise(function (resolve, reject) {\n        // 1. 创建http对象\n        var xhr = new XMLHttpRequest();\n        // 2. 初始化\n        //    --处理params参数成 a=100&b=200形式\n        var str = '';\n        for (var key in params) {\n            if (Object.hasOwnProperty.call(params, key)) {\n                var element = params[key];\n                str += \"\".concat(key, \"=\").concat(element, \"&\");\n            }\n        }\n        str = str.slice(0, -1);\n        // 3. 发起请求\n        xhr.open(method, url + '?' + str);\n        if (['POST', 'PUT', 'DELETE'].includes(method.toUpperCase())) {\n            // 设置content-type mime类型\n            xhr.setRequestHeader(\"Content-Type\", \"application/json\");\n            xhr.send(JSON.stringify(data));\n        }\n        else {\n            xhr.send();\n        }\n        // 设置相应类型为json\n        xhr.responseType = 'json';\n        // 4. 处理结果\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                // 判断响应码\n                if (xhr.status >= 200 && xhr.status < 300) {\n                    resolve({\n                        status: xhr.status,\n                        message: xhr.statusText,\n                        data: xhr.response\n                    });\n                }\n                else {\n                    reject(new Error(\"请求失败,状态码为\" + xhr.status));\n                }\n            }\n        };\n    });\n}\nexports.axios = axios;\n/**\n * @description get请求\n * @param {String} url 请求地址\n * @param {Object} options 请求参数\n * @return {Promise}\n */\naxios.get = function (url, options) {\n    return axios(Object.assign(options, { method: 'get', url: url }));\n};\n/**\n * @description post请求\n * @param {String} url 请求地址\n * @param {Object} options 请求参数\n * @return {Promise}\n */\naxios.post = function (url, options) {\n    return axios(Object.assign(options, { method: 'post', url: url }));\n};\n/**\n * @description post请求\n * @param {String} url 请求地址\n * @param {Object} options 请求参数\n * @return {Promise}\n */\naxios.put = function (url, options) {\n    return axios(Object.assign(options, { method: 'put', url: url }));\n};\n/**\n * @description post请求\n * @param {String} url 请求地址\n * @param {Object} options 请求参数\n * @return {Promise}\n */\naxios[\"delete\"] = function (url, options) {\n    return axios(Object.assign(options, { method: 'delete', url: url }));\n};\n/**\n * @description 获取地址栏参数\n * @param url 需要获取地址的参数\n */\naxios.getQuery = function (url) {\n    var search = url.split('?')[1];\n    if (!search) {\n        return {};\n    }\n    return JSON.parse('{\"' +\n        decodeURIComponent(search)\n            .replace(/\"/g, '\\\\\"')\n            .replace(/&/g, '\",\"')\n            .replace(/=/g, '\":\"')\n            .replace(/\\+/g, ' ') +\n        '\"}');\n};\n\n\n//# sourceURL=webpack://kjsUtils/./src/axios/index.ts?");

/***/ }),

/***/ "./src/date/index.ts":
/*!***************************!*\
  !*** ./src/date/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.dateFormat = void 0;\n/**\n * @description 格式化日期时间\n * @param date 格式化的时间戳或者时间对象\n * @param format 格式(yyyy-mm-dd)\n */\nfunction dateFormat(date, fmt) {\n    var ret;\n    if (!(date instanceof Date)) {\n        // 判断是否时间对象类型, \n        date = new Date(date);\n    }\n    var opt = {\n        'Y+': date.getFullYear().toString(),\n        'y+': date.getFullYear().toString(),\n        'm+': (date.getMonth() + 1).toString(),\n        'd+': date.getDate().toString(),\n        'H+': date.getHours().toString(),\n        'h+': date.getHours().toString(),\n        'M+': date.getMinutes().toString(),\n        'S+': date.getSeconds().toString() // 秒\n        // 有其他格式化字符需求可以继续添加，必须转化成字符串\n    };\n    for (var k in opt) {\n        var reg = new RegExp('(' + k + ')');\n        ret = reg.exec(fmt);\n        if (ret) {\n            // 判断长度，如果长度不够，就在字符串前面补充0至相应位数，主要小于十月，小于十号之类的情况\n            var strReplace = (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0'));\n            // 替换字符串\n            fmt = fmt.replace(ret[1], strReplace);\n        }\n    }\n    return fmt;\n}\nexports.dateFormat = dateFormat;\n\n\n//# sourceURL=webpack://kjsUtils/./src/date/index.ts?");

/***/ }),

/***/ "./src/event-bind/index.ts":
/*!*********************************!*\
  !*** ./src/event-bind/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/**\n * 事件委托、冒泡\n */\nexports.__esModule = true;\nexports.eventDelegation = void 0;\n/**\n * @description 事件委托\n * @param {String|HTMLElement} el 元素\n * @param {String} eventType 事件类型\n * @param {Function} fn 事件回调\n * @param {String} selector 子元素选择器\n */\nfunction eventDelegation(el, eventType, fn, selector) {\n    if (typeof el === 'string') {\n        el = document.querySelector(el);\n    }\n    // 事件绑定\n    if (!selector) {\n        // 没有传递子元素选择器，给el绑定事件\n        el.addEventListener(eventType, fn);\n    }\n    else {\n        el.addEventListener(eventType, function (e) {\n            // 获取点击的事件源\n            var target = e.target;\n            //判断选择器与元素是否相符\n            if (target.matches(selector)) {\n                fn.call(target);\n            }\n        });\n    }\n}\nexports.eventDelegation = eventDelegation;\n\n\n//# sourceURL=webpack://kjsUtils/./src/event-bind/index.ts?");

/***/ }),

/***/ "./src/event-bus/index.ts":
/*!********************************!*\
  !*** ./src/event-bus/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.eventBus = exports.EventBus = void 0;\nvar EventBus = /** @class */ (function () {\n    function EventBus() {\n        this.callbacks = {};\n    }\n    /**\n     * @description 触发事件\n     * @param {String} type 事件名\n     * @param {Function} callback 回调函数\n     */\n    EventBus.prototype.on = function (type, callback) {\n        if (this.callbacks[type]) {\n            this.callbacks[type].push(callback);\n        }\n        else {\n            // callbacks中没有该事件\n            this.callbacks[type] = [callback];\n        }\n    };\n    /**\n     * @description 触发事件\n     * @param {String} type 事件名\n     * @param {any} data 事件参数\n     */\n    EventBus.prototype.emit = function (type, data) {\n        if (this.callbacks[type] && this.callbacks[type].length > 0) {\n            this.callbacks[type].forEach(function (callback) {\n                callback(data);\n            });\n        }\n        else {\n            throw new TypeError(\"没有该事件或该事件已被删除。。。\");\n        }\n    };\n    /**\n     * @description 解绑事件(不传入则全部清除)\n     * @param {String} eventName 事件名称\n     */\n    EventBus.prototype.off = function (eventName) {\n        if (eventName) {\n            delete this.callbacks[eventName];\n        }\n        else {\n            this.callbacks = {};\n        }\n    };\n    return EventBus;\n}());\nexports.EventBus = EventBus;\nexports.eventBus = new EventBus();\n\n\n//# sourceURL=webpack://kjsUtils/./src/event-bus/index.ts?");

/***/ }),

/***/ "./src/function/apply.ts":
/*!*******************************!*\
  !*** ./src/function/apply.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.apply = void 0;\n// apply作用跟call类似，但是函数参数是以数组形式传入，call是以单个参数传入\nfunction apply(Fn, obj, args) {\n    if (typeof Fn !== 'function') {\n        throw new TypeError(\"not a function\");\n    }\n    obj = obj || globalThis;\n    obj.temp = Fn;\n    var result = obj.temp.apply(obj, args);\n    delete obj.temp;\n    return result;\n}\nexports.apply = apply;\n\n\n//# sourceURL=webpack://kjsUtils/./src/function/apply.ts?");

/***/ }),

/***/ "./src/function/bind.ts":
/*!******************************!*\
  !*** ./src/function/bind.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nexports.__esModule = true;\nexports.bind = void 0;\n// bind类似于call，但是call会执行函数，bind会返回一个新的函数\nfunction bind(Fn, obj) {\n    var args = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        args[_i - 2] = arguments[_i];\n    }\n    if (typeof Fn !== 'function') {\n        throw new TypeError(\"not a function\");\n    }\n    return function () {\n        var args2 = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args2[_i] = arguments[_i];\n        }\n        // 执行call\n        return Fn.call.apply(Fn, __spreadArray(__spreadArray([obj], args, false), args2, false));\n    };\n}\nexports.bind = bind;\n\n\n//# sourceURL=webpack://kjsUtils/./src/function/bind.ts?");

/***/ }),

/***/ "./src/function/call.ts":
/*!******************************!*\
  !*** ./src/function/call.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.call = void 0;\nfunction call(Fn, obj) {\n    var args = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        args[_i - 2] = arguments[_i];\n    }\n    if (typeof Fn !== 'function') {\n        throw new TypeError(\"不是函数调用\");\n    }\n    obj = obj || globalThis;\n    // 为obj 添加临时方法\n    obj.temp = Fn;\n    var result = obj.temp.apply(obj, args);\n    delete obj.temp;\n    return result;\n}\nexports.call = call;\n\n\n//# sourceURL=webpack://kjsUtils/./src/function/call.ts?");

/***/ }),

/***/ "./src/function/throttle.ts":
/*!**********************************!*\
  !*** ./src/function/throttle.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.debounce = exports.throttle = void 0;\n/**\n * @description 函数防抖(等待时间内只执行一次)\n * @param {Function} callback 需要防抖的函数\n * @param {Number} wait 等待时间(毫秒)\n * @return {Function}\n */\nfunction throttle(callback, wait) {\n    var start = 0;\n    return function (event) {\n        var now = Date.now();\n        if (now - start >= wait) {\n            // 间隔大于设定时间,满足执行回调函数\n            callback.call(this, event);\n            // 修改开始时间\n            start = now;\n        }\n    };\n}\nexports.throttle = throttle;\n/**\n * @description 节流(在上一次调用后，等待时间结束后执行一次)\n * @param {Function} callback 需要节流的函数\n * @param {Number} time 等待时间(毫秒)\n * @return {Function}\n */\nfunction debounce(callback, time) {\n    var timeId = null; //定时器\n    return function (event) {\n        var _this = this;\n        if (timeId != null) {\n            clearTimeout(timeId);\n        }\n        timeId = setTimeout(function () {\n            // 因为箭头函数this指向上层this，所以这里写this效果相同\n            callback.call(_this, event);\n            timeId = null;\n        }, time);\n    };\n}\nexports.debounce = debounce;\n\n\n//# sourceURL=webpack://kjsUtils/./src/function/throttle.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nexports.numberToChinese = exports.dateFormat = exports.truncate = exports.reverseString = exports.palindrome = exports.PubSub = exports.customNew = exports.customInstanceof = exports.deepClone4 = exports.deepClone3 = exports.deepClone2 = exports.deepClone1 = exports.debounce = exports.throttle = exports.call = exports.bind = exports.apply = exports.eventDelegation = exports.eventBus = exports.axios = exports.slice = exports.unique3 = exports.unique2 = exports.unique = exports.pullAll = exports.pull = exports.flatten2 = exports.flatten = exports.dropRight = exports.drop = exports.difference = exports.filter = exports.some = exports.every = exports.findIndex = exports.find = exports.reduce = exports.map = exports.concat = exports.chunk = void 0;\n// 数组相关导出\nvar chunk_1 = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.ts\");\nexports.chunk = chunk_1.chunk;\nvar concat_1 = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.ts\");\nexports.concat = concat_1.concat;\nvar decleares_1 = __webpack_require__(/*! ./array/decleares */ \"./src/array/decleares.ts\");\nexports.map = decleares_1.map;\nexports.reduce = decleares_1.reduce;\nexports.find = decleares_1.find;\nexports.findIndex = decleares_1.findIndex;\nexports.every = decleares_1.every;\nexports.some = decleares_1.some;\nexports.filter = decleares_1.filter;\nvar difference_1 = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.ts\");\nexports.difference = difference_1.difference;\nvar drop_1 = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.ts\");\nexports.drop = drop_1.drop;\nexports.dropRight = drop_1.dropRight;\nvar flatten_1 = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.ts\");\nexports.flatten = flatten_1.flatten;\nexports.flatten2 = flatten_1.flatten2;\nvar pull_1 = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.ts\");\nexports.pull = pull_1.pull;\nexports.pullAll = pull_1.pullAll;\nvar unique_1 = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.ts\");\nexports.unique = unique_1.unique;\nexports.unique2 = unique_1.unique2;\nexports.unique3 = unique_1.unique3;\nvar slice_1 = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.ts\");\nexports.slice = slice_1.slice;\n// axios\nvar index_1 = __webpack_require__(/*! ./axios/index */ \"./src/axios/index.ts\");\nexports.axios = index_1.axios;\n// eventBus\nvar index_2 = __webpack_require__(/*! ./event-bus/index */ \"./src/event-bus/index.ts\");\nexports.eventBus = index_2.eventBus;\n// eventDelegation, 事件委托\nvar index_3 = __webpack_require__(/*! ./event-bind/index */ \"./src/event-bind/index.ts\");\nexports.eventDelegation = index_3.eventDelegation;\n// function相关\nvar apply_1 = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.ts\");\nexports.apply = apply_1.apply;\nvar bind_1 = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.ts\");\nexports.bind = bind_1.bind;\nvar call_1 = __webpack_require__(/*! ./function/call */ \"./src/function/call.ts\");\nexports.call = call_1.call;\nvar throttle_1 = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.ts\");\nexports.throttle = throttle_1.throttle;\nexports.debounce = throttle_1.debounce;\n//object相关\nvar clone_1 = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.ts\");\nexports.deepClone1 = clone_1.deepClone1;\nexports.deepClone2 = clone_1.deepClone2;\nexports.deepClone3 = clone_1.deepClone3;\nexports.deepClone4 = clone_1.deepClone4;\nvar customInstanceof_1 = __webpack_require__(/*! ./object/customInstanceof */ \"./src/object/customInstanceof.ts\");\nexports.customInstanceof = customInstanceof_1.customInstanceof;\nvar customNew_1 = __webpack_require__(/*! ./object/customNew */ \"./src/object/customNew.ts\");\nexports.customNew = customNew_1.customNew;\n// 订阅发布消息相关\nvar index_4 = __webpack_require__(/*! ./pub-sub/index */ \"./src/pub-sub/index.ts\");\nexports.PubSub = index_4.PubSub;\n// 字符串相关\nvar index_5 = __webpack_require__(/*! ./string/index */ \"./src/string/index.ts\");\nexports.palindrome = index_5.palindrome;\nexports.reverseString = index_5.reverseString;\nexports.truncate = index_5.truncate;\nvar index_6 = __webpack_require__(/*! ./date/index */ \"./src/date/index.ts\");\nexports.dateFormat = index_6.dateFormat;\nvar numberToChinese_1 = __webpack_require__(/*! ./numberToChinese/numberToChinese */ \"./src/numberToChinese/numberToChinese.ts\");\nexports.numberToChinese = numberToChinese_1.numberToChinese;\nexports[\"default\"] = {\n    chunk: chunk_1.chunk,\n    concat: concat_1.concat,\n    map: decleares_1.map,\n    reduce: decleares_1.reduce,\n    find: decleares_1.find,\n    findIndex: decleares_1.findIndex,\n    every: decleares_1.every,\n    some: decleares_1.some,\n    filter: decleares_1.filter,\n    difference: difference_1.difference,\n    drop: drop_1.drop,\n    dropRight: drop_1.dropRight,\n    flatten: flatten_1.flatten,\n    flatten2: flatten_1.flatten2,\n    pull: pull_1.pull,\n    pullAll: pull_1.pullAll,\n    unique: unique_1.unique,\n    unique2: unique_1.unique2,\n    unique3: unique_1.unique3,\n    slice: slice_1.slice,\n    axios: index_1.axios,\n    eventDelegation: index_3.eventDelegation,\n    apply: apply_1.apply,\n    bind: bind_1.bind,\n    call: call_1.call,\n    throttle: throttle_1.throttle,\n    debounce: throttle_1.debounce,\n    deepClone1: clone_1.deepClone1,\n    deepClone2: clone_1.deepClone2,\n    deepClone3: clone_1.deepClone3,\n    deepClone4: clone_1.deepClone4,\n    customInstanceof: customInstanceof_1.customInstanceof,\n    customNew: customNew_1.customNew,\n    PubSub: index_4.PubSub,\n    eventBus: index_2.eventBus,\n    palindrome: index_5.palindrome,\n    reverseString: index_5.reverseString,\n    truncate: index_5.truncate,\n    dateFormat: index_6.dateFormat,\n    numberToChinese: numberToChinese_1.numberToChinese\n};\n\n\n//# sourceURL=webpack://kjsUtils/./src/index.ts?");

/***/ }),

/***/ "./src/numberToChinese/numberToChinese.ts":
/*!************************************************!*\
  !*** ./src/numberToChinese/numberToChinese.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.numberToChinese = void 0;\nfunction getConfig(lang) {\n    if (lang === void 0) { lang = 'zh-CN'; }\n    var NumberStep = 4;\n    var numberMap = {\n        0: '零',\n        1: '一',\n        2: '二',\n        3: '三',\n        4: '四',\n        5: '五',\n        6: '六',\n        7: '七',\n        8: '八',\n        9: '九'\n    };\n    var unitMap = {\n        3: '',\n        2: '十',\n        1: '百',\n        0: '千'\n    };\n    var bigUnitMap = {\n        0: '',\n        1: '万',\n        2: '亿'\n    };\n    return {\n        NumberStep: NumberStep,\n        numberMap: numberMap,\n        unitMap: unitMap,\n        bigUnitMap: bigUnitMap\n    };\n}\n/**\n * 处理字符串中的连续零\n *\n * 该函数旨在将字符串中的连续零简化为单个零。这对于处理中文数字字符串特别有用，\n * 因为在中文数字中，连续的零通常只需要一个零来表示。\n *\n * @param str 待处理的字符串\n * @returns 返回处理后的字符串，其中连续的零被简化为单个零\n */\nfunction handleZero(str) {\n    return str.replace(/零+/g, '零');\n}\nfunction numberToChinese(num) {\n    var _a = getConfig(), NumberStep = _a.NumberStep, numberMap = _a.numberMap, unitMap = _a.unitMap, bigUnitMap = _a.bigUnitMap;\n    var numStr = num.toString();\n    // 借助数组循环截取\n    // const tmp: string[] = []\n    // for (let i = numStr.length; i >= 0; i -= NumberStep) {\n    //     let start = i - NumberStep\n    //     let end = i\n    //     if (start < 0 && end > 0) {\n    //         start = 0\n    //         const char = numStr.slice(start, end)\n    //         tmp.push(char)\n    //     } else {\n    //         const char = numStr.slice(start, end)\n    //         tmp.push(char)\n    //     }\n    // }\n    // const rNumberStr = tmp.reverse().filter(Boolean)\n    // 方法2: 借助正则\n    var rNumberStr = numStr.replace(/(?=(\\d{4})+$)/g, ',').split(',').filter(Boolean);\n    var resChinese = rNumberStr.map(function (num) {\n        var res = '';\n        // 不足4位补空格\n        if (num.length < NumberStep) {\n            num = num.padStart(NumberStep, ' ');\n        }\n        // 末尾有多个0，换成空格，比如1200 转成中文应该是一千二百\n        num = num.replace(/[0]+$/g, ' ');\n        for (var i = 0; i < num.length; i++) {\n            if (num[i] === ' ') {\n                continue;\n            }\n            var unit = unitMap[i];\n            var numCn = numberMap[num[i]];\n            // 如果是0后面不加单位\n            if (num[i] === '0') {\n                unit = '';\n            }\n            res += numCn + unit;\n        }\n        return handleZero(res);\n    });\n    return resChinese.reduce(function (prev, cur, idx) {\n        var bigUnit = bigUnitMap[resChinese.length - idx - 1];\n        return prev + cur + bigUnit;\n    }, '');\n}\nexports.numberToChinese = numberToChinese;\n\n\n//# sourceURL=webpack://kjsUtils/./src/numberToChinese/numberToChinese.ts?");

/***/ }),

/***/ "./src/object/clone.ts":
/*!*****************************!*\
  !*** ./src/object/clone.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.deepClone4 = exports.deepClone3 = exports.deepClone2 = exports.deepClone1 = void 0;\n/**\n * @description 深拷贝1，常见拷贝方式(不能克隆方法，不能解决循环引用)\n * @param {Object} target\n * @return {Object}\n */\nfunction deepClone1(target) {\n    return JSON.parse(JSON.stringify(target));\n}\nexports.deepClone1 = deepClone1;\n/**\n * @description 深拷贝2，递归拷贝方式(克隆方法，不能解决循环引用)\n * @param {Object} target\n * @return {Object}\n */\nfunction deepClone2(target) {\n    if (typeof target === 'object' && target !== null) {\n        var result = Array.isArray(target) ? [] : {};\n        for (var key in target) {\n            if (Object.hasOwnProperty.call(target, key)) {\n                result[key] = deepClone2(target[key]);\n            }\n        }\n        return result;\n    }\n    else {\n        return target;\n    }\n}\nexports.deepClone2 = deepClone2;\n/**\n * @description 深拷贝3，递归拷贝方式(利用map,解决循环引用)\n * @param {Object} target\n * @param {Map} hash\n * @return {Object}\n */\nfunction deepClone3(target, hash) {\n    if (hash === void 0) { hash = new Map(); }\n    if (typeof target === 'object' && target !== null) {\n        // 判断是否克隆过\n        if (hash.get(target)) {\n            return hash.get(target);\n        }\n        var result = Array.isArray(target) ? [] : {};\n        hash.set(target, result);\n        for (var key in target) {\n            if (Object.hasOwnProperty.call(target, key)) {\n                result[key] = deepClone3(target[key], hash);\n            }\n        }\n        return result;\n    }\n    else {\n        return target;\n    }\n}\nexports.deepClone3 = deepClone3;\n/**\n * @description 深拷贝4，递归拷贝方式(利用map,解决循环引用, 区分数组对象分别循环处理性能优化)\n * @param {Object} target\n * @param {Map} hash\n * @return {Object}\n */\nfunction deepClone4(target, hash) {\n    if (hash === void 0) { hash = new Map(); }\n    if (typeof target === 'object' && target !== null) {\n        // 判断是否克隆过\n        if (hash.get(target)) {\n            return hash.get(target);\n        }\n        var isArr = Array.isArray(target);\n        var result_1 = isArr ? [] : {};\n        hash.set(target, result_1);\n        if (isArr) {\n            // 数组的情况下\n            target.forEach(function (item, index) {\n                result_1[index] = deepClone4(item, hash);\n            });\n        }\n        else {\n            // 对象的情况\n            Object.keys(target).forEach(function (key) {\n                result_1[key] = deepClone4(target[key], hash);\n            });\n        }\n        return result_1;\n    }\n    else {\n        return target;\n    }\n}\nexports.deepClone4 = deepClone4;\n\n\n//# sourceURL=webpack://kjsUtils/./src/object/clone.ts?");

/***/ }),

/***/ "./src/object/customInstanceof.ts":
/*!****************************************!*\
  !*** ./src/object/customInstanceof.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.customInstanceof = void 0;\n/**\n * @description 判断L是否在R原型上\n * @param {Object} L\n * @param {*} R\n * @return {Boolean}\n */\nfunction customInstanceof(L, R) {\n    var LP = L.__proto__;\n    while (LP) {\n        if (LP === R.prototype) {\n            return true;\n        }\n        LP = LP.__proto__;\n    }\n    return false;\n}\nexports.customInstanceof = customInstanceof;\n\n\n//# sourceURL=webpack://kjsUtils/./src/object/customInstanceof.ts?");

/***/ }),

/***/ "./src/object/customNew.ts":
/*!*********************************!*\
  !*** ./src/object/customNew.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nexports.__esModule = true;\nexports.customNew = void 0;\n/**\n * @description\n * @param {Function} fn\n * @param  {...any} args\n */\nfunction customNew(fn) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    // 1. 创建一个新对象\n    var obj = {};\n    // 2. 修改内部this，指向新对象\n    var result = fn.call.apply(fn, __spreadArray([obj], args, false));\n    // 3. 修改新对象的原型\n    obj.__proto__ = fn.prototype;\n    // 4. 返回新对象\n    // --4.1 如果构造函数有返回值且为对象，返回该对象\n    // --4.2 没有返回值或返回值不是对象，返回新对象\n    return result instanceof Object ? result : obj;\n}\nexports.customNew = customNew;\n\n\n//# sourceURL=webpack://kjsUtils/./src/object/customNew.ts?");

/***/ }),

/***/ "./src/pub-sub/index.ts":
/*!******************************!*\
  !*** ./src/pub-sub/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.PubSub = exports.PubSubClass = void 0;\nvar PubSubClass = /** @class */ (function () {\n    function PubSubClass() {\n        this.callbacks = {};\n        this.id = 1;\n        this.callbacks = {};\n    }\n    /**\n     * @description 订阅\n     * @param {String} channel\n     * @param {Function} callback\n     */\n    PubSubClass.prototype.subscribe = function (channel, callback) {\n        var token = \"token_\" + this.id++;\n        this.callbacks[channel] = this.callbacks[channel] || {};\n        this.callbacks[channel][token] = callback;\n        // 返回唯一id\n        return token;\n    };\n    /**\n     * @description 发布\n     * @param {String} channel\n     * @param {any} data\n     */\n    PubSubClass.prototype.publish = function (channel, data) {\n        if (this.callbacks[channel]) {\n            Object.values(this.callbacks[channel]).forEach(function (fn) {\n                fn(data);\n            });\n        }\n    };\n    /**\n     * @description 取消订阅\n     * @param {Number} type 退订类型(1退订单个订阅,2清空订阅频道,3全部清空)\n     * @param {String} flag 取消订阅的频道或者唯一id\n     */\n    PubSubClass.prototype.unSubscribe = function (type, flag) {\n        switch (type) {\n            case 1:\n                this.unSubOfKey(flag);\n                break;\n            case 2:\n                this.unSubOfChannel(flag);\n                break;\n            case 3:\n                this.unSubOfAll();\n                break;\n            default: throw new TypeError(\"type类型错误\");\n        }\n    };\n    /**\n     * @description 清空所有订阅\n     */\n    PubSubClass.prototype.unSubOfAll = function () {\n        this.callbacks = {};\n    };\n    /**\n     * @description 清空单个订阅\n     * @param {String} key 订阅ID\n     */\n    PubSubClass.prototype.unSubOfKey = function (key) {\n        var callbackObj = Object.values(this.callbacks).find(function (item) { return item.hasOwnProperty(key); });\n        if (callbackObj) {\n            delete callbackObj[key];\n        }\n    };\n    /**\n     * @description 清空频道所有订阅\n     * @param {String} channel 频道名\n     */\n    PubSubClass.prototype.unSubOfChannel = function (channel) {\n        delete this.callbacks[channel];\n    };\n    return PubSubClass;\n}());\nexports.PubSubClass = PubSubClass;\nexports.PubSub = new PubSubClass();\n\n\n//# sourceURL=webpack://kjsUtils/./src/pub-sub/index.ts?");

/***/ }),

/***/ "./src/string/index.ts":
/*!*****************************!*\
  !*** ./src/string/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.truncate = exports.palindrome = exports.reverseString = void 0;\n/**\n * @description 反转字符串\n * @param {String} str\n * @return {String}\n */\nfunction reverseString(str) {\n    // return [...str].reverse().join()\n    return str.split('').reverse().join('');\n}\nexports.reverseString = reverseString;\n/**\n * @description 是否回文字符串\n * @param {String} str\n * @return {Boolean}\n */\nfunction palindrome(str) {\n    return reverseString(str) === str;\n}\nexports.palindrome = palindrome;\n/**\n * @description 字符串截断\n * @param {String} str\n * @param {Number} size\n */\nfunction truncate(str, size) {\n    return str.slice(0, size) + '...';\n}\nexports.truncate = truncate;\n\n\n//# sourceURL=webpack://kjsUtils/./src/string/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});