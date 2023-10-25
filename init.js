
function showComentario(tarea){
    let nuevaTarea = "";
    nuevaTarea += ` <div class="tarea"> 
        <label for="tarea-${tarea}">
        <input type="checkbox" name="${tarea}" id="tarea-${tarea}"> ${tarea}
        </label>
    `
    document.getElementById("lista").innerHTML += nuevaTarea; 
}


function limpiar(){
    document.getElementById("nueva-tarea").value ="";
}

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("agregar").addEventListener("click", function () {
        if (document.getElementById("nueva-tarea").value) {
            showComentario(document.getElementById("nueva-tarea").value);
            limpiar();
        };
    });


});
