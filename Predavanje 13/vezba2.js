$(document).ready(function () {
  $("#saberi").click(function () {
    //val=value=vrednost
    var broj1 = parseInt($("#broj1").val());
    var broj2 = parseInt($("#broj2").val());
    // broj1 = parseInt(broj1);
    // broj2 = parseInt(broj2);
    $("#rezultat").text(broj1 + broj2);
    console.log(broj1 + broj2);
  });
  $("#pomnozi").click(function () {
    //val=value=vrednost
    var broj1 = parseInt($("#broj1").val());
    var broj2 = parseInt($("#broj2").val());
    // broj1 = parseInt(broj1);
    // broj2 = parseInt(broj2);
    if (broj1 !== 0 && broj2 !== 0) {
      $("#rezultat").text(broj1 * broj2);
      console.log(broj1 * broj2);
    } else {
      $("#rezultat").text("Ne moze se mnoziti nulom!");
    }
  });
  $("#podeli").click(function () {
    //val=value=vrednost
    var broj1 = parseInt($("#broj1").val());
    var broj2 = parseInt($("#broj2").val());
    // broj1 = parseInt(broj1);
    // broj2 = parseInt(broj2);
    $("#rezultat").text(broj1 / broj2);
    console.log(broj1 / broj2);

    if (broj1 != 0 && broj2 != 0) {
      $("#rezultat").text(broj1 / broj2);
      console.log(broj1 / broj2);
    } else {
      $("#rezultat").text("Ne moze se deliti nulom!");
    }
  });
  $("#oduzmi").click(function () {
    //val=value=vrednost
    var broj1 = parseInt($("#broj1").val());
    var broj2 = parseInt($("#broj2").val());
    // broj1 = parseInt(broj1);
    // broj2 = parseInt(broj2);
    $("#rezultat").text(broj1 - broj2);
    console.log(broj1 - broj2);
  });
});
