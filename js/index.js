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
//  document.querySelector(".svg__click ").addEventListener("click", function () {
//     $('.search').toggleClass("search__fixed");
//     $('.svg__click').toggleClass("search__active");
    
//   });

  
// СЕЛКТ ВЫБОРА НА СТРАНИЦЕ КАРТОЧКИ О ТОВАРЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!
// function show(anything) {
//     document.querySelector('.textBox').value = anything;
// } 
// let dropdown = document.querySelector('.dropdown');
// dropdown.onclick = function() {
//     dropdown.classList.toggle('dropdown__active');
// }

// function showTwo(any) {
//     document.querySelector('.textBox__two').value = any;
// } 
// let dropdown__two = document.querySelector('.dropdown__two');
// dropdown__two.onclick = function() {
//     dropdown__two.classList.toggle('dropdown__active_two');
// }




$('.dropdown .dropdown-text ').click(function(event) {
  if(event.target.closest('.dropdown__active')) {
    $('.dropdown__active').removeClass('dropdown__active');
  } else {
    $('.dropdown__active').removeClass('dropdown__active');
    $(event.target).parent('.dropdown').addClass('dropdown__active');
  }
    
})

$('.dropdown [data-value]').click(function(event) {
  var dropdown = $(event.target).parent().parent('.dropdown')
  var value = event.target.dataset['value'];
  var displayData = $(event.target).html();

  var displayText = $(event.target.closest('.dropdown').querySelector('.dropdown-text p'));
  var displayValue = $(event.target).parent().parent('.dropdown').children('.dropdown-value');
  displayValue.val(value);
  displayText.html(displayData);
  dropdown.removeClass('dropdown__active')
})


// ЗАКРЫВАЮ СЕЛЕКТ ПО КЛИКУ ВНЕ 
$('body').click(function(event) {
  const activeDropdowns = $('.dropdown__active');

  if(!event.target.closest('.dropdown') && activeDropdowns.length) {
    activeDropdowns.each(d => activeDropdowns[d].classList.remove('.dropdown__active'))
  }
})





// goods_card
$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.in").each(function(){
      $(this).siblings(".goods__card_header-text").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
    });
  
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
      $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    }).on('hide.bs.collapse', function(){
      $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    });
  });


// let hoho = document.querySelector('.hoho');
// hoho.addEventListener('click', () =>  {
//     if(hoho.classList.contains('glyphicon-plus')) {
//         hoho.classList.add('glyphicon-minus');
//         hoho.classList.remove('glyphicon-plus');
//     } else {
//         hoho.classList.add('glyphicon-plus');
//         hoho.classList.remove('glyphicon-minus');
//     }
// })






// СТРАНИЦА ЗАКАЗОВ

function show1(){
    document.getElementById('div1').style.display ='block';
    document.getElementById('div2').style.display ='none';
    document.getElementById('div3').style.display = 'block';
  }
  function show2(){
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div2').style.display ='block';
  }

  function show3(){
    document.getElementById('way__to_get').style.display ='block';
    document.getElementById('way__to_get_two').style.display ='none';
    
  }
  function show4(){
    document.getElementById('way__to_get').style.display = 'none';
    document.getElementById('way__to_get_two').style.display ='block';
  }
  function showOnline(){
    document.getElementById('show__online').style.display ='block';
    document.getElementById('upon__receipt').style.display = 'none';
    document.getElementById('installment__plan').style.display = 'none';
    document.getElementById('cash__on_delivery').style.display ='none';
  }
  function showInstallmentPlan(){
    document.getElementById('installment__plan').style.display = 'block';
    document.getElementById('show__online').style.display ='none';
    document.getElementById('upon__receipt').style.display = 'none';
    document.getElementById('cash__on_delivery').style.display ='none';
  }
  function uponReceipt(){
    document.getElementById('upon__receipt').style.display = 'block';
    document.getElementById('installment__plan').style.display = 'none';
    document.getElementById('show__online').style.display ='none';
    document.getElementById('cash__on_delivery').style.display ='none';
  }
  function cashOnDelivery(){
    document.getElementById('cash__on_delivery').style.display = 'block';
    document.getElementById('installment__plan').style.display = 'none';
    document.getElementById('show__online').style.display ='none';
    document.getElementById('upon__receipt').style.display = 'none';
  }
  function serviceDelivery(){
      if(document.getElementById('cash__on_delivery_content_name').style.display === 'block'){
        document.getElementById('cash__on_delivery_content_name').style.display = 'none';
      } else {
        document.getElementById('cash__on_delivery_content_name').style.display = 'block';
      }
    
    
  }
  
  








//   ПЛЮС И МИНУС НА СТРАНИЦЕ КОРЗИНЕ!!!!!!!!!!!!!!!!!!!

// ДЛЯ ОДНОГО БЛОКА
// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');

// btnMinus.addEventListener('click', function(){
// if(parseInt(counter.innerText) > 1) {
//     counter.innerText = --counter.innerText;
// }
    
// })
// btnPlus.addEventListener('click', function(){
    
//     counter.innerText = ++counter.innerText;
// })


// ДЛЯ ВСЕХ НУЖНЫХ ЭЛЕМЕНТОВ

window.addEventListener('click', function(event){
    let counter;
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterBasketCount =  event.target.closest('.container__basket_count')
         counter =  counterBasketCount.querySelector('[data-counter]');
    }
    if(event.target.dataset.action === 'plus') {
     
       counter.innerText = ++counter.innerText;
    } 
    if (event.target.dataset.action === 'minus'){
        
        if(parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            }
    }
});

// ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ

// const cartWrapper = document.getElementsByClassName('.cart__wrapper');

// console.log(cartWrapper);
// window.addEventListener('click', function(event){
//     if(event.target.hasAttribute('data-cart')){
//       const card =   event.target.closest('.item');
//       const productInfo = {
//           id: card.dataset.id,
//           imgSrc: card.querySelector('.item__image').getAttribute('src'),
//           title: card.querySelector('.item__footer_title').innerText,
//           price: card.querySelector('.item__footer_price').innerText
//       }
     
//       const cartItemHTML = `<div class="container__basked_main">
//       <div class="row ">
//           <div class=" col-3 container__basket_main_img">
              
//               <img class="container__basket__main_img_parent" src="./image/chair_4.png"  alt="">
//               <h5>Кресло Matiss</h5>
//           </div>
//           <div class=" col-3 container__basket_content">
//               <div class="container__basket_content_discription">
//                   <div class="dropdown color-picker ">
//                       <div class="dropdown-text">Бутылочно-зеленый</div>
//                       <input class="dropdown-value" type="hidden" value="Зеленый" readonly>
//                       <div class="option">
//                           <div class="dropdown-item" data-value="Антрацит">
//                               Антрацит
//                           </div>
//                           <div class="dropdown-item" data-value="Бутылочно-зеленый">
//                               Бутылочно-зеленый
//                           </div>
//                           <div class="dropdown-item" data-value="Коричневый">
//                               Коричневый
//                           </div>
//                       </div>
//                   </div>
//               </div>
              
//           </div>
//           <div class=" col-2 container__basket_content">
//               <div class="container__basket_content_discription">
//                   <div class="dropdown color-picker dropdown__absked_size">
//                       <div class="dropdown-text">S</div>
//                       <input class="dropdown-value" type="hidden" value="S" readonly>
//                       <div class="option">
//                           <div class="dropdown-item" data-value="S">
//                               S
//                           </div>
//                           <div class="dropdown-item" data-value="M">
//                               M
//                           </div>
//                           <div class="dropdown-item" data-value="L">
//                               L
//                           </div>
//                           <div class="dropdown-item" data-value="XL">
//                               XL
//                           </div>
//                       </div>
//                   </div>
//               </div>
              
//           </div>
//           <div class="col-2 container__basket_price">
//               <div class="container__basket_count ">
//                   <div class="container__basket_count_minus basket_count" data-action="minus">
//                       <span></span>
//                   </div>
//                   <div class="container__basket_content_number">
//                       <span class="basket__number" data-counter >3</span>
//                   </div>
//                   <div class="container__basket_count_plus basket_count" data-action="plus">
//                       <span></span>
//                   </div>
//               </div>
              
//           </div>
//           <div class="col-2 container__basket_price ">
//               <div class="container__basket_price_button">
//                   <h5>105 690 ₽</h5>
//               <div class="basket_count_delite_pad">
//                   <div class="container__basket_count_plus_delite basket_count_delite basket_count">
//                       <span></span>
//                   </div>
//               </div>
//               </div>
              
              
//           </div>
//       </div>
//   </div>`;


//   cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
//     }
// });