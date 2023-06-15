document.querySelectorAll(".carousel-item").forEach(el => {
    el.addEventListener("scroll", () => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.querySelector("img").src = el.dataset.src;
        }
    });
});