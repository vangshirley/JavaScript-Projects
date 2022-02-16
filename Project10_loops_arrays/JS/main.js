function Call_Loop() { //while app - execute code repeatedly
let text = "";
let i = 0;
while (i < 10) {
    text += "<br> The number is " + i;
    i++;
}
document.getElementById("Loop").innerHTML = text;
}

let text = "Hello World!"; //String length property - counts length of string
let length = text.length;
document.getElementById("demo").innerHTML = length;

var Animals = ["Tigers", "Lions", "Bears", "Pandas", "Monkeys", "Flamingos", "Sloths"];
var Content = "";
var Y;    
function for_Loop() {
    for (Y = 0; Y < Animals.length; Y++) {
    Content += Animals[Y] + "<br>";
    }
    document.getElementById("List_of_Animals").innerHTML = Content;
}

function array_Function() { //arrays and objects
    var Routine = [];
    Routine[0] = "stretch";
    Routine[1] = "warmup";
    Routine[2] = "drink water";
    document.getElementById("Array").innerHTML = "Before my workout, I " +
        Routine[2] + ".";
}

function constant_function() { //const keyword
    const Musical_Instrument = {type: "guitar", brand:"Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1500";
    Musical_Instrument.sale = "on sale"
    document.getElementById("Constant").innerHTML = " The " + 
        Musical_Instrument.type + " was " + Musical_Instrument.sale;
            
}

function Let_Keyword() {
let x = 10;
}
    let x = 2;
document.getElementById("let").innerHTML = x;

function myFunction(name) { //return statement
    return "Hello" + name;
}
document.getElementById("return").innerHTML = myFunction(" Shirley");

let laptop = { //object display type of data
    brand: "HP ",
    OS: "with Windows 11 Pro operating system,",
    display: "15.6 inch screen display and ",
    memory: "8 GB memory.",
    description() {
        return "Laptop description: " + this.brand + this.OS + this.display + this.memory;
        } 
};
document.getElementById("Laptop_Object").innerHTML = laptop.description();

function myBreak() { //break statement jumping out of loop
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>"; 
}

document.getElementById("display").innerHTML = text;
}

function myLine() { //continue statement breaking one iteration in loop and continues
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += " " + i + "<br>";
    }
    document.getElementById("cont").innerHTML = text;
}
