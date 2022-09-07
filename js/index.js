// КЛИК ПО ЛАЙКУ
var tableElements = document.querySelectorAll(".like");

tableElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("active__like");
  });
});



//ПОЯВЛЯЕТСЯ МЕНЮ ХЕДЕР СКРОЛЛ

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.header__scroll').addClass('header__bg');
        $('.head__text').addClass('head__text_scroll');
    } else {
        $('.head__text').removeClass('head__text_scroll');
        $('.header__scroll').removeClass('header__bg');
    }
});
// МЕНЮ ФИКСЕД ВСЕХ ПРОДУКТОВ

$(window).scroll(function(){
    if ($(this).scrollTop() > 90) {
        // function sayHi() {
            $('.menu__all_furniture-header-bg').addClass('menu__all_furniture-header-fixed');
            $('.head__tex_furniture').addClass('head__furniture_scroll');
            $('.menu__all_furniture-header').addClass('menu__all_furniture-opacity');
        //   }
        //   setTimeout(sayHi, 400);
    } else {
            $('.menu__all_furniture-header').removeClass('menu__all_furniture-opacity');
            $('.head__tex_furniture').removeClass('head__furniture_scroll');
            $('.menu__all_furniture-header-bg').removeClass('menu__all_furniture-header-fixed');
    }
});

// $(window).scroll(function(){
//     if ($(this).scrollTop() < 100) {
//         function sayHi() {
//             $('.menu__all_furniture-header').removeClass('menu__all_furniture-opacity');
//             $('.head__tex_furniture').removeClass('head__furniture_scroll');
//             $('.menu__all_furniture-header-bg').removeClass('menu__all_furniture-header-fixed');
//           }
//           let a = 500;
//           for(i = 500; i > 0; i--){
//             setTimeout(sayHi, a);
//               a--;
//           }
          
          
//     } 
// });

