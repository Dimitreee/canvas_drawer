/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _drawCanvas = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = exports.Main = function Main() {
    _classCallCheck(this, Main);

    new _drawCanvas.DrawCanvas();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(0);

new _main.Main();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasCreator = exports.CanvasCreator = function () {
    function CanvasCreator() {
        _classCallCheck(this, CanvasCreator);

        this.canvasNode = document.createElement('canvas');
        this.canvasContainer = document.createElement('div');
        this.body = document.querySelector('body');
        this.element = null;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
    }

    _createClass(CanvasCreator, [{
        key: 'createCanvas',
        value: function createCanvas() {
            this.canvasContainer.classList.add(['canvas_container']);
            this.canvasContainer.appendChild(this.canvasNode);
            this.body.appendChild(this.canvasContainer);
            this.element = document.querySelector('canvas');
        }
    }, {
        key: 'addCanvasWidth',
        value: function addCanvasWidth() {
            this.canvasNode.style.width = this.w;
            this.canvasNode.style.height = this.h;
        }
    }]);

    return CanvasCreator;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CanvasContextCreator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas_creator = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasContextCreator = exports.CanvasContextCreator = function () {
    function CanvasContextCreator() {
        _classCallCheck(this, CanvasContextCreator);

        this.canvas = new _canvas_creator.CanvasCreator();
        this.canvas.addCanvasWidth();
        this.canvas.createCanvas();
        this.canvasElement = this.canvas.element;
        this.ctx = null;
    }

    _createClass(CanvasContextCreator, [{
        key: "getCanvasContext",
        value: function getCanvasContext() {
            this.ctx = this.canvasElement.getContext('2d');
            this.ctx.canvas.width = this.canvas.w;
            this.ctx.canvas.height = this.canvas.h;
        }
    }, {
        key: "setFillStyle",
        value: function setFillStyle(color) {}
    }, {
        key: "drawLine",
        value: function drawLine() {}
    }]);

    return CanvasContextCreator;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CanvasControls = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _context_creator = __webpack_require__(3);

var _data = __webpack_require__(5);

var _animation = __webpack_require__(7);

var _picker_controller = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasControls = exports.CanvasControls = function (_DataElements) {
    _inherits(CanvasControls, _DataElements);

    function CanvasControls() {
        _classCallCheck(this, CanvasControls);

        var _this = _possibleConstructorReturn(this, (CanvasControls.__proto__ || Object.getPrototypeOf(CanvasControls)).call(this));

        new _picker_controller.PickerController();

        _this.drawChecker = false;
        _this.draw = new _context_creator.CanvasContextCreator();
        _this.draw.getCanvasContext();
        _this.animation = new _animation.Animation(_this.draw.canvas.w, _this.draw.canvas.h, _this.draw.ctx);
        _this.addListeners();
        return _this;
    }

    _createClass(CanvasControls, [{
        key: 'addListeners',
        value: function addListeners() {
            document.addEventListener('mouseup', this.mouseUpHandler.bind(this), false);
            document.addEventListener('mousedown', this.mouseDownHandler.bind(this), false);
            document.addEventListener('mousemove', this.getCursorPosition.bind(this), false);
        }
    }, {
        key: 'getCursorPosition',
        value: function getCursorPosition(e) {
            if (this.drawChecker) {
                _get(CanvasControls.prototype.__proto__ || Object.getPrototypeOf(CanvasControls.prototype), 'setCords', this).call(this, e.clientX, e.clientY);
                this.animation.setCords(_get(CanvasControls.prototype.__proto__ || Object.getPrototypeOf(CanvasControls.prototype), 'getCords', this).call(this));
            }
        }
    }, {
        key: 'mouseDownHandler',
        value: function mouseDownHandler(e) {
            this.drawChecker = true;
            _get(CanvasControls.prototype.__proto__ || Object.getPrototypeOf(CanvasControls.prototype), 'setCords', this).call(this, e.clientX, e.clientY);
            this.animation.setCords(_get(CanvasControls.prototype.__proto__ || Object.getPrototypeOf(CanvasControls.prototype), 'getCords', this).call(this));
        }
    }, {
        key: 'mouseUpHandler',
        value: function mouseUpHandler() {
            this.drawChecker = false;
        }
    }, {
        key: 'startDraw',
        value: function startDraw() {
            this.draw.setFillStyle("#000");
            this.draw.drawLine();
        }
    }]);

    return CanvasControls;
}(_data.DataElements);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataElements = exports.DataElements = function () {
    function DataElements() {
        _classCallCheck(this, DataElements);

        this.pointerX = null;
        this.pointerY = null;
        this.cords = [];
    }

    _createClass(DataElements, [{
        key: "setCords",
        value: function setCords(x, y) {
            this.pointerX = x;
            this.pointerY = y;

            this.cords.push({ x: this.pointerX, y: this.pointerY });
        }
    }, {
        key: "getCords",
        value: function getCords() {
            return this.cords;
        }
    }]);

    return DataElements;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawCanvas = undefined;

var _canvas_Controls = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrawCanvas = exports.DrawCanvas = function DrawCanvas() {
    _classCallCheck(this, DrawCanvas);

    new _canvas_Controls.CanvasControls();
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = exports.Animation = function () {
    function Animation(w, h, ctx) {
        _classCallCheck(this, Animation);

        this.canvasWidth = w;
        this.canvasHeight = h;
        this.ctx = ctx;
        this.cords = null;

        window.requestAnimationFrame(this.drawLoop.bind(this));
    }

    _createClass(Animation, [{
        key: "drawLoop",
        value: function drawLoop() {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            if (this.cords) {
                this.drawLine();
            }

            window.requestAnimationFrame(this.drawLoop.bind(this));
        }
    }, {
        key: "setCords",
        value: function setCords(cords) {
            this.cords = cords;
        }
    }, {
        key: "drawLine",
        value: function drawLine() {
            var _this = this;

            this.cords.map(function (item) {
                _this.ctx.fillRect(item.x - 5, item.y - 5, 10, 10);
            });
        }
    }]);

    return Animation;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PickerCreator = exports.PickerCreator = function () {
    function PickerCreator() {
        _classCallCheck(this, PickerCreator);

        this.color = null;
        this.createNodes();
        this.insertNodes();
    }

    _createClass(PickerCreator, [{
        key: 'createNodes',
        value: function createNodes() {
            this.pickerNode = document.createElement('div');
            this.pickedColorNode = document.createElement('div');
            this.body = document.querySelector('body');

            this.addPickedColorNodeCssStyles();
            this.addPickerCssStyles();
        }
    }, {
        key: 'insertNodes',
        value: function insertNodes() {
            this.pickerNode.appendChild(this.pickedColorNode);
            this.body.appendChild(this.pickerNode);
        }
    }, {
        key: 'addPickerCssStyles',
        value: function addPickerCssStyles() {
            this.pickerNode.style.height = "52px";
            this.pickerNode.style.width = "52px";
            this.pickerNode.style.background = "#d5d5d5";
            this.pickerNode.style.border = "1px solid black";
            this.pickerNode.style.position = "fixed";
            this.pickerNode.style.bottom = "10px";
            this.pickerNode.style.left = "10px";
            this.pickerNode.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
            this.pickerNode.style.transition = "all 0.3s cubic-bezier(.25,.8,.25,1)";
            this.pickerNode.style.padding = "5px";
            this.pickerNode.style.boxSizing = "border-box";
            this.pickerNode.style.cursor = "pointer";
        }
    }, {
        key: 'addPickedColorNodeCssStyles',
        value: function addPickedColorNodeCssStyles() {
            this.pickedColorNode.style.width = "40px";
            this.pickedColorNode.style.height = "40px";
            this.pickedColorNode.style.background = "#fff";
        }
    }, {
        key: 'addPickedColor',
        value: function addPickedColor(color) {
            this.color = color;
        }
    }]);

    return PickerCreator;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PickerController = undefined;

var _picker_creator = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PickerController = exports.PickerController = function PickerController() {
    _classCallCheck(this, PickerController);

    new _picker_creator.PickerCreator();
};

/***/ })
/******/ ]);