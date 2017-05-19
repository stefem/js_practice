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


// var x = function(){

// };

// console.dir(x);

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

// 1. baseclass
var Job = function(){
    this.pays = true;
};

// 2. prototype method
// Job.prototype.print = function(){
//     console.log(this.pays ? 'Please hire me' : 'no thanks');
// };

// 3. subclass
var TechJob = function(title, pays){
    Job.call(this); // calls baseclass - there is also a tutorial on call, apply and bind: https://www.youtube.com/watch?v=c0mLRpw-9rI
    this.title = title;
    this.pays = pays;
};

// 4. Inherit prototype with its methods and properties:
TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

// 5. Override print method
// TechJob.prototype.print = function(){
//     console.log(this.pays ? this.title + ' job is great, please hire me' : 'I would rather learn javascript');
// };

// 6. Add method to Master object

Object.prototype.print = function(){
    console.log('I am executing from the Master Object');
};


// here, we have a base class called 'Job' with a property called 'pays' with a default value of 'true'.
// we also have a method called print attached to the base class object 'Job'.
// finally, we have a subclass which is hitched to the baseclass using a call method. The call method essentially calls the constructor and pulls in the default value for, in this case, 'pays'. AT this point though, the subclass hasn;t inherited the prototypes of the baseclass.
// Next, we want to inherit all the methods from Jobs prototype- we do this in '4'.
// So, to recap, A. do Job.call(this) in the subclass which inherits the properties and methods defined inside the job, B. inherit from the prototype of Job as follows: TechJob.prototype = Object.create(Job.prototype); and C. Set a constructor for TechJob as follows: TechJob.prototype.constructor = TechJob;
// Now, we can create objects from this subclass filling the parameters as set in the subclass ('3')

// 5. Create object
var softwarePosition = new TechJob('Javascript Programmer', true);
var softwarePosition2 = new TechJob('General Arse', false);

console.log(softwarePosition.print()); 
console.log(softwarePosition2.print()); 

// nb will use print method from Job.prototype

// Overiding methods
// Next we're going to override the print method - we need to do this right after where we've inherited the prototype (5). If we do it before that, it won;t work.  This works because of the prototype inheritance chain. If we call the method, it will first look in its own prototype. It will only continue looking upwards if there's nothign corresponding to that method within its own prototype.


// Adding methods to the master object (6)
// You'd do this so that any object yopu create has a specific method defined by yourself. This is weighty stuff. We call the master / root object in javascript simply with 'Object'
