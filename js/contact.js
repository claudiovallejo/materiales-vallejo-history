//DOM Phone Card Variables
var phoneCard = document.getElementById('phone-card');
var phoneDescription = document.getElementById('description');
var phoneNumber = document.getElementById('number');

//Phone Descriptions
var description = {
	open: 'Cotiza o cuéntanos en que te podemos ayudar, estamos para servirte',
	lunch: 'Salimos a comer, déjanos un mensaje y regresando nos ponemos en contacto.',
	closed: 'Por el momento nuestra sucursal está cerrada, escríbenos y dinos en te ayudamos.'
};

//Hours of Operation Pathways
if (workDay) {

	//Work day Status Setter
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
		//Phone Card Selectors

	} else if (lunchBreak) {
		//Status Indicator Selectors
		statusNameColor.className = 'orange';
		statusName.textContent = 'En la Comida';
		statusIndicatorColor.className = 'orange-status';
		//Phone Card Selectors
		phoneCard.removeAttribute('class');
		phoneCard.removeAttribute('href');
		phoneDescription.textContent = description.lunch;
		phoneNumber.setAttribute('class', 'closed');

	} else {
		//Status Indicator Selectors
		statusNameColor.className = 'red';
		statusName.textContent = 'Cerrado';
		statusIndicatorColor.className = 'red-status';
		//Phone Card Selectors
		phoneCard.removeAttribute('class');
		phoneCard.removeAttribute('href');
		phoneDescription.textContent = description.closed;
		phoneNumber.setAttribute('class', 'closed');

	}

} else if (halfDay) {

	//Half day Status Setter
	if (morningHours) {
		//Status Indicator Selectors
		statusNameColor.className = 'green';
		statusName.textContent = 'Abierto';
		statusIndicatorColor.className = 'green-status';
		//Content Setter Function

	} else {
		//Status Indicator Selectors
		statusNameColor.className = 'red';
		statusName.textContent = 'Cerrado';
		statusIndicatorColor.className = 'red-status';
		//Phone Card Selectors
		phoneCard.removeAttribute('class');
		phoneCard.removeAttribute('href');
		phoneDescription.textContent = description.closed;
		phoneNumber.setAttribute('class', 'closed');

	}

} else if (restDay || holiday) {
	//Status Indicator Selectors
	statusNameColor.className = 'red';
	statusName.textContent = 'Cerrado';
	statusIndicatorColor.className = 'red-status';
	//Phone Card Selectors
	phoneCard.removeAttribute('class');
	phoneCard.removeAttribute('href');
	phoneDescription.textContent = description.closed;
	phoneNumber.setAttribute('class', 'closed');

}
