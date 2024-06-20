document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.background = `conic-gradient(#7113a0 0% ${percent}%, #e0e0e0 ${percent}% 100%)`;
    });
});
