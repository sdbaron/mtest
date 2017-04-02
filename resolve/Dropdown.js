(function (window) {

    var defaultOptions = {
        cssSels: {
            Main: {
                listContainer: '>ul',
                listSelector: '>div'
            },
            button: 'div',
            list: '>ul'
        },
        // класс-переключатель видиммости списка
        expandClassName : 'expanded',

        // класс активного элемента списка
        activeListItemClassName : 'active'
    };

    var dropDownOptions = {
        _Handlers: {
            //'self', 'dom', 'model', 'set', 'pubsub', 'opts'
            dom: {
                'click:button': function () {
                    // по клику на кнопку разворачиваем список
                    this.expand();
                },

                'click:list': function(event){
                    // ловим клик на корневом элементе списка и определяем с какого именно элмента всплыло событие
                    let target = event.target;
                    let listContainer = this._elems.listContainer[0];
                    // если клик был не на LI, значит поднимемся до ближайшего LI
                    if (target.tagName != 'li') {
                        // странный случай - клинули в списке, но не нашли нужного элемента списка - тогда ничего не делаем
                        if (!(target = target.closest('li')) || target.closest('ul') != listContainer ) return;
                    }
                    const activeClass = this._opts.activeListItemClassName;
                    for( let li of listContainer.querySelectorAll('li.' + activeClass)){
                        li.classList.remove(activeClass);
                    }
                    target.classList.add(activeClass);

                    console.log(`Menu item "${this.getLiText(target)}" has been selected`);
                    this.collapse();
                }
            }
        },

        _Init: function () {
            console.log('_Init вызывается первым');
        },

        getLiText: function (li){
            return li.innerText;
        },

        /**
         * показывает список
         */
        expand(){
            const container = this._elems.parent[0];
            container.classList.add(this._opts.expandClassName);
        },

        /**
         * прячет список
         */
        collapse(){
            const container = this._elems.parent[0];
            container.classList.remove(this._opts.expandClassName);
        }

    };

    var Dropdown = window.ru.mail.cpf.Basic.getView( dropDownOptions, defaultOptions, null, 'Dropdown');

    // Публикуем ссылку на конструктор
    window.getNameSpace('ru.mail.cpf.modules').Dropdown = Dropdown;

})(window);