var naslov = document.getElementById("naslov_sajta");

naslov.innerHTML = "Ovo je naslov iz Js";
naslov.style.color = "red";

var tekst = document.getElementsByClassName("tekst_sajta");
for (var i = 0; i < tekst.length; i++) {
  tekst[i].style.color = "green";
}

/*var tekst = document.getElementsByClassName("tekst_sajta");
tekst[0].style.color = "green";
tekst[1].style.color = "pink";*/
