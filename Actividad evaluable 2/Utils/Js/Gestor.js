//Variables
let inputNombre = document.querySelector("#input-nombre");
let inputApellido = document.querySelector("#input-apellido");
let inputCorreo = document.querySelector("#input-correo");
let boton = document.querySelector("#trabajadorFormulario button");
let listaUsuarios = document.querySelector("#listaTrabajadores");
let resumenDepartamentos = document.querySelector("#resumenDepartamentos");
let listaUsuariosDatos = [];

// Evento //Cuando el boton es clicado el código dentro de la función flecha "()=>{......}" se ejecuta, (Verifica si los campos tienen valores/si->Crea nuevo trabajaor->se agrega al array, crea un nodo lista "<li>" y agrega el nodo a la nueva lista/ No->Debes rellaenar todos los campos) 
boton.addEventListener("click", () => {
  if (inputNombre.value.length > 0 && inputApellido.value.length > 0 && inputCorreo.value.length > 0) {
    let trabajador = {
      nombre: inputNombre.value,
      apellido: inputApellido.value,
      correo: inputCorreo.value,
      departamento: document.querySelector("#departamento").value,
    };
    listaUsuariosDatos.push(trabajador);
    let nodo = document.createElement("li");
    nodo.textContent = `${trabajador.nombre} ${trabajador.apellido}`;
    nodo.className = "animate__animated animate__zoomInUp list-group-item";
    // Agrega nuevo nodo a la lista de usuarios
    listaUsuarios.append(nodo);

    Swal.fire({
      title: "Correcto",
      text: "Usuario agregado correctamente",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Debes rellenar todos los campos",
      icon: "error",
    });
  }

  //llamada a los métodos
  mostrarResumenDepartamentos();
  limpiarFormulario()

});

//Métodos
function limpiarFormulario() {
  inputNombre.value = "";
  inputApellido.value = "";
  inputCorreo.value = "";
  document.querySelector("#departamento").value = "IT";
}

function mostrarResumenDepartamentos() {
  resumenDepartamentos.innerHTML = "";
  listaUsuariosDatos.forEach((trabajador) => {
    resumenDepartamentos.innerHTML += `
      <p>
        Departamento: ${trabajador.departamento} /
        Nombre: ${trabajador.nombre} /
        Apellido: ${trabajador.apellido} /
        Correo: ${trabajador.correo} 
      </p>
    `;
  });
}


