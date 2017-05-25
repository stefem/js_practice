// 1. Taking functions as arguments

// example below uses anonymous inline function to display an alert (it's the bit after 'click') - it could though, so easily, separated it out and used a separate function and passed that named function to the event listener instead.

// document.getElementById("clicker").addEventListener("click", function() {
//   alert("you triggered " + this.id);
// });


// here's how it's done. NB - we passed 'proveIt' and NOT 'proveIt()' - when you pass a function by name, sans parentheses, you're passing the actual function. If you pass it WiTH parentheses then you're passing the RETURNED VALUE of the function, ie, the result of executing that function.

var proveIt = function() {
  alert("you triggered " + this.id);
};

document.getElementById("clicker").addEventListener("click", proveIt);

// In this second example, oproveIt is structurally independent of the code and hence, it will work on any button with any id. " This bit of code could exist in any context in which you wanted to display an alert with the id of an element, and could be called with any event listener."
// we now have a valuable tool in creating a little army of small targetted functions that can be used genetically in any application without altering external data and return the same result for the same input every time.

// 2. Returning functions as results.
