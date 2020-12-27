console.log("[" + new Date().toLocaleTimeString().slice(2) + "] ajax.js Loading!");
var ajax = new Object();
ajax.set = function(filename,info)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] ajax.set();");
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST","../data.cans.microsoft.net/request.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("filename=" + filename + "&info=" + info + "&type=write");
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			return true;
		}
		if (xmlhttp.readyState == 4 && xmlhttp.status != 200)
		{
			return false;
		}
};
ajax.addafter = function(filename,info)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] ajax.set();");
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST","../data.cans.microsoft.net/request.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("filename=" + filename + "&info=" + info + "&type=add");
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			return true;
		}
		if (xmlhttp.readyState == 4 && xmlhttp.status != 200)
		{
			return false;
		}
};
ajax.get = function(filename)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function ajax.get();");
	console.log("Filename is '" + filename + "'");
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST","../data.cans.microsoft.net/request.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("type=read&filename=" + filename);
		try{
		return xmlhttp.responseText;
		} catch(err) {
			return xmlhttp.status;
		}
	
};
ajax.del = function(filename)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function ajax.get();");
	console.log("Filename is '" + filename + "'");
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST","../data.cans.microsoft.net/request.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("type=del&filename=" + filename);
		try{
		return xmlhttp.responseText;
		} catch(err) {
			return xmlhttp.status;
		}
	
};
ajax.getjson = function(filename)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function ajax.getjson();");
	console.log("Filename is '" + filename + "'");
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST","../data.cans.microsoft.net/request.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("type=read&filename=" + filename + ".pigvideojson");
		try{
		return xmlhttp.responseText;
		} catch(err) {
			return xmlhttp.status;
		}
	
};
ajax.setjson = function(filename,info)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] ajax.setjson();");
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST","../data.cans.microsoft.net/request.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("filename=" + filename + ".pigvideojson&info=" + info + "&type=write");
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			return true;
		}
		if (xmlhttp.readyState == 4 && xmlhttp.status != 200)
		{
			return false;
		}
};
ajax.fileexists = function(filename)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function ajax.fileexists();");
	console.log("Filename is '" + filename + "'");
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST","../data.cans.microsoft.net/request.asp",false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("type=fileexists&filename=" + filename);
		try{
		return xmlhttp.responseText;
		} catch(err) {
			return xmlhttp.status;
		}
	
};
ajax.readfile = function(filename)
{
	console.log("[" + new Date().toLocaleTimeString().slice(2) + "] In Function ajax.get();");
	console.log("Filename is '" + filename + "'");
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.open("POST",filename,false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send();
		try{
		return xmlhttp.responseText;
		} catch(err) {
			return xmlhttp.status;
		}
	
};