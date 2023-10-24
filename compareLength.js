const obj1 = {name:"person 1",age:5}
const obj2 = {age:5, name:"person 1"}
// console.log(obj1.age)

//console.log(obj1 == obj2);
let key1 = Object.keys(obj1);
let key2 = Object.keys(obj2);

if(key1.length == key2.length)
   {
   console.log("Lengths are same")  
   }

else
{
   console.log("Lengths are not same")
}
