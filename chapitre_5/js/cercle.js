var rayon = Number(prompt("Calcule du perimetre :"));
// TODO : écrire la fonction perimetre(), 2 * 3.141592653589793 *r
function perimetre(rayon) {
	var resultat = 2 * 3.141592653589793 * rayon;
	return resultat;
}
console.log(perimetre(rayon))
// TODO : écrire la fonction aire(), 3.141592653589793 *r*r
var rayon = Number(prompt("Calcule de l'aire :"));
function aire(rayon) {
	var resultat = 3.141592653589793 * rayon * rayon;
	return resultat;
}
console.log(aire(rayon))