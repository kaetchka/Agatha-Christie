// [MASTER JAVASCRIPT]
//	Project     :	TWENTY-20 TEMPLATES
//	Version     :	1.0
//	Last Change : 	02/02/2017
//	Primary Use :   TWENTY-20 TEMPLATES

	$(document).on('ready', function() {
		"use strict"; //Start of Use Strict
		var menu_bar = $('.navbar-default');
		var menu_li = $('.navbar-default li a');
		var collapse = $('.navbar-collapse');

		//AFTER SCROLL MENU CREATED,MENU BGCOLOR AND TEXT COLOR
		var x = $("#top-nav").offset().top
		if (x > 50) {
			menu_bar.fadeIn().css({
				"background-color": "#f7f7f7",
				"color": "#666666",
				"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
			});
			menu_li.css({
				"color": "#666666"
			});					
		} 
		else {
				menu_bar.css({
					"background-color": "#f7f7f7",
					"color": "#666666",
					"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
				});
				menu_li.css({
					"color": "#666666"
				});	
			}

		$(document).on('scroll', function() {
			var y = $(this).scrollTop();
			if (y > 50) {
				menu_bar.fadeIn().css({
					"background-color": "#f7f7f7",
					"color": "#666666",
					"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
				});
				menu_li.css({
					"color": "#666666"
				});				
				
			} 
			else {
				menu_bar.css({
					"background-color": "#f7f7f7",
					"color": "#666666",
					"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
				});
				menu_li.css({
					"color": "#666666"
				});	
			}
		});

		//RESPONSIVE MENU SHOW AND HIDE FUNCTION
		menu_li.on("click", function(event) {
			collapse.slideToggle();
		});
		$('.navbar-default .navbar-toggle').on("click",function(e) {
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
		
		//MENU BAR SMOOTH SCROLLING FUNCTION
		$( "#menu-list" ).on( "click", ".page", function( event ) {					
				event.preventDefault();	
				var hash_tag= $(this).attr('href');
				$('html, body').animate({
				scrollTop: $(hash_tag).offset().top - 50
			}, 2000);	
			return false;
		});				
			
		return false;
		// End of use strict
	});