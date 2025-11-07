/*
Pure functions: 
    1. Accepts parameters
    2. Returns a value
    3. The output does not depend on any external state or variable outside its scope. It doesn't modify any external state.
    4. Given same input, same output will be returned each time
*/

function doubleValue(number){
    return number * 2;
}
let result = doubleValue(5);
console.log(result);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
Impure functions: 
    1. Relies on external variables
    2. If the external variable changes, the output might change for the same input
    3. It in unpredictable since it depends on the external state
*/

const multiplier = 4;
function doubleValue2(number){
    return number * multiplier;
}
result = doubleValue2(5);   // result depends on the value of the multiplier
console.log(result);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// mutation using functions
// Pure functions never mutate their input values.

// mutating using impure function
function appendNumbers(arr){
    arr.push(5, 6);
    return arr;
}
const numbers = [1, 2, 3, 4];
result = appendNumbers(numbers);
console.log(result);
console.log(numbers);

// achieving similar output using pure function
function appendNumbers2(arr){
    const newArr = [...arr, 5, 6];
    return newArr;
}
const numbers2 = [1, 2, 3, 4];
result = appendNumbers2(numbers2);
console.log(result);
console.log(numbers2);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
In JavaScript, functions are treated as "First-Class Citizens" i.e. functions have same status as other primitive datatypes or objects
Functions can be:
    1. Assigned to variables
    2. Passed as arguments to other functions
    3. Returned from other functions
*/

// Assigning a function to a variable
const greetMessage = function(){
    console.log("Hello there! How are you?");
}
greetMessage();

// Passing a function as an argument to another function
function wrapperFunction(){
    return "Welcome";
}
function greetMessage2(wrapper, name){
    const greeting = wrapper();
    console.log(`${greeting}, ${name}!`);
}
greetMessage2(wrapperFunction, "Takshak");

// Returning a function from another function
function greetMessage3(){
    return function(){
        console.log("Welcome back!");
    }
}
let output = greetMessage3();
output();

/*
First-class functions are the foundation of many powerful programming patterns in JavaScript, such as:
    1. Callbacks: functions passed as arguments to be executed later
    2. Closures: functions that capture and remember their lexical environment
    3. Higher-Order Functions: functions that return other functions or take functions as arguments
*/


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
Higher-Order Functions are a key concept in functional programming, allowing for more abstract and flexible code. 
A higher-order function is a function that does at least one of the following:
    1. Takes one or more functions as arguments
    2. Returns a function
*/

// Basic example of a HOF
function wrapper(){
    return "Welcome";
}
function greetMessage4(wrapper, name){      // takes a function 'wrapper'as an argument
    console.log(`${wrapper()}, ${name}!`);
}
greetMessage4(wrapper, "Takshak");

// Returning functions from a function
function displayMessage(){
    return function(){                              // function is being returned
        console.log("Hello from the other side!");
    };
}
output = displayMessage();
output();

// Combining both
function calculatePower(power){     // HOF returning a function
    return function(number){
        return Math.pow(number, power);
    };
}

const square = calculatePower(2);   
const cube = calculatePower(3);

console.log(square(4));
console.log(cube(4));

// Applying HOFs to Arrays
// HOFs are particularly useful when working with arrays, especially with methods like map, filter, reduce, etc.
function calculatePower2(wrapper, arr){
    const tempArr = [];
    for(let number of arr){
        tempArr.push(wrapper(number));
    }
    return tempArr;
}
function square2(number){
    return number ** 2;
}
function cube2(number){
    return number ** 3;
}

const arr = [1, 2, 3, 4, 5];

const squaredNumbers = calculatePower2(square, arr);
const cubedNumbers = calculatePower2(cube, arr);

console.log(squaredNumbers);
console.log(cubedNumbers);

// Using with map method
function triple(number){
    return 3 * number;
}

const tripledArr = arr.map(triple);
console.log(tripledArr);

// Using with reduce method
function product(a, b){
    return a * b;
}

let allProduct = arr.reduce(product);
console.log(allProduct);

// Using with filter method
let evenNumbers = arr.filter(function(x){
    return x % 2 == 0;  // keep only even numbers
})

console.log(evenNumbers);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
Immediately Invoked Function Expressions (IIFEs) are the functions that are executed as soon as they are mounted.
Syntax:
(function (){
    // function logic
})();

    1. Immediately Invoked: because they are executed as soon as they are mounted to the stack, they require no explicit call to invoke them.
    2. Function Expressions: are functions that are used as epxressions. 
        We can use a function as an expression if we assign the function to a variable, wrap the function within parantheses or put a
        logical not in front of a function.
*/

// creating a function expression by assigning it to a variable
let myFunc = function() {console.log("This is a functional expression");};
myFunc();

// creating function expression using logical NOT
!function() {return "Takshak";};
// before ES5 there was no standard IIFE syntax, so popular way to simulate it was
!function() {console.log("Older Syntax");}();    // !, +, -, ~ can be used to immediately invoke a functional expression

// creating function expression using parantheses
(function() {return "Takshak";});
// now if we add a set of parantheses to the end of the last example, it becomes an IIFE and the output is seen immediately in the console
(function() {console.log("Newer Syntax");})();


// passing parameters to IIFEs
(function(dt) {
    console.log(dt.toLocaleTimeString());
})(new Date()); 


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/* 
Scoping in JS

1. Block scope: anything declared inside {} using let or const cannot be accessed outside it. let and const are block-scoped. var is not block-scoped.
2. Function scope: variables declared inside a function are only accessible inside that function. let, const and var all behave same in function scope.
3. Local scope: variables declared inside a function become local to the function. 
        Local variables are created when a function starts and deleted when the function is executed.
        Local scope is just a general term for any scope that's not global like function scope, block scope, module scope.
4. Global scope: variables declared globally can be access from anywhere in the program. let, const and var all behave same in global scope.
        Variables declared without let, const, or var keywords are global variables and can be accessed from anywhere.

Scope chaining: whenever code tries to access a variable during a function call, it starts searching form the local scope, 
if not found then it searches in the outer scope or parent's scope until it reaches the global scope.

Variable shadowing: if we declare a variable with the same name as another variable in the scope chain, 
the variable with local scope will shadow the variable in the outer scope.
*/

let name = "Abhijit";
var sector = "Government";

{
    let name = "Souvik";
    var sector = "Private";       // var is not block-scoped. So it will update the value of the global sector variable.
    console.log(name);    //Souvik
    console.log(sector);  //Private
}

console.log(name);      //Abhijit
console.log(sector);    //Private

function dummyFunction(){
    if(true){
        globalvariable = "I am accessible from anywhere in this code";
    }
}
function dummyFunction2(){
    console.log(globalvariable);
}
dummyFunction();        // just run the function once and global variable is now available everywhere
dummyFunction2();       // access the global variable



/*
Hoisting in JS: is the default behavior of moving all the declarations at the top of the scope before code execution.
So no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local
JS hoists only declarations, not the initializations.
JS allocates memory for all variables and functions defined in the program before execution, and marks them as uninitialized.
*/

// normal flow of variable creations
let v;              // declaration
v = 1;            // assignment
console.log(v);     // usage

// var hoisting behavior
a = 10;   
console.log(a); 
var a;          // this works because the engine assigns the value to variables declared using var as soon as it encounters them.

console.log(d);     // undefined because the interpreter sees this as => var d; console.log(d); d = 10;
var d = 10;     

/*
// let and const hoisting behavior
b = 20;   
console.log(b); 
let b;          // this doesn't work. let and const are hoisted, but their hoisting is incomplete from our POV 
// because they enter the Temporal Dead Zone (TDZ). So they're known to the engine, but unusable until their declaration line (let b) runs
*/

c = 30;
console.log(c); // this works because now c is declared as a global variable since we didn't use let, const, or var to declare it first.


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// function hoisting can lead to unexpected behaviours... when you defined two functions with same name but different logics
// the last one wins... so the first function will also run using the last defined function's logic
function foo(n){
    return n * n;
}

console.log(foo(4));    // prints 64 when expected was 16

function foo(n) {
    return n * n * n;
}

console.log(foo(4));    // prints 64 correctly


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------



console.log(Object.keys(this)); // empty array
console.log(this);              // empty object because in node, 'this' refers to the module.exports and right now there is nothing being exported

let add = {
    num : 0,
    calc : function() {

    // logs the add object
       console.log(this + ' ') 

       function innerfunc() {
            this.num += 1;

           // logs the window object
            console.log(this + ' '); 

            return this.num

        } return innerfunc();
     }
};

// logs NaN
console.log(add.calc()); 

// logs NaN
console.log(add.calc());