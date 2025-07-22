// ===== ZOOM IMAGE LOGIC =====
const zoomableImages = document.querySelectorAll('.zoomable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

zoomableImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});

// ===== ANIMATE ON SCROLL (SECTIONS) =====
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".animate-on-scroll").forEach(section => {
  sectionObserver.observe(section);
});

// ===== EDUCATION CARDS ANIMATION =====
const cards = document.querySelectorAll('.edu-card');

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      cardObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => {
  card.style.animationPlayState = 'paused';
  cardObserver.observe(card);
});
