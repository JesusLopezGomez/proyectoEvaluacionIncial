//Recuperamos varios elementos de nuestro html
let indiceResultado = document.getElementById("indice");
let resultadoText = document.getElementById("resultadoText");

let numPeso = document.getElementById("numPeso");
let numAltura = document.getElementById("numAltura");

let generar = document.getElementById("generar");


//Con esto estoy a la espera de que le de click al elemento que este caso es un div de generar.
generar.addEventListener(`click`,function(){
    //Compruebo que lo que ha introducido el usuario, está correcto, es decir solo acepto números.
    if(isNaN(numPeso.value) || isNaN(numAltura.value)){ //Si la altura o el peso no es un número entraría por este if.
        resultadoText.textContent = "Error introduce números del 0 al 9"; //Le pongo el texto de error correspondiente
        resultadoText.style.color = "red"; //Le pongo color rojo.
    }else{ //Y en caso contario entraría por aquí y daria el resultado.
        let alturaMetros = numAltura.value/100;
        indiceResultado.textContent = (numPeso.value/((alturaMetros)*alturaMetros)).toFixed(2); //Le ponemos el resultado en el lugar que he seleccionado.
    }
});