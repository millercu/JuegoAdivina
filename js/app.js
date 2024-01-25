numeroSecreto = 0
intentos = 1


// function life (){
//     let vida = ['❤️','❤️','❤️','❤️', 8]

//     vida.forEach( (lif) => {
//        vidas = document.querySelector('p')
//        vidas.innerHTML += lif
//     })

//     return
// }


function mostrarTexto(elemento, text){
    //Función para mostrar el texto
    let texto = document.querySelector(elemento)
    texto.innerHTML = text
    return
}

function capturar(){
    //Función para capturar el numero y para validarlo
   numeroUsuario = parseInt(document.getElementById('resultado').value)

   let ocultar = document.querySelector('h3')
   ocultar.hidden = false

   

   if(numeroUsuario == numeroSecreto){
       mostrarTexto('h3', `FELICIDADES!! Descubriste el número secreto!`)
       document.getElementById('boton_reiniciar').removeAttribute('disabled');
       
   }else{
       if(numeroUsuario > numeroSecreto){
         mostrarTexto('h3','El numero que ingresaste es MAYOR')
       }else{
        mostrarTexto('h3','El numero que ingresaste es MENOR')
        
       }
       

       if(intentos == 5){    
            alert(`Perdiste, vuelve a intentarlo. El numero secreto era: ${numeroSecreto}`)
            intentos = 1
            reiniciar()
       }

       vidas = document.querySelector('p')
       vidas.innerHTML = 'Intentos: ' + intentos

       intentos++

       

       limpiar()
   }
   return
}

function limpiar(){
    //Limpia la casilla donde se ingresa el numero
    document.getElementById('resultado').value = ''
}

function sortearNumero(){
    //Sortea el numero
    sortear = Math.floor(Math.random() * 100)+1
    console.log(sortear)
    return sortear
}


function app(){
    //Main
    numeroSecreto = sortearNumero() 
    // life()
    console.log(numeroSecreto)
}

function reiniciar(){
    //Reinicia el juego
    app()

    limpiar()

    document.getElementById('boton_reiniciar').setAttribute('disabled','true');
    let ocultar = document.querySelector('h3')
    ocultar.hidden = true

    intentos = 1
    vidas = document.querySelector('p')
       vidas.innerHTML = 'Intentos: ' + intentos

    console.log("Funciona!!")
}

app()



