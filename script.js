function checkForm() {
	var userLogin = document.getElementById("login").value;
	var userPassword = document.getElementById("passWord").value;
	
	if ((loginOk !== userLogin) || (passOk !== userPassword)) {
			document.getElementById("info").style.display = "block";
	} else {			
			location.href = 'main.html';
	}
}