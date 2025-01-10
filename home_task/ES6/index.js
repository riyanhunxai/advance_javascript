// Destructuring assignments
const Array1 = ["Khan", "Sameer", "Sartaj"] // users 100 
// const [firstName , Lasname] =  Array1
// console.log(firstName);

const advanceJs = {
    firstName :  "Sameer",
    lastName : "Shan",
    address : {
        city: "gilgit",
        zipCode: 15100,
        
    }
}
// nested 
const { address: {city, zipCode}} = advanceJs
console.log(city, zipCode);
//JavaScript mein "nested" ka matlab hai ek structure ke andar 
//doosri similar ya related structure ko include karna

// Rest and spread operators ...
const [firstName , ...rest] =  Array1
console.log(firstName);
console.log(rest);


const Array2 =["Ali", "Sheraz"]
const combineArray = [...Array1, ...Array2]
console.log(combineArray);
// isArray() 
//true ya false ma jawan deta ha
if (Array.isArray(Array1) && Array.isArray(Array2)) {
    console.log("proceed!");
} else {

}

// Optional Chaining ?.
console.log(advanceJs?.address?.country ,"country not found!");
//Optional Chaining JavaScript mein ek operator hai (?.) jo nested 
//properties ya methods ko access karne ke liye use hota hai 
// Nullish Coalescing ??
console.log(advanceJs.address.country  ??  "country not found!");
//JavaScript mein ek operator hai jo do values ka comparison karta hai 
//aur pehli value ko tabhi return karta hai agar wo null ya undefined na ho. 

/*MODULES
1. export
2. import
3. export default
4. import default


const sum=(a,b)=>{
    return a+b;
}

const sub=(a,b)=>{
    return a-b;
}

const multiply=(a,b)=>{
    return a*b;
}


export {sum as add,sub, multiply};/
*/
function mapfunction(){
    array=["riyan","sameer","izhar","sameer"]
    
    function childarray(){
        return array.filter;
    }
}

console.log(mapfunction().childarray());
