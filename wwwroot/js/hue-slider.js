const rangeInput = document.querySelector('.js-range-input');
const output = document.getElementById('robot-image');
const root = document.documentElement;

function setHue() {
    var filter = 'hue-rotate(' + rangeInput.value + 'deg) ';
    output.style.filter = filter;
    console.log(filter)
}

function setDefaultState() {
    rangeInput.focus();
    setHue();
}

rangeInput.addEventListener('input', function () {
    setHue();
});

document.addEventListener('DOMContentLoaded', function () {
    setDefaultState();
});