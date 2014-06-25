/*
var bb = new BlobBuilder();
bb.append(content);
var fileSaver = window.saveAs(bb.getBlob("text/plain;charset=UTF-8"), "filename.txt");
*/
$('#fullscreen').click(function () {
	if (document.fullscreenEnabled) {
        requestFullscreen(document.documentElement);
    };
});


$('#createNew').click(function() {
	createNew()
});

$('#saveFile').click(function() {
	saveLocalStorage($('#contents'));
});