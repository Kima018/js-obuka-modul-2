var vozila = [];
class Vozilo {
  vrsta;

  static VRSTE_VOZILA = ["automobil", "letelica", "plovilo"];

  constructor(vrsta, boja) {
    if (!Vozilo.VRSTE_VOZILA.includes(vrsta) || typeof vrsta === "undefined") {
      throw new Error("Niste uneli ispravnu vrstu vozila");
    } else {
      this.vrsta = vrsta;
    }
  }

  //---------------------------------------------
}

class Automobil extends Vozilo {
  marka;
  model;
  brojVrata;
  gorivo;
  boja;

  static VRSTE_GORIVA = ["benzin", "dizel", "metan"];
  static BROJ_VRATA = ["3", "5"];
  static MARKE_VOZILA = ["audi", "BMW", "mercedes"];
  static AUDI_MODELI = ["A4", "A6"];
  static BMW_MODELI = ["M5", "M3", "X6"];
  static MERCEDES_MODELI = ["s-class", "sls-amg", "g-class"];
  static BOJE_VOZILA = ["plava", "crvena", "zelena", "pink", "crna"];

  constructor(vrsta, marka, model, brojVrata, gorivo, boja) {
    super(vrsta);

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
    if (!Automobil.BOJE_VOZILA.includes(boja)) {
      throw new Error("Morata odabrati boju vozila");
    } else {
      this.boja = boja;
    }
  }
}

//---------------------------------------------

var selectVozila = document.getElementById("vrsteVozila");
var selectVrata = document.getElementById("brojVrata");
var selectGorivo = document.getElementById("vrstaGoriva");
var selectMarka = document.getElementById("marke");
var selectModel = document.getElementById("modeli");
var selectBoje = document.getElementById("boje");

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
  selectVozila.append(option);
});

Automobil.MARKE_VOZILA.forEach(function (vrsta) {
  var option = document.createElement("option");
  option.text = vrsta;
  option.value = vrsta;
  selectMarka.append(option);
});

selectMarka.addEventListener("change", function () {
  if (selectMarka.value === "audi") {
    addModel(Automobil.AUDI_MODELI, selectModel);
  }
  if (selectMarka.value === "BMW") {
    addModel(Automobil.BMW_MODELI, selectModel);
  }
  if (selectMarka.value === "mercedes") {
    addModel(Automobil.MERCEDES_MODELI, selectModel);
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

Automobil.BOJE_VOZILA.forEach(function (vrsta) {
  var option = document.createElement("option");
  option.text = vrsta;
  option.value = vrsta;
  selectBoje.append(option);
});

document.getElementById("napraviVozilo").addEventListener("click", function () {
  vozila.push(
    new Automobil(
      selectVozila.value,
      selectMarka.value,
      selectModel.value,
      selectVrata.value,
      selectGorivo.value,
      selectBoje.value
    )
  );
  console.log(vozila);
  console.log(selectVrata.value);
});

// var mojAuto = new Automobil(
//   "automobil",
//   "mercedes",
//   "sls-amg",
//   5,
//   "benzin",
//   "crvena"
// );
// console.log(mojAuto);
