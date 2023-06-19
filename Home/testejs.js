function scrollar(parametro){
    parametro.classList.add("sumiu")
}

function checarValor(valor, identificadorInput, identicador){
    if (identificadorInput.value == valor.id){
        console.log("ok")
        identicador.classList.add("sumiu")
    }
    else{
        console.log("oi")
    }
}