$('document').ready(function() {
    $('#personal__data_button').on('click', function() {
      $('input[required]').addClass('red');
      
    });
  });


  let validation = new JustValidate('#personal__data_validation')



validation.addField('#personal__data_name', [
  {
    rule: 'required',
    errorMessage: 'Укажите ФИО'
  }
])
.addField('#phone__personal_data', [
    {
        rule: 'required',
        errorMessage: 'Укажите телефон'
      }

])
.addField('#email__personal_data', [
    {
        rule: 'required',
        errorMessage: 'Укажите электронная почта'
      },
      {
        rule: 'email',
        errorMessage: 'Почта указана не верно'
      }

])