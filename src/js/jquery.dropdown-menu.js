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

(function($) { 

    var methods = [
        addSection : function(section) {

        },

        delSection : function(name) {

        },

        addOption : function(option) {

        },

        delOption : function(option) {

        },
    ];

    $.fn.tooltip = function( method ) {

        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call(arguments,1 ));
        } 
        else if (typeof method === 'object' || ! method) {
            return methods.init.apply( this, arguments );
        } else {
            alert('La función ' + method + ' no existe en jQuery.tooltip' );
        }
    };

})(jQuery);