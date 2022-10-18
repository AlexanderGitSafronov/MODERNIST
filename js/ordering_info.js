// Появление подсказки 

const infoLips = document.getElementsByClassName('insurance__content_info');

infoLips.addEventListener('mouseover', function() {
  const tooltip = document.getElementsByClassName('tooltip');
  tooltip.classList.add('tooltip__op');
  tooltip.style.visibility = 'visible';
} )