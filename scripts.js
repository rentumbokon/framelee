var gif1;	//gif var to be accessible to other functions
var saveChar;
var saveAction;

function onload(character,action){	//character and action are proper
	//resize info bubble to fit width
	document.getElementById("info").style.width = (window.innerWidth-80) + "px";	//75 right + 5 left
	//save char and action
	saveChar = character;
	saveAction = action;
	document.getElementById("charName").innerHTML = character + ":";
	document.getElementById("actionName").innerHTML = action;
	var trans_char = translateChar(character);
	//var trans_action = translateAction(action);
	document.getElementById("charIcon").src = "../../images/characters/" + trans_char + ".png";
	//gif load
	gif1 = new RubbableGif({ gif: document.getElementById('gifFrame') } );
	gif1.load();//stopped here
	getTotalFrames();
	getCurrentFrame();
}

function iscroll(){	//scroll gracefully
	var myScroll;
	loaded();
	function loaded () {
		myScroll = new IScroll('#wrapper', { scrollX: true, mouseWheel: true, click: true });
	}
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function splitFrames(){	//properly split split.html iFrames
	var height = window.innerHeight - 60;	//minus header
	//set absolute positions of iframes
	document.getElementById("splitFrameTop").style.top = "60px";	//compensate header
	document.getElementById("splitFrameBot").style.top = (height/2+60)+"px";
	//set height
	document.getElementById("splitFrameTop").style.height = (height/2)+"px";
	document.getElementById("splitFrameBot").style.height = (height/2)+"px";
	
	window.addEventListener("resize",function(){
		var height = window.innerHeight - 60;	//minus header
		//set absolute positions of iframes
		document.getElementById("splitFrameTop").style.top = "60px";
		document.getElementById("splitFrameBot").style.top = (height/2+60)+"px";
		//set height
		document.getElementById("splitFrameTop").style.height = (height/2)+"px";
		document.getElementById("splitFrameBot").style.height = (height/2)+"px";
	});
}

function singleFrame(){
	var height = window.innerHeight - 60;	//minus header
	document.getElementById("singleFrame").style.top = "60px";
	document.getElementById("singleFrame").style.height = height + "px";
	window.addEventListener("resize",function(){
		var height = window.innerHeight - 60;	//minus header
		document.getElementById("singleFrame").style.height = height + "px";
	});
}

function setCharSelect(type){	//set iFrames to characters.html
	if (type == "single"){
		document.getElementById("singleFrame").src = "characters.html";
	}
	else if (type == "split"){
		document.getElementById("splitFrameTop").src = "characters.html";
		document.getElementById("splitFrameBot").src = "characters.html";
	}
	else {alert('Error: type='+type);}
}

/////////////////////////
//Gif Functions
/////////////////////////
function getTotalFrames(){
	setInterval(function(){
		var isLoaded = gif1.get_loading;
		if (isLoaded){
			var totalFrameNum = gif1.get_length();
			document.getElementById("totalFrames").innerHTML = "/ " + totalFrameNum;
		}
	},16);
}
function getCurrentFrame(){
	setInterval(function(){ 
		var onFrameNum = gif1.get_current_frame() + 1; //+1 important
		if (onFrameNum == 0){
			document.getElementById("currFrame").innerHTML = "loading";
		}
		else{
			if (onFrameNum < 10){
				onFrameNum = "0" + onFrameNum;
			}
			document.getElementById("currFrame").innerHTML = onFrameNum;	
		}
	//bar graph function
		framePercent = ((gif1.get_current_frame()+1)/gif1.get_length())*100;
		//console.log("framePercent: " + framePercent);
		document.getElementById("barGraph").style.width = framePercent+"%";
	}, 16);
}
/////////////////////////
//Translation Functions
/////////////////////////
function translateChar(character){
	if (character == "Captain Falcon"){
		return "captfalcon";
	}
	else if (character == "Donkey Kong"){
		return "dk";
	}
	else if (character == "Dr. Mario"){
		return "drmario";
	}
	else if (character == "Mr. Game & Watch"){
		return "gamenwatch";;
	}
	else if (character == "Ice Climbers"){
		return "iceclimbers";
	}
	else if (character == "Young Link"){
		return "younglink";
	}
	else{
		return character.charAt(0).toLowerCase() + character.slice(1);
	}
}

function translateAction(action){
	if (action == "Spot Dodge"){
		return "down_dodge";
	}
	else if (action == "Aerial Dodge"){
		return "air_dodge";
	}
	else if (action == "Forward Roll"){
		return "front_roll";
	}
	else if (action == "Backward Roll"){
		return "back_roll";
	}
	else if (action == "Up Smash"){
		return "usmash";
	}
	else if (action == "Down Smash"){
		return "dsmash";
	}
	else if (action == "Forward Smash"){
		return "fsmash";
	}
	else if (action == "Neutral Aerial"){
		return "nair";
	}
	else if (action == "Up Aerial"){
		return "uair";
	}
	else if (action == "Down Aerial"){
		return "dair";
	}
	else if (action == "Forward Aerial"){
		return "fair";
	}
	else if (action == "Backward Aerial"){
		return "bair";
	}
	else if (action == "Jab 1"){
		return "jab1";
	}
	else if (action == "Jab 2"){
		return "jab2";
	}
	else if (action == "Rapid Jab"){
		return "jab3";
	}
	else if (action == "Up Tilt"){
		return "utilt";
	}
	else if (action == "Down Tilt"){
		return "dtilt";
	}
	else if (action == "Forward Tilt"){
		return "ftilt";
	}
	else if (action == "Forward Tilt (Up)"){
		return "ftilt_up";
	}
	else if (action == "Forward Tilt (Down)"){
		return "ftilt_down";
	}
	else if (action == "Dash Attack"){
		return "dash_a";
	}
	else if (action == "Grab"){
		return "grab";
	}
	else if (action == "Dash Grab"){
		return "dash_grab";
	}
	else if (action == "Special"){
		return "b";
	}
	else if (action == "Up Special"){
		return "up_b";
	}
	else if (action == "Down Special"){
		return "down_b";
	}
	else if (action == "Side Special"){
		return "side_b";
	}
	else {alert("error: action="+action);}
}