const heroTitles = document.querySelectorAll('.hero-title');
const heroTexts = document.querySelectorAll('.hero-text');

heroTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
        heroTexts[index].classList.toggle('hidden');
    });
});
