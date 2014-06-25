(function() {

	var $contents = $('#contents');
	
	function createNew(event){	
		window.localStorage.setItem('note_contents', " ");
		setHtmlCode( window.localStorage.getItem('note-contents'));
	}

	function fullscreen() {
		if (screenfull.enabled) {
			screenfull.request();
		}	
	}
	function saveLocalStorage(contents) {
		var content = contents.code();
		var oMyBlob = new Blob([content], { type : "text/plain", endings: "transparent"});
		window.saveAs(oMyBlob, "note-test.html");
	}

	$('#createNew').on('click', createNew);
	$('#fullScreen').on('click', fullScreen);
	$('#saveFile').on('click', saveLoacalStorage);
})