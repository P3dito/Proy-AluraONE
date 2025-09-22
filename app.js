let amigos = []
let nombre_ingresado = '';

function actualizar_contenido(id, contenido){
    document.getElementById(id).value=contenido;
    return;
}

function agregar_Amigo(){
    nombre_ingresado = document.getElementById('amigo').value.trim();
    if(nombre_ingresado === ''){
        alert("Por favor, inserte un nombre")
        actualizar_contenido('amigo','')
    }else{
        for(var i=0; i<amigos.length; i++){
            if(nombre_ingresado === amigos[i]){
                alert("Nombre ya ingresado a la lista")
                actualizar_contenido('amigo','');
                return;
            }
        }
        amigos.push(nombre_ingresado);
        actualizar_contenido('amigo','');
        mostrar_lista();
    }
}

function mostrar_lista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length <= 1){  
        alert("Nombres insuficientes para realizar el sorteo")
    }else{
        let num = Math.floor(Math.random()*amigos.length);
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = amigos[num]
    }
}