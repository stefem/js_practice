1. Javascript object creation patterns - factory, constructur pattern, prototype pattern
****************************************************************************************

In javascript lots of ways to create objects because no formal class support:
1. Constructor pattern
2. Factory pattern
3. prototype pattern
4. Dynamic prototype pattern

Factory Pattern
---------------

var peopleFactory = function(name, age, state){

    // 1. create temporary object
    var temp = {};
    // var temp = new Object; // same difference

    // 2. add three properties to the object and set them from the incoming parameters exactly liek a java set function
    temp.name = name;
    temp.age = age;
    temp.state = state;

    temp.printPerson = function(){
        console.log(this.name + " " + this.age + " " + this.state);
    };

    return temp;

};

// This function now behave like a factory. If we want to call a new instance we simply do the following:

var person1 = peopleFactory('Lilith', 97, 'mental');
var person2 = peopleFactory('Agnes', 42, 'serene');

// We can look at them by simply using the printPerson function:

person1.printPerson();
person2.printPerson();


// functions are the most suitable way of creating objects because they behave like classes


Constructor Pattern
-------------------

var peopleConstructor = function(name, age, state){
    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function(){
        console.log(this.name + " " + this.age + " " + this.state);
    };
};

// Unlike the factory pattern, since it doesn;t return anything, we have to create another object from the object itself. To do this, we have to use the constructor pattern, which entails using the keyword 'new':
var person1 = new peopleConstructor('Dipstick', 23, 'Vexed');
var person2 = new peopleConstructor('Lotforth', 27, 'Swayed');

person1.printPerson();
person2.printPerson();

// The problem with this pattern is that every time you create another object, it takes all the methods and properties from the original which, as you might suspect, mullahs processing power asm, for the most part, they're redundant. Hence the use of prototype patterns.


Prototype Pattern
-----------------


