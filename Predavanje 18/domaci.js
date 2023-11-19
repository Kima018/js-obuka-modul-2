var vozila = [];
class Vozilo {
  vrsta;
  boja;
  brzina;
  tezina;

  static VRSTE_VOZILA = ["automobil", "letelica", "plovilo"];
  static BOJE_VOZILA = ["plava", "crvena", "zelena", "pink", "crna"];

  constructor(vrsta, boja, brzina, tezina) {
    if (!Vozilo.VRSTE_VOZILA.includes(vrsta) || typeof vrsta === "undefined") {
      throw new Error("Niste uneli ispravnu vrstu vozila");
    } else {
      this.vrsta = vrsta;
    }

    // if (!Vozilo.BOJE_VOZILA.includes(boja)) {
    //   throw new Error("Morata odabrati boju vozila");
    // } else {
    //   this.boja = boja;
    // }
    this.boja = boja;

    // if (typeof brzina === "undefined") {
    //   throw new Error("Morate uneti brzinu vozila!");
    // } else {
    //   this.brzina = brzina;
    // }
    this.brzina = brzina;

    // if (typeof tezina === "undefined") {
    //   throw new Error("Morate uneti tezinu vozila!");
    // } else {
    //   this.tezina = tezina;
    // }
    this.tezina = tezina;
  }

  //---------------------------------------------
}

class Automobil extends Vozilo {
  marka;
  model;
  brojVrata;
  gorivo;

  static VRSTE_GORIVA = ["benzin", "dizel", "metan"];
  static BROJ_VRATA = ["3", "5"];
  static MARKE_VOZILA = ["audi", "BMW", "mercedes"];
  static AUDI_MODELI = ["A4", "A6"];
  static BMW_MODELI = ["M5", "M3", "X6"];
  static MERCEDES_MODELI = ["s-class", "sls-amg", "g-class"];

  constructor(vrsta, marka, model, brojVrata, gorivo, boja, brzina, tezina) {
    super(vrsta, boja, brzina, tezina);

    if (!Automobil.MARKE_VOZILA.includes(marka)) {
      throw new Error("Morate izabrati marku automobila");
    }
    this.marka = marka;

    if (marka.includes("audi") && !Automobil.AUDI_MODELI.includes(model)) {
      throw new Error("Ako ste izabrali marku Audi, model mora biti A4 ili A6");
    } else {
      this.model = model;
    }

    if (marka.includes("bmw") && !Automobil.BMW_MODELI.includes(model)) {
      throw new Error(
        "Ako ste izabrali marku BMW, model mora biti M3, M5 ili X6"
      );
    } else {
      this.model = model;
    }
    if (
      marka.includes("mercedes") &&
      !Automobil.MERCEDES_MODELI.includes(model)
    ) {
      throw new Error(
        "Ako ste izabrali marku mercedes, model mora biti s-class, sls-amg ili g-class"
      );
    } else {
      this.model = model;
    }

    if (!Automobil.BROJ_VRATA.includes(brojVrata)) {
      throw new Error("Morate izabrati auto sa 3 ili 5 vrata!");
    } else {
      this.brojVrata = brojVrata;
    }

    if (!Automobil.VRSTE_GORIVA.includes(gorivo)) {
      throw new Error(`Auto moze mora biti na ${Automobil.VRSTE_GORIVA} `);
    } else {
      this.gorivo = gorivo;
    }
  }
}
//---------------------------------------------

var selectVrstaVozila = document.getElementById("vrsteVozila");
var selectVrata = document.getElementById("brojVrata");
var selectGorivo = document.getElementById("vrstaGoriva");
var selectMarka = document.getElementById("marke");
var selectModel = document.getElementById("modeli");
var selectBoje = document.getElementById("boje");
var inputBrzina = document.getElementById("brzinaVozila");
var inputTezina = document.getElementById("tezinaVozila");

function addModel(lista, selectModel) {
  var modeliSelect = document.getElementById("modeli");
  modeliSelect.innerHTML = `<option value="" disabled selected hidden>Izaberi model</option>`;
  lista.forEach(function (model) {
    var option = document.createElement("option");
    option.text = model;
    option.value = model;
    selectModel.append(option);
  });
}

Vozilo.VRSTE_VOZILA.forEach(function (vrsta) {
  var option = document.createElement("option");
  option.text = vrsta;
  option.value = vrsta;
  selectVrstaVozila.append(option);
});

Automobil.MARKE_VOZILA.forEach(function (vrsta) {
  var option = document.createElement("option");
  option.text = vrsta;
  option.value = vrsta;
  selectMarka.append(option);
});

selectMarka.addEventListener("change", function () {
  switch (selectMarka.value.toLowerCase()) {
    case "audi":
      addModel(Automobil.AUDI_MODELI, selectModel);
      break;
    case "bmw":
      addModel(Automobil.BMW_MODELI, selectModel);
      break;
    case "mercedes":
      addModel(Automobil.MERCEDES_MODELI, selectModel);
      break;
  }
});

Automobil.BROJ_VRATA.forEach(function (vrsta) {
  var option = document.createElement("option");
  option.text = vrsta;
  option.value = vrsta;
  selectVrata.append(option);
});

Automobil.VRSTE_GORIVA.forEach(function (vrsta) {
  var option = document.createElement("option");
  option.text = vrsta;
  option.value = vrsta;
  selectGorivo.append(option);
});

Vozilo.BOJE_VOZILA.forEach(function (vrsta) {
  var option = document.createElement("option");
  option.text = vrsta;
  option.value = vrsta;
  selectBoje.append(option);
});

document.getElementById("napraviVozilo").addEventListener("click", function () {
  if (selectVrstaVozila.value.toLowerCase() == "automobil") {
    var auto = new Automobil(
      selectVrstaVozila.value,
      selectMarka.value,
      selectModel.value,
      selectVrata.value,
      selectGorivo.value,
      selectBoje.value,
      inputBrzina.value,
      inputTezina.value
    );

    var vozilo = new Vozilo(
      selectVrstaVozila.value,
      selectBoje.value,
      inputBrzina.value,
      inputTezina.value
    );

    vozilo.marka = auto.marka;
    vozilo.model = auto.model;
    vozilo.brojVrata = auto.brojVrata;
    vozilo.gorivo = auto.gorivo;

    vozila.push(vozilo);
    console.log(vozila);
  }
});

// var noviAuto = new Automobil(
//   "automobil",
//   "audi",
//   "A4",
//   "3",
//   "benzin",
//   "boja",
//   "brzina",
//   "tezina"
// );
// console.log(noviAuto);

// 1 "automobil",
// 2 "audi",
// 3 "A4",
// 4 "3",
// 5 "benzin",
// 6 "boja",
// 7 "brzina",
// 8 "tezina"
