let slides2025 = document.querySelectorAll("#year2025 .slide");
let index = 0;

function open2025(){
    hideAll();
    document.getElementById("year2025").style.display="block";
}

function open2026(){
    hideAll();
    document.getElementById("year2026").style.display="block";

    canvas.style.display = "block";
    createFirework();
    setInterval(createFirework, 800);
    animateFireworks();
}


function go2025(){
    open2025();
}

function go2026(){
    open2026();
}

function nextSlide(){
    slides2025[index].classList.remove("active");
    index = (index + 1) % slides2025.length;
    slides2025[index].classList.add("active");
}

function hideAll(){
    document.getElementById("cover").style.display="none";
    document.getElementById("year2025").style.display="none";
    document.getElementById("year2026").style.display="none";
}
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createFirework() {
    let x = random(100, canvas.width - 100);
    let y = random(100, canvas.height / 2);
    for (let i = 0; i < 40; i++) {
        particles.push({
            x,
            y,
            angle: random(0, Math.PI * 2),
            speed: random(2, 6),
            alpha: 1
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.alpha -= 0.02;

        ctx.fillStyle = `rgba(255, 100, 150, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        if (p.alpha <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(animateFireworks);
}
