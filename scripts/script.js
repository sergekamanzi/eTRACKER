        // Close modal functionality
        document.getElementById('close').onclick = function() {
            document.getElementById('modal').style.display = 'none';
        };

        // Handle form submission
        document.getElementById('expense-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const amount = document.getElementById('amount').value;
            const date = document.getElementById('date').value;
            const description = document.getElementById('description').value;

            // Create a new row in the table
            const table = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();

            const dateCell = newRow.insertCell(0);
            const categoryCell = newRow.insertCell(1);
            const descriptionCell = newRow.insertCell(2);
            const amountCell = newRow.insertCell(3);
            const actionCell = newRow.insertCell(4);

            dateCell.textContent = date;
            dateCell.contentEditable = "true";

            categoryCell.textContent = 'items';
            categoryCell.contentEditable = "true";

            descriptionCell.textContent = description;
            descriptionCell.contentEditable = "true";

            amountCell.textContent = `$${amount}`;
            amountCell.contentEditable = "true";

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'deleteRowBtn';
            deleteButton.onclick = function() {
                table.deleteRow(newRow.rowIndex - 1);
            };
            actionCell.appendChild(deleteButton);

            // Close the modal
            document.getElementById('modal').style.display = 'none';

            // Reset form
            document.getElementById('expense-form').reset();
        });