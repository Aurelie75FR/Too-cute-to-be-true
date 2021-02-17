const doors = document.querySelectorAll(".back");
const start = document.getElementById("gamestart");
const frontDoor = document.querySelectorAll(".front");
let rooms = 0;
let score = 0;
shuffle();

function shuffle() {
  let allDoors = document.getElementsByClassName("img");
  //allDoors[rooms].setAttribute("src", "./Images/dark-room.jpg");
  let random = Math.floor(Math.random() * allDoors.length);
  console.log(random);
  let trap = allDoors[random];
  trap.setAttribute("src", "./Images/zut.gif");
  // rooms = random;
}

function setScore() {
  const scoreText = document.getElementById("score");
  score++;
  scoreText.innerHTML = score;
  console.log(score);
}

function toggleDoor(evt) {
  const parentDoor = evt.target.parentElement;
  const img = parentDoor.querySelector(".img");
  console.log(img.src);
  if (img.src === "http://127.0.0.1:5500/Images/zut.gif") {
    console.log("dead");
  } else {
    setScore();
    console.log("tout va bien");
  }

  //ecrire condition pour déterminer si img === win ou loose
  evt.target.classList.toggle("doorOpen");
}

function lose() {}

function gameStart(evt) {
  evt.target.classList.toggle("hide");
}
start.addEventListener("click", gameStart);

function gameOver() {}

doors.forEach(function (doorMove) {
  doorMove.addEventListener("click", toggleDoor);
});
