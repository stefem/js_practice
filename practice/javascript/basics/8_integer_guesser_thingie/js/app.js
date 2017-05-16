var input = window.prompt("Choose an integer between 1 and 10");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var randInt = getRandomInt(1, 10);
(input == randInt) ? window.alert("good work, they matched...") : window.alert("your foolishness has cost us!");

/*
// Get a random integer from 1 to 10 inclusive
 var num = Math.ceil(Math.random() * 10);
 var gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   alert('Matched');
  else
   alert('Not matched, the number was ' + num);
*/







