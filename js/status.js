// Time Variables
var today = new Date();
var currentHour = today.getHours();
var currentMinutes = today.getMinutes();
var currentTime = currentHour + (currentMinutes / 59);

var statusNameColor = document.getElementById('status');
var statusIndicatorColor = document.getElementById('status-indicator');
var statusName = statusNameColor.lastChild;

if ((8 <= currentTime) && (currentTime < 13)) {

	statusNameColor.className = 'green';
	statusName.textContent = 'Abierto';
	statusIndicatorColor.className = 'green-status';

} else if ((currentTime <= 13) && (currentTime < 14.5)) {

	statusNameColor.className = 'orange';
	statusName.textContent = 'En la Comida';
	statusIndicatorColor.className = 'orange-status';

} else {

	statusNameColor.className = 'red';
	statusName.textContent = 'Cerrado';
	statusIndicatorColor.className = 'red-status';

}

