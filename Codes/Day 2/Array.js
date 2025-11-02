let a = [0, 1, 2, 3];

// pushing multiple values in the array
a.push(5, 6, 4);
let b = [9, 8, 7];

// pushing another array into an array
a.push(...b);

console.log(...a);

// a.pop() returns the last elements and also removes it from the array. Returns undefined when array is empty.
let popped = a.pop();
console.log(popped);
console.log(...a);

//  a.slice(begin, end) returns elements from index begin to index end - 1
let sliced = a.slice(3,7);
console.log(...sliced);
// when only starting index is provided, returns elements starting from index begin.
let ending = a.slice(3);
console.log(...ending);

// a.includes(searchElement, start) returns true if searchElement exists at an index >= start. If start is not provided, it checks for the whole array
console.log(a.includes(3));
console.log(a.includes(3, 5));

// a.sort(compareFunction) sorts the array in place. Default compareFunction is for lexicographical non-decreasing
let arr = [12, 1, 19, 111, 23, 45];
arr.sort();
console.log("Lexicographically non-decreasing order: ", ...arr);

// compareFunction swaps (a, b) if the logic inside returns a positive value, else it does not swap

arr.sort((a, b) => String(b).localeCompare(a)); // lexicographically non-increasing
console.log("Lexicographically non-increasing order: ", ...arr);

// sorting in a numeric non-decreasing order
arr.sort((a,b) =>  a - b);  // a - b will be positive if a > b, in that case b will be placed before a.
console.log("Numerically non-decreasing order: ", ...arr);

arr.sort((a,b) =>  b - a);  // a - b will be positive if a > b, in that case b will be placed before a.
console.log("Numerically non-increasing order: ", ...arr);

// all digits are lexicographically smaller than english alphabets
let z = [213, 23, "a", "b", 13, 11111, 0, "ab"];
console.log(...z.sort());



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// split and join can be used on arrays and strings 

let s = "It is a great day, isn't it?";

// str.split(seperator, limit) : seperator is the character or expression that splits the string, and limit defines the upper limit on the number of splits.
// it returns an array of separated substrings
console.log(s.split(","));
console.log(s.split(" ", 3));   // prints first 3 words
console.log(s.split(" ", 30));  // 30 is the upper bound. Function will stop splitting when string ends

let word = "Takshak";
let letters = word.split("");
console.log(letters);

// array.join(separator) returns a string after joining all the elements using a separator (possibly ""). Default separator is a comme (,) if no parameter is provided
let myName = letters.join("");
console.log(myName);

let words = ["My", "name", "is", myName];
let sentence = words.join(" ");
console.log(sentence);

// reversing a string : JS does not have a built-in reverse method for strings. 
let str = "This is a string";
let str_array = str.split("");
str_array.reverse();
let str2 = str_array.join("");
console.log(`${str}\n${str2}`);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// spread operator with objects
const user1 = {
    name: 'Jen',
    age: 22,
};
  
const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
  
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)    // outputs : { name: 'Andrew', age: 22, location: 'Philadelphia' } 
                            // because a dictionary cannot have duplicate keys, it simply updates the previous name.