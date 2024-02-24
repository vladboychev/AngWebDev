let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  changeH1("🚩Player 1 wins!");
} else if (randomNumber1 < randomNumber2) {
  changeH1("Player 2 wins!🚩");
} else {
  changeH1("Draw.");
}

function changeH1(text) {
  document.querySelector("h1").innerHTML = text;
}
