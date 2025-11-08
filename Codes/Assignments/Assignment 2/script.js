

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let input = document.getElementById("userInput");
    let s = input.value;
    
    let original = document.getElementById("original");
    original.value = s;

    let arr = s.split("");
    let arr2 = arr.reverse();
    s = arr2.join("");
    
    let reversed = document.getElementById("reversed");
    reversed.value = s;
})