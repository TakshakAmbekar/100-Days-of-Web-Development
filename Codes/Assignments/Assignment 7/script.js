let body = document.querySelector("body");
let btn = document.getElementById("next-btn");

btn.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let userName = email.split("@")[0];
  let domain = email.split("@")[1];
  
  let hidden = document.getElementById("hidden");
  let half = userName.slice(0, userName.length/2) + "...";
  hidden.innerHTML = half + '@' + domain;
})