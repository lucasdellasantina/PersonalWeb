// Translations
const translations = {
  es: {
    name: "Tu Nombre",
    title: "Ingeniero Electrónico",
    subtitle: "Ciberseguridad & IoT",
    "nav-about": "Sobre Mí",
    "nav-skills": "Habilidades",
    "nav-experience": "Experiencia",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "about-title": "Sobre Mí",
    "about-lead":
      "Soy un ingeniero electrónico apasionado por la intersección entre hardware, software y seguridad digital.",
    "about-p1":
      "Mi experiencia abarca desde el diseño de circuitos electrónicos hasta la implementación de sistemas IoT seguros. Me especializo en crear soluciones que no solo funcionan, sino que están protegidas contra las amenazas cibernéticas modernas.",
    "about-p2":
      "Con un enfoque en la ciberseguridad aplicada a dispositivos IoT, trabajo constantemente en proyectos que combinan electrónica de vanguardia con protocolos de seguridad robustos. Mi objetivo es construir el futuro conectado de manera segura y eficiente.",
    "interest-electronics": "Electrónica",
    "interest-electronics-desc": "Diseño de circuitos y sistemas embebidos",
    "interest-security": "Ciberseguridad",
    "interest-security-desc": "Protección de sistemas y redes",
    "interest-iot": "IoT",
    "interest-iot-desc": "Internet de las Cosas y conectividad",
    "skills-title": "Habilidades Técnicas",
    "skills-electronics-title": "Electrónica & Hardware",
    "skills-security-title": "Ciberseguridad",
    "skills-iot-title": "IoT & Conectividad",
    "skills-programming-title": "Programación",
    "experience-title": "Experiencia",
    present: "Presente",
    "exp1-title": "Ingeniero de Seguridad IoT",
    "exp1-company": "Empresa Tecnológica",
    "exp1-desc":
      "Desarrollo e implementación de soluciones de seguridad para dispositivos IoT. Auditorías de seguridad, análisis de vulnerabilidades y diseño de arquitecturas seguras para sistemas conectados.",
    "exp2-title": "Ingeniero Electrónico",
    "exp2-company": "Startup de IoT",
    "exp2-desc":
      "Diseño y desarrollo de dispositivos IoT desde el concepto hasta la producción. Implementación de protocolos de comunicación y optimización de consumo energético.",
    "exp3-title": "Desarrollador de Sistemas Embebidos",
    "exp3-company": "Empresa de Automatización",
    "exp3-desc":
      "Programación de microcontroladores y desarrollo de firmware para sistemas de automatización industrial. Integración de sensores y actuadores.",
    "projects-title": "Proyectos Destacados",
    "project1-title": "Sistema de Seguridad IoT",
    "project1-desc":
      "Plataforma completa de seguridad para dispositivos IoT con detección de intrusiones, análisis de tráfico en tiempo real y alertas automáticas.",
    "project2-title": "Red de Sensores Ambientales",
    "project2-desc":
      "Red distribuida de sensores IoT para monitoreo ambiental con comunicación LoRaWAN y visualización de datos en tiempo real.",
    "project3-title": "Herramienta de Pentesting IoT",
    "project3-desc":
      "Suite de herramientas para análisis de seguridad y pentesting específico para dispositivos IoT y protocolos de comunicación.",
    "project4-title": "Gateway IoT Seguro",
    "project4-desc":
      "Gateway personalizado con cifrado end-to-end para comunicación segura entre dispositivos IoT y la nube.",
    "contact-title": "Contacto",
    "contact-text":
      "¿Tienes un proyecto interesante en mente? ¿Necesitas consultoría en ciberseguridad o IoT? Me encantaría escuchar sobre tu idea y ver cómo puedo ayudarte.",
    "contact-button": "Enviar Mensaje",
    location: "Tu Ciudad, País",
    "footer-text": "Diseñado y construido con pasión por la tecnología",
  },
  en: {
    name: "Your Name",
    title: "Electronic Engineer",
    subtitle: "Cybersecurity & IoT",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-experience": "Experience",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "about-title": "About Me",
    "about-lead":
      "I am an electronic engineer passionate about the intersection of hardware, software, and digital security.",
    "about-p1":
      "My experience ranges from electronic circuit design to implementing secure IoT systems. I specialize in creating solutions that not only work but are protected against modern cyber threats.",
    "about-p2":
      "With a focus on cybersecurity applied to IoT devices, I constantly work on projects that combine cutting-edge electronics with robust security protocols. My goal is to build the connected future in a secure and efficient way.",
    "interest-electronics": "Electronics",
    "interest-electronics-desc": "Circuit design and embedded systems",
    "interest-security": "Cybersecurity",
    "interest-security-desc": "System and network protection",
    "interest-iot": "IoT",
    "interest-iot-desc": "Internet of Things and connectivity",
    "skills-title": "Technical Skills",
    "skills-electronics-title": "Electronics & Hardware",
    "skills-security-title": "Cybersecurity",
    "skills-iot-title": "IoT & Connectivity",
    "skills-programming-title": "Programming",
    "experience-title": "Experience",
    present: "Present",
    "exp1-title": "IoT Security Engineer",
    "exp1-company": "Technology Company",
    "exp1-desc":
      "Development and implementation of security solutions for IoT devices. Security audits, vulnerability analysis, and design of secure architectures for connected systems.",
    "exp2-title": "Electronic Engineer",
    "exp2-company": "IoT Startup",
    "exp2-desc":
      "Design and development of IoT devices from concept to production. Implementation of communication protocols and power consumption optimization.",
    "exp3-title": "Embedded Systems Developer",
    "exp3-company": "Automation Company",
    "exp3-desc":
      "Microcontroller programming and firmware development for industrial automation systems. Integration of sensors and actuators.",
    "projects-title": "Featured Projects",
    "project1-title": "IoT Security System",
    "project1-desc":
      "Complete security platform for IoT devices with intrusion detection, real-time traffic analysis, and automatic alerts.",
    "project2-title": "Environmental Sensor Network",
    "project2-desc":
      "Distributed network of IoT sensors for environmental monitoring with LoRaWAN communication and real-time data visualization.",
    "project3-title": "IoT Pentesting Tool",
    "project3-desc":
      "Suite of tools for security analysis and pentesting specific to IoT devices and communication protocols.",
    "project4-title": "Secure IoT Gateway",
    "project4-desc":
      "Custom gateway with end-to-end encryption for secure communication between IoT devices and the cloud.",
    "contact-title": "Contact",
    "contact-text":
      "Do you have an interesting project in mind? Need cybersecurity or IoT consulting? I would love to hear about your idea and see how I can help you.",
    "contact-button": "Send Message",
    location: "Your City, Country",
    "footer-text": "Designed and built with passion for technology",
  },
}

// Language switcher
let currentLang = "es"

function changeLanguage(lang) {
  currentLang = lang
  document.documentElement.lang = lang

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n")
    if (translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active")
    }
  })

  // Save preference
  localStorage.setItem("preferredLanguage", lang)
}

// Language button event listeners
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang")
    changeLanguage(lang)
  })
})

// Load saved language preference
const savedLang = localStorage.getItem("preferredLanguage")
if (savedLang) {
  changeLanguage(savedLang)
}

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update active nav link
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
    }
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section)
})

// Update active nav link on scroll
const sections = document.querySelectorAll(".section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add hover effect to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Console message for developers
console.log("%c¡Hola Developer! 👋", "color: #00d9ff; font-size: 20px; font-weight: bold;")
console.log(
  "%cSi estás viendo esto, probablemente te guste la tecnología tanto como a mí.",
  "color: #8892b0; font-size: 14px;",
)
console.log("%c¡Conectemos! 🚀", "color: #00ff88; font-size: 16px; font-weight: bold;")
