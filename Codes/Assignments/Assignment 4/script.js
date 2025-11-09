// let text = document.querySelector("h2");

// let words = text.textContent.split(" ");

// text.textContent = "";

// for(let word of words){
//   let span = document.createElement("span");
//   span.textContent = word;
//   if(word.length >= 10) 
//     span.style.backgroundColor = "green";
  
//   let space = document.createElement("span");
//   space.textContent = " "
//   text.appendChild(span);
//   text.appendChild(space);
  
// }

const text = document.querySelector("h2");

text.innerHTML = text.textContent
  .split(" ")
  .map(word => {
    // Extract all trailing punctuation (.,!?;:)
    const match = word.match(/([^\w]*)$/);
    const punctuation = match ? match[0] : "";
    const cleanWord = word.replace(/[^\w]/g, "");

    const shouldHighlight = cleanWord.length >= 10;
    const color = shouldHighlight ? "green" : "inherit";

    return `<span style="background-color: ${color}">${cleanWord}</span>${punctuation}`;
  })
  .join(" ");
