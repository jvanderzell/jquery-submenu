$(document).ready(function() {
	console.log("ready!");


function greeting() {
	console.log("hola");
};

greeting();

//hiding content
$(".happy").hide();

//showing content
$(".happy").show();

//fading
$("#cheat").fadeOut(2000);
$("#cheat").fadeIn(2000);

//sliding
$("p").slideUp(2000);
$("p").slideDown(2000);

//innerhtml
$(".change").html("I'm changed!");


//slide toggle
	$(".click").click(function() {
		$("#cheat").slideToggle();
	
});

//toggle class
	$(".new").click(function() {
		$(".happy").toggleClass("sad");
});

//animating text
var animateMe = function(){   
	$(".sad").animate( {opacity: .2} ) } 

	$(".sad").show(animateMe);



});