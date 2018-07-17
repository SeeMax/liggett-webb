(function ($, root, undefined) {
	
	$(function () {
			
		$(".bio-button").on("click", function() {
	
			var tl = new TimelineMax()
					$this = $(this)
					thisGuts = $this.find('.button-guts')
					readWords = $this.find('.readWords')
					closeWords = $this.find('.closeWords')
					thisBio = $this.parent().find('.bio-full-bio')
					thisBioGuts = thisBio.find('.bio-full-bio-guts')
					thisBioHeight = thisBioGuts.outerHeight()
					uniTime = .3

			console.log(thisBioHeight)

			if($this.hasClass('openBioButton')) {
				tl.to(closeWords, uniTime, {x:-100, opacity:0}, "bioOut")
					.to(readWords, uniTime, {x:0, opacity:1}, "bioOut")
					.to(thisBio, uniTime, {height:0, onComplete:removeOpenClass}, "bioOut")
					.to(thisBioGuts, uniTime, {opacity:0}, 'bioOut')
					.to(thisGuts, uniTime, {background:'#EF4D27'}, 'bioOut')

			} else {
				tl.set(thisBioGuts, {opacity:0, immediateRender:false})
					.to(readWords, uniTime, {x:-100, opacity:0}, 'bioIn')
					.to(closeWords, uniTime, {x:0, opacity:1}, 'bioIn')
					.to(thisBio, uniTime, {height:thisBioHeight, onComplete:addOpenClass}, 'bioIn')
					.to(thisBioGuts, uniTime, {opacity:1}, 'bioIn')
					.to(thisGuts, uniTime, {background:'#010202'}, 'bioIn')
			}

			

			function addOpenClass() {
				$this.addClass('openBioButton');
			}

			function removeOpenClass() {
				$this.removeClass('openBioButton');
			}

		})
			
		
	});
	
})(jQuery, this);

(function ($, root, undefined) {
	
	$(function () {
			
			var tl = new TimelineMax();
					body = $('body')

			// tl.to(body, 2, {color:'red'});
		
	});
	
})(jQuery, this);
(function ($, root, undefined) {
	
	$(function () {
			
		$(".mobileToggle").on("click", function() {
	
			var tl = new TimelineMax()
					$this = $(this)
					menu = $(".navMenu")
					ham1 = $(".hamTop")
					ham2 = $(".hamMid")
					ham3 = $(".hamBot")
					uniTime = .3

			console.log("Menu!")

			if($this.hasClass('openMenu')) {
				tl.to(menu, uniTime, {height:0, borderWidth:"0px", onComplete:removeOpenClass}, "menuClose")
					.to(ham1, uniTime, {rotation:0, y:0}, "menuClose")
					.to(ham2, uniTime, {rotation:0, opacity:1}, "menuClose")
					.to(ham3, uniTime, {rotation:0, y:0}, "menuClose")
					

			} else {
				tl.to(menu, uniTime, {height:"100%", borderWidth:"5px", onComplete:addOpenClass}, "menuOpen")
					.to(ham1, uniTime, {rotation:-225, y:8}, "menuOpen")
					.to(ham2, uniTime, {rotation:360, opacity:0}, "menuOpen")
					.to(ham3, uniTime, {rotation:225, y:-10}, "menuOpen")
			}

			

			function addOpenClass() {
				$this.addClass('openMenu');
			}

			function removeOpenClass() {
				$this.removeClass('openMenu');
			}

		})
			
		
	});
	
})(jQuery, this);


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
