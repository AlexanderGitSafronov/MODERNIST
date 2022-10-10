const choiseSizeCardSmall = document.querySelector('.show__cards_small');

choiseSizeCardSmall.addEventListener('click', () => {
  document.querySelector('.big__content_defoult_second').style.display = 'none';
  document.querySelector('.small__content_mobil_second').style.display = 'block';
  document.querySelector('.show__cards_small').classList.add('choose__card_size_active');
  document.querySelector('.show__cards_big').classList.remove('choose__card_size_active');
})
  


const choiseSizeCardBig = document.querySelector('.show__cards_big');

choiseSizeCardBig.addEventListener('click', () => {
  document.querySelector('.big__content_defoult_second').style.display = 'block';
  document.querySelector('.small__content_mobil_second').style.display = 'none';
  document.querySelector('.show__cards_big').classList.add('choose__card_size_active');
  document.querySelector('.show__cards_small').classList.remove('choose__card_size_active');
})

const openBlockButtonItem = document.querySelector('.product__show_button button');

openBlockButtonItem.addEventListener('click',() => {
    document.querySelector('.hiden__bllock_item').style.display = 'block';
    document.querySelector('.product__show_item').style.display = 'none';
})


const openBlockButtonItemMobile = document.querySelector('.product__show_button_mobile button');

openBlockButtonItemMobile.addEventListener('click',() => {
    document.querySelector('.hiden__bllock_item_mobile').style.display = 'block';
    document.querySelector('.product__show_item_mobile').style.display = 'none';
})