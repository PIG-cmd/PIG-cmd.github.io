<meta charset="utf-8">
<script src=../javascript/ajax.js></script>
<script src=../JavaScript/cookie.js></script>
<script src=https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML></script><script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});</script>
<div id=js></div>
<center><pre>
<font color=red><strong>猪猪网站 - 登录</strong></font><div id=all>
用户名<input type=text style='width:60%' id=username maxlength=24>
密码<input type=password style='width:60%' id=password maxlength=16>
显示/隐藏密码<input type=checkbox onclick=javascript:changepassword();>
<div id=captcha><input type=button value=验证码 onclick=javascript:getcaptcha();></div>
<input type=button value=登录 disabled id=loginbutton>
<div id=result></div>
<div id=hide  style='display:none'>
<div id=hide_list_hide_password>false</div>
<div id=hide_math_answer></div>
</div>
</div>
<script>
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
function getcaptcha()
{
	var random = parseInt(Math.random() * 4 + 1);
	document.getElementById("captcha").innerHTML = "<table border=1><tr><td>请算出下面数学题的正确解（只有一个解）</td></tr><tr><td><iframe src='math.asp#" + ajax.get(random + ".math.question.txt") + "'>浏览器不支持显示此式，请更换浏览器</iframe></td></tr><tr><td>答案<input type=text id=answer><input type=button value=提交 onclick=javascript:submitanswer();></td></tr><tr><td><a href=# onclick=javascript:getcaptcha();>不会做？换一题</a></td></tr></table>";
	document.getElementById("hide_math_answer").innerHTML = ajax.get(random + ".math.answer.txt");
}
function submitanswer()
{
	if (document.getElementById("answer").value == document.getElementById("hide_math_answer").innerHTML)
	{
		document.getElementById("captcha").innerHTML = "<img src=img/right.png height=10% width=10%><br>您不是大批量处理程序";
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
		xmlhttp.open("POST","api.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("type=login&username=" + username + "&password=" + password);
		eval(xmlhttp.responseText);
		if (loginstatus.status == "The login was successful")
		{
			document.getElementById("all").innerHTML = "<font color=red>登录成功</font><br>推荐以下地址<br><a href=../index.html>主页</a><br><a href=../video>猪猪视频</a><br><a href=../math>数学分布式计算网站</a><br><a href='../Mathematical Analysis'>数学分析</a><br><a href=../www.cans.microsoft.net>罐子奖官网</a><br><a href=../google>谷歌镜像</a><br><a href=../game>猪猪游戏</a><br><a href=../name/name.html>猪猪取名生成器</a><br><a href=../picture/see.asp?num=1>猪猪图片</a><br><a href=../picture/upload.asp>猪猪图片上传</a><br><a href=../qr>猪猪网页二维码生成器</a><br>";
		}
		if (loginstatus.status.substring(0,60) == "Error:There is no such record in the database:DataBase(passw")
			document.getElementById("result").innerHTML = "服务器错误：找不到指定的用户<br>下面是服务器返回的信息，供管理人员诊断<br>" + loginstatus.status;
		if (loginstatus.status == "Error:The password is wrong")
			document.getElementById("result").innerHTML = "请求错误：密码错误<br>下面是服务器返回的信息，供管理人员诊断<br>" + loginstatus.status;
	};
	} else {
		document.getElementById("captcha").innerHTML = "<img src=img/wrong.png height=10% width=10%><br>验证码错误<br><a href=# onclick=javascript:getcaptcha();>不会做？换一题</a>";
	}
}
if (getcookie("pigwebsiteusername") != null)
	location.href = 'user.asp';
</script>
<br>
<a href=reg.asp>注册</a>