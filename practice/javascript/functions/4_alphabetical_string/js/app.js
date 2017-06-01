var input = "pisspants";
var output;

function makeAlpha(input){
    output = input.split('');
    output = output.sort();
    output = output.join('');
    return console.log(output);
}
makeAlpha(input);








