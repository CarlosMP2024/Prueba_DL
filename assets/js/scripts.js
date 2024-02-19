$(document).ready(function () {
  // Inicializar tooltip
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Manejar clic en el botón
  $("#enviarBtn").on("click", function () {
    // Mostrar el tooltip
    $(this).tooltip("show");

    setTimeout(function () {
      $("#enviarBtn").tooltip("hide");
    }, 2000);

    // Mostrar el modal "Mensaje enviado con éxito"
    $("#mensajeEnviadoModal").modal("show");
  });
});
