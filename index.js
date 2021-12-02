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
    document.getElementById("btn-currency").innerHTML =
      "Preise in Euro anzeigen";
    // 1. Preis ändern
    preise[0].innerHTML = "$ " + (preisZahl * dollarKurs).toFixed(2);
    // nur else würde reichen, benutze else if () für Klarheit
  } else if (currency == "dollar") {
    // aktive Währung wechseln
    currency = "euro";
    // Button umbenennen
    document.getElementById("btn-currency").innerHTML =
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



        /*
        TODO: Zeige eine List mit gekauften Produkten
        */
        function kaufen() {
            document.getElementById("list").innerHTML =
                document.getElementById("list").innerHTML + "<li>" + "Notebook - 350 €" + "</li>";

            // Gesamtsumme
            document.getElementById("gesamtbetrag").innerHTML =
                // gesamtbetrag + neues Produkt
                Number(document.getElementById("gesamtbetrag").innerHTML)
                +
                Number(document.getElementById("preis").innerHTML);
        }



        function Laptop(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "Laptop - 2249,00€" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link").innerHTML)
        
            console.log("Ja")
        }
        
        function Headset(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "Headset - 55,00 €" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link-1").innerHTML)
        
            console.log("Ja")
        }
        
        function nootbook1(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "SAMSUNG GALAXY BOOK PRO 360 EVO - 289.00 €" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link2").innerHTML)
        
            console.log("esgeht2")
        }
        
        function ipad1(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "Sony TEB-15DSKP Tablet - 173.00 €" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link3").innerHTML)
        
            console.log("esgeht3")
        }
        
        function headphone1(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "SONY WH-1000XM3 Noise Cancelling - 530.00 €" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link4").innerHTML)
        
            console.log("esgeht4")
        }
        
        function nootbook2(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "MSI KATANA (GF76) Gaming Notebook - 999.00 €" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link5").innerHTML)
        
            console.log("esgeht5")
        }
        
        function phone(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "SAMSUNG Galaxy S7 32 GB Black-Onyx - 329.00 €" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link6").innerHTML)
        
            console.log("esgeht6")
        }
        
        function nootbook3(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "ASUS ROG Strix G17 (G713QM-HX019T) - 890.00 €" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link7").innerHTML)
        
            console.log("esgeht7")
        }
        
        function cam(){
            document.getElementById("list").innerHTML =  
            document.getElementById("list").innerHTML
             + 
             "<li>" + "Digitalkamera 1080P HD - 325.00 €" + "</li>";
        
            document.getElementById("summe").innerHTML = 
            Number(document.getElementById("summe").innerHTML)
             + 
            Number(document.getElementById("card-link8").innerHTML)
        
            console.log("esgeht8")
        }