
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
    checkboxes.forEach(function(checkbox) {
        gustokoena.push(checkbox.nextSibling.textContent.trim());
    });
    var gustokoenaValue = gustokoena.length > 0 ? gustokoena.join(', ') : 'Ninguno';

    // Formatear los datos
    var datos = `
        <p><strong>Sexua:</strong> ${sexuaValue}</p>
        <p><strong>Izena:</strong> ${izena}</p>
        <p><strong>Abizena:</strong> ${abizena}</p>
        <p><strong>Helbidea:</strong> ${helbidea}</p>
        <p><strong>Hiriak:</strong> ${hiriak}</p>
        <p><strong>Gustokoena:</strong> ${gustokoenaValue}</p>
    `;

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


       
        


    