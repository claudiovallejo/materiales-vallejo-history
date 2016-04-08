// Time Variables
var today = new Date();
var currentHour = today.getHours();
var currentMinutes = today.getMinutes();
var currentTime = currentHour + (currentMinutes / 59);

//DOM Object Variables
var cardContainer = document.getElementById('cards');
var statusNameColor = document.getElementById('status');
var statusIndicatorColor = document.getElementById('status-indicator');
var statusName = statusNameColor.lastChild;

//Open Hours
var morningHours = ((8 <= currentTime) && (currentTime < 13));
var afternoonHours = ((14.5 <= currentTime) && (currentTime < 18));
//Lunch Hours
var lunchHours = (currentTime <= 13) && (currentTime < 14.5);

//Message Content
var messageContent = {

	image: {id: 'mensajes', src: 'imagenes/iconos/mensajes.svg'},
	title: 'Déjanos un Mensaje',
	description: 'Estamos para servirte, escríbenos para cotizarte o dinos en que te podemos ayudar.',
	link: {class: 'call', href: 'mailto:matvallejo@outlook.com', content: 'Escribir Mensaje '}

};

//Phone Content
var phoneContent = {

	image: {id: 'marcanos', src: 'imagenes/iconos/marcanos.svg'},
	title: 'Déjanos un Mensaje',
	description: {open: 'Estamos para servirte, escríbenos para cotizarte o dinos en que te podemos ayudar.', lunch: 'Salimos a comer, pero escríbenos y cuéntanos en que te ayudamos.', closed: 'Por el momento nuestra sucursal está cerrada, escríbenos y dinos en te ayudamos.'},
	link: {class: 'call', href: 'tel:+52(868)8161353', content: '+52 (868) 816 1353'}

};

//Content Setter Function
var contentSetter = function(contentObject, id, status) {

	var description = '';

	if (status === 'default') {

		description = contentObject.description;

	} else if (status === 'open') {

		description = contentObject.description.open;

	} else if (status === 'lunch') {

		description = contentObject.description.lunch;

	} else if (status === 'closed') {

		descripition = contentObject.description.closed;

	}

	container = document.getElementById(id);
	content = '<img id=\"' + contentObject.image.id + '\" src=\"' + contentObject.image.src + '\">';
	content += '<h2>' + contentObject.title + '</h2>';
	content += '<p>' + description + '</p>';
	content += '<a class=\"' + contentObject.link.class + '\" href=\"' + contentObject.link.href + '\">' + contentObject.link.content + '</a>';
	container.innerHTML = content;
	return container.innerHTML;

};

//Status Setter
if (morningHours) {

	//Status Indicator Selectors
	statusNameColor.className = 'green';
	statusName.textContent = 'Abierto';
	statusIndicatorColor.className = 'green-status';
	//Content Setter Function
	

} else if (afternoonHours) { 

	//Status Indicator Selectors
	statusNameColor.className = 'green';
	statusName.textContent = 'Abierto';
	statusIndicatorColor.className = 'green-status';
	//Content Setter Function
	

} else if (lunchHours) {

	//Status Indicator Selectors
	statusNameColor.className = 'orange';
	statusName.textContent = 'En la Comida';
	statusIndicatorColor.className = 'orange-status';
	//Content Setter Function
	

} else {

	//Status Indicator Selectors
	statusNameColor.className = 'red';
	statusName.textContent = 'Cerrado';
	statusIndicatorColor.className = 'red-status';
	//Content Setter Function

}