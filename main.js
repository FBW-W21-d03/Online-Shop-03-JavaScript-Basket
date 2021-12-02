function Kaufen() {
  document.getElementById("liste").innerHTML =
    document.getElementById("liste").innerHTML +
    "<li>" +
    "Iphone - 750 €" +
    "</li>";

  document.getElementById("kawan").innerHTML =
    Number(document.getElementById("kawan").innerHTML) +
    Number(document.getElementById("preis").innerHTML);
}

function ipad() {
  document.getElementById("liste").innerHTML =
    document.getElementById("liste").innerHTML +
    "<li>" +
    "IPad - 550 €" +
    "</li>";

  document.getElementById("kawan").innerHTML =
    Number(document.getElementById("kawan").innerHTML) +
    Number(document.getElementById("preis-1").innerHTML);
}

function notbook() {
  document.getElementById("liste").innerHTML =
    document.getElementById("liste").innerHTML +
    "<li>" +
    "Mcbook - 1950 €" +
    "</li>";

  document.getElementById("kawan").innerHTML =
    Number(document.getElementById("kawan").innerHTML) +
    Number(document.getElementById("preis-2").innerHTML);
}

function laptop() {
  document.getElementById("liste").innerHTML =
    document.getElementById("liste").innerHTML +
    "<li>" +
    "Laptop - 1550 €" +
    "</li>";

  document.getElementById("kawan").innerHTML =
    Number(document.getElementById("kawan").innerHTML) +
    Number(document.getElementById("preis-3").innerHTML);
}
