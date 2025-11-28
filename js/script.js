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
