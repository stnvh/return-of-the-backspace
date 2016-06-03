var curr;
document.addEventListener('keydown', function(e) {
	e.keyCode === 8 && (curr = document.activeElement) && ( !(curr instanceof HTMLInputElement) && !(curr instanceof HTMLTextAreaElement) && curr.getAttribute('contenteditable') === null ) && history.back();
})
