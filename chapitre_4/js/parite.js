/*for (var i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i + " est par");
	}
}*/

for (var i = 1; i <= 10; i++) {
	var i = prompt("Entrez le nombre :");
    if (i % 2 !== 0) {
    	console.log(i + " est impair");
    }
	if (i % 2 === 0) {
		console.log(i + " est pair");
	}
}
