<meta charset="utf-8">
<% @language="vbscript" codepage="65001"%>
<div id=q style='display:none'><%response.write(request("q"))%></div>
<script>
var q = document.getElementById("q").innerHTML;
document.write("<center><pre><font color=red><h1>帮助</h1></font><br><input type=button value=返回上一页 onclick=javascript:history.go(-1);><br>代码：" + q + "<br>");
if (q == "0x000001")
{
	document.write("<div style='font-family:Cursive,Helvetica,sans-serif;'>为什么我们要检查密码和验证密码是否相同？<br>您可能会在密码栏中敲错一个字符，这将会导致实际密码和您的计划的密码不符<br>这个账号将无法登录，对于您来说，浪费一个实用的账号<br>对于我们来说，这将会浪费一个命名优雅的账号<br>为了防止密码出现错误，我们设置了密码和验证密码</div>");
}
if (q == "0x000002")
{
	document.write("<div style='font-family:Cursive,Helvetica,sans-serif;'>用户名过短可能会造成误解，标识错误等危害</div>");
}
if (q == "0x000003")
{
	document.write("<div style='font-family:Cursive,Helvetica,sans-serif;'>密码过短可能会导致密码被人猜出<br>从而导致您的个人信息被泄露</div>");
}
if (q == "0x000004")
{
	document.write("<div style='font-family:Cursive,Helvetica,sans-serif;'>密码非长密码可能会导致密码被人猜出<br>从而导致您的个人信息被泄露</div>");
}
</script>