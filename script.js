/* ============================

   Smooth Scrolling

============================ */

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({

      behavior: 'smooth'

    });

  });

});

/* ============================

   Dark Mode Toggle + Save

============================ */

const toggleBtn = document.getElementById('toggleBtn');

// Load saved theme

if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark-mode");

  toggleBtn.textContent = "☀️ Light Mode";

}

toggleBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode');

  const darkModeOn = document.body.classList.contains('dark-mode');

  toggleBtn.textContent = darkModeOn ? "☀️ Light Mode" : "🌙 Dark Mode";

  localStorage.setItem("theme", darkModeOn ? "dark" : "light");

});

/* ============================

   Typing Effect

============================ */

const text = "Hi, I'm Arbin Anand";

let index = 0;

function typeEffect() {

  const typingEl = document.querySelector(".typing");

  if (index === 0) typingEl.textContent = ""; // clear first

  if (index < text.length) {

    typingEl.textContent += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);

  }

}

window.onload = typeEffect;