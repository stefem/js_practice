var input = "angus the silent gnome";
var output = input.split(' ');
var i;
var first;
var remainder;

// this works using mapping
function map(array, transform){
    var mapped = [];
    for(i=0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped.join(" ");
}

function firstToUpper(x){
    first = x.slice(0,1).toUpperCase();
    remainder = x.slice(1, x.length);
    x = first + remainder;
    return x;
}

console.log(map(output, firstToUpper));

// this works using a for loop
function toUpper (input){

    for(i=0; i < output.length; i++) {
        first = output[i].slice(0,1).toUpperCase();
        remainder = output[i].slice(1, output[i].length);
        output[i] = first + remainder;
    }

    output = output.join(" ");
    return console.log(output);
};

toUpper(input);







