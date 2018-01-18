webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		var slider = document.querySelector('.js-level');
		var triangle = document.querySelector('.js-level__triangle');
		var mouseDown = false;
	
		triangle.onmousedown = function () {
			mouseDown = true;
		};
	
		document.documentElement.onmouseup = function () {
			mouseDown = false;
		};
	
		slider.onmousemove = function (e) {
			console.log(e.x);
			var x = e.x - slider.offsetLeft + document.documentElement.scrollLeft - 9; // 9 - половина ширины треугольника
			if (mouseDown) {
				triangle.style.left = x + 'px';
			}
		};
	});

/***/ })
])
//# sourceMappingURL=0.cea700ec0217a5a24905.hot-update.js.map