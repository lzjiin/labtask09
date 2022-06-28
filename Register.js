const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const fax = document.getElementById('fax');
const haddress1 = document.getElementById('haddress1');
const haddress2 = document.getElementById('haddress2');
const city = document.getElementById('city');
const postcode = document.getElementById('postcode');
const country = document.getElementById('country');
const username = document.getElementById('username');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const telephoneValue = telephone.value.trim();
	const faxValue = fax.value.trim();
	const haddress1Value = haddress1.value.trim();
	const haddress2Value = haddress2.value.trim();
	const cityValue = city.value.trim();
	const postcodeValue = postcode.value.trim();
	const countryValue = country.value.trim();
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	const cpasswordValue = cpassword.value.trim();

	if(firstnameValue == ''){
		setErrorFor(firstname,'Firstname cannot be blank');
	}else{
		setSuccessFor(firstname);
	}

	if(lastnameValue == ''){
		setErrorFor(lastname,'Lastname cannot be blank');
	}else{
		setSuccessFor(lastname);
	}

	if(emailValue == ''){
		setErrorFor(email,'Email cannot be blank');
	}else if(!isEmail(emailValue)){
		setErrorFor(email,'Email is not valid');
	}else{
		setSuccessFor(email);
	}

	if(telephoneValue == ''){
		setErrorFor(telephone,'Telephone cannot be blank');
	}else if(!isTelephone(telephoneValue)){
		setErrorFor(telephone,'Telephone is not valid');
	}else{
		setSuccessFor(telephone);
	}

	if(haddress1Value == ''){
		setErrorFor(haddress1,'Home address cannot be blank');
	}else{
		setSuccessFor(haddress1);
	}

	if(cityValue == ''){
		setErrorFor(city,'City cannot be blank');
	}else{
		setSuccessFor(city);
	}

	if(postcodeValue == ''){
		setErrorFor(postcode,'Postcode cannot be blank');
	}else{
		setSuccessFor(postcode);
	}

	if(countryValue == ''){
		setErrorFor(country,'Country cannot be blank');
	}else{
		setSuccessFor(country);
	}

	if(usernameValue == ''){
		setErrorFor(username,'Username cannot be blank');
	}else{
		setSuccessFor(username);
	}

	if(passwordValue == ''){
		setErrorFor(password,'Password cannot be blank');
	}else{
		setSuccessFor(password);
	}

	if(cpasswordValue == ''){
		setErrorFor(cpassword,'Password cannot be blank');
	}else if(passwordValue !== cpasswordValue){
		setErrorFor(cpassword,'Password does not match');
	}else{
		setSuccessFor(cpassword);
	}

	if(firstnameValue !== '' && lastnameValue !== '' && emailValue !== '' && telephoneValue !== '' && haddress1Value !== '' && cityValue !== '' && postcodeValue !== '' && countryValue !== ''&& usernameValue !== '' && passwordValue !== '' && cpasswordValue !== ''){
		alert("Register Successfully !");
	}else{
		alert("Register Unsuccessfully !");
	}
}

function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;

	formControl.className = 'form-control error';
}

function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isTelephone(telephone){
	return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(telephone);
}

function isEmail(email){
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}