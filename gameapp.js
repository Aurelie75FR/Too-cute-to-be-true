const doors = document.querySelectorAll(".door-One, .door-Two, .door-Three");
const backDoors = document.querySelectorAll(
  "#backDoor-1, #backDoor-2, #backDoor-3");

let jumpscare = 0;

function shuffle() {
  backDoors[jumpscare].setAttribute("#backDoor-1", "#backDoor-2", "#backDoor-3");
  let random = Math.floor(Math.random() * backDoors.length);
  let door = backDoors[random];
  door.setAttribute("src", "Images/scary.gif");
  jumpscare = random;
}

doors.forEach(function (element) {
  function toggleDoor() {
    element.classList.toggle("doorOpen");
  }

  element.addEventListener("click", toggleDoor);
});
