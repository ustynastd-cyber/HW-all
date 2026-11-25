const user = {
  name: "Mango",
  age: 20,
  hobby: "HTML",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log("Кількість властивостей:", countProps(user));

function findBestEmployee(employees) {
  let bestEmployee = "";
  let highestTaskCount = -Infinity;

  for (const [name, taskCount] of Object.entries(employees)) {
    if (taskCount > highestTaskCount) {
      bestEmployee = name;
      highestTaskCount = taskCount;
    }
  }

  return bestEmployee;
}

const employees = {
  Ann: 29,
  David: 35,
  Helen: 1,
  Lorence: 99,
};

console.log("Найпродуктивніший працівник:", findBestEmployee(employees));

function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

const salaries = {
  Mango: 500,
  Poly: 750,
  Ajax: 600,
};

console.log("Загальна сума зарплат:", countTotalSalary(salaries));

function getAllPropValues(arr, prop) {
  const values = [];

  for (const item of arr) {
    const { [prop]: value } = item;
    if (value !== undefined) {
      values.push(value);
    }
  }

  return values;
}

const products = [
  { name: "рондо", price: 100, quantity: 3 },
  { name: "золотий вік", price: 200, quantity: 5 },
  { name: "троянда", price: 150, quantity: 2 },
];

console.log("Назви продуктів:", getAllPropValues(products, "name"));
console.log("Ціни продуктів:", getAllPropValues(products, "price"));

function calculateTotalPrice(allProdcuts, productName) {
  let totalPrice = 0;

  for (const product of allProdcuts) {
    const { name, price, quantity } = product;
    if (name === productName) {
      totalPrice += price * quantity;
    }
  }

  return totalPrice;
}

console.log("Вартість рондо:", calculateTotalPrice(products, "рондо"));
console.log(
  "Вартість золотого віку:",
  calculateTotalPrice(products, "золотий вік")
);