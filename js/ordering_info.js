// Появление подсказки 

const infoLips = document.getElementsByClassName('insurance__content_info');



infoLips[0].addEventListener('mouseover', function() {
  const tooltip = document.getElementsByClassName('tooltip');
  tooltip[0].style.opacity = '1';
  tooltip[0].style.visibility = 'visible';
} )

infoLips[0].addEventListener('mouseout', function() {
    const tooltip = document.getElementsByClassName('tooltip');
    tooltip[0].style.opacity = '0';
    tooltip[0].style.visibility = 'hidden';
  } )