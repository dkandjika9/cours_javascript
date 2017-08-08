/* La multiplication simple

var nombre = Number(prompt("Entrez le nombre :"));

var multiplication = 0;

while (multiplication <= 9){
	multiplication++;
	console.log("Voici une table de multiplication de " + multiplication + " * " + nombre + " = " + multiplication * nombre);
}*/

// Amelioration de la multiplication en s'inspirant de l'exercice de saisie
var nombre = Number(prompt("Entrez le nombre :"));

var multiplication = 0;

while ((multiplication < 2) || (multiplication > 9)){
	multiplication++;
	console.log("Voici une table de multiplication de " + multiplication + " * " + nombre + " = " + multiplication * nombre);
}

