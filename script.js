// 1. skapa div som displayar ord från en array

// array innehållande ord för typewriter

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
    "Kiwi",
    "Cucumber",
    "Yellow Onion",
    "Red Onion",
    "Garlic",
    "Carrot",
    "Red Cabbage",
    "White Cabbage",
    "Radish",
    "Eggplant",
    "Mushroom",
    "Artichoke",
    "Corn",
    "Broccoli",
    "Cauliflower",
    "Celery",
    "Red Chili",
    "Green Chili",
    "Sweet Potato",
    "Asparagus",
    "Pumpkin",
    "Fennel",
    "Spring Onion",
    "Turnip",
    "Lettuce"
]

// display orden från arrayen, nytt displaysätt nedan

// document.querySelector(".base").innerHTML = words.join(" ");

// displaya varje enskilt ord i en span

for (let i = 0; i < words.length; i++) {
    var newSpan = document.createElement("span")
    document.querySelector(".base").appendChild(newSpan);
    newSpan.classList.add(`a${i}`);
    newSpan.innerHTML = words[i];
}

// press enter för button

// let enter = document.querySelector("#txt");
// enter.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.querySelector("#sendInput").click();
//     }
// });

document.querySelector("#txtHolder").addEventListener('submit', (e) => {
    e.preventDefault();
    sendSubmit();
});

// grön och rödmarkera vid rätt och felskrivning

let i = 0;

function sendSubmit () {
    let txtHolder = document.querySelector("#txt").value;
    console.log(txtHolder);
    if (txtHolder == words[i]) {
        document.querySelector(`.a${i}`).style.color = "green";
        // newSpan.classList.add("correctAns"); //alternativ lösning för styling
        i++;
        document.querySelector("#txtHolder").reset();
        // lägg till clear/reset här när det är rätt
    } else {
        document.querySelector(`.a${i}`).style.color = "red";
    }
}