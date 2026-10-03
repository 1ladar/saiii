// ---------------------------------------------------------
// BELLE BIRTHDAY SITE INTERACTIONS
// ---------------------------------------------------------

const steps = [...document.querySelectorAll(".opening-step")];
function showStep(id){
  steps.forEach(step => step.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => showStep(btn.dataset.next));
});
document.getElementById("reveal-belle").addEventListener("click", () => showStep("step-4"));

const opening = document.getElementById("opening");
const site = document.getElementById("site");
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

document.getElementById("enter-site").addEventListener("click", () => {
  opening.style.opacity = "0";
  opening.style.transition = "opacity .7s ease";
  setTimeout(() => {
    opening.style.display = "none";
    site.hidden = false;
    window.scrollTo(0, 0);
  }, 650);

  // Starts only after a tap, so mobile browsers allow it.
  music.play().then(() => musicBtn.classList.add("playing")).catch(() => {});
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => musicBtn.classList.add("playing")).catch(() => {});
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
});

// Broken/missing photos automatically show the handwritten placeholder.
document.querySelectorAll(".photo-slot img").forEach(img => {
  img.addEventListener("error", () => { img.style.display = "none"; });
});

// Flowers
const flowerMessage = document.getElementById("flower-message");
document.querySelectorAll(".flower-wrap").forEach(flower => {
  flower.addEventListener("click", () => {
    flowerMessage.style.opacity = "0";
    setTimeout(() => {
      flowerMessage.textContent = flower.dataset.message;
      flowerMessage.style.opacity = "1";
    }, 120);
  });
});

// Letter modal
const letterModal = document.getElementById("letter-modal");
const letterTitle = document.getElementById("letter-title");
const letterText = document.getElementById("letter-text");

document.querySelectorAll(".envelope").forEach(envelope => {
  envelope.addEventListener("click", () => {
    letterTitle.textContent = envelope.dataset.title;
    letterText.textContent = envelope.dataset.letter;
    letterModal.classList.add("show");
  });
});

// Photo modal
const photoModal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");

document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => {
    modalImage.src = card.dataset.src;
    modalCaption.textContent = card.dataset.caption;
    photoModal.classList.add("show");
  });
});

document.querySelectorAll(".close-modal").forEach(btn => {
  btn.addEventListener("click", () => document.getElementById(btn.dataset.close).classList.remove("show"));
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
  });
});

// Surprise
document.getElementById("surprise-btn").addEventListener("click", () => {
  document.getElementById("surprise-card").classList.toggle("show");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") document.querySelectorAll(".modal").forEach(m => m.classList.remove("show"));
});
