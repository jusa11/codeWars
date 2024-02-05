'use strict'
// 05.02.2023
const str = " Hello there thanks for trying my Kata"
const str2 = "    Hello     World   "

function generateHashtag(str) {
	let newStr = str.split(' ').filter(word => word !== '')
	newStr.forEach(el => {
		
		let up = el[0].toUpperCase()
		// console.log(el)	
	})

}

generateHashtag(str)

