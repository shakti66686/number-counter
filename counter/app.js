const counter = document.getElementById("count");
const add = document.getElementById("add");
const reset = document.getElementById("reset");
const decrese = document.getElementById("decrese");
console.log(reset);

let count = 0;
add.addEventListener("click", function () {
  let count = counter.innerHTML++;
  if (count >= 0) {
    counter.style.color = "green";
  }
});
reset.addEventListener("click", function () {
  counter.innerHTML = 0;
  if (count == 0) {
    counter.style.color = "black";
  }
});
decrese.addEventListener("click", function () {
  let count = counter.innerText--;
  if (count <= 0) {
    counter.style.color = "red";
  }
});
function color() {
  if (count > 0) {
    counter.innerHTML.style.color = "green";
  } else {
    counter.innerHTML.style.color = "red";
  }
}
