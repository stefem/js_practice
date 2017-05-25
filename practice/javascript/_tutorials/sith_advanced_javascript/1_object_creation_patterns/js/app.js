// var peopleFactory = function(name, age, state){

//     // 1. create temporary object
//     var temp = {};
//     // var temp = new Object; // same difference

//     // 2. add three properties to the object and set them from the incoming parameters exactly liek a java set function
//     temp.name = name;
//     temp.age = age;
//     temp.state = state;

//     temp.printPerson = function(){
//         console.log(this.name + " " + this.age + " " + this.state);
//     };

//     return temp;

// };

// // This function now behave like a factory. If we want to call a new instance we simply do the following:

// var person1 = peopleFactory('Lilith', 97, 'mental');
// var person2 = peopleFactory('Agnes', 42, 'serene');

// // We can look at them by simply using the printPerson function:

// person1.printPerson();
// person2.printPerson();


// // functions are the most suitable way of creating objects because they behave like classes


// var peopleConstructor = function(name, age, state){
//     this.name = name;
//     this.age = age;
//     this.state = state;

//     this.printPerson = function(){
//         console.log(this.name + " " + this.age + " " + this.state);
//     };
// };

// // Unlike the factory pattern, since it doesn;t return anything, we have to create another object from the object itself. To do this, we have to use the constructor pattern, which entails using the keyword 'new':
// var person1 = new peopleConstructor('Dipstick', 23, 'Vexed');
// var person2 = new peopleConstructor('Lotforth', 27, 'Swayed');

// person1.printPerson();
// person2.printPerson();

// // The problem with this pattern is that every time you create another object, it takes all the methods and properties from the original which, as you might suspect, mullahs processing power asm, for the most part, they're redundant. Hence the use of prototype patterns.


// PROTOTYPE patterns are very different ot the previous two.

// var peopleProto = function(){

// };

// peopleProto.prototype.age = 0;
// peopleProto.prototype.name = "no name";
// peopleProto.prototype.city = "no city";
// peopleProto.prototype.printPerson = function(){
//     console.log(this.name + ", " + this.age + ", " + this.city);
// };

// var person1 = new peopleProto(); // creates simple constructor with nothing in it
// person1.name = "Big Mad Percival"; // adds shit
// person1.age = 42;
// person1.city = "Diss";

// console.log('name' in person1); // returns true if name is assigned. If shadowing - ie using defaults from the prototype, it still returns true as name has been 'silently' assigned via the prototype. It goes up the inheritance chain. So we can find out, if it has the property.

// console.log(person1.hasOwnProperty('name')); // this finds out whether the property exiosts specifically in person1. Thuis doesn;t look in the prototype. If you comment out name, this will return false.

// person1.printPerson();

// we're going to add properties and functions into a shared space called 'prototype'.

// Two ways of creating methods for the object:
// 1.  Direct:
// Pizza.getCrust = function(){
//     return this.crust;
// };

// 2. Putting method into the shared area:
// Pizza.prototype.getCrust = function(){
//     return this.crust;
// };

// Above we've created an aempty object and added properties and methods to it.
// Don't forget though that it has initially defined defaults which in the case above we're overriding. If we were to comment out one of the property vales which we've added, say, person1.name = "Big Mad Percival"; then it would put the default in instead

// the advantage of the prototype pattern is that the property printPrototype is part of the prototype space - it's not added directly to person1. WHich makes the different instances very lightweight.

// disadvantage is that you first have to create an empty object and then add properties to it. Also, if you havea property as an object it can create confuision when you create multiple objects from it. To deal with this, we use...

// DYNAMIC PROTOTYPE PATTERN - when creating many objects

var peopleDynamicProto = function(name, age, state){
    this.name = name;
    this.age = age;
    this.state = state;

    if( typeof this.printPerson !== 'function' ){
        // ie - if we don't find this function - if it's not there and returns 'undefined' (which is not a function), then we're going to create it in the prototype space.

        peopleDynamicProto.prototype.printPerson = function(){
            console.log(this.name + ", " + this.age + ", " + this.state);
        };
    }

    // what it boils down to is that here you;re only creating the function once, the first time you create the object.
};

var person1 = new peopleDynamicProto('Sad Lawrence', 42, 'Little Frothing'); 
person1.printPerson();
console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));



