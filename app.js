$(document).ready(function () {
  $("a").hover(function () {
    let bgColor = $(this).attr("color");
    $("body").css("background", bgColor);
  });
});
