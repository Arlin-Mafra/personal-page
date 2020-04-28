const modelOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", () => {
    const movie_id = card.getAttribute("id");
    modelOverlay.classList.add("active");
    document.querySelector(
      "iframe"
    ).src = `http://www.youtube.com/embed/${movie_id}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modelOverlay.classList.remove("active");
  document.querySelector("iframe").src = "";
});
