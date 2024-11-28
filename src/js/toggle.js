// Toggle

const toggleCheckbox = document.querySelector(".toggle-checkbox");

toggleCheckbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.style.backgroundColor = "#8358d4";
  } else {
    document.body.style.backgroundColor = "#120224";
  }
});
