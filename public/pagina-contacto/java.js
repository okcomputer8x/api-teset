document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

//prueba con mensaje de alert ,pero hay que borrar el span para q funcione en el form del html
// // Esperamos a que el DOM esté completamente cargado
// document.addEventListener("DOMContentLoaded", function() {
//     // Obtenemos el formulario
//     var form = document.getElementById("contact_form");

//     // Agregamos un evento de escucha para el envío del formulario
//     form.addEventListener("submit", function(event) {
//         // Evitamos que el formulario se envíe automáticamente
//         event.preventDefault();

//         // Obtenemos los valores de los campos del formulario
//         var firstName = document.getElementById("first_name").value;
//         var emailAddress = document.getElementById("email_address").value;
//         var phoneNumber = document.getElementById("phone_number").value;
//         var message = document.getElementById("message").value;

//         // Verificamos si algún campo está vacío
//         if (firstName === "" || emailAddress === "" || phoneNumber === "" || message === "") {
//             // Mostramos un mensaje de error
//             alert("Por favor, complete todos los campos.");
//         } else {
//             // Si todos los campos están completos, enviamos el formulario
//             form.submit();
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact_form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var firstName = document.getElementById("first_name").value;
        var surname = document.getElementById("Surname_name").value;
        var emailAddress = document.getElementById("email_address").value;
        var phoneNumber = document.getElementById("phone_number").value;
        var message = document.getElementById("message").value;

        var firstNameError = document.getElementById("first_name_error");
        var surnameNameError = document.getElementById("Surname_name_error");
        var emailAddressError = document.getElementById("email_address_error");
        var phoneNumberError = document.getElementById("phone_number_error");
        var messageError = document.getElementById("message_error");

        // Limpiamos los mensajes de error anteriores
        firstNameError.innerHTML = "";
        surnameNameError.innerHTML = "";
        emailAddressError.innerHTML = "";
        phoneNumberError.innerHTML = "";
        messageError.innerHTML = "";

        // Verificamos si algún campo está vacío
        if (firstName === "") {
            firstNameError.innerHTML = "Por favor, complete este campo.";
        }

        if (surname === "") {
            surnameNameError.innerHTML = "Por favor, complete este campo.";
        }

        if (emailAddress === "") {
            emailAddressError.innerHTML = "Por favor, complete este campo.";
        }

        if (phoneNumber === "") {
            phoneNumberError.innerHTML = "Por favor, complete este campo.";
            }
            else if (!/^\d+$/.test(phoneNumber)) {
                phoneNumberError.innerHTML = "Por favor, ingrese solo números.";
            }

        if (message === "") {
            messageError.innerHTML = "Por favor, complete este campo.";
        }

        // Si todos los campos están completos, enviamos el formulario
        if (firstName !== "" &&  surname !== "" && emailAddress !== "" && phoneNumber !== "" && message !== ""&& /^\d+$/.test(phoneNumber)) {
            form.submit();
        }
    });
});