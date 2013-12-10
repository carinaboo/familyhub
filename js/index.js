$(document).ready(function(){
	$("#home").click(function(){
		window.location.href = "index.html";
	})

	setUpUsers();

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

	$("#name").click(function(){ // using name to swap user from Mom/Child for demo
		swapUser();
	})

	$("#message").keypress(function(){
		changeOkButton();
	})

	var panelOpen = false;

	$("#options").click(function(){
		if (panelOpen == false) {
			$("#options-panel").panel( "open" );
		} else {
			$("#options-panel").panel( "close" );
		}	
	})

	$("#request-call").click(function(){
		requestCall();
		$( "#options-panel" ).panel( "close" );
	})

})

function requestCall() {
	var html = "<div class='row sent callrequest'> \
					<div class='face'></div> \
    				<div class='triangle'></div> \
    				<div class='message'> \
    					<div class='text'>" + currentUser.name + " requested a call with " + otherUser.name + "</div> \
    					<a href='#' class='schedule-call btn'>Schedule Call</a> \
					</div> \
    			</div>"
	$(html).hide().appendTo(".message-rows").show();
	$(".schedule-call").click(function(){
		$.mobile.changePage("#schedule", {transition: "slidedown"} );
	})
}

function sendText(msg) {
	var html = "<div class='row sent'> \
					<div class='face'></div> \
    				<div class='triangle'></div> \
    				<div class='message'>" + msg + "</div> \
    			</div>"
	$(html).hide().appendTo(".message-rows").show();
}

function sendOk() {
	var imgHTML = "<img class='ok-img' src='images/ok.gif'>";
	var html = "<div class='row sent'> \
					<div class='face'></div> \
    				<div class='triangle'></div> \
    				<div class='message ok'>" + imgHTML + "</div> \
    			</div>"

	$(html).hide().appendTo(".message-rows").show();
}


function changeOkButton() {
	if ( $("#message").val() ) {
		$("#ok").css('background-image', 'url("images/send.png")');
	} else {
		$("#ok").css('background-image', 'url("images/ok.gif")'); 
	}
}

var userIsChild = true;

var childName = "Jimmy";
var childProfilePic = "images/child.jpg";

var momName = "Mom";
var momProfilePic = "images/mom.jpg";

var User = function(name, pic) {
    this.name = name,
    this.profilePic = pic
}

var currentUser, otherUser, mom, child;

function setUpUsers() {
	mom = new User("Mom", "images/mom.jpg");
	child = new User("Jimmy", "images/child.jpg");
	currentUser = child;
	otherUser = mom;
	$('.received .face').css("background-image","url('"+otherUser.profilePic+"')");
}

function swapUser() {
	var thisUser = currentUser;
	currentUser = otherUser;
	otherUser = thisUser;
	if (userIsChild) {
		userMom();
		userIsChild = false;
	} else {
		userChild();
		userIsChild = true;
	}
}

function userMom() {
	$('#name').html(childName);
	$('.message-rows .row').each(function() {
		if ($(this).hasClass('sent')) {
			$(this).removeClass('sent');
			$(this).addClass('received');
		} else {
			$(this).removeClass('received');
			$(this).addClass('sent');
		}
	});
	$('.received .face').css("background-image","url('"+childProfilePic+"')");
}

function userChild() {
	$('#name').html(momName);
	$('.message-rows .row').each(function() {
		if ($(this).hasClass('sent')) {
			$(this).removeClass('sent');
			$(this).addClass('received');
		} else {
			$(this).removeClass('received');
			$(this).addClass('sent');
		}
	});
	$('.received .face').css("background-image","url('"+momProfilePic+"')");
}

// Demo 1: setup user and texts for OK button demo
function setupOkButtonDemo() {
	userIsChild = true;
	userChild();
	// not done
}

// Demo 2: setup user and texts for schedule call demo
function setupScheduleCallDemo() {
	var userIsChild = false;
	userMom();
	// not done
}