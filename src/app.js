
function autoSave(event){
	var value = $('#contents').val();
	window.localStorage.setItem('note_contents', value);
}
function autoLoad(event){

	 $('#contents').val( window.localStorage.getItem('note_contents') );
}

$('#contents').on('keyup', autoSave);

$(window).on('load', autoLoad);