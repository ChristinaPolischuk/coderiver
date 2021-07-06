"use strict";

(function () {
  var movingBar = function movingBar() {
    var $navMovingBar = $('.header-nav'),
        $navLink = $('.header-nav__link'),
        $hoverEffect = $('.header-nav__hover'),
        width,
        left;
    $navLink.on('mouseenter', function () {
      var $self = $(this);
      width = $self.width();
      left = $self.position().left - 10;
      $hoverEffect.css({
        width: width + 'px',
        left: left + 'px'
      });
    });
    $navMovingBar.on('mouseleave', function () {
      $hoverEffect.css({
        width: '20px',
        left: '-10px'
      });
    });
  };

  movingBar();
  ;

  var productSlider = function productSlider() {
    var productColors = ['#e2e837', '#00b6f1', '#e23232', '#f0efef', '#0c0c0c'];

    var setAttr = function setAttr() {
      $('.js-product__slider .slick-slide').each(function (index, el) {
        el.setAttribute('data-color', productColors[index]);
      });
    };

    $('.js-product__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      swipe: false,
      infinite: false,
      arrows: false,
      dots: true,
      appendDots: '.product__colors',
      customPaging: function customPaging(slider, i) {
        setAttr();
        var color = $(slider.$slides[i]).data('color');
        return '<span class="product__color" style="background-color:' + color + '"></span>';
      }
    });
  };

  productSlider();
  ;
  var isPhoneDevice = ("ontouchstart" in document.documentElement);

  var fullPage = function fullPage() {
    $('#fullpage').fullpage({
      autoScrolling: true,
      navigation: true,
      scrollBar: true,
      onLeave: function onLeave(origin, destination, direction) {
        var section = destination.item;
        console.log(section);
        var title = section.querySelector('.section__content');
        var video = document.querySelectorAll('.section__video');
        var tl = new TimelineMax({
          delay: .5
        });

        if (destination.index === 1) {
          tl.fromTo(video, .7, {
            x: '-100%',
            opacity: 0
          }, {
            x: '0%',
            opacity: 1
          });
        } else {
          tl.fromTo(video, .7, {
            x: '100%',
            opacity: 0
          }, {
            x: '0%',
            opacity: 1
          });
        }

        tl.fromTo(title, .5, {
          y: '100',
          opacity: 0
        }, {
          y: 0,
          opacity: 1
        });
      }
    });
  };

  if (!isPhoneDevice) {
    fullPage();
  }

  ;

  if (!isPhoneDevice) {
    var bounce = function bounce() {
      _tl.pause();

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
        onComplete: function onComplete() {
          _tl.resume();
        }
      });
    }; // gsap.utils.toArray(".js-text-animation").forEach(h1 => {
    // 	let hover = gsap.to(h1, { scale: 1.12, color: "blue", duration: 1.5, paused: true, ease: "power1.inOut" });
    // 	h1.addEventListener("mouseenter", () => hover.play());
    // 	h1.addEventListener("mouseleave", () => hover.reverse());
    // });
    // textAnimation.addEventListener('mouseenter', () => tl.play());


    var textAnimation = $('.js-text-animation');
    var textAnimationLetters = textAnimation.text().split("");
    var html = '';

    for (var i = 0; i < textAnimationLetters.length; i++) {
      if (textAnimationLetters[i] != ' ') {
        html += '<span>' + textAnimationLetters[i] + '</span>';
      } else {
        html += textAnimationLetters[i] + '<br>';
      }
    }

    textAnimation.html(html);
    var chars = textAnimation.find('span');

    var _tl = gsap.timeline({
      // paused: true,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });

    _tl.set(textAnimation, {
      perspective: 400
    });

    _tl.from(chars, {
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
  }

  ;
  var video1 = new hoverEffect({
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
  var video2 = new hoverEffect({
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
  var video3 = new hoverEffect({
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
  ;
  $('html, body').on('click', '.header-nav__link', function (e) {
    e.preventDefault();
    smoothScroll($(this).attr('href'));
  });

  function smoothScroll(id) {
    $('html, body').scrollTop($(id).offset().top);
  }

  ; // burger animation

  var tl = gsap.timeline({
    defaults: {
      ease: "power2.inOut"
    }
  });
  gsap.set("#theBurger", {
    autoAlpha: 1
  });
  gsap.set(".buns", {
    drawSVG: "0% 30%"
  });
  gsap.set(".letters", {
    drawSVG: "53.5% 100%",
    x: -155
  });
  tl.to(".patty", {
    duration: 0.35,
    drawSVG: "50% 50%"
  }, 0);
  tl.to(".patty", {
    duration: 0.1,
    opacity: 0,
    ease: "none"
  }, 0.25);
  tl.to(".buns", {
    duration: 0.85,
    drawSVG: "69% 96.5%"
  }, 0);
  tl.to(".letters", {
    duration: 0.85,
    drawSVG: "0% 53%",
    x: 0
  }, 0);
  tl.reversed(true);
  document.querySelector("#theBurger").addEventListener("click", animateTheBurger);

  function animateTheBurger() {
    tl.reversed(!tl.reversed());
  } // nav-menu animation


  TweenMax.from(".mobile-menu__nav", 2, {
    top: "-20%",
    ease: Expo.easeInOut,
    delay: 0.4
  });
  var t1 = new TimelineMax({
    paused: true
  });
  t1.from(".mobile-menu__nav", 1.5, {
    height: '0%',
    ease: Expo.easeInOut,
    y: '0%'
  });
  t1.staggerTo(".mobile-menu__link", 0.6, {
    top: "0px",
    ease: Expo.easeInOut
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
  ;
})();