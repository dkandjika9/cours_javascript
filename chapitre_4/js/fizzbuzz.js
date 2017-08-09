for (var i = 1; i <=100; i++) {
	var divisibleTrois = "fizz";
	var divisibleCinq = "buzz";
	var divisibleCinqTrois = "fizzbuzz";
	if ((i % 3 === 0) && (i % 5 === 0)) {
       console.log(divisibleCinqTrois);
	}
	else if(i % 3 === 0) {
     console.log(divisibleTrois);
	} else if (i % 5 === 0) {
     console.log(divisibleCinq);
	} else {
		console.log(i);
	}
	
}