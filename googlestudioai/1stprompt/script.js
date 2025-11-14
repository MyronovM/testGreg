document.addEventListener('DOMContentLoaded', () => {
    // Media Query for Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Popover API is largely declarative, but here's how you might interact
    // if you had dynamic content or needed to programmatically show/hide.
    // In this example, the HTML `popovertarget` and `popovertargetaction`
    // attributes handle the basic show/hide behavior.

    const moreInfoPopover = document.getElementById('more-info-popover');
    if (moreInfoPopover) {
        // You can add event listeners for 'beforetoggle' or 'toggle' if needed
        moreInfoPopover.addEventListener('beforetoggle', (event) => {
            if (event.newState === 'open') {
                console.log('Popover is about to open');
                // Potentially fetch dynamic content here
            } else {
                console.log('Popover is about to close');
            }
        });
    }
});