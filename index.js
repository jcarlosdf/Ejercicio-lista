pacientes = [
  { nombre: "Juan", triage: 5 },
  { nombre: "Camilo", triage: 2 },
  { nombre: "Adrian", triage: 3 },
  { nombre: "Miguel", triage: 3 },
  { nombre: "Antonio", triage: 3 },
  { nombre: "Mateo", triage: 3 },
  { nombre: "Wilson", triage: 4 },
  { nombre: "Yaneth", triage: 5 },
  { nombre: "Anderson", triage: 5 },
  { nombre: "Pablo", triage: 4 },
  { nombre: "Simon", triage: 5 },
  { nombre: "Eleonor", triage: 5 },
  { nombre: "Jose", triage: 4 },
  { nombre: "Maria", triage: 1 },
  { nombre: "Ana", triage: 2 },
  { nombre: "Isabel", triage: 1 },
  { nombre: "Jhon", triage: 2 },
  { nombre: "Camila", triage: 2 },
  { nombre: "Daniela", triage: 5 },
  { nombre: "Jorge", triage: 5 },
  { nombre: "Joaquin", triage: 2 },
  { nombre: "Mia", triage: 5 },
  { nombre: "Federico", triage: 3 },
  { nombre: "Diego", triage: 3 },
  { nombre: "Gustavo", triage: 3 },
  { nombre: "Harold", triage: 3 },
  { nombre: "Sofia", triage: 5 },
  { nombre: "Monica", triage: 4 },
  { nombre: "Eliecer", triage: 4 },
  { nombre: "Elias", triage: 1 },
  { nombre: "Jesus", triage: 5 },
  { nombre: "David", triage: 1 },
  { nombre: "Fabian", triage: 1 },
  { nombre: "Andres", triage: 3 },
  { nombre: "Julio", triage: 2 },
  { nombre: "Felipe", triage: 4 },
];

colaOperacion = [];
colaAtencionInmediata = [];
colaAtencionNoUrgente = [];

function atenderPaciente() {
  pacientes.filter(paciente=>{
    if(paciente.triage==1){
      colaOperacion.push(paciente)
    }else if(paciente.triage===2){
      colaAtencionInmediata.push(paciente)
    }else{
      colaAtencionNoUrgente.push(paciente)
    }
  })
  pacientes.length = 0;
  mostrarColaTotalPacientes()
  mostrarColaOperacion()
  mostrarColaAtencionInmediata()
  mostrarColaAtencionNoUrgente()
}

function mostrarColaTotalPacientes() {
  dibujarTabla("tablaTotalPacientes", pacientes);
}

function mostrarColaOperacion() {
  dibujarTabla("tablaColaOperacion", colaOperacion);
}

function mostrarColaAtencionInmediata() {
  dibujarTabla("tablaColaAtencionInmediata", colaAtencionInmediata);
}

function mostrarColaAtencionNoUrgente() {
  dibujarTabla("tablaColaAtencionNoUrgente", colaAtencionNoUrgente);
}

function dibujarTabla(idElemento, arreglo) {
  table = document.getElementById(idElemento)

  while(table.childNodes.length >= 1) {
    table.removeChild(table.firstChild);
  }

  for (var i = 0; i < arreglo.length; i++) {
    txtNombre = document.createTextNode(arreglo[i].nombre);
    txtTriage = document.createTextNode(arreglo[i].triage);
    tdNombre = document.createElement("td");
    tdTriage = document.createElement("td");
    tr = document.createElement("tr");

    tdNombre.appendChild(txtNombre);
    tdTriage.appendChild(txtTriage);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTriage);
    table.appendChild(tr);
  }

  let element = document.getElementById(idElemento + "Txt");
  element.textContent = "El número de pacientes es: " + arreglo.length

}
