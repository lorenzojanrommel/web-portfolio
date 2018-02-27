// nav hide
$('.navbar').hide();
// nav show when scroll down
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.navbar').fadeIn();
	}else{
		$('.navbar').fadeOut();
	}
})
// back to top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       	$("#myBtn").css("display", "block");
        // $("#myBtn").fadeIn(3000);
    } else {
        $("#myBtn").css("display", "none");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

new WOW().init();