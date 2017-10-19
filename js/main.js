let credits = [3, 1.5, 3, 3, 1.5, 3, 1.5, 3];
let submitButton = document.querySelector('#submit');
let resultDiv = document.querySelector('#result');
let resetButton = document.querySelector('#reset');

let getGrades = function() {
	let selectors = document.querySelectorAll('.custom-select');
	selectors = Array.from(selectors);
	let grades = selectors.map(selector => selector.value != 0 ? selector.value : 'F').map(Number);

	let result = (calculateGpa(grades)/sumOfCredits).toFixed(2);
	result = isNaN(result) ? 
				"<h3>Please select all the fields  or</h3> <span class='redText'> May be you are Failed in any Subject</span>"
				: '<h3>Your GPA = '+result+' </h3>';
	resultDiv.innerHTML = result;
}

let calculateGpa = (grades) => {
	return grades.reduce((sum, grade, index) => {
		return sum + (grade * credits[index]);
	},0);
}

let sumOfCredits = credits.reduce((sum, next) => {
	return sum + next;
},0);

submitButton.onclick = getGrades;
resetButton.onclick = () => resultDiv.innerHTML = "";