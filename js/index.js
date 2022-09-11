// КЛИК ПО ЛАЙКУ
var tableElements = document.querySelectorAll(".like");

tableElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("active__like");
  });
});



//ПОЯВЛЯЕТСЯ МЕНЮ ХЕДЕР СКРОЛЛ
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederCopy = $('.header__scroll');
  
      if ( scrollTop < 200) {
          hederCopy.removeClass('header__bg ')
      } else {
          hederCopy.addClass('header__bg ');
      }
  });

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederCopy = $('.header__scroll');
  
      if ( scrollTop < 200) {
          hederCopy.removeClass('header__bg ')
      } else {
          hederCopy.addClass('header__bg ');
      }
  });
// $(window).scroll(function(){
//     if ($(this).scrollTop() > 100) {
//         $('.header__scroll').addClass('header__bg');
//         $('.head__text').addClass('head__text_scroll');
//     } else {
//         $('.head__text').removeClass('head__text_scroll');
//         $('.header__scroll').removeClass('header__bg');
//     }
// });
// МЕНЮ ФИКСЕД ВСЕХ ПРОДУКТОВ

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 90) {
//         // function sayHi() {
//             $('.menu__all_furniture-header-bg').addClass('menu__all_furniture-header-fixed');
//             $('.head__tex_furniture').addClass('head__furniture_scroll');
//             $('.menu__all_furniture-header').addClass('menu__all_furniture-opacity');
//         //   }
//         //   setTimeout(sayHi, 400);
//     } else {
//             $('.menu__all_furniture-header').removeClass('menu__all_furniture-opacity');
//             $('.head__tex_furniture').removeClass('head__furniture_scroll');
//             $('.menu__all_furniture-header-bg').removeClass('menu__all_furniture-header-fixed');
//     }
// });

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederEl = $('.menu__all_furniture-header-bg');
      if ( scrollTop < 10) {
          hederEl.removeClass('menu__all_furniture-header-fixed')
      } else {
  
          hederEl.addClass('menu__all_furniture-header-fixed');
  
      }
  });

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederEl = $('.container__header_all');
      if ( scrollTop < 10) {
          hederEl.removeClass('container__header_all_pad')
      } else {
  
          hederEl.addClass('container__header_all_pad');
  
      }
  });

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederEl = $('.offcanvas-header');
      if ( scrollTop < 10) {
          hederEl.removeClass('offcanvas-header_pad')
      } else {
  
          hederEl.addClass('offcanvas-header_pad');
  
      }
  });
//   КОРЗИНА ПОСЛЕ ВЫЕЗДА
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var hederEl = $('.offcanvas-header_right ');
      if ( scrollTop < 10) {
          hederEl.removeClass('offcanvas-header_right-pad')
      } else {
  
          hederEl.addClass('offcanvas-header_right-pad');
  
      }
  });

//   ПОИСКОВИК
 document.querySelector(".svg__click ").addEventListener("click", function () {
    $('.search').toggleClass("search__fixed");
    $('.svg__click').toggleClass("search__active");
    
  });

  
// СЕЛКТ ВЫБОРА НА СТРАНИЦЕ КАРТОЧКИ О ТОВАРЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!
function show(anything) {
    document.querySelector('.textBox').value = anything;
} 
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function() {
    dropdown.classList.toggle('dropdown__active');
}

function showTwo(any) {
    document.querySelector('.textBox__two').value = any;
} 
let dropdown__two = document.querySelector('.dropdown__two');
dropdown__two.onclick = function() {
    dropdown__two.classList.toggle('dropdown__active_two');
}











// goods_card
$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.in").each(function(){
      $(this).siblings(".goods__card_header-text").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
    });
  
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
      $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    }).on('hide.bs.collapse', function(){
      $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    });
  });


// let hoho = document.querySelector('.hoho');
// hoho.addEventListener('click', () =>  {
//     if(hoho.classList.contains('glyphicon-plus')) {
//         hoho.classList.add('glyphicon-minus');
//         hoho.classList.remove('glyphicon-plus');
//     } else {
//         hoho.classList.add('glyphicon-plus');
//         hoho.classList.remove('glyphicon-minus');
//     }
// })






class SikDropdown {
    ele = null;
    dropdown = null;
    el = {
        input: null,
        toggle: null,
        list: null
    };

    items = {};
    count = 0;
    _cbs = [];
    defaults = {
        name: "sik-input",
        value: "",
        placeholder: "Select Item"
    };
    options = {};
    constructor(identifier, opt = {}) {
        this.ele = document.querySelector(identifier);
        if (this.ele) {
            //Set options:
            this.setOptions(opt);
            //Create hidden input:
            this.el.input = document.createElement("input");
            this.el.input.setAttribute("type", "hidden");
            this.el.input.setAttribute("name", this.options.name);
            this.el.input.setAttribute("value", "");
            this.ele.prepend(this.el.input);

            //Select list:
            this.el.list = this.ele.querySelector(".dropdown-menu");
            this._fillItems();
            //Set toggler:
            this.el.toggle = this.ele.querySelector(".dropdown-toggle");
            this.dropdown = new bootstrap.Dropdown(this.el.toggle);
            //Set initial value & placeholder:
            this.setValue(this.options.value);
            //Set core handlers:
            this._attachCoreHandlers();
            this.trigger("init");
        } else {
            console.warn("Cant create a Sik Dropdown - selector is invalid");
        }
    }
    setOptions(opt) {
        this._extend(this.options, this.defaults, opt);
    }
    addItem(value, label) {
        if (!this.items.hasOwnProperty(value)) {
            let itemContainer = document.createElement("li");
            itemContainer.innerHTML = `<span class="dropdown-item" data-value="${value}">${label}</span>`;
            this.el.list.appendChild(itemContainer);
            let item = itemContainer.querySelector(".dropdown-item");
            this.count++;
            this.items[value] = {
                el: item,
                value: value,
                label: item.innerHTML.trim()
            };
            item.addEventListener("click", this.trigger.bind(this, "select"));
        }
    }
    removeItem(value) {
        if (this.items.hasOwnProperty(value)) {
            this.items[value].el.closest("li").remove();
            this.count--;
            delete this.items[value];
            if (this.value() === value) {
                this.setValue(null);
            }
        }
    }
    setValue(value, close = true) {
        if (this.items.hasOwnProperty(value)) {
            this.el.input.setAttribute("value", value);
            this.el.toggle.innerHTML = this.items[value].label;
        } else {
            this.el.input.setAttribute("value", "");
            if (this.options.placeholder) {
                this.el.toggle.innerHTML = this.options.placeholder;
            }
        }
        if (close) this.dropdown.hide();
    }
    value() {
        return this.el.input ? this.el.input.value : null;
    }
    text() {
        let value = this.value();
        if (this.items.hasOwnProperty(value)) {
            return this.items[value].label.trim();
        }
        return "";
    }
    open() {
        if (this.dropdown) {
            this.dropdown.show();
        }
    }
    close() {
        if (this.dropdown) {
            this.dropdown.hide();
        }
    }
    toggle() {
        if (this.dropdown) {
            this.dropdown.toggle();
        }
    }
    attachHandler(ev, cb) {
        this._cbs.push({
            ev: ev,
            fn: cb
        });
    }
    detachHandler(ev) {
        for (let i = 0; i < this._cbs.length; i++) {
            if (this._cbs[i].ev === ev) {
                this._cbs.splice(i, 1);
            }
        }
    }
    trigger(ev) {
        //console.log(this, ev, el);
        for (let cb of this._cbs) {
            let event = cb.ev.split(".");
            if (event.length > 1 && event[1] === ev) {
                let [, ...args] = arguments;
                cb.fn.call(this, ...args);
            }
        }
    }
    _fillItems() {
        if (this.el.list) {
            let items = this.el.list.querySelectorAll(".dropdown-item");
            let i = items.length;
            this.count = items.length;
            while (i--) {
                const value = items[i].getAttribute("data-value");
                this.items[value] = {
                    el: items[i],
                    value: value,
                    label: items[i].innerHTML.trim()
                };
                items[i].addEventListener(
                    "click",
                    this.trigger.bind(this, "select")
                );
            }
        }
        console.log(this.items);
    }
    _attachCoreHandlers() {
        this.attachHandler("core.select", function (item = null) {
            if (typeof item === "object" && "target" in item) {
                let selected = item.target.hasAttribute("data-value")
                    ? item.target
                    : item.target.closest("[data-value]");
                let value = selected
                    ? selected.getAttribute("data-value")
                    : null;
                this.setValue(value);
            }
        });
        this.attachHandler("core.open", function () {
            console.log("open", arguments);
        });
        this.attachHandler("core.close", function () {
            console.log("close", arguments);
        });
        this.attachHandler("core.init", function () {});
        //Bind to dropdown:
        this.el.toggle.addEventListener(
            "show.bs.dropdown",
            this.trigger.bind(this, "open")
        );
        this.el.toggle.addEventListener(
            "hide.bs.dropdown",
            this.trigger.bind(this, "close")
        );
    }
    _extend() {
        for (var i = 1; i < arguments.length; i++)
            for (var key in arguments[i])
                if (arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }
}

//This how we intiate it and extend the bs funcionality:
var dropdown = new SikDropdown("#sik-select", {
    name: "select-example", // the input field name
    placeholder: "Select Currency",
    value: null
});

//adding a callback just for demo:
dropdown.attachHandler("myhandler.select", function () {
    console.log("select", this);
    let tag = document.getElementById("selected-example");
    tag.innerText = this.value();
});
