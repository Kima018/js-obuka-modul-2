document.getElementById("dugme").addEventListener("click", function () {
  if (this.classList.contains("button")) {
    this.classList.remove("button");
  } else {
    this.classList.add("button");
  }
});

document
  .getElementById("proveriGodine")
  .addEventListener("click", proveriGodine);

function proveriGodine() {
  var input = document.getElementById("godine");
  input = input.value;
  if (!isNaN(input)) {
    if (input >= 18) {
      var poruka = (document.getElementById("poruka").innerText =
        "Punoletni ste!");
    } else {
      var poruka = (document.getElementById(
        "poruka"
      ).innerText = `Bicete punoletni za ${18 - input} godina `);
    }
  } else {
    alert("Nise uneli ispravno godine!!");
  }

  input.value = "";
  console.log(input);
}
document.getElementById("racunaljka").addEventListener("click", izracunaj);
function izracunaj() {
  var deljenik = prompt("Koji broj zelite da podelite");
  var delilac = prompt("Kojim brojem zelite da podelite");
  if (delilac != 0) {
    alert(`Rezultat je  => ${deljenik / delilac} `);
    console.log(deljenik / delilac);
  } else {
    alert("Deljenje brojem 0 nije dozvoljeno!");
  }
}
