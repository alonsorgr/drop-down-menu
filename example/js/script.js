(function ($) {
    $('#container').dropDownMenu('init');
    $('.navbar').dropDownMenu('addSection', 0, 'Menu 1');
    $('.navbar').dropDownMenu('addSection', 1, 'Menu 2');
    $('.navbar').dropDownMenu('addSection', 2, 'Menu 3');

    $('#container-0').dropDownMenu('addItem', 0, 'Submenu 1', 'https://marca.com');
    $('#container-0').dropDownMenu('addItem', 1, 'Submenu 2', 'https://marca.com');
    $('#container-0').dropDownMenu('addItem', 2, 'Submenu 3', 'https://marca.com');
    $('#container-2').dropDownMenu('addItem', 3, 'Submenu 4', 'https://marca.com');

    $('#item-0').dropDownMenu('addSubSection', 3, 0);
    $('#container-3').dropDownMenu('addItem', 4, 'Submenu hijo 4', 'https://marca.com');
    $('#container-3').dropDownMenu('addItem', 5, 'Submenu hijo 5', 'https://marca.com');


    $('#item-1').dropDownMenu('addSubSection', 4, 1);
    $('#container-4').dropDownMenu('addItem', 6, 'Submenu hijo 6', 'https://marca.com');
    $('#container-4').dropDownMenu('addItem', 7, 'Submenu hijo 7', 'https://marca.com');

    $('#item-4').dropDownMenu('addSubSection', 5, 4);
    $('#container-5').dropDownMenu('addItem', 8, 'Submenu hijo 8', 'https://marca.com');
    $('#container-5').dropDownMenu('addItem', 9, 'Submenu hijo 9', 'https://marca.com');

}(jQuery));