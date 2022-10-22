//Aca interactuamos con nuestro almacenamiento
const guardarContacto = (d, contacto) => {
    d.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}
const cargarContactos = (d, parentNode) => {
    let claves = Object.keys(d)

    for (clave of claves) {
        let contacto = JSON.parse(d.getItem(clave))
        crearContacto(parentNode, contacto, d)
    }
}

const crearContacto = (parentNode, contacto, d) => {
    //Creamos nuestros elementos que seran agregados a la lista debajo del formulario
    
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion

    iconoBorrar.innerHTML = 'delete_forever'
    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')
    
    iconoBorrar.onclick=()=>{
        d.removeItem(contacto.id)
        window.location.href= '/'
    }
//Aca insertamos un nuevo nodo
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}
