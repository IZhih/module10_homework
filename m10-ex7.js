// Задание 7
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее

let array = ["f", "-", NaN, null, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let array = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

let countOdd = 0; // счётчик нечётных
let countEven = 0; // счётчик чётных
let countOthers = 0; // счётчик всех остальных элементов массива

array.forEach((element) => {
  console.log(typeof element);
  if (typeof element == "number") {
    if (element % 2 === 1) {
      countOdd++;
    } else {
      countEven++;
    }
  } else {
    countOthers++;
  }
});

console.log("В массиве нечётных элементов: " + countOdd);
console.log("В массиве чётных элементов: " + countEven);
console.log("В массиве прочих элементов: " + countOthers);
