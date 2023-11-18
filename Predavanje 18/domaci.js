class Vozilo {
  boja;
  vrsta;
  constructor(vrsta, boja) {
    if (!["automobil", "letelica", "plovilo"].includes(vrsta)) {
      throw new Error("Niste uneli ispravnu vrstu vozila");
    } else if (typeof boja === "undefined") {
      throw new Error("Niste uneli boju vozila!");
    } else {
      this.vrsta = vrsta;
      this.boja = boja;
    }
  }

  //---------------------------------------------
}

class Automobil extends Vozilo {
  marka;
  model;
  brojVrata;
  gorivo;

  constructor(vrsta, boja, marka, model, brojVrata, gorivo) {
    super(vrsta, boja);
    this.marka = marka;
    this.model = model;
    this.brojVrata = brojVrata;
    this.gorivo = gorivo;

    if (brojVrata != 3 && brojVrata != 5) {
      throw new Error("Morate izabrati auto sa 3 ili 5 vrata!");
    } else if (!["benzin", "dizel", "metan"].includes(gorivo)) {
      throw new Error("Auto moze mora biti na benzin, dizel ili metan!");
    }

    if (marka.includes("audi") && !["A4", "A6"].includes(model)) {
      throw new Error("Ako ste izabrali marku Audi, model mora biti A4 ili A6");
    } else if (marka.includes("bmw") && !["M5", "M3", "X6"].includes(model)) {
      throw new Error(
        "Ako ste izabrali marku BMW, model mora biti M3, M5 ili X6"
      );
    } else if (
      marka.includes("mercedes") &&
      !["s-class", "sls-amg", "g-class"].includes(model)
    ) {
      throw new Error(
        "Ako ste izabrali marku mercedes, model mora biti s-class, sls-amg ili g-class"
      );
    }
  }
}

//---------------------------------------------

var mojAuto = new Automobil(
  "automobil",
  "crvena",
  "mercedes",
  "sls-amg",
  "5",
  "benzin"
);

console.log(mojAuto);
