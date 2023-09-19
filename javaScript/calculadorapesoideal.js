////Recuperamos varios elementos de nuestro html calculadora de peso ideal
let indiceResultadoI = document.getElementById("indiceI");
let resultadoTextI = document.getElementById("resultadoTextI")

let numAlturaI = document.getElementById("numAlturaI");

let hombre = document.getElementById("hombreValor");
let mujer = document.getElementById("mujerValor");

let generarI = document.getElementById("generarI");

//Con esto estoy a la espera de que le den click al boton de generar para que empiece su función.
generarI.addEventListener(`click`,function(){
    if(hombre.checked || mujer.checked){ //Compruebo que los datos están correctos
        if(!isNaN(numAlturaI.value) && !numAlturaI.value == ""){ //Compruebo que los datos están correctos
            resultadoTextI.textContent = "Su peso ideal es: " + (hombre.checked ? (0.75*parseInt(numAlturaI.value)-55) : (0.75*parseInt(numAlturaI.value)-62.5));
            resultadoTextI.style.color = "black";
        }else{//Si no son correctos los datos sale el mensaje de abajo de color rojo
            resultadoTextI.textContent = "Error introduce números del 0 al 9"; 
            resultadoTextI.style.color = "red";
        }
    }else{ //Si no son correctos los datos sale el mensaje de abajo de color rojo
        resultadoTextI.textContent = "Error seleccione su género";
        resultadoTextI.style.color = "red";
    }
})