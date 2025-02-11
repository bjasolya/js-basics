//objects can be declared in 2 ways: 1.literal 2.constructor
//singleton-> when object is declared as constructor

//const obj=new Object() //declaration of an object as constructor
//object literals

/*//symbol
const sym=Symbol("key1") //symbol declaration
const ob={                 //object declaration in literals
    name:"bhavna",
    "email id":"bhav@.com",
    [sym]:"key1", // syntax of using key as symbol
    age:21,
    location:"indore",
}

console.log(ob.name)
console.log(ob["name"])
console.log(ob["email id"]) //this cannot be access through ob.email id
console.log(typeof(ob.sym))

//change object values
ob.email="bhavna@chatgpt.com"
//Object.freeze(ob)  //to lock details
ob.email="bhav@gmail.com" //this will not execute as freeze is used
console.log(ob)

//functions
ob.greeting2=function(){
    console.log(`hello,${this.name}`)
}
console.log(ob.greeting2())
*/

/*const obj={
 
email:"bhavna@gmail.com",
fullname:{
    userfullname:{
        firstname:"bhavna",
lastname:"singh",  
  }
}

}
console.log(obj.fullname.userfullname.firstname)
*/
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign({},obj1,obj2) //assign()=>concatenation
console.log(obj3)                       //better to use {}
const obj4={...obj1, ...obj2} //spread for concatenation
console.log(obj4)



//values from database=>array of objects will be there 
const users=[ 
    {
        id:1,
        email:"b@gmail.com"
    },
    {
        id:2,
        email:"c@gmail.com"
    },
    {
        id:3,
        email:"d@gmail.com"
    },
]
console.log(users[1].id)
console.log(Object.keys(users))
console.log(Object.values(users))
console.log(users.hasOwnProperty('id'))