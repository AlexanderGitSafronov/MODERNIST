const choiseSizeCardSmall = document.querySelector(".show__cards_small");

choiseSizeCardSmall.addEventListener("click", () => {
  document.querySelector(".big__content_defoult_second").style.display = "none";
  document.querySelector(".small__content_mobil_second").style.display =
    "block";
  document
    .querySelector(".show__cards_small")
    .classList.add("choose__card_size_active");
  document
    .querySelector(".show__cards_big")
    .classList.remove("choose__card_size_active");
});

const choiseSizeCardBig = document.querySelector(".show__cards_big");

choiseSizeCardBig.addEventListener("click", () => {
  document.querySelector(".big__content_defoult_second").style.display =
    "block";
  document.querySelector(".small__content_mobil_second").style.display = "none";
  document
    .querySelector(".show__cards_big")
    .classList.add("choose__card_size_active");
  document
    .querySelector(".show__cards_small")
    .classList.remove("choose__card_size_active");
});

const openBlockButtonItem = document.querySelector(
  ".product__show_button button"
);

openBlockButtonItem.addEventListener("click", () => {
  document.querySelector(".hiden__bllock_item").style.display = "block";
  document.querySelector(".product__show_item").style.display = "none";
});

const openBlockButtonItemMobile = document.querySelector(
  ".product__show_button_mobile button"
);

openBlockButtonItemMobile.addEventListener("click", () => {
  document.querySelector(".hiden__bllock_item_mobile").style.display = "block";
  document.querySelector(".product__show_item_mobile").style.display = "none";
});

function OpenHeadAll() {
  $(".container__header_all").removeClass("header__bg_z");
  $(".menu__all_furniture-header-fixed").removeClass("header__bg_z_menu");
}
// КЛИК ПО МЕНЮ КОРЗИНЫ
$(".footer__menu_item_basket").click(function () {
  if (
    $(".container__header_all").hasClass("header__bg_z") &&
    $(".menu__all_furniture-header-fixed").hasClass("header__bg_z_menu")
  ) {
    setTimeout(OpenHeadAll, 500);
  }

  if (
    $(".container__header_all").hasClass("header__bg_z_proff") &&
    $(".menu__all_furniture-header-fixed").hasClass("header__bg_z_menu_all")
  ) {
    setTimeout(HidenHeadAll, 0);
    setTimeout(HidenHeadProffAll, 0);
  }

  $(".container__header_all").addClass("header__bg_z");
  $(".menu__all_furniture-header-fixed").addClass("header__bg_z_menu");
});

$(".modal__mobil_basket .btn-close").click(function () {
  setTimeout(OpenHeadAll, 500);
});

// КЛИК ПО МЕНЮ КАТАЛОГА
$(".footer__menu_item_cataloge").click(function () {
  setTimeout(OpenHeadAll, 500);

  if (
    $(".container__header_all").hasClass("header__bg_z_proff") &&
    $(".menu__all_furniture-header-fixed").hasClass("header__bg_z_menu_all")
  ) {
    setTimeout(HidenHeadAll, 0);
    setTimeout(HidenHeadProffAll, 0);
  }
});

// КЛИК В МЕНЮ НА САЙТ ДЛЯ ПРОФФЕСИОНАЛОВ

function HidenHeadAll() {
  $(".container__header_all").removeClass("header__bg_z_proff");
}
function HidenHeadProffAll() {
  $(".menu__all_furniture-header-fixed").removeClass("header__bg_z_menu_all");
}

$(".website__professionals_burger").click(function () {
  $(".offcanvas__burger_menu_mobil").addClass("header__bg_z");
  $(".container__header_all").addClass("header__bg_z_proff");
  $(".menu__all_furniture-header-fixed").addClass("header__bg_z_menu_all");
});

$(".modal__site_proffesional_hide").click(function (event) {
  if (
    $(".container__header_all").hasClass("header__bg_z_proff") &&
    $(".menu__all_furniture-header-fixed").hasClass("header__bg_z_menu_all")
  ) {
    setTimeout(HidenHeadAll, 0);
    setTimeout(HidenHeadProffAll, 0);
  }
  if ($(".container__header_all").hasClass("header__bg_z_proff")) {
    $(".container__header_all").removeClass("header__bg_z_proff");
  }
});
