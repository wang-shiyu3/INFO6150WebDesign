function addRow() {
		// Getting tbody of the table 
		var tableRef = document.getElementById('companyTable').getElementsByTagName('tbody')[0];

		// Adding row in tbody 
		var newRow   = tableRef.insertRow(tableRef.rows.length);

		//Getting count of number of columns in tbody
		var columnCount = tableRef.rows[0].cells.length;

		// Looping through that count to dynamically add that number of cell in table's new row
		for(var i = 0; i < columnCount; i++) {
			
			var newCell  = newRow.insertCell(i);
			var newText  = document.createTextNode('New row');
			newCell.appendChild(newText);
		}	
	}