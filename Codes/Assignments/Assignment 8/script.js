let btn = document.getElementById("remove-btn");

function removeSpaces(text){
  let words = text.split(" ");
  words = words.filter((el) => el != " ");
  words = words.join("");
  return words;
}

btn.addEventListener("click", () => {
  let text = document.getElementById("text").value;
  let div = document.getElementById("output-div");
  div.hidden = false;
  let output = document.getElementById("output");
  output.innerHTML = removeSpaces(text);
})