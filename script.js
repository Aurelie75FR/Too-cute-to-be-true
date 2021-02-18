const nextDay = document.getElementById("generateNewDay")
const doors = document.querySelectorAll(".back");
const start = document.getElementById("gameStart");
const jumpscare = document.getElementById("gameOver");
let rooms = 0;
let score = 0;
shuffle();

// function gamePlay(){
//   let init = gameStart()
//   // let play = 
// }


function shuffle() {
  let allDoors = document.getElementsByClassName("img");
  let random = Math.floor(Math.random() * allDoors.length);
  let trap = allDoors[random];
  trap.setAttribute("src", "./Images/zut.gif");
 }

function setScore() {
  const scoreText = document.getElementById("score");
  score++;
  scoreText.innerHTML = score;
  // if(score = 5){
  //   // endGame()
  // }
  console.log(score);
}

function youLose() {
  jumpscare.classList.toggle("hide");
}
jumpscare.addEventListener("click", youLose);

function toggleDoor(evt) {
  const parentDoor = evt.target.parentElement;
  const img = parentDoor.querySelector(".img");
  console.log(img.src);
  if (img.src === "http://127.0.0.1:5500/Images/zut.gif") {
    youLose();
    console.log("dead");
  } else {
    setScore();
    console.log("tout va bien");
  }
  evt.target.classList.toggle("doorOpen");
}

function gameStart(evt) {
  evt.target.classList.toggle("hide");
}
start.addEventListener("click", gameStart);

doors.forEach(function (doorMove) {
  doorMove.addEventListener("click", toggleDoor);
});
// nextDay.addEventListener('click',shuffle)
// console.log(nextDay)