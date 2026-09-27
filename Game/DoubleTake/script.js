const cards = document.querySelectorAll(".card");
const movesEl = document.getElementById("moves-count");
const matchEl = document.getElementById("match-count");
const winBanner = document.getElementById("win-banner");

let matched = 0;
let moves = 0;
let cardOne, cardTwo;
let disableDeck = false;

function updateStats() {
    if (movesEl) movesEl.innerText = moves;
    if (matchEl) matchEl.innerText = `${matched} / 8`;
}

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        moves++;
        updateStats();
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        updateStats();
        if(matched === 8) {
            if (winBanner) {
                winBanner.innerText = `✨ Félicitations ! Vous avez gagné en ${moves} coups ! ✨`;
                winBanner.style.display = "block";
            }
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    moves = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    updateStats();
    if (winBanner) winBanner.style.display = "none";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip", "shake");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});