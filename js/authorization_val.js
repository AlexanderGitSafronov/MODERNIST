$('document').ready(function() {
    $('#authorization__button').on('click', function() {
      $('input[required]').addClass('red');
      setTimeout(() => {
        // sent data to the server....
        console.log('-->Is Form Valid', validation.isValid);
      });
    });
  });


  let validation = new JustValidate('#personal__authorization_validation')



validation.addField('#phone__or_email', [
  {
    rule: 'required',
    errorMessage: 'Укажите телефон или е-mail'
  }
])


