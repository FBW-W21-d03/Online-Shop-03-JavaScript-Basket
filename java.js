let euro = false


function myFunction(){
    //document = greift aus html seite zu
    //getElementById = greift auf die benannte Id zu
    
    console.log("es funkioniert")
    console.log(euro)
    euro = !euro

    if (euro) { document.getElementById("button1").innerHTML = ("In €")
        
    } else { document.getElementById("button1").innerHTML = ("In $")
    }
     
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
     
    if (euro){ document.getElementById("card-link").innerHTML = (document.getElementById("card-link").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link").innerHTML = (document.getElementById("card-link").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link1").innerHTML = (document.getElementById("card-link1").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link1").innerHTML = (document.getElementById("card-link1").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link2").innerHTML = (document.getElementById("card-link2").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link2").innerHTML = (document.getElementById("card-link2").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link3").innerHTML = (document.getElementById("card-link3").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link3").innerHTML = (document.getElementById("card-link3").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link4").innerHTML = (document.getElementById("card-link4").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link4").innerHTML = (document.getElementById("card-link4").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link5").innerHTML = (document.getElementById("card-link5").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link5").innerHTML = (document.getElementById("card-link5").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link6").innerHTML = (document.getElementById("card-link6").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link6").innerHTML = (document.getElementById("card-link6").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("card-link7").innerHTML = (document.getElementById("card-link7").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("card-link7").innerHTML = (document.getElementById("card-link7").innerHTML / 1.14).toFixed(2);
         }
         
         if (euro){ document.getElementById("card-link8").innerHTML = (document.getElementById("card-link8").innerHTML * 1.14).toFixed(2)  ;
        }
    else { document.getElementById("card-link8").innerHTML = (document.getElementById("card-link8").innerHTML / 1.14).toFixed(2);
    }
}


//listen form

function nootbook(){
    document.getElementById("list").innerHTML =  
    document.getElementById("list").innerHTML
     + 
     "<li>" + "ASUS Vivobook S17 - 499.00 €" + "</li>";

    document.getElementById("summe").innerHTML = 
    Number(document.getElementById("summe").innerHTML)
     + 
    Number(document.getElementById("card-link").innerHTML)

    console.log("esgeht")
}

function headphon(){
    document.getElementById("list").innerHTML =  
    document.getElementById("list").innerHTML
     + 
     "<li>" + "SENNHEISER HD 450BT Over-ear - 299.00 €" + "</li>";

    document.getElementById("summe").innerHTML = 
    Number(document.getElementById("summe").innerHTML)
     + 
    Number(document.getElementById("card-link1").innerHTML)

    console.log("esgeht1")
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

//Tabellenform

function nootbook(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>ASUS Vivobook S17</td><td>499.00 €</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link").innerHTML);

    console.log("esgeht");
}

function headphon(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>SENNHEISER HD 450BT Over-ear</td><td>299.00 €</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link1").innerHTML);

    console.log("esgeht1");
}


function nootbook1(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>SAMSUNG GALAXY BOOK PRO 360 EVO</td><td>289.00 €</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link2").innerHTML);


    console.log("esgeht2");
}

function ipad1(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>Sony TEB-15DSKP Tablet</td><td>173.00 €</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link3").innerHTML);

    console.log("esgeht3");
}

function headphone1(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>SONY WH-1000XM3 Noise Cancelling</td><td>530.00 €</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link4").innerHTML);

    console.log("esgeht4");
}

function nootbook2(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>MSI KATANA (GF76) Gaming Notebook</td><td>999.00 €</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link5").innerHTML);

    console.log("esgeht5");
}

function phone(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>SAMSUNG Galaxy S7 32 GB Black-Onyx</td><td>329.00 €</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link6").innerHTML);

    console.log("esgeht6");
}

function nootbook3(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>ASUS ROG Strix G17 (G713QM-HX019T)</td><td>890.00 €</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link7").innerHTML);

    console.log("esgeht7");
}

function cam(){
    document.getElementById("list2").innerHTML =  
    document.getElementById("list2").innerHTML
     + 
     "<tr><td>Digitalkamera 1080P HD</td><td>325.00</td><td>€</td></tr>";

    document.getElementById("summe2").innerHTML = 
    Number(document.getElementById("summe2").innerHTML)
     + 
    Number(document.getElementById("card-link8").innerHTML);

    console.log("esgeht8");
}


