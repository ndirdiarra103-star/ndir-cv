// ======================
// MODE SOMBRE
// ======================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Mode clair";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙 Mode sombre";
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️ Mode clair";
}

// ======================
// IMPRESSION
// ======================

document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

// ======================
// PDF
// ======================

document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.body;

  html2pdf()
    .set({
      margin: 0.5,
      filename: "CV-Mame-Diarra-Ndir.pdf",

      image: {
        type: "jpeg",
        quality: 1,
      },

      html2canvas: {
        scale: 2,
      },

      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    })
    .from(element)
    .save();
});

// ======================
// MENU HAMBURGER
// ======================

const burger = document.getElementById("burger");
const navLiens = document.querySelector(".nav-liens");

burger.addEventListener("click", () => {
  navLiens.classList.toggle("active");
});

// ======================
// BARRE DE SCROLL
// ======================

window.addEventListener("scroll", () => {
  const hauteur =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const position = (window.scrollY / hauteur) * 100;

  document.getElementById("scrollBar").style.width = position + "%";
});

// ======================
// ANIMATION COMPETENCES
// ======================

const progressBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.dataset.value;

        bar.style.width = value + "%";

        observer.unobserve(bar);
      }
    });
  },

  {
    threshold: 0.5,
  },
);

progressBars.forEach((bar) => {
  observer.observe(bar);
});

// ======================
// FORMULAIRE
// ======================

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  if (!nom || !email || !message) {
    alert("Veuillez remplir tous les champs.");

    return;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    alert("Adresse email invalide.");

    return;
  }

  alert("Message envoyé avec succès !");

  form.reset();
});

// ======================
// RETOUR EN HAUT
// ======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
