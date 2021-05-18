const init = () => {

	const navbar = document.getElementById("topNavBar");

	window.onscroll = () => {

		if (window.scrollY > 96) {navbar.classList.add("scrolled");
		}
		else {
			navbar.classList.remove("scrolled");
		}
	};
}

init();
