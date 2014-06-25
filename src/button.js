/*
var bb = new BlobBuilder();
bb.append(content);
var fileSaver = window.saveAs(bb.getBlob("text/plain;charset=UTF-8"), "filename.txt");
*/
var $btnCreateNew = $('#createNew');
var $btnFullScreen = $('#fullScreen');
var $btnSaveFile = $('#saveFile');
var $btnRef = $('#reference');

function createNew(event){	
	window.localStorage.setItem('note_contents', " ");
}

function saveLocalStorage(contents) {
	var content = contents.code();
	var oMyBlob = new Blob([content], { type : "text/plain", endings: "transparent"});
	window.saveAs(oMyBlob, "filename.txt");
}

$('#createNew').on('click', createNew);
$('#fullScreen').on('click', screenfull);
$('#saveFile').on('click', saveLocalStorage);