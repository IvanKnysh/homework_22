/**
 * Створити масив, довжину та елементи якого задає користувач.
 */
const arrayLength = +prompt("Введіть довжину массиву");
const arr = [];

if (!isNaN(arrayLength)) {
	for (let i = 1; i <= arrayLength; i++) {
		arr.push(prompt("Введіть елемент масиву " + i));
	}
}
console.log(arr);

/**
 * Відсортувати масив за зростанням.
 */
arr.sort((a, b) => a - b);
console.log(arr);

/**
 * Видалити елементи з масиву з 2 по 4 (включно!).
 */
arr.splice(1, 3);
console.log(arr);
