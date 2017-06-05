function pageLoad() {
	var ok = document.getElementById("oks");
	ok.onclick = okayClick;
	
	}
function okayClick{
	alert("yeah");
}

window.onLoad = pageLoad;