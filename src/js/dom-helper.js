/**
 * CSS classes constants
 */
const ITEM = 'item';
const SECTION = 'section';
const NAVBAR = 'navbar';
const HEADER = 'header';
const CONTAINER = 'item-container';

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
        this.container = document.createElement('div');
        this.title.id = 'title-'.concat(id);
        this.section.appendChild(document.createTextNode(title));
        this.section.id = 'section-'.concat(id);
        this.container.id = 'container-'.concat(id);
        this.container.setAttribute('class', SECTION);
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
