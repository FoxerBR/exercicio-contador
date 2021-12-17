var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
    for (let i = 0; i <= 10; i++){
        window.alert("Contagem excedida")
    }
}

function decrement() {
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
}