// =====================
// LEE BRICE PHRASE GENERATOR
// =====================

// Step 1 — Word banks
let verbs = ["Kiss", "Drink", "Drive", "Shit", "Fuck", "Hunt", "Not", "Wear", "Feed", "Watch"];
let nouns = ["Ass", "Beer", "Boots", "Boys", "Cock", "Deer", "Dog", "Erections", "Fish", "Games", "Gay", "Grass", "Killed", "Men", "poop", "Truck"];

// Step 2 — Random item picker
function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Step 3 — Phrase builder
function generatePhrase() {
    let randomVerb = getRandomItem(verbs);
    let randomNoun = getRandomItem(nouns);
    return { verb: randomVerb, noun: randomNoun };
}

// Step 4 — Grab HTML elements
let phraseDisplay = document.getElementById("phrase");
let button = document.getElementById("generateBtn");

// Step 5 — Button click handler
button.onclick = function() {
    let phrase = generatePhrase();

    phraseDisplay.textContent = phrase.verb + " my " + phrase.noun;

    let verbSound = new Audio("Verbs/" + phrase.verb + ".wav");
    let mySound = new Audio("my.wav");
    let nounSound = new Audio("Nouns/" + phrase.noun + ".wav");

    verbSound.play();
    verbSound.onended = function() {
        setTimeout(function() {
            mySound.play();
            mySound.onended = function() {
                setTimeout(function() {
                    nounSound.play();
                }, 50);
            }
        }, 50);
    }
}
