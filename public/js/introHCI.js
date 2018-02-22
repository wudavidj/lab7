'use strict';

$(document).ready(function() {
	initializePage();

});


function initializePage() {
	$(".likeCtr").click(function() {
		ga("send", "event", 'like', 'click');
	});
}

/*
'use strict';

$(document).ready(function() {
	initializePage();
	$(".likeCtr").click(function() {
		ga("send", "event", <'like'>, <'click'>);
	});
});


function initializePage() {
	// your code here
}

*/
