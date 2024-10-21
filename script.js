// Задание 8

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let cars = new Map([
  ["Lada", "Vesta"],
  ["Audi", "TT"],
  ["Mercedes", "Gelandewagen"],
  ["Volkswagen", "Passat"],
]);

for (let [key, value] of cars) {
  console.log("Ключ – " + key + ", значение – " + value);
}
