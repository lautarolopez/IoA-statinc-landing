const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const hamburguerButton = document.querySelector('.hamburguer');
const menuList = document.querySelector(".menu-list");
const formButton = document.querySelector('form button.btn');
const nameInput = document.querySelector('.input-name');
const lastNameInput = document.querySelector('.input-last-name');
const emailInput = document.querySelector('.input-email');
const messageInput = document.querySelector('.input-message');
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const emailError2 = document.querySelector('.email-error-2');
const messageError = document.querySelector('.message-error');

const verifyEmail = (input) => {
    return re.test(String(input).toLowerCase());
}

const newNotification = (input) => {
    let notif = document.createElement('div');
    notif.appendChild(document.createTextNode(input));
    notif.classList.add('notification');
    document.body.insertBefore(notif, document.querySelector('section.landing-section'));
    setTimeout(()=>{
        document.body.removeChild(notif);
    }, 3000)
}

hamburguerButton.addEventListener('click', (e) => {
    e.preventDefault();
    menuList.classList.toggle('hidden');
})

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    let cont = 0;
    if (nameInput.value.length < 1) {
        nameError.classList.remove('hidden');
    } else {
        cont++;
    }
    if (emailInput.value.length < 1) {
        emailError.classList.remove('hidden');
        emailError2.classList.add('hidden');
    } else {
        if (!verifyEmail(emailInput.value)) {
            emailError2.classList.remove('hidden');
            emailError.classList.add('hidden');
        } else {
            cont++;
        }
    }
    if (messageInput.value.length < 1) {
        messageError.classList.remove('hidden');
    } else {
        cont++;
    }
    if (cont == 3) {
        nameInput.value = "";
        lastNameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        emailError2.classList.add('hidden');
        messageError.classList.add('hidden');
        newNotification("Mensaje enviado :)");
    }
})

