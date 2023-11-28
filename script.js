function registrarVoluntario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
  
    // Establece el valor del campo oculto con el correo
    document.getElementById("correoEnlace").value = correo;
  
    // Aquí podrías realizar algunas validaciones adicionales antes de enviar los datos
  
    // Enviar los datos al servidor (usando AJAX, por ejemplo)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "registrar.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText); // Puedes mostrar un mensaje de éxito al usuario
      }
    };
    xhr.send("nombre=" + nombre + "&correo=" + correo);
  }
  