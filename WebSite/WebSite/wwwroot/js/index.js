//Dropdown - change language
let dropdown = document.getElementById('dropdown');
let dropdownMenu = document.getElementById('dropdown-menu');
let activeClass = 'active';

dropdown.addEventListener('click', () => {
    if (dropdownMenu.classList.contains(activeClass)) {
        dropdownMenu.classList.remove(activeClass);
    } else {
        dropdownMenu.classList.add(activeClass);
    }
});


//mobile menu
function openNav() {
    document.getElementById("navbar").style.height = "100%";
}
function closeNav() {
    document.getElementById("navbar").style.height = "0%";
}
$(document).ready(function () {
    $(".open-mobile-menu-btn").click(function () {
        openNav();
    });
    $(".close-mobile-menu-btn, ul li a").click(function () {
        closeNav();
    });
});

//sticky top
$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.heading').addClass("sticky");
    }
    if ($(this).scrollTop() <= 92) {
        $('.heading').removeClass("sticky");
    }
});


//scroll
$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top - 92;

        $('html').animate({ scrollTop: destination }, 1100);

        return false;
    });

});

//Carousels' params
if ($(window).width() < 576) {
    $('.owl-carousel.approaches-mobile-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },

        }
    })
}
if ($(window).width() < 768) {
    $('.owl-carousel.team-mobile-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1.5
            },
            400: {
                items: 2
            },
        }
    })
}
$('.loop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2.5
        },
        1024: {
            items: 3.25
        }
    }
});



/*//auto height for text area
jQuery.fn.extend({
    autoHeight: function () {
      function autoHeight_(element) {
        return jQuery(element)
          .css({ 'height': 'auto', 'overflow-y': 'hidden' })
          .height(element.scrollHeight);
      }
      return this.each(function() {
        autoHeight_(this).on('input', function() {
          autoHeight_(this);
        });
      });
    }
  });
  
  $('textarea').autoHeight();*/