/*
The 'this' keyword represents the instance of the current object in the method of the class. 
And it is only relevant within a method of the class, meaning that you cannot use it outside of a method.

JavaScript has the 'this' keyword that behaves differently from other programming languages.
In JavaScript, you can use the 'this' keyword in the global and function contexts. 
Moreover, the behavior of the 'this' keyword changes between strict and non-strict modes.

'this' references the object, of which the function is a property. 
In other words, the 'this' references the object that is currently calling the function.
*/

const counter = {
   count : 0,
   next : function() {                                  // Inside the next() function, the this references the counter object.
       return ++this.count;
   }
};
console.log(counter.count);
counter.next();     // increments the count inside counter because next() function is a child of the counter object
console.log(counter.count);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// In the browser, top-level 'this' points to 'window'.
// In strict mode: still 'window' (top-level only), but functions lose implicit global binding.
// In Node.js, top-level 'this' points to 'module.exports' (not global) inside files.
// In REPL: 'this' is global.

// in Node, this refers to module.exports
console.log( this === module.exports);   // true

// in a browser
// console.log(this === window)     // output : true

console.log(this === globalThis);       // false
console.log(global === globalThis);     // true

(function(){console.log(this);})();    // in node, inside a function, this refers to the global object and you can access it using a normal function or IIFE like this example


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 'this' in different functional contexts

// simple function invocation
function show() {                                                                 
    console.log(this);       // global object
}
show();

function show2() {
    "use strict";
    console.log(this);      // undefined
}
show2();

// method invocation : when you call a method of an object, js sets 'this' to the object that owns the method
let car = {
   brand : 'Honda',
   getBrand : function() {
       return this.brand;
   }
}
console.log( car.getBrand() );      // Honda 

// constructor invocation : js creates a new object and sets 'this' to the newly created object
function Car( brand ) {
   this.brand = brand;
}

Car.prototype.getBrand = function() {   // adding a method named getBrand in the prototype of the Car
   return this.brand;
}

let car2 = new Car("Hyundai");
console.log( car2.getBrand() );         // Hyundai

// indirect invocation : the function type has methods call() and apply(), which allows use to set the 'this' value when calling a function
// In JS, objects can temporarily borrow functions from other objects, or from global context, and use them as their own using the call() method. 
// That's how the 'this' changes based on what object called the function.
function getBrand( prefix ) {
   console.log( prefix + this.brand );
}

let honda = {
   brand : 'Honda'
};
let audi = {        // It's a Honda                                                                                       
   brand : 'Audi'   // It's an Audi
};

honda.getBrand = getBrand;
honda.getBrand("It's a ");

// call() method syntax : object_owning_the_method.method_name(calling_object, parameters_if_any); 
getBrand.call( audi, "It's an " );  // .call lets you borrow the function temporarily

console.log(honda); // the getBrand function has been added to the object
console.log(audi);  // no changes to the original object

// apply() method syntax : func.apply(thisArg, [argsArray]);
// same as call() but takes parameters in an array
function greet(greeting, punctuation) {
    console.log(greeting + " " + this.name + punctuation);
}

const person = { name: "Prakash" };

greet.apply(person, ["Hello", "!"]); 

// apply() can be used as the alternative for the spread operator as well
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numbers));     // Math.max() expects individual numbers, not an array. Apply basically feeds the numbers one by one like spread operator

// converting array-like objects to real arrays
function show() {
  const argsArray = Array.prototype.slice.apply(arguments);
  console.log(argsArray);
}

show(10, 20, 30);   // [10, 20, 30]

// bind() method syntax : const boundFn = func.bind(thisArg, arg1, arg2, ...);
// it does not execute immediately.
// it returns a new function with
    // this permanently bound to thisArg
    // optional preset arguments
let geeks = {
   name : "ABC",
   printFunc: function(){
      console.log(this.name);
   }
}
   
let printFunc2= geeks.printFunc;
printFunc2();     // undefined because the printFunc2 function points to the function printFunc() of the object geeks.
                  // the binding of 'this' is lost, so no output is undefined

let printFunc3= geeks.printFunc.bind(geeks);
   //using bind() 
   // bind() takes the object "geeks" as parameter//
printFunc3();     // output : "ABC"


function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person2 = { name: "Prakash" };

const boundGreet = greet.bind(person2, "Hello");   // punctuation was not passed here
boundGreet("!");  // Output: Hello Prakash!

