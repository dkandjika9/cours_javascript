var moyenne = Number(prompt("Entrez votre maoyen !"));

if (moyenne < 10){
    console.log("Vous étes recalé !");
} else if ((moyenne = 10) || (moyenne <= 12)) {
    console.log("vous étes reçu !");
} else if (moyenne < 12) {
    console.log("reçu avec mention !");
} else {
    console.log("moyenne inconnu");
}