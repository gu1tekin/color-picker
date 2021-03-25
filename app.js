// $(document).ready(function () {
//   $("div").click(function () {
//     let bgColor = $(this).attr("color");
//     $("table").css("background", bgColor);
//   });
// });

// hide #color-accessibility && #reset-color
// function hiddeColoAccessibility() {
//   document.querySelector("#color-accessibility").style.visibility = "hidden";
// }

// show #color-accessibility && #reset-color
// function showColoAccessibility() {
//   document.querySelector("#color-accessibility").style.visibility = "visible";
//   document.querySelector("#reset-color").style.visibility = "visible";
// }

// adding dynamic attributes like colorCode...
function showColorCode(colorID, Gultkein) {
  if (colorID === "colorIndigo") {
    document.querySelector("#color-code").innerHTML =
      "#49599b " + " <i class='far fa-copy'>";
    document.querySelector("table").style.background = "#49599b";
  } else if (colorID === "colorAmber") {
    document.querySelector("#color-code").innerHTML =
      "#ffa726 " + " <i class='far fa-copy'>";
    document.querySelector("table").style.background = "#ffa726";
  } else if (colorID === "colorOrange") {
    document.querySelector("#color-code").innerHTML =
      "#e65100 " + " <i class='far fa-copy'>";
    document.querySelector("table").style.background = "#e65100";
  } else if (colorID === "colorGreen") {
    document.querySelector("#color-code").innerHTML =
      "#2e7d32 " + " <i class='far fa-copy'>";
    document.querySelector("table").style.background = "#2e7d32";
  } else if (colorID === "colorBlueGrey") {
    document.querySelector("#color-code").innerHTML =
      "#263238 " + " <i class='far fa-copy'>";
    document.querySelector("table").style.background = "#263238";
  } else if (colorID === "colorReset") {
    document.querySelector("#color-code").innerHTML =
      "#FFFFFF " + " <i class='far fa-copy'>";
    document.querySelector("table").style.background = "#FFFFFF";
  }
}
