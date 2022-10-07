$(".button-pay").click(function() { // ID откуда кликаем
    $('html, body').animate({
    scrollTop: $(".order-form").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });