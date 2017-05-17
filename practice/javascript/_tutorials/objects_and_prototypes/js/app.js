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


// var x = function(j){
//     // 1. Add default property
//     this.i = 0;

//     // 2. Set property to passed parameter
//     this.j = j;

//     // 3. Add a getter method (returns the value of the property j)
//     // this.getJ = function(){
//     //     return this.j;
//     // }
// };

// // 4. Create new instances of object
// var x1 = new x(1);
// var x2 = new x(2);

// // 6. create prototype method
// x.prototype.getJ = function(){
//     return this.j;
// }

// // 5. Access new object instance properties
// console.log(x1.getJ());
// console.log(x2.getJ());



// /*
// In javascript - every function expression is essentially a constructor.
// We can add default properties to it as in '1' or we can set them to passed parameters as in '2'. We can also add methods to the constructor as in '3'

// ps - tis good practice to usse a capital for the first letter of a constructor name

// We can create 'instances' of the object (ie 'x') from it, usinbg the keyword 'New' as in 4. and we can access the new objwects with standard notation as in 5.

// Since x1 and x2 are instances of x they are actuially distinct objects but they inherit all the properties and methods from x. x is technically the parent class. So, in other words, if we create a thousand objects from x - each method would have its own object getJ which makes it, in a way, redundant in the function because (I think) this will mean the processor having to create getJ a thousand times.

// The solution to this is by using the prototype method as in 6. {objectName}.prototype.{methodName} - this is automatyically available to x1 and x2 even though it's not in the function declaration. To find it, whenever we call x1 or x2, they look up the prototype chain - looks into its parent in other words - and when it finds it, it uses it.
// This way, the objects are much smaller - you don't have to have all the methods inside the object - you can use it from the parents prototype.

// So, that's the constructor in a nutshell in javascript.

// */


var x = function(){

};

console.dir(x);

/*
In this case we can look at the object in more detail by doing console.dir(objectName).
If you expand it, you can see something called '__proto__' - 'x' is created from this object/function. Proto can be thought to mean parent or creator. If you expand it, it has a number of methods and properties and at the end it has another '__proto__' which has its own functions and methods. This is the master / mother object and x is ultimately created form it. This is called a prototype chain.

(master) object  
    prototype   
        properties
        methods

[Creates...]

function
    prototype   
        properties
        methods

[Creates...]

x
    prototype   
        properties
        methods

The real money shot here is that x can have access to all the properties and methods above it through the prototype chain. x looks up through the prototype chain to find methods or properties. It's only if it goes all the way to the master object and still can't find it that it returns undefined.

So, if you create a new object from x, called 'x1', that has access to all the properties and methods above it, imncluding for example toString(), including x's.

x1
    prototype   
        properties
        methods


Next tutorial:
    Creating subClass (subConstructor)
    Overidding the prototype chain
    Adding prototype to Master Object

*/




