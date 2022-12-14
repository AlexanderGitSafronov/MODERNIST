$('document').ready(function () {
  $('#ordering__button').on('click', function () {
    setTimeout(function () {
      if($('input').hasClass('just-validate-error-field')) {
        $('input[required]').addClass('red');
      } else {
        $('input[required]').removeClass('red');
      }
    }, 0);
    // $('input[required]').addClass('red');
  });
  
});

// Первая кнопка далее 
$('document').ready(function () {
  $('.buyer__data_ordering_button_next').on('click', function () {
    $('input[required]').addClass('red');
  });
});
// Вторая кнопка далее 
$('document').ready(function () {
  $('.way__obtaining_ordering_next').on('click', function () {
    $('input[required]').addClass('red');
  });
});
// Третья кнопка далее 
$('document').ready(function () {
  $('.confirm__order_button_next').on('click', function () {
    $('input[required]').addClass('red');
  });
});



let validation = new JustValidate('#ordering__validation');

let isPhisicalBody = true;
let isDelivery = false;
let paymentMethod = 'online';
let anotherReceiver = false;

function addPhysicalValidation() {
  validation
    .addField('#name__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите имя',
      },
    ])
    .addField('#last__name_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите фамилию',
      },
    ])
    .addField('#phone__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите номер',
      },
    ])

    .addField('#email__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите электронную почту',
      },
      {
        rule: 'email',
        errorMessage: 'Почта указана не верно',
      },
    ]);
}
function addEntityValidation() {
  validation
    .addField('#how__name_entity', [
      {
        rule: 'required',
        errorMessage: 'Как к вам обращаться?',
      },
    ])
    .addField('#phone__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите телефон',
      },
    ])

    .addField('#email__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите электронную почту',
      },
      {
        rule: 'email',
        errorMessage: 'Почта указана не верно',
      },
    ])

    .addField('#name__organization_entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите название организации',
      },
    ])
    .addField('#name__seal_entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите название (для печати)',
      },
    ])
    .addField('#kpp__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите КПП',
      },
    ])
    .addField('#ihh__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите ИНН',
      },
    ])
    .addField('#adress__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите юридический адрес',
      },
    ])
    .addField('#mailing__address_entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите почтовый адрес',
      },
    ]);
}
function addDeliveryValidation() {
  validation
    .addField('#cyty__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите город',
      },
    ])
    .addField('#street__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите улицу',
      },
    ])

    .addField('#home__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите дом',
      },
    ])
    .addField('#frame__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите корпус',
      },
    ])
    .addField('#entrance__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите подъезд',
      },
    ])
    .addField('#floor__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите этаж',
      },
    ]);
}
function addOtherRecipient() {
  validation
    .addField('#another__name_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите имя',
      },
    ])
    .addField('#another__last_name_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите фамилию',
      },
    ])
    .addField('#another__patronymic_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите отчество',
      },
    ])
    .addField('#another__phone_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите номер',
      },
    ]);
}

function removePhysicalValidation() {
  validation
    .removeField('#name__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите имя',
      },
    ])
    .removeField('#last__name_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите фамилию',
      },
    ])
    .removeField('#phone__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите номер',
      },
    ])

    .removeField('#email__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите электронную почту',
      },
      {
        rule: 'email',
        errorMessage: 'Почта указана не верно',
      },
    ]);

    $('#name__ordering').prop('required', false);
    $('#last__name_ordering').prop('required', false);
    $('#phone__ordering').prop('required', false);
    $('#email__ordering').prop('required', false);

    $('#name__ordering').removeClass('red');
    $('#last__name_ordering').removeClass('red');
    $('#phone__ordering').removeClass('red');
    $('#email__ordering').removeClass('red');

}
function removeEntityValidation() {
  validation
    .removeField('#how__name_entity', [
      {
        rule: 'required',
        errorMessage: 'Как к вам обращаться?',
      },
    ])
    .removeField('#phone__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите телефон',
      },
    ])

    .removeField('#email__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите электронную почту',
      },
      {
        rule: 'email',
        errorMessage: 'Почта указана не верно',
      },
    ])

    .removeField('#name__organization_entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите название организации',
      },
    ])
    .removeField('#name__seal_entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите название (для печати)',
      },
    ])
    .removeField('#kpp__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите КПП',
      },
    ])
    .removeField('#ihh__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите ИНН',
      },
    ])
    .removeField('#adress__entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите юридический адрес',
      },
    ])
    .removeField('#mailing__address_entity', [
      {
        rule: 'required',
        errorMessage: 'Укажите почтовый адрес',
      },
    ]);


    $('#how__name_entity').prop('required', false);
    $('#phone__entity').prop('required', false);
    $('#email__entity').prop('required', false);
    $('#name__organization_entity').prop('required', false);
    $('#name__seal_entity').prop('required', false);
    $('#kpp__entity').prop('required', false);
    $('#ihh__entity').prop('required', false);
    $('#adress__entity').prop('required', false);
    $('#mailing__address_entity').prop('required', false);

    $('#how__name_entity').removeClass('red');
    $('#phone__entity').removeClass('red');
    $('#email__entity').removeClass('red');
    $('#name__organization_entity').removeClass('red');
    $('#name__seal_entity').removeClass('red');
    $('#kpp__entity').removeClass('red');
    $('#ihh__entity').removeClass('red');
    $('#adress__entity').removeClass('red');
    $('#mailing__address_entity').removeClass('red');
}
function removeDeliveryValidation() {
  validation
    .removeField('#cyty__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите город',
      },
    ])
    .removeField('#street__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите улицу',
      },
    ])

    .removeField('#home__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите дом',
      },
    ])
    .removeField('#frame__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите корпус',
      },
    ])
    .removeField('#entrance__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите подъезд',
      },
    ])
    .removeField('#floor__ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите этаж',
      },
    ]);
    $('#cyty__ordering').prop('required', false);
    $('#street__ordering').prop('required', false);
    $('#home__ordering').prop('required', false);
    $('#frame__ordering').prop('required', false);
    $('#entrance__ordering').prop('required', false);
    $('#floor__ordering').prop('required', false);

    $('#cyty__ordering').removeClass('red');
    $('#street__ordering').removeClass('red');
    $('#home__ordering').removeClass('red');
    $('#frame__ordering').removeClass('red');
    $('#entrance__ordering').removeClass('red');
    $('#floor__ordering').removeClass('red');
}
function removeOtherRecipient() {
  validation
    .removeField('#another__name_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите имя',
      },
    ])
    .removeField('#another__last_name_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите фамилию',
      },
    ])
    .removeField('#another__patronymic_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите отчество',
      },
    ])
    .removeField('#another__phone_ordering', [
      {
        rule: 'required',
        errorMessage: 'Укажите номер',
      },
    ]);
}

function approveOrder(e) {
  e.preventDefault();
  validation.destroy();
  if (isPhisicalBody) {
    addPhysicalValidation();
    removeEntityValidation();
  } else {
    addEntityValidation();
    removePhysicalValidation();
  }

  if (isDelivery) {
    addDeliveryValidation();
  }

  if (anotherReceiver) {
    addOtherRecipient();
  }

  setTimeout(() => {
    // sent data to the server....
    console.log('-->Is Form Valid', validation.isValid);
  });
}

document.getElementById('ordering__validation').addEventListener('submit', approveOrder);

// СТРАНИЦА ЗАКАЗОВ

function show1() {
  setTimeout(function () {
    if($('input').hasClass('just-validate-error-field')) {
      $('input[required]').addClass('red');
    } else {
      $('input[required]').removeClass('red');
    }
  }, 1);
  isPhisicalBody = true;
  // removeEntityValidation();
  document.getElementById('div1').style.display = 'block';
  document.getElementById('div2').style.display = 'none';
  document.getElementById('div3').style.display = 'block';

  if (document.getElementById('div1').style.display === 'block') {
    $('#name__ordering').prop('required', true);
    $('#last__name_ordering').prop('required', true);
    $('#phone__ordering').prop('required', true);
    $('#email__ordering').prop('required', true);
    
    
  }

  if (document.getElementById('div2').style.display === 'none') {
    $('#how__name_entity').prop('required', false);
    $('#phone__entity').prop('required', false);
    $('#email__entity').prop('required', false);
    $('#name__organization_entity').prop('required', false);
    $('#name__seal_entity').prop('required', false);
    $('#kpp__entity').prop('required', false);
    $('#ihh__entity').prop('required', false);
    $('#adress__entity').prop('required', false);
    $('#mailing__address_entity').prop('required', false);

    $('#how__name_entity').removeClass('red');
    $('#phone__entity').removeClass('red');
    $('#email__entity').removeClass('red');
    $('#name__organization_entity').removeClass('red');
    $('#name__seal_entity').removeClass('red');
    $('#kpp__entity').removeClass('red');
    $('#ihh__entity').removeClass('red');
    $('#adress__entity').removeClass('red');
    $('#mailing__address_entity').removeClass('red');

    validation.removeField('#how__name_entity', [
        {
            rule: 'required',
            errorMessage: 'Как к вам обращаться?'
          }

    ])
    .removeField('#phone__entity', [
        {
            rule: 'required',
            errorMessage: 'Укажите телефон'
          }

    ])

    .removeField('#email__entity', [
        {
            rule: 'required',
            errorMessage: 'Укажите электронную почту'
          },
          {
            rule: 'email',
            errorMessage: 'Почта указана не верно'
          }

    ])

    .removeField('#name__organization_entity', [
        {
            rule: 'required',
            errorMessage: 'Укажите название организации'
          }

    ])
    .removeField('#name__seal_entity', [
        {
            rule: 'required',
            errorMessage: 'Укажите название (для печати)'
          }

    ])
    .removeField('#kpp__entity', [
        {
            rule: 'required',
            errorMessage: 'Укажите КПП'
          }

    ])
    .removeField('#ihh__entity', [
        {
            rule: 'required',
            errorMessage: 'Укажите ИНН'
          }

    ])
    .removeField('#adress__entity', [
        {
            rule: 'required',
            errorMessage: 'Укажите юридический адрес'
          }

    ])
    .removeField('#mailing__address_entity', [
        {
            rule: 'required',
            errorMessage: 'Укажите почтовый адрес'
          }

    ])
  }
}
function show2() {
  if($('.form__item_adress').hasClass('just-validate-error-field')) {
    $('input[required]').addClass('red');
  } else {
    $('input[required]').removeClass('red');
  }
  
  
  
  


  isPhisicalBody = false;
  document.getElementById('div1').style.display = 'none';
  document.getElementById('div3').style.display = 'none';
  document.getElementById('div2').style.display = 'block';

  


  if (document.getElementById('div1').style.display === 'none') {
    $('#name__ordering').prop('required', false);
    $('#last__name_ordering').prop('required', false);
    $('#phone__ordering').prop('required', false);
    $('#email__ordering').prop('required', false);

    $('#name__ordering').removeClass('red');
    $('#last__name_ordering').removeClass('red');
    $('#phone__ordering').removeClass('red');
    $('#email__ordering').removeClass('red');

    validation
      .removeField('#name__ordering', [
        {
          rule: 'required',
          errorMessage: 'Укажите имя',
        },
      ])
      .removeField('#last__name_ordering', [
        {
          rule: 'required',
          errorMessage: 'Укажите фамилию',
        },
      ])
      .removeField('#phone__ordering', [
        {
          rule: 'required',
          errorMessage: 'Укажите номер',
        },
      ])

      .removeField('#email__ordering', [
        {
          rule: 'required',
          errorMessage: 'Укажите электронную почту',
        },
        {
          rule: 'email',
          errorMessage: 'Почта указана не верно',
        },
      ]);

      
      
      
     
  }
  
  if (document.getElementById('div2').style.display === 'block') {
    $('#how__name_entity').prop('required', true);
    $('#phone__entity').prop('required', true);
    $('#email__entity').prop('required', true);
    $('#name__organization_entity').prop('required', true);
    $('#name__seal_entity').prop('required', true);
    $('#kpp__entity').prop('required', true);
    $('#ihh__entity').prop('required', true);
    $('#adress__entity').prop('required', true);
    $('#mailing__address_entity').prop('required', true);

    // addEntityValidation();
   
    
    
    
    
  }

  if(document.getElementById('cash__on_delivery_content_name').style.display === 'block') {
    document.getElementById('cash__on_delivery_content_name').style.display = 'none';

  anotherReceiver = false;
      $('#another__name_ordering').prop('required', false);
      $('#another__last_name_ordering').prop('required', false);
      $('#another__patronymic_ordering').prop('required', false);
      $('#another__phone_ordering').prop('required', false);

      $('#another__name_ordering').removeClass('red');
      $('#another__last_name_ordering').removeClass('red');
      $('#another__patronymic_ordering').removeClass('red');
      $('#another__phone_ordering').removeClass('red');

      removeOtherRecipient();

      document.getElementById("label_check_delivery").checked = false;

      setTimeout(function () {
        if($('input').hasClass('just-validate-error-field')) {
          $('input[required]').addClass('red');
        } else {
          $('input[required]').removeClass('red');
        }
      }, 1);
  }
  
}

function show3() {
  setTimeout(function () {
    if($('input').hasClass('just-validate-error-field')) {
      $('input[required]').addClass('red');
    } else {
      $('input[required]').removeClass('red');
    }
  }, 1);
  isDelivery = false;
  removeDeliveryValidation();
  document.getElementById('way__to_get').style.display = 'block';
  document.getElementById('way__to_get_two').style.display = 'none';

  if (document.getElementById('way__to_get_two').style.display === 'none') {
    $('#cyty__ordering').prop('required', false);
    $('#street__ordering').prop('required', false);
    $('#home__ordering').prop('required', false);
    $('#frame__ordering').prop('required', false);
    $('#entrance__ordering').prop('required', false);
    $('#floor__ordering').prop('required', false);

    

    // validation.removeField('#cyty__ordering', [
    //     {
    //         rule: 'required',
    //         errorMessage: 'Укажите город'
    //       }

    // ])
    // .removeField('#street__ordering', [
    //     {
    //         rule: 'required',
    //         errorMessage: 'Укажите улицу'
    //       }

    // ])

    // .removeField('#home__ordering', [
    //     {
    //         rule: 'required',
    //         errorMessage: 'Укажите дом'
    //       }

    // ])
    // .removeField('#frame__ordering', [
    //     {
    //         rule: 'required',
    //         errorMessage: 'Укажите корпус'
    //       }

    // ])
    // .removeField('#entrance__ordering', [
    //     {
    //         rule: 'required',
    //         errorMessage: 'Укажите подъезд'
    //       }

    // ])
    // .removeField('#floor__ordering', [
    //     {
    //         rule: 'required',
    //         errorMessage: 'Укажите этаж'
    //       }

    // ])
  }
}
function show4() {
  
  isDelivery = true;
  document.getElementById('way__to_get').style.display = 'none';
  document.getElementById('way__to_get_two').style.display = 'block';

  
  if (document.getElementById('way__to_get_two').style.display === 'block') {
    $('#cyty__ordering').prop('required', true);
    $('#street__ordering').prop('required', true);
    $('#home__ordering').prop('required', true);
    $('#frame__ordering').prop('required', true);
    $('#entrance__ordering').prop('required', true);
    $('#floor__ordering').prop('required', true);
    
    // addDeliveryValidation();
  }
}
function showOnline() {
  paymentMethod = 'online';
  document.getElementById('show__online').style.display = 'block';
  document.getElementById('upon__receipt').style.display = 'none';
  document.getElementById('installment__plan').style.display = 'none';
  document.getElementById('cash__on_delivery').style.display = 'none';
  document.getElementById('cash__on_delivery_content_name').style.display = 'none';

  

  anotherReceiver = false;
        $('#another__name_ordering').prop('required', false);
        $('#another__last_name_ordering').prop('required', false);
        $('#another__patronymic_ordering').prop('required', false);
        $('#another__phone_ordering').prop('required', false);
  
        $('#another__name_ordering').removeClass('red');
        $('#another__last_name_ordering').removeClass('red');
        $('#another__patronymic_ordering').removeClass('red');
        $('#another__phone_ordering').removeClass('red');
  
        removeOtherRecipient();

        document.getElementById("label_check_delivery").checked = false;

        if($('input').hasClass('just-validate-error-field')) {
          $('input[required]').addClass('red');
        } else {
          $('input[required]').removeClass('red');
        }
  
}
function showInstallmentPlan() {
  paymentMethod = 'intallment';
  document.getElementById('installment__plan').style.display = 'block';
  document.getElementById('show__online').style.display = 'none';
  document.getElementById('upon__receipt').style.display = 'none';
  document.getElementById('cash__on_delivery').style.display = 'none';
  document.getElementById('cash__on_delivery_content_name').style.display = 'none';

  anotherReceiver = false;
        $('#another__name_ordering').prop('required', false);
        $('#another__last_name_ordering').prop('required', false);
        $('#another__patronymic_ordering').prop('required', false);
        $('#another__phone_ordering').prop('required', false);
  
        $('#another__name_ordering').removeClass('red');
        $('#another__last_name_ordering').removeClass('red');
        $('#another__patronymic_ordering').removeClass('red');
        $('#another__phone_ordering').removeClass('red');
  
        removeOtherRecipient();

        document.getElementById("label_check_delivery").checked = false;

        if($('input').hasClass('just-validate-error-field')) {
          $('input[required]').addClass('red');
        } else {
          $('input[required]').removeClass('red');
        }
}
function uponReceipt() {
  paymentMethod = 'uponReceipt';
  document.getElementById('upon__receipt').style.display = 'block';
  document.getElementById('installment__plan').style.display = 'none';
  document.getElementById('show__online').style.display = 'none';
  document.getElementById('cash__on_delivery').style.display = 'none';
  document.getElementById('cash__on_delivery_content_name').style.display = 'none';

  anotherReceiver = false;
        $('#another__name_ordering').prop('required', false);
        $('#another__last_name_ordering').prop('required', false);
        $('#another__patronymic_ordering').prop('required', false);
        $('#another__phone_ordering').prop('required', false);
  
        $('#another__name_ordering').removeClass('red');
        $('#another__last_name_ordering').removeClass('red');
        $('#another__patronymic_ordering').removeClass('red');
        $('#another__phone_ordering').removeClass('red');
  
        removeOtherRecipient();
  
        document.getElementById("label_check_delivery").checked = false;

        if($('input').hasClass('just-validate-error-field')) {
          $('input[required]').addClass('red');
        } else {
          $('input[required]').removeClass('red');
        }
}
function cashOnDelivery() {
  paymentMethod = 'cashOnDelivery';
  document.getElementById('cash__on_delivery').style.display = 'block';
  document.getElementById('installment__plan').style.display = 'none';
  document.getElementById('show__online').style.display = 'none';
  document.getElementById('upon__receipt').style.display = 'none';

  
}


if(document.getElementById('cash__on_delivery').style.display = 'block') {
  function serviceDelivery() {

    setTimeout(function () {
      if($('input').hasClass('just-validate-error-field')) {
        // $('input[required]').addClass('red');
      } else {
        $('input[required]').removeClass('red');
      }
    }, 0);
    
    if (document.getElementById('cash__on_delivery_content_name').style.display === 'block') {
      
      document.getElementById('cash__on_delivery_content_name').style.display = 'none';
      if ((document.getElementById('cash__on_delivery_content_name').style.display = 'none')) {
        anotherReceiver = false;
        $('#another__name_ordering').prop('required', false);
        $('#another__last_name_ordering').prop('required', false);
        $('#another__patronymic_ordering').prop('required', false);
        $('#another__phone_ordering').prop('required', false);
  
        $('#another__name_ordering').removeClass('red');
        $('#another__last_name_ordering').removeClass('red');
        $('#another__patronymic_ordering').removeClass('red');
        $('#another__phone_ordering').removeClass('red');
  
        removeOtherRecipient();
  
        
        // validation.removeField('#another__name_ordering', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите имя'
        //       }
  
        // ])
        // .removeField('#another__last_name_ordering', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите фамилию'
        //       }
  
        // ])
        // .removeField('#another__patronymic_ordering', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите отчество'
        //       }
  
        // ])
        // .removeField('#another__phone_ordering', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите номер'
        //       }
  
        // ])
      }
    } else {
      anotherReceiver = true;
      
      document.getElementById('cash__on_delivery_content_name').style.display = 'block';
      
      if ((document.getElementById('cash__on_delivery_content_name').style.display = 'block')) {
        $('#another__name_ordering').prop('required', true);
        $('#another__last_name_ordering').prop('required', true);
        $('#another__patronymic_ordering').prop('required', true);
        $('#another__phone_ordering').prop('required', true);

        
       
        
      }
    }
   
  }
}

if(document.getElementById('cash__on_delivery').style.display = 'none') {
  anotherReceiver = false;
        $('#another__name_ordering').prop('required', false);
        $('#another__last_name_ordering').prop('required', false);
        $('#another__patronymic_ordering').prop('required', false);
        $('#another__phone_ordering').prop('required', false);
  
        $('#another__name_ordering').removeClass('red');
        $('#another__last_name_ordering').removeClass('red');
        $('#another__patronymic_ordering').removeClass('red');
        $('#another__phone_ordering').removeClass('red');
  
        removeOtherRecipient();
        
}

// МОБИЛЬНАЯ ВЕРСИЯ

// Кнопка ДАЛЕЕ первой страницы
document.querySelector('.buyer__data_ordering_button_next').addEventListener('click', (e) => {
  // e.preventDefault();
  // validation.destroy();
  
  
  if (isPhisicalBody) {
    addPhysicalValidation();
    removeEntityValidation();
    
   
    setTimeout(() => {
      // sent data to the server....
      console.log('-->Is Form Valid phisical', validation.isValid);
    });
    
  } else {
    addEntityValidation();
    removePhysicalValidation();
    setTimeout(() => {
      // sent data to the server....
      console.log('-->Is Form Valid entity', validation.isValid);
    });
  }

  // validation.revalidate()
 
  setTimeout(() => {
    if (validation.isValid) {
      document.querySelector('.buyer__data_ordering').style.display = 'none';
      document.querySelector('.way__obtaining_ordering').style.display = 'block';
      document.querySelector('.way__obtaining_ordering_button_prew').style.display = 'block';
      document.querySelector('.buyer__data_ordering_button_next').style.display = 'none';
      document.querySelector('.way__obtaining_ordering_next').style.display = 'block';
      document.querySelector('.ordering__slider_second').classList.add('ordering__slider_orange');
    }
  });
});

// Кнопка НАЗАД на второй странице
document.querySelector('.way__obtaining_ordering_button_prew').addEventListener('click', () => {
  document.querySelector('.buyer__data_ordering').style.display = 'block';
  document.querySelector('.way__obtaining_ordering').style.display = 'none';
  document.querySelector('.way__obtaining_ordering_button_prew').style.display = 'none';
  document.querySelector('.ordering__slider_second').classList.remove('ordering__slider_orange');

  document.querySelector('.buyer__data_ordering_button_next').style.display = 'block';
  document.querySelector('.way__obtaining_ordering_next').style.display = 'none';
});

// Кнопка ДАЛЕЕ на второй странице
document.querySelector('.way__obtaining_ordering_next').addEventListener('click', () => {
  
  if (isDelivery) {
    addDeliveryValidation();
    setTimeout(() => {
      // sent data to the server....
      console.log('-->Is Form Valid delivery', validation.isValid);
    });
  } else {
    removeDeliveryValidation();
  }
  // validation.revalidate();
  setTimeout(() => {
    if (validation.isValid) {
      document.querySelector('.payment__method_ordering').style.display = 'block';
      document.querySelector('.way__obtaining_ordering').style.display = 'none';
      document.querySelector('.buyer__data_ordering_button_next').style.display = 'none';
      document.querySelector('.way__obtaining_ordering_next').style.display = 'none';
      document.querySelector('.way__obtaining_ordering_button_prew').style.display = 'none';
      document.querySelector('.payment__method_ordering_button_prew').style.display = 'block';
      document.querySelector('.ordering__slider_third').classList.add('ordering__slider_orange');
      document.querySelector('.confirm__order_button_next').style.display = 'block';
    }
  });
});

// Кнопка НАЗАД на третей странице
document.querySelector('.payment__method_ordering_button_prew').addEventListener('click', () => {
  document.querySelector('.way__obtaining_ordering').style.display = 'block';
  document.querySelector('.payment__method_ordering').style.display = 'none';

  document.querySelector('.ordering__slider_third').classList.remove('ordering__slider_orange');

  document.querySelector('.way__obtaining_ordering_next').style.display = 'block';
  document.querySelector('.way__obtaining_ordering_button_prew').style.display = 'block';
  document.querySelector('.payment__method_ordering_button_prew').style.display = 'none';
  document.querySelector('.confirm__order_button_next').style.display = 'none';
});

// Кнопка ВПЕРЕД на третей странице
document.querySelector('.confirm__order_button_next').addEventListener('click', () => {
  
  if (anotherReceiver) {
    addOtherRecipient();
    setTimeout(() => {
      // sent data to the server....
      console.log('-->Is Form Valid anRe', validation.isValid);
    });
  } else {
    removeOtherRecipient();
  }
  // validation.revalidate();

  setTimeout(() => {
    if (validation.isValid) {
      document.querySelector('.ordering').style.display = 'none';
      document.querySelector('.ordering__border_left').style.display = 'block';

      document.querySelector('.ordering__slider_third_four').classList.add('ordering__slider_orange');

      document.querySelector('.button__ordering_slide').style.display = 'none';
    }
  });
});


// НЕ РАБОТАЛО СКРЫТИЕ ПОДСКАЗКИ НА МОБИЛКЕ
// let inputs = document.querySelectorAll('.ordering__input_error');

// for(let i = 0; i < inputs.length; i++) {

//   inputs[i].addEventListener('input', changeError);
//   function changeError(event) {
//   let itemElement = $(event.target).closest('.form__item_adress');
//   let itemFind = itemElement.find('.just-validate-error-label');
//   console.log(itemFind);
//     if (event.target.value !== '') {
//       itemFind[0].style.display = 'none';
//     } else {
//       itemFind[0].style.display = 'block';
//     }

   
//   }


// }





  