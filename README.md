# JQuery DropDown Menu Plugin
Práctica JavaScript (JQuery) para el módulo de Desarrolllo Web Entorno Cliente.
### Objetivos
> Con esta práctica, tenemos la intención de hacer un complemento para la biblioteca JQuery, que le permite crear menús desplegables dinámicamente.

### Instalación

```html
<link rel="stylesheet" href="./path-to-file/stylesheet.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="./path-to-file/jquery.dropdown-menu.js">
```
### Documentación
#### Metodos

Función inicial
```js
$(selector).dropDownMenu('init', id);
```
Función agregar sección
```js
$(selector).dropDownMenu('addSection', 0, 'Nombre del menu');
```
Función eliminar sección
```js
$(selector).dropDownMenu('delSection');
```
Función agregar sub sección
```js
$(selector).dropDownMenu('addSubSection', id, eventID);
```
Función eliminar sección
```js
$(selector).dropDownMenu('delSubSection');
```
Función agregar items

```js
$(selector).dropDownMenu('addItem', id, 'Nombre sub menú', 'url');
```
Función eliminar item
```js
$(selector).dropDownMenu('delItem');
```

#### CSS

Clase header

```css
.header {
    list-style: none;
    text-decoration: none;
    display: inline-block;
    color: #d1e0e0;
    padding-top: 10px;
}
```
Clase sección
```css
.section {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
```
Clase title (etiqueta sección)

```css
.title:hover {
    color: #607D8B;
}
```
Clase sub sección

```css
.sub-section {
    display: none;
    position: relative;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    top: -52px;
    left: 184px;
}
```

Clase item

```css
.item-container {
    width: 200px;
    height: 35px;
    border: 1px solid #f0f5f5;
}

.item:link {
    display: inline-block;
    width: 100%;
    padding: 12px 12px;
    background-color: #f9f9f9;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
}

.item:visited {
    color: #0a0f0f;
}

.item:hover {
    background-color: #d1e0e0;
}

.item:active {
    background-color: #607D8B;
}
```

Selector de id sub-container

```css
#sub-container {
    background-color: rgb(18, 135, 189);
    height: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
```

## Ejemplo básico

```js

(function ($) {
    
    $('#container').dropDownMenu('init', 0);
    $('#nav-0').dropDownMenu('addSection', 0, 'Menu 1');
    $('#nav-0').dropDownMenu('addSection', 1, 'Menu 2');
    $('#nav-0').dropDownMenu('addSection', 2, 'Menu 3');

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

    $('#sub-container').dropDownMenu('init', 1);
    $('#nav-1').dropDownMenu('addSection', 6, 'Menu 1');
    $('#container-6').dropDownMenu('addItem', 10, 'Submenu 1', 'https://marca.com');

}(jQuery));
```

## IES Doñana (2019-2020)
