$("#code").keyup(function(){
	$("#output").contents().find('html').html($("#code").val());          
});