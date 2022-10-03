$('document').ready(function() {
    $('#ordering__button').on('click', function() {
      $('input[required]').addClass('red');
      
    });
  });

  let validation = new JustValidate('#ordering__validation');

  

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
  function addDeliveryValidation()  {
    validation  
    .addField('#cyty__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите город'
          }
    
    ])
    .addField('#street__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите улицу'
          }
    
    ])
    
    
    .addField('#home__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите дом'
          }
    
    ])
    .addField('#frame__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите корпус'
          }
    
    ])
    .addField('#entrance__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите подъезд'
          }
    
    ])
    .addField('#floor__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите этаж'
          }
    
    ])
  }
  function addOtherRecipient() {
    validation
    .addField('#another__name_ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите имя'
          }
    
    ])
    .addField('#another__last_name_ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите фамилию'
          }
    
    ])
    .addField('#another__patronymic_ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите отчество'
          }
    
    ])
    .addField('#another__phone_ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите номер'
          }
    
    ])
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
  }
  function removeDeliveryValidation()  {
    validation  
    .removeField('#cyty__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите город'
          }
    
    ])
    .removeField('#street__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите улицу'
          }
    
    ])
    
    
    .removeField('#home__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите дом'
          }
    
    ])
    .removeField('#frame__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите корпус'
          }
    
    ])
    .removeField('#entrance__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите подъезд'
          }
    
    ])
    .removeField('#floor__ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите этаж'
          }
    
    ])
  }
  function removeOtherRecipient() {
    validation
    .removeField('#another__name_ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите имя'
          }
    
    ])
    .removeField('#another__last_name_ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите фамилию'
          }
    
    ])
    .removeField('#another__patronymic_ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите отчество'
          }
    
    ])
    .removeField('#another__phone_ordering', [
        {
            rule: 'required',
            errorMessage: 'Укажите номер'
          }
    
    ])
  }

  function approveOrder(e) {
    e.preventDefault();
    validation.destroy();
  
    console.log('-->', 'order', validation);
    if (document.getElementById('div1').style.display === 'block' ) {
      addPhysicalValidation();
    }
    if (document.getElementById('div2').style.display === 'block') {
      addEntityValidation();
    }
    if (document.getElementById('way__to_get_two').style.display === 'block') {
        addDeliveryValidation();
      }
      if (document.getElementById('cash__on_delivery_content_name').style.display = 'block') {
        addOtherRecipient();
      }
  }

  document.getElementById('ordering__validation').addEventListener('submit', approveOrder);





  



// validation.addField('#name__ordering', [
//   {
//     rule: 'required',
//     errorMessage: 'Укажите имя'
//   }
// ])
// .addField('#last__name_ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите фамилию'
//       }

// ])
// .addField('#phone__ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите номер'
//       }

// ])

// .addField('#email__ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите электронную почту'
//       },
//       {
//         rule: 'email',
//         errorMessage: 'Почта указана не верно'
//       }

// ])




// // ЮР ЛИЦО
// .addField('#how__name_entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Как к вам обращаться?'
//       }

// ])
// .addField('#phone__entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите телефон'
//       }

// ])

// .addField('#email__entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите электронную почту'
//       },
//       {
//         rule: 'email',
//         errorMessage: 'Почта указана не верно'
//       }

// ])

// .addField('#name__organization_entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите название организации'
//       }

// ])
// .addField('#name__seal_entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите название (для печати)'
//       }

// ])
// .addField('#kpp__entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите КПП'
//       }

// ])
// .addField('#ihh__entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите ИНН'
//       }

// ])
// .addField('#adress__entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите юридический адрес'
//       }

// ])
// .addField('#mailing__address_entity', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите почтовый адрес'
//       }

// ])

// // ДОСТАВКА
// .addField('#cyty__ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите город'
//       }

// ])
// .addField('#street__ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите улицу'
//       }

// ])


// .addField('#home__ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите дом'
//       }

// ])
// .addField('#frame__ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите корпус'
//       }

// ])
// .addField('#entrance__ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите подъезд'
//       }

// ])
// .addField('#floor__ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите этаж'
//       }

// ])

// // Другой получатель
// .addField('#another__name_ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите имя'
//       }

// ])
// .addField('#another__last_name_ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите фамилию'
//       }

// ])
// .addField('#another__patronymic_ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите отчество'
//       }

// ])
// .addField('#another__phone_ordering', [
//     {
//         rule: 'required',
//         errorMessage: 'Укажите номер'
//       }

// ])










// СТРАНИЦА ЗАКАЗОВ

function show1(){
    document.getElementById('div1').style.display ='block';
    document.getElementById('div2').style.display ='none';
    document.getElementById('div3').style.display = 'block';

    if(document.getElementById('div1').style.display === 'block') {
        $("#name__ordering").prop('required', true);
        $("#last__name_ordering").prop('required', true);
        $("#phone__ordering").prop('required', true);
        $("#email__ordering").prop('required', true);
        
       
    }

    if(document.getElementById('div2').style.display === 'none') {
        $("#how__name_entity").prop('required', false);
        $("#phone__entity").prop('required', false);
        $("#email__entity").prop('required', false);
        $("#name__organization_entity").prop('required', false);
        $("#name__seal_entity").prop('required', false);
        $("#kpp__entity").prop('required', false);
        $("#ihh__entity").prop('required', false);
        $("#adress__entity").prop('required', false);
        $("#mailing__address_entity").prop('required', false);
    

        // validation.removeField('#how__name_entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Как к вам обращаться?'
        //       }
        
        // ])
        // .removeField('#phone__entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите телефон'
        //       }
        
        // ])
        
        // .removeField('#email__entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите электронную почту'
        //       },
        //       {
        //         rule: 'email',
        //         errorMessage: 'Почта указана не верно'
        //       }
        
        // ])
        
        // .removeField('#name__organization_entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите название организации'
        //       }
        
        // ])
        // .removeField('#name__seal_entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите название (для печати)'
        //       }
        
        // ])
        // .removeField('#kpp__entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите КПП'
        //       }
        
        // ])
        // .removeField('#ihh__entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите ИНН'
        //       }
        
        // ])
        // .removeField('#adress__entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите юридический адрес'
        //       }
        
        // ])
        // .removeField('#mailing__address_entity', [
        //     {
        //         rule: 'required',
        //         errorMessage: 'Укажите почтовый адрес'
        //       }
        
        // ])
        
    }

    
  
  }
  function show2(){
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div2').style.display ='block';

    if(document.getElementById('div1').style.display === 'none') {
        $("#name__ordering").prop('required', false);
        $("#last__name_ordering").prop('required', false);
        $("#phone__ordering").prop('required', false);
        $("#email__ordering").prop('required', false);

        validation.removeField('#name__ordering', [
            {
              rule: 'required',
              errorMessage: 'Укажите имя'
            }
          ])
          .removeField('#last__name_ordering', [
              {
                  rule: 'required',
                  errorMessage: 'Укажите фамилию'
                }
          
          ])
          .removeField('#phone__ordering', [
              {
                  rule: 'required',
                  errorMessage: 'Укажите номер'
                }
          
          ])
          
          .removeField('#email__ordering', [
              {
                  rule: 'required',
                  errorMessage: 'Укажите электронную почту'
                },
                {
                  rule: 'email',
                  errorMessage: 'Почта указана не верно'
                }
          
          ])
        
        
        
        
        
    }

    if(document.getElementById('div2').style.display === 'block') {
        $("#how__name_entity").prop('required', true);
        $("#phone__entity").prop('required', true);
        $("#email__entity").prop('required', true);
        $("#name__organization_entity").prop('required', true);
        $("#name__seal_entity").prop('required', true);
        $("#kpp__entity").prop('required', true);
        $("#ihh__entity").prop('required', true);
        $("#adress__entity").prop('required', true);
        $("#mailing__address_entity").prop('required', true);



        // addEntityValidation();
     
    }
  }

  function show3(){
    document.getElementById('way__to_get').style.display ='block';
    document.getElementById('way__to_get_two').style.display ='none';
    
    if(document.getElementById('way__to_get_two').style.display === 'none') {
        $("#cyty__ordering").prop('required', false);
        $("#street__ordering").prop('required', false);
        $("#home__ordering").prop('required', false);
        $("#frame__ordering").prop('required', false);
        $("#entrance__ordering").prop('required', false);
        $("#floor__ordering").prop('required', false);


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
  function show4(){
    document.getElementById('way__to_get').style.display = 'none';
    document.getElementById('way__to_get_two').style.display ='block';

    if(document.getElementById('way__to_get_two').style.display === 'block') {
        $("#cyty__ordering").prop('required', true);
        $("#street__ordering").prop('required', true);
        $("#home__ordering").prop('required', true);
        $("#frame__ordering").prop('required', true);
        $("#entrance__ordering").prop('required', true);
        $("#floor__ordering").prop('required', true);

        // addDeliveryValidation();
       
        
    }
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
        if(document.getElementById('cash__on_delivery_content_name').style.display = 'none'){
            $("#another__name_ordering").prop('required', false);
            $("#another__last_name_ordering").prop('required', false);
            $("#another__patronymic_ordering").prop('required', false);
            $("#another__phone_ordering").prop('required', false);

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
        document.getElementById('cash__on_delivery_content_name').style.display = 'block';
        if(document.getElementById('cash__on_delivery_content_name').style.display = 'block'){
            $("#another__name_ordering").prop('required', true);
            $("#another__last_name_ordering").prop('required', true);
            $("#another__patronymic_ordering").prop('required', true);
            $("#another__phone_ordering").prop('required', true);

            
            
           
        }
      }
    
    
  }



  