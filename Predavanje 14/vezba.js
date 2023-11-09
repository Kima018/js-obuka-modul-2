$(document).ready(function () {
  //-------------------------------------
  $("#width").on("input", function () {
    var sirina = $(this).val();
    $(".action-div").css({ width: sirina });
  });
  //
  $("#height").on("input", function () {
    var visina = $(this).val();
    $(".action-div").css({ height: visina });
  });
  //
  $("#color").on("input", function () {
    var boja = $(this).val();
    $(".action-div").css({ backgroundColor: boja });
  });
  //
  $("#rangeValue").on("input", function () {
    var border = $(this).val();
    $(".action-div").css({ borderRadius: border + "%" });
  });
  //
});

// $("#save").click(function () {
//   var sirina = $("#width").val();
//   var visina = $("#height").val();
//   var pocetnaBoja = $("#color").val();
//   var promenaBordera = $("#rangeValue").val();

//   $(".action-div").css({
//     width: sirina,
//     height: visina,
//     backgroundColor: pocetnaBoja,
//     borderRadius: promenaBordera,
//   });
// });
