/**
 * DropDown Menu
 * @since       1.0.0
 * @access      private
 * @memberof    jquery.dropdown-menu
 *
 * @link        https://github.com/alonsorgr/drop-down-menu
 * @file        This file defines the functionality of the JQuery plugin to create dynamic drop-down menus.
 * @author      alonsorgr
 * @since       1.0.0
 */


 /**
  * CSS classes constants
  */
const ITEM_CLASS = 'item';
const SECTION_CLASS = 'section';
const NAVBAR_CLASS = 'navbar';

/**
 * Item Counter
 */
var itemCounter = 0;

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
        this.item.setAttribute('class', ITEM_CLASS);
        this.item.id = 'item-'.concat(id);
        this.item.text = text;
        this.item.href = url;
        return this.item;
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
    constructor(id) {
        this.menu = document.createElement('ul');
        this.menu.setAttribute('class', SECTION_CLASS);
        this.menu.id = 'menu-'.concat(id);
        this.container = document.createElement('div');
        this.elements = this.container.childNodes;
        this._setMenu(this.menu, this.container);
    }

    _setMenu(menu, container) {
        menu.appendChild(container);
    }

    /**
     * Get menu instance
     */
    get() {
        return this.menu;
    }

    /**
     * Get all items of menu
     */
    getItems() {
        return this.elements;
    }

    /**
     * Add item to menu
     * 
     * @param {Item} item 
     */
    addItem(item) {
        let li = document.createElement('li');
        li.appendChild(item);
        this.container.appendChild(li);
    }

    /**
     * Remove item from menu
     * 
     * @param {Integer} id 
     */
    delItem(id) {
        this.elements[id].remove();
    }

    /**
     * Add sub section to menu
     * 
     * @param {Integer} id 
     * @param {Menu} menu 
     */
    addSubSection(id, menu) {
        this.elements[id].appendChild(menu);
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
    constructor(id) {
        this.nav = document.createElement('nav');
        this.nav.setAttribute('class', NAVBAR_CLASS);
        this.nav.id = 'nav-'.concat(id);
        this.elements = this.nav.childNodes;
    }

    /**
     * Get navbar instance
     */
    get() {
        return this.nav;
    }

    /**
     * Get all sections
     */
    getSections() {
        return this.elements;
    }

    /**
     * Add section to navbar
     * 
     * @param {Section} section 
     */
    addSection(section) {
        this.nav.appendChild(section);
    }

    /**
     * Remove section from navbar
     * 
     * @param {Integer} id 
     */
    delSection(id) {
        this.elements[id].remove();
    }
}


window.onload = function () {

    var navbar = new NavBar(0);
    document.getElementById('container').appendChild(navbar.get());

    var section1 = new Section(0);
    navbar.addSection(section1.get());
    section1.addItem(new Item(this.itemCounter++, 'Marca1', 'https://marca.com'));
    section1.addItem(new Item(this.itemCounter++, 'Marca2', 'https://marca.com'));
    section1.addItem(new Item(this.itemCounter++, 'Marca3', 'https://marca.com'));
    section1.addItem(new Item(this.itemCounter++, 'Marca4', 'https://marca.com'));

    var subSection = new Section(1);
    subSection.addItem(new Item(this.itemCounter++, 'AS1', 'https://marca.com'));
    subSection.addItem(new Item(this.itemCounter++, 'AS2', 'https://marca.com'));
    subSection.addItem(new Item(this.itemCounter++, 'AS3', 'https://marca.com'));
    section1.addSubSection(1, subSection.get());

    var subSection2 = new Section(1);
    subSection2.addItem(new Item(this.itemCounter++, 'AS4', 'https://marca.com'));
    subSection2.addItem(new Item(this.itemCounter++, 'AS5', 'https://marca.com'));
    subSection2.addItem(new Item(this.itemCounter++, 'AS6', 'https://marca.com'));
    subSection.addSubSection(2, subSection2.get());

    var section2 = new Section(2);
    navbar.addSection(section2.get());
    section2.addItem(new Item(this.itemCounter++, 'Marca1', 'https://marca.com'));
    section2.addItem(new Item(this.itemCounter++, 'Marca2', 'https://marca.com'));
    section2.addItem(new Item(this.itemCounter++, 'Marca3', 'https://marca.com'));
    section2.addItem(new Item(this.itemCounter++, 'Marca4', 'https://marca.com'));
};
