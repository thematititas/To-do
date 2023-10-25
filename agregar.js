
var comentarios;

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

    getJSONData(LISTA_URL).then(function (result) {//verificar el status de comentarios
        if (result.status === "ok") {
            result.data.forEach(comentario => {//recorre los comentarios
                showComentario(comentario);
            });     
        }
        showComentario(result.data)
        
    });
    document.getElementById("agregar").addEventListener("click", function () {
        if (document.getElementById("nueva-tarea").value) {
            showComentario(document.getElementById("nueva-tarea").value);
            limpiar();
        };
    });
    

});
