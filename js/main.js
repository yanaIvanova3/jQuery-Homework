$(document).ready(function() {
	
	var dataArray = [];
	

	$('#add').on('click', function() {	
		
		$('input').css('border', '1px groove #888888');
		
		var carNumber = (dataArray.length) + 1;
	
		var brand = $('#brand').val();
		
		var model = $('#model').val();
		
		var year = $('#year').val();
		
		var kilometers = $('#kilometers').val();
		
		var brandID = $('#brand');
		
		var modelID = $('#model');
		
		var yearID = $('#year');
		
		var kilometersID = $('#kilometers');
		
		var deleteButton = $('<button>');
			deleteButton.addClass('deleteButton');
			deleteButton.text('Delete');

		var editButton = $('<button>');
			editButton.addClass('editButton');
			editButton.text('Edit')
			
		var newTr = "";

		//CALL ALL VALIDATING FUNCTIONS & CHECK INPUTS	
		notEmptyInput(brandID);
		notEmptyInput(modelID);
		notEmptyInput(yearID);
		notEmptyInput(kilometersID);
		onlyNumbers(yearID);
		onlyNumbers(kilometersID);
		
		
		
		//ADD ROWS TO TABLE & ADD DATA TO "DATABASE" IF THERE ARE NO ERRORS
		if (errors.length == 0) {
			
			//CREATE CAR OBJECT
			var car = new Car(brand, model,parseFloat(year),parseFloat(kilometers));
			
			//PUSH CAR OBJECT TO DATA ARRAY
			dataArray.push(car);
			
			//UPDATE TABLE
	        $('tbody').html('');
			updateTable(dataArray);
		        
			//CLEAR FORM INPUTS
		    $('form' ).each(function(){
		    	this.reset();
		    });
			
		} else {
			alert(errors.join('\n'));
			errors = [];
			return;
		}
		
	});
	
	
	
	//ADD TABLE EVENTS
	$('#table').on('click', function(event) {	
		
		//SET DELETE BUTTON
		 if ($(event.target).hasClass("deleteButton")) {
			var confirmDelete = confirm('Are you sure you want to delete this car?');
			 	if(confirmDelete == true) {
				 var rowToDelete = $(event.target).parent().parent();
				 rowToDelete.remove();
				 $('tbody').html('');
				 dataArray.splice(rowToDelete,1);

//????????????????????????????????????????????????????????????????????????????????
//				 dataArray = jQuery.grep(dataArray, function(value) {
//					  return value != rowToDelete;
//					});
//????????????????????????????????????????????????????????????????????????????????
				 updateTable(dataArray);
			 	}
		 }
		 
		 //SET EDIT BUTTON
		 if($(event.target).hasClass('editButton')) {
			 var rowToEdit = $(event.target).parent().parent();
			 var tdsToEdit = $(event.target).parent().parent().children();
				$('form #brand').val(tdsToEdit[1].innerText);
				$('form #model').val(tdsToEdit[2].innerText);
				$('form #year').val(tdsToEdit[3].innerText);
				$('form #kilometers').val(tdsToEdit[4].innerText);
				
				rowToEdit.remove();
				$('tbody').html('');
				dataArray.splice(rowToEdit,1);
				updateTable(dataArray);
				
		 }
	});
	
	
});