<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];

  // Validar y sanitizar los datos si es necesario

  // Almacenar los datos en un archivo de texto plano
  $datos = "Nombre: $nombre, Correo: $correo, CorreoEnlace: $correoEnlace\n";
  file_put_contents("verificacion.txt", $datos, FILE_APPEND);

  echo "¡Registro exitoso!";
} else {
  echo "Acceso no permitido";
}

// Agregar código adicional para manejar el enlace con el correo
if (isset($_GET["correoEnlace"])) {
  $correoEnlace = $_GET["correoEnlace"];

  // Puedes realizar acciones adicionales con el correoEnlace si es necesario
}
?>

