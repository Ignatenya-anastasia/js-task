const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const tableBody = document.querySelector(".table");

btn.addEventListener("click", () => {
  const value = inp.value.trim();

  if (value === "") return;

  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.textContent = value;

  row.appendChild(cell);

  tableBody.appendChild(row);

  inp.value = "";
});
