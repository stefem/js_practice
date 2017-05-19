var f_to_celsius = function(input_1){
   document.getElementById('result').innerHTML = input_1 + "°F is: " + (input_1 - 32) * (5/9) + "°C";
}

var f_to_farenheit = function(input_1){
   document.getElementById('result').innerHTML = input_1 + "°C is: " +  (input_1 * 9/5 + 32)  + "°F";
}



/*
Alternative...

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);
*/