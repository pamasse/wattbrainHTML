document.addEventListener("DOMContentLoaded",function () {
	const topBar = document.getElementById('top-bar__input');
	const heroSection = document.getElementById('hero-section');
	const map = document.getElementById('map-box');
	// if not on mobile device
	if (window.innerWidth > 768) {
		window.onscroll = function () {
			// Get the bottom position of the hero section
			const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 150;

			// Check if the page is scrolled past the hero section
			if (window.pageYOffset > heroBottom) {
				topBar.style.display = 'flex'; // Show the top bar
				map.classList.add('scrolled');
			} else {
				topBar.style.display = 'none'; // Hide the top bar
				map.classList.remove('scrolled');
			}
		};
	}

	const buttons = document.getElementsByClassName('btn-rounded');
	console.log(buttons)
	buttons.forEach(button => {
		button.querySelector('.label').classList.add('animate__animated', 'animate__fadeInUp');
	});

});
