(function ($) {
    $('#container').dropDownMenu('init');
    $('.navbar').dropDownMenu('addSection', 0, 'Menu 1');
    $('.navbar').dropDownMenu('addSection', 1, 'Menu 2');
    $('.navbar').dropDownMenu('addSection', 2, 'Menu 3');
    $('#container-0').dropDownMenu('addItem', 0, 'Marca 1', 'https://marca.com');
    $('#container-0').dropDownMenu('addItem', 1, 'Marca 2', 'https://marca.com');
    $('#container-2').dropDownMenu('addItem', 2, 'Marca 3', 'https://marca.com');
}(jQuery));