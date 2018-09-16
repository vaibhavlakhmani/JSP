i = 20;
function onTimer() {
	document.getElementById("start").disabled = true;
document.getElementById('counter').innerHTML = i;
i--;
if (i < 0) {
	document.getElementById("start").disabled = false;
alert('TIMEUP!');
clearTimeout(i);
}
else {

setTimeout(onTimer, 1000);
}
}