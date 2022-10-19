document.querySelector(".myButton").addEventListener("click", myFunction);

function myFunction(){
  var diceNumber1 = Math.floor(Math.random() * 6)+1;  //1-6
  var diceNumber2 = Math.floor(Math.random() * 6)+1;

  var diceNumberImage1 = "images/dice" + diceNumber1 + ".png"   //dice1.png-dice6.png
  var diceNumberImage2 = "images/dice" + diceNumber2 + ".png"

  document.querySelector(".img1").setAttribute("src", diceNumberImage1);   //images/dice1.img-images/dice6.img
  document.querySelector(".img2").setAttribute("src", diceNumberImage2);

  if (diceNumber1 > diceNumber2){
    document.querySelector("h1").textContent  = "🚩Player 1 Wins!";
  }
  else if (diceNumber1 < diceNumber2){
    document.querySelector("h1").textContent  = "Player 2 Wins!🚩";
  }
  else{
    document.querySelector("h1").textContent  = "Draw!";
  }
}
