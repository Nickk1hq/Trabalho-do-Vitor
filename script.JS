/* ===================================
   LUMIER STREAMING
   script.js
=================================== */

/* Botão de login */
const loginBtn = document.getElementById("loginBtn");

/* ==========================
   LOGIN
========================== */

loginBtn.addEventListener("click", () => {

    const textoOriginal = loginBtn.innerHTML;

    loginBtn.innerHTML = "🍿 Entrando...";
    loginBtn.disabled = true;

    setTimeout(() => {

        alert("Bem-vindo à Lumier!");

        loginBtn.innerHTML = textoOriginal;
        loginBtn.disabled = false;

    }, 1500);

});

/* ==========================
   ANIMAÇÃO INICIAL
========================== */

window.addEventListener("load", () => {

    const heroLeft =
        document.querySelector(".hero-left");

    const loginBox =
        document.querySelector(".login-box");

    heroLeft.style.opacity = "0";
    loginBox.style.opacity = "0";

    heroLeft.style.transform =
        "translateX(-50px)";

    loginBox.style.transform =
        "translateX(50px)";

    setTimeout(() => {

        heroLeft.style.transition =
            "all 1s ease";

        loginBox.style.transition =
            "all 1s ease";

        heroLeft.style.opacity = "1";
        loginBox.style.opacity = "1";

        heroLeft.style.transform =
            "translateX(0)";

        loginBox.style.transform =
            "translateX(0)";

    }, 200);

});

/* ==========================
   REVELAR SEÇÕES
========================== */

const sections =
    document.querySelectorAll(".catalog-section");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";
        }

    });

},{
    threshold:0.15
});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "all .8s ease";

    observer.observe(section);

});

/* ==========================
   NAVBAR DINÂMICA
========================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background =
            "rgba(0,0,0,.92)";

        navbar.style.borderBottom =
            "1px solid rgba(212,175,55,.25)";
    }
    else{

        navbar.style.background =
            "rgba(0,0,0,.7)";

        navbar.style.borderBottom =
            "1px solid rgba(212,175,55,.15)";
    }

});

/* ==========================
   HOVER PREMIUM DOS CARDS
========================== */

const cards =
    document.querySelectorAll(".movie-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.background =
            `radial-gradient(
                circle at ${x}px ${y}px,
                rgba(212,175,55,.15),
                transparent 60%
            )`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "transparent";
    });

});

/* ==========================
   BRILHO SUAVE DA LOGO
========================== */

const logoTitulo =
    document.querySelector(".hero-left h1");

setInterval(() => {

    logoTitulo.style.textShadow =
        `
        0 0 20px rgba(212,175,55,.35),
        0 0 35px rgba(212,175,55,.15)
        `;

    setTimeout(() => {

        logoTitulo.style.textShadow =
            `
            0 0 10px rgba(212,175,55,.25)
            `;

    }, 1200);

}, 2500);

/* ==========================
   SCROLL SUAVE DOS LINKS
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const destino =
            document.querySelector(
                link.getAttribute("href")
            );

        if(destino){

            destino.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});