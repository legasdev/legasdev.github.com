"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

;

(function () {
  'use strict';

  var Slider =
  /*#__PURE__*/
  function () {
    function Slider(slider) {
      var _this = this;

      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

      _classCallCheck(this, Slider);

      this._slider = slider;
      this._btnLeft = this._slider.querySelector('.slider-btn--left');
      this._btnRight = this._slider.querySelector('.slider-btn--right');
      this._sliderWrapper = this._slider.querySelector('.slider__slides_wrapper');
      this._slides = this._slider.querySelector('.slider__slides');
      this._slide = this._sliderWrapper.querySelector('.slider__slide');
      this._maxSlides = this._sliderWrapper.querySelectorAll('.slider__slide').length;

      this._btnLeft.addEventListener('click', function () {
        _this.setNewPosition(1);

        _this.stopSlider();

        _this.startSlider();
      });

      this._btnRight.addEventListener('click', function () {
        _this.setNewPosition(-1);

        _this.stopSlider();

        _this.startSlider();
      });

      this._pos = 0;
      this._time = time;
      this._timer = null;
      this._dirAuto = -1;
      this.setNewPosition.bind(this);
      this.startSlider.bind(this);
      this.startSlider();
    }

    _createClass(Slider, [{
      key: "startSlider",
      value: function startSlider() {
        var _this2 = this;

        this._timer = setInterval(function () {
          _this2.setNewPosition(_this2._dirAuto);
        }, this._time);
      }
    }, {
      key: "stopSlider",
      value: function stopSlider() {
        clearInterval(this._timer);
        this._timer = null;
      }
    }, {
      key: "setNewPosition",
      value: function setNewPosition(dir) {
        var margin = 30,
            delta = this._slide.offsetWidth + margin,
            minPos = 0,
            slidesOnScreen = Math.floor(this._sliderWrapper.offsetWidth / delta);
        minPos = (this._maxSlides - slidesOnScreen) * delta * -1;
        this._pos += delta * dir;

        if (this._pos > 0) {
          this._pos = 0;
          this._dirAuto = -1;
        }

        if (this._pos < minPos) {
          this._pos = minPos;
          this._dirAuto = 1;
        }

        this._slides.style.WebkitTransform = "translate(".concat(this._pos, "px)");
        this._slides.style.msTransform = "translate(".concat(this._pos, "px)");
        this._slides.style.transform = "translate(".concat(this._pos, "px)");
      }
    }]);

    return Slider;
  }();

  document.querySelectorAll('.slider').forEach(function (item, i) {
    new Slider(item);
  });
})();