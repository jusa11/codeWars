'use strict'

// Фильтрация массива
let filterList = [1,2,'a','b']

console.log(filterList.filter(num => typeof num === 'number')) // мой вариант короче, но не такой, дана только функция и ее параметром явлется массив

function filter_list(l) {
	return l.filter(v => typeof v == 'number')
 }



