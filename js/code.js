function pageLoad() {
	var ok = document.getElementById("oks");
	ok.onclick = okayClick;
	
	}
function okayClick{
	var jpg = document.getElemntbyId("img1");
	jpg.src=("imgenes/granja.png");
}

window.onLoad = pageLoad;