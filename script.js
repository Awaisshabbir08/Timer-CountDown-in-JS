"use strict";
// var name = "awais";
// console.log(name);

// 1):

// differe between var and let 
// block scope vs function scope 
// we cannot change let value again defining let the same key
let firstName = "awais";
 firstName = "shabbir"
console.log(firstName);

// 2):
// cannot change constant value
const pi = 3.14;
// pi = 2.14;
console.log(pi); 

// 3):
// find index of string 
// find length of string 
// find last index of string 
let lastName = "shabbir";
console.log(lastName[0]);
console.log(lastName.length);
console.log(lastName[lastName.length-2]);


// 4):

// trim 
// toUpperCase
// toLowerCase
// slice

let model = "awais";
console.log(model.length);
// trim gives the new string so we can store same var or new 
model = model.trim();
// console.log(model.length);
// tpUppercase gives the new string so we can store same var or new 
model = model.toUpperCase();
console.log(model);
// tpLowercase gives the new string so we can store same var or new 
model = model.toLowerCase();
console.log(model);

// 5):

// slice method take two param one for starting index and second for ending 
    // if we pas only one param it start that number till end 
console.log(model.slice(0,2));
console.log(model.slice(1));

// 6):

// typeof is use for check datatype 
console.log(typeof model);

// 7):

// concate two stings with + sign 
let a  = firstName + " " +model;
console.log(a);

// 8):
// tamplate string 

let aboutMe = "my first name is  " + firstName + " and my last Name is " + model ;
    aboutMe = `my first name is ${model } and my last Name is ${firstName}`;
console.log(aboutMe);   

// 9):

// undefined is type when var declare but not assign any value to it 

// 10):

// null is null when not value but if you console null it will give you object which is bug in JS 

// 11):

let num =  9;
console.log(num);
console.log(Number.MAX_SAFE_INTEGER);
let sameNum = BigInt(4646847979797979797979797987);
let sameNum2 = 4646847979797979797979797987n;
console.log(sameNum);
console.log(sameNum2);
// Bigint cannot add with noraml int 
// console.log(num + sameNum); // cannot make this     

// 12):

// truthy and falsy values 
//  falsy values 
// false
// null
// ""
// undefined
// 0
let falsy = "";
if(falsy){
    console.log(falsy);
}else{
    console.log("kind a empty value");
}

// 13):

// ternary operator / conditional operator 

let age = 8;
let milk = age >= 5 ? "Coffee" : "Juice";
console.log(milk);


// 14):

// and or operatoro 
// if we want both condition true then we'll use && operator
// if we want one condition true from two or more we use || operator 

// 15):

// nested if else 

let winningNumber = 19;
// let guessNumber = +prompt('enter a number');

// if(winningNumber === guessNumber){
//     console.log('your guess is right');
// }else{
//     if(guessNumber < winningNumber){
//         console.log('too low !!');
//     }else{
//         console.log('too high !!');
//     }
// }

// 16): if elseif elseif else statment 
// 17): switch  statment 


// 18): while loop  statment 

    let i = 0;
    while(i<=4){
        console.log(i);
        i++;
    }   

// 19): for loop  statment 
    // var can access out of loop but let cannot be access out of loop 

    for (let a = 0; a <= 10; a++) {
        console.log(a);
    }


    // Arrays 
    // 20): 

    let fruits = ['apple','banana','orange'];
    console.log(fruits);
    
    // check typeof 

    console.log(Array.isArray(fruits));

    // Array Methods 
    // push 
    // fruits.push('grapes');
    // console.log(fruits);

    // pop 
     // its return the value from the last popped we can store it somewhere
    let poppedFruit = fruits.pop();
    console.log(poppedFruit);

    // same we can use shit and unshift add and remove value from array start 

    // 21):

    // primitive vs Reference types 

    let num1 = 8;
    let num2 = num1;
    console.log("num1 value",num1);
    console.log("num2 value",num2);
    num1++;
    console.log("num1 value",num1);
    console.log("num2 value",num2); 


    // let array1 = ['item1','item2','item3'];
    // let array2 = array1;
    // console.log("array1",array1);
    // console.log("array2",array2);
    // array1.push('item4');
    // console.log("array1",array1);
    // console.log("array2",array2);


    // 22):

    // clone array 
    // 1st method 
 let array1 = ['item1','item2','item3'];
//  add some extera as well 

    // let array2 = array1.slice(0).concat(['item4','item5']);

    // 2nd method 
//  add some extera as well 
let array2 = [].concat(array1,['item6','item7']);
    
    // 3rd method 
//  add some extera as well 
let onMorearray = ['item8','item9'];
let array3 = [...array1,...onMorearray];
let newArray = [..."123456789"];
    

console.log("_array1",array1);
console.log("_array2",array2);
console.log("_array3",array3);
console.log(newArray);

// 23): 

// const 

// the value const will not changed 
// but if you define array in const you can use array methods in const 

// 24): 
// for of loop
let arrayName = ['pineApple', 'Cherry', 'kivi'];
for(let fruit of arrayName){
    console.log('of loop...',fruit);
}

// for in loop 

for(let index in arrayName){
    console.log('index...',index);
    // it print index numbers if you want values the arrayName[index]
}

// 25) : most important topic 

// Array Destructing 

let arrayDes = ['value1','value2','value3', 'value4', 'value5'];
let [myvar1, ,myvar2 , ...myNewArray] = arrayDes;

console.log("arraydes1",myvar1);
console.log("arraydes2",myvar2);
console.log("myNewArray ",myNewArray);

// if dont have value in array and you define many variables the remaning variables undefined

// 26) : most important topic 

let key = "email";

let obj = {
    name : 'awais',
    age : 26,
    hobbies : ['entertainment','music','tourisam','football','games']
}
console.log(obj['age']);
obj.gender = "male";
console.log(obj);
obj[key]  = "awaisexecutive@gmail.com";
console.log(obj);
// 27) : most important topic 

//  difference between dot and bracket notaion in Object 

// [bracket]
// if you have word with space you can access it with bracket notaion 
// if you want to add new key val pair with space you can use bracket notaion 
// if you want to add a variable value as a key in object then you use bracket notaiion 


// . Notaion 
// get single word key with . notaiion 
// if you add value with . the word you use it would be key , you cant add variable value as a key with . notaion 


// 27) : most important topic 

// how to itrate objects 

// for in loop 
// Object.keys 

for(let key in obj){
    console.log(obj[key]);
    console.log(`${key} : ${obj[key]}`);
}

// 28): computed properties 

let key1 = 'objkey1';
let key2 = 'objkey2';

let value1 = 'myvalue1';
let value2 = 'myvalue2';

let newobj = {
    [key1] : value1,
    [key2] : value2
}

console.log(newobj);

// 29) : most important topic 

// spread operator in object 

let cloneobj1 = {
    key1: 'hi',
    key2: 'helo'
}
let cloneobj2 = {
    key3: 'hola',
    key4: 'yoooo'
}

let cloneobj = {... cloneobj1, ...cloneobj2}
console.log(cloneobj);

// 30) : most important topic 

// Object Destructring 
let  band = {
        bandName : 'neefex',
        famouSong : 'fight back'
}

let {bandName:var1, famouSong:var2} = band;

// change variable name with : and new name 
console.log(var1, var2);

// 31) : most important topic 

// Object inside array (JSON) 

let users = [
    {id : 1, name : 'awais', age : 26},
    {id : 2, name : 'ali', age : 26},
    {id : 3, name : 'moshin', age : 26},
]

let newUsers = [];

for (let i = 0; i < users.length; i++) {
    const element = users[i];
    let newobj = {};
    newobj.id = element.id;
    newobj.name = element.name;
    newobj.age = element.age;
    newUsers.push(newobj);
    console.log(element);
}   

console.log('new Users', newUsers);


// Object destructre 

let [{name}, user2, user3] = users;
console.log(user2,name);

// function declration  
function helo(){
    console.log('helo there');
}
helo();

// function expression  

let fun1 = function(){
    console.log('function expression');
}
fun1();
    // Arrow function 

let fun2 = ()=>{
    console.log('arrow function');
}
fun2();


// 32) : most important topic 

// Lexical Scope 

// if console var is not in function so it will look the parent 
// if its find it will print this is call lexical scop
function myapp(){
    const myvar = 'hleo';
    console.log(myvar);
    function myfun(){
        // const  myvar = 'helllo'; 
        console.log(myvar);
    }

    myfun();
}

myapp();


// 33) : most important topic

// block scope and function scope 
// let and const block scope but var is function or global scope 


// 34): Call back function 

function helo(){
    console.log('this is callback function...');
}
function fun(callback){
    console.log('my fun');
    callback();
}
fun(helo);

// 34): forEach method 

users.forEach(function(user){
    console.log(user.name);
});
// using arrow function if  you have one param u no need to use ()
users.forEach(user=>{
    console.log(user.name);
});

// 34): Map method 
// map method always return array 
// the callback of map must use return , not print the values 
const number = [1,2,3,4,5,6];

const square = function(number){
    return number * number;
}

const squareNum = number.map(square);

console.log(squareNum);

// 35): Filter method
// the callback of filter method return true or false 

const evenNumber = number.filter((number)=> {
    return number % 2 === 0 ;
});

console.log(evenNumber);

// 36): reduce method
// it would take the value the first time value of first param default first number or you can assing custom
// then every time plus with second param and assign it to first and new value add into it and so on ... 

const userCart = [
    {productId: 1, productName:'mobile',price:1200},
    {productId: 1, productName:'tv',price:1600},
    {productId: 1, productName:'laptop',price:3300},
];

let result  = userCart.reduce((totalPrice, CurrentProduct)=>{
        return totalPrice + CurrentProduct.price;
},0);

console.log(result);

// 37): sort method

let n = [2,4,1200,300];
n.sort();
console.log(n);

// simple sort will sort according to ASCII number \
// it will sort string abc fine mean sort according to abcdefg...
// accordin to ASCII value it will sort ABC first then abc.. 

n.sort((a,b) => {
    return a-b;
});
console.log(n);

let products = [
    {productId:1 , productN: 'p1', productPrice: 1200},
    {productId:2 , productN: 'p2', productPrice: 300},
    {productId:3 , productN: 'p3', productPrice: 200},
    {productId:4 , productN: 'p4', productPrice: 1000},
];

products.sort((a,b) => {
    return a.productPrice - b.productPrice;
});
console.log(products);

// 38): find method 

// find method will find value fromm an array 
let m = ['dog', 'cat', 'donkey', 'monkey'];
let ans = m.find((stirng) => {
    return stirng.length === 3;
});

console.log(ans);

// 39): every method 
let everrMethod =   products.every((cartPrice) => {
       return cartPrice.productPrice > 100;
    });

console.log(everrMethod);

// 40): fill method 

let createarray = new Array(10).fill(2);
console.log(createarray);
// we can also chnge value from a specific index to a speific index in it 

// 41): splice method 

// start , delete , insert  
// first argu start positon secnodn delelte and third one is inserting 
// delete item return a new array 
const itemArray = ['item1','item2'];
itemArray.splice(1, 0 , 'item3');
console.log('original',itemArray);
const deletedItem = itemArray.splice(1,1);
console.log('original',itemArray);
console.log('delete items',deletedItem);

// 42): Sets in js 

// no repeation in sets 
// no index-base access 
// order is not gurenteed
// we loop over set 

let set  = new Set([1,2,3,4]);
set.add(5);
set.add(['item 4', 'item5']);
set.add(['item 7', 'item6']);

console.log(set);

// 43): Maps method 

// Map is a similer to object
// in object  key value only sting or symbol But in Map it would be anything 
// loop over the Map 
// it will return array key value , so we can destructure using [] after let  


let mapObj = new Map();
    mapObj.set('firstName', 'Awais');
    mapObj.set('age', 24);
    mapObj.set(1,'one');
    console.log(mapObj);
    console.log(mapObj.get(1));

    // for(let key of mapObj.keys()){
    //     console.log(key);
    // };

    for(let [key, value] of mapObj){
        console.log(key,value);
    };

// we can store object array number as a key in Map 

let person ={
    'id' : 1,
    'name' : 'awais',
    // 'address': {'houseNumber': 33434}
}

let userInfo = new Map();
userInfo.set(person, {age: 9, gander:"male"});

console.log(userInfo);
console.log(userInfo.get(person).age);

// 44): Optional Chaning 

// it check if this address is in the person object if not the do nothing ( undefined ) 
// first ? will check person obj exist or not the address exist in it or not 
console.log(person?.address?.houseNumber);

// 45): methods most important topic
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
let manager = {
    firstName : 'awais',
    age : 24,
    about: personInfo
}
let manager1 = {
    firstName : 'shabbir',
    age : 55,
    about: personInfo
}
let manager2 = {
    firstName : 'bilal',
    age : 22,
    about: personInfo
}
manager2.about();

// 46): call, apply, bind, 

// call is use  to call method 
// call is use to call one function to many objects
  function about(hobby, musician){
    console.log(`user name is ${this.name} and age is ${this.age} `, hobby, musician);
}

let u1 = {
    'name' : 'awais',
    age :3,
    
}
let u2 = {
    'name' : 'shabbir',
    age :66,
}

// u1.about();

// now you can call method from u1 with call method in u2 
// if we leave call method blank here it will show undefined 
about.call(u1, 'music', 'NEFEEX');
// if we use apply here so function arug we will pass in array like as follows:

about.apply(u2,[ 'music', 'NEFEEX']);

// bind method will return a function then we call it anywhere 
const func = about.bind(u2,'music', 'NEFEEX');
func();

// 47): mistake 

// arrow function is not in object 
// arrow function get this from its surronding
// let say we have a method inside a object then the this of that method is window
// not object  
// to get the object value you need to use objectName.objectMethod.(bindMethod)



// 48): Short syntax for methods
// real life dynamic example  
// this is about how create multiple dynamic objects with a dynamic function 

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

function entities(firstName, lastName, email, age, address){
    // const entity = {};
    // const entity = Object.create(userMethods);
    const entity = Object.create(entities.prototype);
    entity.firstName = firstName;
    entity.lastName = lastName;
    entity.email = email;
    entity.age = age;
    entity.address = address;
    // entity.about = userMethods.about;    
    // entity.is18 = userMethods.is18;    

    return entity;
}

entities.prototype.about =  function(){
            return `${this.firstName} is ${this.age} years old`;
        };
entities.prototype.is18 =  function(){
            return this.age >= 18;
        };



const test1 = entities('awais','shabbir', 'awaisexecutive@gmail.com', 27, 'ali town lahore');
const test2 = entities('usman','sajid', 'usman@gmail.com', 21, 'ali town lahore');
const test3 = entities('ali','ahmd', 'ali@gmail.com', 45, 'ali town lahore');
console.log('test1',test1);
const is18 = test1.is18();
console.log(is18);
const test1Info = test1.about();
console.log(test1Info);

console.log(test3.about()); 


const obj1 = {
    key1 : 'value1',
    key2 : 'value2'
}

// const obj2 = {
//     key3 : 'value3',
// }

const obj2 = Object.create(obj1);
console.log(obj2);
console.log(obj2.key1);


// 49): 
// prototype 
// only function can provide prototype 

// prototype is just a object which is given  by function 

function world(){};
world.prototype.abc = 'abc';
world.prototype.sing= function(){
    console.log('lalllalal');
};
console.log(world.prototype);
console.log(world.prototype.sing());


// 50):
// new keywore 
//  as we create Object.create(functionName.prototype) for create an object and set and get values 
// so we can do same thing using this and making a function new keyword
// so just while call a function just add before it new keyword
// it is related to the example number 48

// it is called constructor function 
function userProfile(firstName, lastName, email, age, address){
    // const entity = {};
    // const entity = Object.create(userMethods);
    // const entity = Object.create(userProfile.prototype);

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;

    // return entity;
    // we dont need return it automaticaly return by using this keyword
}

userProfile.prototype.about =  function(){
            return `${this.firstName} is ${this.age} years old`;
        }; 
userProfile.prototype.is19 =  function(){
            return this.age >= 18;
        };

const test4 = new userProfile('awais','shabbir', 'awaisexecutive@gmail.com', 60, 'ali town lahore');
const test5 = new userProfile('usman','sajid', 'usman@gmail.com', 21, 'ali town lahore');
const test6 = new userProfile('ali','ahmd', 'ali@gmail.com', 90, 'ali town lahore');
console.log('test1',test4);
const is19 = test4.is19();
console.log(is19);
const test1InfoTest = test4.about();
console.log(test1InfoTest);

console.log(test6.about()); 



