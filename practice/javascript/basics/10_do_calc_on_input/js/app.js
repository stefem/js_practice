/*Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.getDOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = this.getMonth();
    var dn = this.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

var dayOfYear = new Date().getDOY();
alert(dayOfYear);
*/

// function Calculate(input1, input2){
//     this.divideValues = function(){
//         var output = this.input1 / this.input2;
//         return output;
//     }

//     this.multiplyValues = function(){
//         var output = this.input1 * this.input2;
//         return output;
//     }    
// }

// alert(Calculate.multiplyValues(3,2));
var x = function(j){
    // 1. Add default property
    this.i = 0;

    // 2. Set property to passed parameter
    this.j = j;

    // 3. Add a getter method (returns the value of the property j)
    // this.getJ = function(){
    //     return this.j;
    // }
};

// 4. Create new instances of object
var x1 = new x(1);
var x2 = new x(2);

// 6. create prototype method
x.prototype.getJ = function(){
    return this.j;
}

// 5. Access new object instance properties
console.log(x1.getJ());
console.log(x2.getJ());



/*
In javascript - every function expression is essentially a constructor.
We can add default properties to it as in '1' or we can set them to passed parameters as in '2'. We can also add methods to the constructor as in '3'

ps - tis good practice to usse a capital for the first letter of a constructor name

We can create 'instances' of the object (ie 'x') from it, usinbg the keyword 'New' as in 4. and we can access the new objwects with standard notation as in 5.

Since x1 and x2 are instances of x they are actuially distinct objects but they inherit all the properties and methods from x. x is technically the parent class. So, in other words, if we create a thousand objects from x - each method would have its own object getJ which makes it, in a way, redundant in the function because (I think) this will mean the processor having to create getJ a thousand times.

The solution to this is by using the prototype method as in 6. {objectName}.prototype.{methodName}

*/






