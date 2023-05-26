let num1 = 10;
let num2 = 20;

let name = 'Osman';

console.log(typeof 10);
console.log(typeof'Osman');

console.log(num1+num2);
console.log(num1>num2 && num2>num1);

let addNumbers = (num1,num2)=>{

    return num1+num2;
}


let addNumbers1 = (num1,num2)=>num1+num2;
console.log(addNumbers1(num1,num2));

function addNumbers2(num1,num2){
    
    return num1+num2;
}

console.log(addNumbers2(num1,num2));

let maxNum = Math.max(num1,num2);
console.log(maxNum);

if(num1>num2){
    console.log('correct');
}else{

    console.log('false');
}


const person ={

    firstName : "Jon",
    lastName : "Snow",
    age : 30

}

console.log(person);

console.log(person instanceof Array);

console.log(person.firstName);
function runPerson({firstName,lastName,age}){

    console.log('Fullname is ' + firstName + ' ' + lastName);
}

runPerson(person);


for (let each in person) {

    console.log('key name is '+  each);
    console.log(person[each]);
    
}

/*
let {firstName,lastName,age}= person;

console.log(firstName);
console.log(age);
*/

let numbers = [4,9,81,16,25 ];
numbers.push(60);
console.log('pushed one' + numbers);


let[a,b,c,d,e]=numbers;

console.log('Destruction first item ' + a);


console.log(numbers);

let newArr = numbers.map(Math.sqrt);

console.log(newArr);

let filteredNums = numbers.filter(abc=>abc<50);

console.log(filteredNums);


