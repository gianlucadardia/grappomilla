/**
 * GrappoMilla - JavaScript
 * Interactions: smooth scroll, proportion meter, dark mode toggle
 */

// ============================================
// Dark Mode Toggle
// ============================================
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

darkModeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Announce to screen readers
    const announcement = newTheme === 'dark' 
        ? 'Modalità scura attivata' 
        : 'Modalità chiara attivata';
    announceToScreenReader(announcement);
});

// ============================================
// Smooth Scroll for CTA Button
// ============================================
const ctaButton = document.getElementById('ctaButton');
const aboutSection = document.getElementById('about');

ctaButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// Proportion Meter - Random Status Messages
// ============================================
const proportionText = document.getElementById('proportionText');
const refreshMeter = document.getElementById('refreshMeter');

const proportionMessages = [
    "Oggi: QB++ (giornata tosta)",
    "Modalità demo live attivata - GelatAI operativo",
    "Giornata tranquilla: QB minimo consigliato",
    "Staff meeting completato: QB medio-alto",
    "Il cerchio gira ancora... QB in aumento",
    "Fase pre-deadline: QB critico",
    "Cortina mode: fiaschetta pronta ✓",
    "Proporzione ottimale: 70% camomilla, 30% grappa (metaforico)",
    "Livello stress: basso | QB necessario: minimo",
    "Livello stress: medio | QB necessario: standard",
    "Livello stress: MASSIMO | QB necessario: critico",
    "GelatAI Translytical Task Flow™ in esecuzione",
    "Origin story activated: modalità Padova esami",
    "Folklore mode: ON | Proporzioni: a sentimento",
    "Easter egg trovato: grappomilla.com ancora libero"
];

function updateProportionMeter() {
    const randomMessage = proportionMessages[Math.floor(Math.random() * proportionMessages.length)];
    proportionText.textContent = randomMessage;
    
    // Add animation class
    proportionText.style.opacity = '0';
    setTimeout(() => {
        proportionText.style.opacity = '1';
    }, 100);
}

// Initialize with random message on page load
updateProportionMeter();

// Refresh button
refreshMeter.addEventListener('click', () => {
    updateProportionMeter();
    announceToScreenReader('Stato giornata aggiornato');
});

// Auto-refresh every 30 seconds
setInterval(updateProportionMeter, 30000);

// ============================================
// Current Year in Footer
// ============================================
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// ============================================
// Accessibility: Screen Reader Announcements
// ============================================
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ============================================
// Easter Egg: Konami Code (optional bonus)
// ============================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    const body = document.body;
    body.style.transition = 'transform 0.5s ease';
    body.style.transform = 'rotate(360deg)';
    
    setTimeout(() => {
        body.style.transform = 'rotate(0deg)';
    }, 500);
    
    // Show special message
    const originalText = proportionText.textContent;
    proportionText.textContent = "🎉 EASTER EGG! Proporzioni: ∞QB (hai trovato il codice segreto!)";
    
    setTimeout(() => {
        proportionText.textContent = originalText;
    }, 5000);
    
    announceToScreenReader('Easter egg attivato! Codice Konami riconosciuto!');
}

// ============================================
// Smooth Scroll for All Internal Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" (empty hash)
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// FAQ Accessibility Enhancement
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const summary = item.querySelector('.faq-question');
    
    summary.addEventListener('click', () => {
        const isOpen = item.hasAttribute('open');
        const message = isOpen 
            ? 'Risposta espansa' 
            : 'Risposta compressa';
        
        // Delay announcement to allow details element to update
        setTimeout(() => {
            announceToScreenReader(message);
        }, 100);
    });
});

// ============================================
// Lazy Loading Images (if needed in future)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Analytics Placeholder (optional)
// ============================================
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track CTA clicks
ctaButton.addEventListener('click', () => {
    trackEvent('Engagement', 'CTA Click', 'Scopri la leggenda');
});

// Track dark mode toggles
darkModeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    trackEvent('Preferences', 'Dark Mode Toggle', theme);
});

// Track proportion meter refreshes
refreshMeter.addEventListener('click', () => {
    trackEvent('Interaction', 'Meter Refresh', 'Proportion Meter');
});

// ============================================
// Performance: Debounce Scroll Events
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Example: Add scroll-based animations (optional)
const animateOnScroll = debounce(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}, 100);

window.addEventListener('scroll', animateOnScroll);

// ============================================
// Initialize Cards Animation
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// ============================================
// Console Easter Egg
// ============================================
console.log(`
%c🍶 GrappoMilla %c- Powered by folklore, not by policies

%cHai trovato la console! 
Proporzioni QB rilevate nel codice.
Sei un vero developer GrappoMilla.

Tip: prova il Konami Code sulla pagina... 😉

`,
    'font-size: 24px; font-weight: bold; color: #D4A574;',
    'font-size: 14px; color: #2A9D8F;',
    'font-size: 12px; color: #5C4A33;'
);
