document.addEventListener('DOMContentLoaded', () => {
    // Add simple interactivity if needed, e.g. active link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            e.target.classList.add('active');
        });
    });

    console.log("Ministry of Economy and Trade Portal initialized.");
});
