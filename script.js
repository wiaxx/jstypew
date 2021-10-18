// skapa div som displayar ord från en array

let words = [
    "Apple",
    "Watermelon",
    "Orange",
    "Pear",
    "Strawberry",
    "Grape",
    "Plum",
    "Mango",
    "Blueberry",
    "Papaya",
    "Apricot",
    "Mandarin",
    "Banana",
    "Grapefruit",
    "Lemon",
    "Lime",
    "Pineapple",
    "Jackfruit",
    "Melon",
    "Coconut",
    "Avocado",
    "Peach",
    "Kiwi"
]

document.querySelector(".base").innerHTML = words.join(" ");

let txtHolder = document.querySelector("#txt");




// function sendSubmit () {
//     let hold = document.querySelector("#txt").value;
//     console.log(hold);
// }

// function sendSubmit() {
//     var x = document.querySelector("#txt").value;
//     document.querySelector(".base").innerHTML = x;
// }

// document.querySelector("#txt").addEventListener("enter", hello());

// function hello() {
// console.log("vad som helst");
// } 