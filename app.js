$(document).ready(function () {
  $("div").hover(function () {
    let bgColor = $(this).attr("color");
    $("body").css("background", bgColor);
  });
});
