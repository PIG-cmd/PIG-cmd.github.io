console.log("[" + new Date().toLocaleTimeString().slice(2) + "] config/config.js Loading!");
function config()
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In function config/config.js config()");
	var display = document.getElementById('main');
	var lang = localStorage.getItem('lang');
	if (lang == null)
		display.innerHTML = "<font color=red><h1>Pig World</h1></font><br><h3>Config</h3><br><input type=button value=Language onclick=javascript:configlanguage('en');><br><input type=button value=Rendering onclick=javascript:configcolor('en');><br><input type=button value=Back onclick=javascript:location.reload();>";
	if (lang == 'jtcn')
		display.innerHTML = "<font color=red><h1>Pig World</h1></font><br><h3>设置</h3><br><input type=button value=语言 onclick=javascript:configlanguage('jtcn');><br><input type=button value=渲染 onclick=javascript:configcolor('jtcn');><br><input type=button value=返回 onclick=javascript:location.reload();>";
}
function configlanguage(lang)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In function config/config.js configlanguage()");
	var display = document.getElementById('main');
	if (lang == 'en')
		display.innerHTML = "<font color=red><h1>Pig World</h1></font><br><h3>Config</h3><br><h5>Language</h5><br><input type=button value=中文 onclick=javascript:localStorage.setItem('lang','jtcn');configlanguage('jtcn')><br><br>Multinational languages are not necessarily 100% accurate<br><input type=button value=Exit onclick=javascript:config();>";
	if (lang == 'jtcn')
		display.innerHTML = "<font color=red><h1>Pig World</h1></font><br><h3>设置</h3><br><h5>语言</h5><br><input type=button value=English onclick=javascript:localStorage.removeItem('lang');configlanguage('en');><br><br>多国语言不一定100%准确<br><input type=button value=退出 onclick=javascript:config();>";
}
function configcolor(lang)
{
	if (localStorage.getItem('size') > 1024)
		localStorage.setItem('size',8);
	if (localStorage.getItem('size') > 64 && localStorage.getItem('size') < 128)
		localStorage.setItem('size',128);
	if (localStorage.getItem('size') > 128 && localStorage.getItem('size') < 256)
		localStorage.setItem('size',256);
	if (localStorage.getItem('size') > 256 && localStorage.getItem('size') < 512)
		localStorage.setItem('size',512);
	if (localStorage.getItem('size') > 512 && localStorage.getItem('size') < 1024)
		localStorage.setItem('size',1024);

	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In function config/config.js configcolor()");
	var display = document.getElementById('main');
	if (lang == 'en')
		display.innerHTML = "<font color=red><h1>Pig World</h1></font><br><h3>Config</h3><br><h5>Rendering</h5><br>Size:<input type=button value=" + localStorage.getItem('size') + " onclick=\"javascript:localStorage.setItem('size',parseInt(localStorage.getItem('size'))+8);configcolor('en');\"><br><input type=button value=Back onclick=javascript:config();>";
	if (lang == 'jtcn')
		display.innerHTML = "<font color=red><h1>Pig World</h1></font><br><h3>设置</h3><br><h5>渲染</h5><br>尺寸<input type=button value=" + localStorage.getItem('size') + " onclick=\"javascript:localStorage.setItem('size',parseInt(localStorage.getItem('size'))+8);configcolor('jtcn');\"><br><input type=button value=返回 onclick=javascript:config();>";
}

