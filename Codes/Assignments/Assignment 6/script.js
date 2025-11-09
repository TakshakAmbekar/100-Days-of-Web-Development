let tableBody = document.getElementById("table-body");
let tableRows = tableBody.children;
let cols = tableRows[0].childElementCount;

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let newRow = document.createElement("tr");
  for(let i = 1; i <= cols; i++){
    let newCell = document.createElement("td");
    newCell.textContent = `Row${tableRows.length + 1} Cell${i}`;
    newRow.appendChild(newCell);
  }
  tableBody.appendChild(newRow);
})