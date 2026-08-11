const themeToggle = document.getElementById('theme-toggle');
const ideaForm = document.getElementById('idea-form');
const ideaInput = document.getElementById('idea-input');
const ideaList = document.getElementById('idea-list');
const formStatus = document.getElementById('form-status');
const year = document.getElementById('year');

const storageKey = 'vanilla-web-ideas';

function loadIdeas() {
  const stored = localStorage.getItem(storageKey);
  return stored ? JSON.parse(stored) : [];
}

function saveIdeas(ideas) {
  localStorage.setItem(storageKey, JSON.stringify(ideas));
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function updateStatus(message) {
  formStatus.textContent = message;
}

function renderIdeas(ideas) {
  if (!ideas.length) {
    ideaList.innerHTML = '<li>No ideas yet. Add the first one.</li>';
    updateStatus('No ideas saved yet.');
    return;
  }

  ideaList.innerHTML = ideas
    .map((idea) => `<li>${escapeHtml(idea)}</li>`)
    .join('');
  updateStatus(`${ideas.length} idea${ideas.length === 1 ? '' : 's'} saved.`);
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
    updateStatus('Please enter an idea before submitting.');
    return;
  }

  ideas.unshift(value);
  saveIdeas(ideas);
  renderIdeas(ideas);
  ideaForm.reset();
  ideaInput.focus();
});
