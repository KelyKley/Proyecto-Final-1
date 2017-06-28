var estudiantes = [];
function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var student = prompt("Nombre de la estudiante: ");
    var porcentTecni = prompt("Porcentaje Técnico: ");
    var porcentSocio = prompt("Porcentaje Habilidades Socio-Emocionales: ");
    var estudiante = {
      nombre : student,
      porcentajeTecnico : porcentTecni,
      porcentajeHSE : porcentSocio
    };
    estudiantes.push(estudiante);
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var srt = "";
    for (var i in estudiantes) {
      srt += mostrar(estudiantes[i]);
    }
    return srt;
  }

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var arr = [];
    for (var i in estudiantes) {
      if(estudiantes[i].nombre.toLowerCase() == nombre.toLowerCase()){
        arr.push(estudiantes[i]);
      }
    }
    return arr;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
  return estudiantes.sort(function(op1,op2){
      return (op2.porcentajeTecnico - op1.porcentajeTecnico);
    });
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
  return estudiantes.sort(function(op1,op2){
      return (op2.porcentajeHSE - op1.porcentajeHSE);
    });
}
