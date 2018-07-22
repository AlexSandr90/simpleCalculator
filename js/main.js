
let num1            = document.getElementById('firstNum');

    num2            = document.getElementById('secondNum');

    res             = document.getElementById('result');

    plus            = document.getElementById('plus');

    minus           = document.getElementById('minus');

    multiply        = document.getElementById('multiply');

    divide          = document.getElementById('divide');

plus.addEventListener('click', getPlus);
minus.addEventListener('click', getMinus);
multiply.addEventListener('click', getMultiply);
divide.addEventListener('click', getDivide);





function getPlus() {
  res.value = Number(num1.value) + Number(num2.value);
  res.innerHTML = res.value;
};
function getMinus() {
  res.value = Number(num1.value) - Number(num2.value);
  res.innerHTML = res.value;
};
function getMultiply() {
  res.value = Number(num1.value) * Number(num2.value);
  res.innerHTML = res.value;
};
function getDivide() {
  res.value = Number(num1.value) / Number(num2.value);
  res.innerHTML = res.value;
}

