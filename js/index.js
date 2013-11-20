$(document).ready(function(){
	$("#ok").click(function(){
		if ($("#message").val()) { // send a message and clear input
			sendText( $("#message").val() );
			$("#message").val("");
			changeOkButton();
		} else { //send ok
			sendOk();
		}

		// go to bottom of page
		window.scrollTo(0,document.body.scrollHeight);
	})

	$("#message").keypress(function(){
		changeOkButton();
	})
})

function sendText(msg) {
	var html = "<div class='row sent'> \
    				<div class='triangle'></div> \
    				<div class='message'>" + msg + "</div> \
    			</div>"
	$(html).hide().appendTo(".message-rows").show();
}

function sendOk() {
	var imgHTML = "<img class='ok-img' src='images/ok.gif'>";
	var html = "<div class='row sent'> \
    				<div class='triangle'></div> \
    				<div class='message ok'>" + imgHTML + "</div> \
    			</div>"

	$(html).hide().appendTo(".message-rows").show();
}


function changeOkButton() {
	if ( $("#message").val() ) {
		$("#ok").css("background-image", "none"); // CARINA PUT URL FOR TEXT "SEND" HERE PLZ
	} else {
		$("#ok").css("background-image", 'url("images/ok.gif")'); // I CANT GET URL WORKING HALP
	}
}