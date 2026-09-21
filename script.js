/**
 * VIRTUAL BOUQUET - Final Edition
 */

// ==============================
// 1. CUSTOMIZE YOUR MESSAGES
// ==============================
const messageTitle = "You know what I like about you?";
const messageBody = "It’s not just one thing. Sometimes it’s the way you talk, sometimes the little things you do, and sometimes it’s simply the way you are without even trying.<br><br>You have this quiet way of making ordinary moments feel a little more beautiful. I hope you never change that. 🤍<br><br>And honestly… you’ve been staying on my mind a little too much lately. 😌<br>Not complaining though. 😂❤️<br><br>Anyway, this is a flower for you. 🌷 Just a little reminder that someone thinks you’re pretty special.";
const messageSignature = "";

// ==============================
// 2. DOM ELEMENTS
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    
    // Setup text
    document.getElementById("msg-title").innerHTML = messageTitle;
    document.getElementById("msg-body").innerHTML = messageBody;
    document.getElementById("msg-sign").innerHTML = messageSignature;

    const introScreen = document.getElementById("intro-screen");
    const btnOpenGift = document.getElementById("btn-open-gift");
    
    const scene = document.getElementById("scene");
    const cardContainer = document.getElementById("card-container");
    const controls = document.getElementById("controls");
    const musicBtn = document.getElementById("music-btn");
    const bgMusic = document.getElementById("bg-music");
    
    const petalsContainer = document.getElementById("petals");
    const dustContainer = document.getElementById("dust-particles");

    let isOpened = false;

    // ==============================
    // 3. INTERACTION (The Gift Reveal)
    // ==============================
    btnOpenGift.addEventListener("click", () => {
        if (isOpened) return; 
        isOpened = true;

        // 1. Hide Intro
        introScreen.classList.add("hidden");

        // 2. Add classes to trigger CSS transitions (Background brightens, scene fades in)
        document.body.classList.add("gift-opened");
        scene.classList.remove("hidden");
        controls.style.display = "block";

        // 3. Play Music
        playMusic();

        // 4. Start particles
        startPetals();
        startDust();

        // 5. Card will now wait for manual click on the new button.
    });

    const btnOpenCard = document.getElementById("btn-open-card");
    btnOpenCard.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the cardContainer click just in case
        cardContainer.classList.add("is-open");
        scene.classList.add("is-reading"); // Trigger CSS layout shift
    });

    // Music Toggle
    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) playMusic();
        else pauseMusic();
    });

    function playMusic() {
        bgMusic.play().then(() => {
            musicBtn.classList.add("playing");
        }).catch(() => {
            musicBtn.classList.remove("playing");
        });
    }

    function pauseMusic() {
        bgMusic.pause();
        musicBtn.classList.remove("playing");
    }

    // ==============================
    // 5. PARTICLES
    // ==============================
    
    // Initially spawn some ambient dust even on intro screen
    for (let i = 0; i < 20; i++) {
        setTimeout(spawnDust, Math.random() * 2000);
    }

    function startDust() {
        setInterval(() => {
            if (dustContainer.children.length < 50) spawnDust();
        }, 200);
    }

    function startPetals() {
        setInterval(() => {
            if (petalsContainer.children.length < 30) spawnPetal();
        }, 500);
    }

    function spawnDust() {
        const dust = document.createElement("div");
        dust.classList.add("dust");
        
        dust.style.left = `${Math.random() * 100}%`;
        dust.style.top = `${30 + Math.random() * 70}%`; 
        
        const duration = 4 + Math.random() * 5;
        dust.style.animationDuration = `${duration}s`;
        
        dustContainer.appendChild(dust);
        setTimeout(() => dust.remove(), duration * 1000);
    }

    function spawnPetal() {
        const petal = document.createElement("div");
        petal.classList.add("falling-petal");
        
        petal.style.left = `${Math.random() * 100}%`;
        const duration = 7 + Math.random() * 6;
        petal.style.animationDuration = `${duration}s`;
        
        const size = 0.6 + Math.random() * 0.5;
        petal.style.transform = `scale(${size})`;
        
        petal.style.marginLeft = `${(Math.random() - 0.5) * 150}px`;
        
        petalsContainer.appendChild(petal);
        setTimeout(() => petal.remove(), duration * 1000);
    }
});
