document.write(typeof "Word"+"<br>");
document.write(typeof 3+"<br>");

trueorfalse=true
document.write(typeof trueorfalse+"<br>");

document.write("202" + 2+"<br><br>");    

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;    
}

function my_String() {
    document.getElementById("string").innerHTML = isNaN('This is a string');
}

function my_Number() {
    document.getElementById("007").innerHTML = isNaN('007');
}

function my_Infinity() {
    document.getElementById("infinity").innerHTML = 3E310;
}
//document.write(4E410+"<br>");

document.write(-3E310+"<br><br>"); 

document.write(10 > 2); //boolean true

document.write(10 < 2); //boolean false

console.log(2+2); //this displays 4 in console log
 
console.log(10< 2); //this displays false in console log

document.write(10 == 10); //this is equal to left side of symbol and will display true

document.write(3 == 11); //left is not equal to right and will dislay false

X = 10; //both data types equal in type and value
Y = 10; 
document.write(X === Y);

X = 3; //data type are not equal in type and value
Y = 10; 
document.write(X === Y);

X = 10; //different data type but same value
Y = "10"; 
document.write(X === Y);

Y = 10; //same dat but different value
Y = 3;
document.write(X === Y);

document.write(5 > 10 || 10 > 4); //OR operator displays true

document.write(5 > 10 || 10 > 20);

document.write(5 < 10 || 10 < 20);

document.write(5 > 2 && 10 > 4); // AND displays true

document.write(5 > 10 && 10 > 4); //AND displays false 

document.write(!(3 > 0 || -2 > 0)); //NOT displays false

