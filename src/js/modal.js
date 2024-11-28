// Modal

const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");

openModalButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

closeModalButton.addEventListener("click", function () {
  modal.classList.add("hidden");
});
