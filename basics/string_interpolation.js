//string declaration

let name='bhavna'
let age='18'
let schoolname=new String("aps-hisar") /*string is treated as object,we get to know length of a string 
and string is presented in key value pairs(object)*/
console.log(schoolname)
console.log(schoolname[1])
console.log(schoolname.length)
console.log(schoolname.charAt(2))
console.log(schoolname.indexOf('a'))
const newstring=schoolname.substring(0,2)
console.log(newstring)
//use `` (back ticks)
console.log(`my name is ${name} and my age is ${age}`)

//to apply methods

console.log(`my name is ${name.toUpperCase()} and my age is ${age}`)

//string slicing
console.log(schoolname.substring(-3,3))

//string trim  => works on whitespaces and line terminators
let newstring1="   Bhavna  "
console.log(newstring1)
console.log(newstring1.trim())

//string replace
let upi="abc12@ybl"
newupi=upi.replace('12','')
console.log(newupi)
console.log(upi.includes('aps')) //tells whether a string is part or not

//convert string into array
console.log(schoolname.split("-"))
console.log(schoolname.endsWith('r')) //tells whether string ends with the correct alphabet or not