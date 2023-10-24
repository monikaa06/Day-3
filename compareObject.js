const obj1 = {name:"person 1",age:5}
const obj2 = {age:4, name:"person 1"}

//console.log(obj1 == obj2);
let key1 = Object.keys(obj1);
let key2 = Object.keys(obj2);

let flag = true

if(key1.length == key2.length){

    for(let val in obj1){

        if(obj1[val] != obj2[val])
        {
            flag = false;
        }
        
    }
        
}

else
{
    console.log("length are not same")
}

if(flag){
    console.log("objects are same")
}
else{
    console.log("objects are not same")
}


//////////////////////////////////


// const obj1 = {name:"person 1",age:4}
// const obj2 = {age:5, name:"person 1"}

// let key1 = Object.keys(obj1);
// let key2 = Object.keys(obj2);

// if(key1.length == key2.length){

//     for(let key in obj1){

//      if(obj1[key] != obj2[key])
//      {
//      console.log("not same")
//      }
//      else{
//      console.log("same")
//      }
      
//     }
// }
// else{
//     console.log("objects are not same")
// }