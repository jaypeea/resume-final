document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section_container section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const sectionId = this.getAttribute('data-section-id');
            scrollToSection(sectionId);

            sections.forEach(section => {
                if (section.id !== sectionId) {
                    section.classList.remove('blinking-twice');
                }
            });

            const clickedSection = document.getElementById(sectionId);
            if (clickedSection) {
                clickedSection.classList.add('blinking-twice');

                setTimeout(() => {
                    clickedSection.classList.remove('blinking-twice');
                }, 2000);
            }
        });
    });

    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const bounding = section.getBoundingClientRect();
            if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                section.classList.add('blinking');
            } else {
                section.classList.remove('blinking');
            }
        });
    });
});

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}