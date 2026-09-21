const form = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "메시지가 준비되었습니다. 곧 답변드릴게요!";
  form.reset();
});
