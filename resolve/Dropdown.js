/**
 * Модуль создания конструктора для Dropdown
 */
(function (window) {

    const defaultOptions = {
        cssSels: {
            Main: {
                listContainer: '>ul',
                listSelector: '>div'
            },
            list: '>ul',
            button: '>div'
        },
        // класс-переключатель видимости списка
        expandClassName: 'expanded',

        // класс активного элемента списка
        activeListItemClassName: 'active'
    };

    const dropDownOptions = {
        _Handlers: {
            //'self', 'dom', 'model', 'set', 'pubsub', 'opts'
            dom: {
                'click:button': function () {
                    // по клику на кнопку разворачиваем список
                    this.expand();
                },

                'click:list': function (event) {
                    // ловим клик на корневом элементе списка и определяем с какого именно элмента всплыло событие
                    let target = event.target;
                    let listContainer = this._elems.listContainer[0];
                    // если клик был не на LI, значит поднимемся до ближайшего LI
                    if (target.tagName != 'li') {
                        // странный случай - клинули в списке, но не нашли нужного элемента списка - тогда ничего не делаем
                        if (!(target = target.closest('li')) || target.closest('ul') != listContainer) return;
                    }

                    // на задизейбленных элементах ничего не делаем
                    if (target.matches('[disabled]')) return;

                    const activeClass = this._opts.activeListItemClassName;

                    // уберем класс-признак активного элемента у предыдущего активного элемента
                    for (let li of listContainer.querySelectorAll('li.' + activeClass)) {
                        li.classList.remove(activeClass);
                    }

                    // пометим выбранный элемент как активный
                    target.classList.add(activeClass);

                    let targetText = this.getLiText(target);
                    this._trigger('activeItemChanged', targetText);

                    // сообщим имя выбранного элемента
                    console.log(`Menu item "${targetText}" has been selected`);

                    // и скроем список
                    this.collapse();
                }
            }
        },

        _Init: function () {
            // отследим клики за пределами дропдауна
            window.addEventListener('click', (event) => {
                let target = event.target;
                // если клик был не на кнопке и не внутри списка...
                if (target && target != this._elems.listSelector[0]
                    && target.closest('ul') != this._elems.listContainer[0]) {
                    // ... тогда скроем список
                    this.collapse();
                }
            });
        },

        /**
         * возвращает наименование элемента меню
         * @param {HTMLElement} li Элемент меню
         * @returns {string} Наименование элемента
         */
        getLiText: function (li) {
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

    const Constructors = window.getNameSpace('ru.mail.cpf.Basic.Constructors');
    const Dropdown = Constructors.getView(dropDownOptions, defaultOptions, null, 'Dropdown');

})(window);