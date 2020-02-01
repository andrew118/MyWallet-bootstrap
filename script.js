var login = "andrew";
var pass = "123";
var email = "";
var today = new Date();

function checkForm() {
	var userLogin = document.getElementById("login").value;
	var userPassword = document.getElementById("passWord").value;
	
	if ((login !== userLogin) || (pass !== userPassword)) {
			document.getElementById("info").style.display = "block";
	} else {			
			document.getElementById("info").style.display = "none";
			document.getElementById("infoOk").style.display = "block"
			setTimeout("location.href = 'main.html';", 1500);
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

function checkWeekday() {
	var daysNames = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
	var weekday = daysNames[today.getDay()];
	
	return weekday;
}

function welcome() {
	var today = checkWeekday();
	
	document.getElementById("userWelcome").innerHTML = login;
	
	if (today === "sobota" || today === "niedziela") {
		today += ". Może imprezka? Albo wypadzik na miasto? &#9787;"
	} else {
		today += ". Praca, praca, praca... &#9822;"
	}
	document.getElementById("dayOfWeek").innerHTML = today;
	
	}