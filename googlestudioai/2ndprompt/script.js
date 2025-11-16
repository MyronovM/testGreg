document.addEventListener('DOMContentLoaded', () => {
    // Media Query for Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    // Robust null checks for elements
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Accessibility: Toggle aria-expanded attribute
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close nav when a link is clicked (for single-page navigation)
        mainNav.querySelectorAll('.wa-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Popover API is largely declarative, but it's good practice to log
    // interactions for debugging or more complex dynamic content scenarios.
    const moreInfoPopover = document.getElementById('more-info-popover');
    if (moreInfoPopover) {
        moreInfoPopover.addEventListener('beforetoggle', (event) => {
            if (event.newState === 'open') {
                console.log('Popover: "More Info" is about to open.');
                // Here, you could fetch dynamic content, set initial focus, etc.
            } else {
                console.log('Popover: "More Info" is about to close.');
            }
        });

        moreInfoPopover.addEventListener('toggle', (event) => {
            console.log(`Popover: "More Info" has ${event.newState}.`);
        });
    }

    // Example of adding a simple scroll-to-top feature (for efficiency/UX)
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.className = 'wa-button wa-button-primary wa-rounded-full wa-fixed wa-bottom-8 wa-right-8 wa-shadow-lg wa-opacity-0 wa-transition-opacity wa-duration-300';
    scrollToTopButton.style.cssText = 'width: 50px; height: 50px; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; z-index: 999;';
    document.body.appendChild(scrollToTopButton);

    const toggleScrollButton = () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopButton.classList.remove('wa-opacity-0');
            scrollToTopButton.classList.add('wa-opacity-100');
        } else {
            scrollToTopButton.classList.remove('wa-opacity-100');
            scrollToTopButton.classList.add('wa-opacity-0');
        }
    };

    window.addEventListener('scroll', toggleScrollButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    toggleScrollButton(); // Initial check on load
});