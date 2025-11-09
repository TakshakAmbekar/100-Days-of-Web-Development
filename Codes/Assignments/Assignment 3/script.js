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


let women_shirt_colors = clothingStock
    .filter(el => el.category === "women shirt")
    .map(el => el.color);
console.log(women_shirt_colors);        // might also add a function to print only unique colors

let men_shirt_colors_in_stock = clothingStock
    .filter(el => el.category === "men shirt" && el.inStock === true)
    .map(el => el.color);
console.log(men_shirt_colors_in_stock);

let in_stock = clothingStock.filter(el => el.inStock === true);
console.log(in_stock);