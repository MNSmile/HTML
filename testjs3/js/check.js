function checkAccount() {
	var accountValue = document.getElementById("account").value;
	var regex = /^([a-zA-Z]+[a-zA-Z09_]*){4,}$/;
	var flag = regex.test(accountValue);
	if (!flag) {
		document.getElementById("accountText").innerHTML = "<b style='color: red; font-size: 12px;'>字母数字下划线，字母开头，不少于4个字符</b>";
		return false;
	}
	document.getElementById("accountText").innerHTML = "<b style='color: green; font-size: 12px;'>OK！</b>";
	return true;
}

function checkName() {
	var nameValue = document.getElementById("name").value;
	var regex = /^[\u4e00-\u9fa5]+|[a-zA-Z]+$/;
	var flag = regex.test(nameValue);
	if (!flag) {
		document.getElementById("nameText").innerHTML = "<b style='color: red; font-size: 12px;'>必须为汉字或英文字母</b>";
		return false;
	}
	document.getElementById("nameText").innerHTML = "<b style='color: green; font-size: 12px;'>OK！</b>";
	return true;
}

function checkPwd() {
	var pwdValue = document.getElementById("pwd").value;
	var regex = /^[a-zA-Z0-9_]{6,}$/;
	var flag = regex.test(pwdValue);
	if (!flag) {
		document.getElementById("pwdText").innerHTML = "<b style='color: red; font-size: 12px;'>字母数字下划线组合，长度至少为6</b>";
		return false;
	}
	document.getElementById("pwdText").innerHTML = "<b style='color: green; font-size: 12px;'>OK！</b>";
	return true;
}

function checkPwd2() {
	var flag = checkPwd();
	if (flag) {
		var pwd2Value = document.getElementById("pwd2").value;
		var pwdValue = document.getElementById("pwd").value;
		if (pwdValue != pwd2Value) {
			document.getElementById("pwd2Text").innerHTML = "<b style='color:red;'>两次密码不同！</b>";
			return false;
		}
		document.getElementById("pwd2Text").innerHTML = "<b style='color: green; font-size: 12px;'>OK！</b>";
		return true;
	}
	
}
function checkEmail() {
	var emailValue = document.getElementById("email").value;
	var regex = /^[a-zA-Z0-9_]+@[a-z0-9]+(.[a-z]{2,3})+$/;
	var flag = regex.test(emailValue);
	if (!flag) {
		document.getElementById("emailText").innerHTML = "<b style='color: red; font-size: 12px;'>邮箱格式不正确</b>";
		return false;
	}
	document.getElementById("emailText").innerHTML = "<b style='color: green; font-size: 12px;'>OK！</b>";
	return true;
}

function checkSubmit() {
	var accountFlag = checkAccount();
	var nameFlag = checkName();
	var pwdFlag = checkPwd();
	var pwdFlag2 = checkPwd2();
	var emailFlag = checkEmail();
	if (accountFlag && nameFlag && pwdFlag && pwdFlag2 && emailFlag) {
		document.getElementById("form1").submit();
	}
}
