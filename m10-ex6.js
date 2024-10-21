// Задание 6
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let array = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

let isEqual = false;
let notEqualCount = 0;

for (let i = 1; i < array.length; i++) {
  if (array[0] != array[i]) {
    notEqualCount++;
  }
}

if (notEqualCount == 0) {
  isEqual = true;
}

console.log(isEqual);
