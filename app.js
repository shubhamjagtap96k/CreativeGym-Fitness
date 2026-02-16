/* ===================================
   Creative Gym & Fitness Club
   Dynamic Content & Interactions
   =================================== */

// ============================================
// DATA SOURCES
// ============================================

const plansData = [
    {
        name: 'Basic',
        monthlyPrice: 999,
        yearlyPrice: 10189,
        features: [
            '24/7 Gym Access',
            'Free Weights Zone',
            'Cardio Equipment',
            'Locker & Shower',
            'Mobile App Access',
            'Basic Progress Tracking'
        ],
        details: 'Perfect for self-motivated individuals who want access to quality equipment and facilities. Get started with your fitness journey at an affordable price.',
        featured: false
    },
    {
        name: 'Pro',
        monthlyPrice: 1799,
        yearlyPrice: 18350,
        features: [
            'Everything in Basic',
            '8 Group Classes/Month',
            '2 Personal Training Sessions',
            'Nutrition Consultation',
            'Sauna & Steam Access',
            'Priority Booking',
            'Advanced Analytics'
        ],
        details: 'Our most popular plan! Combines gym access with expert guidance through group classes and personal training. Ideal for those serious about results.',
        featured: true
    },
    {
        name: 'Elite',
        monthlyPrice: 2499,
        yearlyPrice: 25490,
        features: [
            'Everything in Pro',
            'Unlimited Group Classes',
            '8 Personal Training Sessions',
            'Custom Nutrition Plan',
            'Recovery & Massage',
            'Guest Passes (4/month)',
            'Premium Locker',
            'Exclusive Events Access'
        ],
        details: 'The ultimate fitness experience. Get unlimited access to all facilities, personalized coaching, and exclusive perks designed for peak performance.',
        featured: false
    }
];

const facilitiesData = [
    { icon: '🏋️', name: 'Free Weights Zone', description: 'Complete range of dumbbells, barbells, and Olympic lifting platforms' },
    { icon: '🏃', name: 'Cardio Theater', description: 'Treadmills, bikes, and rowers with entertainment screens' },
    { icon: '⚡', name: 'Functional Area', description: 'TRX, battle ropes, plyometric boxes, and agility equipment' },
    { icon: '🧘', name: 'Yoga Studio', description: 'Peaceful space for yoga, meditation, and stretching classes' },
    { icon: '💪', name: 'CrossFit Rig', description: 'Professional setup for Olympic lifts and functional training' },
    { icon: '♨️', name: 'Sauna & Steam', description: 'Relax and recover in our premium wellness facilities' },
    { icon: '🚿', name: 'Locker Rooms', description: 'Spacious, clean facilities with complimentary toiletries' },
    { icon: '🥤', name: 'Juice Bar', description: 'Fresh smoothies, protein shakes, and healthy snacks' },
    { icon: '🚗', name: 'Parking', description: 'Ample free parking for members and guests' }
];

const exercisesData = [
    { name: 'Barbell Squat', category: 'strength', muscles: 'Quads, Glutes, Core', steps: ['Set bar at shoulder height', 'Position bar on upper back', 'Descend with chest up', 'Drive through heels to stand'] },
    { name: 'Deadlift', category: 'strength', muscles: 'Hamstrings, Back, Glutes', steps: ['Stand with feet hip-width', 'Grip bar outside legs', 'Keep back flat, chest up', 'Drive hips forward to lift'] },
    { name: 'Bench Press', category: 'strength', muscles: 'Chest, Triceps, Shoulders', steps: ['Lie on bench, feet flat', 'Grip bar slightly wider than shoulders', 'Lower to chest with control', 'Press up explosively'] },
    { name: 'Pull-Ups', category: 'strength', muscles: 'Lats, Biceps, Core', steps: ['Hang from bar, palms forward', 'Engage core and shoulders', 'Pull chest to bar', 'Lower with control'] },
    { name: 'Overhead Press', category: 'strength', muscles: 'Shoulders, Triceps, Core', steps: ['Stand with bar at shoulders', 'Brace core, press overhead', 'Lock out arms at top', 'Lower to shoulders'] },
    { name: 'Treadmill Sprints', category: 'cardio', muscles: 'Full Body Cardio', steps: ['Warm up 5 minutes', 'Sprint 30 seconds at 85% max', 'Recover 90 seconds walking', 'Repeat 8-10 rounds'] },
    { name: 'Rowing Machine', category: 'cardio', muscles: 'Back, Legs, Cardio', steps: ['Secure feet, grab handle', 'Push with legs first', 'Pull handle to chest', 'Extend arms, bend knees to return'] },
    { name: 'Assault Bike', category: 'cardio', muscles: 'Full Body Cardio', steps: ['Adjust seat height', 'Push and pull handles', 'Pedal at high intensity', 'Maintain steady breathing'] },
    { name: 'Battle Ropes', category: 'hiit', muscles: 'Arms, Shoulders, Core', steps: ['Hold rope ends, slight squat', 'Alternate arm waves rapidly', 'Maintain 20-30 second bursts', 'Rest and repeat'] },
    { name: 'Box Jumps', category: 'hiit', muscles: 'Legs, Power, Cardio', steps: ['Stand facing box', 'Swing arms and jump explosively', 'Land softly on box', 'Step down and repeat'] },
    { name: 'Kettlebell Swings', category: 'hiit', muscles: 'Glutes, Hamstrings, Core', steps: ['Stand with feet wide', 'Hinge at hips, swing kettlebell', 'Drive hips forward explosively', 'Control the descent'] },
    { name: 'Burpees', category: 'hiit', muscles: 'Full Body, Cardio', steps: ['Start standing', 'Drop to plank position', 'Perform push-up', 'Jump feet forward, jump up'] },
    { name: 'Hip Openers', category: 'mobility', muscles: 'Hips, Groin', steps: ['Start in lunge position', 'Rotate hips in circular motion', 'Hold stretches 30 seconds', 'Switch sides'] },
    { name: 'Shoulder Dislocates', category: 'mobility', muscles: 'Shoulders, Chest', steps: ['Hold band wide grip', 'Raise arms overhead', 'Rotate behind back', 'Return to front'] },
    { name: 'Cat-Cow Stretch', category: 'mobility', muscles: 'Spine, Core', steps: ['Start on hands and knees', 'Arch back, look up (cow)', 'Round back, tuck chin (cat)', 'Flow between positions'] },
    { name: 'Foam Rolling', category: 'mobility', muscles: 'Full Body Recovery', steps: ['Position roller under muscle', 'Slowly roll back and forth', 'Pause on tender spots', 'Breathe and relax'] }
];

const testimonialsData = [
    {
        name: 'Aarav S.',
        type: 'Beginner',
        rating: 5,
        quote: 'I was intimidated by gyms, but the trainers here made me feel welcome from day one. Lost 15kg in 6 months!',
        story: 'Started with zero fitness experience. Now confidently deadlifts 100kg and runs 5K regularly.'
    },
    {
        name: 'Riya K.',
        type: 'Enthusiast',
        rating: 5,
        quote: 'The Pro plan changed everything. The nutrition guidance and group classes keep me motivated and accountable.',
        story: 'Went from occasional gym-goer to fitness enthusiast. Achieved first pull-up and dropped two dress sizes.'
    },
    {
        name: 'Neil D.',
        type: 'Athlete',
        rating: 5,
        quote: 'Elite plan is worth every rupee. The personalized training helped me hit new PRs every month.',
        story: 'Competitive powerlifter. Increased total by 80kg in one year with structured programming.'
    },
    {
        name: 'Priya M.',
        type: 'Beginner',
        rating: 5,
        quote: 'Clean facilities, friendly staff, and amazing yoga classes. This gym feels like a second home.',
        story: 'Joined for yoga, stayed for the community. Now attends 5 classes per week and feels stronger than ever.'
    },
    {
        name: 'Arjun T.',
        type: 'Enthusiast',
        rating: 5,
        quote: 'The 24/7 access is perfect for my schedule. I can train at 5 AM before work without any hassle.',
        story: 'Busy professional who found consistency through early morning training. Built sustainable fitness habits.'
    },
    {
        name: 'Sneha P.',
        type: 'Athlete',
        rating: 5,
        quote: 'Best gym in Pune! The CrossFit rig and functional area have everything I need for competition prep.',
        story: 'CrossFit competitor. Qualified for regional championships after training here for 18 months.'
    }
];

const whyUsData = [
    {
        icon: '🎓',
        title: 'Certified Coaches',
        description: 'All trainers hold recognized certifications and have 5+ years of experience helping members achieve their goals.'
    },
    {
        icon: '📊',
        title: 'Periodized Programming',
        description: 'Science-based training programs that progress systematically to maximize results and prevent plateaus.'
    },
    {
        icon: '📈',
        title: 'Data-Driven Tracking',
        description: 'Advanced app integration to monitor workouts, nutrition, and progress with detailed analytics.'
    },
    {
        icon: '🤝',
        title: 'Community Events',
        description: 'Regular challenges, workshops, and social events to keep you motivated and connected.'
    },
    {
        icon: '✨',
        title: 'Clean & Safe',
        description: 'Rigorous cleaning protocols, well-maintained equipment, and a safe, welcoming environment for all.'
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentTheme = localStorage.getItem('theme') || 'dark';
let isPricingYearly = false;
let currentExerciseFilter = 'all';
let currentTestimonialIndex = 0;
let testimonialInterval = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initScrollAnimations();
    initHeroStats();
    renderPlans();
    renderFacilities();
    renderExercises();
    renderWhyUs();
    renderTestimonials();
    initCarousel();
    initForms();
    initPriceToggle();
    initExerciseFilters();
    initExerciseModal();
});

// ============================================
// THEME MANAGEMENT
// ============================================

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navMenu.classList.add('show');
    });
    
    navClose?.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
    
    // Smooth scroll with offset
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav__link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.plan-card, .facility-card, .why-card');
    animatedElements.forEach(el => observer.observe(el));
}

// ============================================
// HERO STATS COUNTER
// ============================================

function initHeroStats() {
    const statNumbers = document.querySelectorAll('.stat__number[data-target]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => observer.observe(stat));
    
    // Also animate counter numbers in Why Us section
    const counterNumbers = document.querySelectorAll('.counter-number[data-target]');
    counterNumbers.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target, duration) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// PLANS RENDERING
// ============================================

function renderPlans() {
    const plansGrid = document.getElementById('plans-grid');
    
    plansGrid.innerHTML = plansData.map(plan => `
        <div class="plan-card ${plan.featured ? 'featured' : ''}">
            ${plan.featured ? '<span class="plan-badge">Best Value</span>' : ''}
            <h3 class="plan-card__name">${plan.name}</h3>
            <div class="plan-card__price">
                <span class="price__currency">₹</span>
                <span class="price__amount" data-monthly="${plan.monthlyPrice}" data-yearly="${plan.yearlyPrice}">
                    ${plan.monthlyPrice}
                </span>
                <span class="price__period">/mo</span>
            </div>
            <ul class="plan-card__features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn btn--primary btn--block">Start Now</button>
            <div class="plan-card__accordion">
                <button class="accordion__trigger" aria-expanded="false">
                    <span>Learn More</span>
                    <svg class="accordion__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="accordion__content">
                    <p class="accordion__text">${plan.details}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    // Initialize accordions
    initAccordions();
}

function initAccordions() {
    const accordionTriggers = document.querySelectorAll('.accordion__trigger');
    
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const content = trigger.nextElementSibling;
            
            trigger.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('open');
        });
    });
}

// ============================================
// PRICE TOGGLE
// ============================================

function initPriceToggle() {
    const priceToggle = document.getElementById('price-toggle');
    
    priceToggle.addEventListener('click', () => {
        isPricingYearly = !isPricingYearly;
        priceToggle.classList.toggle('yearly');
        updatePrices();
    });
}

function updatePrices() {
    const priceAmounts = document.querySelectorAll('.price__amount');
    
    priceAmounts.forEach(amount => {
        const monthly = parseInt(amount.getAttribute('data-monthly'));
        const yearly = parseInt(amount.getAttribute('data-yearly'));
        
        const targetPrice = isPricingYearly ? Math.floor(yearly / 12) : monthly;
        
        // Animate price change
        animateCounter(amount, targetPrice, 500);
    });
}

// ============================================
// FACILITIES RENDERING
// ============================================

function renderFacilities() {
    const facilitiesGrid = document.getElementById('facilities-grid');
    
    facilitiesGrid.innerHTML = facilitiesData.map(facility => `
        <div class="facility-card">
            <div class="facility-card__icon">${facility.icon}</div>
            <h3 class="facility-card__title">${facility.name}</h3>
            <p class="facility-card__description">${facility.description}</p>
        </div>
    `).join('');
}

// ============================================
// EXERCISES RENDERING & FILTERING
// ============================================

function renderExercises() {
    const exercisesGrid = document.getElementById('exercises-grid');
    
    const filteredExercises = currentExerciseFilter === 'all' 
        ? exercisesData 
        : exercisesData.filter(ex => ex.category === currentExerciseFilter);
    
    exercisesGrid.innerHTML = filteredExercises.map(exercise => `
        <div class="exercise-card" data-exercise='${JSON.stringify(exercise)}'>
            <h4 class="exercise-card__name">${exercise.name}</h4>
            <span class="exercise-card__category">${exercise.category}</span>
        </div>
    `).join('');
}

function initExerciseFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentExerciseFilter = btn.getAttribute('data-category');
            renderExercises();
            initExerciseModal(); // Re-initialize modal listeners
        });
    });
}

function initExerciseModal() {
    const exerciseCards = document.querySelectorAll('.exercise-card');
    const modal = document.getElementById('exercise-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = modal.querySelector('.modal__close');
    const modalOverlay = modal.querySelector('.modal__overlay');
    
    exerciseCards.forEach(card => {
        card.addEventListener('click', () => {
            const exercise = JSON.parse(card.getAttribute('data-exercise'));
            showExerciseModal(exercise);
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    function showExerciseModal(exercise) {
        modalBody.innerHTML = `
            <h3 class="modal__title">${exercise.name}</h3>
            <span class="modal__category">${exercise.category}</span>
            <p class="modal__description">A fundamental exercise for building strength and muscle.</p>
            <h4>How to Perform:</h4>
            <ol class="modal__steps">
                ${exercise.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <div class="modal__muscles">
                <h4>Target Muscles</h4>
                <p>${exercise.muscles}</p>
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// WHY US RENDERING
// ============================================

function renderWhyUs() {
    const whyUsGrid = document.getElementById('why-us-grid');
    
    whyUsGrid.innerHTML = whyUsData.map(item => `
        <div class="why-card">
            <div class="why-card__icon">${item.icon}</div>
            <h3 class="why-card__title">${item.title}</h3>
            <p class="why-card__description">${item.description}</p>
        </div>
    `).join('');
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================

function renderTestimonials() {
    const carouselTrack = document.getElementById('carousel-track');
    const carouselDots = document.getElementById('carousel-dots');
    
    carouselTrack.innerHTML = testimonialsData.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-card__header">
                <div class="testimonial-card__avatar">
                    ${testimonial.name.charAt(0)}
                </div>
                <div class="testimonial-card__info">
                    <h4 class="testimonial-card__name">${testimonial.name}</h4>
                    <p class="testimonial-card__type">${testimonial.type}</p>
                </div>
                <div class="testimonial-card__rating">
                    ${'★'.repeat(testimonial.rating)}
                </div>
            </div>
            <p class="testimonial-card__quote">"${testimonial.quote}"</p>
            <div class="testimonial-card__story">
                <strong>Journey:</strong> ${testimonial.story}
            </div>
        </div>
    `).join('');
    
    carouselDots.innerHTML = testimonialsData.map((_, index) => `
        <button class="carousel__dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to testimonial ${index + 1}"></button>
    `).join('');
}

function initCarousel() {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.querySelector('.carousel__btn--prev');
    const nextBtn = document.querySelector('.carousel__btn--next');
    const dots = document.querySelectorAll('.carousel__dot');
    const carousel = document.querySelector('.testimonials__carousel');
    
    function updateCarousel() {
        const offset = -currentTestimonialIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTestimonialIndex);
        });
    }
    
    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
        updateCarousel();
    }
    
    function prevTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
        updateCarousel();
    }
    
    prevBtn.addEventListener('click', prevTestimonial);
    nextBtn.addEventListener('click', nextTestimonial);
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentTestimonialIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel();
            resetAutoplay();
        });
    });
    
    // Auto-play
    function startAutoplay() {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            testimonialInterval = setInterval(nextTestimonial, 5000);
        }
    }
    
    function stopAutoplay() {
        clearInterval(testimonialInterval);
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    startAutoplay();
    
    // Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            nextTestimonial();
            resetAutoplay();
        }
        if (touchEndX - touchStartX > 50) {
            prevTestimonial();
            resetAutoplay();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevTestimonial();
        if (e.key === 'ArrowRight') nextTestimonial();
    });
}

// ============================================
// FORMS
// ============================================

function initForms() {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Contact form submitted:', data);
        
        showToast('Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
    });
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        console.log('Newsletter subscription:', email);
        
        showToast('Successfully subscribed to newsletter!');
        newsletterForm.reset();
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast__message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================

document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});
