/*
Functions or operations that are running in parallel with some other functions or operations are called Asynchronous functions or operations.
Asynchronous functions use Callback Functions that get executed later.
*/

// setTimeout is an asynchronous function that executes the provided callback function after a set time provided as second parameter in milliseconds
// setTimeout is not part of JS, it is one of the many web APIs that are available in the global object of the browder.
setTimeout(function greet(){
    console.log("Welcome")
}, 2000);

console.log("Hi,");  // will get printed before the greet message


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// callbacks are a great way to handle something after something else has been completed. 
// if we want to execute a function right after the return of some other function, then callbacks can be used.

function add(a, b, callback){
    let sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    callback();     // callback will be executed as soon as the previous statement is executed
}

function disp(){
    console.log('This function must be printed after addition');
}

add(5, 6, disp);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
Promises are used to handle asynchronous operations in JS.
Promises can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

Benefits of Promises:
    1. Improves code readability
    2. Better handling of asynchronous operations
    3. Better flow of control definition in asynchronous logic
    4. Better error handling

A Promise has 4 states
    1. fulfilled: action related to the promise succeeded
    2. rejected: action related to the promise failed
    3. pending: promise is still pending i.e. not fulfilled nor rejected yet
    4. settled: promise has been fulfilled or rejected

Promise constructor:
var promise = new Promise(function(resolve, reject){
    // do something
});

Life of a Promise:
    1. Promise constructor takes only one argument which is a callback function 
    2. Callback function takes two arguments - resolve, and reject
    3. Perform operations inside the callback function and if everything went well, then call resolve
    4. If desired operations do not go well, then call reject
*/

let promise = new Promise(function(resolve, reject){
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    if(x === y) 
        resolve();
    else    
        reject();
});

promise
    .then(function(){
        console.log('Success, you are a GEEK!');
    })
    .catch(function(){
        console.log('Some error has occurred');
    })

/*
then() is invoked when a promise is either resolved or rejected. It may also be defined as a carrier which takes data from promise and further executes is successfully
then() method takes two functions as parameters
    1. first function is executed if promise is resolved and a result is received
    2. second function is executed if promise is rejected and an error is received 
        it is optional and there is a better way to handle erros using .catch() method

syntax:
.then(function(result){
    // handle success
}, function(error){
    // handle error
})
*/

// The following function returns a Promise that:
// - resolves with the number if it's even
// - rejects with the number if it's odd
function isEven(n){
    return new Promise(function(resolve, reject){
        if(n % 2 === 0) resolve(n);
        else reject(n + " is not even");
    });
} 

// using .then() to handle both resolved and rejected states is a discourged practice
isEven(4)
    .then(num => console.log(num, "is even"), error => console.log(error))

// The best practice to handle reject state is using .catch instead because it is more readable and it is easier to chain more .then() calls later
isEven(5)
    .then(num => console.log(num, "is even"))
    .catch(error => console.log(error));


// resolve() and reject() both take a single argument, if you add more arguments, the following will be ignored and only the first one will be considered

// throwing errors from a promise
let promise2 = new Promise(function(resolve, reject) { 
    throw new Error('Some error has occurred')  // this will automatically be converted into a reject
}) 
  
promise2 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }) 
    .catch(function(error) { 
       //error handler function is invoked 
        console.log(error.message); 
    });


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/* Async/Await is an extension of promises which supported by the JS.
Async: allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread.
It operates asynchronously via the even-loop.
Async functions will always return a value.
It makes sure that a promise is returned and if it is not returned then JS automatically wraps it in a promise which is resolved with its value.
*/

let getData = async() => {
    let data = "Hello World";
    return data;
}

getData()
    .then(data => console.log(data));

/* 
Await: is used to wait for the promise. 
It can be used within the async block only.
It makes the code wait until the promise returns a result.
It only makes the async block wait.
*/

getData = async() => {
    let y = await "Hello World2";
    console.log(y);
}
console.log(1);
getData();
console.log(2);