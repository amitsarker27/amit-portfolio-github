// ============================================================
// PORTFOLIO DATA
// ============================================================

const ROLES = [
  "CSE Student",
  "Aspiring Full-Stack Developer",
  "ASP.NET Core Developer",
  "Web Developer",
  "Problem Solver"
];

const SKILLS = [
  // ==================== FRONTEND ====================
  { name: "HTML", level: 92 },
  { name: "CSS", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "Bootstrap 5", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "React.js", level: 75 },
  { name: "Responsive Design", level: 88 },

  // ==================== BACKEND ====================
  { name: "C#", level: 78 },
  { name: "ASP.NET Core", level: 72 },
  { name: "ASP.NET MVC", level: 78 },
  { name: "Web API", level: 70 },
  { name: "PHP", level: 78 },

  // ==================== PROGRAMMING ====================
  { name: "C", level: 80 },
  { name: "C++", level: 78 },
  { name: "Python", level: 75 },

  // ==================== DATABASE ====================
  { name: "MySQL", level: 82 },
  { name: "SQL", level: 82 },
  { name: "phpMyAdmin", level: 80 },
  { name: "Database Management", level: 80 },

  // ==================== TOOLS ====================
  { name: "Git", level: 82 },
  { name: "GitHub", level: 85 },
  { name: "VS Code", level: 90 },
  { name: "Visual Studio", level: 82 },
  { name: "XAMPP", level: 78 },

  // ==================== COMPUTER SCIENCE ====================
  { name: "Object-Oriented Programming", level: 82 },
  { name: "Data Structures & Algorithms", level: 75 },
  { name: "Problem Solving", level: 85 },
  { name: "Web Development", level: 88 },
  { name: "REST API", level: 70 },

  // ==================== PRODUCTIVITY ====================
  { name: "MS Office", level: 85 }
];


// ============================================================
// PROJECTS
// ============================================================

const PROJECTS = [
  {
    title: "Pharmacy Management System",
    desc: "Full-stack pharmacy management system for managing medicines, inventory, sales, customers and records.",
    tags: ["C#", "ASP.NET MVC", "MySQL"]
  },

  {
    title: "Inventory Management System",
    desc: "Management system designed to track products, stock, inventory records and business operations.",
    tags: ["Web", "Database", "CRUD"]
  },

  {
    title: "Routine Management App",
    desc: "Smart class and study routine planner with date-based scheduling, weekly views and productivity features.",
    tags: ["JavaScript", "UI", "Productivity"]
  },

  {
    title: "Overtime Calculator",
    desc: "Clean web-based tool for calculating overtime pay using flexible working hours and shift rules.",
    tags: ["JavaScript", "Logic", "Tool"]
  },

  {
    title: "Student Management System",
    desc: "CRUD-based system for managing students, courses, grades and academic records with database integration.",
    tags: ["Python", "Database", "CRUD"]
  },

  {
    title: "E-Commerce Website",
    desc: "Responsive e-commerce website developed for a construction and consultancy business.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"]
  },

  {
    title: "Class Routine Web App",
    desc: "Web application for storing and accessing class routines by date, day and time.",
    tags: ["JavaScript", "Web App", "Database"]
  },

  {
    title: "GitHub Portfolio Website",
    desc: "Personal developer portfolio showcasing skills, projects, technologies and GitHub activity.",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];


// ============================================================
// YEAR
// ============================================================

const yearElement = document.getElementById("yr");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ============================================================
// RENDER SKILLS
// ============================================================

const skillsGrid = document.getElementById("skillsGrid");

if (skillsGrid) {

  SKILLS.forEach((skill) => {

    const el = document.createElement("div");

    el.className = "card glass skill";

    el.innerHTML = `
      <div class="skill-head">
        <span>${skill.name}</span>
        <span class="pct">${skill.level}%</span>
      </div>

      <div class="bar">
        <span data-level="${skill.level}"></span>
      </div>
    `;

    skillsGrid.appendChild(el);

  });

}


// ============================================================
// RENDER PROJECTS
// ============================================================

const projectsGrid = document.getElementById("projectsGrid");

if (projectsGrid) {

  PROJECTS.forEach((project) => {

    const el = document.createElement("div");

    el.className = "card glass project";

    el.innerHTML = `
      <div class="project-icon">
        ${project.title.charAt(0)}
      </div>

      <h3>${project.title}</h3>

      <p class="muted">
        ${project.desc}
      </p>

      <div class="tag-row">
        ${project.tags
          .map(tag => `<span class="tag">${tag}</span>`)
          .join("")}
      </div>
    `;

    projectsGrid.appendChild(el);

  });

}


// ============================================================
// TYPING EFFECT
// ============================================================

const roleEl = document.getElementById("role");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

  if (!roleEl) return;

  const currentRole = ROLES[roleIndex];

  roleEl.textContent = currentRole.slice(0, charIndex);

  // Typing
  if (!deleting && charIndex < currentRole.length) {

    charIndex++;

    setTimeout(type, 90);

  }

  // Pause after completing word
  else if (!deleting && charIndex === currentRole.length) {

    deleting = true;

    setTimeout(type, 1400);

  }

  // Deleting
  else if (deleting && charIndex > 0) {

    charIndex--;

    setTimeout(type, 50);

  }

  // Move to next role
  else {

    deleting = false;

    roleIndex = (roleIndex + 1) % ROLES.length;

    setTimeout(type, 250);

  }
}

type();


// ============================================================
// THEME TOGGLE
// ============================================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.documentElement.classList.toggle("light");

    const isLight =
      document.documentElement.classList.contains("light");

    themeBtn.textContent = isLight ? "🌙" : "☀️";

    // Save theme preference
    localStorage.setItem(
      "portfolio-theme",
      isLight ? "light" : "dark"
    );

  });

}


// ============================================================
// LOAD SAVED THEME
// ============================================================

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

  document.documentElement.classList.add("light");

  if (themeBtn) {
    themeBtn.textContent = "🌙";
  }

}


// ============================================================
// MOBILE MENU
// ============================================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

  });


  // Close menu after clicking a navigation link

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });

}


// ============================================================
// BACK TO TOP
// ============================================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

      topBtn.classList.add("show");

    } else {

      topBtn.classList.remove("show");

    }

  });


  topBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


// ============================================================
// REVEAL ON SCROLL + SKILL BAR ANIMATION
// ============================================================

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        // Animate skill bars
        entry.target
          .querySelectorAll(".bar > span")
          .forEach((bar) => {

            bar.style.width =
              bar.dataset.level + "%";

          });

      }

    });

  },

  {
    threshold: 0.15
  }

);


// Observe sections, hero and cards

document
  .querySelectorAll(".section, .hero-text, .card")
  .forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

  });


// ============================================================
// PARTICLES
// ============================================================

const particles = document.getElementById("particles");

if (particles) {

  for (let i = 0; i < 40; i++) {

    const particle = document.createElement("span");

    const size = 2 + Math.random() * 4;

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-duration: ${6 + Math.random() * 10}s;
      animation-delay: ${Math.random() * 6}s;
    `;

    particles.appendChild(particle);

  }

}


// ============================================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ============================================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (
        targetId &&
        targetId !== "#"
      ) {

        const target =
          document.querySelector(targetId);

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }

    });

  });
