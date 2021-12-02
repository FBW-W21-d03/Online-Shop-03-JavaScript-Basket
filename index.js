
/*// FUNKTION: RECHNET EURO IN DOLLAR
function euroInDollar(){
    // WAS HAT DER NUTZER EINGEGEBEN?
    let euro = document.getElementById("euro").value;
    // UMRECHNUNG IN DOLLAR
    let dollar = euro * 1.14;
    // EINSETZEN INS DOLLAR FELD
    document.getElementById("Dollar").value = dollar;
}

function dollarInEuro(){
    let dollar = document.getElementById("Dollar").value;
    let euro = dollar * 0.86;
    document.getElementById("euro").value = euro;}
 */   

 /* Umrechnung von Euro nach Dollar */   

function umrechnen(){
    document.getElementById("knopf").innerHTML= 320.00 * 1.14;
}

function umrechnen1(){
    document.getElementById("knopf1").innerHTML= 49.95 * 1.14;
}

function umrechnen2(){
    document.getElementById("knopf2").innerHTML= 860.00 * 1.14;
}
function umrechnen3(){
    document.getElementById("knopf3").innerHTML= 548.00 * 1.14;
}
function umrechnen4(){
    document.getElementById("knopf4").innerHTML= 98.00 * 1.14;
}
function umrechnen5(){
    document.getElementById("knopf5").innerHTML= 428.00 * 1.14;
}
function umrechnen6(){
    document.getElementById("knopf6").innerHTML= 179.00 * 1.14;
}
function umrechnen7(){
    document.getElementById("knopf7").innerHTML= 299.00 * 1.14;
}
function umrechnen8(){
    document.getElementById("knopf8").innerHTML= 57.00 * 1.14;
}
function umrechnen9(){
    document.getElementById("knopf9").innerHTML= 589.00 * 1.14;
}
function umrechnen10(){
    document.getElementById("knopf10").innerHTML= 299.00 * 1.14;
}
function umrechnen11(){
    document.getElementById("knopf11").innerHTML= 989.00 * 1.14;
}

/* SHOP-EINKAUFSWAGEN */
/* karte 1 */
function kaufen() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Laptop - 320 €" + "</li>";

    document.getElementById("gesamtbetrag").innerHTML =
     
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis").innerHTML);
}
/* karte 2 */
function kaufen1() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "2D Kopfhörer - 49.95 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis1").innerHTML);
}
/* karte 3 */
function kaufen2() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Gaming-Laptop Samsung - 860.00 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis2").innerHTML);
}
/* karte 4 */
function kaufen3() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Tablet-G3sr - 548.00 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis3").innerHTML);
}
/* karte 5 */
function kaufen4() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Thomson-Kopfhörer - 98.42 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis4").innerHTML);
}
/* karte 6 */
function kaufen5() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Laptop-Acer - 428.00 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis5").innerHTML);
}
/* karte 7 */
function kaufen6() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Realme-Handy - 179.00 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis6").innerHTML);
}
/* karte 8 */
function kaufen7() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Lenovo - 299.00 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis7").innerHTML);
}
/* karte 9 */
function kaufen8() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Digitale Kameragehäuse - 57.00 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis8").innerHTML);
}
/* karte 10 */
function kaufen9() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Samsung-Handy - 589.00 €" + "</li>";
        document.getElementById("gesamtbetrag").innerHTML =
        Number(document.getElementById("gesamtbetrag").innerHTML)
        +
        Number(document.getElementById("preis9").innerHTML);
}