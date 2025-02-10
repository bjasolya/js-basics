/*const score=100;
console.log(score);
//console.log(typeof(score))


const balance= new Number(100)
console.log(balance)
console.log(balance.toString().length)

console.log(balance.toFixed(2))


const num2=1.154
console.log(num2.toPrecision(2))


const num3=1000000
console.log(num3.toLocaleString())

console.log(num3.toLocaleString("en-IN"))//according to indian system
*/


////++++++++++++MATHS+++++
console.log(Math.abs(-2)) //absolute fxn which converts negative number into positive one
console.log(Math.round(4.3)) //provides round off values
console.log(Math.ceil(3.2)) //provide upper value
console.log(Math.floor(3.2)) //provides lower value(round off to lower value)
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))

//random() function
console.log(Math.random())//always a value between 0 and 1
console.log(Math.random()*10) //can return value 0
console.log(Math.random()*10+1) //will not return 0 value

//use of random() when limit is set
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)