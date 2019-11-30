;(function() {
    'use strict';

    class Slider {
        constructor(slider, time = 3000) {
            this._slider = slider;

            this._btnLeft = this._slider.querySelector('.slider-btn--left');
            this._btnRight = this._slider.querySelector('.slider-btn--right');

            this._sliderWrapper = this._slider.querySelector('.slider__slides_wrapper');
            this._slides = this._slider.querySelector('.slider__slides');
            this._slide = this._sliderWrapper.querySelector('.slider__slide');
            this._maxSlides = this._sliderWrapper.querySelectorAll('.slider__slide').length;

            this._btnLeft.addEventListener('click', () => {
                this.setNewPosition(1);
                this.stopSlider();
                this.startSlider();
            });
            this._btnRight.addEventListener('click', () => {
                this.setNewPosition(-1);
                this.stopSlider();
                this.startSlider();
            });

            this._pos = 0;
            this._time = time;
            this._timer = null;
            this._dirAuto = -1;

            this.setNewPosition.bind(this);
            this.startSlider.bind(this);

            this.startSlider();
        }

        startSlider() {
            this._timer = setInterval(() => {
                this.setNewPosition(this._dirAuto);
            }, this._time);
        }

        stopSlider() {
            clearInterval(this._timer);
            this._timer = null;
        }

        setNewPosition(dir) {
            let
                margin = 30,
                delta = this._slide.offsetWidth + margin,
                minPos = 0,
                slidesOnScreen = Math.floor(this._sliderWrapper.offsetWidth / delta);

            minPos = (this._maxSlides - slidesOnScreen) * delta * -1;
            
            this._pos += delta * dir;

            if (this._pos > 0) { this._pos = 0; this._dirAuto = -1; }
            if (this._pos < minPos) { this._pos = minPos; this._dirAuto = 1; }

            this._slides.style.WebkitTransform = `translate(${this._pos}px)`;
            this._slides.style.msTransform = `translate(${this._pos}px)`;
            this._slides.style.transform = `translate(${this._pos}px)`;
        }
    }

    document.querySelectorAll('.slider').forEach((item, i) => {
        new Slider(item);
    });
})();