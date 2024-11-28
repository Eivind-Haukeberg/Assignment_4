// Toast

const showToast = document.querySelector(".button-test");

showToast.addEventListener("click", function () {
  const toast = document.querySelector(".toast");
  toast.classList.add("shown");
  setTimeout(function () {
    toast.classList.remove("shown");
  }, 3000);
});
