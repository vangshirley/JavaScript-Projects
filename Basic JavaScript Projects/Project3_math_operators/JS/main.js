function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

    function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("More").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//turn positive into negative number 
function negation_Operator() {
    var x = 10;
    document.getElementById("negation").innerHTML = -x;
}

//increase and decrease number
    var X = 5;
    X++;
    document.write(X+"<br>");

    var X = 5.25; 
    X--;
    document.write(X+"<br>");

//popup with random numbers
    window.alert(Math.random());

    window.alert(Math.random() * 100);

//rounds number 
function round_Number() {
    Math.round(9.6);
    document.getElementById("round").innerHTML = Math.round(9.6);
}