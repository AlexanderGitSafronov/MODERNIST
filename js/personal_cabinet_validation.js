let validation = new JustValidate('#form-validation')

validation.addField('#form-place', [
  {
    rule: 'required',
    errorMessage: 'Укажите название адреса (пример “Дом, офис”)'
  }
])
.addField('#form-city', [
    {
        rule: 'required',
        errorMessage: 'Укажите город'
    }
])
.addField('#form-street', [
    {
        rule: 'required',
        errorMessage: 'Укажите улицу'
    }
])
.addField('#form-home', [
    {
        rule: 'required',
        errorMessage: 'Укажите дом'
    }
])
.addField('#form-frame', [
    {
        rule: 'required',
        errorMessage: 'Укажите корпус'
    }
])
.addField('#form-entrance', [
    {
        rule: 'required',
        errorMessage: 'Укажите подъезд'
    }
])
.addField('#form-floor', [
    {
        rule: 'required',
        errorMessage: 'Укажите  этаж'
    }
])

$('document').ready(function() {
    $('#btn-addres').on('click', function() {
      $('input[required]').addClass('red');
      
    });
  });