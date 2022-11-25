const form = document.querySelector('.card__form');
const email = document.querySelector('.email');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const emailValue = email.value.trim();
    const small = document.querySelector('.input__small');

    if(emailValue === '') {
		small.classList.add('email__error');
	} else if (!isEmail(emailValue)) {
		small.classList.add('email__error');
	} else {
        small.classList.remove('email__error');
	}
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}