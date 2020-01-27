(function ( $ ) {
    $('#container').dropDownMenu('init', 'navigation');
    $('navigation').dropDownMenu('addSection', 0, 'MarcaSection');
    $('navigation').dropDownMenu('addItem', 0, 'MarcaItem', 'https://marca.com');
    $('navigation').dropDownMenu('addItem', 0, 'MarcaItem', 'https://marca.com');
    $('navigation').dropDownMenu('addItem', 0, 'MarcaItem', 'https://marca.com');
    $('navigation').dropDownMenu('addSubSection', 1, 'MarcaSubSection', 'https://marca.com');
    $('navigation').dropDownMenu('addItem', 1, 'MarcaItem', 'https://marca.com');
    $('navigation').dropDownMenu('addItem', 1, 'MarcaItem', 'https://marca.com');
    $('navigation').dropDownMenu('addItem', 1, 'MarcaItem', 'https://marca.com');
}( jQuery ));