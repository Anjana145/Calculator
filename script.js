const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value === '' || /[\+\-\*\/]$/.test(display.value)) {
    return;
  }
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid calculation');
    clearDisplay();
  }
}
