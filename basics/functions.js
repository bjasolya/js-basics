//functions==>code ko package mein bind krna
/*console.log("b")
console.log("h")
console.log("a")
console.log("v")
console.log("n")
console.log("a")
*/   //complex way

//making function
function myname(){
    console.log("b")
console.log("h")
console.log("a")
console.log("v")
console.log("n")
console.log("a")
}
//execution
myname()

/*function addnum(num1,num2)
{
 console.log(num1+num2)
}
const result=addnum(2,4)
//console.log(result)==>this is not done because type of return will be undefined
*/


function addnum(num1,num2)
{
 let result=num1+num2
 return result;
}
 result=addnum(2,5)
 //console.log(typeof(result)) //print result

 function loginusermsg(username="siri")
 {
    return`${username} just logged in`
 }
 //console.log(loginusermsg())
 console.log(loginusermsg("bhavna")) //print 
 //console.log(loginusermsg()) //will return undefined


 //if(undefined) , if("") is considered as false values

 function calculatecartprice(val1,val2, ...num1) //...(rest operator)
 {

return num1
 }
 console.log(calculatecartprice(300,400,500,600)) //300=val1 and 400=val2 rest value will get executed


 
 //create object to pass in function
 const me={
    name:"bhavna",
    id:31
 } 

 function handleobject(object){
    console.log(`username is ${object.name} and id is ${object.id}`)
 }

 console.log(handleobject(me))
 handleobject({      //better to pass object like this
    name:"bhavna",
    id:4
 })

 //create array
 const myarr=[200,400,600]
 //now create function which return value of array

 function array(getarray){
    return getarray[1]
 }
 console.log(array(myarr))
 