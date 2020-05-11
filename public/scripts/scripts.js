const modelOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", () => {
    const movie_id = card.getAttribute("id");
    window.location.href= `/video?id=${movie_id}`
  });
}

