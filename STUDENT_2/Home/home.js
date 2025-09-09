// ================================
// Home Page JS Interactivity
// ================================

// ===== Active Navigation Link =====
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// ===== Back-to-Top Button =====
const backToTop = document.getElementById('back_to_top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Tile Hover Animations =====
const tiles = document.querySelectorAll('.content-tile');
tiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.style.transform = 'scale(1.05)';
        tile.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.2)';
    });
    tile.addEventListener('mouseleave', () => {
        tile.style.transform = 'scale(1)';
        tile.style.boxShadow = '0 4px 10px var(--primary-color)';
    });
});

// ===== Background Video Play/Pause =====
const video = document.getElementById('bg-video');
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// ===== Scroll Animations for Sections =====
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add('animate');
        }
    });
});
