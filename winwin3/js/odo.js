;(function() {
    'use strict';

    class Odometr {
        constructor(mainContainer, timeout = 2000) {
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

        start() {
            this._timer = setInterval(() => {
                this.renderDom(++this._num);
            }, this._timeout);
        }

        stop() {
            clearInterval(this._timer);
            this._timer = null;
        }

        parseToString(num) {
            if (num < 10) return `000${num}`;
            else if (num < 100) 
                return `00${Math.floor(num % 100 / 10)}${Math.floor(num % 10)}`;
            else if (num < 1000)
                return `0${Math.floor(num % 1000 / 100)}${Math.floor(num % 100 / 10)}${Math.floor(num % 10)}`;
            else if (num < 10000)
                return `${Math.floor(num % 10000 / 1000)}${Math.floor(num % 1000 / 100)}${Math.floor(num % 100 / 10)}${Math.floor(num % 10)}`;
            else if (num >= 10000) return '0000';
        }

        renderDom(num) {
            const
                str = this.parseToString(num);

            // Удалить все классы, которые внизу
            this._main.querySelectorAll('.odometer__down').forEach(item => item.remove());

            // console.log(str);
            // this._numContainers[3].prepend(`<span class="odometer__top">${str[3]}</span>`);
            str.split('').forEach((item, i) => {
                const
                    nullObj = this._numContainers[i].querySelector('.odometer__null');

                if (item !== nullObj.innerText) {
                    const
                        newNode = document.createElement('span');

                    newNode.classList.add('odometer__top');
                    newNode.innerText = item;
                    
                    this._numContainers[i].prepend(newNode);

                    nullObj.classList.remove('odometer__null');
                    nullObj.classList.add('odometer__down');
                    setTimeout(()=>{
                        newNode.classList.remove('odometer__top');
                        newNode.classList.add('odometer__null');
                    },0);
                    
                }
            });
        }

        // Принудительное задание числа
        setNum(num) {
            this._num = num < 10000 ? Math.floor(num) : 0;
            this.renderDom(this._num);
        }

    }

    const counter = new Odometr(document.querySelector('.odometer'));
    let count = 0;

    // Чтобы изменить число в счетчике,
    // Нужно вызвать метод counter.setNum(<Новое число>);
    setInterval(() => {
        count < 10000 ? count+=14 : count=0;
        counter.setNum(count);
    }, 3000);
})();