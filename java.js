let dollar = false;
function wechsel() {
  let wert1 = document.getElementById("preis1").innerHTML;
  let wert2 = document.getElementById("preis2").innerHTML;
  let wert3 = document.getElementById("preis3").innerHTML;
  let wert4 = document.getElementById("preis4").innerHTML;
  let wert5 = document.getElementById("preis5").innerHTML;
  let wert6 = document.getElementById("preis6").innerHTML;
  let wert7 = document.getElementById("preis7").innerHTML;
  let wert8 = document.getElementById("preis8").innerHTML;
  let wert9 = document.getElementById("preis9").innerHTML;

  if (dollar === false) {
    document.getElementById("wechselBtn").innerHTML = "In € anzeigen";

    document.getElementById("preis1").innerHTML = (
      Number(wert1) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung1").innerHTML = "$";
    document.getElementById("preis2").innerHTML = (
      Number(wert2) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung2").innerHTML = "$";
    document.getElementById("preis3").innerHTML = (
      Number(wert3) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung3").innerHTML = "$";
    document.getElementById("preis4").innerHTML = (
      Number(wert4) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung4").innerHTML = "$";
    document.getElementById("preis5").innerHTML = (
      Number(wert5) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung5").innerHTML = "$";
    document.getElementById("preis6").innerHTML = (
      Number(wert6) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung6").innerHTML = "$";
    document.getElementById("preis7").innerHTML = (
      Number(wert7) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung7").innerHTML = "$";
    document.getElementById("preis8").innerHTML = (
      Number(wert8) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung8").innerHTML = "$";
    document.getElementById("preis9").innerHTML = (
      Number(wert9) * 1.14
    ).toFixed(2);
    document.getElementById("waehrung9").innerHTML = "$";
  } else {
    document.getElementById("wechselBtn").innerHTML = "In $ anzeigen";

    document.getElementById("preis1").innerHTML = (
      Number(wert1) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung1").innerHTML = "€";
    document.getElementById("preis2").innerHTML = (
      Number(wert2) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung2").innerHTML = "€";
    document.getElementById("preis3").innerHTML = (
      Number(wert3) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung3").innerHTML = "€";
    document.getElementById("preis4").innerHTML = (
      Number(wert4) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung4").innerHTML = "€";
    document.getElementById("preis5").innerHTML = (
      Number(wert5) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung5").innerHTML = "€";
    document.getElementById("preis6").innerHTML = (
      Number(wert6) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung6").innerHTML = "€";
    document.getElementById("preis7").innerHTML = (
      Number(wert7) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung7").innerHTML = "€";
    document.getElementById("preis8").innerHTML = (
      Number(wert8) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung8").innerHTML = "€";
    document.getElementById("preis9").innerHTML = (
      Number(wert9) / 1.14
    ).toFixed(2);
    document.getElementById("waehrung9").innerHTML = "€";
  }
  dollar = !dollar;
}
 // Warenkorb

function kaufen1() {
    document.getElementById("gesamtbetrag").innerHTML =
      Number(document.getElementById("gesamtbetrag").innerHTML) + 
      Number(document.getElementById("preis1").innerHTML )


    document.getElementById("list").innerHTML =
        (document.getElementById("list").innerHTML) + 
        "<li> Samsung Galaxy Book</li>"
      

}

  function kaufen2() {
    document.getElementById("gesamtbetrag").innerHTML =
      Number(document.getElementById("gesamtbetrag").innerHTML) + 
      Number(document.getElementById("preis2").innerHTML )


  document.getElementById("list").innerHTML =
      (document.getElementById("list").innerHTML) + 
      "<li>Acer Chromebook 14</li>"
      
}

function kaufen3() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis3").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>MSI GP 14 Notebook</li>"
    
}

function kaufen4() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis4").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>ASUS Vivobook</li>"
    
}

function kaufen5() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis5").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>Samsung Galaxy A3</li>"
    
}
function kaufen6() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis6").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>Rekam X4</li>"
    
}

function kaufen7() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis7").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>OneOdio Kopfhörer</li>"
    
}

function kaufen8() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis8").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>Sony MDR CD 580</li>"
    
}

