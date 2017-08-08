var jour_suivant = prompt("Entrez le jour");

switch(jour_suivant) {
    case "lundi":
         console.log("Demain, nous seront mardi"); 
        break;
    case "mardi":
         console.log("Demain, nous seront mercredi"); 
        break;
    case "mercredi":
         console.log("Demain, nous seront jeudi"); 
        break;
    case "jeudi":
         console.log("Demain, nous seront vendredi"); 
        break;
    case "vendredi":
         console.log("Demain, nous seront samedi"); 
        break;
    case "samedi":
         console.log("Demain, nous seront dimanche"); 
        break;
    case "dimanche":
         console.log("Demain, nous seront lundi"); 
        break;  
    default:
        console.log("Jour non connus");
}