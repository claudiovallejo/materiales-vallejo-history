/*
    This script takes care of several things. It removes `#note`, it inserts the product navigation bar into `#product-nav`, it stores all the `.product-card`s, and links the clicking of a product tab with the insertion and deletion of its respective product cards.
*/
/*  Product Category Objects - - - - - - - - - - - - - - - */
var Cemento = { name: 'Cemento', id: 'cemento', firstIndex: 0, lastIndex: 2 };
var Varilla = { name: 'Varilla', id: 'varilla', firstIndex: 3, lastIndex: 10 };
var Anillos = { name: 'Anillos', id: 'anillos', firstIndex: 11, lastIndex: 13 };
var Uniblock = { name: 'Uniblock', id: 'uniblock', firstIndex: 14, lastIndex: 14 };
var Blocks = { name: 'Blocks', id: 'blocks', firstIndex: 15, lastIndex: 19 };
var Arenas = { name: 'Arenas', id: 'arenas', firstIndex: 20, lastIndex: 22 };
var Adhesivos = { name: 'Adhesivos', id: 'adhesivos', firstIndex: 23, lastIndex: 25 };
var Aceros = { name: 'Aceros', id: 'aceros', firstIndex: 26, lastIndex: 28 };
var OtrosEstucos = { name: 'Otros Estucos', id: 'otros-estucos', firstIndex: 29, lastIndex: 30 };
var Castillos = { name: 'Castillos', id: 'castillos', firstIndex: 31, lastIndex: 33 };
var Impermeabilizantes = { name: 'Impermeabilizantes', id: 'impermeabilizantes', firstIndex: 34, lastIndex: 37 };
var Cal = { name: 'Cal', id: 'cal', firstIndex: 38, lastIndex: 38 };
var Yeso = { name: 'Yeso', id: 'yeso', firstIndex: 39, lastIndex: 39 };
var Clavos = { name: 'Clavos', id: 'clavos', firstIndex: 40, lastIndex: 44 };
//  Product Category Object List
var products = [Cemento, Varilla, Anillos, Uniblock, Blocks, Arenas, Adhesivos, OtrosEstucos, Castillos, Impermeabilizantes, Cal, Yeso, Clavos]
/*  Product Navigation Elements - - - - - - - - - - - - - - - */
//  Navigation Div
var $productNav = document.getElementById('product-nav');
$productNav.classList.remove('col-d0');
$productNav.classList.remove('col-t0');
$productNav.classList.add('col-d3');
$productNav.classList.add('col-t12');
//  Navigation Title
var $title = document.createElement('h1');
$title.setAttribute('id', 'title');
$title.classList.add('pb15');
$title.innerHTML = 'Materiales';
$productNav.appendChild($title);
//  Navigation List
var $ul = document.createElement('ul');
//  Loops through product array and creates a <li> and <a> for each product object in the array; it also adds active to the first <li> and <a>
for (var product = 0; product < products.length; product++) {
  // Create $li, create and append $a into $li, add click event listener to $li
  var $li = document.createElement('li');
  var $a = document.createElement('a');
  $li.appendChild($a);
  $li.addEventListener('click', function(){
    var $a = this.firstElementChild;
    productNavManager($a);
    cardManager($a.id);
  });
  //  Add 'active' classes to first Product Category Navigation
  if (product === 0) {
    $li.classList.add('active');
    $a.classList.add('active');
  }
  //  Set corresponding Product Category Object as $a's id
  $a.setAttribute('id', products[product].id);
  $a.innerHTML = products[product].name;
  //  Append each $li into $ul
  $ul.appendChild($li);
}
//  Append $ul into `#product-nav`
$productNav.appendChild($ul);
//  Cache Product Wrapper
var $productWrapper = document.getElementById('product-wrapper');
$productWrapper.classList.remove('col-d10');
$productWrapper.classList.add('col-d8');
//  Cache Product List
var $productList = document.getElementById('product-list');
var masterProductList = [];
for (var index = 0; index < $productList.children.length; index++) {
  masterProductList.push($productList.children[index]);
}
/*  Removes '.active' from $li and $a and adds `.active` to clicked $a and parent $li - - - - - - - - - - - - - - - */
function productNavManager($a) {
  //  Cache all elements that contain `.active`
  var activeElements = document.getElementsByClassName('active');
  //  Remove `.active` from elements that contain it
  activeElements[0].classList.remove('active');
  activeElements[0].classList.remove('active');
  //  Add `.active` to clicked $li and $a
  var $li = $a.parentNode;
  $li.classList.add('active');
  $a.classList.add('active');
}
/*  Takes care of removing cards from `#product-list` and adding cards for the requested Product Category - - - - - - - - - - - - - - - */
function cardManager(productId) {
  if ($productList.children.length > 0) {
    for (var index = 0; index < $productList.children.length; index++) {
      fadeOut($productList.children[index]);
    }
  }
  setTimeout(function(){
    remove('fade-out');
    $productList.innerHTML = '';
    //  Caches requested Product Object
    var requestedProduct = fetchProduct(productId);
    //  Animates `.product-wrapper` height

    //  Loops through the masterProductList with the first and last product category indices
    fadeIn(requestedProduct.firstIndex, requestedProduct.lastIndex);
  }, 500);
  remove('fade-in');
}
/*  Returns appropriate Product Category Object based on $a's id value - - - - - - - - - - - - - - - */
function fetchProduct(id) {
  var requestedProduct;
  for (var index = 0; index < products.length; index++) {
    if (products[index].id === id) {
      requestedProduct = products[index];
    }
  }
  return requestedProduct;
}
/*  */
function fadeOut($productCard) {
  $productCard.classList.add('fade-out');
}
/*  */
function fadeIn(a, b) {
  var index = a;
  var interval = setInterval(function(){
    var $product = masterProductList[index];
    $product.classList.add('fade-in');
    $productList.appendChild($product);
    index++;
    if (index > b) {
      clearInterval(interval);
    }
  }, 100);
}
/*  */
function remove(style) {
  for (var index = 0; index < masterProductList.length; index++) {
    masterProductList[index].classList.remove(style);
  }
}
/*  Clears `#product-list` and pre-loads Cement Products - - - - - - - - - - - - - - - */
$productList.innerHTML = '';
cardManager('cemento');
