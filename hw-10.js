function countItems(array, condition) {
  let count = 0;

  for (const element of array) {
    if (condition(element)) {
      count += 1;
    }
  }

  return count;
}

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Ділення на нуль неможливе");
  }

  return a / b;
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));

try {
  console.log(calculate(10, 0, divide));
} catch (error) {
  console.error(error.message);
}

function repeatMessage(times, messageCreator) {
  const messages = [];

  for (let i = 0; i < times; i += 1) {
    messages.push(messageCreator(i));
  }

  return messages;
}

console.log(
  "Повідомлення:",
  repeatMessage(3, (index) => `Повідомлення №${index + 1}`)
);
console.log(
  "Зворотний відлік:",
  repeatMessage(3, (index) => `Залишилось: ${3 - index}`)
);

function processMovies(movies, action) {
  for (let index = 0; index < movies.length; index += 1) {
    action(movies[index], index);
  }
}

const movies = [
  { title: "Інтерстеллар", year: 2014, rating: 8.7 },
  { title: "Початок", year: 2010, rating: 8.8 },
  { title: "Матриця", year: 1999, rating: 8.7 },
];

const showMovieTitles = (movie, index) => {
  console.log(`${index + 1}. ${movie.title}`);
};
const showMovieYears = (movie, index) => {
  console.log(`${index + 1}. ${movie.title} — ${movie.year} рік`);
};
const showMovieRatings = (movie, index) => {
  console.log(`${index + 1}. ${movie.title} — рейтинг ${movie.rating}`);
};

console.log("Назви фільмів:");
processMovies(movies, showMovieTitles);
console.log("Роки виходу:");
processMovies(movies, showMovieYears);
console.log("Рейтинги:");
processMovies(movies, showMovieRatings);