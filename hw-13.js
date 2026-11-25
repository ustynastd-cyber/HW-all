const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  nextTransactionId: 1,

  createTransaction(amount, type) {
    const transaction = {
      id: this.nextTransactionId,
      type,
      amount,
    };

    this.nextTransactionId += 1;
    return transaction;
  },

  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      console.log("Сума поповнення має бути додатним числом.");
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      console.log("Сума зняття має бути додатним числом.");
      return;
    }

    const { balance } = this;
    if (amount > balance) {
      console.log("Зняття такої суми неможливе: недостатньо коштів.");
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  getBalance() {
    const { balance } = this;
    return balance;
  },

  getTransactionDetails(id) {
    const { transactions } = this;
    return transactions.find((transaction) => {
      const { id: transactionId } = transaction;
      return transactionId === id;
    });
  },

  getTransactionTotal(type) {
    const { transactions } = this;

    return transactions.reduce((total, transaction) => {
      const { type: transactionType, amount } = transaction;
      return transactionType === type ? total + amount : total;
    }, 0);
  },
};