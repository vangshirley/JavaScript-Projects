function my_Dictionary() { //Objects and KVP
    var Animal = {
        Species:"Cat",
        Color:"Gray",
        Breed:"Siamese",
        Age:3,
        Sound:"Meow!"
};
delete Animal.Sound; //deletes sound and output
document.getElementById("Dictionary").innerHTML = Animal.Sound; //reveal answer to sound
}

