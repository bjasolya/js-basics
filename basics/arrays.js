const arr=[1,2,3,4]
const arr1=new Array(5,6,7,8)
const arr2=["bhavna","shivi","chinnu","anushka"];
/*console.log(arr[2]);
arr.push(7) //insert element
console.log(arr)
arr.pop() //removes last element
console.log(arr)

arr.unshift(9) //add element at first
console.log(arr)
arr.shift()
console.log(arr) //removes element

console.log(arr.includes(8))
console.log(arr.indexOf(2))

const newarr=arr.join() //join->adds all elements into string
console.log(newarr)
console.log(typeof(newarr))*/

//slice,splice ==> splice makes changes to original array(it removes all the elements after splice from the original array)
/*console.log("A ",arr)
const myarr=arr.slice(1,3)
console.log(myarr)
console.log("b ",arr)
const myarr1=arr.splice(1,3)
console.log(myarr1)
console.log("c",arr)*/


//push or concatenate
arr.push(arr1)
console.log(arr)
const con=arr1.concat(arr2)
console.log(con)
  
//spread =>better way of concatenating
const spread_arr=[...arr1, ...arr2]
console.log(spread_arr)

//flat =>values automatically spread out
const arrr=[1,2,[3,4],5,6,[7,8,9]]
const newarrr=arrr.flat(Infinity)
console.log(newarrr)

//from()=>to make array from strings
console.log(Array.isArray("bhavna"))
console.log(Array.from("bhavna"))
console.log(Array.from({name: "bhavna"})) //returns empty braces as no key is provided

//of()=>returns an array from set of elements
const num1=40;
const num2=50;
const num3=60;
console.log(Array.of(num1,num2,num3))