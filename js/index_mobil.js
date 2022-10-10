// ПОЯВЛЕНИЕ БЛОКОВ С ТОВАРАМИ ПО НАЖАТИЮ НА КНОПКУ

const openBlockButtonItem = document.querySelector('.product__show_button button');

openBlockButtonItem.addEventListener('click',() => {
    document.querySelector('.hiden__bllock_item').style.display = 'block';
    document.querySelector('.product__show_item').style.display = 'none';
})

// ВЫБОР РАЗМЕРА КАРТОЧЕК 

const choiseSizeCardSmall = document.querySelector('.show__cards_small');

choiseSizeCardSmall.addEventListener('click', () => {
  document.querySelector('.big__content_defoult').style.display = 'none';
  document.querySelector('.big__content_defoult_second').style.display = 'none';
  document.querySelector('.small__content_mobil').style.display = 'block';
  document.querySelector('.small__content_mobil_second').style.display = 'block';
  document.querySelector('.show__cards_small').classList.add('choose__card_size_active');
  document.querySelector('.show__cards_big').classList.remove('choose__card_size_active');
})
  


const choiseSizeCardBig = document.querySelector('.show__cards_big');

choiseSizeCardBig.addEventListener('click', () => {
  document.querySelector('.big__content_defoult').style.display = 'block';
  document.querySelector('.big__content_defoult_second').style.display = 'block';
  document.querySelector('.small__content_mobil').style.display = 'none';
  document.querySelector('.small__content_mobil_second').style.display = 'none';
  document.querySelector('.show__cards_big').classList.add('choose__card_size_active');
  document.querySelector('.show__cards_small').classList.remove('choose__card_size_active');
})