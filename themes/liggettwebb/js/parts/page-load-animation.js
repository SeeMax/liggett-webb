(function ($, root, undefined) {
	
	$(function () {
			
		var tl = new TimelineMax({delay:.3})
				stFade = $('nav li')
				section = $('section').not('.noAnimate')
				upFade = [section, 'h1', ".back-link"]
				headerLogo = $('.header-logo')
				homeHeader = $(".home-header")
				firstHeadline = $(".home-header").find("h1")
				firstBody = $(".home-header").find("p")
				logoLetters = $(".logo-letters")
				logoL = $(".logo-letters-l")
				logoW = $(".logo-letters-w")
				globalTime = .6
				globalEase = Circ.easeIn
				globalEaseOut = Circ.easeOut

		if ($("body").hasClass("home")) {
			tl.set(logoL, {opacity:0, drawSVG:"50% 50%"})
				.set(logoW, {opacity:0, drawSVG:"40% 40%"})
				.set(headerLogo, {opacity:0, y:16})
				.set(upFade, {opacity:0, y:16})
				.set(stFade, {opacity:0, y:16})
				.set(logoLetters, {opacity:1})
				.to([logoL,logoW], .01, {opacity:1})
				.to(logoL, 1.2, {drawSVG:"100% 0%", ease: Power1.easeIn}, "drawEm")
				.to(logoW, 1.2, {drawSVG:"0% 100%", ease: Power1.easeIn}, "drawEm")
				.to(logoL, globalTime, {fill:'#929496', strokeWidth:0}, "fillEm")
				.to(logoW, globalTime, {fill:'#7A1600', strokeWidth:0}, "fillEm")
				.to(headerLogo, .4, {opacity:1, y:0}, "changeEm-=.2")
				.to(upFade, .4, {opacity:1, y:0, ease: globalEaseOut}, "changeEm-=.2")
				.to(stFade, .3, {opacity:1, y:0, ease: globalEaseOut}, "changeEm-=.2")
				.to(logoLetters, 1, {opacity:.15}, "-=.3")
		} else {
			tl.set(upFade, {opacity:0, y:16})
				.set(stFade, {opacity:0, y:16})
				.set(headerLogo, {opacity:0, y:16})
				.to(upFade, .8, {opacity:1, y:0, ease: globalEaseOut})
				.to(headerLogo, .6, {opacity:1, y:0, ease: globalEaseOut}, "headerIn-=.7")
				.staggerTo(stFade, .6, {opacity:1, y:0, ease: globalEaseOut}, .15, "headerIn-=.7")
		}
			
	});
	
})(jQuery, this);
