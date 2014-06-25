/*
var bb = new BlobBuilder();
bb.append(content);
var fileSaver = window.saveAs(bb.getBlob("text/plain;charset=UTF-8"), "filename.txt");
*/
function createNew(event){	
	window.localStorage.setItem('note_contents', " ");
	setHtmlCode( window.localStorage.getItem('note-contents'));
}

function saveLocalStorage(contents) {
	var content = contents.code();
	var oMyBlob = new Blob([content], { type : "text/plain", endings: "transparent"});
	window.saveAs(oMyBlob, "note-test.html");
}

$('#fullscreen').click(function () {
	screenfull.toggle($('#container')[0]);
});

$('#createNew').click(function() {
	createNew()
});

$('#saveFile').click(function() {
	saveLocalStorage($('#contents'));
});