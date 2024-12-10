// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth Scroll Effect
//     const links = document.querySelectorAll('.nav a');
//     links.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         });
//     });

//     // Light/Dark Mode Toggle
//     const toggleButton = document.createElement('button');
//     // toggleButton.textContent = '🌙 / 🌞 Toggle ';
//     toggleButton.classList.add('theme-toggle');
//     document.body.appendChild(toggleButton);
    
//     toggleButton.addEventListener('click', () => {
//         const currentTheme = document.body.getAttribute('data-theme');
//         document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
//     });

//     // Animation on Scroll for Blog Cards
//     const blogCards = document.querySelectorAll('.blog-card');
//     window.addEventListener('scroll', () => {
//         blogCards.forEach(card => {
//             if (card.getBoundingClientRect().top < window.innerHeight) {
//                 card.classList.add('animate');
//             }
//         });
//     });
// });
