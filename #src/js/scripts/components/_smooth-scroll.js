$('html, body').on('click', '.header-nav__link', function (e) {
	e.preventDefault();
	smoothScroll($(this).attr('href'));
});
function smoothScroll(id) {
	$('html, body').scrollTop(
		$(id).offset().top
	);
}