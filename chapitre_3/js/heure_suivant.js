var heures = Number(prompt("Entrez heures !"));
var minutes = Number(prompt("Entrez minutes !"));
var secondes = Number(prompt("Entrez secondes !"));

if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
	(secondes >= 0) && (secondes <= 59)) {
	secondes++;
	if (secondes === 60) {
		secondes = 0;
		minutes++;
		if (minutes === 60) {
			minutes = 0;
			heures++;
				if (heures === 24) {
					heures = 0;
			   }
	    }
	}
console.log(heures + "h" + minutes + "m" + secondes + "s");
}