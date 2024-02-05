'use strict'
// Почему то не проходит не все проверки 


//  02.02.2024 - 04.02.2024
// Обнаружение панграммы

// Первый рабочий вариант
/* let pangram = 'The quick brown fox jumps over the lazy dog.'
let isNotPangram = 'This is not a pangram.'
let pangram2 = 'Cwm fjord bank glyphs vext quiz'

function isPangram(string) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";				// переменная с алфавитом
	let indexletter														// переменная для -1, т.е если indexOf() не найдет в строке букву
	string.toLowerCase().replace(/\s/g, '')					// переводим все буквы строки в нижний регистр, а также убираем все пробелы

	// перебираем все буквы алфавита и ищем их в строке
	for (let i = 0; i < alphabet.length; i++) {
		indexletter = string.indexOf((alphabet[i]))				// помещаем индекс буквы в переменную 

		// если indexletter будет -1, т.е нужной буквы из алфавита не будет в строке, то вернуть 'это не панграмма' и остановить цикл
		if (indexletter === -1) {
			return 'это не панграмма'
		}
	}
	return 'это панграмма'
}

console.log(isPangram(pangram))
console.log(isPangram(pangram2))
console.log(isPangram(isNotPangram)) */

// второй вариант, тоже рабочий
/* let pangram = 'The quick brown fox jumps over the lazy dog.'
let isNotPangram = 'This is not a pangram.'

function isPangram(string) {
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];				// переменная с алфавитом
	let indexletter														// переменная для -1, т.е если indexOf() не найдет в строке букву
	string.toLowerCase().replace(/\s/g, '')					// переводим все буквы строки в нижний регистр, а также убираем все пробелы

	alphabet.forEach(el => {
		indexletter = string.indexOf(el)
	});

	if (indexletter === -1) {
		return 'это не панграмма'
	}
	return 'это панграмма'
}

console.log(isPangram(pangram))
console.log(isPangram(isNotPangram))
 */


let pangram = 'The quick brown fox jumps over the lazy dog.'
let isNotPangram = 'This is not a pangram.'
let pangram2 = 'Cwm fjord bank glyphs vext quiz'
let pangram3 = "abcdefghijklmnopqrstuvwxyz"

function isPangram(string) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";				// переменная с алфавитом
	string = string.toLowerCase().replace(/\s/g, '')					// переводим все буквы строки в нижний регистр, а также убираем все пробелы (задал вопрос на codewars почему не проходит проверку, ответили, что toLowerCase возвращает новую строку)

	// перебираем все буквы алфавита и ищем их в строке
	for (let i = 0; i < alphabet.length; i++) {

		if (string.indexOf((alphabet[i])) === -1) {
			return 'это не панграмма'
		}
	}
	return 'это панграмма'
}

console.log(isPangram(pangram))
console.log(isPangram(pangram2))
console.log(isPangram(isNotPangram))
console.log(isPangram(pangram3))
