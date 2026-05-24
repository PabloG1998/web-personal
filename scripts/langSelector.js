const langSelect = document.getElementById("langSelect");
langSelect.addEventListener("change", function(){
	const goto = this.value;
	window.location.href=goto;
})