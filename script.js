window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
};

const text = "Happy Birthday, Miss Saniya Rehman! 💕";
let index = 0;

function typeWriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;

    if (index < text.length) {
        el.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    } else {
        blowPartyBoomer();
        showHearts();
    }
}


function showHearts() {
    const leftHeart = document.getElementById("hearts-left");
    const rightHeart = document.getElementById("hearts-right");

    if (leftHeart) leftHeart.classList.add("show");
    if (rightHeart) rightHeart.classList.add("show");
}



function blowPartyBoomer() {
    setInterval(() => {
        confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ffafcc', '#b19cd9', '#ffffff']
        });

        confetti({
            particleCount: 10,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 10,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 1200);
}



function scrollToMemories() {
    const mem = document.getElementById("memories");
    if (mem) mem.scrollIntoView({ behavior: "smooth" });
}


function startExperience() {

    // hide loading screen
    const loading = document.getElementById("loading-screen");
    if (loading) loading.style.display = "none";

    // show main website
    const main = document.getElementById("main-content");
    if (main) main.style.display = "block";

    // ---- MUSIC (safe autoplay) ----
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.volume = 0.7;
        bgMusic.play().catch(() => {});
    }

    // ---- RESET + START TYPEWRITER ----
    const typeEl = document.getElementById("typewriter");
    if (typeEl) typeEl.innerHTML = "";

    index = 0;
    typeWriter();
}



function openLetter() {

    const letterSection = document.querySelector(".letter-section");
    const letter = document.getElementById("letter");
    const videoWrapper = document.getElementById("videoWrapper");
    const video = document.getElementById("letterVideo");

    if (letterSection) {
        letterSection.classList.add("expanded");
        letterSection.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
        if (letter) letter.classList.add("open");
        if (videoWrapper) videoWrapper.classList.add("show");

        if (video) {
            video.currentTime = 0;
            video.muted = false;
            video.play().catch(() => {});
        }
    }, 400);

    const celebrate = document.getElementById("celebrateContainer");
    if (celebrate) {
        setTimeout(() => {
            celebrate.style.display = "block";
        }, 1200);
    }
}



window.addEventListener("load", () => {

    const progressBar = document.getElementById("progress-bar");
    const startBtn = document.getElementById("start-btn");

    let width = 0;
    if (startBtn) startBtn.style.display = "none";

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);

            // ONLY show start button
            if (startBtn) startBtn.style.display = "inline-block";

        } else {
            width += Math.random() * 15;
            if (width > 100) width = 100;
            if (progressBar) progressBar.style.width = width + "%";
        }
    }, 200);
});



