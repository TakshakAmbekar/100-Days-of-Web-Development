// destructuring an array
var names = ["alpha", "beta", "gamma", "delta"];
 
var firstName = names[0];
var secondName = names[1];
 
console.log(firstName);     //"alpha"
console.log(secondName);    //"beta"

// destructuring only a few starting elements
var [a, b] = names;
     
console.log(a);     //"alpha"
console.log(b);     //"beta"

// skipping elements while destructuring
var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(thirdName);//"gamma"

// destructuring first few elements in variables and getting the remaining elements as a different array
[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x);         // 10
console.log(y);         // 20
console.log(restof);    // [30, 40, 50]

// destructuring of an object
({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x);         // 10
console.log(y);         // 20
console.log(restof);    // {m: 30, n: 40}

// renaming variables while destructuring
const user = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};
const { name: userName, age: userAge, job: userJob } = user;
console.log(userName);  // John Doe
console.log(userAge);   // 30
console.log(userJob);   // Developer

// nested destructuring
const user2 = {
  name: 'John Doe',
  address: {
    city: 'New York',
    country: 'USA'
  }
};
const { name, address: { city, country } } = user2;
console.log(name); // John Doe
console.log(city); // New York
console.log(country); // USA
// console.log(address)    // error : we have destructured the address object into city and country separately, js doesn't know address object now