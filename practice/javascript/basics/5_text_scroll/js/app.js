// function scroll (input){
// 	var output = "It works! ";
// 	for (i=0; i<=input.length;i++) {
// 	console.log(output);
// 	}
// };


// setInterval(function(){}, 200)
// // setInterval(scroll ("w3resource"), 200);

// scroll ("w3resource");


var input = "w3resource";
var lastChr = input.toString().split('').pop();
input = input.slice(0, -1);
input = lastChr + input;
console.log(input);

