const bankAccount = {
  ownerName: "Олена",
  accountNumber: "UA123456789",
  balance: 1000,
  deposit(amount) {
    if (amount <= 0) {
      return false;
    }

    this.balance += amount;
    return true;
  },
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return false;
    }

    this.balance -= amount;
    return true;
  },
};

if (typeof confirm === "function" && typeof prompt === "function") {
  const shouldDeposit = confirm("Натисніть OK, щоб поповнити рахунок, або Скасувати, щоб зняти готівку.");
  const amountInput = prompt("Введіть суму:");

  if (amountInput !== null) {
    const amount = Number(amountInput);
    const isValidAmount = Number.isFinite(amount) && amount > 0;
    const operationSucceeded =
      isValidAmount &&
      (shouldDeposit
        ? bankAccount.deposit(amount)
        : bankAccount.withdraw(amount));

    if (operationSucceeded) {
      console.log(`Залишок на рахунку: ${bankAccount.balance}`);
    } else {
      console.log("Операцію не виконано. Перевірте суму та залишок на рахунку.");
    }
  }
}

const weather = {
  temperature: 0,
  humidity: 50,
  windSpeed: 10,
  isBelowFreezing() {
    return this.temperature < 0;
  },
};

if (typeof prompt === "function") {
  const temperatureInput = prompt("Введіть температуру в градусах Цельсія:");

  if (temperatureInput !== null && temperatureInput.trim() !== "") {
    const temperature = Number(temperatureInput);

    if (Number.isFinite(temperature)) {
      weather.temperature = temperature;
      console.log(
        weather.isBelowFreezing()
          ? "Температура нижче 0 градусів Цельсія"
          : "Температура вище або дорівнює 0 градусів Цельсія"
      );
    } else {
      console.log("Введіть коректне число температури.");
    }
  }
}

const user = {
  name: "Олена",
  email: "olena@example.com",
  password: "examplePassword",
  login(email, password) {
    return this.email === email && this.password === password;
  },
};

if (typeof prompt === "function") {
  const emailInput = prompt("Введіть email:");
  const passwordInput = prompt("Введіть пароль:");

  if (emailInput !== null && passwordInput !== null) {
    console.log(
      user.login(emailInput, passwordInput)
        ? "Вхід успішний"
        : "Неправильний email або пароль"
    );
  }
}

const movie = {
  title: "Інтерстеллар",
  director: "Крістофер Нолан",
  year: 2014,
  rating: 8.7,
  isHighlyRated() {
    return this.rating > 8;
  },
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log("Рейтинг вище 8:", movie.isHighlyRated());