//Global Variables for Contact Sections Script

// Time Variables
var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();
var currentDayOfWeek = today.getDay();
var currentDay = today.getDate();
var currentDate = "" + currentDay + "/" + (currentMonth + 1) + "/" + currentYear + "";
var currentHour = today.getHours();
var currentMinutes = today.getMinutes();
var currentTime = currentHour + (currentMinutes / 59);

//Type of Day Variables
var workDay = false;
var halfDay = false;
var restDay = false;
var holiday = false;

//2016 Holiday List
var halfDays = ['23/12/2016', '30/12/2016'];
var holidays = ['16/9/2016', '21/11/2016', '31/12/2016', '1/1/2017'];

//Workday Checker and Setter
// First, Check if today is a Holiday
for (i = 0; i < halfDays.length; i++) {
  if (halfDays[i] === currentDate) {
    halfDay = true;
  }
}

for (i = 0; i < holidays.length; i++) {
  if (holidays[i] === currentDate) {
    holiday = true;
  }
}

//If today is not a Holiday, set the Status based on Normal Hours of Operation
if (!(halfDay) && !(holiday)) {
  //If today is Monday - Friday, then today is a Work Day
  if ((1 <= currentDayOfWeek) && (currentDayOfWeek <= 5)) {
  	workDay = true;

  //If today is Saturday, then today is a Half Day
  } else if (currentDayOfWeek === 6) {
  	halfDay = true;

  //If today is Sunday, then today is a Rest Day
  } else if (currentDayOfWeek === 0) {
  	restDay = true;

  }

}

//Hours of Operation
var morningHours = ((8 <= currentTime) && (currentTime < 13));
var afternoonHours = ((14.5 <= currentTime) && (currentTime < 18));
var lunchBreak = (13 <= currentTime) && (currentTime < 14.5);
var saturdayHours = ((8 <= currentTime) && (currentTime < 14));

// URL Path Variables to insert correct Icon Path
var currentURL = window.location.href;
var productKey = "materiales/";
var productPage = currentURL.indexOf(productKey) > -1;

//DOM Object Hours of Operation Variables
var statusNameColor = document.getElementById('status');
var statusIndicatorColor = document.getElementById('status-indicator');
var statusName = statusNameColor.lastChild;
