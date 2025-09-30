
// que al pulsar en jauna salga la imagen del hombre y al pulsar en andrea la de mujer
function argazkiaAldatu() {
  var hombre = document.querySelector('img[alt="caraHombre"]');
  var mujer = document.querySelector('img[alt="caraMujer"]');
  if (hombre.hidden) {
    hombre.hidden = false;
    mujer.hidden = true;
  } else {
    hombre.hidden = true;
    mujer.hidden = false;
  }
}

// Función para manejar el envío del formulario
function enviar(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  // Obtener valores del formulario
  var sexua = document.querySelector('input[name="sexua"]:checked');
  var sexuaValue = sexua ? sexua.nextSibling.textContent.trim() : 'No seleccionado';

  var izena = document.getElementById("izena").value;
  var abizena = document.getElementById("abizena").value;
  var helbidea = document.getElementById("helbidea").value;
  var hiriak = document.getElementById("aukeratu").value;

  // Obtener checkboxes marcados
  var gustokoena = [];
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    gustokoena.push(checkboxes[i].nextSibling.textContent.trim());
  }
  var gustokoenaValue = gustokoena.length > 0 ? gustokoena.join(', ') : 'Ninguno';

  // Formatear los datos
  var datos = "\n        <p><strong>Sexua:</strong> " + sexuaValue + "</p>\n        <p><strong>Izena:</strong> " + izena + "</p>\n        <p><strong>Abizena:</strong> " + abizena + "</p>\n        <p><strong>Helbidea:</strong> " + helbidea + "</p>\n        <p><strong>Hiriak:</strong> " + hiriak + "</p>\n        <p><strong>Gustokoena:</strong> " + gustokoenaValue + "</p>\n    ";

  // Escribir en el div "textarea"
  var textarea = document.getElementById("textarea");
  textarea.innerHTML += datos;
}

// Función para limpiar el textarea (opcional, para el botón "Ezabatu")
function ezabatu() {
  var textarea = document.getElementById("textarea");
  textarea.innerHTML = "<h1>sartu dituzun datuak:</h1>";
}

// Cambia el onclick del botón submit a "enviar(event)" o define bidali() si prefieres
function bidali(event) {
  enviar(event);
}

// Ikaslearen eraikitzailea
function Estudiante(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.asignaturas = [];
  for (var i = 2; i < arguments.length; i++) {
    this.asignaturas.push(arguments[i]);
  }
}

// Agurtzeko metodoa
Estudiante.prototype.saludar = function () {
  console.log("Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años.");
};

// Ikasgaiak ikusteko metodoa
Estudiante.prototype.listarAsignaturas = function () {
  console.log("Mis asignaturas son: " + this.asignaturas.join(', '));
};







