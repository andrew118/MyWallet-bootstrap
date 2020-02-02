var today = new Date();

function correct(number) {
	var correctedNumber = "0";
	
	number = number.toString();
	correctedNumber += number;
	
	return correctedNumber;
}

function putTodayDate () {
	var year = today.getFullYear(); 
	var month = today.getMonth() + 1;
	var day = today.getDate();
	
	if (month < 9) {
		month = correct(month);
	}
	if (day <= 9) {
		day = correct(day);
	}
	
	var wholeDate = year + "-" + month + "-" + day;
	
	document.getElementById("dater").value = wholeDate;
}

window.onload = function () {
	putTodayDate();
}