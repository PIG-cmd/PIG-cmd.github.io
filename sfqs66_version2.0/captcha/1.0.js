slidecaptcha = {};
slidecaptcha.max = 0;
slidecaptcha.version = "v1.0";
slidecaptcha.data = [];
slidecaptcha.new = function(obj){
	if (typeof obj == "undefined")
	return slidecaptcha.new({});
	var id = slidecaptcha.max+1;
	slidecaptcha.max++;
	if (typeof obj.box == "undefined")
	{
		let e = document.createElement("div");
		e.id = "slidecaptcha-" + id;
		document.body.append(e);
		obj.box = document.getElementById("slidecaptcha-" + id); 
	}
	if (typeof obj.useimage == "undefined")
	{
		obj.useimage = "https://api.dujin.org/bing/1920.php";
	}
	if (typeof obj.maxtime ==  "undefined")
		obj.maxtime = 10 * 1000;
	if (typeof obj.mintine == "undefined")
		obj.mintime = 2 * 1000;
	if (typeof obj.success_px == "undefined")
		obj.success_px = 5;
	obj.box.style.width = "640px";
	obj.box.style.height = "480px";
	obj.box.style.background = "skyblue";
	obj.box.style.color = "red";
	obj.box.style.overflow = "auto";
	obj.box.style.position = "fixed";
	obj.box.style.top = "0%";
	obj.box.style.left = "0%";
	obj.box.style["border-style"] = "solid";
	obj.box.style["border-width"] = "5px";
	obj.box.style["border-color"] = "red";
	let info = {};
	info.location = {};
	info.location.height = parseInt(Math.random() * 100 - 50);
	info.location.width = parseInt(Math.random() * 100 - 50);
	obj.box.innerHTML = "<center><span style='font-size:3em;color:red;text-align:center;'>CAPTCHA</span><br><img id=slidecaptcha-" + id + "-image src=" + obj.useimage + "><br><input type=range value=0 max=640 step=1 id=slidecaptcha-" + id + "-range></center><img style='position:absolute;top:" + (192 + info.location.height) + "px;left:" + (400 + info.location.width) + "px;' src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAySURBVEhL7c0xEQAgDAAx/KupqO5YQMJPbLnLnnN3vhIkQRIkQRIkQRIkQRIkQfoc7DxaAwyXiuEqRwAAAABJRU5ErkJggg== id=slidecaptcha-" + id + "-location><br><img id=slidecaptcha-" + id + "-bitmap src=" + obj.useimage + " style='display:none;'><br><img id=slidecaptcha-" + id + "-smallblock src= data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAySURBVEhL7c0xEQAgDAAxhHSsf2d4QMJPbLnLnnNnvxIkQRIkQRIkQRIkQRIkQfoczD4cGLQ9QOmZGwAAAABJRU5ErkJggg== style='position:absolute;top:" + (192 + info.location.height) + "px;left:50px'><br><span id=slidecaptcha-" + id + "-status></span><br>CAPTCHA for Shift fee query system <a href=https://github.com/pig-cmd target=_blank>pig-cmd</a> <a href=https://github.com/cdn2021 target=_blank>cdn2021</a><br><img src=https://th.bing.com/th/id/Rc09bfa0a2c3bc38908b286218e913b9a?rik=PtFEaNwYagE%2brg&riu=http%3a%2f%2ficon.chrafz.com%2fuploads%2fallimg%2f170119%2f1-1F1191352250-L.png&ehk=rykC7ZcaCGCkxYziUqs%2fWWrbsafW6CYjz8l1IvoLXAc%3d&risl=&pid=ImgRaw height=32px width=32px onclick=javascript:slidecaptcha.reload(" + id + "); style='position:absolute;top:0%;right:0%;height:32px;width:32px;border-style:solid;border-width:2px;border-color:black'>";
	obj.son = {};
	obj.son.image = document.getElementById("slidecaptcha-" + id + "-image");
	obj.son.bitmap = document.getElementById("slidecaptcha-" + id + "-bitmap");
	obj.son.range = document.getElementById("slidecaptcha-" + id + "-range");
	obj.son.location = document.getElementById("slidecaptcha-" + id + "-location");
	obj.son.status = document.getElementById("slidecaptcha-" + id + "-status");
	obj.son.status.innerHTML = "Waiting...";
	obj.son.smallblock = document.getElementById("slidecaptcha-" + id + "-smallblock");
	obj.son.image_css = {};
	obj.son.bitmap_css = {};
	obj.son.image.onload = function(){
		obj.son.image_css.height = obj.son.image.height;
		obj.son.image_css.width = obj.son.image.width;
		obj.son.image_css.ratio = 1;
		if (obj.son.image.width > 480)
		{
			let n = obj.son.image.width / 480;
			obj.son.image.width = obj.son.image_css.width / n;
			obj.son.image.height = obj.son.image_css.height / n;
			obj.son.image_css.width = obj.son.image_css.width;
			obj.son.image_css.height = obj.son.image_css.height;
			obj.son.range.style.width = obj.son.image.width + "px";
			
			obj.son.range.max = obj.son.image.width;

			obj.son.image_css.ratio = n;
		
		};


	};
	let bool = false;
	obj.son.range.onchange = function()
	{
		bool = true;
		obj.son.smallblock.style.left =  (parseInt(obj.son.range.value) - 10 + 92) + "px";
	};
	obj.son.bitmap.onload = function(){
		obj.son.bitmap_css.height = obj.son.bitmap.height;
		obj.son.bitmap_css.width = obj.son.bitmap.width;
		obj.son.bitmap_css.ratio = 1;
		if (obj.son.bitmap.width > 480)
		{
			let n = obj.son.bitmap.width / 480;
			obj.son.bitmap.width = obj.son.bitmap_css.width / n;
			obj.son.bitmap.height = obj.son.bitmap_css.height / n;
			obj.son.bitmap_css.width = obj.son.bitmap_css.width;
			obj.son.bitmap_css.height = obj.son.bitmap_css.height;
			


			obj.son.bitmap_css.ratio = n;
			obj.son.bitmap.style.position = "absolute";
			obj.son.bitmap.style.left = "5px";
			obj.son.bitmap.style.clip = "rect(" + (192 + info.location.height) + " px " + ( 400 + info.location.width) + " px 800px 800px)";
		
		};
	};
	var t = new Date().getTime();
	obj.info = info;
	var s = setInterval(function(){
		let smallblock_position = obj.son.smallblock.style.left;
		let location_position = obj.son.location.style.left;
		if ((Math.abs(parseInt(smallblock_position) - parseInt(location_position)) <= obj.success_px) && bool)
		{
			var ct = new Date().getTime();
			slidecaptcha.data[id].end_time = ct;
			if (((ct - t) < obj.mintime))
			{
				obj.son.status.innerHTML = "Failed:You are a robot.";
				slidecaptcha.data[id].status = "Failed:You are a robot.";
			} else {
				if ((ct - t) > obj.maxtime)
				{
					obj.son.status.innerHTML = "Failed:Timeout";
					slidecaptcha.data[id].status = "Failed:Timeout";
				} else {
					obj.son.status.innerHTML = "Success";
					slidecaptcha.data[id].status = "Success";
				}
			}
			clearInterval(s);
		} else {
			if (bool)
			{
				var ct = new Date().getTime();
				slidecaptcha.data[id].end_time = ct;
				obj.son.status.innerHTML = "Failed";
				slidecaptcha.data[id].status = "Failed";
				clearInterval(s);
			}
		};
		
	},100);
	slidecaptcha.data[id] = {};
	slidecaptcha.data[id].info = obj;
	slidecaptcha.data[id].status = "Waiting";
	slidecaptcha.data[id].start_time = t;
	slidecaptcha.data[id].end_time = 0;
	return slidecaptcha.data[id];
};
slidecaptcha.remove = function (id) {  slidecaptcha.data[id].info.box.innerHTML = ""; slidecaptcha.data[id].info.box.style.display="none";};
slidecaptcha.reload = function (id) {
	slidecaptcha.data[id].info.box.innerHTML = "";
	return (slidecaptcha.new(slidecaptcha.data[id].info));
};
