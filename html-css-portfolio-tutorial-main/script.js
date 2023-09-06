function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const textElement = document.getElementById('animatedText');
const texts = ['Full Stack Developer', 'Program Manager'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function animateText() {
    if (charIndex < texts[textIndex].length && !isDeleting) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
    } else {
        isDeleting = true;
    }

    if (isDeleting && charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
    } else if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(animateText, isDeleting ? 100 : 300);
}

// Start the animation
animateText();
// changes
