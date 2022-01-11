const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('button');
const clearForm = document.getElementById('formc success')

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs(){
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if(firstnameValue === '') {
		setErrorFor(firstname, ' First name cannot be blank');
	} else {
		setSuccessFor(firstname);
	}

	if(lastnameValue === '') {
		setErrorFor(lastname, ' Last name cannot be blank');
	} else {
		setSuccessFor(lastname);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (passwordValue.length < 7) {
		setErrorFor(password, 'Less than 7 characters');
	} else {
		setSuccessFor(password);
	}
	
};

function setErrorFor(input, message) {
	const formc = input.parentElement;
	const small = formc.querySelector('small');
	formc.className = 'formc error';
	small.innerText = message;
};

function setSuccessFor(input) {
	const formc = input.parentElement;
	formc.className = 'formc success';
};



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};




