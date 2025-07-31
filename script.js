// Reveal animation on scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const scrollPos = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < scrollPos - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run once on load

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Optional: WhatsApp floating button interaction (already works via href)
// But if you want a click handler instead, use this:
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open("https://wa.me/918850202568", "_blank");
  });
}

// Optional: Lazy load gallery images for performance
document.addEventListener("DOMContentLoaded", () => {
  const galleryImgs = document.querySelectorAll(".gallery-img");
  galleryImgs.forEach(img => {
    img.loading = "lazy";
  });
});
