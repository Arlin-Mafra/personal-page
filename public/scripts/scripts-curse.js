//modal-curse

const modalOverlayCurse = document.querySelector(".modal-overlay-curse");
const cards = document.querySelectorAll(".card");
const modalCurse = document.querySelector(".modal-curse");

for (let card of cards) {
  card.addEventListener("click", () => {
    const curse_id = card.getAttribute("id");
    modalOverlayCurse.classList.add("active");
    document.querySelector(
      ".curse"
    ).src = `https://rocketseat.com.br/${curse_id}`;
  });
}

document.querySelector(".max-modal-curse").addEventListener("click", () => {
  if (!modalCurse.classList.contains("max")) modalCurse.classList.add("max");
  document.querySelector(".curse");
});
document.querySelector(".min-modal-curse").addEventListener("click", () => {
  if (!modalCurse.classList.contains("min")) modalCurse.classList.add("min");
  document.querySelector(".curse");
});

document.querySelector(".close-modal-curse").addEventListener("click", () => {
  modalOverlayCurse.classList.remove("active");
  document.querySelector(".curse").src = "";
});
