let validation = new JustValidate('#form-validation')

// let selectorPhone = document.querySelector('#modal-tel');
// let im = new Inputmask("+9(999)999-99-99");
// im.mask(selectorPhone);

validation.addField('#modal-name', [
  {
    rule: 'required',
    errorMessage: 'Укажите имя'
  }
])
.addField('#modal-tel', [
    {
        rule: 'required',
        errorMessage: 'Укажите телефон'
      }

    // {
    //     validation: (value) => {
    //         const phone = selectorPhone.inputmask.unmaskedvalue();
    //         return Boolean(Number(phone) && phone.length > 0)
    //     },
    //     errorMessage: 'Укажите телефон'
        
    // },
    // {
    //     validation: (value) => {
    //         const phone = selectorPhone.inputmask.unmaskedvalue();
    //         return Boolean(Number(phone) && phone.length < 10)
    //     },
    //     errorMessage: 'Укажите телефон полностью'
        
    // }
])



$('document').ready(function() {
    $('#modal-button-send').on('click', function() {
      $('input[required]').addClass('red');
      setTimeout(() => {
        // sent data to the server....
        console.log('-->Is Form Valid', validation.isValid);
      });
    });
  });