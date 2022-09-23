$('document').ready(function() {
    $('#ordering__button').on('click', function() {
      $('input[required]').addClass('red');
      
    });
  });


  let validation = new JustValidate('#ordering__validation')



validation.addField('#name__ordering', [
  {
    rule: 'required',
    errorMessage: 'Укажите имя'
  }
])
.addField('#last__name_ordering', [
    {
        rule: 'required',
        errorMessage: 'Укажите фамилию'
      }

])
.addField('#phone__ordering', [
    {
        rule: 'required',
        errorMessage: 'Укажите номер'
      }

])

.addField('#email__ordering', [
    {
        rule: 'required',
        errorMessage: 'Укажите электронную почту'
      },
      {
        rule: 'email',
        errorMessage: 'Почта указана не верно'
      }

])




// ЮР ЛИЦО
.addField('#how__name_entity', [
    {
        rule: 'required',
        errorMessage: 'Как к вам обращаться?'
      }

])
.addField('#phone__entity', [
    {
        rule: 'required',
        errorMessage: 'Укажите телефон'
      }

])

.addField('#email__entity', [
    {
        rule: 'required',
        errorMessage: 'Укажите электронную почту'
      },
      {
        rule: 'email',
        errorMessage: 'Почта указана не верно'
      }

])

.addField('#name__organization_entity', [
    {
        rule: 'required',
        errorMessage: 'Укажите название организации'
      }

])
.addField('#name__seal_entity', [
    {
        rule: 'required',
        errorMessage: 'Укажите название (для печати)'
      }

])
.addField('#kpp__entity', [
    {
        rule: 'required',
        errorMessage: 'Укажите КПП'
      }

])
.addField('#ihh__entity', [
    {
        rule: 'required',
        errorMessage: 'Укажите ИНН'
      }

])
.addField('#adress__entity', [
    {
        rule: 'required',
        errorMessage: 'Укажите юридический адрес'
      }

])
.addField('#mailing__address_entity', [
    {
        rule: 'required',
        errorMessage: 'Укажите почтовый адрес'
      }

])

// ДОСТАВКА
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

// Другой получатель
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