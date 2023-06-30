function copy(dx) {
	var e = document.getElementById(dx);
	e.select();
	document.execCommand("Copy");
	alert("复制成功！");
	window.getSelection().empty()
}