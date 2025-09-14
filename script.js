// אפקט גליץ' אינטראקטיבי
document.querySelector(".glitch").addEventListener("mouseover", function () {
  this.style.animation = "none";
  setTimeout(() => {
    this.style.animation = "glitch 725ms infinite";
  }, 100);
});

// אפקט hover מתקדם
const hoverElements = document.querySelectorAll(".hover-effect");
hoverElements.forEach((element) => {
  element.addEventListener("mouseover", function () {
    this.style.transform = `scale(1.1) rotate(${Math.random() * 10 - 5}deg)`;
  });

  element.addEventListener("mouseout", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// אפקט ניאון אינטראקטיבי
const neonText = document.querySelector(".neon-text");
let hue = 0;

function updateNeonColor() {
  hue = (hue + 1) % 360;
  neonText.style.textShadow = `
        0 0 5px hsl(${hue}, 100%, 50%),
        0 0 10px hsl(${hue}, 100%, 50%),
        0 0 20px hsl(${hue}, 100%, 50%),
        0 0 30px hsl(${hue}, 100%, 50%),
        0 0 40px hsl(${hue}, 100%, 50%)
    `;
  requestAnimationFrame(updateNeonColor);
}

updateNeonColor();

// אפקט מגנטי
const magneticElements = document.querySelectorAll(".magnetic");
magneticElements.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 100;
    const strength = Math.min(distance / maxDistance, 1);

    element.style.transform = `translate(${x * strength * 0.3}px, ${
      y * strength * 0.3
    }px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "translate(0px, 0px)";
  });
});

// אפקט אדווה
const rippleElements = document.querySelectorAll(".ripple");
rippleElements.forEach((element) => {
  element.addEventListener("click", function (e) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// אפקט הקלדה מחזורית
const cycleTyping = document.querySelector(".cycle-typing");
if (cycleTyping) {
  const texts = ["טקסט מחזורי", "אפקט הקלדה", "הקלדה בלולאה"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const current = texts[textIndex];
    if (!isDeleting) {
      cycleTyping.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1200);
        return;
      }
    } else {
      cycleTyping.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }
    setTimeout(typeLoop, isDeleting ? 60 : 120);
  }
  typeLoop();
}
