// Function to create the table
function createTable() {
    const numRows = prompt("Input number of rows:");
    const numColumns = prompt("Input number of columns:");
    const table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = '';

    // Create the table rows and cells based on user input
    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow(i);

        for (let j = 0; j < numColumns; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

// Attach the createTable function to the button click event
const createTableButton = document.getElementById("createTableButton");
createTableButton.addEventListener("click", createTable);
