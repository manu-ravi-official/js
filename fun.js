function registration() {
	var Fname = document.register.txtFname.value;
	var Lname = document.register.txtLname.value;
	var Faname = document.register.txtFaname.value;
	var Moname = document.register.txtMoname.value;
	var email = document.register.txtEmail.value;
	var file = document.register.filePic.value;
	var Gender = document.register.gender.value;
	var Phone = document.register.txtPhone.value;
	var Phonelen = Phone.length;
	var UserName = document.register.txtUname.value;
	var letters = /^[a-zA-Z]+$/;
	var isValid = letters.test(document.register.txtFname.value);
	var isValid1 = letters.test(document.register.txtLname.value);
	var isValid2 = letters.test(document.register.txtFaname.value);
	var isValid3 = letters.test(document.register.txtMoname.value);
	var pass = document.register.txtPassword.value;
	var rpass = document.register.txtRpassword.value;
	var filterpass = /^[A-Za-z]\w{7,14}$/;
	var validpass = filterpass.test(document.register.txtPassword.value);
	var atposition = email.indexOf("@");
	var dotposition = email.lastIndexOf(".")
	/**************** first name *****************/
	if (Fname == "") {
		alert("Please Enter Your First Name");
		document.register.txtFname.focus();
		return false;
	}
	if (!isValid) {
		alert("Only Alphabets.");
		document.register.txtFname.focus();
		return false;
	}
	else {
		document.register.txtLname.focus();
	}
	/**************** last name *****************/
	if (Lname == "") {
		alert("Please Enter Your Last Name");
		document.register.txtLname.focus();
		return false;
	}
	if (!isValid1) {
		alert("Only Alphabets.");
		document.register.txtLname.focus();
		return false;
	}
	/**************** father's name *****************/
	if (Faname == "") {
		alert("Please Enter Your Father's Name");
		document.register.txtFaname.focus();
		return false;
	}
	if (!isValid2) {
		alert("Only Alphabets.");
		document.register.txtFaname.focus();
		return false;
	}
	/**************** mother's name *****************/
	if (Moname == "") {
		alert("Please Enter Your Mother's Name");
		document.register.txtMoname.focus();
		return false;
	}
	if (!isValid3) {
		alert("Only Alphabets.");
		document.register.txtMoname.focus();
		return false;
	}
	/**************** email *****************/
	if (email == "") {
		window.alert("Please enter a e-mail address.");
		document.register.txtEmail.focus();
		return false;
	}
	if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
		alert("Please enter a valid e-mail address");
		document.register.txtEmail.focus();
		return false;
	}
	/**************** file upload *****************/
	if (file.length == 0) {
		document.register.filePic.focus();
		alert("No files selected");
		return false;
	}
	/**************** username *****************/
	if (UserName == "") {
		alert("Please Enter Your User Name");
		document.register.txtUname.focus();
		return false;
	}
	if (!isValid) {
		alert("Only Alphabets.");
		document.register.txtUname.focus();
		return false;
	}
	else {
		document.register.txtUname.focus();
	}
	/**************** password *****************/
	if (!validpass) {
		alert("password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter");
		document.register.txtPassword.focus();
		return false;

	}
	/**************** confirm password *****************/
	if (rpass == "") {
		alert("please enter at confirm password");
		document.register.txtRpassword.focus();
		return false;
	}
	if (rpass !== pass) {
		alert("enter same password")
		document.register.txtRpassword.focus();
		return false;
	}
	/**************** phone number *****************/
	if (isNaN(document.register.txtCode.value)) {
		alert("Enter Valid Mobile Number");
		document.register.txtCode.focus();
		return false;
	}

	if (isNaN(document.register.txtPhone.value)) {
		alert("Enter Valid Mobile Number");
		document.register.txtPhone.focus();
		return false;
	}
	if (Phonelen !== 10) {
		alert(" Your Mobile Number must be 10 digit");
		document.register.txtPhone.focus();
		return false;
	}
	/**************** gender  *****************/
	if (Gender == "") {
		alert("Please Enter Your gender");
		document.register.txtPhone.focus();
		return false;
	}
	/**************** address *****************/
	var address = document.register.address.value;
	if (address == "") {
		alert("please Enter your address");
		document.register.address.focus();
		return false;
	}
	/**************** select country *****************/
	if (document.register.selectCountry.selectedIndex == 0) {
		alert("Please select country");
		document.register.selectCountry.focus();
		return false;
	}
	/**************** select state *****************/
	if (document.register.selState.selectedIndex == 0) {
		alert("Please select state");
		document.register.selState.focus();
		return false;
	}
	/****************Hobby *****************/
	if (!this.register.h1.checked) {
		alert("Please Choose At least one hobby");
		document.register.selState.focus();
		return false;
	}

}