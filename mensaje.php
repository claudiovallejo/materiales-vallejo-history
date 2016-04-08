<?php session_start() ?>
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="css/mensaje.css">
		<link href='https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900' rel='stylesheet' type='text/css'>
		<script src="https://code.jquery.com/jquery-2.2.2.js"></script>
		<!-- <script src="https://code.jquery.com/jquery-2.2.2.min.js"></script> -->
		<title> Materiales Vallejo | Enviar Mensaje </title>

	</head>
	<body>
		<header>
			<!-- Navigation Menu -->
			<div class="nav-bar">
				<nav>
					<a href="index.html">
						<img id="logo">
					</a>
					<ul>
						<li>
							<a href="materiales/cementos.html">
								Materiales
							</a>
						</li>
						<li>
							<a href="mayoreo.html">
								Mayoreo
							</a>
						</li>
						<li>
							<a href="menudeo.html">
								Menudeo
							</a>
						</li>
						<li>
							<a href="nosotros.html">
								Nosotros
							</a>
						</li>
						<li>
							<a href="contacto.html">
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>

		<?php
		//init variables
		$cf = array();
		$sr = false;

		if(isset($_SESSION['cf_returndata'])) {

			$cf = $_SESSION['cf_returndata'];
			$sr = true;

		}

		?>

		<!-- Message Sent  -->
		<div class="wrapper">
			<section id="success" class="<? php echo ($sr && $cf['form_ok']) ? 'visible' : ''; ?>">
				<img id="icon" src="imagenes/success.svg">
				<h1>
					Hemos recibido tu mensaje
				</h1>
				<h3>
					Muchas gracias por contactarnos, responderemos a tu mensaje lo antes posible. ¡Que tengas buen día!
				</h3>
				<div class="links">
					<ul>
						<li>
							<a class="arrow" href="index.html">
								Ir a Inicio
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>

		<!-- Temporary Error Message -->
		<div class="wrapper">
			<section id="error" class="<?php echo ($sr && !$cf['form_ok']) ? 'visible' : ''; ?>">
				<img id="icon" src="imagenes/m-error.svg">
				<h1>
					Esta es una prueba de como no se llena una forma
				</h1>
				<?php

					if(isset($cf['errors']) && count($cf['errors']) > 0) :
						foreach($cf['errors'] as $error) :

				?>
				<h3><?php echo $error ?></h3>
				<?php
					endforeach;
				endif;
				?>
				<div class="links">
					<ul>
						<li>
							<a class="arrow" href="index.html">
								Ir a Inicio
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>

		<!-- Message Form -->
		<section class="message">
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<h1>
								Estamos para servirte
							</h1>
							<h3 id="note">
								Si tienes preguntas o buscas el precio de algun producto<br>
								escríbenos un mensaje, te responderemos lo antes posible.
							</h3>
						</div>
					</div>
				</div>
				<form id="message" method="get" action="mensaje.html">
					<div class="container">
						<div class="row">
							<div class="col-6">
								<label id="name">
									<p id="label">
										Nombre Completo
									</p>
									<input type="text" name="nombre-completo" placeholder="Nombre Completo" required="required" autofocus="autofocus">
								</label>
							</div>
							<div class="col-6">
								<label id="email">
									<p id="label">
										Correo Electrónico
									</p>
									<input type="email" name="correo-electronico" placeholder="Correo Electrónico" required="required">
								</label>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<label for="mensaje">
									<p id="label">
										Cuéntanos como te podemos ayudar
									</p>
								</label>
								<textarea id="mensaje" placeholder="Cuéntanos como te podemos ayudar" required="required" data-minlength="10"></textarea>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<button type="submit" class="arrow">Enviar Mensaje</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>

		<!-- Footer -->
		<div class="footer">
			<div class="wrapper">
				<footer>
					<div class="copyright">
						<p>© <script>document.write(new Date().getFullYear())</script> Materiales Vallejo<p>
					</div>
					<div class="legal">
						<ul>
							<li><a href="politicas.html">Política de Privacidad</a></li>
							<li><p class="separator"></p></li>
							<li><a class="author" href="http://www.claudiovallejo.me">Diseñado en México<a></li>
						</ul>
					</div>
				</footer>
			</div>
		</div>

	</body>

</html>