document.addEventListener('keydown', function(e) {
	e.keyCode === 8 && !(document.activeElement instanceof HTMLInputElement) && history.back();
})
