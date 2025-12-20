const inp = document.querySelector("input");
const par = document.querySelector("p");

let arr = [];

inp.addEventListener("keypress", (event) => {
  try {
    if (event.key !== "Enter") return;
    const value = inp.value.trim();

    if (value === "") throw new Error("Not data");

    arr.push(value);
    par.textContent = arr.join(",");
    inp.value = "";
  } catch (error) {
    par.textContent = error.message;
  }
});
