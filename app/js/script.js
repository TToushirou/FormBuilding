const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs(){
	const firstnameValue = firstname.value.trim();

	if(firstnameValue === '') {
		setErrorFor(firstname, ' First name cannot be blank');
	} else {
		setSuccessFor(firstname);
	}
}

function setErrorFor(input, message) {
	const formc = input.parentElement;
	const small = formc.querySelector('small');
	formc.classname = 'formc error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formc = input.parentElement;
	formc.classname = 'formc success';
}

