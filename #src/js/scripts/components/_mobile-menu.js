// burger animation
const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

gsap.set("#theBurger", { autoAlpha: 1 });
gsap.set(".buns", { drawSVG: "0% 30%" });
gsap.set(".letters", { drawSVG: "53.5% 100%", x: -155 });

tl.to(".patty", { duration: 0.35, drawSVG: "50% 50%" }, 0);
tl.to(".patty", { duration: 0.1, opacity: 0, ease: "none" }, 0.25);
tl.to(".buns", { duration: 0.85, drawSVG: "69% 96.5%" }, 0);
tl.to(".letters", { duration: 0.85, drawSVG: "0% 53%", x: 0 }, 0);
tl.reversed(true);

document.querySelector("#theBurger").addEventListener("click", animateTheBurger);

function animateTheBurger() {
	tl.reversed(!tl.reversed());
}

// nav-menu animation
TweenMax.from(".mobile-menu__nav", 2, {
	top: "-20%",
	ease: Expo.easeInOut,
	delay: 0.4,
});

let t1 = new TimelineMax({ paused: true });

t1.from(".mobile-menu__nav", 1.5, {
	height: '0%',
	ease: Expo.easeInOut,
	y: '0%',
});

t1.staggerTo(".mobile-menu__link", 0.6, {
	top: "0px",
	ease: Expo.easeInOut,
}, 0.1, "-=0.8");

t1.reverse();

$(document).on("click", ".mobile-menu__burger", function () {
	t1.reversed(!t1.reversed());
	if ($('body').hasClass('fixed')) {
		$('body').removeClass('fixed');
	} else {
		$('body').addClass('fixed');
	}
});

$(document).on("click", ".mobile-menu__link", function () {
	$(".mobile-menu__burger").trigger('click');
});