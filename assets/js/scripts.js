// Asegúrate de incluir jQuery antes de este script
$(document).ready(function () {
  // Inicializar tooltip
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Manejar clic en el botón
  $("#enviarBtn").on("click", function () {
    // Mostrar el tooltip
    $(this).tooltip("show");

    // Opcional: Agregar un retraso y luego ocultar el tooltip
    setTimeout(function () {
      $("#enviarBtn").tooltip("hide");
    }, 2000); // 2000 milisegundos (2 segundos) - ajusta según sea necesario

    // Mostrar el modal "Mensaje enviado con éxito"
    $("#mensajeEnviadoModal").modal("show");
  });
});
