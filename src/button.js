/*
var bb = new BlobBuilder();
bb.append(content);
var fileSaver = window.saveAs(bb.getBlob("text/plain;charset=UTF-8"), "filename.txt");
*/
/*
function fullScreen() {
	var el = document.documentElement
   		, rfs = // for newer Webkit and Firefox
           el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullScreen
	;
	if(typeof rfs!="undefined" && rfs){
  	rfs.call(el);
	} else if(typeof window.ActiveXObject!="undefined"){
  	// for Internet Explorer
  		var wscript = new ActiveXObject("WScript.Shell");
  		if (wscript!=null) {
   			wscript.SendKeys("{F11}");
  		}
	}
}

$('#fullscreen').click(function () {
	if (document.fullscreenEnabled) {
        fullScreen();
    };
});
*/
$('#fullScreen').click(function() {
	fullscreen();
})

$('#createNew').click(function() {
	createNew();
});

$('#saveFile').click(function() {
	saveLocalStorage($('#contents'));
});