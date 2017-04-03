/**
 * Модуль для инициализации логики
 */
(function (window) {
    'use strict';

    // возьмём первый экземпляр дропдауна
    const firstDropDown = window.Dropdowns.instances[0];

    // найдём HTMLElement для отображения изменений в дропдауне
    const messageDemonstrator = document.querySelector('.message-demonstrator');

    // определим обработчики событий для первого дропдауна
    firstDropDown._addEventTypes({
        // повесим обработчик на событие
        'activeItemChanged': function( text ){
            messageDemonstrator.innerHTML = text;
            btnSaveState.disabled = false;
        }
    });

    // сюда сохраняем состяние первого дропдауна
    let dropDownState = null;

    // кнопка сохранения сосстояния
    const btnSaveState = document.querySelector('button.save-state');
    btnSaveState.disabled = true;

    // повесим обработчик на событие клика на кнопке сохранения
    btnSaveState.addEventListener('click', function () {
        btnRestoreState.disabled = false;
        // получаем состояние
        dropDownState = firstDropDown.getState();
    });

    // кнопка восстановления состояния
    const btnRestoreState = document.querySelector('button.restore-state');
    btnRestoreState.disabled = true;

    // повесим обработчик на событие клика на кнопке востановления
    btnRestoreState.addEventListener('click', function(){
        if (dropDownState)  {
            // восстанавливаем состояние
            firstDropDown.setState(dropDownState);
            dropDownState = null;
        }
        btnSaveState.disabled = true;
        btnRestoreState.disabled = true;

    });


})(window);


