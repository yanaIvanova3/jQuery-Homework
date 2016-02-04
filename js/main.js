$(document).ready(function(){
	
	var dataArray = [];
	

	$('#add').on('click', function() {	
		
		var carNumber = ($('tr').length);
	
		var brand = $('#brand').val();
		
		var model = $('#model').val();
		
		var year = $('#year').val();
		
		var kilometers = $('#kilometers').val();
		
		var deleteButton = $('<button>');
			deleteButton.addClass('deleteButton');
			deleteButton.text('Delete');

		var editButton = $('<button>');
			editButton.addClass('editButton');
			editButton.text('Edit')
			
		var newTr = ""

		//CALL ALL VALIDATING FUNCTIONS & CHECK INPUTS	
		notEmptyInput(brand);
		notEmptyInput(model);
		notEmptyInput(year);
		notEmptyInput(kilometers);
		onlyNumbers(year);
		onlyNumbers(kilometers);
		
		
		//ADD ROWS TO TABLE & ADD DATA TO "DATABASE".
		if (errors.length == 0) {
			
			var car = new Car(brand, model,parseFloat(year),parseFloat(kilometers))
			dataArray.push(car);
			 newTr = $('<tr></tr>');
		        newTr
		            .append($('<td>' + carNumber + '</td>'))
		            .append($('<td>' + brand + '</td>'))
		            .append($('<td>' + model + '</td>'))
		            .append($('<td>' + year + '</td>'))
		            .append($('<td>' + kilometers + '</td>'))
		            .append($('<td>')
		            .append(editButton)
		            .append(deleteButton)
		            .append($('</td>')));
		            

		        $(newTr).appendTo('#table tbody');
		        
		        $('form' ).each(function(){
		            this.reset();
		        });
			
		} else {
			alert(errors.join('\n'))
		}
		
	});
	
	
	//SET DELETE BUTTON
	$('.deleteButton').on('click', function() {	
		confirm('Are you sure you want to delete this car?');
		if(confirm) {
			$(this).closest('tr').remove();
		}
	});
	
	$('.editButton').on('click', function() {	

	});
	
	
	
	//SET EDIT BUTTON
	$('.editButton').on('click', function(e) {	
	
			var elements = e.target.parentElement.parentElement.children;
			
			$('form #brand').val(elements[1].innerText);
			
			$('form #model').val(elements[2].innerText);
			
			$('form #year').val(elements[3].innerText);
			
			$('form #kilometers').val(elements[4].innerText);
			
			$('#add').on('click', function() {	
				elements[1].innerText = $('form #brand').val();
				elements[2].innerText = $('form #model').val();
				elements[3].innerText = $('form #year').val();
				elements[4].innerText = $('form #kilometers').val();
				e.target.parentElement.parentElement.remove();
			});
	});
	
	
});