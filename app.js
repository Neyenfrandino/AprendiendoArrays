function crearParrafoTienda(textoLabel, valorMin){
    //crear las etiquetas de parrafo
    let elementoParrafo = document.createElement('p');

    //crear etiqueta label 
    let elementoEtiqueta = document.createElement('label');
    elementoEtiqueta.innerText = textoLabel + ': ';

    //conectar con el input 
    elementoEtiqueta.setAttribute('for', textoLabel);

    //crear input 
    let elementoInput = document.createElement('input');

    //establecer atributos de input
    elementoInput.setAttribute('type', 'number');
    elementoInput.setAttribute('id', textoLabel);
    elementoInput.setAttribute('min', valorMin);
    elementoInput.setAttribute('value', 0);

    //agregar input y label al parrafo 
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo
}

function crearTiendas(contenedorID, min, cantidadTiendas){
    //Contenedor por su id
    let elementoContenendor = document.getElementById(contenedorID);

    //loop para crear tantas tiendas como se pida 
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas;  conteoTiendas++){
        //crear el texto del label patra llamar a la funcion 
        let textoEtiqueta = 'Tienda ' + conteoTiendas;

        //crear tiendas con la funcion crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);
        
        //agregar el parrafo al contenedor 
        elementoContenendor.appendChild(parrafoTienda);
    }
}

window.onload = crearTiendas('itensTienda', 0, 8);


function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}


function calcular(){
    let btnCalcular = document.getElementById('calcular');  
        let ventas = [];
        let posicionVentas = 0;
        let elementoVentas = document.getElementById('itensTienda')
    btnCalcular.addEventListener('click', function(){
        for(let items of elementoVentas.children){
            let valorVentas = extraerNumeroDesdeElemento(items.children[1]);
            ventas[posicionVentas] = valorVentas;
            posicionVentas = posicionVentas + 1;
        }
         
         
        let totalVentas = sumarTotal(ventas)
        let ventaMayor = calcularMayor(ventas)
        let ventaMenor = calcularMenor(ventas)

        let mensajeSalida = 'Total Ventas: ' + totalVentas + 
                            ' / Ventas mas altas: ' + ventaMayor + 
                            ' / Ventas mas bajas: ' + ventaMenor; 
        let elementoSalida = document.getElementById('parrafoSalida');

        elementoSalida.textContent = mensajeSalida
    })
   
}

function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total = total + venta 
    }
    return total; 
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array){
        if(venta > maximo){
            maximo = venta
        }    
    }
    return maximo
}


function calcularMenor(array){
    let minimo = array[0];

    for(let venta of array){
        if(venta < minimo){
            minimo = venta
        }    
    }
    return minimo
}


calcular()