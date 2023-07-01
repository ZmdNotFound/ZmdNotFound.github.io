function redirectToPage(href) {
	window.location.href = href
}

function Copy(dx) {
	var text = document.getElementById(dx).innerText;
	var textarea = document.createElement("textarea");
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("复制成功！");
}