console.log(typeof isjsFun)

//undefined;
//NOTE whwn you have declare a variable but not assigned a value in it
let birthyear;

//NOTE null
//FIXME .When you stored a null value in a variable then check its datatype you will get "OBJECT" as its type
let LastName = null;

console.log(typeof Lastname);

//NOTE KEYWORDS USED TO DECLARE VARIABLES IN THE JS
//TODO - var , let , const

//NOTE - VAR
//NOTE in the case of var we can redeclare and reassign 
//the varaiable name and its value;
var department = 'CS' ;
department = 'mechanical' ;
console.log(department)

//NOTE - LET
//NOTE in the case of let we can reassign its value but cannot declare it
let college = 'TECHNO' ;
college = 'MNIT' ;
console.log(college) ;

//REDECLARATION of the varaiable name
// let college = 'GIT'

//NOTE - CONST
//NOTE in the case of the const we cannot reassing the value and not declare the variable name;

const emoji = '❌' ;
emoji = '🍦' ;
console.log(emoji) //we get the error here;

//NOTE == and ==
//NOTE - loose equality and strict equality;
//NOTE strict equality(===) always check the data types of the variable you are comparing always use strict equality operator whwn you comparing two varaiables;

let a = 5;
let b = '5';
console.log(a==b)//true
console.log(a===b);//false

//NOTE EXPRESSION AND STATEMENT
// Expression evaluates in a single value at last
let agee = 2024-2000
console.log(agee);

//NOTE
//Template String

const firstNamee = 'abc' ;
const lastNamee = 'xyz' ;
const college = 'Techno' ;

const fulldetails = 'my' + '' + 'name' + '' + 'is' + '' + firstNamee
console.log(fulldetails)
 //NOTE`Writing using template String ;
 const myDetails = my name is ${firstnamee} ;
 console.log(myDetails)

 //NOTE TRUTHY AND FALSY VALUES

 //NOTE TRUTHY = Those values which are not empty string '' and 0
 //NOTE FALSY values = 0 , null , undefined , NaN , '' , false
 //When we use falsy values in the if condition it automatically return false
 if(''){
    console.log('truthy value')
 }else{
    console.log('falsy value')
 }

 //NOTE types of function;
 //NOTE 1. Function Declaration;
 //NOTE Function Declarations are hoisted;
 //NOTE We can call the function declarations before decalaring it.

 const c = window.fullDetailss('abc','xyz')
console.log(c)

console.log(Window)
 function fullDetailss(firstname, lastName){
    return 'my name is $(firstName} ${lastName}'
}

 //NOTE 2. Function Expression;
 //NOTE If function expression is declare with using let and const we get reference error and in case of var we get type error 
 let sum = function(a,b){
    return a+b
 }
 console.log(sum)
 //NOTE 3. Arrow Function;
 //Types of Arrow Function:-
 //1.Single Line
 //2.Multiline
 
 let sum2 = (a,b) => a+b ; //Single Line Example
console.log(sum2(8,8))
 
//Multiline Example
 let sum3 = (a,b) => {
   return a+b;
 }
   







