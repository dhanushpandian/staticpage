// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Adjust scroll offset as needed
                    behavior: 'smooth'
                });
            }
        });
    }
});
