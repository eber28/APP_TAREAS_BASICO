function mostrarMensaje(){
    console.log("hola chistes ya no sufras ")
}

function capturaTexto(){
    let input=document.querySelector("#nuevaTarea")
    if (input.value===""){
        alert("el input debe tener wtexto")
        return
    }
    //capturamos el valor de input
    let valorInput=input.value
//capturamos el elemento ul
    let ul=document.querySelector("#listaTareas")

    //creamos un elemento li
    let li=document.createElement("li")

    //le asignamos como contenido de li el valor capturado del input
    li.textContent=valorInput

    //creamos el boton eleminar
    let button=document.createElement("button")
    button.textContent="eliminar"
    button.onclick=function(){li.remove()}
    li.appendChild(button)
    //le agremos como hijo el li al elemento padre ul
    ul.appendChild(li)
 
    //esta linea de codigo limpia mi input
    document.querySelector("#nuevaTarea").value=""

    //esta linea hacer focus en el input, lo mantienen activo listo para poder ingresar otro texto
    input.focus()

}

