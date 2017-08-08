var prixHorsTaxe = Number(prompt("Entrez votre pris hors taxe :"));

var tauxTVA = 19.6 / 100;
var prixTTC = prixHorsTaxe * (1 + tauxTVA);
 
console.log("Le pris TTC est de " + prixTTC + " Euros");
