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

  // legibility Warning
  const warningNotLegibleIcon = "<i class='fas fa-exclamation-triangle'>";
  const warningNotLegibleText = "NOT LEGIBLE";
  const warningLegibleIcon = "<i class='far fa-check-circle'>";
  const warningLegibleText = "LEGIBLE";

  // Colors Indigo
  const colorNameIndogo = "Indigo";
  const indigoP = "#49599b";
  const indigoL = "#7986cc";
  const indigoD = "#14306c";

  // Colors Amber
  const colorNameAmber = "Amber";
  const amberP = "#ff8f00";
  const amberL = "#ffc046";
  const amberD = "#c56000";

  // Colors Orange
  const colorNameOrange = "Orange";
  const orangeP = "#ef6c00";
  const orangeL = "#ff9d3f";
  const orangeD = "#b53d00";

  // Colors Green
  const colorNameGreen = "Green";
  const greenP = "#2e7d32";
  const greenL = "#60ad5e";
  const greenD = "#005005";

  // Colors Blue Grey
  const colorNameBlueGrey = "Blue Grey";
  const blueGreyP = "#37474f";
  const blueGreyL = "#62727b";
  const blueGreyD = "#102027";

  if (colorID === "colorReset") {
    // reset bg
    tableP.style.background = "#FFFFFF";
    tableL.style.background = "#FFFFFF";
    tableD.style.background = "#FFFFFF";
    // reset color
    tablePheader.style.color = "#000000";
    tableLheader.style.color = "#000000";
    tableDheader.style.color = "#000000";
    // reset color name
    document.querySelector("#color-code-p-text").innerHTML = "";
    document.querySelector("#color-code-l-text").innerHTML = "";
    document.querySelector("#color-code-d-text").innerHTML = "";
    // reset color code
    document.querySelector("#copy-to-clipboard-p").innerHTML = "";
    document.querySelector("#copy-to-clipboard-l").innerHTML = "";
    document.querySelector("#copy-to-clipboard-d").innerHTML = "";
    // reset legibility Warning
    document.querySelector("#color-code-legibility-w-p").innerHTML = "";
    document.querySelector("#color-code-legibility-b-p").innerHTML = "";
    document.querySelector("#color-code-legibility-w-l").innerHTML = "";
    document.querySelector("#color-code-legibility-b-l").innerHTML = "";
    document.querySelector("#color-code-legibility-w-d").innerHTML = "";
    document.querySelector("#color-code-legibility-b-d").innerHTML = "";
  } else if (colorID === "colorIndigo") {
    // print color name
    document.querySelector("#color-code-p-text").innerHTML = colorNameIndogo;
    document.querySelector("#color-code-l-text").innerHTML = colorNameIndogo;
    document.querySelector("#color-code-d-text").innerHTML = colorNameIndogo;
    // Copy Text to Clipboard
    document.querySelector("#copy-to-clipboard-p").innerHTML =
      indigoP + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-l").innerHTML =
      indigoL + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-d").innerHTML =
      indigoD + " " + coptyTextToClipboard;
    // legibility Warning
    document.querySelector("#color-code-legibility-w-p").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-p").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    document.querySelector("#color-code-legibility-w-l").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-l").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-w-d").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-d").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    // TH Text Color
    tablePheader.style.color = "#FFFFFF";
    tableLheader.style.color = "#FFFFFF";
    tableDheader.style.color = "#FFFFFF";
    // set bg color for Tables
    tableP.style.background = indigoP;
    tableL.style.background = indigoL;
    tableD.style.background = indigoD;
  } else if (colorID === "colorAmber") {
    // print color name
    document.querySelector("#color-code-p-text").innerHTML = colorNameAmber;
    document.querySelector("#color-code-l-text").innerHTML = colorNameAmber;
    document.querySelector("#color-code-d-text").innerHTML = colorNameAmber;
    // Copy Text to Clipboard
    document.querySelector("#copy-to-clipboard-p").innerHTML =
      amberP + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-l").innerHTML =
      amberL + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-d").innerHTML =
      amberD + " " + coptyTextToClipboard;
    // legibility Warning
    document.querySelector("#color-code-legibility-w-p").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    document.querySelector("#color-code-legibility-b-p").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-w-l").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    document.querySelector("#color-code-legibility-b-l").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-w-d").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-d").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    // TH Text Color
    tablePheader.style.color = "#FFFFFF";
    tableLheader.style.color = "#FFFFFF";
    tableDheader.style.color = "#FFFFFF";
    // set bg color for Tables
    tableP.style.background = amberP;
    tableL.style.background = amberL;
    tableD.style.background = amberD;
  } else if (colorID === "colorOrange") {
    // print color name
    document.querySelector("#color-code-p-text").innerHTML = colorNameOrange;
    document.querySelector("#color-code-l-text").innerHTML = colorNameOrange;
    document.querySelector("#color-code-d-text").innerHTML = colorNameOrange;
    // Copy Text to Clipboard
    document.querySelector("#copy-to-clipboard-p").innerHTML =
      orangeP + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-l").innerHTML =
      orangeL + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-d").innerHTML =
      orangeD + " " + coptyTextToClipboard;
    // legibility Warning
    document.querySelector("#color-code-legibility-w-p").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    document.querySelector("#color-code-legibility-b-p").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-w-l").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    document.querySelector("#color-code-legibility-b-l").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-w-d").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-d").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    // TH Text Color
    tablePheader.style.color = "#FFFFFF";
    tableLheader.style.color = "#FFFFFF";
    tableDheader.style.color = "#FFFFFF";
    // set bg color for Tables
    tableP.style.background = orangeP;
    tableL.style.background = orangeL;
    tableD.style.background = orangeD;
  } else if (colorID === "colorGreen") {
    // print color name
    document.querySelector("#color-code-p-text").innerHTML = colorNameGreen;
    document.querySelector("#color-code-l-text").innerHTML = colorNameGreen;
    document.querySelector("#color-code-d-text").innerHTML = colorNameGreen;
    // Copy Text to Clipboard
    document.querySelector("#copy-to-clipboard-p").innerHTML =
      greenP + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-l").innerHTML =
      greenL + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-d").innerHTML =
      greenD + " " + coptyTextToClipboard;
    // legibility Warning
    document.querySelector("#color-code-legibility-w-p").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-p").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    document.querySelector("#color-code-legibility-w-l").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-l").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-w-d").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-d").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    // TH Text Color
    tablePheader.style.color = "#FFFFFF";
    tableLheader.style.color = "#FFFFFF";
    tableDheader.style.color = "#FFFFFF";
    // set bg color for Tables
    tableP.style.background = greenP;
    tableL.style.background = greenL;
    tableD.style.background = greenD;
  } else if (colorID === "colorBlueGrey") {
    // print color name
    document.querySelector("#color-code-p-text").innerHTML = colorNameBlueGrey;
    document.querySelector("#color-code-l-text").innerHTML = colorNameBlueGrey;
    document.querySelector("#color-code-d-text").innerHTML = colorNameBlueGrey;
    // Copy Text to Clipboard
    document.querySelector("#copy-to-clipboard-p").innerHTML =
      blueGreyP + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-l").innerHTML =
      blueGreyL + " " + coptyTextToClipboard;
    document.querySelector("#copy-to-clipboard-d").innerHTML =
      blueGreyD + " " + coptyTextToClipboard;
    // legibility Warning
    document.querySelector("#color-code-legibility-w-p").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-p").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    document.querySelector("#color-code-legibility-w-l").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-l").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    document.querySelector("#color-code-legibility-w-d").innerHTML =
      warningLegibleText + " " + warningLegibleIcon;
    document.querySelector("#color-code-legibility-b-d").innerHTML =
      warningNotLegibleText + " " + warningNotLegibleIcon;
    // TH Text Color
    tablePheader.style.color = "#FFFFFF";
    tableLheader.style.color = "#FFFFFF";
    tableDheader.style.color = "#FFFFFF";
    // set bg color for Tables
    tableP.style.background = blueGreyP;
    tableL.style.background = blueGreyL;
    tableD.style.background = blueGreyD;
  }
}

function copyToClipboard(ColorID2) {
  let copyColorCode = document.getElementById(ColorID2).innerText;
  let colorCode = document.createElement("textarea");
  colorCode.value = copyColorCode;
  document.body.appendChild(colorCode);
  colorCode.select();
  document.execCommand("copy");
  document.body.removeChild(colorCode);
}
