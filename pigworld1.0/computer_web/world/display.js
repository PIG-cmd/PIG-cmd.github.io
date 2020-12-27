console.log("[" + new Date().toLocaleTimeString().slice(2) + "] world - display.js Loading!");
function blockname(event)
{
	var btn=event;
	//document.getElementById('blockname').innerHTML = "按键" + btn;
}
function find(a,b,dat)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function world/display.js find()");
	var i = 0;
	if (dat == undefined)
		return false;
	//while (i < dat.length &&  dat[i].x != x && dat[i].y != y)
	//	i++; 
	//while (dat[i] != undefined && dat[i].x != x && dat[i].y != y)
	//	i++; 
	while (dat[i].x != a || dat[i].y != b)
	{

		i++;
		if (i == dat.length)
			break;
	}
	if (i == dat.length)
	{
		var mod = "Original";
		var space = "air";
	 } else {
		var mod = dat[i].nam.split(':')[0];
		var space = dat[i].nam.split(':')[1];
	}
	var obj = new Object();
	obj.mod = mod;
	obj.space = space;
	return obj;
}
function display(world,i,n,skin,plx,ply)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function world/display.js display()");
	var x = plx;
	var y = ply;
	var top1 = find(x,y + 3,world);

	var top2 = find(x,y + 4,world);
	var le1 = find(x - 2,y + 2,world);
	var le2 = find(x - 2,y + 1,world);
	var le3 = find(x - 2,y + 0,world);
	var bottom2 = find(x,y - 2,world);
	var ri1 = find(x + 2,y + 2,world);
	var ri2 = find(x + 2,y + 1,world);
	var ri3 = find(x + 2,y + 0,world);
	var le4 = find(x - 1,y - 1,world);
	var ri4 = find(x + 1,y - 1,world);
	//while (top1 == false)
	//	top1 = find(x,y + 3,world);
	var left4 = find(x - 1,y + 3,world);
	//while (left4 == false)
	//	left4 = find(x - 1,y + 3,world);
	var left3 = find(x - 1,y + 2,world);
	//while (left3 == false)
	//	left3 = find(x - 1,y + 2,world);
	var left2 = find(x - 1,y + 1,world);
	//while (left2 == false)
	//	left2 = find(x - 1,y + 1,world);
	var left1 = find(x - 1,y,world);
	//while (left1 == false)
	//	left1 = find(x - 1,y,world);
	var bottom1 = find(x,y - 1,world);
	//while (bottom1 == false)
	//	bottom1 = find(x,y - 1,world);
	var right1 = find(x + 1,y,world);
	//while (right1 == false)
	//	right1 = find(x + 1,y,world);
	var right2 = find(x + 1,y + 1,world);
	//while (right2 == false)
	//	right2 = find(x + 1,y + 1,world);
	var right3 = find(x + 1,y + 2,world);
	//while (right3 == false)
	//	right3 = find(x + 1,y + 2,world);
	var right4 = find(x + 1,y + 3,world);
	//while (right4 == false)
	//	right4 = find(x + 1,y + 3,world);
	var size = localStorage.getItem('size');
	var len = size / 8;
	len = parseInt(len);
	if(n.length > len)
	n = '.';
	while(n.length < len)
		n = n + ".";


	document.getElementById(i).innerHTML = "<br><br><img onmoudedown='javascript:blockname(event)' id=top2 src=img/" + top2.mod + "/" + top2.space + ".png onclick=javascript:destroy(" + x + "," + (y + 4) + "); height=" + size + "px weight=" + size + "px><br><img id=left4 src=img/" + left4.mod + "/" + left4.space + ".png onclick=javascript:destroy(" + (x - 1) + "," + (y + 3) + "); height=" + size + "px weight=" + size + "px><img id=top1 src=img/" + top1.mod + "/" + top1.space + ".png onclick=javascript:destroy(" + x + "," + (y + 3) + "); height=" + size + "px weight=" + size + "px><img id=right4 src=img/" + right4.mod + "/" + right4.space + ".png onclick=javascript:destroy(" + (x + 1) + "," + (y + 3) + "); height=" + size + "px weight=" + size + "px><br><img id=le1 src=img/" + le1.mod + "/" + le1.space + ".png onclick=javascript:destroy(" + (x - 2) + "," + (y + 2) + "); height=" + size + "px weight=" + size + "px><img id=left3 src=img/" + left3.mod + "/" + left3.space + ".png onclick=javascript:destroy(" + (x - 1) + "," + (y + 2) + "); height=" + size + "px weight=" + size + "px>" + n + "<img id=right3 src=img/" + right3.mod + "/" + right3.space + ".png onclick=javascript:destroy(" + (x + 1) + "," + (y + 2) + "); height=" + size + "px weight=" + size + "px><img id=ri1 src=img/" + ri1.mod + "/" + ri1.space + ".png onclick=javascript:destroy(" + (x + 2) + "," + (y + 2) + "); height=" + size + "px weight=" + size + "px><br><img id=le2 src=img/" + le2.mod + "/" + le2.space + ".png onclick=javascript:destroy(" + (x - 2) + "," + (y + 1) + "); height=" + size + "px weight=" + size + "px><img id=left2 src=img/" + left2.mod + "/" +left2.space + ".png onclick=javascript:destroy(" + (x - 1) + "," + (y + 1) + "); height=" + size + "px weight=" + size + "px><img src=img/skin/on/" + skin + ".png height=" + size + "px weight=" + size + "px><img id=right2 src=img/" + right2.mod + "/" + right2.space + ".png onclick=javascript:destroy(" + (x + 1) + "," + (y + 1) + "); height=" + size + "px weight=" + size + "px><img id=ri2 src=img/" + ri2.mod + "/" + ri2.space + ".png onclick=javascript:destroy(" + (x + 2) + "," + (y + 1) + "); height=" + size + "px weight=" + size + "px><br><img id=le3 src=img/" + le3.mod + "/" + le3.space + ".png onclick=javascript:destroy(" + (x - 2) + "," + (y + 0) + "); height=" + size + "px weight=" + size + "px><img id=left1 src=img/" + left1.mod + "/" + left1.space + ".png onclick=javascript:destroy(" + (x - 1) + "," + y + "); height=" + size + "px weight=" + size + "px><img src=img/skin/under/" + skin + ".png height=" + size + "px weight=" + size + "px><img id=right1 src=img/" + right1.mod + "/" + right1.space + ".png onclick=javascript:destroy(" + (x + 1) + "," + y + "); height=" + size + "px weight=" + size + "px><img id=ri3 src=img/" + ri3.mod + "/" + ri3.space + ".png onclick=javascript:destroy(" + (x + 2) + "," + (y + 0) + "); height=" + size + "px weight=" + size + "px><br><img id=le4 src=img/" + le4.mod + "/" + le4.space + ".png onclick=javascript:destroy(" + (x - 1) + "," + (y - 1) + "); height=" + size + "px weight=" + size + "px><img id=bottom1 src=img/" + bottom1.mod + "/" + bottom1.space + ".png onclick=javascript:destroy(" + x + "," + (y - 1) + "); height=" + size + "px weight=" + size + "px><img id=ri4 src=img/" + ri4.mod + "/" + ri4.space + ".png onclick=javascript:destroy(" + (x + 1) + "," + (y - 1) + "); height=" + size + "px weight=" + size + "px><br><img id=bottom2 src=img/" + bottom2.mod + "/" + bottom2.space + ".png onclick=javascript:destroy(" + (x + 0) + "," + (y - 2) + "); height=" + size + "px weight=" + size + "px>";
}

