// Script that replaces images depending on screen width

//DOM Variables
var anillos = document.getElementById('anillos');

// Current Screen Width
var width = document.body.clientWidth;

// Screen Widths
var smallMobile = (width <= 650);

// Image Setter
if (smallMobile) {
  console.log("Small Mobile screen width: " + width);
  anillos.setAttribute('src', 'imagenes/mobileTest.png');

}
