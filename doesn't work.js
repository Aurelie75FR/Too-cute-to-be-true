const btns = document.querySelectorAll("btn");
//btns.addEventListener("click", gameStart());
btns.onclick = gameStart
const doors = document.querySelectorAll(".back");

let levelEasy= 1;
let rooms = 0;
class Room{
constructor(badDoors=1,nbDoors=5){
 this.doorsNb = nbDoors,
 this.badDoors = levelEasy < 5 ? 1 : 2,
 this.doors = this.shuffleDoors();
}
shuffleDoors(){
 let arr = ["O","O","O","O","O"]
 let index = Math.floor(Math.random()*arr.length)
 arr[index] = "X"
 return arr
}
}
console.log(new Room());


// shuffle();

function shuffle() {
 let alldoors = document.getElementsByClassName("img");
 alldoors[rooms].setAttribute("src", "./Images/dark-room.jpg");
 let random = Math.floor(Math.random() * alldoors.length);
 let trap = alldoors[random];
 trap.setAttribute("src", "./Images/scary.gif");
 rooms = random;
}

function gameStart() {
 // faire un start
 const starter = document.getElementById("gameStart")
 starter.addClass('hide');
}

function newGame(){
 gameStart();
}

function gameOver() {
 const tryAgain = document.getElementById("gameOver")
 tryAgain.removeClass('hide')
 //if else pour determiner si on clique sur la bonne/mauvaise porte
 //si on je clique sur une des bonnes portes montre un gif "passe une bonne nuit"
 //ou tombe sur une horreur gif
 //ajouter un bouton restart
}


function message() {
 //ajouter un message quand on réussi ou pas
}

doors.forEach(function (element) {
 function toggleDoor() {
   element.classList.toggle("doorOpen");
 }

 element.addEventListener("click", toggleDoor);
});
