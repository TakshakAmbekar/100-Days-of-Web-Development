let products = [
    { id: "1",  item: "Shirt" },
    { id: "2", item: "Jeans" },
    { id: "3", item: "T-shirt" },
    { id: "4", item: "Denim Jacket" },
    { id: "5", item: "Casual Shoes" }
];

let UI = document.createElement("div");
UI.classList.add("UI");
for(let product of products){
    let card = document.createElement("div");
    card.classList.add("card");

    let item = document.createElement("div");
    item.textContent = product.item;
    card.appendChild(item);
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    card.appendChild(btn);

    UI.appendChild(card);
}
document.body.appendChild(UI);

UI.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON"){
        const item = event.target.closest("div");    // .closest returns the closest ancestor (possibly the element itself) with the provided selector 
        console.log("deleting", item.id);
        item.remove();
    }
});

