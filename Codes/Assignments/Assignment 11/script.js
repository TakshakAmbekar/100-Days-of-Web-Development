const stars = document.getElementById("rating");
const icons = document.querySelectorAll("#rating i"); 
let selectedRating = 0;

function highlightStars(count) {
  icons.forEach((icon, i) => {
    icon.classList.toggle("fa-solid", i < count);
    icon.classList.toggle("fa-regular", i >= count);
  });
}

stars.addEventListener("mouseover", (e) => {
  if(e.target.tagName === "I"){
    let curr_rating = e.target.id;
    highlightStars(curr_rating);
  }
})

stars.addEventListener("mouseleave", () => {
  highlightStars(selectedRating);
})

stars.addEventListener("click", (e) => {
  if(e.target.tagName === "I"){
    selectedRating = e.target.id;
  }
})


