function full_Sentence() { //concatenate connecting string
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);//creates sentence
        document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function slice_Fruit() { //deletes everything but section
    var sentence = "This is a banana.";
    var section = sentence.slice(10,16);
document.getElementById("demo").innerHTML = section;
}

function slice_Uppercase() {
    var text = "Hello World!";
    var result = text.toUpperCase();
document.getElementById("upper").innerHTML = result;
}

function slice_Search() {
    var text = "Mr. Blue has a blue house";
    var position = text.search("has");
document.getElementById("blue").innerHTML = position;
}

function string_Method() {
    var X = 500;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 10195.3022987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function round_Method() { //toFixed() converts to fixed number rounding to nearest
    var X = 5.67890;
    document.getElementById("round").innerHTML = X.toFixed();
}

function value_Method() { //valueOf returns value of a string
    var text = "Shirley Vang";
    var result = text;
    document.getElementById("value").innerHTML = result;
}