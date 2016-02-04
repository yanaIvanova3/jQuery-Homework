/**
 * 
 */
var errors = [];


function notEmptyInput(input) {
	if (!input){
		errors.push('Field is required');
		return false;
	} else {
		return true;
	}
};

function onlyNumbers(input) {
	if (!(input.match(/^\d+$/))) {
		errors.push('This field should only contain numbers');
		return false;
	} else {
		return true;
	}
};


