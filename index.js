let währung = false;

function dollarInEuro(){
    let wert1 = document.getElementById("preis1").innerHTML;
    let wert2 = document.getElementById("preis2").innerHTML;
    let wert3 = document.getElementById("preis3").innerHTML;
    let wert4 = document.getElementById("preis4").innerHTML;
    let wert5 = document.getElementById("preis5").innerHTML;
    let wert6 = document.getElementById("preis6").innerHTML;
    let wert7 = document.getElementById("preis7").innerHTML;
    let wert8 = document.getElementById("preis8").innerHTML;
    let wert9 = document.getElementById("preis9").innerHTML;

    if(währung == false){
        document.getElementById("preis1").innerHTML = (Number(wert1) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen1").innerHTML ="$";
        document.getElementById("preis2").innerHTML = (Number(wert2) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen2").innerHTML ="$";
        document.getElementById("preis3").innerHTML = (Number(wert3) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen3").innerHTML ="$";
        document.getElementById("preis4").innerHTML = (Number(wert4) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen4").innerHTML ="$";
        document.getElementById("preis5").innerHTML = (Number(wert5) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen5").innerHTML ="$";
        document.getElementById("preis6").innerHTML = (Number(wert6) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen6").innerHTML ="$";
        document.getElementById("preis7").innerHTML = (Number(wert7) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen7").innerHTML ="$";
        document.getElementById("preis8").innerHTML = (Number(wert8) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen8").innerHTML ="$";
        document.getElementById("preis9").innerHTML = (Number(wert9) * 1.14).toFixed(2);
        document.getElementById("geld-zeichnen9").innerHTML ="$";
        document.getElementById("btn").innerHTML = "In dollar anzeigen";
}else 
    {
        document.getElementById("preis1").innerHTML = (Number(wert1) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen1").innerHTML ="€";
        document.getElementById("preis2").innerHTML = (Number(wert2) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen2").innerHTML ="€";
        document.getElementById("preis3").innerHTML = (Number(wert3) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen3").innerHTML ="€";
        document.getElementById("preis4").innerHTML = (Number(wert4) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen4").innerHTML ="€";
        document.getElementById("preis5").innerHTML = (Number(wert5) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen5").innerHTML ="€";
        document.getElementById("preis6").innerHTML = (Number(wert6) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen6").innerHTML ="€";
        document.getElementById("preis7").innerHTML = (Number(wert7) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen7").innerHTML ="€";
        document.getElementById("preis8").innerHTML = (Number(wert8) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen8").innerHTML ="€";
        document.getElementById("preis9").innerHTML = (Number(wert9) / 1.14).toFixed(2);
        document.getElementById("geld-zeichnen9").innerHTML ="€";
        document.getElementById("btn").innerHTML = "In euro anzeigen";
    
}währung = ! währung;

}



  function kaufen1() {
    document.getElementById("gesamtbetrag").innerHTML =
      Number(document.getElementById("gesamtbetrag").innerHTML) + 
      Number(document.getElementById("preis1").innerHTML )


    document.getElementById("list").innerHTML =
        (document.getElementById("list").innerHTML) + 
        "<li> ISUS Laptop</li>"
      

}

  function kaufen2() {
    document.getElementById("gesamtbetrag").innerHTML =
      Number(document.getElementById("gesamtbetrag").innerHTML) + 
      Number(document.getElementById("preis2").innerHTML )


  document.getElementById("list").innerHTML =
      (document.getElementById("list").innerHTML) + 
      "<li>Headset</li>"
      
}

function kaufen3() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis3").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>Mac Laptop</li>"
    
}

function kaufen4() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis4").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>Sony Tablet</li>"
    
}

function kaufen5() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis5").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>Sonny Headset</li>"
    
}
function kaufen6() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis6").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>Msi Laptop</li>"
    
}

function kaufen7() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis7").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>Samsung Mobile</li>"
    
}

function kaufen8() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis8").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>ASUS Laptp</li>"
    
}

function kaufen9() {
  document.getElementById("gesamtbetrag").innerHTML =
    Number(document.getElementById("gesamtbetrag").innerHTML) + 
    Number(document.getElementById("preis9").innerHTML )


document.getElementById("list").innerHTML =
    (document.getElementById("list").innerHTML) + 
    "<li>ReKam Camera</li>"
    
}


