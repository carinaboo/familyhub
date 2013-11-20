$(document).ready(function(){
	sendText("OK MOM");
	sendOk();
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