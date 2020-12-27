console.log("[" + new Date().toLocaleTimeString().slice(2) + "] world - create.js Loading!");
function createworld()
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function world/create.js createworld()");
	var block = new Array();
	block[0] = new Object();
	block[0].x = 0;
	block[0].y = 4;
	block[0].nam = "Original:grass";
	block[1] = new Object();
	block[1].x = 0;
	block[1].y = 3;
	block[1].nam = "Original:stone";
	block[2] = new Object();
	block[2].x = 0;
	block[2].y = 2;
	block[2].nam = "Original:stone";
	block[3] = new Object();
	block[3].x = 0;
	block[3].y = 1;
	block[3].nam = "Original:stone";
	block[4] = new Object();
	block[4].x = 0;
	block[4].y = 0;
	block[4].nam = "Original:stone";
	block[5] = new Object();
	block[5].x = 1;
	block[5].y = 4;
	block[5].nam = "Original:grass";
	block[6] = new Object();
	block[6].x = 1;
	block[6].y = 3;
	block[6].nam = "Original:stone";
	block[7] = new Object();
	block[7].x = 1;
	block[7].y = 2;
	block[7].nam = "Original:stone";
	block[8] = new Object();
	block[8].x = 1;
	block[8].y = 1;
	block[8].nam = "Original:stone";
	block[9] = new Object();
	block[9].x = 1;
	block[9].y = 0;
	block[9].nam = "Original:stone";
	block[10] = new Object();
	block[10].x = -1;
	block[10].y = 4;
	block[10].nam = "Original:grass";
	block[11] = new Object();
	block[11].x = -1;
	block[11].y = 3;
	block[11].nam = "Original:stone";
	block[12] = new Object();
	block[12].x = -1;
	block[12].y = 2;
	block[12].nam = "Original:stone";
	block[13] = new Object();
	block[13].x = -1;
	block[13].y = 1;
	block[13].nam = "Original:stone";
	block[14] = new Object();
	block[14].x = -1;
	block[14].y = 0;
	block[14].nam = "Original:stone";
	block[15] = new Object();
	block[15].x = 2;
	block[15].y = 4;
	block[15].nam = "Original:grass";
	block[16] = new Object();
	block[16].x = 2;
	block[16].y = 3;
	block[16].nam = "Original:stone";
	block[17] = new Object();
	block[17].x = 2;
	block[17].y = 2;
	block[17].nam = "Original:stone";
	block[18] = new Object();
	block[18].x = 2;
	block[18].y = 1;
	block[18].nam = "Original:stone";
	block[19] = new Object();
	block[19].x = 2;
	block[19].y = 0;
	block[19].nam = "Original:stone";
	block[20] = new Object();
	block[20].x = -2;
	block[20].y = 4;
	block[20].nam = "Original:grass";
	block[21] = new Object();
	block[21].x = -2;
	block[21].y = 3;
	block[21].nam = "Original:stone";
	block[22] = new Object();
	block[22].x = -2;
	block[22].y = 2;
	block[22].nam = "Original:stone";
	block[23] = new Object();
	block[23].x = -2;
	block[23].y = 1;
	block[23].nam = "Original:stone";
	block[24] = new Object();
	block[24].x = -2;
	block[24].y = 0;
	block[24].nam = "Original:stone";
	return block;
}
function createskin(n)
	{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Funcion world/create.js createskin()");
		var obj = new Object();
		obj.name = document.getElementById("name").value;
		obj.skin = n;
		document.location = location.href + "?createworld:[" + obj.name + "," + obj.skin + "]";
	}
function createplayer()
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Funcion world/create.js createplayer()");
	if (localStorage.getItem('lang') == null)
		document.getElementById("main").innerHTML = "Please enter your name:<input type=text value=Pig id=\"name\" maxlength=16><br><br><br>Please select your skin:<br>1.<img src=img/skin/on/1.png onclick=javascript:createskin(1);><br><img src=img/skin/under/1.png onclick=javascript:createskin(1);><br>2.<img src=img/skin/on/2.png onclick=javascript:createskin(2);><br><img src=img/skin/under/2.png onclick=javascript:createskin(2);>";
	if (localStorage.getItem('lang') == "jtcn")
		document.getElementById("main").innerHTML = "请输入你的名字：（全部使用半角字符）<input type=text value=Pig id=\"name\" maxlength=16><br><br><br>请选择你的皮肤<br>1.<img src=img/skin/on/1.png onclick=javascript:createskin(1);><br><img src=img/skin/under/1.png onclick=javascript:createskin(1);><br>2.<img src=img/skin/on/2.png onclick=javascript:createskin(2);><br><img src=img/skin/under/2.png onclick=javascript:createskin(2);>";
}
function create()
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Funcion world/create.js create()");
	document.getElementById("main").innerHTML = "";
	createplayer();
}
function spawn()
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function world/create.js spawn()");
	var spawn=new Object;
	spawn.x = 0;
	spawn.y = 5;
	return spawn;
}
function respawn()
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function world/create.js respawn()");

	localStorage.removeItem('num');
}
