// euro >> dollar
function euroInDollar(){

    let euro = document.getElementById("euro").innerHTML;
    let dollar = euro * 1.14;

//wechselkursrechner euroInDollar im header
    document.getElementById("dollar").innerHTML = dollar.toFixed(2); 

//angebote im mainbereich
document.getElementById("ch1").innerHTML= (document.getElementById("ch1").innerHTML * 1.14).toFixed(2);
console.log(ch1 , "$");

document.getElementById("ch2").innerHTML= (document.getElementById("ch2").innerHTML * 1.14).toFixed(2);
console.log(ch2 , "$");

document.getElementById("ch3").innerHTML= (document.getElementById("ch3").innerHTML * 1.14).toFixed(2);
console.log(ch3 , "$");

document.getElementById("ch4").innerHTML= (document.getElementById("ch4").innerHTML * 1.14).toFixed(2);
console.log(ch4 , "$");

document.getElementById("ch5").innerHTML= (document.getElementById("ch5").innerHTML * 1.14).toFixed(2);
console.log(ch5 , "$");

document.getElementById("ch6").innerHTML= (document.getElementById("ch6").innerHTML * 1.14).toFixed(2);
console.log(ch6 , "$");

document.getElementById("ch7").innerHTML= (document.getElementById("ch7").innerHTML * 1.14).toFixed(2);
console.log(ch7 , "$");

document.getElementById("ch8").innerHTML= (document.getElementById("ch8").innerHTML * 1.14).toFixed(2);
console.log(ch8 , "$");

document.getElementById("ch9").innerHTML= (document.getElementById("ch9").innerHTML * 1.14).toFixed(2);
console.log(ch9 , "$");


document.getElementById("curr1").innerHTML = "$";
document.getElementById("curr2").innerHTML = "$";
document.getElementById("curr3").innerHTML = "$";
document.getElementById("curr4").innerHTML = "$";
document.getElementById("curr5").innerHTML = "$";
document.getElementById("curr6").innerHTML = "$";
document.getElementById("curr7").innerHTML = "$";
document.getElementById("curr8").innerHTML = "$";
document.getElementById("curr9").innerHTML = "$";
}


// dollar >> euro
function dollarInEuro(){

    let dollar = document.getElementById("dollar").innerHTML;
    let euro = dollar / 1.14;


//wechselkursrechner dollarInEuro im header
    document.getElementById("euro").innerHTML = euro.toFixed(2);


    //euro in dollarSymbole im browser
    document.getElementById("curr1").innerHTML = "€";
    document.getElementById("curr2").innerHTML = "€";
    document.getElementById("curr3").innerHTML = "€";
    document.getElementById("curr4").innerHTML = "€";
    document.getElementById("curr5").innerHTML = "€";
    document.getElementById("curr6").innerHTML = "€";
    document.getElementById("curr7").innerHTML = "€";
    document.getElementById("curr8").innerHTML = "€";
    document.getElementById("curr9").innerHTML = "€";


    document.getElementById("ch1").innerHTML = (document.getElementById("ch1").innerHTML / 1.14).toFixed(2);
    console.log(ch1 , "€");
    document.getElementById("ch2").innerHTML = (document.getElementById("ch2").innerHTML / 1.14).toFixed(2);
    console.log(ch2 , "€");
    document.getElementById("ch3").innerHTML = (document.getElementById("ch3").innerHTML / 1.14).toFixed(2);
    console.log(ch3 , "€");
    document.getElementById("ch4").innerHTML = (document.getElementById("ch4").innerHTML / 1.14).toFixed(2);
    console.log(ch4 , "€");
    document.getElementById("ch5").innerHTML = (document.getElementById("ch5").innerHTML / 1.14).toFixed(2);
    console.log(ch5 , "€");
    document.getElementById("ch6").innerHTML = (document.getElementById("ch6").innerHTML / 1.14).toFixed(2);
    console.log(ch6 , "€");
    document.getElementById("ch7").innerHTML = (document.getElementById("ch7").innerHTML / 1.14).toFixed(2);
    console.log(ch7 , "€");
    document.getElementById("ch8").innerHTML = (document.getElementById("ch8").innerHTML / 1.14).toFixed(2);
    console.log(ch8 , "€");
    document.getElementById("ch9").innerHTML = (document.getElementById("ch9").innerHTML / 1.14).toFixed(2);
    console.log(ch9 , "€");
}

/* Liste mit gekauften Produkten */

function kaufen1() {
    let waehrungSymbol1 = document.getElementById("curr1").innerHTML;
    let preis1 = document.getElementById("ch1").innerHTML;

    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Laptop ´Peter´" + " " + preis1 + " " + waehrungSymbol1 + "</li>";
// Gesamtsumme
document.getElementById("wSymbol").innerHTML = waehrungSymbol1;

    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch1").innerHTML); 
}

function kaufen2() {
    let waehrungSymbol2 = document.getElementById("curr2").innerHTML;
    let preis2 = document.getElementById("ch2").innerHTML;

    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Headphones ´Max´" + " " + preis2 + " " + waehrungSymbol2 + "</li>";
// Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch2").innerHTML); 
}

function kaufen3() {
    let waehrungSymbol3 = document.getElementById("curr3").innerHTML;
    let preis3 = document.getElementById("ch3").innerHTML;

    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Laptop ´Ali´" + " " + preis3 + " " + waehrungSymbol3 + "</li>";
// Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch3").innerHTML); 
}

function kaufen4() {
    let waehrungSymbol4 = document.getElementById("curr4").innerHTML;
    let preis4 = document.getElementById("ch4").innerHTML;


    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Tablet ´Sina´" + " " + preis4 + " " + waehrungSymbol4 + "</li>";
// Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch4").innerHTML); 
}

function kaufen5() {
    let waehrungSymbol5 = document.getElementById("curr5").innerHTML;
    let preis5 = document.getElementById("ch5").innerHTML;

    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Headphones ´Moritz´" + " " + preis5 + " " + waehrungSymbol5 +  "</li>";
// Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch5").innerHTML); 
}

function kaufen6() {
    let waehrungSymbol6 = document.getElementById("curr6").innerHTML;
    let preis6 = document.getElementById("ch6").innerHTML;

    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Laptop ´Robert´" + " " + preis6 + " " + waehrungSymbol6 +  "</li>";
// Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch6").innerHTML); 
}

function kaufen7() {
    let waehrungSymbol7 = document.getElementById("curr7").innerHTML;
    let preis7 = document.getElementById("ch7").innerHTML;

    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Ihone ´Chantal´" + " " + preis7 + " " + waehrungSymbol7 +  "</li>";
// Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch7").innerHTML); 
}

function kaufen8() {
    let waehrungSymbol8 = document.getElementById("curr8").innerHTML;
    let preis8 = document.getElementById("ch8").innerHTML;

    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Laptop ´Jens´" + " " + preis8 + " " + waehrungSymbol8 +  "</li>";
// Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch8").innerHTML); 
}

function kaufen9() {
    let waehrungSymbol9 = document.getElementById("curr9").innerHTML;
    let preis9 = document.getElementById("ch9").innerHTML;

    document.getElementById("ekList").innerHTML =
    document.getElementById("ekList").innerHTML + "<li>" + "Recam ´Diego´" + " " + preis9 + " " + waehrungSymbol9 +  "</li>";
// Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
// gesamtbetrag plus neues produkt
    Number(document.getElementById("gesamtbetrag").innerHTML) 
    +
    Number(document.getElementById("ch9").innerHTML); 
}