/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombre = Number(prompt("Entrez le nombre :"));
var tantative = 6;
var keepPlaying = true;
while (keepPlaying) {
	for (var i = 1; i <=100; i++) {
		if (tantative<= 6) {
			if (nombre > solution) {
			console.log(nombre + " est trop grand");
			} else if (nombre < solution) {
				console.log(nombre + " est trop petit");
			} else if (nombre === solution) {
				console.log("Bravo ! la solution est " + nombre);
			}
			console.log("Bravo vous avez trouvé en " + tantative);
		} else {
			console.log("Perdu... la solution est de " + solution);
		}
		
    }
}

   

 