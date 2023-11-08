$(document).ready(function () {
  $(".read-less-btn").click(function () {
    var trenutniText = $(this).text();
    if (trenutniText == "Hide text") {
      $(this).text("Show text");
    } else {
      $(this).text("Hide text");
    }
    console.log(trenutniText);
    $(".readLess").toggle();
  });
});
