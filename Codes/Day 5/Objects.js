const person = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// shallow copying an object : primitive data types are copied by value whereas nested objects are copied by reference

// using spread operator
const shallow1 = {...person};
console.log(shallow1);
shallow1.address.city = 'Delhi';    // this changes the city of both person and shallow1
console.log(person, shallow1);

// using Object.assign(target, source) method
const shallow2 = Object.assign({}, person);
console.log(shallow2);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// deep copying an object : nested objects are copied by value as well
// using JSON.stringify and JSON.parse
const deep1 = JSON.parse(JSON.stringify(person)); // Deep copy
deep1.name = 'Ashish';
deep1.address.city = 'Sirsa';

console.log(person.name); // Output: Prakash
console.log(deep1.name); // Output: Ashish
console.log(person.address.city); // Output: Mumbai
console.log(deep1.address.city); // Output: Sirsa

// using a custom recursive deep copy function
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};  // if the object is an array, then return type should be array as well
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {          // hasOwnProperty is a built-in object method that checks if the key is present and not an inherited one
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

deep2 = deepCopy(person);
deep2.name = 'Akash';
console.log(person.name, deep2.name);

// a cleaner implementation of recursive deep copy
function deepCopy2(obj){
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (const key of Object.keys(obj)) {       // Object.keys(obj) only returns obj's own, enumerable properties
        copy[key] = deepCopy(obj[key]);
    }
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// optional chaining '?.' : is an error-proof way to access nested object properties, even if an intermediate propert doesn't exist.
// it also works with a functional call when we try to make a call to a method which may not exist

const user = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai'
    },
    likes: ['reading', 'traveling']
};

console.log(user.address.landmark);     // output : undefined -> not an issue because address is defined and we are trying to access the last layer of nesting
console.log(user.address?.landmark);    // output : undefined

const userWithoutAddress = {
    name: 'Prakash'
};

// console.log(userWithoutAddress.address.city); // Error: Cannot read property 'city' of undefined
// this is because address itself is undefined so we cannot use object methods on it

console.log(userWithoutAddress?.address?.landmark);     // output : undefined -> stops at address itself, doesn't go further checking of landmark

// use cases of optional chaining
const userWithFunction = {
    name: 'Prakash',
    getDisplayMessage: function() {
        console.log('Welcome, Prakash');
    }
};

userWithFunction?.getDisplayMessage?.(); // Output: Welcome, Prakash

const userWithoutFunction = {
    name: 'Prakash'
};

userWithoutFunction?.getDisplayMessage?.(); // No output, no error


/* practical use case : data fetching

fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(data => {
        console.log(data?.address?.city);   -> if the api response doesn't have required data, no error will occur
    });
*/

console.log(user?.['address']?.['street']);     // optional chaining can be done with square bracket property access as well


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// destructuring objects

const obj = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra'
    },
    courses: ['JavaScript', 'React', 'Node.js']
};

// basic destructuring
{   // enclosing in {} because const and let are block-scoped - cannot redeclare the variable names in the same scope.
const { name, address, courses } = obj;
console.log(name);      // Output: Prakash
console.log(address);   // Output: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }
console.log(courses);   // Output: ['JavaScript', 'React', 'Node.js']
}

// nested destructuring
const { address: { city, state } } = obj;
console.log(city);  // Output: Mumbai
console.log(state); // Output: Maharashtra

// renaming variables
{
const { name: userName, address: { city: userCity } } = obj;
console.log(userName); // Output: Prakash
console.log(userCity); // Output: Mumbai
}

// rest operator : gathers remaining items into a new array or object. It can be named anything, just precede with three dots '...'
{
const { name, ...rest } = obj;
console.log(name); // Output: Prakash
console.log(rest); // Output: { address: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }, courses: ['JavaScript', 'React', 'Node.js'] }
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// property shorthand
function getObject(name, city) {
    return {
        name,       // instead of writing -> name : name
        city        // instead of writing -> city : city
    };
}

const obj2 = getObject('Akash', 'Mumbai');
console.log(obj2); // Output: { name: 'Akash', city: 'Mumbai' }

// shorthand for creating objects
const students = [
    { name: 'Akash', city: 'Mumbai', course: 'JavaScript' },
    { name: 'Ashish', city: 'Chennai', course: 'Redux' },
    { name: 'Sita', city: 'Delhi', course: 'React' }
];

students.forEach(student => {
    console.log(student);
});

// functions can be used as keys in objects as well
const Example = {
    name : "anupam",
    func : function(){
            console.log("hello");
        },
    second(){       // shorthand for using functions as a key
            console.log("GeeksForGeeks");
        }
}

Example.func();
Example.second();