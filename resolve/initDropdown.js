(function (window) {
    'use strict';

    var dropdownParams = {
        // cssSels: {
        //     Main: {
        //         textContainer: '.text-container'
        //     }
        // }

    };


    var dropDown = window.ru.mail.cpf.modules.Dropdown(dropdownParams, null, $('.dd'));

    dropDown._addEventTypes({
        'activeItemChanged': function(){

        }
    });

})(window);
