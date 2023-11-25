let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
let playerNameInput = document.getElementById("player-name");
let playerChipsInput = document.getElementById("player-chips");
let inputContainer = document.querySelector(".input-container");

let player = {
    name: "",
    chips: 0,
};

function setPlayerInfo() {
    player.name = playerNameInput.value;
    player.chips = parseInt(playerChipsInput.value);

    playerEl.textContent = `${player.name}: $${player.chips}`;
}

let hasBlackJack = false;
let isAlive = false;
let message = "";

let cards = [];
let sum = 0;

function generateRandomNumberBetween1and13() {
    let randomNumber = 1 + Math.round(12 * Math.random());
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber >= 11) {
        return 10;
    } else {
        return randomNumber;
    }
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;

    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = `Sum: ${sum} `;
    playerEl.textContent = `${player.name}: $${player.chips}`;
}

function startGame() {
    if (!playerNameInput.value || !playerChipsInput.value) {
        alert(
            "Please enter your name and starting chips before starting the game."
        );
        return;
    }

    setPlayerInfo(); // Set player name and chips
    isAlive = true;
    hasBlackJack = false;
    cards = [];
    sum = 0;
    player.bet = 0;

    let firstCard = generateRandomNumberBetween1and13();
    let secondCard = generateRandomNumberBetween1and13();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();

    // Hide input elements after the game starts
    inputContainer.style.display = "none";
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = generateRandomNumberBetween1and13();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}
