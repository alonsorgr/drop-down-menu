/**
 * DropDown Menu
 * 
 * @memberof    jquery.dropdown-menu
 *
 * @link        https://github.com/alonsorgr/drop-down-menu
 * @file        This file defines the functionality of the JQuery plugin to create dynamic drop-down menus.
 * @author      alonsorgr
 * @since       1.0.0
 */

(function ($) {

    var methods = {
        init: function (id) {
            let nav = new NavBar(id);
            $(this).append(nav);
        },

        addSection: function (id, title) {
            $(this).append(new Section(id, title));
            menuEvent('#section-'.concat(id), id);
        },

        delSection: function () {
            $(this).remove();
        },

        addSubSection: function (id, itemID) {
            $(this).append(new SubSection(id));
            menuEvent('#item-'.concat(itemID), id);
        },

        delSubSection: function () {
            $(this).remove();
        },

        addItem: function (id, text, url) {
            $(this).append(new Item(id, text, url));
        },

        delItem: function () {
            $(this).remove();
        }
    }

    function menuEvent(id, index) {
        $('#container-'.concat(index)).hide();
        $(id).on({
            mouseenter: function () {
                $('#container-'.concat(index)).slideDown(200)
            },
            mouseleave: function () {
                $('#container-'.concat(index)).slideUp(200)
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

/**
 * CSS classes constants
 */
const ITEM = 'item';
const SECTION = 'section';
const SUB_SECTION = 'sub-section';
const NAVBAR = 'navbar';
const HEADER = 'header';
const CONTAINER = 'item-container';
const TITLE = 'title';

/**
 * Class Item
 *
 * @since       1.0.0
 * @access      private
 */
class Item {

    /**
     * Item constructor
     * 
     * @param {Integer} id 
     * @param {String}  text 
     * @param {String}  url 
     */
    constructor(id, text, url) {
        this.item = document.createElement('a');
        this.item.setAttribute('class', ITEM);
        this.item.text = text;
        this.item.href = url;
        let container = document.createElement('li');
        container.id = 'item-'.concat(id);
        container.setAttribute('class', CONTAINER);
        container.appendChild(this.item);
        return container;
    }
}

/**
 * Class Section
 *
 * @since       1.0.0
 * @access      private
 */
class Section {

    /**
     * Section  constructor
     * 
     * @param {Integer} id 
     */
    constructor(id, title = '') {

        this.section = document.createElement('ul');
        this.title = document.createElement('span');
        this.title.appendChild(document.createTextNode(title))
        this.container = document.createElement('div');
        this.title.id = 'title-'.concat(id);
        this.section.appendChild(this.title);
        this.section.id = 'section-'.concat(id);
        this.container.id = 'container-'.concat(id);
        this.container.setAttribute('class', SECTION);
        this.section.setAttribute('class', HEADER);
        this.title.setAttribute('class', TITLE);
        this.section.appendChild(this.container);
        return this.section;
    }
}

/**
 * Class SubSection
 *
 * @since       1.0.0
 * @access      private
 */
class SubSection {

    /**
     * Section  constructor
     * 
     * @param {Integer} id 
     */
    constructor(id) {

        this.section = document.createElement('ul');
        this.container = document.createElement('div');
        this.section.id = 'section-'.concat(id);
        this.container.id = 'container-'.concat(id);
        this.container.setAttribute('class', SUB_SECTION);
        this.section.setAttribute('class', HEADER);
        this.section.appendChild(this.container);
        return this.section;
    }
}

/**
 * Class NavBar
 *
 * @since  1.0.0
 * @access private
 */
class NavBar {

    /**
     * NavBar constructor
     * 
     * @param {Integer} id 
     */
    constructor(id = 0) {
        this.nav = document.createElement('nav');
        this.nav.setAttribute('class', NAVBAR);
        this.nav.id = 'nav-'.concat(id);
        return this.nav;
    }
}
