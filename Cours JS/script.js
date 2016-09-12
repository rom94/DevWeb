/*//String
var name = "Romain";
console.log(name);

//Number
var x = 12;
var y = 25.63;
console.log(y);

//Variable number devient string
var xToString = x.toString();
console.log(xToString);

//Longueur du string
var nameLength = name.length;
console.log(nameLength);

//Conversion + méthode string
var xString = "12";
var xNumber = parseInt(xString);
console.log(xNumber);

var yString = "12.63";
var yNumber = parseFloat(yString);
console.log(yNumber);

var myString = "Hello Romain";
var position = myString.indexOf("Romain");
var replace = myString.replace("Romain", "John");
var string1 = "Hello";
var string2 = "Romain";
var newString = string1 + " " + string2;
console.log(newString);

//Boolean
var z = 5;
var myBoolean = (z === 5);
var myBoolean2 = (z == "5");
console.log(myBoolean2);

//Condition
if(condition){
    console.log("Exécutes ce code");
}

switch(variable){
    case 1:
        break;
    case 2:
        break;
    default:
}*/


/*//Boucles
var number = 0;
do{
    console.log(number);
    number++;
}
while(number > 0 && number < 3)
    
console.log("------------------------------------");
    
for(var x = 0; x < 5; x++){
    console.log(x);
}*/

/*//Fonction
function multiply(number1, number2){
    return number1 * number2;
}

var a = 5;
var b = 6;

var result = multiply(a,b);
console.log(result);*/

/*//Scope
function multiply(number1, number2){
    resultMultiply =  number1 * number2;
    return resultMultiply;
}

var a = 5;
var b = 6;

var result = multiply(a,b);
console.log(resultMultiply);*/

/*//Arrays
var fruits = ["Pomme", "Banane", "Orange", "Citron"];
console.log(fruits.length);

for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

fruits.push("Kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push("Kiwi");
var agrumes = fruits.slice(2,4);
console.log(agrumes);

var agrumes = fruits.slice(2);
console.log(agrumes);

var myArray = [[0,1], [5,7,8], [12, 118]];
console.log(myArray[2][1]);*/

//Objects
