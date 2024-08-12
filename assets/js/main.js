const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('open');
}

hamburgerMenu.addEventListener('click', toggleMenu);


const header = document.querySelector('.main-header');
function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
window.addEventListener('scroll', handleScroll);

// slider js
  var swiper = new Swiper(".banner-swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const program = new Swiper(".program", {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
// animation js
// ScrollReveal().reveal('.card,.ftrs-head,.heading,.privay-img,.heading-row h5,.img-area,.port-img-wrap,.port-title,.float-heading,.banner-btn,.card-sm-heading,.card-sm-heading ~ h6,.banner-desc', {
//     duration: 1000,
//     origin: 'bottom',
//     distance: '50px',
//     useDelay: 'onload',
//     reset: true,
// });
