// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initSmoothScrolling();
    initCurrentYear();
    loadContent();
    initContactForm();
    initResumeDownload();
});

// Theme Management
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme, themeIcon);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconElement) {
    iconElement.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Set Current Year in Footer
function initCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Load Content from JSON
async function loadContent() {
    try {
        const response = await fetch('./data/content.json');
        if (!response.ok) {
            throw new Error('Failed to load content');
        }
        const data = await response.json();
        
        renderExperience(data.experience);
        renderProjects(data.projects);
        renderSkills(data.skills);
        renderEducation(data.education, data.awards);
    } catch (error) {
        console.error('Error loading content:', error);
        // Fallback content will be rendered by default
        renderFallbackContent();
    }
}

// Render Experience Timeline
function renderExperience(experiences) {
    const timelineContainer = document.getElementById('experienceTimeline');
    
    if (!experiences || !experiences.length) return;
    
    timelineContainer.innerHTML = experiences.map(exp => `
        <div class="timeline-item">
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-title">${exp.role}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-period">${exp.start} - ${exp.end}</div>
                </div>
                <ul class="timeline-highlights">
                    ${exp.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
                <div class="tech-stack">
                    ${exp.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Projects Grid
function renderProjects(projects) {
    const projectsContainer = document.getElementById('projectsGrid');
    
    if (!projects || !projects.length) return;
    
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${project.name}</h3>
            </div>
            <p class="project-description">${project.description}</p>
            ${project.impact ? `<p class="project-impact">Impact: ${project.impact}</p>` : ''}
            ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener">View Project →</a>` : ''}
        </div>
    `).join('');
}

// Render Skills Categories
function renderSkills(skills) {
    const skillsContainer = document.getElementById('skillsGrid');
    
    if (!skills) return;
    
    const skillCategories = [
        { name: 'Languages', key: 'languages' },
        { name: 'Machine Learning', key: 'ml' },
        { name: 'MLOps & Cloud', key: 'mlops' },
        { name: 'Cloud Platforms', key: 'cloud' },
        { name: 'Data & Analytics', key: 'data' },
        { name: 'Visualization', key: 'viz' }
    ];
    
    skillsContainer.innerHTML = skillCategories.map(category => {
        const categorySkills = skills[category.key];
        if (!categorySkills || !categorySkills.length) return '';
        
        return `
            <div class="skills-category">
                <h3>${category.name}</h3>
                <div class="skills-list">
                    ${categorySkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// Render Education and Awards
function renderEducation(education, awards) {
    const educationContainer = document.getElementById('educationContent');
    
    let content = '<div class="education-grid">';
    
    if (education && education.length) {
        education.forEach(edu => {
            content += `
                <div class="education-item">
                    <div class="education-header">
                        <h3>${edu.degree}</h3>
                        <div class="education-school">${edu.school}</div>
                        <div class="education-year">${edu.year}</div>
                    </div>
                </div>
            `;
        });
    }
    
    if (awards && awards.length) {
        content += `
            <div class="education-item">
                <div class="education-header">
                    <h3>Awards & Achievements</h3>
                </div>
                <ul class="awards-list">
                    ${awards.map(award => `<li><span class="award-title">${award}</span></li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    content += '</div>';
    educationContainer.innerHTML = content;
}

// Fallback Content (in case JSON fails to load)
function renderFallbackContent() {
    // Sample experience data
    const sampleExperience = [
        {
            role: "Machine Learning Engineer",
            company: "Technology Company",
            start: "2023",
            end: "Present",
            highlights: [
                "Developed and deployed ML models serving production traffic",
                "Improved model performance through feature engineering and optimization",
                "Built end-to-end MLOps pipelines for automated deployment",
                "Collaborated with cross-functional teams on AI initiatives"
            ],
            stack: ["Python", "PyTorch", "Docker", "Kubernetes", "AWS", "MLflow"]
        }
    ];
    
    // Sample projects data
    const sampleProjects = [
        {
            name: "ML Pipeline Automation",
            description: "End-to-end machine learning pipeline with automated training, validation, and deployment capabilities.",
            impact: "Reduced model deployment time from weeks to hours",
            link: "https://github.com/Kalash0309"
        },
        {
            name: "NLP Text Classification System",
            description: "Production-ready text classification system using transformer models for document processing.",
            impact: "Achieved 95% accuracy on business document classification",
            link: null
        }
    ];
    
    // Sample skills data
    const sampleSkills = {
        languages: ["Python", "SQL", "R", "JavaScript"],
        ml: ["PyTorch", "TensorFlow", "scikit-learn", "Transformers", "XGBoost"],
        mlops: ["Docker", "Kubernetes", "MLflow", "Apache Airflow", "DVC"],
        cloud: ["AWS", "GCP", "Azure"],
        data: ["PostgreSQL", "MongoDB", "Apache Spark", "Pandas", "NumPy"],
        viz: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Streamlit"]
    };
    
    // Sample education data
    const sampleEducation = [
        {
            degree: "Master's Degree in Technology/Engineering",
            school: "Indian Institute of Technology or Similar",
            year: "2020"
        }
    ];
    
    const sampleAwards = [
        "Academic Excellence Awards",
        "Project Recognition",
        "Professional Achievement Recognition"
    ];
    
    renderExperience(sampleExperience);
    renderProjects(sampleProjects);
    renderSkills(sampleSkills);
    renderEducation(sampleEducation, sampleAwards);
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // If Formspree is not configured, fallback to mailto
            const formAction = this.getAttribute('action');
            if (!formAction || formAction.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                handleMailtoFallback();
            }
            // Otherwise, let the form submit normally to Formspree
        });
    }
}

function handleMailtoFallback() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = `Website Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:kalash.kankaria@gmail.com?subject=${subject}&body=${body}`;
}

// Resume Download
function initResumeDownload() {
    const downloadBtn = document.getElementById('downloadResume');
    
    downloadBtn.addEventListener('click', function(e) {
        // If no resume file is available, show a message
        e.preventDefault();
        
        // Check if resume file exists
        fetch('./assets/kalash-kankaria-resume.pdf')
            .then(response => {
                if (response.ok) {
                    // Resume exists, download it
                    const link = document.createElement('a');
                    link.href = './assets/kalash-kankaria-resume.pdf';
                    link.download = 'Kalash-Kankaria-Resume.pdf';
                    link.click();
                } else {
                    // Resume doesn't exist, show message
                    showResumeMessage();
                }
            })
            .catch(() => {
                showResumeMessage();
            });
    });
}

function showResumeMessage() {
    // Create and show a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
        <p style="margin: 0;">Resume will be available soon! Please contact me directly.</p>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
    });
}

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

// Performance Optimization
// Debounce scroll events
window.addEventListener('scroll', debounce(updateActiveNavLink, 100));

// Lazy load images if IntersectionObserver is supported
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Simple unit test helpers (for README console testing)
window.testUtils = {
    formatDate: formatDate,
    debounce: debounce,
    // Test the formatDate function
    testFormatDate: function() {
        const testDate = '2023-01-15';
        const result = formatDate(testDate);
        console.log(`formatDate('${testDate}') = '${result}'`);
        return result === 'Jan 2023';
    },
    // Test the debounce function
    testDebounce: function() {
        let counter = 0;
        const increment = () => counter++;
        const debouncedIncrement = debounce(increment, 100);
        
        debouncedIncrement();
        debouncedIncrement();
        debouncedIncrement();
        
        setTimeout(() => {
            console.log(`Debounce test: counter = ${counter} (should be 1)`);
            return counter === 1;
        }, 150);
    }
}; 