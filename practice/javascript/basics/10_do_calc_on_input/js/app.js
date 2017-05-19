var f_divide = function(input_1, input_2){
    (input_1 && input_2) ? document.getElementById('result').innerHTML = input_1 / input_2 : alert("You need to fill in *both* fields");
}

var f_multiply = function(input_1, input_2){
    (input_1 && input_2) ? document.getElementById('result').innerHTML = input_1 * input_2 : alert("You need to fill in *both* fields");
}