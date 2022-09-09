// КЛИК ПО ЛАЙКУ
var tableElements = document.querySelectorAll(".like");

tableElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("active__like");
  });
});



//ПОЯВЛЯЕТСЯ МЕНЮ ХЕДЕР СКРОЛЛ
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederCopy = $('.header__scroll');
  
      if ( scrollTop < 200) {
          hederCopy.removeClass('header__bg ')
      } else {
          hederCopy.addClass('header__bg ');
      }
  });

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederCopy = $('.header__scroll');
  
      if ( scrollTop < 200) {
          hederCopy.removeClass('header__bg ')
      } else {
          hederCopy.addClass('header__bg ');
      }
  });
// $(window).scroll(function(){
//     if ($(this).scrollTop() > 100) {
//         $('.header__scroll').addClass('header__bg');
//         $('.head__text').addClass('head__text_scroll');
//     } else {
//         $('.head__text').removeClass('head__text_scroll');
//         $('.header__scroll').removeClass('header__bg');
//     }
// });
// МЕНЮ ФИКСЕД ВСЕХ ПРОДУКТОВ

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 90) {
//         // function sayHi() {
//             $('.menu__all_furniture-header-bg').addClass('menu__all_furniture-header-fixed');
//             $('.head__tex_furniture').addClass('head__furniture_scroll');
//             $('.menu__all_furniture-header').addClass('menu__all_furniture-opacity');
//         //   }
//         //   setTimeout(sayHi, 400);
//     } else {
//             $('.menu__all_furniture-header').removeClass('menu__all_furniture-opacity');
//             $('.head__tex_furniture').removeClass('head__furniture_scroll');
//             $('.menu__all_furniture-header-bg').removeClass('menu__all_furniture-header-fixed');
//     }
// });

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederEl = $('.menu__all_furniture-header-bg');
      if ( scrollTop < 10) {
          hederEl.removeClass('menu__all_furniture-header-fixed')
      } else {
  
          hederEl.addClass('menu__all_furniture-header-fixed');
  
      }
  });

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederEl = $('.container__header_all');
      if ( scrollTop < 10) {
          hederEl.removeClass('container__header_all_pad')
      } else {
  
          hederEl.addClass('container__header_all_pad');
  
      }
  });

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederEl = $('.offcanvas-header');
      if ( scrollTop < 10) {
          hederEl.removeClass('offcanvas-header_pad')
      } else {
  
          hederEl.addClass('offcanvas-header_pad');
  
      }
  });
//   КОРЗИНА ПОСЛЕ ВЫЕЗДА
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederEl = $('.offcanvas-header_right ');
      if ( scrollTop < 10) {
          hederEl.removeClass('offcanvas-header_right-pad')
      } else {
  
          hederEl.addClass('offcanvas-header_right-pad');
  
      }
  });

//   ПОИСКОВИК
 document.querySelector(".svg__click ").addEventListener("click", function () {
    $('.search').toggleClass("search__fixed");
    $('.svg__click').toggleClass("search__active");
    
  });

// СЕЛКТ ВЫБОРА НА СТРАНИЦЕ КАРТОЧКИ О ТОВАРЕ
function show(anything) {
    document.querySelector('.textBox').value = anything;
} 
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function() {
    dropdown.classList.toggle('dropdown__active');
}

function showTwo(any) {
    document.querySelector('.textBox__two').value = any;
} 
let dropdown__two = document.querySelector('.dropdown__two');
dropdown__two.onclick = function() {
    dropdown__two.classList.toggle('dropdown__active_two');
}




