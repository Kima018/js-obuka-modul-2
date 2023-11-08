// $(document).ready(function () {});
//document - element, document, window - $("#nekiId") - document.getElementById
//ready - dogadjaj, event - ready, click, mosueIn, mouseOut, hover....

$(document).ready(function () {
  //document.getElementById('').addEventListener('click' , function () {}
  $("#clickMeButton").click(function () {
    console.log("test123");
  });
  $(".anchorClick").click(function () {
    // $(document).ready(function () {});
    //document = this
    //ready  = css
    //function (){}

    $(this).animate(
      {
        backgroundColor: "red",
        color: "white",
      },
      800
    );
  });
  $("#hideShowParagraph").click(function () {
    // $("#paragraf").toggleClass("displayNone");
    $("#paragraf").slideToggle();
  });
});
