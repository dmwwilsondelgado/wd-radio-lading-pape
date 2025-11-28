const logos = document.querySelectorAll(".logo");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.5
});

logos.forEach(logo => observer.observe(logo));

//vamos a crear interactividad al botom desde el doom

const btn = document.querySelector(".btn-toggle");
const card = document.querySelector(".blog-card-content");

btn.addEventListener("click", () => {
    card.classList.toggle("active");

    btn.textContent = card.classList.contains("active")
        ? "Leer menos"
        : "Leer más";
});
