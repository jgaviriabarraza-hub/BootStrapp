// Mostrar / ocultar contraseña
document.querySelectorAll(".password-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    const icon = button.querySelector("i");

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
      button.setAttribute("aria-label", "Ocultar contraseña");
    } else {
      input.type = "password";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
      button.setAttribute("aria-label", "Mostrar contraseña");
    }
  });
});

// Validación y simulación de registro
const form = document.getElementById("registerForm");
const password = document.getElementById("contrasena");
const confirmPassword = document.getElementById("confirmar");
const passwordFeedback = document.getElementById("passwordFeedback");
const confirmFeedback = document.getElementById("confirmFeedback");
const successMessage = document.getElementById("successMessage");

function validatePasswords() {
  let valid = true;

  if (password.value.length < 8) {
    password.classList.add("is-invalid");
    passwordFeedback.textContent = "La contraseña debe tener mínimo 8 caracteres.";
    valid = false;
  } else {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    passwordFeedback.textContent = "";
  }

  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPassword.classList.add("is-invalid");
    confirmPassword.classList.remove("is-valid");
    confirmFeedback.textContent = "Las contraseñas deben coincidir.";
    valid = false;
  } else {
    confirmPassword.classList.remove("is-invalid");
    confirmPassword.classList.add("is-valid");
    confirmFeedback.textContent = "";
  }

  return valid;
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

form.addEventListener("submit", event => {
  event.preventDefault();

  // Bootstrap valida los campos required/email
  if (!form.checkValidity() || !validatePasswords()) {
    event.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  form.classList.add("was-validated");
  successMessage.classList.remove("d-none");

  // Simulación de registro local
  const user = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    correo: document.getElementById("correo").value,
    novedades: document.getElementById("novedades").checked
  };

  localStorage.setItem("maisonAurelUser", JSON.stringify(user));

  setTimeout(() => {
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
});

// Botón "Inicia sesión"
document.getElementById("loginLink").addEventListener("click", event => {
  event.preventDefault();
  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  modal.show();
});
