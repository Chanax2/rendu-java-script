let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");
  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
    errorContainer.classList.remove("visible");
  }

  let pseudo = document.querySelector("#pseudo");
  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le pseudo doit ontenir + 2 6 CARACTERE";

    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );
  let password = document.querySelector("#password");
  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le password doit ontenir + 2 10 CARACTERE";

    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  if (password.value !== "") {
    let passwordConfirm = document.querySelector("#password2");
    if (
      passwordConfirm.value !== "" ||
      password.value !== passwordConfirm.value
    ) {
      errorContainer.classList.add("visible");
      passwordConfirm.classList.remove("success");

      let err = document.createElement("li");
      err.innerText = "Les deux password doivent être identiques";

      errorList.appendChild(err);
    } else {
      passwordConfirm.classList.add("success");
    }
  }
  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});
