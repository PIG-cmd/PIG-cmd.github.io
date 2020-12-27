setTimeout(function(){
document.getElementById("live").src = "../data.cans.microsoft.net/2020.mp4";
//document.getElementById("live").muted = true;

document.getElementById("live").play();
document.getElementById("live").autoplay = true;
setInterval(function(){
	document.getElementById("live").currentTime = Number(new Date().getTime() / 1000) % 741;
},1000);
document.getElementById("volume").value = 100;
},4000);
function setvolume()
{
	document.getElementById("live").volume = Number(document.getElementById('r').value) / 100;
	document.getElementById("volume").value = Number(document.getElementById('r').value);
}
function fulls()
{
	document.getElementById("live").requestFullscreen();
	
}
setInterval(function(){
  document.getElementById("live").oncontextmenu = function(e){ 
    var e = e || window.event;
    e.preventDefault();
	};
},100);
setInterval(function(){
	var s = "0Second";
	var t = document.getElementById("live").currentTime;
	var f = Number(t / 741) * 80;
	var i = 0;
	while (i < f)
	{
		s += "<img src=../data.cans.microsoft.net/green.png height=1% width=1%>";
		i++;
	}
	while (i != 80)
	{
		s += "<img src=../data.cans.microsoft.net/red.png height=1% width=1%>";
		i++;
	}
	s += "741Seconds<br>";
	i = 0;
	while (i != 80)
	{
		s += "<img src=../data.cans.microsoft.net/black.png height=1% width=1%>";
		i++;
	}
	s += "<br>" + parseInt(t) + "Seconds";
	document.getElementById("line").innerHTML = s;
},1000);