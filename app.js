$(document).ready(function () {
  $("div").click(function () {
    let bgColor = $(this).attr("color");
    $("table").css("background", bgColor);
  });
});

// hide #color-accessibility && #reset-color
// function hiddeColoAccessibility() {
//   document.querySelector("#color-accessibility").style.visibility = "hidden";
// }

// show #color-accessibility && #reset-color
// function showColoAccessibility() {
//   document.querySelector("#color-accessibility").style.visibility = "visible";
//   document.querySelector("#reset-color").style.visibility = "visible";
// }
