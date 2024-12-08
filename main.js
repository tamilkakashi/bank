document.addEventListener("DOMContentLoaded", function () {
    // Initialize balance for demo
    const initialBalance = 10000.00;

    // Handle form submission for withdrawal page
    if (document.getElementById("withdrawal-form")) {
        document.getElementById("withdrawal-form").addEventListener("submit", function (event) {
            event.preventDefault();

            // Get the withdrawal amount entered by the user
            const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
            const currentBalance = initialBalance; // Current balance in the bank account

            // Check if the withdrawal amount is valid
            if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                document.getElementById("status-message").textContent = "Please enter a valid amount.";
                document.getElementById("status-message").style.color = "red";
                return;
            }

            // Check if the withdrawal is greater than the balance
            if (withdrawAmount > currentBalance) {
                document.getElementById("status-message").textContent = "Insufficient funds!";
                document.getElementById("status-message").style.color = "red";
            } else {
                const newBalance = currentBalance - withdrawAmount;
                document.getElementById("status-message").textContent = `Withdrawal successful! New balance: $${newBalance.toFixed(2)}`;
                document.getElementById("status-message").style.color = "green";
            }
        });
    }

    // Handle customer form submission (home page)
    if (document.getElementById("customer-form")) {
        document.getElementById("customer-form").addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const accountNumber = document.getElementById("account-number").value;
            const accountType = document.getElementById("account-type").value;

            // Store customer details (you can later send them to a server or use for further operations)
            console.log({ name, accountNumber, accountType });

            // Redirect to withdrawal page (for simplicity in this demo)
            window.location.href = "withdraw.html";
        });
    }
});
