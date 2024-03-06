// [MASTER JAVASCRIPT]
//	Project     :	WEDDING TEMPLATES
//	Version     :	1.0
//	Last Change : 	28/01/2017
//	Primary Use :   WEDDING TEMPLATES

	$(document).on('ready', function() {
		"use strict"; //Start of Use Strict
		var menu_bar = $('.menu-bar.navbar-default');
		var menu_li = $('.menu-bar.navbar-default li a');
		var collapse = $('.navbar-collapse');
		var top_menu= $('#top-nav');		
		
		//AFTER SCROLL MENU CREATED,MENU BGCOLOR AND TEXT COLOR
		var x = $("#top-nav-1").offset().top;		
		var topx = (x - $(window).scrollTop());
		
			if (topx < 845) { 
				menu_bar.fadeIn().addClass('fixed-header').css({
					"background-color": "#f7f7f7",
					"color": "#666666",
					"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
					});
				menu_li.css({
					"color": "#666666"
					});				
				if(window.innerWidth<=991){
					$('.logo-image').css('display','inherit');
						}
						else{
						$('.logo-image-1').css('display','none');
					}
			}
			else {
				menu_bar.removeClass('fixed-header').css({
					"background-color": "#333333",
					"color": "#666666",
					"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
					});
				menu_li.css({"color": "#666666"});
			
				if(window.innerWidth<=991){
					$('.logo-image').css('display','none');
						}
						else{
						$('.logo-image-1').css('display','inherit');
					}
			}	
			
		$(document).on('scroll',function() {	
			var y = $(window).scrollTop(); 			
				if (y >= 845) {
					menu_bar.fadeIn().addClass('fixed-header').css({
						"background-color": "#f7f7f7",
						"color": "#666666",
						"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
						});
					menu_li.css({"color": "#666666"});
					
					if(window.innerWidth<=991){
					$('.logo-image').css('display','inherit');
						}
						else{
						$('.logo-image-1').css('display','none');
					}
				} 
				else {
					menu_bar.removeClass('fixed-header').css({
						"background-color": "#f7f7f7",
						"color": "#666666",
						"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
						});
					menu_li.css({"color": "#666666"});
					if(window.innerWidth<=991){
					$('.logo-image').css('display','none');
						}
						else{
						$('.logo-image-1').css('display','inherit');
					}
				}	

				 var scrollPos = $(document).scrollTop()+80;
					$('.nav a').each(function () {
						var currLink = $(this);
						var refElement = currLink.attr("href");						
						if ($(refElement).length) {
						if ($(refElement).position().top <= scrollPos && $(refElement).position().top + $(refElement).height() > scrollPos) {
							$('.nav li a').parent().removeClass("active");
							currLink.parent().addClass("active");
						}
						else{
							currLink.parent().removeClass("active");
						}
						}
					});
			});

			//MENU BAR SMOOTH SCROLLING FUNCTION	
			$('.page').on('click' ,function(e){
					var y = $(window).scrollTop();				
					var t="";
					if (y<=845) {
						t=143;
					}
					else {						
						t=50;
					}	
				$('html, body').animate({
					scrollTop: $( $.attr(this, 'href') ).offset().top -t
				}, 2000);
				return false;
			});	
				
		//RESPONSIVE MENU SHOW AND HIDE FUNCTION
		menu_li.on("click", function(event) {
			collapse.slideToggle();
		});
		$('.navbar-default .navbar-toggle').click(function(e) {
			collapse.slideToggle();
		});

		//RESPONSIVE MENU BGCOLOR
		$('.navbar-header button').on('click', function(e) {
			$('#bs-example-navbar-collapse-1').css({
				"background-color": "#f7f7f7"
			});
			$('#bs-example-navbar-collapse-1 li a').css({
				"color": "#666666"
			});
		});
		
	return false;
		// End of use strict
});