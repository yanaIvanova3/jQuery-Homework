$(document).ready(function(){
	$('#add').on('click', function() {	var carNumber = ($('tr').length) + 1;
	
		var brand = $('#brand').val();
		var model = $('#model').val();
		var year = $('#year').val();
		var kilometers = $('#kilometers').val();
		var deleteButton = $('<button>');
			deleteButton.addClass("deleteButton");
			deleteButton.text("Delete");
		var editButton = $('<button>');
			editButton.addClass("editButton");
			editButton.text("Edit");
		var newTr = ""
		var dataArray = [];
			
		notEmptyInput(brand);
		notEmptyInput(model);
		notEmptyInput(year);
		notEmptyInput(kilometers);
		onlyNumbers(year);
		onlyNumbers(kilometers);
		
		if (!errors) {
			
			var car = new Car(brand.val(),model.val(),parseFloat(year.val()),parseFloat(kilometers.val()))
			dataArray.push(car);
			newTr += "<tr><td>" + carNumber + "</td><td>" + brand + "</td><td>" + model + "</td><td>" + year + "</td><td>" + kilometers +  "</td><td>" + deleteButton + editButton + "</td></tr>";
			$(newTr).appendTo('#table tbody');
		}
		
		console.log(car);
	});
	
});