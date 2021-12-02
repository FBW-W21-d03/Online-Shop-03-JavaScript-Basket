/* alert("verlinkt"); */
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

        document.getElementById("preis1").innerHTML = (Number(wert1) * 1.14).toFixed(2);
        document.getElementById("waehrung1").innerHTML = "$";
        document.getElementById("preis2").innerHTML = (Number(wert2) * 1.14).toFixed(2);
        document.getElementById("waehrung2").innerHTML = "$";
        document.getElementById("preis3").innerHTML = (Number(wert3) * 1.14).toFixed(2);
        document.getElementById("waehrung3").innerHTML = "$";
        document.getElementById("preis4").innerHTML = (Number(wert4) * 1.14).toFixed(2);
        document.getElementById("waehrung4").innerHTML = "$";
        document.getElementById("preis5").innerHTML = (Number(wert5) * 1.14).toFixed(2);
        document.getElementById("waehrung5").innerHTML = "$";
        document.getElementById("preis6").innerHTML = (Number(wert6) * 1.14).toFixed(2);
        document.getElementById("waehrung6").innerHTML = "$";
        document.getElementById("preis7").innerHTML = (Number(wert7) * 1.14).toFixed(2);
        document.getElementById("waehrung7").innerHTML = "$";
        document.getElementById("preis8").innerHTML = (Number(wert8) * 1.14).toFixed(2);
        document.getElementById("waehrung8").innerHTML = "$";
        document.getElementById("preis9").innerHTML = (Number(wert9) * 1.14).toFixed(2);
        document.getElementById("waehrung9").innerHTML = "$";

        document.getElementById("GPWaehrung").innerHTML = "$";

    } else {
        document.getElementById("wechselBtn").innerHTML = "In $ anzeigen";

        document.getElementById("preis1").innerHTML = (Number(wert1) / 1.14).toFixed(2);
        document.getElementById("waehrung1").innerHTML = "€";
        document.getElementById("preis2").innerHTML = (Number(wert2) / 1.14).toFixed(2);
        document.getElementById("waehrung2").innerHTML = "€";
        document.getElementById("preis3").innerHTML = (Number(wert3) / 1.14).toFixed(2);
        document.getElementById("waehrung3").innerHTML = "€";
        document.getElementById("preis4").innerHTML = (Number(wert4) / 1.14).toFixed(2);
        document.getElementById("waehrung4").innerHTML = "€";
        document.getElementById("preis5").innerHTML = (Number(wert5) / 1.14).toFixed(2);
        document.getElementById("waehrung5").innerHTML = "€";
        document.getElementById("preis6").innerHTML = (Number(wert6) / 1.14).toFixed(2);
        document.getElementById("waehrung6").innerHTML = "€";
        document.getElementById("preis7").innerHTML = (Number(wert7) / 1.14).toFixed(2);
        document.getElementById("waehrung7").innerHTML = "€";
        document.getElementById("preis8").innerHTML = (Number(wert8) / 1.14).toFixed(2);
        document.getElementById("waehrung8").innerHTML = "€";
        document.getElementById("preis9").innerHTML = (Number(wert9) / 1.14).toFixed(2);
        document.getElementById("waehrung9").innerHTML = "€";

        document.getElementById("GPWaehrung").innerHTML = "€";

    }
    dollar = !dollar;
    document.getElementById("einkaufListe").innerHTML = "";
    document.getElementById("gesamtPreis").innerHTML = 0;
    
}

function addToCart1() {
    console.log("geklickt1"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt1 = document.getElementById("produkt1").innerHTML;
    let Prise1 = document.getElementById("preis1").innerHTML;
    let Waehrung1 = document.getElementById("waehrung1").innerHTML;

    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt1 + " - " + Prise1 + " " + Waehrung1 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise1)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung1;
}

function addToCart2() {
    console.log("geklickt2"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt2 = document.getElementById("produkt2").innerHTML;
    let Prise2 = document.getElementById("preis2").innerHTML;
    let Waehrung2 = document.getElementById("waehrung2").innerHTML;
    
    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt2 + " - " + Prise2 + " " + Waehrung2 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise2)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung2;
}

function addToCart3() {
    console.log("geklickt3"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt3 = document.getElementById("produkt3").innerHTML;
    let Prise3 = document.getElementById("preis3").innerHTML;
    let Waehrung3 = document.getElementById("waehrung3").innerHTML;
    
    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt3 + " - " + Prise3 + " " + Waehrung3 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise3)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung3;
}

function addToCart4() {
    console.log("geklickt4"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt4 = document.getElementById("produkt4").innerHTML;
    let Prise4 = document.getElementById("preis4").innerHTML;
    let Waehrung4 = document.getElementById("waehrung4").innerHTML;
    
    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt4 + " - " + Prise4 + " " + Waehrung4 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise4)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung4;
}

function addToCart5() {
    console.log("geklickt5"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt5 = document.getElementById("produkt5").innerHTML;
    let Prise5 = document.getElementById("preis5").innerHTML;
    let Waehrung5 = document.getElementById("waehrung5").innerHTML;
    
    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt5 + " - " + Prise5 + " " + Waehrung5 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise5)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung5;
}

function addToCart6() {
    console.log("geklickt6"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt6 = document.getElementById("produkt6").innerHTML;
    let Prise6 = document.getElementById("preis6").innerHTML;
    let Waehrung6 = document.getElementById("waehrung6").innerHTML;
    
    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt6 + " - " + Prise6 + " " + Waehrung6 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise6)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung6;
}

function addToCart7() {
    console.log("geklickt7"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt7 = document.getElementById("produkt7").innerHTML;
    let Prise7 = document.getElementById("preis7").innerHTML;
    let Waehrung7 = document.getElementById("waehrung7").innerHTML;
    
    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt7 + " - " + Prise7 + " " + Waehrung7 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise7)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung7;
}

function addToCart8() {
    console.log("geklickt8"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt8 = document.getElementById("produkt8").innerHTML;
    let Prise8 = document.getElementById("preis8").innerHTML;
    let Waehrung8 = document.getElementById("waehrung8").innerHTML;
    
    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt8 + " - " + Prise8 + " " + Waehrung8 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise8)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung8;
}

function addToCart9() {
    console.log("geklickt9"); 

    let Liste = document.getElementById("einkaufListe").innerHTML;
    let Produkt9 = document.getElementById("produkt9").innerHTML;
    let Prise9 = document.getElementById("preis9").innerHTML;
    let Waehrung9 = document.getElementById("waehrung9").innerHTML;
    
    //Eine Liste mit gekauften Produkten
    Liste += "<li>" + Produkt9 + " - " + Prise9 + " " + Waehrung9 + "</li>";
    document.getElementById("einkaufListe").innerHTML = Liste;

    //Gesamtsumme
    let sum = document.getElementById("gesamtPreis").innerHTML;
    sum = (Number(sum) + Number(Prise9)).toFixed(2);
    document.getElementById("gesamtPreis").innerHTML = sum;
    document.getElementById("GPWaehrung").innerHTML = Waehrung9;
}