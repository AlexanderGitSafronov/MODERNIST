// КЛИК ПО МЕНЮ КАТАЛОГ
$('.footer__menu_item_cataloge').click(function() {
   $('#exampleModalAppeals').modal('hide')
   $('#exampleModalAppeals2').modal('hide')
   $('#exampleModalAppealsAnswer').modal('hide')
   $('#exampleModalAppealsNotAutorization').modal('hide')
   $('#exampleModalAppealsNotAutorizationSms').modal('hide')
})

// КЛИК ПО МЕНЮ КОРЗИНЫ
$('.footer__menu_item_basket').click(function() {
    $('#exampleModalAppeals').modal('hide')
    $('#exampleModalAppeals2').modal('hide')
    $('#exampleModalAppealsAnswer').modal('hide')
    $('#exampleModalAppealsNotAutorization').modal('hide')
    $('#exampleModalAppealsNotAutorizationSms').modal('hide')
})

// КЛИК ПО МЕНЮ 
$('.catalode__menu_mobile').click(function() {
    $('#exampleModalAppeals').modal('hide')
    $('#exampleModalAppeals2').modal('hide')
    $('#exampleModalAppealsAnswer').modal('hide')
    $('#exampleModalAppealsNotAutorization').modal('hide')
    $('#exampleModalAppealsNotAutorizationSms').modal('hide')
})

// КЛИК ПО ПОИСКОВИКУ
$('.img_search').click(function() {
    $('#exampleModalAppeals').modal('hide')
    $('#exampleModalAppeals2').modal('hide')
    $('#exampleModalAppealsAnswer').modal('hide')
    $('#exampleModalAppealsNotAutorization').modal('hide')
    $('#exampleModalAppealsNotAutorizationSms').modal('hide')
    
    
    
})

$('document').ready(function() {
    $('#appeals_auth_button').on('click', function() {
      $('input[required]').addClass('red');
      
    });
  });



let validation = new JustValidate('#valid__appeals');

function addPhysicalValidation() {
    validation
      .addField('#modal__sms__code', [
        {
          rule: 'required',
          errorMessage: 'Заполните поле',
        },
      ])
      
  }



function approveOrder(e) {
    e.preventDefault();
    validation.destroy();
    addPhysicalValidation();
  
    setTimeout(() => {
      // sent data to the server....
      console.log('-->Is Form Valid', validation.isValid);
    });
  }
  document.getElementById('valid__appeals').addEventListener('submit', approveOrder);