/*
    This script takes care of adding functionality to the Desktop version of index.html gallery.
*/
/* Cache $background and $content elements - - - - - */
const $background = document.getElementById('background');
const $content = document.getElementById('content');
/* Create and append Gallery Navigation Arrows to $background - - - - - */
const $next = document.createElement('div');
$next.setAttribute('id', 'next');
$next.classList.add('right-arrow');
$next.classList.add('c-fade-in');
const $previous = document.createElement('div');
$previous.setAttribute('id', 'previous');
$previous.classList.add('left-arrow');
$previous.classList.add('c-fade-in');
$background.appendChild($next);
$background.appendChild($previous);
/* Gallery Slide Objects - - - - - */
const Rings = {
  title: 'Anillos a tu Medida',
  description: 'Pide anillos por pieza y de cualquier dimensión y figura. Entregamos tu pedido sin costo en menos de 24 horas.',
  link: 'Ver Materiales',
  imageClass: 'ring-image'
}
const Cement = {
  title: 'Lo mejor en Cemento',
  description: 'Pide Cemento Monterrey a menudeo o mayoreo en Bulto, Big Bag, Pipa o por contrato específico de obra.',
  link: 'Ver Materiales',
  imageClass: 'cement-image'
}
const Steel = {
  title: 'Varillas de Calidad',
  description: 'Pide Varilla Ternium a menudeo, mayoreo o por contrato específico de obra en pedidos de 200+ toneladas.',
  link: 'Ver Materiales',
  imageClass: 'steel-image'
}
//  Gallery Slide Objects Array
const slides = [Rings, Cement, Steel];
//  Initial Slide Index
var currentIndex = 0;
/* Event Listeners for Gallery Arrows - - - - - */
$next.addEventListener('click', function(){
  updateSlide(updateIndex(1));
});
$previous.addEventListener('click', function(){
  updateSlide(updateIndex(-1));
});
/* Gallery Slide Content Elements - - - - - - */
const $title = document.getElementById('title');
const $description = document.getElementById('description');
const $link = document.getElementById('link');
const $image = document.getElementById('image');
/* Updates the slide by capturing the requested index, fading out the visible slide and fading in the requested slide - - - - - - */
function updateSlide(indices) {
  updateStyle('Add fade-out');
  setTimeout(function(){
    updateStyle('Remove fade-out');
    updateContent(indices[0], indices[1]);
    updateStyle('Add fade-in');
  }, 600);
  updateStyle('Remove fade-in');
}
/* Depending on which arrow was pressed (Right Arrow = Next = +1 | Left Arrow = Previous = -1) and what the visible slide's index is it updates the current and previous indices with the correct value. - - - - - - */
function updateIndex(direction) {
  var previousIndex = currentIndex;
  //  If the current index is between 0 and 1 minus the total number of slides
  if ((0 < currentIndex) && (currentIndex < slides.length - 1)) {
    if (direction == 1) { currentIndex++; }
    else { currentIndex--; }
  }
  //  Else if the current index is 0
  else if (currentIndex == 0) {
    if (direction == 1) { currentIndex++; }
    else { currentIndex = slides.length - 1; }
  }
  //  Else if the current index is 1 minus the total number of slides
  else {
    if (direction == 1) { currentIndex = 0; }
    else { currentIndex--; }
  }
  return [previousIndex, currentIndex];
}
/* Updates the Gallery Content Elements with the requested Slide Object's information - - - - - - */
function updateContent(previousIndex, currentIndex) {
  $title.innerHTML = slides[currentIndex].title;
  $description.innerHTML = slides[currentIndex].description;
  $link.innerHTML = slides[currentIndex].link;
  $image.classList.remove(slides[previousIndex].imageClass);
  $image.classList.add(slides[currentIndex].imageClass);
}
/* Adds and removes the appropriate classes to the Content's elements - - - - - - */
function updateStyle(withClass) {
  for (var index = 0; index < $content.children.length; index++) {
    var $element = $content.children[index];
    switch(withClass) {
      case 'Add fade-out':
        $element.classList.add('g-fade-out');
        break;
      case 'Remove fade-out':
        $element.classList.remove('g-fade-out');
        break;
      case 'Add fade-in':
        $element.classList.add('c-fade-in');
        break;
      case 'Remove fade-in':
        $element.classList.remove('c-fade-in');
        break;
      default:
        console.log("Content switch styler updater not working");
    }
  }
  switch(withClass) {
    case 'Add fade-out':
      $image.classList.add('g-fade-out');
      break;
    case 'Remove fade-out':
      $image.classList.remove('g-fade-out');
      break;
    case 'Add fade-in':
      $image.classList.add('i-fade-in');
      break;
    case 'Remove fade-in':
      $image.classList.remove('i-fade-in');
      break;
    default:
      console.log("Image switch styler updater not working");
  }
}
