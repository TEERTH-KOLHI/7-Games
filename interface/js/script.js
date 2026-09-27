// 🕹 Game Controls Data
const gameCommands = [
    { // Telepath
        keys: [
            { icon: "mouse", action: "Click buttons to select column" }
        ]
    },
    { // DoubleTake
        keys: [
            { icon: "mouse", action: "Click cards to flip and match" }
        ]
    },
    { // LabyrinthX
        keys: [
            { icon: "arrow-up", action: "Move Up (or W)" },
            { icon: "arrow-down", action: "Move Down (or S)" },
            { icon: "arrow-left", action: "Move Left (or A)" },
            { icon: "arrow-right", action: "Move Right (or D)" }
        ]
    },
    { // DeepKnight
        keys: [
            { icon: "mouse", action: "Drag and drop chess pieces" }
        ]
    },
    { // OrbitMan
        keys: [
            { key: "Space", action: "Pause / Resume" },
            { icon: "arrow-up", action: "Move Up" },
            { icon: "arrow-down", action: "Move Down" },
            { icon: "arrow-left", action: "Move Left" },
            { icon: "arrow-right", action: "Move Right" }
        ]
    },
    { // HyperDrive 3D
        keys: [
            { key: "C", action: "Start / Insert Coin" },
            { key: "M", action: "Mute / Unmute Audio" },
            { icon: "arrow-left", action: "Steer Left" },
            { icon: "arrow-right", action: "Steer Right" },
            { icon: "arrow-up", action: "Accelerate" },
            { icon: "arrow-down", action: "Brake" }
        ]
    },
    { // OmniQuiz
        keys: [
            { icon: "mouse", action: "Select answers and navigate" }
        ]
    },
];

// 📌 Fonction pour ouvrir la popup
function openPopup(index) {
    if (index < 0 || index >= gamesData.length) {
        console.error("Invalid popup index.");
        return;
    }

    const popupContainer = document.getElementById("popup-container");
    const popupImage = document.getElementById("popup-image");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const popupCreator = document.getElementById("popup-creator");
    popupCreator.innerHTML = `Made by <a href="${gamesData[index].creatorLink}" target="_blank" class="creator-link">${gamesData[index].creator}</a>`;
    const playGameBtn = document.getElementById("play-game-btn");
    const commandsTable = document.getElementById("popup-commands").querySelector("tbody");
    // Remplissage des infos du jeu
    popupImage.src = gamesData[index].image;
    popupTitle.textContent = gamesData[index].title;
    popupDescription.textContent = gamesData[index].description;
    popupImage.style.borderRadius = "15px";
    playGameBtn.onclick = () => openGame(index);

    // Nettoyage du tableau des commandes
    commandsTable.innerHTML = "";
    gameCommands[index].keys.forEach(cmd => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                ${cmd.icon 
                    ? `<i data-lucide="${cmd.icon}"></i>` 
                    : `<strong class="key-box">${cmd.key}</strong>`}
            </td>
            <td>${cmd.action}</td>
        `;
        commandsTable.appendChild(row);
    });

    // 🔄 Recharge les icônes Lucide après l’ajout dynamique
    lucide.createIcons();

    popupContainer.style.display = "flex";
}

// 📌 Function to close the popup
function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}

// 📌 Function to redirect to games page with game index anchor
function redirectToJeux(index) {
    window.location.href = `jeux.html?game=${index}#popup-container`;
}

// 🔄 Check if redirect parameter exists to open popup automatically
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("game")) {
        const gameIndex = parseInt(urlParams.get("game"));
        if (!isNaN(gameIndex)) {
            openPopup(gameIndex);
        }
    }
});

// 🚀 Close popup when clicking outside of it
window.onclick = function (event) {
    const popupContainer = document.getElementById("popup-container");
    if (event.target === popupContainer) {
        closePopup();
    }
};

// ~~~~🎠 Carrousel avec Swiper.js~~~~
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 }
    }
});

// ~~~~🏆 Menu Burger Responsive~~~~
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-toggle i');

    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        menuIcon.setAttribute('data-lucide', 'menu');
    }

    lucide.createIcons();
}

// ~~~~~~🕹 Games Registry Data~~~~~~
const gamesData = [
    {
        title: "Telepath",
        image: "images/legilimens.png",
        description: "A mathematical mentalism trick that reads your mind and reveals your card!",
        link: "../Game/Telepath/index.html",
        creator: "Prashant",
        creatorLink: "https://github.com/Praashoo7"
    },
    {
        title: "DoubleTake",
        image: "images/memorycard.png",
        description: "Test your memory and concentration by finding identical pairs.",
        link: "../Game/DoubleTake/index.html",
        creator: "Talha",
        creatorLink: "https://github.com/he-is-talha"
    },
    {
        title: "LabyrinthX",
        image: "images/labyquest.png",
        description: "Navigate and solve procedurally generated random mazes.",
        link: "../Game/LabyrinthX/index.html",
        creator: "Yilmazer",
        creatorLink: "https://codepen.io/Abdullah-Yilmazer"
    },
    {
        title: "DeepKnight",
        image: "images/aichess.png",
        description: "Challenge an intelligent chess engine with dynamic bot modes.",
        link: "../Game/DeepKnight/index.html",
        creator: "jak_e",
        creatorLink: "https://codepen.io/jak_e"
    },
    {
        title: "OrbitMan",
        image: "images/pacman.png",
        description: "Evade the ghosts and consume every power orb on the grid.",
        link: "../Game/OrbitMan/index.html",
        creator: "mumuy",
        creatorLink: "https://github.com/mumuy"
    },
    {
        title: "HyperDrive 3D",
        image: "images/speedyverse.png",
        description: "High-octane pseudo-3D racer with oncoming traffic to evade.",
        link: "../Game/HyperDrive3D/index.html",
        creator: "KodeMeister",
        creatorLink: "https://github.com/KodeMeister-YT"
    },
    {
        title: "OmniQuiz",
        image: "images/quiz.png",
        description: "Test your knowledge with dynamic trivia and interactive questions!",
        link: "../Game/OmniQuiz/QCM_JavaScript.html",
        creator: "Gamely",
        creatorLink: "#"
    }
    
];

// 🔄 Vérifie s'il y a un paramètre "game" dans l'URL
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const gameIndex = params.get("game");

    if (gameIndex !== null) {
        openPopup(parseInt(gameIndex));
    }
});

// Chargement des icônes au démarrage
document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons();
});

// 🎭 Initialisation AOS.js pour les animations
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800,
        easing: "ease-out-quart",
        once: true 
    });
});

// 📌 Function to open the game popup
function openGame(index) {
    const gamePopup = document.getElementById("game-popup");
    const gameIframe = document.getElementById("game-iframe");
    const popupContainer = document.getElementById("popup-container"); 

    // Verify valid index
    if (index < 0 || index >= gamesData.length) {
        console.error("Invalid game index.");
        return;
    }

    // Fade out preview modal
    popupContainer.style.animation = "fadeOutScale 0.4s ease forwards";
    setTimeout(() => {
        popupContainer.style.display = "none";
        popupContainer.style.animation = "";
    }, 400);

    // Load game URL in iframe
    gameIframe.src = gamesData[index].link;

    // Display fullscreen modal with animation
    gamePopup.style.display = "flex";
    gamePopup.style.animation = "fadeInScale 0.4s ease forwards";

    setTimeout(() => {
        gamePopup.classList.add("visible");
    }, 50);

    lucide.createIcons();
}

// 📌 Close modal when clicking outside
document.addEventListener("click", function (event) {
    const gamePopup = document.getElementById("game-popup");
    if (event.target === gamePopup) {
        closeGamePopup();
    }
});

// 📌 Function to close the game modal
function closeGamePopup() {
    const gamePopup = document.getElementById("game-popup");
    const gameIframe = document.getElementById("game-iframe");

    gameIframe.src = "";
    gamePopup.style.display = "none";

    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

// 📌 Toggle fullscreen mode
function toggleFullscreen() {
    const gameIframe = document.getElementById("game-iframe");

    if (!document.fullscreenElement) {
        gameIframe.requestFullscreen().catch(err => {
            console.error(`Error activating fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// 📌 Function to reload game in iframe
function reloadGame() {
    const gameIframe = document.getElementById("game-iframe");

    if (gameIframe.src) {
        gameIframe.src = gameIframe.src;
    }
}

// 📌 Bind launch button with popup
document.querySelectorAll(".play-game-btn").forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation();
        openGame(index);
    });
});

// ~~~~~~Carrousel about.html~~~~~~
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".carousel-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    // 🖱️ Effet Drag & Drop pour scroller horizontalement avec la souris
    if (slider) {
        slider.addEventListener("mousedown", (e) => {
            isDown = true;
            slider.classList.add("grabbing");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("grabbing");
        });

        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("grabbing");
        });

        slider.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // 🛠️ Fonction pour ajuster la hauteur du carrousel
    function adjustCarouselHeight() {
        let activeSlide = document.querySelector(".presentation-carousel .swiper-slide-active");
        let carousel = document.querySelector(".presentation-carousel");
        if (activeSlide && carousel) {
            // Si la slide contient un élément avec la classe "table-container", on utilise sa hauteur
            let content = activeSlide.querySelector(".table-container") || activeSlide;
            let newHeight = content.scrollHeight + 120; // On ajoute un peu d'espace (ultra important)
            gsap.to(carousel, { height: newHeight, duration: 0.5, ease: "power2.inOut" });
        }
    }    
    
    // 🎠 Initialisation unique de Swiper.js
    var swiper = new Swiper(".presentation-carousel", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "slide",
        grabCursor: true,
        centeredSlides: true,
        speed: 600,
        on: {
            init: function () {
                setTimeout(adjustCarouselHeight, 100);
            },
            slideChangeTransitionEnd: function () {
                adjustCarouselHeight();
            }
        }
    });

    // 🔄 Vérification après chargement complet
    window.addEventListener("load", () => {
        adjustCarouselHeight();
        setTimeout(adjustCarouselHeight, 200);
    });

    // 🛠️ Empêcher le drag-scroll pendant l'utilisation des flèches
    document.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(button => {
        button.addEventListener('click', () => {
            isDown = false;
        });
    });
});
