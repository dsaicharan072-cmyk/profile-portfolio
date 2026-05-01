// --- Project Navigation ---
function openProject(project){
    if(project === "tictactoe"){
        window.open("self-tictac.html","_blank");
    }
    else if(project === "calculator"){
        window.open("clac.html","_blank");
    }
    else if(project === "typingtest"){
        window.open("type_monkey.html","_blank");
    }
    else if(project === "websiteclone"){
        window.open("list.html","_blank");
    }
    else if(project === "todolist"){
        window.open("contact.html","_blank");
    }
    else if(project === "onenote"){
        window.open("onenote/index.html","_blank");
    }
}

// --- Contact Form Validation ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(!email.includes('@')){
            alert('Enter a valid email');
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });
}

// --- Scroll Animations (Intersection Observer) ---
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once the animation has triggered
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Select all elements with the class 'animate-on-scroll'
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Typing Animation Logic ---
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ["First-Year Student", "Aspiring Software Engineer", "Web Developer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 100;
            if (isDeleting) {
                typeSpeed /= 2; // Delete faster
            }

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing after a short delay so the slide-in animations can finish
        setTimeout(type, 1500);
    }
});
