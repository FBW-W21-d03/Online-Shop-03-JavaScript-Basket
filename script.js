let currency = "euro"; // merkt sich aktuelle Währung
const dollarKurs = 1.13; // Kurs nur hier ändern

function switchCurrency() {
  // von den nächsten zwei Zeilen nicht verwirren lassen
  // hatten wir noch nicht.
  let preise = document.getElementsByClassName("price");
  let preisText = preise[0].innerHTML;
  let preisZahl = zahlVonText(preisText);

  if (currency == "euro") {
    // aktive Währung wechseln
    currency = "dollar";
    // Button umbenennen
    document.getElementById("btnswitch").innerHTML =
      "Preise in Euro anzeigen";
    // 1. Preis ändern
    preise[0].innerHTML = "$ " + (preisZahl * dollarKurs).toFixed(2);
    // nur else würde reichen, benutze else if () für Klarheit
  } else if (currency == "dollar") {
    // aktive Währung wechseln
    currency = "euro";
    // Button umbenennen
    document.getElementById("btnswitch").innerHTML =
      "Preise in Dollar anzeigen";
    // 1. Preis ändern
    preise[0].innerHTML = (preisZahl / dollarKurs).toFixed(2) + " €";
  }
}

// Funktion die Preis (String) in eine Zahl umwandelt und
// zurück gibt (return)
function zahlVonText(text) {
  text = text.replace(",00", ""); // für Start
  text = text.replace(" €", ""); // für Umwandlung € -> $
  text = text.replace("$ ", ""); // für Umwandlung $ -> €
  return text;
}


 
function macbookkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Macbook Pro - 1299.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Macbook Pro - 1299.00 €" + "</li>";

          // Gesamtsumme
  document.getElementById("zusammenrechnen").innerHTML =
              // gesamtbetrag + neues Produkt
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("macbookpreis").innerHTML);
}

function kopfhörerkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Kopfhörer - 399.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Kopfhörer - 399.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("kopfhörerpreis").innerHTML);
}

function macairkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Macbook Air Pro - 1399.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Macbook Air Pro - 1399.00 €" + "</li>";   
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("macairpreis").innerHTML);
}

function tabletkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Sony Tablet - 499.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Sony Tablet - 499.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("tabletpreis").innerHTML);
}

function headsetkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Sony Bluetooth Kopfhörer - 299.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Sony Bluetooth Kopfhörer - 299.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("headsetpreis").innerHTML);
}

function asuskaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Asus Gaming Laptop - 799.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Asus Gaming Laptop - 799.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("asuspreis").innerHTML);
}

function galaxykaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Samsung Galaxy - 399.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Sony Tablet - 399.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("galaxypreis").innerHTML);
}

/*function laptopkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Asus Laptop - 599.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Aus Laptop - 599.00 €" + "</li>";
  document.getElementById("zusammenrechnung").innerHTML =
  Number(document.getElementById("zusammenrechnung").innerHTML)
  +
  Number(document.getElementById("laptoppreis").innerHTML);
} */
 
function laptopkaufen() {
  document.getElementById("tabelle").innerHTML =
  document.getElementById("tabelle").innerHTML + "<td> <li>" + "Asus Laptop - 599.00 €" + "</li> </td> <br>";
  document.getElementById("zusammenrechnung").innerHTML =
  Number(document.getElementById("zusammenrechnung").innerHTML)
  +
  Number(document.getElementById("laptoppreis").innerHTML);
}


/*function camkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Rekam Digitalkamera - 299.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Rekam Digitalkamera - 299.00 €" + "</li>";
  document.getElementById("gesamtbetrag").innerHTML =
  Number(document.getElementById("gesamtbetrag").innerHTML)
  +
  Number(document.getElementById("campreis").innerHTML); 
} */



function camkaufen() {
  document.getElementById("tabelle").innerHTML =
  document.getElementById("tabelle").innerHTML + "<td> <li>" + "Rekam Digitalkamera - 299.00 €" + "</li> </td> <br>";
  document.getElementById("zusammenrechnung").innerHTML =
  Number(document.getElementById("zusammenrechnung").innerHTML)
  +
  Number(document.getElementById("campreis").innerHTML);}
