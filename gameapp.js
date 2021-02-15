
let btn = document.getElementById('btn')
btn.addEventListener('click', shuffle)
const doors = document.querySelectorAll(".back")
let redcard = 0;

shuffle()

function shuffle() {
    let allcards = document.getElementsByClassName("img");
    allcards[redcard].setAttribute('src', "./Images/dark-room.jpg")
    let random = Math.floor(Math.random() * allcards.length); 
    let card = allcards[random];
    card.setAttribute('src', "./Images/scary.gif");
    redcard = random
}



doors.forEach(function (element) {
    function toggleDoor() {
      element.classList.toggle("doorOpen");
    }
  
    element.addEventListener("click", toggleDoor);
  });
  