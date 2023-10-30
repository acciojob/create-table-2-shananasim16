function createTable() {
    //Write your code here
	var rn = prompt("Input number of rows");; // Number of rows (can be dynamically determined as per your requirement)
      var cn = prompt("Input number of columns"); // Prompt for number of columns

      if(cn) {
        // Check if the user entered a value and clicked OK
        var table = document.getElementById("myTable");
        table.innerHTML = ""; // Clear the existing table content

        // Create the table rows and cells
        for (var i = 0; i < rn; i++) {
          var row = table.insertRow(i);
          for (var j = 0; j < cn; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = "Row-" + (i ) + " Column-" + (j );
          }
        }
      }
    }