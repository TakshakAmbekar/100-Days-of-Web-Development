let studentNames = ["Prakash", "Ashish", "Via", "Adarsh"];
console.log(studentNames, "\n");

// push method : add element to the end
studentNames.push("Piyush");
console.log(studentNames, "\n");

// removing elements
// pop method : remove last element
studentNames.pop(); 
console.log(studentNames, "\n");

// shift method : remove first element
studentNames.shift(); 
console.log(studentNames, "\n");

// splice method : remove a number of elements starting from some index
studentNames.splice(2, 1); // Removes one element at index 2
console.log(studentNames, "\n");

// map method : create a new array by performing some manipulation on each of the element
let upperCaseNames = studentNames.map(name => name.toUpperCase());
console.log(upperCaseNames, "\n");

// filter method : create a new array by filtering out elements based on some condition
let longNames = studentNames.filter(name => name.length > 5);
console.log(longNames, "\n"); 

// reduce method : reduce the array into a single value using some logic
array = [ 1, 2, 3, 4, 5, 6 ];
 
const helperSum = (acc,curr) => acc+curr
sum = array.reduce(helperSum, 0);
 
console.log(sum, "\n");

// some method : check if some of the elements of an array satisfy a condition
array = [ 1, 2, 3, 4, 5, 6 ];
 
const lessthanFourCheck = (element) => element < 4 ;
const lessthanFour = array.some(lessthanFourCheck)
 
console.log(array);
if(lessthanFour){
    console.log("At least one element is less than 4", "\n")
}else{
    console.log("All elements are greater than 4 ", "\n")
}