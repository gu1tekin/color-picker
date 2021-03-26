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

// adding dynamic attribute like colorCode...
function showColorCode(colorID) {
  // Tables
  const tableP = document.querySelector("#table-p");
  const tableL = document.querySelector("#table-l");
  const tableD = document.querySelector("#table-d");

  // th Headers
  const tablePheader = document.querySelector("#table-p-header");
  const tableLheader = document.querySelector("#table-l-header");
  const tableDheader = document.querySelector("#table-d-header");

  // Copy Text to Clipboard
  const coptyTextToClipboard = "<i class='far fa-copy'>";

  // Colors Indigo
  const colorCodeIndogo = "Indigo";
  const indigoP = "#49599b";
  const indigoL = "#7986cc";
  const indigoD = "#14306c";

  // Colors Amber
  const amberP = "#ff8f00";
  const amberL = "#ffc046";
  const amberD = "#c56000";

  // Colors Orange
  const orangeP = "#ef6c00";
  const orangeL = "#ff9d3f";
  const orangeD = "#b53d00";

  // Colors Green
  const greenP = "#2e7d32";
  const greenL = "#60ad5e";
  const greenD = "#005005";

  // Colors Blue Grey
  const blueGreyP = "#37474f";
  const blueGreyL = "#62727b";
  const blueGreyD = "#102027";

  if (colorID === "colorReset") {
    // clear bg
    tableP.style.background = "#FFFFFF";
    tableL.style.background = "#FFFFFF";
    tableD.style.background = "#FFFFFF";
    // clear color
    tablePheader.style.color = "#000000";
    tableLheader.style.color = "#000000";
    tableDheader.style.color = "#000000";
    // remove color name
    document.querySelector("#color-code-p-text").innerHTML = "";
    document.querySelector("#color-code-l-text").innerHTML = "";
    document.querySelector("#color-code-d-text").innerHTML = "";
    //remove color code
    document.querySelector("#copy-to-clipboard-p").innerHTML = "";
    document.querySelector("#copy-to-clipboard-l").innerHTML = "";
    document.querySelector("#copy-to-clipboard-d").innerHTML = "";
  } else if (colorID === "colorIndigo") {
    // print color name
    document.querySelector("#color-code-p-text").innerHTML = colorCodeIndogo;
    document.querySelector("#color-code-l-text").innerHTML = colorCodeIndogo;
    document.querySelector("#color-code-d-text").innerHTML = colorCodeIndogo;

    // Copy Text to Clipboard
    document.querySelector("#copy-to-clipboard-p").innerHTML =
      indigoP + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-l").innerHTML =
      indigoL + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-d").innerHTML =
      indigoD + " " + coptyTextToClipboard;

    // TH Text Color
    tablePheader.style.color = "#FFFFFF";
    tableLheader.style.color = "#FFFFFF";
    tableDheader.style.color = "#FFFFFF";

    // set bg color for Tables
    tableP.style.background = indigoP;
    tableL.style.background = indigoL;
    tableD.style.background = indigoD;
  }
}
