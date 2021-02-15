const door1 = document.querySelector(".trap-door-One");
const door2 = document.querySelector(".door-Two");
const door3 = document.querySelector(".door-Three");

door1.addEventListener("click", toggleDoor1);
door2.addEventListener("click", toggleDoor2);
door3.addEventListener("click", toggleDoor3);

function toggleDoor1() {
  door1.classList.toggle("doorOpen");
}
function toggleDoor2() {
  door2.classList.toggle("doorOpen");
}
function toggleDoor3() {
  door3.classList.toggle("doorOpen");
}
