//Haz tú validación en javascript acá


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Myform');
    
    form.addEventListener('submit', function(event) {
        const name = document.getElementById("name").value.trim();
        const mail = document.getElementById("mail").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        const mensajem = document.getElementById("mensagem").value.trim();
       
        if (name === '') {
            alert("Por favor, ingresa tu nombre completo.");
            event.preventDefault();
        } else if (mail === '') {
            alert('Ingresa tu correo electrónico.');
            event.preventDefault();
        } else if (!isValidEmail(mail)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            event.preventDefault();
        } else if (asunto === '') {
            alert("Por favor, escriba el asunto.");
            event.preventDefault();
        } else if (mensajem === '') {
            alert("Escribe algo en el mensaje.");
            event.preventDefault();
        }
    });

    function isValidEmail(email) {
        // Expresión regular para validar el formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
    
      




    
    
