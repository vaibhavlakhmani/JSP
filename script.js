var score=0;
var timeleft = 20;
document.querySelector("#box1").disabled=true;
document.querySelector("#box2").disabled=true;
document.querySelector("#box3").disabled=true;
document.querySelector("#box4").disabled=true;
document.querySelector("#box5").disabled=true;
document.querySelector("#box6").disabled=true;
document.querySelector("#box7").disabled=true;
document.querySelector("#box8").disabled=true;
document.querySelector("#box9").disabled=true;




function randomGen() {
	var colors = ["Red","Lightblue", "Pink", "Purple","Blue", "Green","Yellow", "Orange", "Brown"];
	var name = colors[Math.floor(Math.random() * colors.length)];
	var random1 = colors[Math.floor(Math.random() * colors.length)];
	var random2 = colors[Math.floor(Math.random() * colors.length)];
	var random3 = colors[Math.floor(Math.random() * colors.length)];
	var random4 = colors[Math.floor(Math.random() * colors.length)];
	var random5 = colors[Math.floor(Math.random() * colors.length)];
	var random6 = colors[Math.floor(Math.random() * colors.length)];
	var random7 = colors[Math.floor(Math.random() * colors.length)];
	var random8 = colors[Math.floor(Math.random() * colors.length)];
	var random9 = colors[Math.floor(Math.random() * colors.length)];

		document.querySelector("#name").innerHTML= name;

	var list = [random1,random2,random3,random4,random5,random6,random7,random8,random9];
		var strict = Math.floor(Math.random() * list.length);

		list[strict] = name;

		document.querySelector("#box1").innerHTML = list[0];
		document.querySelector("#box2").innerHTML = list[1];
		document.querySelector("#box3").innerHTML = list[2];
		document.querySelector("#box4").innerHTML = list[3];
		document.querySelector("#box5").innerHTML = list[4];
		document.querySelector("#box6").innerHTML = list[5];
		document.querySelector("#box7").innerHTML = list[6];
		document.querySelector("#box8").innerHTML = list[7];
		document.querySelector("#box9").innerHTML = list[8];
}


function compare(i) {
	var rhs = i;
	var lhs = document.querySelector("#name").innerHTML;

	if (lhs == rhs) {
		++score;
		document.querySelector("#score").innerHTML = score;

	}
	
	randomGen();	
}
  




function clock()
{
	randomGen();
    timeleft=20;
    document.querySelector("#box1").disabled=false;
    document.querySelector("#box2").disabled=false;
    document.querySelector("#box3").disabled=false;
    document.querySelector("#box4").disabled=false;
    document.querySelector("#box5").disabled=false;
    document.querySelector("#box6").disabled=false;
    document.querySelector("#box7").disabled=false;
    document.querySelector("#box8").disabled=false;
    document.querySelector("#box9").disabled=false;
    document.querySelector("#score").innerHTML = score;
    document.querySelector("#counter").innerHTML = timeleft;
    document.querySelector("#start").disabled=true;
    document.querySelector("#counter").style.backgroundColor = "#43A047";




    var Timer = setInterval(function()
    {
        timeleft--;
        document.querySelector("#counter").innerHTML = timeleft;
        if(timeleft <= 0)
        {
            document.querySelector("#counter").style.backgroundColor = "#F44336";
            clearInterval(Timer);
            document.querySelector("#start").disabled=false;
            document.querySelector("#box1").disabled=true;
            document.querySelector("#box2").disabled=true;
            document.querySelector("#box3").disabled=true;
            document.querySelector("#box4").disabled=true;
            document.querySelector("#box5").disabled=true;
            document.querySelector("#box6").disabled=true;
            document.querySelector("#box7").disabled=true;
            document.querySelector("#box8").disabled=true;
            document.querySelector("#box9").disabled=true;
            alert("TIME UP! Your score is " + score);
            score=0;
            timeleft = 20;
        }
    }, 1000);
}