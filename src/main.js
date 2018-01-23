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
	{x:120, y:280, name:"Arrakis", size:80},
	{x:40, y:450, name:"Worm", size:60},
	{x:260, y:-280, name:"Harkdonnen", size:80},
	{x:350, y:-420, name:"Baron", size:60},
	{x:400, y:-90, name:"Piter", size:40},
	{x:200, y:-545, name:"Feyd-Rautha", size:50},
	{x:420, y:-280, name:"Rabban", size:40},
	{x:-320, y:90, name:"Spice", size:90},
	{x:-520, y:260, name:"Carryall", size:60},
	{x:-300, y:340, name:"Harvester", size:60},
	{x:330, y:100, name:"Corrino", size:80},
	{x:430, y:230, name:"Padishah", size:50},
	{x:480, y:80, name:"Irulan", size:50},
	{x:-510, y:60, name:"Stillsuit", size:60},
	{x:-540, y:-80, name:"Jamis", size:40},
	{x:200, y:-70, name:"Mentat", size:60},
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
	{t1:"Atreides",t2:"Kynes"},
	{t1:"Atreides",t2:"Halleck"},
	{t1:"Bene Gesserit",t2:"Jessica"},
	{t1:"Harkdonnen",t2:"Baron"},
	{t1:"Harkdonnen",t2:"Hawat"},
	{t1:"Harkdonnen",t2:"Yueh"},
	{t1:"Harkdonnen",t2:"Feyd-Rautha"},
	{t1:"Harkdonnen",t2:"Rabban"},
	{t1:"Harkdonnen",t2:"Piter"},
	{t1:"Harkdonnen",t2:"Corrino"},
	{t1:"Fremen",t2:"Stilgar"},
	{t1:"Fremen",t2:"Chani"},
	{t1:"Fremen",t2:"Kynes"},
	{t1:"Fremen",t2:"Jamis"},
	{t1:"Fremen",t2:"Stillsuit"},
	{t1:"Spice",t2:"Carryall"},
	{t1:"Spice",t2:"Harvester"},
	{t1:"Corrino",t2:"Irulan"},
	{t1:"Corrino",t2:"Padishah"},
	{t1:"Mentat",t2:"Hawat"},
	{t1:"Mentat",t2:"Piter"},
	{t1:"Worm",t2:"Spice"},
	{t1:"Arrakis",t2:"Spice"},
	{t1:"Fremen",t2:"Spice"},
	{t1:"Arrakis",t2:"Worm"}
];
var desdata = [
	{title:"DUNE by Frank Herbert", des:"Dune, written by Frank Herbert,  is a sci-fi masterpiece winning  both the Hugo Award and Nebula   Award for Best Novel. This novel follows the struggles of Paul    Atreides, the heir to the dukedomof the desert planet Arrakis, as he fights back against the House Harkdonnen, the rival who stole  his way of life and the life of  his father."},
	{title:"House Atreides", des:"One of the Great Houses of the   feudal interstellar empire known as the Imperium, House Atreides  rules the desert planet Arrakis."},
	{title:"Paul Atreides", des:"Also known later as Muad Dib,    Paul is the protaganist and the  main character. Son of Leto and  Jessica of the House Atreides, heis a charismatic leader who wouldunite the Fremen against the     Imperium."},
	{title:"Leto I Atreides", des:"Father of Paul and master of LadyJessica, Leto is appointed as thehead of House Atreides to become the duke of Arrakis."},
	{title:"Gurney Halleck", des:"Loyal warrior of the House Atreides."},
	{title:"Liet-Kynes", des:"Imperial Planetologist on Arrakis who is revered among the Fremen."},
	{title:"Thufir Hawat", des:"Mentat and Master of Assassins ofHouse Atreides."},
	{title:"Duncan Idaho", des:"Swordmaster for House Atreides"},
	{title:"Wellington Yueh", des:"Suk doctor for the Atreides. His wife died at the hands of the    Baron. He seeks revenge against  the Harkdonnen."},
	{title:"Lady Jessica", des:"Concubine of Leto, she is also   the mother of Paul and a Bene Gesserit."},
	{title:"Bene Gesserit", des:"Secretive sisterhood of female superhumans. Very mysterious group with a mysterious purpose."},
	{title:"Arrakis", des:"The desert planet of Arrakis,    also known as Dune, is the only planet on which spice can be found"},
	{title:"Sandworm", des:"Sandworms are colossal worm-like creatures that live on the hot desert planet Arrakis. Sandworms will attack anyone who attempts to extract melange from the sand, and some are large enough to swallow harvesting vehicles whole."},
	{title:"House Harkdonnen", des:"Chief rivals of House Atreides,  they are the main opponents of   Paul."},
	{title:"Baron Vladimir Harkdonnen", des:"Cruel and ruthless politican and head of House Harkdonnen. He orders the assassination Leto I Atreides."},
	{title:"Piter De Vries", des:"Twisted and sadistic Mentat underthe service of Baron Vladimir Harkdonnen."},
	{title:"Feyd-Rautha", des:"Nephew and heir-presumptive of   the head of Harkdonnen."},
	{title:"Glossu \"Beast\" Rabban", des:"Older nephew of Baron Vladimir Harkdonnen."},
	{title:"Spice", des:"Spice, or also known as melange, is the most valuable resource in the universe. Found only on the  planet Arrakis, it gives the userprolonged life and health.       However, withdrawal is fatal."},
	{title:"Carryall", des:"Aircraft used to lift spice harvesters away from danger when the  inevitable sandworm arrives."},
	{title:"Harvester", des:"Ground vehicle used during spice extract to vacuum spice from the deposits."},
	{title:"House Corrino", des:"Royal House Corrino rule the universe as the position of Padishah Emperor."},
	{title:"Shaddam IV Corrino", des:"Padishah Emperor of the universe.Ruler of Imperium."},
	{title:"Irulan Corrino", des:"Trophy wife of Paul Atreides."},
	{title:"Stillsuit", des:"Skin-tight suits used by the Fremen to reclaim waste water, allowing for the user to survive on Arrakis longer."},
	{title:"Jamis", des:"Fremen who is killed by Paul in a knife duel after challenging him."},
	{title:"Mentat", des:"Essentially human \"computers\", Mentats are trained to perform complex and large calculations for   their masters."},
	{title:"The Fremen", des:"The native inhabitants of the    planet Arrakis. With a tribal    society and the knowledge of the land, they are a force to be     reckoned with."},
	{title:"Stilgar", des:"Leader of one of the large Frementribes."},
	{title:"Chani", des:"Daughter of Liet-Kynes and concubine of Paul."}
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
