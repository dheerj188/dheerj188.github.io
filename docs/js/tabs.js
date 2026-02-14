// Tabs Functionality

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Support for URL hash navigation (e.g., #publications)
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetButton = document.querySelector(`[data-tab="${hash}"]`);
        if (targetButton) {
            targetButton.click();
        }
    }

    // Update URL hash when tab changes
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            history.replaceState(null, null, `#${targetTab}`);
        });
    });
});
