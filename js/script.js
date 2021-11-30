// функція визначення пристроїв на тачскрінах
let isMobile = {
  Android: function() {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
}

window.onload = function () { // функція, що спрацьовує коли все на сторінці загрузиться
  document.addEventListener("click", documentActions); // вішаю оброблювач - прослуховую весь документ на подію "click"

  // Actions делегування події "click"
  // створюю функцію
  function documentActions(e) {
    // створюю константу targetElement з присвоєнням нажатого об'єкта
    const targetElement = e.target;
    // встановлюю умову
    if (window.innerWidth > 768 && isMobile.any()) {
      // роблю просіювання (прослуховую на наявність класу)
      if (targetElement.classList.contains('menu__arrow')) {
        // достукуюсь до батьківського елемента
        targetElement.closest('.menu__item').classList.toggle('_hover');
      }
      // для закриття підменю за кліком на "пустому" просторі
      if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
        _removeClesses(document.querySelectorAll('.menu__item._hover'), "_hover");
      }
    }
    // для додавання класу ._active до пошуку при кліку
    if (targetElement.classList.contains('search-form__icon')) {
      document.querySelector('.search-form').classList.toggle('_active');
    }
  }
}
