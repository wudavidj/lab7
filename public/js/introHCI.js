'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$(".likeCtr").click(likeClick);
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

function likeClick(e) {
	e.preventDefault();
	ga("send", "event", <'like'>, <'click'>);
	// your code here
}
