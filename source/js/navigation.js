(function() {
	var me = {};

	me.toggleToActiveLink = function(target) {

		var links = document.querySelectorAll('.nav__link');
		var showedSection = target.dataset.link;

		for (var i=0; i < links.length; i++) {
			if (links[i].classList.contains('nav__link--active')) {
				links[i].classList.remove('nav__link--active')
			}
		};

		target.classList.add('nav__link--active');
		scrollToActiveSection(showedSection);
		


	};

	function scrollToActiveSection(showedSection) {
		var section = document.querySelector('.' + showedSection);
		
		var animateTime = 0.5;

		var timerId = setInterval(function(){
			var coords = section.getBoundingClientRect();
			if (document.body.scrollTop < coords.top) {
				console.log(coords.top);
				console.log(document.body.scrollTop);
				window.scrollBy(0, 10);
			} else {
				clearInterval(timerId);
			}
		}, animateTime || 0.5);
	};

	ITVDN.navigation = me;
}());