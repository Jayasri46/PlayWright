class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
      } else {
        console.log("Insufficient Amount");
      }
    }
  }
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    calculateInterest() {
      const interestAmount = this.balance * (this.interestRate / 100);
      this.deposit(interestAmount);
    }
  }
  class CurrentAccount extends BankAccount {
    constructor(accountNumber, balance, overLimit) {
      super(accountNumber, balance);
      this.overdraftLimit = overdraftLimit;
    }
  
    checkbalance(amount) {
      const Balance = this.balance - amount;
      if (Balance >= this.overLimit) {
        console.log("Transaction allowed with balance");
      } else {
        console.log("Transaction denied. Over limit exceeded.");
      }
    }
  }
  
  const savingsAccount = new SavingsAccount("SA123", 1000, 5);
  savingsAccount.deposit(500);
  savingsAccount.calculateInterest();
  
  const currentAccount = new CurrentAccount("CA456", 2000, 500);
  currentAccount.withdraw(2500);
  currentAccount.checkbalance(200);
  