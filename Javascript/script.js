/* ----------------------------
 Toggle Header on on scroll down
  ---------------------------- */
let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = $("nav").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
});

function sectionTopCheck(section) {
  const st =
    $(this).scrollTop() +
    $("nav").outerHeight() +
    $(".mob-navbar").outerHeight();
  return (
    st > $(section).offset().top &&
    st < $(section).position().top + $(section).outerHeight(true)
  );
}

function hasScrolled() {
  const st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("nav")
      .removeClass("nav-down nav-box-shadow py-3")
      .addClass("nav-up py-1");
  } else {
    // Scroll Up
    $("nav").removeClass("nav-up").addClass("nav-down nav-box-shadow");
    if (st < navbarHeight) {
      $("nav").removeClass("py-1 nav-box-shadow").addClass("py-3");
    }
  }
  lastScrollTop = st;

  if (sectionTopCheck($("#about")) || sectionTopCheck($("#contact"))) {
    $("nav").removeClass("nav-bg-1").addClass("nav-bg-2");
  } else {
    $("nav").removeClass("nav-bg-2").addClass("nav-bg-1");
  }
}

/* ----------------------------
 Toggle Navbar on Mobile size
  ---------------------------- */
let navCounter = 0;

function mobNavToggler() {
  if (navCounter == 0) {
    $("body").addClass("overflow-hidden");
    $(".mob-navbar").addClass("nav-bg-3 nav-blur-0");

    navCounter = 1;
  } else {
    setTimeout(() => {
      $("body").removeClass("overflow-hidden");
      $(".mob-navbar").removeClass("nav-bg-3 nav-blur-0");
    }, 2200);

    navCounter = 0;
  }
  $(".hamburger-lines").toggleClass("clicked");
  $(".mob-navbar").removeClass("nav-box-shadow");
  $("main").toggleClass("main-section-toggle-add main-section-toggle-remove");
  $(".mob-navbar-anime").toggleClass(
    " mob-navbar-anime-add mob-navbar-anime-remove"
  );
  $(".mob-navbar-menu").toggleClass(
    "mob-navbar-menu-add mob-navbar-menu-remove"
  );
}

$(".navbar-toggler-icon").click(function () {
  mobNavToggler();
});

$(".navbar-toggler-logo").click(function () {
  navCounter == 1 ? mobNavToggler() : 0;
});

$(".navbar-toggler-link").click(function () {
  setTimeout(mobNavToggler, 1000);
});

/* ----------------------------
        Animation Settings
  ---------------------------- */
$(document).ready(function () {
  $(".animate").scrolla();
});

$(".animate").scrolla({
  mobile: false,
  once: true, // only once animation play on scroll
});
