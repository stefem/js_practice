// 1. Get new date and put in variable
var theDate = new Date();

// 2. Create days array and put the appropriate one in "today" variable
var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today = days[theDate.getDay()];

// 3. Get current hour and add a suffix depending on time of day
var hours = theDate.getHours();
(hours >=12) ? hours = hours + " PM" : hours = hours + " AM"

// 4. get minute and second and concatenate them into single variable called "time"
var minutes = theDate.getMinutes();
var seconds = theDate.getSeconds();
var time = hours + " : " + minutes + " : " + seconds;

// 5. Display in appropriate divs
document.getElementById("day").innerHTML = today;
document.getElementById("time").innerHTML = time;
