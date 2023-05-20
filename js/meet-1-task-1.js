// Напишіть програму, отримує від користувача число хвилин переформатує у рядок години : хвилини приклад 70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


(function () {
  const userData = prompt('please enter your minutes');
console.log(typeof userData);
 
const hours = Math.floor(userData / 60);
const hours2 = (userData / 60).toFixed(0);
const minutes = userData % 60;
console.log(hours2, minutes);  
alert(`Your time is ${addLeadingZero(hours2)} : ${addLeadingZero(minutes)}`);
})();

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

// convertUserTime();