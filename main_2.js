let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper = new Swiper(".test-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      
      },
  });