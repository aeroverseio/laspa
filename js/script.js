"use strict";(function($){"use strict";$(window).on("scroll",function(){var scrolltop=$(window).scrollTop();if($(document).width()<992){return;}
if(scrolltop>300){$(".navbar-sticky").addClass("fixed-top");}else{$(".navbar-sticky").removeClass("fixed-top");}});if($(".nav-link").length>0){$(".nav-link").each(function(){$(this).html(`<span class="menu-text">${$(this).html()}</span>`);});}
$(".navbar-nav").find(".dropdown-toggle").on("click",function(){if($(document).width()>992){return;}
$(this).siblings(".dropdown-menu").slideToggle();});$(".nav-search").on("click",function(){$(this).siblings(".search-block").slideToggle();});$(window).on("scroll",function(){var scrolltop=$(window).scrollTop(),docHeight=$(document).height()/2;if(scrolltop>docHeight){$(".back_to_top, .xs-back-to-top-wraper").fadeIn("slow");}else{$(".back_to_top, .xs-back-to-top-wraper").fadeOut("slow");}});$("body, html").on("click",".back_to_top, .xs-back-to-top",function(e){e.preventDefault();$("html, body").animate({scrollTop:0,},800);});function elementskit_event_manager(_event,_selector,_fn){$(document).on(_event,_selector,_fn);}
elementskit_event_manager("click",".xs_vertical_menu .elementskit-submenu-indicator",function(e){if(e.target.className==="elementskit-submenu-indicator"){var li=$(this).parent();var dropdown=li.find(">.elementskit-dropdown, >.elementskit-megamenu-panel");dropdown.find(".elementskit-dropdown-open").removeClass("elementskit-dropdown-open");if(dropdown.hasClass("elementskit-dropdown-open")){dropdown.removeClass("elementskit-dropdown-open");}else{dropdown.addClass("elementskit-dropdown-open");}}});})(jQuery);