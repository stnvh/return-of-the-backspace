document.addEventListener('keydown', function(e) {
	var curr = document.activeElement;
	e.keyCode === 8 && ( !(curr instanceof HTMLInputElement) && !(curr instanceof HTMLTextAreaElement) && curr.getAttribute('contenteditable') === null ) && history.back();
})
