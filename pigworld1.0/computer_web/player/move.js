console.log("[" + new Date().toLocaleTimeString().slice(2) + "] player/move.js loading!");
function playermove(p)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In function player/move.js playermove()");
	if (p == 1)
	{
		var world = JSON.parse(localStorage.getItem('world'));
		var plx = parseInt(localStorage.getItem('plx'));
		var ply = parseInt(localStorage.getItem('ply'));
		var isair = find(plx,ply - 1,world);
		if (isair.space != "air")
			if (localStorage.getItem('num') == null)
				if (sessionStorage.getItem('pm1') == null)
				{
					localStorage.setItem('ply',ply + 1);
					sessionStorage.setItem('pm1',1);
					setTimeout(sessionStorage.removeItem('pm1'),1000);
					console.log("[" + new Date().toLocaleTimeString().slice(2) + "] Player Up");
				}
		
	}
	if (p == 2)
	{
		var world = JSON.parse(localStorage.getItem('world'));
		var plx = parseInt(localStorage.getItem('plx'));
		var ply = parseInt(localStorage.getItem('ply'));	
		var leftdown = find(plx - 1,ply,world);
		var leftup = find(plx - 1,ply + 1,world);
		if (leftdown.space == 'air' && leftup.space == 'air')
			if (localStorage.getItem('num') == null)
				if (sessionStorage.getItem('pm2') == null)
				{
					localStorage.setItem('plx',plx - 1);
					sessionStorage.setItem('pm2',1);
					setTimeout(sessionStorage.removeItem('pm2'),200);
					console.log("[" + new Date().toLocaleTimeString().slice(2) + "] Player Left");
				}
	}
	if (p == 3)
	{
		var world = JSON.parse(localStorage.getItem('world'));
		var plx = parseInt(localStorage.getItem('plx'));
		var ply = parseInt(localStorage.getItem('ply'));	
		var rightdown = find(plx + 1,ply,world);
		var rightup = find(plx + 1,ply + 1,world);
		if (rightdown.space == 'air' && rightup.space == 'air')
			if (sessionStorage.getItem('pm2') == null)
				if (localStorage.getItem('num') == null)
				{
					localStorage.setItem('plx',plx + 1);
					sessionStorage.setItem('pm2',1);
					setTimeout(sessionStorage.removeItem('pm2'),200);
					console.log("[" + new Date().toLocaleTimeString().slice(2) + "] Player Down");
				}
	}
}

		
