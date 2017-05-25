// functions that create new functions:

// function greaterThan(n){
//     return function(m) { 
//         return m > n; 
//     };
// }

// var greaterThan10 = greaterThan(10);
// console.log(greaterThan10(42));

// functions that change other functions:
// function noisy (f){
//     return function(arg){
//         console.log("calling with", arg);
//         var val = f(arg);
//         console.log("Called with", arg, "-got", val);
//         console.log("f arguments length: " + arguments.length);
//         return val;
//     }
// }
// noisy (Boolean)(0);
// first value of the noisy function call below is the one which is handed to the outside argument ie, the one associated with noisy, the enclosing function. The second one goes to the inner. I think this is one opf they keys to understanding this - that the parameters are presented sequentially as in noisy (Boolean)(0); not mirroring the way the function encloses the inner function as in noisy (Boolean(0));

// functions that provide new types of control flow
// function unless(test, then){
//     if (!test) then();
// }

// function repeat (times, body){
//     for (var i = 0; i < times; i++) {
//         body(i)
//     }
// }

// repeat(3, function(n){
//     unless(n % 2, function(){
//         console.log(n, "is even");
//     });
// });

// One way you'd use these is when there are a number of different operations on values you wish to carry out which take the same form. If that is the case you can create a kind of template / holder function and pass the specifics as a function into that function.
// It's also important to note that because the inner function lives inside the outer one, lexical scoping means that it inherits the outer function's properties and methods. This is a javascript thing. Variables declared inside the inner function are not usually available to the outer function though.

// http://cloudmark.github.io/Higher-Order-Functions/

// Problems with noisy...
// The problem with the noisy function above is that if f takes mopre than one parameter, it only gets the first one. In other words, the number of arguments in the inner function and the outer one need to match which is kind of limiting and inconvenient and limits flexibility. True, we could add a load more parameters to the inner function such as arg1, arg2 etc but a. it's not clear how many would be enough as this is supposed to be an abstracted and flexible function and it would also deprive f of the information contained in arguments.length (a native javascript method and property) as there would always vbe the same number passed. In other words, it wouldn;t know how many were originally given. NB this seems to have been rectified in Chrome at least since the book was written but go with it anyway. I think the point is that if there were three or however many argument 'slots' to fill we'd always fill them rendering arguments.length useless: 

// function noisy (f){
//     return function(arg){
//         console.log("calling with", arg);
//         var val = f(arg);
//         console.log("Called with", arg, "-got", val);
//         console.log("f arguments length: " + arguments.length);
//         return val;
//     }
// }
// noisy (Boolean)(0, 1, 3); // ensures that arguments.length = 3

// USING THE APPLY METHOD
// In these situations, we can use the apply method. You pass it an array / array-like object with the argumentds in it and the function gets called with these arguments:

// function transparentWrapping(f){
//     return function(){
//         return f.apply(null, arguments);
//     };
// }
// here, the returned function passes all the arguments in the array (and only those arguments) to f. It dioes this by passing its own arguments object to apply. The first argument, for which we're passing null here can be used to simulate a method call. More and later.





