let euro = false


function myFunction(){
 console.log("es funkioniert")
 console.log(euro)
 euro = !euro

 // DOLLARZEICHEN UND EUROZEICHEN IN DOLLAR UND EURO

 if (euro) { document.getElementById("wert").innerHTML = ("$")}
    
 else { document.getElementById("wert").innerHTML = ("€")
 }

 if (euro) { document.getElementById("wert1").innerHTML = ("$")}
    
 else { document.getElementById("wert1").innerHTML = ("€")
 }

 if (euro) { document.getElementById("wert2").innerHTML = ("$")}
    
 else { document.getElementById("wert2").innerHTML = ("€")
 }

 if (euro) { document.getElementById("wert3").innerHTML = ("$")}
    
 else { document.getElementById("wert3").innerHTML = ("€")
 }

 if (euro) { document.getElementById("wert4").innerHTML = ("$")}
    
 else { document.getElementById("wert4").innerHTML = ("€")
 }

 if (euro) { document.getElementById("wert5").innerHTML = ("$")}
    
 else { document.getElementById("wert5").innerHTML = ("€")
 }

 if (euro) { document.getElementById("wert6").innerHTML = ("$")}
    
 else { document.getElementById("wert6").innerHTML = ("€")
 }

 if (euro) { document.getElementById("wert7").innerHTML = ("$")}
    
 else { document.getElementById("wert7").innerHTML = ("€")
 }

 if (euro) { document.getElementById("wert8").innerHTML = ("$")}
    
 else { document.getElementById("wert8").innerHTML = ("€")
 }


 // BUTTON IN DOLLAR UND EURO


 if (euro){ document.getElementById("währung").innerHTML = "€EUR" ;
 }
 else {document.getElementById("währung").innerHTML = "$USD" ;
 }

 // PRISE IN DOLLAR UND EURO

 // 1

 if (euro){ document.getElementById("dollar").innerHTML = (document.getElementById("dollar").innerHTML * 1.14).toFixed(2) ;
 }
 else { document.getElementById("dollar").innerHTML = (document.getElementById("dollar").innerHTML / 1.14).toFixed(2) ;
 }


 // 2

 
 if (euro){ document.getElementById("dollar1").innerHTML = (document.getElementById("dollar1").innerHTML * 1.14).toFixed(2);      
 }
 else { document.getElementById("dollar1").innerHTML = (document.getElementById("dollar1").innerHTML / 1.14).toFixed(2) ;
 }


 // 3     
     
 if (euro){ document.getElementById("dollar2").innerHTML = (document.getElementById("dollar2").innerHTML * 1.14).toFixed(2);     
 }
 else { document.getElementById("dollar2").innerHTML = (document.getElementById("dollar2").innerHTML / 1.14).toFixed(2) ;
 }


 // 4


 if (euro){ document.getElementById("dollar3").innerHTML = (document.getElementById("dollar3").innerHTML * 1.14).toFixed(2);     
 }
 else { document.getElementById("dollar3").innerHTML = (document.getElementById("dollar3").innerHTML / 1.14).toFixed(2) ;
 }


 // 5


 if (euro){ document.getElementById("dollar4").innerHTML = (document.getElementById("dollar4").innerHTML * 1.14).toFixed(2);      
 }
 else { document.getElementById("dollar4").innerHTML = (document.getElementById("dollar4").innerHTML / 1.14).toFixed(2) ;
 }


 // 6


 if (euro){ document.getElementById("dollar5").innerHTML = (document.getElementById("dollar5").innerHTML * 1.14).toFixed(2);      
 }
 else { document.getElementById("dollar5").innerHTML = (document.getElementById("dollar5").innerHTML / 1.14).toFixed(2) ;
 }


 // 7

 if (euro){ document.getElementById("dollar6").innerHTML = (document.getElementById("dollar6").innerHTML * 1.14).toFixed(2);      
 }
 else { document.getElementById("dollar6").innerHTML = (document.getElementById("dollar6").innerHTML / 1.14).toFixed(2) ;
 }


 // 8

 if (euro){ document.getElementById("dollar7").innerHTML = (document.getElementById("dollar7").innerHTML * 1.14).toFixed(2);      
 }
 else { document.getElementById("dollar7").innerHTML = (document.getElementById("dollar7").innerHTML / 1.14).toFixed(2) ;
 }


 // 9

 if (euro){ document.getElementById("dollar8").innerHTML = (document.getElementById("dollar8").innerHTML * 1.14).toFixed(2);      
 }
 else { document.getElementById("dollar8").innerHTML = (document.getElementById("dollar8").innerHTML / 1.14).toFixed(2) ;
 }

}

function mac_kaufen() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar").innerHTML);
}

function headphone_kaufen() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar1").innerHTML);
}

function mackbook() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar2").innerHTML);
}

function sonyTablet() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar3").innerHTML);
}

function sonykabellose() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar4").innerHTML);
}

function asusVivoBook() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar5").innerHTML);
}

function samsung() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar6").innerHTML);
}

function asus() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar7").innerHTML);
}

function camera() {
    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar8").innerHTML);
}