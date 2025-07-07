
document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);
    let isValid = true;

    const fullName = formData.get('fullName');
    const fullNameError = document.getElementById('fullName-error');
    if (!fullName || fullName.length < 2) {
        fullNameError.textContent = 'El nombre debe tener al menos 2 caracteres';
        fullNameError.style.display = 'block';
        isValid = false;
    } else {
        fullNameError.style.display = 'none';
    }

    const email = formData.get('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        emailError.textContent = 'Ingresa un correo electrónico válido';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    const phone = formData.get('phone');
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^[+]?[\d\s\-()]{8,15}$/;
    if (!phone || !phoneRegex.test(phone)) {
        phoneError.textContent = 'Ingresa un número de teléfono válido';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    const modality = formData.get('modality');
    const modalityError = document.getElementById('modality-error');
    if (!modality) {
        modalityError.textContent = 'Selecciona una modalidad';
        modalityError.style.display = 'block';
        isValid = false;
    } else {
        modalityError.style.display = 'none';
    }

    if (isValid) {
        const successMessage = document.querySelector('.success-message');
        const submitButton = document.querySelector('.btn-submit');

        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Enviando...';

        setTimeout(() => {
            successMessage.style.display = 'block';
            form.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="bi bi-person-plus me-2"></i>Preinscribirse';

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    }
});

const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        const form = this.closest('form');
        const event = new Event('submit');
        form.dispatchEvent(event);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.grid-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


const videoContainers = document.querySelectorAll('.video-container, .welcome-video');
videoContainers.forEach(container => {
    container.addEventListener('click', function() {
        console.log('Video clicked - would open modal');
    });

    container.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    container.setAttribute('tabindex', '0');
    container.setAttribute('role', 'button');
});