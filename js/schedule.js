$(document).ready(function(){

	$(".trigger").click(function(){
		$(this).addClass("schedule");
		$(this).html("<span>You're scheduling...</span>Mom will call me");
		$("#footer .note").html("Schedule a call for 2pm");
		$("#footer .call").show();
	})	

	// $("#schedule .back-btn").click(function(){
	// 	$.mobile.changePage("#messages", {transition: "slidedown"});
	// })

})