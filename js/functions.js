/**
 * 
 */
var errors = [];


function notEmptyInput(param) {
	var paramVal = param.val();
	if (!paramVal){
		errors.push($(param).attr('id') + ' field is required!');
		param.css('border', '1px groove red');
		return false;
	} else {
		return true;
	}
};

function onlyNumbers(param) {
	var paramVal = param.val();
	if (!(paramVal.match(/^\d+$/))) {
		errors.push($(param).attr('id') + ' field should only contain numbers!');
		param.css('border', '1px groove red');
		return false;
	} else {
		return true;
	}
};

//CREATE TABLE ROWS & UPDATE AFTER INPUT
function updateTable(dataArray){
    var tbody = $('tbody');
    
    for (var i = 0; i < dataArray.length; i++) {
    	
    	
		var deleteButton = $('<button>');
			deleteButton.addClass('deleteButton');
			deleteButton.text('Delete');

		var editButton = $('<button>');
			editButton.addClass('editButton');
			editButton.text('Edit')



			var newTr = $('<tr></tr>');
	        newTr
	            .append($('<td>' + (i+1) + '</td>'))
	            .append($('<td>' + dataArray[i].brand + '</td>'))
	            .append($('<td>' + dataArray[i].model + '</td>'))
	            .append($('<td>' + dataArray[i].year + '</td>'))
	            .append($('<td>' + dataArray[i].kilometers + '</td>'))
	            .append($('<td>')
	            .append(editButton)
	            .append(deleteButton)
	            .append($('</td>')));
	            
	        $(newTr).appendTo('tbody');
    }

}




