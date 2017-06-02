var ANCESTRY_FILE = JSON.stringify([
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
])

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;

// Get Length of json object
var ancestry = JSON.parse(ANCESTRY_FILE);
// console.log(ancestry.length);

// 0. WORKING WITH FOREACH
// A standard for loop can be a bit clumsy and there's a way to perform an action on each value in an array - we can write a function to do it in fact:

function logEach(array){
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

//...and of course, thuis is not just limited to loggage. The sdalient point is that 'doing something', whether that be logging or anything else can be represented as a function and that in js functions count as values so, whatever we want to do can be abstracted into another function and passed as a value:

// 0a. Using a predefined function:

// function forEach(array, action){
//   for (var i = 0; i < array.length; i++){
//     action(array[i]);
//   }
// }

// forEach(["arse biscuits!", "feck!", "girls!"], console.log);

// 0b. using a function written on the schpot:
// var numbers = [1, 2, 3, 4, 5], sum = 0;
// forEach(numbers, function(number){
//   sum += number;
// });

// console.log(sum);

// of course, forEach already exists as a standard method on arrays and so only needs to be called with the function to be executed on each element:

// var jackisms = ["Girls!", "Feck!", "Arse biscuits!"];
// var intro = "Father Jack says";

// function jackify(item){
//   console.log(intro + ": " + item);
// }

// jackisms.forEach(jackify);

// HIGHER ORDER FUNCTIONS - TAKE OTHER FUNCTIONS AS VALUES OR RETURN OTHER FUNCTIONS
// 1. FUNCTIONS THAT CREATE NEW FUNCTIONS:
// function greaterThan(n){
//   return function(m) { return m > n };
// }

// var greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));
// console.log(greaterThan(15)(2));

// Explain what happened here:
/*
function greaterThan takes one parameter, a number, 'n'
it returns an anonymous function which takes one parameter, a number, 'm'
the anonymous function compares m to name
In order to use the inner function you have to first assign an instance of the outer function, greaterThan, with a value, to a variable
You can then access the inner function by invoking the newly created instance of greaterThan via the variable and assigning it a value.
You can also call the two functions one after the other as per the second example.
*/

// What applications does this functionality have?
/*

*/

// 2. FUNCTIONS THAT CHANGE OTHER FUNCTIONS:
// function noisy(f) {
//   return function(arg) {
//     console.log("Calling with", arg);
//     var val = f(arg);
//     console.log("Called with", arg, "- got", val);
//     return val;
//   };
// }

// noisy(Boolean)(1);

// Explain what happened here:
/*
function "noisy" takes one parameter, a function.
It returns an anonymous function which takes one parameter, "arg"
The anionymous function assigns arg to the parameter function as a parameter of its own and assigns the whole to a variable, 'val' which it returns.
*/

// What applications does this functionality have?
/*

*/

// 3. FUNCTIONS THAT CREATE NEW TYPES OF CONTROL FLOW
function unless(test, then) {
  if (!test) then();
}

function repeat(times, body) {
  for (var i = 0; i < times; i++) {
    body(i);
  }
}

repeat(3, function(n) {
  unless (n % 2, function(){
    console.log(n, "is even");
  });
});


// Explain what happened here:
/*
THE SET UP
----------
function "unless" takes two parameters both of which are functions: "test" and "then"
It checks if the test function returns a Boolean of true, if not it calls the "then" function.

function "repeat" takes two parameters: "times" which tells the for loop contained within it how many times to iterate and "body" a function which is enacted on the for loop's iterator at each pass.



THE CALL
--------
function "repeat" is then called with "times" equal to 3 and an anonymous function which calls "unless", passing it the 'n' parameter. "unless" in the call takes two parameters, a test condition "n % 2" which checks whether n divided by 2 has any remainder. If it does, then the test fails and the "then" parameter, an anonymous function which logs a message to the console, is invoked.

NB - because the inner function lives within the environment of the outer one it can use 'n'. Scoping.
*/

// What applications does this functionality have?
/*
carries out a test as many times as you wish it to
*/




// 1. FILTERING OUT ELEMENTS THAT DON'T PASS A TEST
// SET UP THE FILTER FUNCTION (it applies the 'test' to the array and then pushes all those records that pass the test to a new array called 'passed')
// function filter(array, test) {
//   var passed = [];
//   for (var i = 0; i < array.length; i++) {
//     if (test(array[i]))
//       passed.push(array[i]);
//   }
//   return passed;
// }

// CALL THE FILTER FUNCTION WITH A FUNCTION AS AN ARGUMENT - two parameters - the first is the array to be acted upon,. the second is the actual 'test' which is applied to the array values
// console.log(filter(ancestry, function(person) {
//   return person.born > 1900 && person.born < 1925;
// }));
// NB this is known as a 'PURE' function because it doesn;t alter the array that it was given.
// like FOREACH, FILTER is also a standard method on arrays and can thus be passed like this:

// console.log(ancestry.filter(function(person) {
//   return person.father == "Carel Haverbeke";
// }));

// or this:

// console.log(ancestry.filter(function(person) {
//   return person.born > 1900 && person.born < 1925;
// }));

// 2. TRANSFORMING WITH MAP
// The MAP method transforms an array by applying a function to all its elements and building a new array from the returned values. The new array it creates will have the same length as the input array but its contents will have been mapped to a new form by the function.

// function map(array, transform) {
//   var mapped = [];
//   for (var i = 0; i < array.length; i++)
//     mapped.push(transform(array[i]));
//   return mapped;
// }

// var overNinety = ancestry.filter(function(person) {
//   return person.died - person.born > 90;
// });

// console.log(map(overNinety, function(person) {
//   return person.name;
// }));

// okay - in the above, 'map' has the same kind of structure as 'filter'. It takes an array and the transforming function as arguments. It then loops through the array contents and pushes the transformed elements to a new array called 'mapped'. In this case the array 'set' being presented to it is 'pre filtered' using the overNinety function. You could just as easily present an unfiltered set. Additionally, in this case the 'transform' is to take only the name property of the dataset.

// Like forEach and filter, map is also a standard method on arrays.

// 3. SUMMARIZING WITH REDUCE

// function reduce(array, combine, start) {
//   var current = start;
//   for (var i = 0; i < array.length; i++) {
//     current = combine(current, array[i]);
//   }
//   return current;
// }

// console.log(reduce([1, 2, 3, 4], function(a, b) {
//   return a + b;
// }, 0));

// current starts as 0. A for loop then goes through the array upto its length. During each 'pass' it recomputes the value of 'current' by passing it to the combine function as a parameter along with the current value in the array. In essence it's adding all the array value together, just in a nifty and clever way. In other words, the 'combine' function is invoked during every 'pass' though the for loop and changes the value of 'current'. this works because 'current' takes the returned value from combine as its new value at each pass.

// As with forEach, filter and map, reduce is also a standard method on arrays. It has the added convenience that if your array has at least one element you can leave the 'start' parameter out as it will automatically take the first element as the start value.

// with the above dataset, we can find the oldest ancestor using reduce as follows:

// console.log(ancestry.reduce(function(min, cur) {
//   if (cur.born < min.born) return cur;
//   else return min;
// }));

// basically goes through the array comparing them until it's left with the oldest - it compares cur to min and if cur is less than min it become min

// to do it without higher order functions isn't a biggie - code doesn't look much worse:

// var min = ancestry[0];
// for (var i = 1; i < ancestry.length; i++) {
//   var cur = ancestry[i];
//   if (cur.born < min.born)
//     min = cur;
// }
// console.log(min);

// The reduce() method reduces the array to a single value.

// The reduce() method executes a provided function for each value of the array (from left-to-right).

// The return value of the function is stored in an accumulator (result/total).


// Higher order functions shine when you need to *compose* functions, as follows

// function average(array) {
//   function plus(a, b) { return a + b; }
//   return array.reduce(plus) / array.length;
// }

// takes the array as an argument and uses reduce to add all the ages together - then divides this by the length of the array thus getting the average number

// filters and maps:
// function age(p) { return p.died - p.born; }
// function male(p) { return p.sex == "m"; }
// function female(p) { return p.sex == "f"; }

// functions to be used with 'filter' and 'map' to modify our output.

// console.log(average(ancestry.filter(male).map(age)));
// // basically saying filter the ancestry dataset so that only male members are used and hand it to the 'average' function as an array. The function wil then use reduce and divide it by the array length to get an average. The output is then mapped using age.
// → 61.67
// console.log(average(ancestry.filter(female).map(age)));
// → 54.56
// The upshot of this is, rather than tangling it into one big loop, it's neatly composed into the concepts we're interested in.

// var myArray = [1,2,3,4,5,6,7,8,9,10,11];

// function average(array) {
//   function plus(a, b) { return a + b; }
//   return array.reduce(plus) / array.length;
// }

// function plus(a,b){
//     return a + b;
// }

// function multiply(a,b){
//     return a * b;
// }

// function divide(a,b){
//     return a / b;
// }

// console.log(average(myArray));
// console.log(myArray.reduce(plus));

// Sifting down through the data tree... process to work out how much DNA is shared with an ancestor


// 1. set up a function to associate a person (ie their name) with the full object from the dataset.
// the console.log call will return the full record for the given person.

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// console.log(byName["Philibert Haverbeke"]);

// 2. What we're actually going to do here is calculate a 'dna value' for a given person by calculating the values for their parents and so on down the line to the ancestor.
// The function below is about finding out who the parents are - it does this using a function called 'valueFor' which, via the gift of recursion, follows the family tree(?) We hand it a person and it takes it from there, returning a set of parameters to go into another function (sharedDNA) which we add as a parameter to the original function call.

// function reduceAncestors(person, f, defaultValue) {
//   function valueFor(person) {
//     if (person == null) {
//       return defaultValue;
//     } else {
//       return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
//     }
//   }
//   return valueFor(person);
// }

// // // 3. The actual calculation of DNA is done by a third function sharedDNA

// function sharedDNA(person, fromMother, fromFather) {
//   if (person.name == "Pauwels van Haverbeke") // original old ancestor bloke
//     return 1;
//   else
//     return (fromMother + fromFather) / 2;
//     // starts with whoever it is and goes back cutting the amount of dna in half each time.
// }

// var ph = byName["Philibert Haverbeke"]; // modern bloke

// console.log(reduceAncestors(ph, sharedDNA, 0) / 4);

// returned value f -> sharedDNA in reduceAncestors function call. sharedDNA also acts recursively to trace back through the ancestral tree. This is NOT done by forEach. forEach merely gets the record for the person we want.
// in other words the returned function f isolates a person and then gets thew value for the mother and the father, it then takes each of these as the 'person' and isolates values for their father and mother etc etc if it equates to null, ie there are no more fathers and mothers, it returns the given default vale which is 0. The upshot is that it goes back through the family tree until there are no more ancestors. This recursion is, if you like, the 'base process' of the function.

// Ah! But it's not as simple as this... returning f actually calls the sharedDNA function and puts the values of the returned f into it as parameters... so, essentially, you;re returning 'sharedDNA' function with the generated parameters. It's just separated out.

// To summarise: to make the process work, you call reduceAncestors. This function takes three parameters, the person (the modern person who wants to know how much dna they share), the sharedDNA function and a default value. 

// the value for person is generated by a forEach loop working on the ancestry dataset.

// reduceAncestors ontains another function, valueFor which recursively goes back through the family tree. Each time it does this, ity calls the sharedDNA function which calculates the amount of shared DNA with some simple mathmatics and returns the value to the outer function. It also acts as a 'brake' by returning '0' wheh there are no ancestors left. The outer function, reduceAncestors, will then return a final value.

// Here's an example of how we can reuse the reduce ancestors function for different purposes.
// var byName = {};
// ancestry.forEach(function(person) {
//   byName[person.name] = person;
// });

// function reduceAncestors(person, f, defaultValue) {
//   function valueFor(person) {
//     if (person == null) {
//       return defaultValue;
//     } else {
//       return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
//     }
//   }
//   return valueFor(person);
// }


// function countAncestors(person, test) {

//   function combine(current, fromMother, fromFather) {
//     var thisOneCounts = current != person && test(current);
    
//     return fromMother + fromFather + (thisOneCounts ? 1 : 0);
//   }

//   return reduceAncestors(person, combine, 0);
// }



// function longLivingPercentage(person) {

//   var all = countAncestors(person, function(person) {
//     return true;
//   });

//   var longLiving = countAncestors(person, function(person) {
//     return (person.died - person.born) >= 70;
//   });

//   return longLiving / all;

// }


// console.log(longLivingPercentage(byName["Philibert Haverbeke"]));
/*
longLiving longLivingPercentage
{
  all = countAncestors{}
  
}

*/


// 4. BINDINGS
// var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

// function isInSet(set, person) {
//   return set.indexOf(person.name) > -1;
// }

// console.log(ancestry.filter(function(person) {
//   return isInSet(theSet, person);
// }));

// console.log(ancestry.filter(isInSet.bind(null, theSet))); // calls isInTheSet with theSet as its first argument along with any other arguments given to the bound function (so, why?) I guess the reason is so you can use it over and over as below?

// var boundSet = ancestry.filter(isInSet.bind(null, theSet));
// console.log(boundSet);

// Being able to pass function values to other functions is not just a gimmick but a deeply useful aspect of JavaScript. It allows us to write computations with “gaps” in them as functions and have the code that calls these functions fill in those gaps by providing function values that describe the missing computations.

// Arrays provide a number of useful higher-order methods—forEach to do something with each element in an array, filter to build a new array with some elements filtered out, map to build a new array where each element has been put through a function, and reduce to combine all an array’s elements into a single value.

// Functions have an apply method that can be used to call them with an array specifying their arguments. They also have a bind method, which is used to create a partially applied version of the function.