// ===== TYPING ANIMATION =====
const titles = [
  'Senior DevOps Engineer',
  'Platform Engineer',
  'Site Reliability Engineer',
  'Cloud Infrastructure Engineer',
  'GitOps & Kubernetes Expert',
];
let titleIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  const current = titles[titleIndex];
  if (isDeleting) {
    typingEl.textContent = current.slice(0, charIndex--);
  } else {
    typingEl.textContent = current.slice(0, charIndex++);
  }
  let delay = isDeleting ? 50 : 90;
  if (!isDeleting && charIndex === current.length + 1) {
    delay = 2000; isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false; titleIndex = (titleIndex + 1) % titles.length; delay = 400;
  }
  setTimeout(type, delay);
}
type();

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60
    ? 'rgba(10,14,26,0.98)'
    : 'rgba(10,14,26,0.92)';
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.skill-category, .timeline-card, .achievement-card, .project-card, .cert-card, .about-stats .stat, .contact-link'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
