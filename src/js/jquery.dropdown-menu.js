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
        init: function () {
            let nav = new NavBar();
            $(this).append(nav);
        },

        addSection: function (id, title) {
            $(this).append(new Section(id, title));
            menuEvent('#section-'.concat(id), id);
        },

        addSubSection: function (id, itemID) {
            $(this).append(new SubSection(id));
            menuEvent('#item-'.concat(itemID), id);
        },

        addItem: function (id, text, url) {
            $(this).append(new Item(id, text, url));
        },

        delItem: function() {
            $(this).remove();
        }
    }

    function menuEvent(id, index) {
        $('#container-'.concat(index)).hide();
        $(id).on({
            mouseenter: function () {
                $('#container-'.concat(index)).show();
            },
            mouseleave: function () {
                $('#container-'.concat(index)).hide();
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
