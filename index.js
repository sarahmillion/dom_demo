const numbersList = document.querySelector('#numbersList');
const oddsList = document.querySelectior('#oddsList');

const numbers = [1, 2, 3, 4, 55, 66, 72];

const html = number.map(function(num){
return `<li>${num}</li>`;
}).join(' ');

numbersList.innerHTML = html;

const odds = numbers.filter(function(num){
return num % 2 === 1;
});

console.log(odds);