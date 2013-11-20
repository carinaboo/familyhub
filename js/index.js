$(document).ready(function(){
	$("#ok").click(function(){
		if ($("#message").val()) {
			sendText( $("#message").val() )
		} else {
			sendOk();
		}
	})
})

function sendText(msg) {
	$(".message-rows").append("<div class='row sent'> \
    				<div class='triangle'></div> \
    				<div class='message'>" + msg + "</div> \
    			</div>")
}

function sendOk() {
	var imgHTML = "<img src='images/ok.gif'>";
	sendText(imgHTML);
}

