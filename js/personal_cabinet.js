//   ПЕРСОНАЛЬНЫЙ КАБИНЕТ


function showAdresPersonalCabinet(){
    document.getElementById('ordering__input_personal_cabinet').style.display = 'block';
    document.getElementById('personal__cabinet_add_adress').style.display = 'none';
  }

//   function addAdresPersonalCabinet(){
//     document.getElementById('way__to_get_personal_cabinet').style.display = 'block';
//     document.getElementById('ordering__input_personal_cabinet').style.display = 'none';
//   }

    const personalCabinetAddres = document.querySelector('.push__adress');

  window.addEventListener('click', function(event){



    if(event.target.hasAttribute('data-adress')){
      const orderingInputPersonalCabinet =  event.target.closest('.ordering__input_personal_cabinet');
      
     const addresInfo = {
         id: ordering__input_personal_cabinet.dataset.id,
         nameIput: ordering__input_personal_cabinet.querySelector('.input__name').getAttribute('value'),
         cytyInput: ordering__input_personal_cabinet.querySelector('.input__cyty').getAttribute('value'),
         streetInput: ordering__input_personal_cabinet.querySelector('.input__street').getAttribute('value'),
         homeInput: ordering__input_personal_cabinet.querySelector('.input__home').getAttribute('value'),
         frameInput: ordering__input_personal_cabinet.querySelector('.input__frame').getAttribute('value'),
         entranceInput: ordering__input_personal_cabinet.querySelector('.input__entrance').getAttribute('value'),
         floorInput: ordering__input_personal_cabinet.querySelector('.input__floor').getAttribute('value')
     }
     console.log(addresInfo);

     const addresItemHTML = `<div class="way__to_get way__to_get_personal_cabinet" id="way__to_get_personal_cabinet" >
     <div class="way__to_get_discription">
         <h5>${addresInfo.nameIput}(по умолчанию) </h5>
     <p class="way__to_get_adress">Краснодарский край, г. Краснодар, ул. Красная 176 /5, под. 2, 
         этаж 12, кв. 356</p>
     </div>
     <div class="way__to_get-btn">
         <button class="way__to_get-btn_first">Редактировать</button>
         <button class="way__to_get-btn_second" onclick="deleteNewAddres();">Удалить</button>
     </div>
 </div>`;

     const addresAddNewAddres = `<div class="personal__cabinet_new_addres" id="personal__cabinet_new_addres" onclick="shoNewAddres();">
     <div class="personal__cabinet_new_addres_plus">
                 <div class="container__basket_count_plus basket_count" data-action="plus">
                     <span></span>
                 </div>
                 <div class="personal__cabinet_new_addres_text">
                     <h5>Добавить адрес</h5>
                 </div>
     </div>
 </div>`;

     

 personalCabinetAddres.insertAdjacentHTML('beforeend', addresItemHTML);
 personalCabinetAddres.insertAdjacentHTML('beforeend', addresAddNewAddres);

 document.getElementById('way__to_get_personal_cabinet').style.display = 'block';
 document.getElementById('ordering__input_personal_cabinet').style.display = 'none';
 

    }
  })


    let displayAddres =  false;



  function shoNewAddres(){
    displayAddres = !displayAddres;
    
    if(displayAddres) {
        document.getElementById('personal__cabinet_new_addres').style.display = 'none';
        document.getElementById('ordering__input_personal_cabinet').style.display = 'block';
    } else {
        document.getElementById('ordering__input_personal_cabinet').style.display = 'none';
        
    }
    
    
  }

  function deleteNewAddres(){
    
    document.getElementById('way__to_get_personal_cabinet').style.display = 'none';
  }


//   document.querySelector('.personal__cabinet_new_addres').addEventListener('click', function () {
//     document.getElementById('personal__cabinet_new_addres').style.display = 'none';

//           const addNewAddres = `<div class="ordering__input ordering__input_personal_cabinet" id="ordering__input_personal_cabinet" data-id="01">
//         <h4>Новый адрес</h4>
//        <div class="adress__express" >
//         <form class="organization__w" action="">
//             <input type='text' name='cyty' class='input__name' value="1212"  placeholder='Название адреса (пример “Дом, офис”)'/>
            
//         </form>
//         <form class="adress__express_two_form" action="">
//             <input type='text' name='cyty' class='input__cyty' value=""  placeholder='Город'/>
//             <input type='text' name='street' class='input__street' value=""  placeholder='Улица'/>
//         </form>
//         <form class=" four__input" action="">
//             <input type='text' name='home' class='input__home' value=""  placeholder='Дом'/>
//             <input type='text' name='frame' class='input__frame' value=""  placeholder='Корпус'/>
//             <input type='text' name='entrance' class='input__entrance' value=""  placeholder='Подъезд'/>
//             <input type='text' name='floor' class='input__floor' value=""  placeholder='Этаж'/>
//         </form>
        
//        </div>

//        <div class="insurance">                  
//         <div class="insurance__content">
//             <form action="">
//                 <input type="checkbox" class="custom-checkbox_modal custom-checkbox_modal_insurance" id="insurance__input">
//                 <label for="insurance__input" class="insurance__input"  >Установить в качестве адреса по умолчанию</label>
//             </form>
//         </div>

//         <div class="ordering__input_personal_cabinet-btn">
//             <button data-adress >добавить адрес</button>
//         </div>
        
    
//         </div>
//     </div>`;

//           personalCabinetAddres.insertAdjacentHTML('beforeend', addNewAddres);
            
//       })
  