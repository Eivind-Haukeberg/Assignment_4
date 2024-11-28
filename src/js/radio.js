// Radio Buttons Language Toggle

const languageLabel = document.querySelector(".language-label");
const radioButtons = document.querySelectorAll(".radio-button");
const languageOptions = document.querySelectorAll(".language-option");

radioButtons.forEach(function (radio, index) {
  radio.addEventListener("change", function () {
    if (radio.checked) {
      if (radio.value === "Norwegian") {
        languageLabel.textContent = "Språk";
        languageOptions[0].textContent = "Engelsk";
        languageOptions[1].textContent = "Norsk";
        languageOptions[2].textContent = "Tysk";
      } else if (radio.value === "German") {
        languageLabel.textContent = "Sprache";
        languageOptions[0].textContent = "Englisch";
        languageOptions[1].textContent = "Norwegisch";
        languageOptions[2].textContent = "Deutsch";
      } else {
        languageLabel.textContent = "Language";
        languageOptions[0].textContent = "English";
        languageOptions[1].textContent = "Norwegian";
        languageOptions[2].textContent = "German";
      }
    }
  });
});
