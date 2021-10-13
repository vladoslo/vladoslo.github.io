const inputCalc = document.querySelector('account'),
      resultCalc = document.querySelector('result');


function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result() {
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}