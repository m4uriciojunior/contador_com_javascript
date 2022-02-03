var currementNumberWrapper = document.getElementById('currentNumber');
var currementNumber = 0;

function increment() {
    currementNumber = currementNumber + 1;
    currementNumberWrapper.innerHTML = currementNumber;
}

function decrement() {
    currementNumber = currementNumber - 1;
    currementNumberWrapper.innerHTML = currementNumber;
}