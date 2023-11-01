//ovo sam zakomlikovao malo, ali ok donekle funkcionise nije kako sam zamislio ali radi ;D
var userInput = null;
//selektovaje dugmeta gde se menja pozadina
var variantButton = document.getElementById("buttonVariant");
var dugme1 = document.getElementsByClassName("prikazi-prompt");
var dugme2 = document.getElementsByClassName("prikazi-prompt2");
var dugme3 = document.getElementsByClassName("prikazi-prompt3");

//izlistavam i dodajem eventListenere na elemente
for (var i = 0; i < dugme1.length; i++) {
  dugme1[i].addEventListener("click", promeniPozadinu);
}
for (var i = 0; i < dugme2.length; i++) {
  dugme2[i].addEventListener("click", promeniSlova);
}
for (var i = 0; i < dugme3.length; i++) {
  dugme3[i].addEventListener("click", promeniVS);
}
console.log(dugme1, dugme2, dugme3);
function promeniPozadinu() {
  userInput = prompt("Unesi boju pozadine ispod:");

  if (userInput != null && userInput != "") {
    userInput = userInput.toLowerCase();

    if (userInput == "crvena") {
      variantButton.style.backgroundColor = "red";
    } else if (userInput == "plava") {
      variantButton.style.backgroundColor = "blue";
    } else {
      variantButton.style.backgroundColor = "green";
    }
  }
}

function promeniSlova() {
  userInput = prompt("Unesi boju slova ispod:");
  if (userInput != null && userInput != "") {
    userInput = userInput.toLowerCase();

    if (userInput == "crvena") {
      variantButton.style.color = "red";
    } else if (userInput == "plava") {
      variantButton.style.color = "blue";
    } else {
      variantButton.style.color = "white";
    }
  }
}

function promeniVS() {
  userInput1 = prompt("Unesi visunu ispod:");
  userInput2 = prompt("Unesi sirinu ispod:");

  if (userInput1 && userInput2 != null) {
    parseInt(userInput1);
    parseInt(userInput2);
    if (userInput1 >= 50) {
      variantButton.style.width = userInput1 + "px";
    } else {
    }
    if (userInput2 >= 50) {
      variantButton.style.height = userInput2 + "px";
    } else {
    }
  }
}
