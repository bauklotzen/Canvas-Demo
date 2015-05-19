function convertToGS (img) {
	//存储原始颜色
	img.clor = img.src;
	//灰度版
	img.grayscale = creatGSCanvas(img);
	//鼠标交互的两种行为
	img.onmouseover = function() {
		this.src = this.color;
	}
	img.onmouseout = function() {
		this.src = this.grayscale;
	}
}	
//创建灰度版本的函数
function creatGSCanvas (img) {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img,0,0);
	
	for (var i = 0; i < c.height; i++) {
		for (var j = 0; j < c.width; j++) {
			var x = (j*4) * c.width + (j*4);
			var r = c.data[x];
			var g = c.data[x+1];
			var b = c.data[x+2];
			c.data[x] = c.data[x+1] = c.data[x+2] = (r+g+b)/3; 	
		};
	};

	ctx.putImageData(c,0,0,0,0,c.width,c.height);
	return canvas.toDataURL();
}

window.onload = function() {
	console.log("WTF?");
	convertToGS(document.getElementById('avator'));
}
