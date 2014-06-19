var $contents = $('#contents');

function createKey(){
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = nowDate.getMonth()  + 1;
	var date = nowDate.getDate();
	var timestamp = nowDate.getTime();
	var key = "note-" + year +"-"+ month +"-"+ date + "-"  + timestamp;

	return key;
}

function autoSave(event){
	window.localStorage.setItem(selectedKey, getHtmlCode());
}
function autoLoad(event){

	 // $contents.val( window.localStorage.getItem('note_contents') );
	 setHtmlCode( window.localStorage.getItem(selectedKey) );
}



function loadLocalStorage(event){

	var value = $(event.currentTarget).val();
	setHtmlCode( window.localStorage.getItem(value) );
}

//-------------------------------------------------

$('#listSelect').on('change', loadLocalStorage);


initHtmlEditor();

var selectedKey = createKey();


// $('.about').on('click',function(){
// 	$('#aboutModal').modal();
// })
