const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

console.log(menuToggle);
console.log(menu);

menuToggle.addEventListener("click", function () {
    console.log("Click");
    menu.classList.toggle("active");
});

// ===============================
// EMAILJS - FORMULARIO COTIZACIÓN
// ===============================

emailjs.init({
    publicKey: "lhhe7M3s0TMjAqOJW"
});

const formularioCotizacion = document.querySelector(".form-cotizacion");

if (formularioCotizacion) {
    formularioCotizacion.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_3clgtmr",
            "template_2gjzd7x",
            this
        )
        .then(function () {
            alert("¡Solicitud enviada correctamente! Nos pondremos en contacto contigo a la brevedad.");
            formularioCotizacion.reset();
        })
        .catch(function (error) {
            console.error("ERROR COMPLETO EMAILJS:", error);
            console.error("STATUS:", error.status);
            console.error("TEXT:", error.text);
            alert("Error EmailJS: " + (error.text || error.message || "Error desconocido"));
            alert("No se pudo enviar la solicitud. Por favor, inténtalo nuevamente.");
        });
    });
}