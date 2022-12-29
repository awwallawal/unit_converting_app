const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const distanceEl = document.getElementById('distance-el');
const volumeEl = document.getElementById('volume-el');
const weightEl = document.getElementById('weight-el');

inputBtn.addEventListener('click', function(){
 conversionCalculation();
 alert('Kindly refresh the page if you want to perform another conversion')
}
)

function conversionCalculation(){
 const metersToFeetConversion = 3.222;
 const litersToGallonConversion = 2.134;
 const kilogramToPoundConversion = 1.907;
 
 distanceEl.textContent += inputEl.value + ' meters' + ' = ' + (inputEl.value*metersToFeetConversion).toFixed(3) + ' feet' + ' | ' + inputEl.value + ' feet' + ' = ' + (inputEl.value/metersToFeetConversion).toFixed(3) + ' meters';

 volumeEl.textContent += inputEl.value + ' liters' + ' = ' + (inputEl.value*litersToGallonConversion).toFixed(3) + ' gallons' + ' | ' + inputEl.value + ' gallons' + ' = ' + (inputEl.value/litersToGallonConversion).toFixed(3) + ' liters';

 weightEl.textContent += inputEl.value + ' kilos' + ' = ' + (inputEl.value*kilogramToPoundConversion).toFixed(3) + ' pounds' + ' | ' + inputEl.value + ' pounds' + ' = ' + (inputEl.value/kilogramToPoundConversion).toFixed(3) + ' kilos';

}