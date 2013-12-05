$(document).ready(function(){
	$(".trigger").click(function(){
		$(this).addClass("schedule");
		$(this).html("<span>You're scheduling...</span>Call with Mom");
		$("#footer .note").html("Schedule a call for 2pm");
		$("#footer .call").show();
	})	
})