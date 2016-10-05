/*
    This document refreshes the subtitle to read that the document was last reviewed on the first of every month...

      + Introduction
        - Last Updated Subtitle (<h4>)

*/
/*  Time Variables - - - - - - - - - - - - - - - */
var today = new Date();
var currentDay = today.getDate();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
/*  `#last-update` Caching - - - - - - - - - - - - - - - */
var $lastUpdate = document.getElementById('last-update');
/*  Sets date to the first of current month - - - - - - - - - - - - - - - */
function dateSetter(day, month, year) {
  //  Calls the month to number function to capture the name of the current month
  var monthName = monthNumberToString(month + 1);
  //  Sets new text with the first of current month
  var newDate = 'Revisado el ' + day + '&deg de ' + monthName + ' del ' + year;
  //  Inserts new date into `#last-update`
  $lastUpdate.innerHTML = newDate;
}
//  Converts a month number into its name equivalent
function monthNumberToString(monthNumber) {
  //  Switches between month values; 1 = January -> 12 = December
  switch(monthNumber) {
    case 1:
      return 'Enero';
      break;
    case 2:
      return 'Febrero';
      break;
    case 3:
      return 'Marzo';
      break;
    case 4:
      return 'Abril';
      break;
    case 5:
      return 'Mayo';
      break;
    case 6:
      return 'Junio';
      break;
    case 7:
      return 'Julio';
      break;
    case 8:
      return 'Agosto';
      break;
    case 9:
      return 'Septiembre';
      break;
    case 10:
      return 'Octubre';
      break;
    case 11:
      return 'Noviembre';
      break;
    case 12:
      return 'Diciembre';
      break;
    default:
      return 'Junio';
  }
}
dateSetter(1, currentMonth, currentYear);
