/* 
class Osoba{
ime;
.
.
.
}
*/
class Osoba {
  ime;
  prezime;
  tezina;
  visina;
  bojaOciju;
  pol;
  pozdravi() {
    if (this["pol"] === "M") {
      console.log(
        `Pozdrav, ja sam ${this["ime"]} ${this["prezime"]}, visok sam ${this["visina"]}`
      );
    } else if (this["pol"] === "Z") {
      console.log(
        `Pozdrav, ja sam ${this["ime"]} ${this["prezime"]}, visoka sam ${this["visina"]}`
      );
    }
  }
  constructor(ime, prezime, pol) {
    if (
      typeof ime === "undefined" ||
      typeof prezime === "undefined" ||
      typeof pol === "undefined"
    ) {
      throw new Error("Morate uneti sve osobine!");
    }
    this.ime = ime;
    this.prezime = prezime;
    this.pol = pol;
  }
}

let petar = new Osoba("Petar", "Peric", "M");
petar.tezina = 102;
petar.visina = 190;
petar.bojaOciju = "braon";

let martina = new Osoba("Martina", "Stojkovic", "Z");
martina.tezina = 56;
martina.visina = 168;
martina.bojaOciju = "zelene";

petar.pozdravi();
martina.pozdravi();
