const doors = document.querySelectorAll(".back");
const start = document.getElementById("gameStart");
var shuffleOnclick = document.querySelector(".generate");

console.log(shuffleOnclick);
let rooms = 0;
shuffle();

function shuffle() {
  let allDoors = document.getElementsByClassName("img");
  let random = Math.floor(Math.random() * allDoors.length);
  console.log(random);
  let trap = allDoors[random];
  trap.setAttribute("src", "./data/badnews.jpg");
}

function toggleDoor(evt) {
  const parentDoor = evt.target.parentElement;
  const img = parentDoor.querySelector(".img");
  console.log(img.src);
  if (img.src === "https://aurelie75fr.github.io/Too-cute-to-be-true/data/badnews.jpg") {
    gameOver();
    console.log("dead");
  } else {
    console.log("tout va bien");
  }
  evt.target.classList.toggle("doorOpen");
}

function gameOver() {
  let surprise = document.querySelector("#gameOver");
  surprise.classList.toggle("hide");
  let audio = document.querySelector("#scream");
  audio.play();
}

doors.forEach(function (doorMove) {
  doorMove.addEventListener("click", toggleDoor);
});

shuffleOnclick.addEventListener("click", shuffle);
console.log(shuffleOnclick);

//script.js:20 https://aurelie75fr.github.io/Too-cute-to-be-true/data/badnews.jpg
