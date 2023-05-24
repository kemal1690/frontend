let num1 = 10;
let num2 = 20;

let name = 'Ali'

/*
let addNumbers = (num1, num2) => {
         return num1 + num2; 
}
*/
let addNumbers1 = (num1, num2) => num1 + num2; 

console.log(addNumbers1(num1,num2));
//console.log(typeof 'Ali');
//console.log(typeof 10);

//console.log(num1+num2);
//console.log(num1>num2 || num2>num1);
let maxNum = Math.max(num1,num2);
//console.log(maxNum);

if(num2>num1){

    //console.log('Right');
}else{
    //console.log('wrong');
}

const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50};

console.log(person instanceof Object);


console.log(person.firstName);

let {firstName,lastName,age} = person;

console.log(firstName);
console.log(age);

function runPerson({firstName,lastName,age}){

    console.log('Full name is '+ firstName + ' ' + lastName);
    console.log(age);
}

console.log(`firstName is ${firstName} `); 

runPerson(person);

for (let eachKey in person){
    console.log("the key name " + eachKey);
    console.log(  person[eachKey] );//print the value
}

let numbers =[10,20,30,40,50];

let newArr = numbers.map(Math.sqrt)//square root of all numbers

console.log(newArr);

console.log(numbers);

let filteredNum = numbers.filter(each=>each<50);

console.log('Filtered num ' + filteredNum);

let[a,b,c,d,e] = numbers;

console.log(a);

numbers.push(60);
console.log(numbers);
console.log(numbers.length);

 


/*
for (let each of numbers  ){
    console.log(each);
}
*/
//numbers.forEach(each =>console.log(each));