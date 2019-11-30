"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

;

(function () {
  'use strict';

  var Odometr =
  /*#__PURE__*/
  function () {
    function Odometr(mainContainer) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

      _classCallCheck(this, Odometr);

      this._main = mainContainer;
      this._num = 0;
      this._timeout = timeout;
      this._numContainers = this._main.querySelectorAll('.odometer__num');
      this._timer = null;
      this.start.bind(this);
      this.stop.bind(this);
      this.parseToString.bind(this);
      this.renderDom.bind(this);
      this.setNum.bind(this);
      console.log('===[ Odometer Started ]===');
    }

    _createClass(Odometr, [{
      key: "start",
      value: function start() {
        var _this = this;

        this._timer = setInterval(function () {
          _this.renderDom(++_this._num);
        }, this._timeout);
      }
    }, {
      key: "stop",
      value: function stop() {
        clearInterval(this._timer);
        this._timer = null;
      }
    }, {
      key: "parseToString",
      value: function parseToString(num) {
        if (num < 10) return "000".concat(num);else if (num < 100) return "00".concat(Math.floor(num % 100 / 10)).concat(Math.floor(num % 10));else if (num < 1000) return "0".concat(Math.floor(num % 1000 / 100)).concat(Math.floor(num % 100 / 10)).concat(Math.floor(num % 10));else if (num < 10000) return "".concat(Math.floor(num % 10000 / 1000)).concat(Math.floor(num % 1000 / 100)).concat(Math.floor(num % 100 / 10)).concat(Math.floor(num % 10));else if (num >= 10000) return '0000';
      }
    }, {
      key: "renderDom",
      value: function renderDom(num) {
        var _this2 = this;

        var str = this.parseToString(num); // Удалить все классы, которые внизу

        this._main.querySelectorAll('.odometer__down').forEach(function (item) {
          return item.remove();
        }); // console.log(str);
        // this._numContainers[3].prepend(`<span class="odometer__top">${str[3]}</span>`);


        str.split('').forEach(function (item, i) {
          var nullObj = _this2._numContainers[i].querySelector('.odometer__null');

          if (item !== nullObj.innerText) {
            var newNode = document.createElement('span');
            newNode.classList.add('odometer__top');
            newNode.innerText = item;

            _this2._numContainers[i].prepend(newNode);

            nullObj.classList.remove('odometer__null');
            nullObj.classList.add('odometer__down');
            setTimeout(function () {
              newNode.classList.remove('odometer__top');
              newNode.classList.add('odometer__null');
            }, 0);
          }
        });
      } // Принудительное задание числа

    }, {
      key: "setNum",
      value: function setNum(num) {
        this._num = num < 10000 ? Math.floor(num) : 0;
        this.renderDom(this._num);
      }
    }]);

    return Odometr;
  }();

  var counter = new Odometr(document.querySelector('.odometer'));
  var count = 0; 
  
  // Чтобы изменить число в счетчике,
  // Нужно вызвать метод counter.setNum(<Новое число>)
  setInterval(function () {
    count < 10000 ? count += 14 : count = 0;
    counter.setNum(count);
  }, 3000);
})();