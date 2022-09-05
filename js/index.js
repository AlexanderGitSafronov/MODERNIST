// КЛИК ПО ЛАЙКУ
var tableElements = document.querySelectorAll(".like");

tableElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("active__like");
  });
});
