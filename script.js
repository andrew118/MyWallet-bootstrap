var login = "andrew";
var pass = "123";
var email = "";

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
	
	if (password1 !== password2) {
		document.getElementById("info").style.display = "block";
	} else {
		login = document.getElementById("login").value;
		pass = password1;
		email = document.getElementById("passWord").value;
		
		document.getElementById("info").style.display = "none";
		document.getElementById("infoOk").style.display = "block"
		setTimeout("location.href = 'index.html';", 1500);
	}
}