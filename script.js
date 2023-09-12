class BankAccount {
  constructor(accountHolderName, accountType, balance) {
    this.accountHolderName = accountHolderName;
    this.accountType = accountType;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
    return this.balance;
  }

  checkBalance() {
    return this.balance;
  }
}

// Create a new bank account
const myAccount = new BankAccount("John Doe", "Savings", 1000);

function performAction() {
  const action = document.getElementById("action").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const resultDiv = document.getElementById("result");

  try {
    switch (action) {
      case "deposit":
        if (isNaN(amount) || amount <= 0) {
          throw new Error("Invalid input for deposit");
        }
        const newBalanceAfterDeposit = myAccount.deposit(amount);
        resultDiv.innerHTML = `Deposited ${amount}. New balance: ${newBalanceAfterDeposit}`;
        break;

      case "withdraw":
        if (isNaN(amount) || amount <= 0) {
          throw new Error("Invalid input for withdrawal");
        }
        const newBalanceAfterWithdrawal = myAccount.withdraw(amount);
        resultDiv.innerHTML = `Withdrew ${amount}. New balance: ${newBalanceAfterWithdrawal}`;
        break;

      case "balance":
        const currentBalance = myAccount.checkBalance();
        resultDiv.innerHTML = `Current balance: ${currentBalance}`;
        break;

      default:
        throw new Error("Invalid action");
    }
  } catch (error) {
    resultDiv.innerHTML = `Error: ${error.message}`;
  } finally {
    console.log("Action performed");
  }
}
