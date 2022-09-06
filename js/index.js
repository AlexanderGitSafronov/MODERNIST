// КЛИК ПО ЛАЙКУ
var tableElements = document.querySelectorAll(".like");

tableElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("active__like");
  });
});

// МОДЕЛЬНОЕ ОКНО
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () { 
  myInput.focus()
})



var exampleModal = document.getElementById('exampleModal');

exampleModal.addEventListener('show.bs.modal', function (event) { 
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-* attributes
  var recipient = button.getAttribute('data-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})