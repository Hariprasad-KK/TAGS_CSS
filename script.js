const unorderedbtn = document.querySelector('.unordered-tag');
const paragraphbtn = document.querySelector('.paragraph-tag');

const unorderedContentEL = document.querySelector('.unorder-content');
const paragraphContentEl = document.querySelector('.content-c');

unorderedbtn.addEventListener('click', () => {
  paragraphContentEl.classList.add('hidden');
  unorderedContentEL.classList.remove('hidden');
});

paragraphbtn.addEventListener('click', () => {
  paragraphContentEl.classList.remove('hidden');
  unorderedContentEL.classList.add('hidden');
});
