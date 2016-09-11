//String
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
}