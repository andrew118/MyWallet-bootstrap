var login = "andrew";
var pass = "123";

function checkForm() {
	var userLogin = document.getElementById("login").value;
	var userPassword = document.getElementById("passWord").value;
	
	if ((login !== userLogin) || (pass !== userPassword)) {
			document.getElementById("info").style.display = "block";
	} else {			
			location.href = 'main.html';
	}
}

function comparePassword () {
	var password1 = document.getElementById("passWord").value;
	var password2 = document.getElementById("passwordCompare").value;
}