var isPhoneDevice = "ontouchstart" in document.documentElement;

let fullPage = function () {
	$('#fullpage').fullpage({
		autoScrolling: true,
		navigation: true,
		scrollBar: true,
		onLeave: (origin, destination, direction) => {
			let section = destination.item;
			console.log(section);
			let title = section.querySelector('.section__content');
			let video = document.querySelectorAll('.section__video');
			let tl = new TimelineMax({ delay: .5 });
			if (destination.index === 1) {
				tl.fromTo(video, .7,
					{
						x: '-100%',
						opacity: 0
					},
					{
						x: '0%',
						opacity: 1
					}
				);
			}
			else {
				tl.fromTo(video, .7,
					{
						x: '100%',
						opacity: 0
					},
					{
						x: '0%',
						opacity: 1
					}
				);
			}
			tl.fromTo(title, .5,
				{
					y: '100',
					opacity: 0
				},
				{
					y: 0,
					opacity: 1
				}
			);
		}
	});
}

if (!isPhoneDevice) {
	fullPage();
}

