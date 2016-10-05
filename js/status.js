/*
    This document takes care of updating everything in the website that changes based on the business's office hours. Below are the different sections that this script updates...

      + Navigation
        - Location Status
        - Available Contact Form Button
      + Sub Navigation
        - Location Status
        - Available Contact Form Section
      + Contact Section
        - Location Status
        - Available Contact Form Section

*/
/*  Business Office Hours + Status Types - - - - - - - - - - - - - - - */
//  Time Variables
var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();
var currentDayOfWeek = today.getDay();
var currentDay = today.getDate();
var currentDate = "" + currentDay + "/" + (currentMonth + 1) + "/" + currentYear;
var currentHour = today.getHours();
var currentMinutes = today.getMinutes();
var currentTime = currentHour + (currentMinutes / 59);
//  Type of Day Variables
var workDay = false;
var halfDay = false;
var restDay = false;
var holiday = false;
//  2016 Half Day + Holiday List
var halfDays = ['23/12/2016', '30/12/2016'];
var holidays = ['16/9/2016', '21/11/2016', '31/12/2016', '1/1/2017'];
//  Current Day Type Variable
var currentDayType;
//  Current Day Time Variable
var currentDayTime;
/*  Current Path Route - - - - - - - - - - - - - - - */
var currentRoute = window.location.href;
/*  Updates current day type - - - - - - - - - - - - - - - */
function setCurrentDayType() {
  //  Half Day Setter
  for (var i = 0; i < halfDays.length; i++) {
    if (halfDays[i] === currentDate ) {
      halfDay = true;
    }
  }
  //  Holiday Setter
  for (var i = 0; i < holidays.length; i++) {
    if (holidays[i] === currentDate) {
      holiday = true;
    }
  }
  //  Workday, Halfday or Restday Setter
  if (!(halfDay) && !(holiday)) {
    //  Workday Setter
    if ((1 <= currentDayOfWeek) && (currentDayOfWeek <= 5)) {
      workDay = true;
    }
    //  Half Day Setter
    if (currentDayOfWeek === 6) {
      halfDay = true;
    }
    //  Rest Day Setter
    if (currentDayOfWeek === 0) {
      restDay = true;
    }
  }
  //  List of business day types
  var dayTypes = [workDay, restDay, holiday, halfDay];
  //  Calls day type setter function with current type index value
  for (var i = 0; i < dayTypes.length; i++) {
    if (dayTypes[i]) {
      dayTypeSetter(i);
    }
  }
  //  Sets current day type
  function dayTypeSetter(dayTypeIndex) {
    switch(dayTypeIndex) {
      case 0:
        currentDayType = 'Work Day';
        break;
      case 1:
      case 2:
        currentDayType = 'Holiday';
        break;
      default:
        currentDayType = 'Half Day';
    }
  }
  return currentDayType;
}
/*  Updates current day time - - - - - - - - - - - - - - - */
function setCurrentDayTime() {
  //  Hours of operation
  var morningHours = ((8 <= currentTime) && (currentTime < 13));
  var afternoonHours = ((14.5 <= currentTime) && (currentTime < 18));
  var lunchHours = ((13 <= currentTime) && (currentTime < 14.5));
  var halfDayHours = ((8 <= currentTime) && (currentTime < 14));
  //  List of business hour day time statuses
  var dayTimes;
  //  This if statement checks if its a Half Day. Without this if statement, a work day would adopt half day hours since a work day's morning hours and half day hours are almost identical.
  if (currentDayType === "Half Day") {
    dayTimes = [morningHours, lunchHours, afternoonHours, halfDayHours];
  }
  else {
    dayTimes = [morningHours, lunchHours, afternoonHours];
  }
  //  Calls day time setter function with current day time index value
  for (var i = 0; i < dayTimes.length; i++) {
    if (dayTimes[i]) {
      dayTimeSetter(i);
    }
  }
  //  Sets current day time
  function dayTimeSetter(dayTimeIndex) {
    switch(dayTimeIndex) {
      case 0:
        currentDayTime = 'Morning';
        break;
      case 1:
        currentDayTime = 'Lunch';
        break;
      case 2:
        currentDayTime = 'Afternoon';
        break;
      case 3:
        currentDayTime = 'Half Day';
        break;
      default:
        currentDayTime = 'Closed';
    }
  }
  return currentDayTime;
}
/*  Main controller function that takes care of calling the appropriate functions to fill in the content that matches the current day type and time - - - - - - - - - - - - - - - */
function locationStatusManager(dayType, dayTime) {
  //  If today is a work day...
  if (dayType === "Work Day") {
    //  ...and its currently the morning or afternoon...
    if ((dayTime === "Morning") || (dayTime === "Afternoon")) {
      setNavigationMenu('Open');
      setContactButton('Open');
      //  ...and if current page is Products page
      if (currentRoute.endsWith('materiales.html')) {
        setProductSubSections('Open');
      }
      //  ...and if current page is Contact page
      else if (currentRoute.endsWith('contacto.html')) {
        setContactSections('Open');
      }
    }
    //  ...and its currently lunch time...
    else if (dayTime === "Lunch") {
      setNavigationMenu('Lunch');
      setContactButton('Lunch');
      //  ...and if current page is Products page
      if (currentRoute.endsWith('materiales.html')) {
        setProductSubSections('Lunch');
      }
      //  ...and if current page is Contact page
      else if (currentRoute.endsWith('contacto.html')) {
        setContactSections('Lunch');
      }
    }
    //  ...and its currently closed...
    else {
      setNavigationMenu('Closed');
      setContactButton('Closed');
      //  ...and if current page is Products page
      if (currentRoute.endsWith('materiales.html')) {
        setProductSubSections('Closed');
      }
      //  ...and if current page is Contact page
      else if (currentRoute.endsWith('contacto.html')) {
        setContactSections('Closed');
      }
    }
  }
  //  If today is a half day...
  else if (dayType === "Half Day") {
    //  ...and its currently the morning/afternoon...
    if (dayTime === "Half Day") {
      setNavigationMenu('Open');
      setContactButton('Open');
      //  ...and if current page is Products page
      if (currentRoute.endsWith('materiales.html') || currentRoute.endsWith('#service-sections')) {
        setProductSubSections('Open');
      }
      //  ...and if current page is Contact page
      else if (currentRoute.endsWith('contacto.html')) {
        setContactSections('Open');
      }
    }
    //  Location Closed
    else {
      //  Set Navigation Elements to 'Closed'
      setNavigationMenu('Closed');
      setContactButton('Closed');
      //  ...and if current page is Products page
      if (currentRoute.endsWith('materiales.html')) {
        setProductSubSections('Closed');
      }
      //  ...and if current page is Contact page
      else if (currentRoute.endsWith('contacto.html')) {
        setContactSections('Closed');
      }
    }
  }
  //  If today is a holiday...
  else {
    //  Set Navigation Elements to 'Closed'
    setNavigationMenu('Closed');
    setContactButton('Closed');
    //  ...and if current page is Products page
    if (currentRoute.endsWith('materiales.html')) {
      setProductSubSections('Closed');
    }
    //  ...and if current page is Contact page
    else if (currentRoute.endsWith('contacto.html')) {
      setContactSections('Closed');
    }
  }
}
/*  Updates Navigation Menu `#current-status` with approriately styled elements - - - - - - - - - - - - - - - */
function setNavigationMenu(status) {
  //  Cache and clear `#current-status`, which contains the Contact Button and Location Status; Add some basic styling to visually separate `#current-status` from the Navigation Menu Links
  var $navStatus = document.getElementById('current-status');
  $navStatus.innerHTML = '';
  $navStatus.classList.add("pl15");
  $navStatus.classList.add("blg");
  //  Create elements that will be appended into `#current-status`
  var $statusIcon = document.createElement('span');
  var $statusText = document.createElement('p');
  var $contactButton = document.createElement('a');
  var $contactIcon = document.createElement('span');
  //  Store created elements into list to loop through and append elements into `#current-status`
  var navElements = [$statusIcon, $statusText, $contactButton];
  //  Set specific class, text, href and id attributes for particular location status
  switch(status) {
    case 'Open':
      $statusText.innerHTML = 'Abierto';
      $contactButton.setAttribute('href', 'tel:8688161353');
      $contactIcon.setAttribute('id', 'phone');
      $contactButton.appendChild($contactIcon);
      $contactButton.innerHTML += '(868) 816 1353';
      //  Loop through navigation menu elements, add '.open', and append them to `#current-status`
      for (var i = 0; i < navElements.length; i++) {
        navElements[i].classList.add('open');
        $navStatus.appendChild(navElements[i]);
      }
      break;
    case 'Lunch':
      $statusText.innerHTML = 'En la Comida';
      $contactButton.setAttribute('href', 'mailto:matvallejo@outlook.com');
      $contactIcon.setAttribute('id', 'mail');
      $contactButton.appendChild($contactIcon);
      $contactButton.innerHTML += 'Enviar Mensaje';
      //  Loop through navigation menu elements, add '.lunch', and append them to `#current-status`
      for (var i = 0; i < navElements.length; i++) {
        navElements[i].classList.add('lunch');
        $navStatus.appendChild(navElements[i]);
      }
      break;
    case 'Closed':
      $statusText.innerHTML = 'Cerrado';
      $contactButton.setAttribute('href', 'mailto:matvallejo@outlook.com');
      $contactIcon.setAttribute('id', 'mail');
      $contactButton.appendChild($contactIcon);
      $contactButton.innerHTML += 'Enviar Mensaje';
      //  Loop through navigation menu elements, add '.closed', and append them to `#current-status`
      for (var i = 0; i < navElements.length; i++) {
        navElements[i].classList.add('closed');
        $navStatus.appendChild(navElements[i]);
      }
      break;
    default:
      console.log("setNavigationMenu() not working [line 212]");
  }
}
/*  Updates Product Sub-navigation Sections - - - - - - - - - - - - - - - */
function setProductSubSections(status) {
  //  Cache `#location-status` and create a <span> for Status Icon
  var $status = document.getElementById('location-status');
  $status.innerHTML = '';
  // $status.classList.add('pseudo-link');
  $status.classList.remove('gray');
  var $statusIcon = document.createElement('span');
  //  Cache `#contact-section` elements
  var $contactIcon = document.getElementById('contact-icon');
  var $contactSection = $contactIcon.parentElement;
  var $contactTitle = document.getElementById('contact-title');
  var $contactDescription = document.getElementById('contact-description');
  var $contactPseudolink = document.getElementById('contact-pseudolink');
  //  Create <span> for Arrow and add '.arrow'
  var $pseudoLinkArrow = document.createElement('span');
  $pseudoLinkArrow.classList.add('arrow');
  //  Set specific classes
  switch (status) {
    case 'Open':
      //  Styles and appends Pseudolink in `#location-status`
      $status.classList.add('open');
      $statusIcon.classList.add('open');
      $status.appendChild($statusIcon);
      $status.innerHTML += 'Abierto';
      //  Styles and appends
      $contactSection.setAttribute('href', 'tel:8688161353');
      $contactTitle.innerHTML = 'Marcanos';
      $contactDescription.innerHTML = 'Cotiza o cuéntanos en que te podemos ayudar.';
      $contactPseudolink.classList.remove('gray');
      $contactPseudolink.classList.add('open');
      $contactPseudolink.innerHTML = '(868) 816 1353';
      $pseudoLinkArrow.classList.add('green');
      $contactPseudolink.appendChild($pseudoLinkArrow);
      break;
    case 'Lunch':
      //  Styles and appends Pseudolink in `#location-status`
      $status.classList.add('lunch');
      $statusIcon.classList.add('lunch');
      $status.appendChild($statusIcon);
      $status.innerHTML += 'En la Comida';
      //  Styles and appends
      $contactSection.setAttribute('href', 'mailto:matvallejo@outlook.com');
      $contactIcon.classList.remove('contact-call');
      $contactIcon.classList.add('contact-message');
      $contactTitle.innerHTML = 'Déjanos un Mensaje';
      $contactDescription.innerHTML = 'Escríbenos un mensaje y te responderemos lo antes posible.';
      $contactPseudolink.classList.remove('gray');
      $pseudoLinkArrow.classList.add('blue');
      $contactPseudolink.innerHTML = 'Escribir Mensaje';
      $contactPseudolink.appendChild($pseudoLinkArrow);
      break;
    case 'Closed':
      //  Styles and appends Pseudolink in `#location-status`
      $status.classList.add('closed');
      $statusIcon.classList.add('closed');
      $status.appendChild($statusIcon);
      $status.innerHTML += 'Cerrado';
      //  Styles and appends
      $contactSection.setAttribute('href', 'mailto:matvallejo@outlook.com');
      $contactIcon.classList.remove('contact-call');
      $contactIcon.classList.add('contact-message');
      $contactTitle.innerHTML = 'Déjanos un Mensaje';
      $contactDescription.innerHTML = 'Escríbenos un mensaje y te responderemos lo antes posible.';
      $contactPseudolink.classList.remove('gray');
      $contactPseudolink.innerHTML = 'Escribir Mensaje';
      $pseudoLinkArrow.classList.add('blue');
      $contactPseudolink.appendChild($pseudoLinkArrow);
      break;
    default:
      console.log("setProductSubSections() not working [line 267]");
  }
}
/*  Updates Product Contact Sections - - - - - - - - - - - - - - - */
function setContactSections(status) {
  //
  var $contactStatus = document.getElementById('contact-status');
  $contactStatus.innerHTML = '';
  var $statusIcon = document.createElement('span');
  $contactStatus.appendChild($statusIcon);
  var $contactPhone = document.getElementById('contact-phone');
  var $phoneArrow = document.createElement('span');
  //
  switch(status) {
    case 'Open':
      //
      $contactStatus.classList.remove('gray');
      $contactStatus.classList.add('green');
      $statusIcon.classList.add('open');
      $contactStatus.innerHTML += 'Abierto';
      //
      $contactPhone.classList.remove('gray');
      $contactPhone.classList.add('green');
      $phoneArrow.classList.add('arrow');
      $contactPhone.appendChild($phoneArrow);
      $phoneArrow.classList.add('green');
      $contactPhone.setAttribute('href', 'tel:8688161353');
      break;
    case 'Lunch':
      //
      $contactStatus.classList.remove('gray');
      $contactStatus.classList.add('lunch');
      $statusIcon.classList.add('lunch');
      $contactStatus.innerHTML += 'En la Comida';
      break;
    case 'Closed':
      //
      $contactStatus.classList.remove('gray');
      $contactStatus.classList.add('closed');
      $statusIcon.classList.add('closed');
      $contactStatus.innerHTML += 'Cerrado';
      break;
    default:
      console.log("setContactSections() not working [line 357]");
  }
}
/*  Updates Mobile Contact Button - - - - - - - - - - - - - - - */
var $mobileContactButton = document.getElementById('button');
$mobileContactButton.classList.add('hide');
function setContactButton(status) {
  //
  switch(status) {
    case 'Open':
      //
      $mobileContactButton.classList.add('call');
      break;
    case 'Lunch', 'Closed':
      //
      $mobileContactButton.classList.add('email');
      $mobileContactButton.setAttribute('href', 'mailto:matvallejo@outlook.com');
      break;
    default:
      console.log("setContactButton() not working [line 400]");
  }
}
locationStatusManager(setCurrentDayType(), setCurrentDayTime());
/* - - - - - */
var vScroll = window.scrollY;
var initialScroll = false;
window.addEventListener('scroll', function(){
  vScroll = window.scrollY;
  buttonStyler(vScroll);
})
/* - - - - - */
function buttonStyler(vScroll) {
  if (vScroll > 250) {
    $mobileContactButton.classList.remove('hide');
    $mobileContactButton.classList.remove('button-fade-out');
    $mobileContactButton.classList.add('show');
    $mobileContactButton.classList.add('button-fade-in');
    initialScroll = true;
  }
  if ((initialScroll) && vScroll < 250) {
    $mobileContactButton.classList.remove('show');
    $mobileContactButton.classList.remove('button-fade-in');
    $mobileContactButton.classList.add('hide');
    $mobileContactButton.classList.add('button-fade-out');
  }
}
$mobileContactButton.addEventListener('click', function(event){
  if (vScroll < 250) {
    event.preventDefault();
  }
});
