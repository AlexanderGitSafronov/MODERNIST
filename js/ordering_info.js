// Появление подсказки 

const infoLips = document.getElementsByClassName('insurance__content_info');



infoLips[0].addEventListener('mouseover', function() {
  const tooltip = document.getElementsByClassName('tooltip');
  tooltip[0].style.opacity = '1';
  tooltip[0].style.visibility = 'visible';
} )

infoLips[0].addEventListener('mouseout', function() {
    const tooltip = document.getElementsByClassName('tooltip');
    tooltip[0].style.opacity = '0';
    tooltip[0].style.visibility = 'hidden';
  } )


  
  $('.transport__company_content_cdec').click(function() {
    $('#transport__company_cdec').prop('checked', 'true');
  })

  $('.transport__company_content_pek').click(function() {
    $('#transport__company_pek').prop('checked', 'true');
  })

  $('.transport__company_content_line').click(function() {
    $('#transport__company_line').prop('checked', 'true');
  })



    // КЛИК ПО МЕНЮ КАТАЛОГ
$('.footer__menu_item_cataloge').click(function() {
  $('#choice__address').modal('hide')
  
})

// КЛИК ПО МЕНЮ КОРЗИНЫ
$('.footer__menu_item_basket').click(function() {
  $('#choice__address').modal('hide')
})

// КЛИК ПО МЕНЮ 
$('.catalode__menu_mobile').click(function() {
  $('#choice__address').modal('hide')
})

// КЛИК ПО ПОИСКОВИКУ
$('.img_search').click(function() {
  $('#choice__address').modal('hide')
})



let center = [45.018536084320125,38.935677489282256];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 17
  });

  let placemark = new ymaps.Placemark(center,{
    balloonContent: `
    <div class='balloon'>
    <div class='title'>Шоу-рум MODERNIST </div>
      <div class='address'>Республика Адыгея, ул. Тургеневское <br> шоссе, 25/4, ТЦ Арт-Хаус</div>
      <div class='schedule'>График работы: <br>
      ежедневно с 10:00 до 20:00</div>
      <div class='balloon__button'><button  type="button">Выбрать</button></div>
    </div>
    `
  }, {
    iconLayout: 'default#image',
    iconImageHref: './image/icon_map.svg',
    iconImageSize: [60,60],
    iconImageOffset: [-20,-40]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark);

  
  
}



// ymaps.ready(init);



$('.btn__choise_address').click(function() {
  $('.container__header_card').addClass('container__header_card_pos')
 })

 $('.choice__address').click(function() {
  $('.container__header_card').removeClass('container__header_card_pos')
 })

 $('.container__header_card').click(function() {
  $('.container__header_card').removeClass('container__header_card_pos')
 })

 $('.section__footer_menu').click(function() {
  $('.container__header_card').removeClass('container__header_card_pos')
 })


 $('.choice__address .modal-content').click(function(event) {
  event.preventDefault();
  event.stopPropagation();
 })

 


  

  

  

  