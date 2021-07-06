if (!isPhoneDevice) {
	let textAnimation = $('.js-text-animation');

	let textAnimationLetters = textAnimation.text().split("");
	let html = '';
	for (let i = 0; i < textAnimationLetters.length; i++) {
		if (textAnimationLetters[i] != ' ') {
			html += '<span>' + textAnimationLetters[i] + '</span>';
		} else {
			html += textAnimationLetters[i] + '<br>';
		}
	}
	textAnimation.html(html);

	let chars = textAnimation.find('span');

	let tl = gsap.timeline({
		// paused: true,
		repeat: -1,
		repeatDelay: 1,
		yoyo: true
	});

	tl.set(textAnimation, { perspective: 400 });
	tl.from(chars, {
		duration: .7,
		opacity: 0,
		x: gsap.utils.random(-300, 300, true),
		y: gsap.utils.random(50, 300, true),
		z: gsap.utils.random(0, 300, true),
		rotate: gsap.utils.random(90, 90, true),
		scale: .1,
		stagger: {
			amount: 3
		},
		onComplete: bounce
	});

	function bounce() {
		tl.pause();
		gsap.to(chars, {
			duration: .3,
			color: '#3a30f8',
			y: -20,
			ease: 'power2.out',
			stagger: {
				from: 0,
				amount: 5
			}
		});
		gsap.to(chars, {
			duration: .3,
			delay: .3,
			color: '#000000',
			y: 0,
			ease: 'power2.in',
			stagger: {
				from: 0,
				amount: 5
			},
			onComplete: function () {
				tl.resume();
			}
		});
	}

	// gsap.utils.toArray(".js-text-animation").forEach(h1 => {
	// 	let hover = gsap.to(h1, { scale: 1.12, color: "blue", duration: 1.5, paused: true, ease: "power1.inOut" });
	// 	h1.addEventListener("mouseenter", () => hover.play());
	// 	h1.addEventListener("mouseleave", () => hover.reverse());
	// });

	// textAnimation.addEventListener('mouseenter', () => tl.play());
}

