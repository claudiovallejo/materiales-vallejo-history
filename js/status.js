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

//Open Contact Object
var openContactInfo = {

	image: {id: 'marcanos', src: 'imagenes/iconos/marcanos.svg'},
	title: 'Márcanos',
	description: 'Cotiza o cuéntanos en que te podemos ayudar, estamos para servirte.',
	link: {class: 'call', href: 'tel:+52(868)8161353', content: '+52 (868) 816 1353'}

};

//Lunch Contact Object
var lunchContactInfo = {

	image: {id: 'mensajes', src: 'imagenes/iconos/mensajes.svg'},
	title: 'Déjanos un Mensaje',
	description: 'Salimos a comer, pero escríbenos y cuéntanos en que te ayudamos.',
	link: {class: 'arrow', href: 'mailto:hola@claudiovallejo.mx', content: 'Escribir Mensaje '}

};

//Closed Contact Object
var closedContactInfo = {

	image: {id: 'mensajes', src: 'imagenes/iconos/mensajes.svg'},
	title: 'Déjanos un Mensaje',
	description: 'Por el momento nuestra sucursal está cerrada, escríbenos y dinos en te ayudamos.',
	link: {class: 'arrow', href: 'mailto:hola@claudiovallejo.mx', content: 'Escribir Mensaje '}

};

//Content Setter Function
var contentSetter = function(contentObject) {

	container = document.getElementById('contact');
	content = '<img id=\"' + contentObject.image.id + '\" src=\"' + contentObject.image.src + '\">';
	content += '<h2>' + contentObject.title + '</h2>';
	content += '<p>' + contentObject.description + '</p>';
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
	contentSetter(openContactInfo);

} else if (afternoonHours) { 

	//Status Indicator Selectors
	statusNameColor.className = 'green';
	statusName.textContent = 'Abierto';
	statusIndicatorColor.className = 'green-status';
	//Content Setter Function
	contentSetter(openContactInfo);

} else if (lunchHours) {

	//Status Indicator Selectors
	statusNameColor.className = 'orange';
	statusName.textContent = 'En la Comida';
	statusIndicatorColor.className = 'orange-status';
	//Content Setter Function
	contentSetter(lunchContactInfo);

} else {

	//Status Indicator Selectors
	statusNameColor.className = 'red';
	statusName.textContent = 'Cerrado';
	statusIndicatorColor.className = 'red-status';
	//Content Setter Function
	contentSetter(closedContactInfo);

}