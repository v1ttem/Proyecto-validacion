document.addEventListener("DOMContentLoaded", () => {
  const validateDniButton = document.getElementById("validateDniButton");
  validateDniButton.addEventListener("click", () => {
    const dniInput = document.getElementById("dniInput").value;
    const validationResult = document.getElementById("validationResult");

    if (!dniInput) {
      validationResult.textContent = "Por favor, ingrese un DNI.";
      validationResult.style.color = "red";
      return;
    }

    fetch("http://localhost:3000/usuarios")
      .then((response) => response.json())
      .then((data) => {
        const usuario = data.find((u) => u.dni === dniInput);
        if (usuario) {
          validationResult.textContent = `DNI inscripto. Usuario: ${usuario.nombre} ${usuario.apellido}`;
          validationResult.style.color = "green";
        } else {
          validationResult.textContent = "DNI no inscripto.";
          validationResult.style.color = "red";
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        validationResult.textContent = "Error al validar el DNI.";
        validationResult.style.color = "red";
      });
  });
});
