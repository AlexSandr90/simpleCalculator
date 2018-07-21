
let num1            = document.getElementById('firstNum');

    num2            = document.getElementById('secondNum');

    res             = document.getElementById('result');

    getPlus         = document.getElementById('plus');

    getMinus        = document.getElementById('minus');

    getMultiply     = document.getElementById('multiply');

    getDivide       = document.getElementById('divide');


getPlus.onclick = function() {
  res.value = +num1.value + +num2.value;
  document.getElementById('result').innerHTML = res.value;
}

getMinus.onclick = function() {
  res.value = +num1.value - +num2.value;
  document.getElementById('result'.innerHTML = res.value);
}

getMultiply.onclick = function () {
  res.value = +num1.value * +num2.value;
  document.getElementById('result').innerHTML = res.value;
}

getDivide.onclick = function() {

    res.value = +num1.value / +num2.value;
    document.getElementById('result').innerHTML = res.value;

}