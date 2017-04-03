/**
 * Модуль для инициализации логики
 */
(function (window) {
    'use strict';

    // возьмём первый экземпляр дропдауна
    const firstDropDown = window.Dropdowns.instances[0];

    // найдём HTMLElement для отображения изменений в дропдауне
    const messageDemonstrator = document.querySelector('.messageDemonstrator');

    // определим обработчики событий для первого дропдауна
    firstDropDown._addEventTypes({
        // повесим обработчик на событие
        'activeItemChanged': function( text ){
            messageDemonstrator.innerHTML = text;
        }
    });


})(window);


