/*
var bb = new BlobBuilder();
bb.append(content);
var fileSaver = window.saveAs(bb.getBlob("text/plain;charset=UTF-8"), "filename.txt");
*/
function createNew(event){	
	window.localStorage.setItem('note_contents', " ");
}

function saveLocalStorage(contents) {
	var content = contents.code();
	var oMyBlob = new Blob([content], { type : "text/plain", endings: "transparent"});
	window.saveAs(oMyBlob, "filename.txt");
}

$('#fullscreen').click(function () {
	screenfull.toggle($('#container')[0]);
});

$('#createNew').on('click', createNew);
$('#saveFile').on('click', saveLocalStorage);