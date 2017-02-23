
$(".portfolio-item").mouseover(function(){

	$(this).find("p").show();

});

$(".portfolio-item").mouseout(function(){

	$(this).find("p").hide();

});

$(".hoverlink").mouseover(function(){

	$('#arrow-left').hide();

});

$(".hoverlink").mouseout(function(){

	$('#arrow-left').show();

});


$("#menu li a").click(function() {
    console.log( $(this).attr("id") );

    var id = $(this).attr("id");
    $('html, body').animate({
        scrollTop: $("#" + id + "-content").offset().top + 60
    }, 1000);
});


// get width of screen
var screenw = $( window ).width();

// calculate left and right area's where the mouse will change
var leftLimit = screenw * .3;				 	// 30 percent of the left side of the screen
var rightLimit = screenw - (screenw * .3); 		// 30 percent of the right part of the screen

// scroll the amount of a portfolio-item (image) including the margins
var scrollAmount = $('.portfolio-item').outerWidth(true) + 5;

$(".scrollsection").click(function( event ) {


  console.log('click')
  	// find out if the click was on the left or right side of the page
	if (event.pageX < leftLimit) {
		// left side
		  $(this).find('.scroller').animate({scrollLeft:'-=' + scrollAmount},300);

  	}
  	else if (event.pageX > rightLimit) {
		// right side
		  $(this).find('.scroller').animate({scrollLeft:'+=' + scrollAmount},300);
  	}
});


$("body").mousemove(function( event ) {
  	
  	// find out if the mouse is on the left or right side of the page
  	if (event.pageX < leftLimit) {

		// left side		
		// hide the cursor
		$('body').css('cursor', 'none');
  		// show the left arrow  	
  		$('#arrow-left').show();

		// make the left arrow follow the mouse position
  		$('#arrow-left').css({
            'top' :  (event.pageY - $(".arrow").height() / 2) + 'px',
            'left' : (event.pageX + 5) + 'px'
        });        
  	}
  	else if (event.pageX > rightLimit) {
  		// right side
  		// hide the cursor
  		$('body').css('cursor', 'none');
  		// show the right cursor
  		$('#arrow-right').show();

		// make the right cursor follow the mouse
  		$('#arrow-right').css({
            'top' :  (event.pageY - $(".arrow").height() / 2) + 'px',
            'left' : (event.pageX - $(".arrow").width()) + 'px'
        });
  	}
  	else {
  		// hide the arrows
  	  	$('#arrow-left').hide();
  	  	$('#arrow-right').hide();
  	  	
  	  	// show the cursor
  	  	$('body').css('cursor', 'default');
  	}
});



