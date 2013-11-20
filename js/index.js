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

	$("#options").click(function(){ // using this button to swap user from Mom/Jimmy for now
		swapUser();
	})

	$("#message").keypress(function(){
		changeOkButton();
	})
})

function sendText(msg) {
	var html = "<div class='row sent'> \
					<div class='face'><img src='images/no-face.jpg'></div> \
    				<div class='triangle'></div> \
    				<div class='message'>" + msg + "</div> \
    			</div>"
	$(html).hide().appendTo(".message-rows").show();
}

function sendOk() {
	var imgHTML = "<img class='ok-img' src='images/ok.gif'>";
	var html = "<div class='row sent'> \
					<div class='face'><img src='images/no-face.jpg'></div> \
    				<div class='triangle'></div> \
    				<div class='message ok'>" + imgHTML + "</div> \
    			</div>"

	$(html).hide().appendTo(".message-rows").show();
}


function changeOkButton() {
	if ( $("#message").val() ) {
		$("#ok").css('background-image', 'url("images/send.png")'); // CARINA PUT URL FOR TEXT "SEND" HERE PLZ
	} else {
		$("#ok").css('background-image', 'url("images/ok.gif")'); // I CANT GET URL WORKING HALP
	}
}

var userIsChild = false;

function swapUser() {
	if (userIsChild) {
		userMom();
		userIsChild = false;
	} else {
		userChild();
		userIsChild = true;
	}
}

function userMom() {
	$('#name').html("Jimmy");
	$('.message-rows .row').each(function() {
		if ($(this).hasClass('sent')) {
			$(this).removeClass('sent');
			$(this).addClass('received');
		} else {
			$(this).removeClass('received');
			$(this).addClass('sent');
		}
	});
}

function userChild() {
	$('#name').html("Mom");
	$('.message-rows .row').each(function() {
		if ($(this).hasClass('sent')) {
			$(this).removeClass('sent');
			$(this).addClass('received');
		} else {
			$(this).removeClass('received');
			$(this).addClass('sent');
		}
	});
}