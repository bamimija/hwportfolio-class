const form = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");
const year = document.querySelector("#year");
const fields = [
  { input: document.querySelector("#name"), error: document.querySelector("#name-error"), requiredMessage: "이름을 입력해 주세요." },
  { input: document.querySelector("#email"), error: document.querySelector("#email-error"), requiredMessage: "이메일을 입력해 주세요." },
  { input: document.querySelector("#message"), error: document.querySelector("#message-error"), requiredMessage: "메시지를 입력해 주세요." },
];

year.textContent = new Date().getFullYear();

fields.forEach(({ input, error }) => {
  input.addEventListener("input", () => {
    input.removeAttribute("aria-invalid");
    error.textContent = "";
    formStatus.textContent = "";
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstInvalidField = null;
  fields.forEach(({ input, error, requiredMessage }) => {
    const value = input.value.trim();
    let message = "";

    if (!value) {
      message = requiredMessage;
    } else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = "올바른 이메일 주소를 입력해 주세요.";
    }

    error.textContent = message;
    if (message) {
      input.setAttribute("aria-invalid", "true");
      if (!firstInvalidField) firstInvalidField = input;
    } else {
      input.removeAttribute("aria-invalid");
    }
  });

  if (firstInvalidField) {
    formStatus.textContent = "입력 내용을 확인해 주세요.";
    firstInvalidField.focus();
    return;
  }

  formStatus.textContent = "모든 항목이 확인되었습니다. 실제 이메일은 전송되지 않았습니다.";
});
