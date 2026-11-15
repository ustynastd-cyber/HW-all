function logItems(array) {
  for (let index = 0; index < array.length; index += 1) {
    console.log(`${index + 1} - ${array[index]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.trim().split(/\s+/).filter(Boolean);
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is fun", 10));

function findLongestWord(string) {
  const words = string.trim().split(/\s+/).filter(Boolean);
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));

function formatString(string) {
  if (string.length <= 40) {
    return string;
  }

  return `${string.slice(0, 40)}...`;
}

console.log(formatString("This string is short."));
console.log(
  formatString(
    "This string is much longer than forty characters and should be truncated."
  )
);

function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return normalizedMessage.includes("spam") || normalizedMessage.includes("sale");
}

console.log(checkForSpam("Latest SALE!"));
console.log(checkForSpam("Have a nice day"));

let input;
const numbers = [];
let total = 0;

if (typeof prompt === "function") {
  while (true) {
    input = prompt("Введіть число");

    if (input === null) {
      break;
    }

    numbers.push(Number(input));
  }

  for (const number of numbers) {
    total += number;
  }

  if (numbers.length > 0) {
    console.log(`Загальна сума чисел дорівнює ${total}`);
  }
}

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
}

const logins = ["avocado", "orange", "kiwi"];
console.log(addLogin(logins, "mango"));
console.log(addLogin(logins, "kiwi"));
console.log(addLogin(logins, "ab"));