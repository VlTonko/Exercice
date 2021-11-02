let minValue = Number(document.getElementById('maxValue').value);
let maxValue = Number(document.getElementById('minValue').value);

console.log(minValue);
console.log(maxValue);
console.log(typeof minValue);
console.log(typeof maxValue);

document.querySelector('.generate').addEventListener('click', generateRandomValue);
document.querySelector('.reset').addEventListener('click', logi);

function generateRandomValue(minValue, maxValue) {
  console.log(typeof minValue);
  console.log(typeof maxValue);
  let result = minValue + maxValue;
  console.log(result);
}

function logi() {
  console.log('Reset');
}
