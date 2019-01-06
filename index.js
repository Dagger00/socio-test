var elements = document.getElementsByClassName('choose');
elements[0].addEventListener('click', function () {
  document.getElementsByClassName('app')[0].innerHTML = 'Поздравляем! Скорее всего Вы экстраверт!';
});
elements[1].addEventListener('click', function () {
  document.getElementsByClassName('app')[0].innerHTML = 'Поздравляем! Скорее всего Вы интроверт!';
});