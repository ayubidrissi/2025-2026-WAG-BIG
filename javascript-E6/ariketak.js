// Ikaslearen eraikitzailea
class Estudiante {
  constructor(nombre, edad, ...asignaturas) {
    this.nombre = nombre;
    this.edad = edad;
    this.asignaturas = asignaturas;
  }

  // Agurtzeko metodoa
  saludar() {
    console.log('Hola, me llamo ' + this.nombre + ' y tengo ' + this.edad + ' años.');
  }

  // Ikasgaiak ikusteko metodoa
  listarAsignaturas() {
    console.log('Mis asignaturas son: ' + this.asignaturas.join(', '));
  }
}

// Ikasle berria egiteko lerroa
const estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');
