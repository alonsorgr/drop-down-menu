/**
 * DropDown Menu
 *
 * JQuery library for creating drop-down menus
 *
 * @link   https://github.com/alonsorgr/drop-down-menu
 * @file   This file defines the functionality of the JQuery plugin to create dynamic drop-down menus.
 * @author alonsorgr
 * @since  1.0.0
 */

(function ($) {

    var counter = 0;

    var methods = {
        init: function (id) {

            let nav = document.createElement('nav');
            let navigation = document.createElement('ul');
            nav.appendChild(navigation);

            navigation.id = 'navigation';
            navigation.setAttribute('class', 'navigation');

            $(this).append(nav);
        },

        addSection: function (index, title) {
            $('.navigation').append(document.createElement('ul').appendChild(new Section(index, title)));
            _displayEvent('#header-'.concat(index), index);
            $('#section-'.concat(index)).hide();
        },

        addSubSection: function (index, title) {
            $('#item-'.concat(index)).append(document.createElement('ul').appendChild(new SubSection(index, title)));
            _displayEvent('#header-'.concat(index), index);
            $('#section-'.concat(index)).hide();
        },

        addItem: function (index, title, href) {
            $('#section-'.concat(index)).append(new Item(counter++, title, href));
        },
    }

    function _displayEvent(id, index) {
        $(id).on({
            mouseenter: function () {
                $('#section-'.concat(index)).show();
            },
            mouseleave: function () {
                $('#section-'.concat(index)).hide();
            }
        });
    }

    $.fn.dropDownMenu = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            console.log('The function  ' + method + ' does not exist in jQuery.dropDownMenu');
        }
    };

})(jQuery);

const ITEM_CLASS = 'item';
const LINK_CLASS = 'link';

class Item {

    constructor(id, text, href) {
        this._setId(id);
        this._setText(text);
        this._setHref(href);
        this._setItem();
        this._setLink();
        return this.item;
    }

    _setId(id) {
        this.id = id;
    };

    _setText(text) {
        this.text = text;
    }

    _setHref(href) {
        this.href = href;
    }

    _setItem(id) {
        this.item = document.createElement('li');
        this.item.setAttribute('class', ITEM_CLASS);
        this.item.id = 'item-'.concat(this.id);
    }

    _setLink() {
        let link = document.createElement('a');
        link.setAttribute('class', LINK_CLASS);
        link.id = 'link-'.concat(this.id);
        link.href = this.href;
        link.textContent = this.text;
        this.item.appendChild(link);
    }
}

class Section {

    constructor(index, title) {
        this.header = document.createElement('li');
        this.section = document.createElement('div');
        this.header.id = 'header-'.concat(index);
        this.section.id = 'section-'.concat(index);
        let text = document.createTextNode(title);
        this.header.appendChild(text);
        this.header.appendChild(this.section);
        return this.header;
    }
}

class SubSection {

    constructor(index, title) {
        this.header = document.createElement('li');
        this.container = document.createElement('ul');
        this.section = document.createElement('div');
        this.header.id = 'header-'.concat(index);
        this.section.id = 'section-'.concat(index);
        let text = document.createTextNode(title);
        this.header.appendChild(text);
        this.header.appendChild(this.section);
        this.container.appendChild(this.header);
        return this.container;
    }
}