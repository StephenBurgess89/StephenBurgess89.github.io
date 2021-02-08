function toggleMenu() {
	var x = document.getElementById("menuTop");
	var y = document.getElementById("navboxOne");
	var z = document.getElementById("navboxThree");
	if(x.className === "menu") {
		x.className += " mobile";
		y.className += " mobile";
		z.className += " mobile";
	} else {
		x.className = "menu";
		y.className = "navBox";
		z.className = "navBox";
	}
}