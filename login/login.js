function changepassword()
{
	var hll = document.getElementById("hide_list_hide_password");
	if (hll.innerHTML == "false")
	{
		hll.innerHTML = true;
		document.getElementById("password").type = "text";
	} else {
		hll.innerHTML = false;
		document.getElementById("password").type = "password";
	}
}
function ajaxget(filename)
{
var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST","/login/request.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("type=read&filename=" + filename);
		try{
		return xmlhttp.responseText;
		} catch(err) {
			return xmlhttp.status;
		}
}	
function getcaptcha()
{
	var random = parseInt(Math.random() * 4 + 1);
	document.getElementById("captcha").innerHTML = "<table border=1 style='background:yellow'><tr><td>请算出下面数学题的正确解（只有一个解）</td></tr><tr><td><iframe src='/login/math.asp#" + ajaxget(random + ".math.question.txt") + "'>浏览器不支持显示此式，请更换浏览器</iframe></td></tr><tr><td>答案<input type=text id=answer><input type=button value=提交 onclick=javascript:submitanswer();></td></tr><tr><td><a href=# onclick=javascript:getcaptcha();>不会做？换一题</a></td></tr></table>";
	document.getElementById("hide_math_answer").innerHTML = ajaxget(random + ".math.answer.txt");
}
function submitanswer()
{
	if (document.getElementById("answer").value == document.getElementById("hide_math_answer").innerHTML)
	{
		document.getElementById("captcha").innerHTML = "<img src=/login/img/right.png height=10% width=10%><br>您不是大批量处理程序";
		document.getElementById("loginbutton").disabled = false;
		document.getElementById("loginbutton").onclick = function () {
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
		
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
		
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("POST","/login/api.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("type=login&username=" + username + "&password=" + password);
		eval(xmlhttp.responseText);
		if (loginstatus.status == "The login was successful")
		{
			document.getElementById("all").innerHTML = "<font color=red>登录成功</font>";
		}
		if (loginstatus.status.substring(0,60) == "Error:There is no such record in the database:DataBase(passw")
			document.getElementById("result").innerHTML = "服务器错误：找不到指定的用户<br>下面是服务器返回的信息，供管理人员诊断<br>" + loginstatus.status;
		if (loginstatus.status == "Error:The password is wrong")
			document.getElementById("result").innerHTML = "请求错误：密码错误<br>下面是服务器返回的信息，供管理人员诊断<br>" + loginstatus.status;
	};
	} else {
		document.getElementById("captcha").innerHTML = "<img src=/login/img/wrong.png height=10% width=10%><br>验证码错误<br><a href=# onclick=javascript:getcaptcha();>不会做？换一题</a>";
	}
}