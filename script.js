document.addEventListener("DOMContentLoaded", () => {
    const balanceElement = document.getElementById("balance");
    const expenseText = document.getElementById("expense-text");
    const expenseAmount = document.getElementById("expense-amount");
    const addExpenseButton = document.getElementById("add-expense");
    const expensesList = document.getElementById("expenses");

    let balance = 0;

    addExpenseButton.addEventListener("click", () => {
        const description = expenseText.value;
        const amount = parseFloat(expenseAmount.value);

        if (!description || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid expense description and amount.");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            ${description}: $${amount.toFixed(2)}
            <button class="delete-btn">Delete</button>
        `;

        expensesList.appendChild(li);

        balance += amount;
        balanceElement.textContent = balance.toFixed(2);

        // Clear input fields
        expenseText.value = "";
        expenseAmount.value = "";
    });

    expensesList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const li = e.target.parentElement;
            const amount = parseFloat(li.textContent.split(": $")[1]);
            balance -= amount;
            balanceElement.textContent = balance.toFixed(2);
            li.remove();
        }
    });
});
