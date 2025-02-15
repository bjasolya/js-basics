
//child function can access the variable of parent function

/*function one()
{
    const username="bhavna"
    function two()
    {
        const website="youtube"
        console.log(username);
        console.log(website);  //two can access the variables of one
    }
    
    two();
}
one();
*/
if(true)
{
    const username="bhavna"
    if(username=="bhavna"){
        const website="youtube";
        console.log(username+website);
    }
    //console.log(website) //will throw error as it is out of scope
}
//console.log(username) //will throw error as it is out of scope
    

//+++++ interesting++++++

console.log(addone(5))
function addone(num)
{
    return num+1
} 


//declare function in different way (function hoisting)

console.log(addtwo(5))   //this will throw error beacuse it cannot be accesses befpre initialization
const addtwo=function(num)
{
return num+2;
}
