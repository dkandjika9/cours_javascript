// TODO : écrire la fonction calculer()
function calculer(nb1, operation, nb2) {
	var total;
	switch (operation) {
		case "+":
		    total = nb1 + nb2;
		break;
		case "-":
		    total = nb1 - nb2;
		break;
		case "*":
		    total = nb1 * nb2;
		break;
		case "/":
	        total = nb1 / nb2;
		break;
	}

	return total;
}
console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity