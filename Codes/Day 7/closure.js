/*
Closure is a function bundled with it's lexical scope. Because of closure, inner function can have access to outer function's scope.
A closure is created whenever a function remembers variables from its creation context, even if it’s invoked later elsewhere.

A lexical environment is the local function memory and the reference to the lexical environment of the parent.
*/

function foo(outer_arg){
    function inner(inner_arg){
        return outer_arg + inner_arg;
    }
    return inner;
}

let get_func_inner = foo(5);
console.log(get_func_inner(4));
console.log(get_func_inner(5));
/*
Even after the execution of the parent function 'foo' on line 10, the 'outer_arg' is still accessible on lines 11 and 12 because of closure.
The 'foo' function returned its 'inner' function and not 'get_func_inner' is a reference to the 'inner' function. The 'inner' function also holds
the value of 'outer_arg' that it got when 'foo' was executed in line 10. 
So in line 11 and 12 when we call 'get_func_inner' with values 4 and 5, these values are assigned to 'inner_arg' and finally the sum is returned.

Closures work because JavaScript uses lexical scope (scope decided at definition time, not call time).
So inner() always “knows” where it was defined — inside foo() — and thus remembers outer_arg.
*/

let x = 10;
function foo2() {
  let x = 20;
  return function() { console.log(x); };
}
let f = foo2(); 
f();    // prints 20, not 10 — because of lexical scope


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Outer function
function outer() 
{
    var arr = [];
    var i;
    for (i = 0; i < 4; i++) 
    {
        // storing anonymous function
        arr[i] = function () { return i; }      // this 'i' is remembered by the reference, the actual value is not copied!
    }

    // returning the array.
    return arr;
}

var get_arr = outer();

console.log(get_arr[0]());  // output 0?
console.log(get_arr[1]());  // 1?
console.log(get_arr[2]());  // 2?
console.log(get_arr[3]());  // 3?
/* 
Closures don't remember the value of the variable, it only points to the variables or stores the reference of the variable and hence returns the current value.
In the above code when we try to update the value of arr[i] it gets reflected to all because the closure only stores the reference. 
And at the end of the loop i = 4 so all of them store 4.
*/


function outer2() 
{
    function create_Closure(val)    
    {
        return function() 
        {
            return val;     // returns val as a copy because val in the create_closure was not passed as a reference, but a new copy was created
        }
    }
    var arr = [];
    var i;
    for (i = 0; i < 4; i++) 
    {
        arr[i] = create_Closure(i);     // each i will be a different variable
    }
    return arr;
}
get_arr = outer2();
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());




function outer3() {
    var arr = [];
    for (let i = 0; i < 4; i++)     // now when we put 'i' in the for's scope using let (block-scoped), we get the output that we expected
        arr[i] = function () { return i; }      // each iteration creates a new variable 'i'
    return arr;
}

get_arr = outer3();

console.log(get_arr[0]());  
console.log(get_arr[1]());  
console.log(get_arr[2]());  
console.log(get_arr[3]());  


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function a() {
  console.log("Hello, I am a function");

  function b() {
    console.log("Hello, I am an inner function");
  }
  return b;
}
const result = a();     // prints "Hello, I am a function" and stores b in result
result();               // prints "Hello, I am an inner function"


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

