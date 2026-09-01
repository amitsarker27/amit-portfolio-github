// ============================================================
// DATA
// ============================================================

const ROLES = [
  "CSE Student",
  "Aspiring Software Engineer",
  "Web Developer",
  "ASP.NET Developer",
  "Problem Solver"
];

const SKILLS = [

  // Frontend
  { name: "HTML", level: 92 },
  { name: "CSS", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 78 },
  { name: "Bootstrap", level: 82 },
  { name: "Tailwind CSS", level: 78 },

  // Programming
  { name: "C", level: 78 },
  { name: "C++", level: 80 },
  { name: "C#", level: 78 },
  { name: "Python", level: 80 },

  // Backend / .NET
  { name: "ASP.NET Core", level: 75 },
  { name: "ASP.NET MVC", level: 75 },
  { name: "Web API", level: 72 },

  // Database
  { name: "MySQL", level: 80 },
  { name: "SQL", level: 78 },
  { name: "Database Design", level: 75 },

  // Core CS
  { name: "OOP", level: 82 },
  { name: "Data Structures", level: 75 },
  { name: "Algorithms", level: 72 },
  { name: "Problem Solving", level: 85 },

  // Tools
  { name: "Git", level: 82 },
  { name: "GitHub", level: 85 },
  { name: "VS Code", level: 90 },
  { name: "Visual Studio", level: 78 },
  { name: "XAMPP", level: 80 },
  { name: "phpMyAdmin", level: 80 },

  // Other
  { name: "REST API", level: 72 },
  { name: "Responsive Design", level: 88 },
  { name: "UI/UX Basics", level: 75 }
];


// ============================================================
// PROJECTS
// ============================================================

const PROJECTS = [

  {
    title: "Appointment Management System",
    desc: "A complete appointment management system designed to manage appointments, users and service workflows efficiently.",
    tags: ["ASP.NET", "C#", "MVC", "Database"],
    github: "https://github.com/amitsarker27/appoinment-management-system",
    featured: true
  },

  {
    title: "ISP Management System",
    desc: "An ISP management system for handling customers, internet services and operational management.",
    tags: ["C#", "Database", "Management System"],
    github: "https://github.com/amitsarker27/isp_system",
    featured: true
  },

  {
    title: "Banking Management System",
    desc: "A banking system project focused on customer accounts, transactions and core banking operations.",
    tags: ["C#", "OOP", "Database"],
    github: "#",
    featured: true
  },

  {
    title: "Routine Management System",
    desc: "A smart routine management application for organizing class and study schedules with a simple user-friendly interface.",
    tags: ["JavaScript", "HTML", "CSS", "Productivity"],
    github: "#",
    featured: false
  },

  {
    title: "Amit Portfolio",
    desc: "Personal portfolio website showcasing my skills, projects, education and software development journey.",
    tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
    github: "https://github.com/amitsarker27/amit-portfolio-github",
    featured: false
  }

];


// ============================================================
// YEAR
// ============================================================

document.getElementById("yr").textContent =
  new Date().getFullYear();


// ============================================================
// RENDER SKILLS
// ============================================================

const skillsGrid =
  document.getElementById("skillsGrid");

skillsGrid.innerHTML = "";

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


// ============================================================
// RENDER PROJECTS
// ============================================================

const projectsGrid =
  document.getElementById("projectsGrid");

projectsGrid.innerHTML = "";

PROJECTS.forEach((project) => {

  const el = document.createElement("div");

  el.className =
    `card glass project ${
      project.featured ? "featured-project" : ""
    }`;

  el.innerHTML = `

    ${
      project.featured
        ? `<span class="featured-label">Featured</span>`
        : ""
    }

    <div class="project-icon">
      ${project.title.charAt(0)}
    </div>

    <h3>${project.title}</h3>

    <p class="muted">
      ${project.desc}
    </p>

    <div class="tag-row">

      ${project.tags
        .map(
          tag => `<span class="tag">${tag}</span>`
        )
        .join("")}

    </div>

    ${
      project.github !== "#"
        ? `
          <a
            class="project-link"
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        `
        : ""
    }

  `;

  projectsGrid.appendChild(el);

});


// ============================================================
// TYPING EFFECT
// ============================================================

const roleEl =
  document.getElementById("role");

let ri = 0;
let ci = 0;
let deleting = false;

function type() {

  const currentRole =
    ROLES[ri];

  roleEl.textContent =
    currentRole.slice(0, ci);

  if (!deleting && ci < currentRole.length) {

    ci++;

    setTimeout(type, 80);

  }

  else if (!deleting && ci === currentRole.length) {

    deleting = true;

    setTimeout(type, 1400);

  }

  else if (deleting && ci > 0) {

    ci--;

    setTimeout(type, 45);

  }

  else {

    deleting = false;

    ri =
      (ri + 1) % ROLES.length;

    setTimeout(type, 250);

  }

}

type();


// ============================================================
// THEME TOGGLE
// ============================================================

const themeBtn =
  document.getElementById("themeBtn");

themeBtn.addEventListener(
  "click",
  () => {

    document.documentElement
      .classList
      .toggle("light");

    const isLight =
      document.documentElement
        .classList
        .contains("light");

    themeBtn.textContent =
      isLight ? "🌙" : "☀️";

  }
);


// ============================================================
// MOBILE MENU
// ============================================================

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");

menuBtn.addEventListener(
  "click",
  () => {

    navLinks.classList.toggle("open");

  }
);

navLinks
  .querySelectorAll("a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        navLinks.classList.remove("open");

      }
    );

  });


// ============================================================
// BACK TO TOP
// ============================================================

const topBtn =
  document.getElementById("topBtn");

window.addEventListener(
  "scroll",
  () => {

    topBtn.classList.toggle(
      "show",
      window.scrollY > 400
    );

  }
);

topBtn.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


// ============================================================
// REVEAL + SKILL ANIMATION
// ============================================================

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target
            .classList
            .add("visible");

          entry.target
            .querySelectorAll(
              ".bar > span"
            )
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

document
  .querySelectorAll(
    ".section, .hero-text, .card"
  )
  .forEach((el) => {

    el.classList.add("reveal");

    observer.observe(el);

  });


// ============================================================
// PARTICLES
// ============================================================

const particles =
  document.getElementById("particles");

for (let i = 0; i < 40; i++) {

  const particle =
    document.createElement("span");

  const size =
    2 + Math.random() * 4;

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
