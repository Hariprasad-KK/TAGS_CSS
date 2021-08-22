const child2El = document.querySelector('.content');
const runEl = document.querySelector('.run');

runEl.addEventListener('click', () => {
  child2El.classList.remove('hidden');
});
