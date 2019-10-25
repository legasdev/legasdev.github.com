window.odometerOptions = {
    duration: 7000, // Change how long the javascript expects the CSS animation to take
};
const 
    odo = document.querySelector('.odometer');

setTimeout(() => {
    odo.innerHTML='404';
}, 500);