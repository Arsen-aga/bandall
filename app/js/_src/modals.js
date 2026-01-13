// Изменение времени в модальном окне, по нажатию на табы

const timeToggle = document.querySelectorAll(".time-check input");
const timeInput = document.querySelector(".time-input");

if (timeToggle.length && timeInput) {
  timeToggle.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.value === "По времени" && btn.checked) {
        timeInput.disabled = false;
      } else {
        timeInput.disabled = true;
        timeInput.value = "";
      }
    });
  });
}

// Изменение заголовка и инпут from в попапе, по нажатию на кнопку в item

const btns = document.querySelectorAll("[href='#technical-solution']");
btns?.forEach((btn) => {
  btn.addEventListener("click", function () {
    const id = btn.href.split("#")[1];
    const modal = document.getElementById(id);
    const modalFrom = modal.querySelector('[name="from"]');
    const modalTitle = modal.querySelector("h2");

    const startCalcText =
      "Получите техническое решение<br /> по системе <span>Bandall</span> под вашу <br />продукцию и ТЗ:";
    const startFromText =
      "Получите техническое решение по системе Bandall под вашу продукцию и ТЗ:";

      if(btn.classList.contains('change-popup')){
        const item = btn.closest(".change-popup-item");
        const changeTitle = item.querySelector(".change-popup-title").textContent;
        modalTitle.innerHTML = `${startCalcText} (${changeTitle.trim()})`;
        modalFrom.value = `${startFromText} (${changeTitle.trim()})`;
        return
      }
      modalTitle.innerHTML = startCalcText;
      modalFrom.value = startFromText;
  });
});
