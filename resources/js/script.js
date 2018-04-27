$(document).ready(function () {
  /* use jquery plugin called waypoint to control when sticky nav
  appears: when scroll direction is down and 60px before you hit js--section-features and
  disappears: when scroll direction is up. */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  /* scroll action on CTA buttons: click on button and animation will scroll to the top 
  of js--section-plans at speed of 1000ms/1s */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate({ scrollTop: $(".js--section-plans").offset().top }, 1000);
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate({ scrollTop: $(".js--section-features").offset().top }, 1000);
  });

  /* Navigation links with smooth scrolling: select all link elements that begin with hash symbols */
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

    /* Animations on scroll: use waypoint plugin to find the elements to be animated. 
    use animate.css i.e add 'animated' class and name of predefined animation */
    $('.js--wp-1').waypoint(function (direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $(".js--wp-2").waypoint(function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    }, {
      offset: "50%"
    });

    $(".js--wp-3").waypoint(function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    }, {
      offset: "50%"
    });

    $(".js--wp-4").waypoint(function (direction) {
      $(".js--wp-4").addClass("animated pulse");
      }, {
      offset: "50%"
    });

    // Mobile hamburger nav
    $(".js--nav-icon").click(function () {
      var nav = $(".js--main-nav")
      var icon = $(".js--nav-icon i")

      // toggles full nav open/close when you click on hamburger
      nav.slideToggle(200)

      if (icon.hasClass("ion-navicon-round")) {
        icon.addClass("ion-close-round");
        icon.removeClass("ion-navicon-round");
      } else {
        icon.addClass("ion-navicon-round");
        icon.removeClass("ion-close-round");
      }
    });

    // Maps
    var map = new GMaps({ div: ".map", lat: -1.3028618, lng: 36.7073085, zoom: 14 });

    map.addMarker({
      lat: -1.3028618,
      lng: 36.70730200,
      title: "Nairobi",
      infoWindow: {
        content: "<p>Our Nairobi HQ</p>"
      }
    });
});
