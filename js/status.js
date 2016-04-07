// Time Variables
var today = new Date();
var currentHour = today.getHours();
var currentMinutes = today.getMinutes();
var currentTime = currentHour + (currentMinutes / 59);

//DOM Object Variables
var statusNameColor = document.getElementById('status');
var statusIndicatorColor = document.getElementById('status-indicator');
var statusName = statusNameColor.lastChild;

//Open Hours
var morningHours = ((8 <= currentTime) && (currentTime < 13));
var afternoonHours = ((14.5 <= currentTime) && (currentTime < 18));

//Lunch Hours
var lunchHours = (currentTime <= 13) && (currentTime < 14.5);

//Status Setter
if (morningHours) {

	//Status Indicator Selectors
	statusNameColor.className = 'green';
	statusName.textContent = 'Abierto';
	statusIndicatorColor.className = 'green-status';

} else if (afternoonHours) { 

	//Status Indicator Selectors
	statusNameColor.className = 'green';
	statusName.textContent = 'Abierto';
	statusIndicatorColor.className = 'green-status';

} else if (lunchHours) {

	//Status Indicator Selectors
	statusNameColor.className = 'orange';
	statusName.textContent = 'En la Comida';
	statusIndicatorColor.className = 'orange-status';

} else {

	//Status Indicator Selectors
	statusNameColor.className = 'red';
	statusName.textContent = 'Cerrado';
	statusIndicatorColor.className = 'red-status';

}