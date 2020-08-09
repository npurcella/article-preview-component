const share = document.querySelector('.icon-share');
const footer = document.querySelector('footer');

share.addEventListener('click', () => {
    footer.classList.toggle('footer-dark');
});
