$(document).ready(function () {
  $("div").click(function () {
    let bgColor = $(this).attr("color");
    $("body").css("background", bgColor);
  });
});
