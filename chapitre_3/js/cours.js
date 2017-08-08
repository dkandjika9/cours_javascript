var nombre = Number(prompt("Entrez un nombre"));

if(nombre > 0) { 
    console.log(nombre + " est positif"); 
}

else { 
    // nombre < 0 
    if(nombre < 0 ){
        console.log(nombre + " est negatif");
    } 
    else {
        console.log(nombre + " est nul");
    }
}