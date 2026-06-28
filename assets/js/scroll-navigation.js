const siteNavigation = document.querySelector('#site-navigation');
const navigationRevealOffset = 80;

const updateNavigationVisibility = () => {
    const shouldShowNavigation = window.scrollY > navigationRevealOffset;

    siteNavigation.classList.toggle('is-visible', shouldShowNavigation);
    siteNavigation.setAttribute('aria-hidden', String(!shouldShowNavigation));
};

updateNavigationVisibility();
window.addEventListener('scroll', updateNavigationVisibility, { passive: true });
