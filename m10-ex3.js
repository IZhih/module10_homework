// Задание 3
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

const string = "Hello";
let reversedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}

console.log(reversedString);
