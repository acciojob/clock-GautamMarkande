//your JS code here. If required.
const timer = document.getElementById("timer");
var date = new Date();
 setInterval(mytimer,1000); 
function mytimer() {
	var dt = new Date();
	timer.innerText = date.getMonth()+"/"+ date.getDate()+"/"+date.getFullYear() +", "+ dt.toLocaleTimeString();
}

