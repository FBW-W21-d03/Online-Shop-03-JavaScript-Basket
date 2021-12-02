let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 5 seconds
}

// Chance Werung Function
let euro = true;
function werung() {
  euro = !euro
  console.log("Ne....");
  // Product 1
  if (euro) {
    document.getElementById("price1").innerHTML = (document.getElementById("price1").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price1").innerHTML = (document.getElementById("price1").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert1").innerHTML = "$"
  } else {
    document.getElementById("wert1").innerHTML = "€"
  }
  // Product 2
  if (euro) {
    document.getElementById("price2").innerHTML = (document.getElementById("price2").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price2").innerHTML = (document.getElementById("price2").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert2").innerHTML = "$"
  } else {
    document.getElementById("wert2").innerHTML = "€"
  }
  // Product 3
  if (euro) {
    document.getElementById("price3").innerHTML = (document.getElementById("price3").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price3").innerHTML = (document.getElementById("price3").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert3").innerHTML = "$"
  } else {
    document.getElementById("wert3").innerHTML = "€"
  }
  // Product 4
  if (euro) {
    document.getElementById("price4").innerHTML = (document.getElementById("price4").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price4").innerHTML = (document.getElementById("price4").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert4").innerHTML = "$"
  } else {
    document.getElementById("wert4").innerHTML = "€"
  }
  // Product 5
  if (euro) {
    document.getElementById("price5").innerHTML = (document.getElementById("price5").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price5").innerHTML = (document.getElementById("price5").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert5").innerHTML = "$"
  } else {
    document.getElementById("wert5").innerHTML = "€"
  }
  // Product 6
  if (euro) {
    document.getElementById("price6").innerHTML = (document.getElementById("price6").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price6").innerHTML = (document.getElementById("price6").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert6").innerHTML = "$"
  } else {
    document.getElementById("wert6").innerHTML = "€"
  }
  // Product 7
  if (euro) {
    document.getElementById("price7").innerHTML = (document.getElementById("price7").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price7").innerHTML = (document.getElementById("price7").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert7").innerHTML = "$"
  } else {
    document.getElementById("wert7").innerHTML = "€"
  }
   // Product 8
  if (euro) {
    document.getElementById("price8").innerHTML = (document.getElementById("price8").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price8").innerHTML = (document.getElementById("price8").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert8").innerHTML = "$"
  } else {
    document.getElementById("wert8").innerHTML = "€"
  }
   // Product 9
  if (euro) {
    document.getElementById("price9").innerHTML = (document.getElementById("price9").innerHTML * 1.14).toFixed(2);
  } else {
    document.getElementById("price9").innerHTML = (document.getElementById("price9").innerHTML / 1.14).toFixed(2);
  }
  if (euro) {
    document.getElementById("wert9").innerHTML = "$"
  } else {
    document.getElementById("wert9").innerHTML = "€"
  }
}

// Basket function
function mac1() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "Mac Pro  - 1450 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price1").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
}

function kopfhörer2() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "Kopfhörer - 50 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price2").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
  
}

function mac3() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "Mac Pro 2  - 1450 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price3").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
}

function tablet4() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "Tablet Samsung  - 650 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price4").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
}


function kopfhörer5() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "Kopfhörer - 123 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price5").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
  
}

function msi6() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "msi Intel® Core™ i5-10200H Prozessor  - 2050 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price6").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
}

function samsung7() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "Samsung S20 - 560 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price7").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
  
}

function asus8() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "ASUS  - 1145 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price8").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
}

function sony9() {
  document.getElementById("liste").innerHTML =
  document.getElementById("liste").innerHTML +
  "<li>" +
  "Tablet Samsung  - 328 €" +
  "</li>";
  // gesamtbetrag + neues Produkt
  document.getElementById("sum").innerHTML =
  Number(document.getElementById("price9").innerHTML) +
  Number(document.getElementById("sum").innerHTML);
}