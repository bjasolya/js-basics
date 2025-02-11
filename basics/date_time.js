//date is an object 
let mydate=new Date();
//console.log(mydate);
//console.log(mydate.toString());
/*console.log(mydate.toDateString())

console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
let newdate=new Date("2025-2-14")
console.log(newdate.toLocaleString())
*/


//timestamp
let time= Date.now()   //time in date
console.log(time)  //return time in milliseconds
console.log(Math.floor(Date.now()/1000)) //time in seconds 
console.log(mydate.getTime()) 

//more methods
let newdate=new Date()
console.log(newdate.getMonth())
console.log(newdate.getDay())

//***most important */
console.log(newdate.toLocaleString('default',{
     weekday: "long",
     month:"long"
}))