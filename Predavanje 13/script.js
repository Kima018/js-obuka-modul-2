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

    $(this).css({
      backgroundColor: "red",
      color: "white",
    });
  });
  $("#hideShowParagraph").click(function () {
    $(this).text("Hide Paragraph");
    // $("#paragraf").toggleClass("displayNone");
    $("#paragraf").slidetoggle();
  });
});
