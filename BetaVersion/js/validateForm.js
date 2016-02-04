/**
 * 
 */
var errors = [];
var dataArray = [];

function notEmptyInput(input) {
	if (!input){
		errors.push('Field is required');
		input.css('border', '1px solid darkred');
		return false;
	} else {
		return true;
	}
};

function onlyNumbers(input) {
	if (!(input.match(/^\d+$/))) {
		errors.push('This field should only contain numbers');
		input.css('border', '1px solid darkred');
		return false;
	} else {
		return true;
	}
};


