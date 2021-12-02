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

    // TOTAL PRISE ABOVE


    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar").innerHTML);

    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar").innerHTML);
 

    // LIST

    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li> Mac notebook :1399.00€</li>"
}

function headphone_kaufen() {

    // TOTAL PRISE ABOVE


    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar1").innerHTML);


    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar1").innerHTML);
 

    // LIST

    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li> Sony MDR-7506:399.00€</li>"

    
}

function mackbook() {

    // TOTAL PRISE ABOVE


    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar2").innerHTML);


    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar2").innerHTML);
 

    // LIST

    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li> Mac notebook pro:1399.00€</li>"
}

function sonyTablet() {

    // TOTAL PRISE ABOVE


    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar3").innerHTML);


    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar3").innerHTML);
 

    // LIST

    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li> Sony Xperia Z4 Tablet-PC LTE:499.00€</li>"
}

function sonykabellose() {

    // TOTAL PRISE ABOVE


    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar4").innerHTML);

    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar4").innerHTML);
 



    // LIST

    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li> Sony WH-XB910N kabellose:299.00€</li>"
}

function asusVivoBook() {

    // TOTAL PRISE ABOVE


    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar5").innerHTML);

    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar5").innerHTML);
 

    // LIST 

    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li> ASUS VivoBook:399.00€</li>"
}

function samsung() {

    // TOTAL PRISE ABOVE


    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar6").innerHTML);


    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar6").innerHTML);
 
    
    // LIST

    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li> Samsung S7 Gold :350.00€</li>"
}

function asus() {

    // TOTAL PRISE ABOVE

    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar7").innerHTML);


    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar7").innerHTML);
 

    //LIST

    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li> ASUS VivoBook S15:899.00€</li>"
}

function camera() {

    //TOTAL PRISE ABOVE

    document.getElementById("total").innerHTML = 
    Number(document.getElementById("total").innerHTML)
    +
    Number(document.getElementById("dollar8").innerHTML);

    //TOTAL PRISE BOTTOM

    
    document.getElementById("total2").innerHTML = 
    Number(document.getElementById("total2").innerHTML)
    +
    Number(document.getElementById("dollar8").innerHTML);


    //LIST


    document.getElementById("list").innerHTML = 
    document.getElementById("list").innerHTML +
    "<li>" + "camera:399.00€"+"</li>"


   
}