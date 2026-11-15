const items = ["HTML", "CSS", "JavaScript"];

let itemsString = "";
for (let index = 0; index < items.length; index += 1) {
  if (index > 0) {
    itemsString += ", ";
  }
  itemsString += items[index];
}
console.log("За допомогою for:", itemsString);

console.log("За допомогою join():", items.join(", "));

const cards = ["Зробити макет", "Написати стилі", "Перевірити сторінку"];
console.log("Початковий список карток:", cards);

cards.splice(1, 1);
console.log("Після видалення картки:", cards);

cards.splice(1, 0, "Додати адаптивність");
console.log("Після додавання картки:", cards);

cards.splice(0, 1, "Створити макет");
console.log("Після оновлення картки:", cards);