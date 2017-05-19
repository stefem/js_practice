function f_is_palindrome(input){
    var input = input.toString().replace(/\s/g, '');
    var initial_input = input.toString().replace(/\s/g, '');
    var initial_length = input.length;
    var output;

    for (i = 0; i < initial_length; i++)
    { 
        var lastone = input.toString().split('').pop();
        input = input.slice(0, -1);
        (!output) ? output = lastone : output = output + lastone; 
    }

    (output == initial_input) ? console.log("\'" + initial_input + "\'" + " is a palindrome. Rejoice!") : console.log("\'" + initial_input + "\'" + " ain't a palindrome. You can all sit down.");
}

f_is_palindrome("madam");
f_is_palindrome("blurp");