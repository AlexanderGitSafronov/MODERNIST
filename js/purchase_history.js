let timeout = null;
function openDetail(button) {
  button.innerHTML = 'Свернуть';
  const collapseContent = button
    .closest('.purchase__history_order')
    .nextSibling.nextSibling.querySelector('.order__details_open_color_op');
  button.closest('.order__details_open_color').style.backgroundColor = '#FEF7F0';
  button.closest('.order__details_open_color').style.borderColor = '#999A81';
  collapseContent.style.backgroundColor = '#FEF7F0';
  collapseContent.style.borderColor = '#999A81';
}

function closeDetail(button) {
  button.innerHTML = 'Детали заказа';
  const collapseContent = button
    .closest('.purchase__history_order')
    .nextSibling.nextSibling.querySelector('.order__details_open_color_op');

  button.closest('.order__details_open_color').style.backgroundColor = '#fcf8f4';
  button.closest('.order__details_open_color').style.borderColor = 'rgba(153, 154, 129, 0.5)';
  collapseContent.style.backgroundColor = '#fcf8f4';
  collapseContent.style.borderColor = 'rgba(153, 154, 129, 0.5)';

  

}

function waitingForPayment(event) {
  clearTimeout(timeout);
  if (event.target.innerHTML === 'Детали заказа') {
    timeout = setTimeout(function () {
      openDetail(event.target);
    }, 0);
  } else if (event.target.innerHTML === 'Свернуть') {
    timeout = setTimeout(function () {
      closeDetail(event.target);
    }, 0);
  }
}

