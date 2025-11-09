const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];

numbers.sort((a, b) => b - a);

let max_count = 1;
let count = 1;
let ans = numbers[0];
for(let i = 0; i < numbers.length - 1; i++){
  if(numbers[i] == numbers[i + 1]) count++;
  else count = 1;
  if(count > max_count){
    max_count = count;
    ans = numbers[i];
  }
}
console.log(numbers);
console.log(ans);