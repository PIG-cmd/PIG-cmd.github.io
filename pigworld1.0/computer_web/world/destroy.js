console.log("[" + new Date().toLocaleTimeString().slice(2) + "] world - destroy.js Loading!");

function destroy (x,y)
{
	world = JSON.parse(localStorage.getItem('world'));
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function world/destroy.js destroy()");
	obj = world;
	var i = 0;
	while (obj[i].x != x || obj[i].y != y)
		i++;
	obj[i].nam = "Original:air";
	localStorage.setItem('world',JSON.stringify(obj));
}