


function clickOrderDetails() {
    if(document.querySelector('.click__order__details').innerHTML === 'Детали заказа') {
        document.querySelector('.click__order__details').innerHTML = 'Свернуть';
        document.querySelector('.order__details_open_color').style.backgroundColor = '#FEF7F0';
        document.querySelector('.order__details_open_color').style.borderColor = '#999A81';
        document.querySelector('.order__details_open_color_op').style.backgroundColor = '#FEF7F0';
        document.querySelector('.order__details_open_color_op').style.borderColor = '#999A81';
        
    } else if (document.querySelector('.click__order__details').innerHTML === 'Свернуть'){
        document.querySelector('.click__order__details').innerHTML = 'Детали заказа';
        document.querySelector('.order__details_open_color').style.backgroundColor = '#fcf8f4';
        document.querySelector('.order__details_open_color').style.borderColor = 'rgba(153, 154, 129, 0.5)';
        document.querySelector('.order__details_open_color_op').style.backgroundColor = '#fcf8f4';
        document.querySelector('.order__details_open_color_op').style.borderColor = 'rgba(153, 154, 129, 0.5)';
    }
    
    
}