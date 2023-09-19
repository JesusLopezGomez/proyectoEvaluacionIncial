//Recupero todos los elementos de nuestro html de contacto
let nombreC = document.getElementById("nombreC");
let apellidoC = document.getElementById("apellidoC");
let tabla = document.getElementById("tablaC");

let boton = document.getElementById("botonC");

boton.addEventListener(`click`,function(){
    //Hago las comprobaciones para que los datos estén correctamente
    if((nombreC.value != "" && apellidoC != "") && (isNaN(nombreC.value) && isNaN(apellidoC.value))){
        let fila = document.createElement("tr"); //Creo un elemento fila

        let col = document.createElement("td"); //Creo una columna

        col.textContent = tabla.getElementsByTagName("tr").length; //Le asigno el valor a la columna

        let col1 = document.createElement("td");

        col1.textContent = nombreC.value;

        let col2 = document.createElement("td");

        col2.textContent = apellidoC.value;

        fila.appendChild(col); //Pongo la columna en la fila
        fila.appendChild(col1);
        fila.appendChild(col2);
        
        tabla.appendChild(fila); //Y por último pongo la fila en la tabla
    }
})