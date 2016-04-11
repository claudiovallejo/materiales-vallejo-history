//Open Contact Object
var openContactInfo = {

	image: {id: 'marcanos', srca: 'imagenes/iconos/marcanos.svg', srcb: '../imagenes/iconos/marcanos.svg'},
	title: 'Márcanos',
	description: 'Cotiza o cuéntanos en que te podemos ayudar, estamos para servirte.',
	link: {class: 'call', href: 'tel:+52(868)8161353', content: '+52 (868) 816 1353'}

};

//Closed Contact Object
var closedContactInfo = {

	image: {id: 'mensajes', srca: 'imagenes/iconos/mensajes.svg', srcb: '../imagenes/iconos/mensajes.svg'},
	title: 'Déjanos un Mensaje',
	description: 'Estamos para servirte, escríbenos para<br> cotizarte o dinos en que te podemos ayudar.',
	link: {class: 'arrow', href: 'mailto:matvallejo@outlook.com', content: 'Escribir Mensaje '}

};

//Content Setter Function
var contentSetter = function(contentObject) {
	source = '';
	if (productPage) {
		source = contentObject.image.srcb;

	} else {
		source = contentObject.image.srca;

	}

	container = document.getElementById('contact');
	content = '<img id=\"' + contentObject.image.id + '\" src=\"' + source + '\">';
	content += '<h2>' + contentObject.title + '</h2>';
	content += '<p>' + contentObject.description + '</p>';
	content += '<a class=\"' + contentObject.link.class + '\" href=\"' + contentObject.link.href + '\">' + contentObject.link.content + '</a>';
	container.innerHTML = content;
	return container.innerHTML;

};

console.log(workDay);
console.log(currentTime);
console.log(lunchBreak);

//Status Setter
if (workDay) {

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

	} else if (lunchBreak) {
		//Status Indicator Selectors
		statusNameColor.className = 'orange';
		statusName.textContent = 'En la Comida';
		statusIndicatorColor.className = 'orange-status';
		//Content Setter Function
		contentSetter(closedContactInfo);

	} else {
		//Status Indicator Selectors
		statusNameColor.className = 'red';
		statusName.textContent = 'Cerrado';
		statusIndicatorColor.className = 'red-status';
		//Content Setter Function
		contentSetter(closedContactInfo);

	}

} else if (halfDay) {

	if (saturdayHours) {
		//Status Indicator Selectors
		statusNameColor.className = 'green';
		statusName.textContent = 'Abierto';
		statusIndicatorColor.className = 'green-status';
		//Content Setter Function
		contentSetter(openContactInfo);

	} else {
		//Status Indicator Selectors
		statusNameColor.className = 'red';
		statusName.textContent = 'Cerrado';
		statusIndicatorColor.className = 'red-status';
		//Content Setter Function
		contentSetter(closedContactInfo);

	}

} else if (restDay || holiday) {

		//Status Indicator Selectors
		statusNameColor.className = 'red';
		statusName.textContent = 'Cerrado';
		statusIndicatorColor.className = 'red-status';
		//Content Setter Function
		contentSetter(closedContactInfo);

}
