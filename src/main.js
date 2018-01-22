var c = document.getElementById("main");
var v = document.getElementById("vid");

v.pause();

c.width = Math.floor(document.body.scrollWidth);
c.height = Math.floor(document.body.scrollHeight);
  
var originx = Math.floor(c.width/2);
var originy = Math.floor(c.height/2);

var ctx = c.getContext("2d");
ctx.font = "50px earth-2073";
ctx.fillStyle = "#ffffff";
ctx.fillText(
	"LOADING...",
	originx-100,
	originy-25,
	200
);

var data = [
	{x:0, y:20, name:"DUNE", size:110},
	{x:-170, y:-280, name:"Atreides", size:80},
	{x:-290, y:-540, name:"Paul", size:70},
	{x:-90, y:-520, name:"Leto", size:50},
	{x:-430, y:-560, name:"Halleck", size:40},
	{x:-330, y:-360, name:"Kynes", size:50},
	{x:100, y:-310, name:"Hawat", size:40},
	{x:-160, y:-620, name:"Idaho", size:40},
	{x:40, y:-535, name:"Yueh", size:50},
	{x:20, y:-390, name:"Jessica", size:60},
	{x:30, y:-190, name:"Bene Gesserit", size:80},
	{x:0, y:280, name:"Arrakis", size:80},
	{x:40, y:450, name:"Worm", size:60},
	{x:260, y:-280, name:"Harkdonnen", size:80},
	{x:350, y:-420, name:"Baron", size:60},
	{x:400, y:-90, name:"Piter", size:40},
	{x:200, y:-545, name:"Feyd-Rautha", size:50},
	{x:420, y:-280, name:"Rabban", size:40},
	{x:-320, y:90, name:"Spice", size:90},
	{x:-520, y:260, name:"Carryall", size:60},
	{x:-400, y:340, name:"Harvester", size:60},
	{x:330, y:100, name:"Corrino", size:80},
	{x:430, y:230, name:"Padishah", size:50},
	{x:480, y:80, name:"Irulan", size:50},
	{x:-520, y:-60, name:"Stillsuit", size:60},
	{x:200, y:-70, name:"Mentat", size:40},
	{x:-370, y:-190, name:"Fremen", size:80},
	{x:-670, y:-170, name:"Stilgar", size:50},
	{x:-500, y:-280, name:"Chani", size:60}
];
var condata = [
	{t1:"DUNE",t2:"Atreides"},
	{t1:"DUNE",t2:"Harkdonnen"},
	{t1:"DUNE",t2:"Fremen"},
	{t1:"DUNE",t2:"Spice"},
	{t1:"DUNE",t2:"Arrakis"},
	{t1:"DUNE",t2:"Corrino"},
	{t1:"Paul",t2:"Leto"},
	{t1:"Paul",t2:"Chani"},
	{t1:"Paul",t2:"Jessica"},
	{t1:"Leto",t2:"Jessica"},
	{t1:"Atreides",t2:"Leto"},
	{t1:"Atreides",t2:"Jessica"},
	{t1:"Atreides",t2:"Paul"},
	{t1:"Atreides",t2:"Hawat"},
	{t1:"Atreides",t2:"Yueh"},
	{t1:"Atreides",t2:"Idaho"},
	{t1:"Atreides",t2:"Halleck"},
	{t1:"Harkdonnen",t2:"Baron"},
	{t1:"Harkdonnen",t2:"Hawat"},
	{t1:"Harkdonnen",t2:"Yueh"},
	{t1:"Harkdonnen",t2:"Feyd-Rautha"},
	{t1:"Harkdonnen",t2:"Rabban"},
	{t1:"Harkdonnen",t2:"Piter"},
	{t1:"Harkdonnen",t2:"Corrino"},
	{t1:"Corrino",t2:"Irulan"},
	{t1:"Corrino",t2:"Padishah"},
	{t1:"Mentat",t2:"Hawat"},
	{t1:"Mentat",t2:"Piter"},
	{t1:"Bene Gesserit",t2:"Jessica"}
];
var desdata = [
	{title:"DUNE by Frank Herbert", des:"Dune, written by Frank Herbert,  is a sci-fi masterpiece winning  both the Hugo Award and Nebula   Award for Best Novel. This novel follows the struggles of Paul    Atreides, the heir to the dukedomof the desert planet Arrakis, as he fights back against the House Harkdonnen, the rival who stole  his way of life and the life of  his father."}
];

function update(mosx, mosy) {
	var mouseoffsetx = 2*((originx+(originx*2-(mosx*1.5)))/2);
	var mouseoffsety = 2*((originy+(originy*2-(mosy*1.5)))/2);
	var desindex = -1;
	v.style.filter = "blur(30px)";
	ctx.clearRect(0,0,originx*2,originy*2);
	ctx.strokeStyle = "#ff6600";
	ctx.lineWidth = 10;
	for(var f = 0;f < condata.length;f++) {
		var coord = [];
		for(var g = 0;g < data.length;g++) {
			if(data[g].name === condata[f].t1) {
				coord[0] = mouseoffsetx+data[g].x;
				coord[1] = mouseoffsety-data[g].y;
			}
		}
		for(var h = 0;h < data.length;h++) {
			if(data[h].name === condata[f].t2) {
				coord[2] = mouseoffsetx+data[h].x;
				coord[3] = mouseoffsety-data[h].y;
			}
		}
		ctx.beginPath();
		ctx.moveTo(coord[0],coord[1]);
		ctx.lineTo(coord[2],coord[3]);
		ctx.stroke();
	}
	
	for(var i = 0;i < data.length;i++) {
		ctx.beginPath();
		ctx.arc(mouseoffsetx+data[i].x,mouseoffsety-data[i].y,data[i].size,0,2*Math.PI);
		ctx.fillStyle = "#b37700";
		ctx.fill();
		ctx.font = Math.floor(data[i].size) + "px earth-2073";
		ctx.fillStyle = "#ffc266";
		ctx.fillText(
			data[i].name,
			mouseoffsetx+data[i].x-data[i].size*(1.68/2),
			mouseoffsety-data[i].y+data[i].size/3.5,
			data[i].size*1.75
		);
		if(mosx > mouseoffsetx+data[i].x-data[i].size && mosx < mouseoffsetx+data[i].x+data[i].size) {
			if(mosy > mouseoffsety-data[i].y-data[i].size && mosy < mouseoffsety-data[i].y+data[i].size) {
				if(mosy != originy*1.5 || mosx != originx*1.5) {
					desindex = i;
					v.style.filter = "blur(0px)";
				}
			}
		}
	}
	if(desindex >= 0) {
		ctx.fillStyle = "#ffa64d";
		ctx.fillRect(5,5,280,215);
		ctx.fillStyle = "#662900";
		ctx.fillRect(5,5,280,35);
		ctx.fillStyle = "#000000";
		ctx.fillStyle = "#fafafa";
		ctx.font = "27px earth-2073";
		ctx.fillText(desdata[desindex].title,10,31,271);
		ctx.fillStyle = "#000000";
		ctx.font = "15px Monospace";
		for(var j = 0;j < desdata[desindex].des.length%33;j++) {
			ctx.fillText(desdata[desindex].des.substring(j*33,j*33+33),9,57+j*15,270);
		}
	}
}

setTimeout(function(){
	ctx.font = "10px earth-2073";
	update(originx*1.5,originy*1.5);
	v.play();
	c.onmousemove = function() {
		update(event.clientX, event.clientY);
	};
}, 1500);
