/***
 * Модуль создания жкземпляров дропдаунов
 */
(function (window) {
    'use strict';

    const Constructors = window.getNameSpace('ru.mail.cpf.Basic.Constructors');

    // возьмём конструктор из репозитория
    const Dropdown = Constructors._repo.get('Dropdown');

    // создадим первый экземпляр дропдауна
    const dropDown = new Dropdown({}, $('.first-dd'));

    // ...и второй экземпляр
    const secondDropDown = new Dropdown({
        // переопределим класс активного элемента списка
        activeListItemClassName: 'active-alt'
    }, $('.second-dd'));

    // создадим namespace для дропдаунов
    window.Dropdowns = {
        instances: [dropDown, secondDropDown]
    };

})(window);
