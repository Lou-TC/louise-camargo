
const themeButton = document.getElementById("theme-button");


if (themeButton) {
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        
        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️";
        } else {
            themeButton.textContent = "🌙";
        }
    });
}



const contactForm = document.getElementById("contact-form");

// 
if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

      
        event.preventDefault();

        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        
        const formMessage = document.getElementById("form-message");


        
        if (name === "") {
            formMessage.textContent = "Por favor, informe seu nome.";
            formMessage.style.color = "#b23a48";
            return;
        }


        
        if (email === "") {
            formMessage.textContent = "Por favor, informe seu e-mail.";
            formMessage.style.color = "#b23a48";
            return;
        }


        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Digite um e-mail válido.";
            formMessage.style.color = "#b23a48";
            return;
        }


      
        if (message === "") {
            formMessage.textContent = "Por favor, escreva uma mensagem.";
            formMessage.style.color = "#b23a48";
            return;
        }


        
        formMessage.textContent = "Mensagem enviada com sucesso!";
        formMessage.style.color = "#754c78";


        
        contactForm.reset();

    });
}