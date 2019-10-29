
function takeIn(){
	var input = $('#in').val();

	$('ul').append(`<li> ${input} </li>`);
	$('ul li:nth-child(even)').addClass('c2') ;
	$('ul li:nth-child(odd)').addClass('c1') ;

}