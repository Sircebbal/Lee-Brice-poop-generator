// =====================
// LEE BRICE PHRASE GENERATOR
// =====================

// Step 1 — Word banks
// Two arrays holding the raw material for our phrases
let verbs = ["Kiss", "Drink", "Drive", "Shit", "Fuck", "Hunt", "Not", "Wear", "Feed", "Watch"];
let nouns = ["Ass", "Beer", "Boots", "Boys", "Cock", "Deer", "Dog", "Erections", "Fish", "Games", "Gay", "Grass", "Killed", "Men", "poop", "Truck"];

// Step 2 — Random item picker
// Takes any array, generates a random valid index, returns the item at that index
function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Step 3 — Phrase builder
// Returns an object with a random verb and noun so both can be used independently
function generatePhrase() {
    let randomVerb = getRandomItem(verbs);
    let randomNoun = getRandomItem(nouns);
    return { verb: randomVerb, noun: randomNoun };
}

// Step 4 — Grab the HTML elements we need
let phraseDisplay = document.getElementById("phrase");
let button = document.getElementById("generateBtn");

// Step 5 — When the button is clicked:
// 1. Generate a phrase
// 2. Display it on screen
// 3. Play the matching audio files in sequence
button.onclick = function() {
    let phrase = generatePhrase();

    // Display the phrase
    phraseDisplay.textContent = phrase.verb + " my " + phrase.noun;

    // Create one audio object per word
    let verbSound = new Audio("Verbs/" + phrase.verb + ".wav");
    let mySound = new Audio("My.wav");
    let nounSound = new Audio("Nouns/" + phrase.noun + ".wav");

    // Chain them — each plays only after the previous one ends
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
