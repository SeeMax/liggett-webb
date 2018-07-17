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
