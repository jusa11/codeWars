'use strict'
// 04.02.2023
const arr = [1,2,0,1,0,1,0,3,0,1]

function moveZeros(arr) {
	arr.forEach(el => {
		if (el === 0) {
			arr.push(el)
			arr.splice(arr.indexOf(el), 1)
		}
	})
	return arr
 }

 moveZeros(arr)