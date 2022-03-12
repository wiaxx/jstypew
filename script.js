const words = [
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

// press space för button

// document.querySelector("#txt").addEventListener('keypress', function(e) {
//     if (e.keyCode === 32) {
//         sendSubmit();
//         console.log("work");
//     }
// });

// grön och rödmarkera vid rätt och felskrivning
let i = 0;
let misspelled = 0;
let correct = 0;

function sendSubmit () {
    let txtHolder = document.querySelector("#txt").value;
    console.log(txtHolder);
    if (txtHolder == words[i]) {
        document.querySelector(`.a${i}`).style.color = "green";
        // newSpan.classList.add("correctAns"); //alternativ lösning för styling
        i++;
        correct++;
        document.querySelector(".right").innerHTML = "Correct words: " + correct;
        document.querySelector("#txtHolder").reset();
    } else {
        document.querySelector(`.a${i}`).style.color = "red";
        misspelled++;
        document.querySelector(".wrong").innerHTML = "Misspelled words: " + misspelled
    }
}

// one minute count down timer
let seconds = 60;
let timer;

function startTimer() {
    if (seconds < 60) {
        document.querySelector(".timer").innerHTML = "Tid kvar: " + seconds +"s";
    }
        if (seconds > 0) {
            seconds--;
        } else {
            clearInterval(timer);
            document.querySelector(".stat").innerHTML = "WPN " + correct;
            alert("Times up!");
        }
}

document.querySelector("#txt").onkeypress = function() {
    if (!timer) {
        timer = window.setInterval(function() {
            startTimer();
        }, 1000);
    }
}

document.querySelector(".timer").innerHTML = "Timer: 1 min"