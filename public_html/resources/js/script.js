$(document).ready(function(){
	$('#NavToggleButton').click(function(){
		$('body').toggleClass('sidebar-collapse');
	});
	$('#UserNavToggle').click(function(){
		$(this).next('.user-nav').slideToggle();
	});
	$('.filter-button').click(function(){
		$('#FilterBlock').slideToggle();
	});
	$('#ActionsMenuTrigger').click(function(){
		$(this).next('.action-dropdown').slideToggle();
	});
    $(".date-dropdown").niceScroll({cursorcolor: "#c8c8cd", cursorborder:"3px solid transparent"});
    $('.date-container').click(function(){
		$(this).next('.date-dropdown').slideToggle();
        
	});
    
});
