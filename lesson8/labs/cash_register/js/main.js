var totalAmount = 0;

document.getElementById("entry").onsubmit = formIsSubmitted;

function formIsSubmitted(e){
	e.preventDefault();

var userInput = parseFloat(document.getElementById("newEntry").value); //try to convert user input into a number //
	console.log(isNaN(userInput)); // check if it is not a number //

if (!isNaN(userInput)) { // that means if it is a number !! //
	console.log("prevent form to reload");
	console.log(document.getElementById("newEntry").value);

	var newAmount = parseFloat(document.getElementById("newEntry").value);
	totalAmount = totalAmount + newAmount ;
	console.log(totalAmount) ;
	document.getElementById("total").innerHTML = addDollarSign(totalAmount) ;
}	else {
	console.log("Please enter a number");
	}
}

function twoDecimalOnly (num) {
	return num.toFixed(2);
}

function addDollarSign (num) {
	return "$" + twoDecimalOnly(num) ;
}