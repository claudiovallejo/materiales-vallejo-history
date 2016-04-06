<?php
if(isset($_POST)) {

	//form validation vars
	$formok = true;
	$errors = array();

	//submission data
	$ipaddress = $_SERVER['REMOTE_ADDR'];
	$date = date('d/m/Y');
	$time = date('H:i:s');

	//form data
	$fullname = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	//form validation to go here...
	//validate name is not empty
	if(empty($name)) {

		$formok = false;
		$errors[] = "Falta poner tu nombre";

	} 

	//validate email addres is not empty
	if(empty($email)) {

		$formok = false;
		$errors[] = "Falta poner tu email";

	} elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {

		$formok = false;
		$errors[] = "El email que haz escrito no es un email válido";

	}

	//validate message is not empty
	if(empty($message)) {

		$formok = false;
		$errors[] = "Falta escribir tu mensaje";

	}

	//validate message is greater than 10 characters
	elseif(strlen($message) < 10) {

		$formok = false;
		$errors[] = "Tu mensaje debe ser mayor que 10 caracteres"

	}

	//send email if all is ok
	if($formok) {

		ini_set("sendmail_from", "cliente@suempresa.com");
		$headers = "De: cliente@suempresa.com" . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		$emailbody = 	"<p>¡Buen día!</p>
						<p> Haz recibido un mensaje nuevo de la página de Materiales Vallejo. </p>
						<p><strong>Nombre: </strong> {$name} </p>
						<p><strong>Email: </strong> {$email} </p>
						<p><strong>Mensaje: </strong> {$message} </p>
						<p> Haz recibido un mensaje de {$ipaddress} el {$date} a las {$time}</p>";

		mail("contacto@materialesvallejo.mx", "Materiales Vallejo — Nuevo Mensaje", $emailbody, $headers);

	}

	//what we need to return back to our form
	$returndata = array(

		'posted_form_data' => array(

			'name' => $name,
			'email' => $email,
			'message' => $message

			),

		'form_ok' => $form_ok,
		'errors' => $errors

	);

	//if this is not an ajax request
	if(empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {

		//set session variables
		session_start();
		$_SESSION['cf_returndata'] = $returndata;

		//redirect back to form
		header('location: ' . $_SERVER['HTTP_REFERER']);

	}

}

