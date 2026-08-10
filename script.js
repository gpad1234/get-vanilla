const themeToggle = document.getElementById('theme-toggle');
const ideaForm = document.getElementById('idea-form');
const ideaInput = document.getElementById('idea-input');
const ideaList = document.getElementById('idea-list');
const year = document.getElementById('year');

const storageKey = 'vanilla-web-ideas';

function loadIdeas() {
  const stored = localStorage.getItem(storageKey);
  return stored ? JSON.parse(stored) : [];
}

function saveIdeas(ideas) {
  localStorage.setItem(storageKey, JSON.stringify(ideas));
}

function renderIdeas(ideas) {
  if (!ideas.length) {
    ideaList.innerHTML = '<li>No ideas yet. Add the first one.</li>';
    return;
  }

  ideaList.innerHTML = ideas
    .map((idea) => `<li>${idea}</li>`)
    .join('');
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  themeToggle.textContent = isLight ? 'Switch to dark' : 'Toggle theme';
}

const ideas = loadIdeas();
renderIdeas(ideas);
year.textContent = new Date().getFullYear();

if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.body.classList.add('light-theme');
  themeToggle.textContent = 'Switch to dark';
}

themeToggle.addEventListener('click', toggleTheme);

ideaForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = ideaInput.value.trim();

  if (!value) {
    return;
  }

  const nextIdeas = [value, ...ideas];
  ideas.unshift(value);
  saveIdeas(ideas);
  renderIdeas(ideas);
  ideaForm.reset();
  ideaInput.focus();
});
