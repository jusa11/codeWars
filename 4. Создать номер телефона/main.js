'use strict'

// 04.02.2023
// мой вариант не совсем правильный
/* const numberPhone1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const numberPhone2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const numberPhone3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


function createPhoneNumber(numbers) {
	numbers.splice(0, 0, '(')
	numbers.splice(4, 0, ')')
	numbers.splice(5, 0, ' ')
	numbers.splice(9, 0, '-')
	return numbers.toString().replace(/\,/g, '')
}

console.log(createPhoneNumber(numberPhone1))
console.log(createPhoneNumber(numberPhone2))
console.log(createPhoneNumber(numberPhone3)) */

// вариант из решений codewars
const numberPhone1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const numberPhone2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const numberPhone3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let formatNumberPhone = '(xxx) xxx-xxxx'


function createPhoneNumber(numbers) {
	let format
	for (let i = 0; i < numbers.length; i++) {
		format = formatNumberPhone.replace('x', numbers[i])

	}
	return format
}

console.log(createPhoneNumber(numberPhone1))
console.log(createPhoneNumber(numberPhone2))
console.log(createPhoneNumber(numberPhone3))