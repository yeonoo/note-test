var $contents = $('#contents');

function createKey(){
	var key = 'mynote';
	return key;
}

var selectedKey = createKey();

function autoSave(event){
	window.localStorage.setItem(selectedKey, getHtmlCode());
}
function autoLoad(event){
	setHtmlCode( window.localStorage.getItem(selectedKey) );
}

function loadLocalStorage(event){
	var value = $(event.currentTarget).val();
	setHtmlCode( window.localStorage.getItem(value) );
}

function createNew(event){	
	window.localStorage.setItem('note_contents', " ");
	setHtmlCode( window.localStorage.getItem('note-contents'));
}

function saveLocalStorage(contents) {
	var content = contents.code();
	var oMyBlob = new Blob([content], { type : "text/plain", endings: "transparent"});
	window.saveAs(oMyBlob, "note-test.html");
}

//-------------------------------------------------


initHtmlEditor();




// $('.about').on('click',function(){
// 	$('#aboutModal').modal();
// })