let video1 = new hoverEffect({
	parent: document.querySelector('.video-1'),
	intensity: 0.3,
	image1: '../img/home_bg.png',
	image2: '../img/home_bg.png',
	displacementImage: '../img/fluid.jpg',
	speedIn: 1.0,
	speedOut: 1.0,
	hover: false
});
document.querySelector('.home__watch-video .watch-video__text').addEventListener('mouseover', video1.next);
document.querySelector('.home__watch-video .watch-video__img').addEventListener('mouseover', video1.next);
document.querySelector('.home__watch-video .watch-video__text').addEventListener('mouseout', video1.previous);
document.querySelector('.home__watch-video .watch-video__img').addEventListener('mouseout', video1.previous);

let video2 = new hoverEffect({
	parent: document.querySelector('.video-2'),
	intensity: 0.3,
	image1: '../img/advantages_bg.png',
	image2: '../img/advantages_bg.png',
	displacementImage: '../img/fluid.jpg',
	speedIn: 1.0,
	speedOut: 1.0,
	hover: false
});
document.querySelector('.advantages-video__play').addEventListener('mouseover', video2.next);
document.querySelector('.advantages-video__play').addEventListener('mouseout', video2.previous);

let video3 = new hoverEffect({
	parent: document.querySelector('.video-3'),
	intensity: 0.3,
	image1: '../img/modes_bg.png',
	image2: '../img/modes_bg.png',
	displacementImage: '../img/fluid.jpg',
	speedIn: 1.0,
	speedOut: 1.0,
	hover: false
});
document.querySelector('.modes__watch-video').addEventListener('mouseover', video3.next);
document.querySelector('.modes__watch-video').addEventListener('mouseout', video3.previous);