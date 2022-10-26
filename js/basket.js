let promo = document.querySelector('.promo');

promo.addEventListener('input', changeBackground);
function changeBackground() {
    if (promo.value !== '') {
      document.querySelector('.basket__promocode button').style.background = '#999A81';
      document.querySelector('.basket__promocode input:focus').style.background = '#fff';
    } else {
      document.querySelector('.basket__promocode button').style.background = '#C7C8BB';
      document.querySelector('.basket__promocode input:focus').style.background = '#FEF7F0';
    }
  }




  // КЛИК ПО МЕНЮ КАТАЛОГ
$('.footer__menu_item_cataloge').click(function() {
  $('#clear__all_basket').modal('hide')
  
})

// КЛИК ПО МЕНЮ КОРЗИНЫ
$('.footer__menu_item_basket').click(function() {
  $('#clear__all_basket').modal('hide')
})

// КЛИК ПО МЕНЮ 
$('.catalode__menu_mobile').click(function() {
  $('#clear__all_basket').modal('hide')
})

// КЛИК ПО ПОИСКОВИКУ
$('.img_search').click(function() {
  $('#clear__all_basket').modal('hide')
})