//global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//local variable
function Add_numbers_1() {
    var Y = 10;
    document.write(20 + Y);
}
function Add_numbers_2() {
    document.write(X + 100);    
    }
Add_numbers_1();
Add_numbers_2();    

//console method
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}

//IF Statement
function get_Date() {
    if (new Date() .getHours() < 24) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Else Statement
function get_Greeting() {
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
    document.getElementById("demo").innerHTML = greeting;
    }
}

//Else If Statement
function Time_function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}