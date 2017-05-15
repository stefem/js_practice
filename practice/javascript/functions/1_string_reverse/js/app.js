function reverse(input){
var input = input.toString();
console.log(input.length);
var output = null;

for (i = 0; i <= input.length; i++)
{ 
var lastone = input.toString().split('').pop();
input = input.slice(0, -1);
output = output + lastone; 
console.log("input: " + input);
console.log("lastone: " + lastone);
console.log("output: " + output);
}
}

reverse(54376);