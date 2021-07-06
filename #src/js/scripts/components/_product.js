let productSlider = function () {

	let productColors = ['#e2e837', '#00b6f1', '#e23232', '#f0efef', '#0c0c0c'];

	let setAttr = function () {
		$('.js-product__slider .slick-slide').each(function (index, el) {
			el.setAttribute('data-color', productColors[index]);
		});
	}

	$('.js-product__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		swipe: false,
		infinite: false,
		arrows: false,
		dots: true,
		appendDots: '.product__colors',
		customPaging: function (slider, i) {
			setAttr();
			let color = $(slider.$slides[i]).data('color');
			return '<span class="product__color" style="background-color:' + color + '"></span>';
		}
	});
}

productSlider();