// Crea la funcion show alert y cuanda es ejectudada muestra el mensaje entre comillas
function showAlert() { alert('!Hola, esta es una alerta desde JavaScript!'); }

// Crea el formulario con una constante y lo llama por ID
const form = document.getElementById('myForm');

// Agrega eventlistener para el boton de submit y u respectiva funcion
form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

// Checkea validacion de formato email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

// Checkea validacion del formulario
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Condiciones para validacion del formulario
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electronico valido.');
    } else {
            alert('Correo electronico enviado correctamente.');
        }
    }
    // Menu desplegable de los links en la barra de navegacion
    document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})