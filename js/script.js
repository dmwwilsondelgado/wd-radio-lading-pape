document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM listo");
  //////////////////////////////////////////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //vamos a crear interactividad al botom desde el doom

  const btn = document.querySelector(".btn-toggle");
  const card = document.querySelector(".blog-card-content");

  btn.addEventListener("click", () => {
      card.classList.toggle("active");

      btn.textContent = card.classList.contains("active")
          ? "Leer menos"
          : "Leer más";
  });
  //scroll suavizado me lo dio chat es muy complicado 
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();

      const destino = document.querySelector(this.getAttribute('href'));
      const inicio = window.pageYOffset;
      const fin = destino.getBoundingClientRect().top;
      const duracion = 800; // ⬅ controla la suavidad (ms)

      let start = null;

      function animarScroll(timestamp) {
        if (!start) start = timestamp;
        const progreso = timestamp - start;
        const avance = easeInOut(progreso, inicio, fin, duracion);
        window.scrollTo(0, avance);

        if (progreso < duracion) {
          requestAnimationFrame(animarScroll);
        }
      }

      function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animarScroll);
    });
  });
  ///////////////////////////////////////////////////////////////////////
  const player = document.getElementById(`player`);
  const playBtn = document.getElementById(`playBtn`);
  const volume = document.getElementById("volume");
  //ya selecionados creamo un evento en el cual estas contantes sean utili<adas
  playBtn.addEventListener("clik",()=>{
    if (player.paused) {
        player.play();
        playBtn.classList.add("playing");
    }else{
      player.pause();
      playBtn.classList.remove("playing");
    }
  })
  player.addEventListener("error",()=>{
    alert("no se pudo conenctar al stream");
  })
  //control de volumen 
  volume.addEventListener("input",()=>{
    player.volume = volume.volume;
  })
  //links de enalces 
  let enlace1 = "https://stream.zeno.fm/hmu22t6g798uv";
  let enlace2 = "https://stream.zeno.fm/hmu22t6g798uv.m3u";
  let enlace3 = "https://stream.zeno.fm/hmu22t6g798uv.pls";
});


window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// scroll suvizado 
