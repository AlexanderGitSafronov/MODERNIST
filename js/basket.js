let promo = document.querySelector('.promo');

promo.addEventListener('input', changeBackground);
function changeBackground() {
    if (promo.value !== '') {
      document.querySelector('.basket__promocode button').style.background = '#999A81';
      document.querySelector('.basket__promocode input:focus').style.background = '#fff';
    } else {
      document.querySelector('.basket__promocode button').style.background = '#C7C8BB';
      document.querySelector('.basket__promocode input:focus').style.background = '#FEF7F0';
    }
  }