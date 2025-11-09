const clothingStock = [
 {
   id: "1",
   color: "red",
   category: "men shirt",
   item: "Regular Fit Men Shirt",
   inStock: true
 },
 {
   id: "2",
   color: "green",
   category: "women shirt",
   item: "Slim Fit Women Shirt",
   inStock: true
 },
 {
   id: "3",
   color: "blue",
   category: "men shirt",
   item: "Oversized Men Shirt",
   inStock: false
 },
 {
   id: "4",
   color: "yellow",
   category: "men tshirt",
   item: "Regular Fit Men Tshirt",
   inStock: false
 },
 
 
{
   id: "5",
   color: "magenta",
   category: "women jeans",
   item: "Ankle Length Women Jeans",
   inStock: true
 },
 {
   id: "6",
   color: "yellow",
   category: "men shirt",
   item: "Casual Fit Men Shirt",
   inStock: true
 },
 {
   id: "7",
   color: "green",
   category: "men jeans",
   item: "Carrot Fit Men Jeans",
   inStock: true
 },
 {
   id: "8",
   color: "red",
   category: "women shirt",
   item: "Casual Fit Women Shirt",
   inStock: false
 }
];

let items = clothingStock.map(e => e.item);
let added = [];

function addFav(item){
  if(added.includes(item)) return;

  added.push(item);
  let list = document.getElementById("fav-list");
  let newFav = document.createElement("li");
  newFav.textContent = item;
  list.appendChild(newFav);
}

let dropdown = document.getElementById("fav-select");
for(let item of items){
  let option = document.createElement("option");
  option.value = item;
  option.text = item;
  dropdown.appendChild(option);
}

dropdown.addEventListener("click", () => {
  console.log(dropdown.value);
  let item = dropdown.value;
  if(items.includes(item))
  addFav(item);
})