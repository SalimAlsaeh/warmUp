var flag = '';

function leftClick(){
	flag = '#left';
}
function rightClick(){
	flag = '#right';
}

function addElement (){
	var $liElement = $('<li>item<li>');
	$(flag).append($liElement)
}

