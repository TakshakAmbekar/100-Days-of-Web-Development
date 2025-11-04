// creating an object
const person = {
    name: 'Prakash',
    age: 99,
    job: 'Mentor',
    'previous job': 'Unemployed' 
};

// you can add/remove/rename the properties of a const object and even change the values inside it. But a const object cannot be assigned to an entirely different object
person.age = 100;
console.log(person);

// person = {};     // this will give error

// accessing properties : dot notation and square bracket notation
console.log(person.name);   // Output: Prakash
// square bracket notation is useful when property name is multi-worded
console.log(person["name"]);  // Output: Prakash
console.log(person["previous job"]);

// Adding and Modifying Properties
person.city = 'New York'; // Adding a new property 
person['gender'] = 'male';
person.age = 100;         // Modifying an existing property
console.log(person);  

// deleting properties
delete person.job;
console.log(person.job); // Output: undefined
console.log(person);

// nested objects
const user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};
console.log(user.address.city); // Output: Anytown

// object methods
const car = {
    make: 'Tesla',
    model: 'Model S',
    start: function() {
        console.log('Car started');
    }
};
car.start(); // Output: Car started

// creating a shallow copy
const userCopy = { ...user };
console.log(userCopy); // Output: { name: 'John', address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Computed properties allow you to dynamically set property names. This is particularly useful when you want to add a property to an object based on a variable value.
const readlineSync = require('readline-sync');

const obj = {
    name: 'Prakash',
    age: 100
};

// Getting a key from the user
const key = readlineSync.question('What do you want to know about the mentor? (name, age, city, state): ');

// Adding the key to the object dynamically
obj[key] = obj[key] || 'Not Available';     // if the requested key is not present, a key with 'Not Available' value will be inserted

console.log(obj[key]);  
console.log(obj);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// checking if property exists
const obj2 = {
    name: 'Prakash',
    city: 'Mumbai'
};

// Checking if 'name' property exists in obj
const isNameFound = 'name' in obj2;
console.log(isNameFound); // Output: true

// Checking if 'age' property exists in obj
const isAgeFound = 'age' in obj2;
console.log(isAgeFound); // Output: false


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// looping through an object 
const person2 = {
    name: 'Prakash',
    city: 'Mumbai'
};

// Looping through the object using for...in loop
for (let key in person2) {
    console.log(`${key} : ${person2[key]}`);
}
