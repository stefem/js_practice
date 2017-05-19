function reverse(input){
    var input = input.toString();
    var starting_length = input.length;
    var output;

    for (i = 0; i < starting_length; i++)
    { 
        var lastone = input.toString().split('').pop();
        input = input.slice(0, -1);
        (!output) ? output = lastone : output = output + lastone; 
    }
    console.log("output: " + output);
}

reverse(752000851);