// Data
const ROLES = ["CSE Student", "Web Developer", "Future Software Engineer"];
const SKILLS = [
  { name: "HTML", level: 92 }, { name: "CSS", level: 88 },
  { name: "JavaScript", level: 85 }, { name: "Python", level: 80 },
  { name: "C++", level: 78 }, { name: "Git & GitHub", level: 82 },
  { name: "Problem Solving", level: 85 }, { name: "Data Structures & Algorithms", level: 75 },
];
const PROJECTS = [
  { title: "Routine Management App", desc: "Smart class & study routine planner with reminders and weekly view.", tags: ["JavaScript","UI","Productivity"] },
  { title: "Overtime Calculator", desc: "Clean tool for computing overtime pay across flexible shift rules.", tags: ["JS","Logic","Tool"] },
  { title: "Student Management System", desc: "CRUD system to manage students, courses and grades with reports.", tags: ["Python","Database","System"] },
  { title: "GitHub Portfolio Website", desc: "This personal portfolio — built with care, deployed on the web.", tags: ["HTML","CSS","JS"] },
];

// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Render skills
const skillsGrid = document.getElementById('skillsGrid');
SKILLS.forEach(s => {
  const el = document.createElement('div');
  el.className = 'card glass skill';
  el.innerHTML = `<div class="skill-head"><span>${s.name}</span><span class="pct">${s.level}%</span></div><div class="bar"><span data-level="${s.level}"></span></div>`;
  skillsGrid.appendChild(el);
});

// Render projects
const projectsGrid = document.getElementById('projectsGrid');
PROJECTS.forEach(p => {
  const el = document.createElement('div');
  el.className = 'card glass project';
  el.innerHTML = `<div class="project-icon">${p.title[0]}</div><h3>${p.title}</h3><p class="muted">${p.desc}</p><div class="tag-row">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
  projectsGrid.appendChild(el);
});

// Typing effect
const roleEl = document.getElementById('role');
let ri = 0, ci = 0, deleting = false;
function type() {
  const cur = ROLES[ri];
  roleEl.textContent = cur.slice(0, ci);
  if (!deleting && ci < cur.length) { ci++; setTimeout(type, 90); }
  else if (!deleting && ci === cur.length) { deleting = true; setTimeout(type, 1400); }
  else if (deleting && ci > 0) { ci--; setTimeout(type, 50); }
  else { deleting = false; ri = (ri+1) % ROLES.length; setTimeout(type, 200); }
}
type();

// Theme toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  themeBtn.textContent = document.documentElement.classList.contains('light') ? '🌙' : '☀️';
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Back to top
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => topBtn.classList.toggle('show', window.scrollY > 400));
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal on scroll + animate skill bars
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.bar > span').forEach(b => b.style.width = b.dataset.level + '%');
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.section, .hero-text, .card').forEach(el => { el.classList.add('reveal'); obs.observe(el); });

// Particles
const particles = document.getElementById('particles');
for (let i = 0; i < 40; i++) {
  const s = document.createElement('span');
  const size = 2 + Math.random() * 4;
  s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${6+Math.random()*10}s;animation-delay:${Math.random()*6}s;`;
  particles.appendChild(s);
}
