// const listadoDeProductos = ['fertilizantes', 'bongs', 'papeliyos'];

// let acumuladoreDeTexto = "";

// for(let posicion = 0; posicion < 3; posicion++){

//     acumuladoreDeTexto += '<h1>'+listadoDeProductos[posicion]+ '</h1>' ;

// }



// document.write(acumuladoreDeTexto);



// function agregarAlCarrito(){
//     console.log("agregaste el producto al carrito: " + producto, stock); 

// }

// agregarAlCarrito('zapatillas nike', 20)
// agregarAlCarrito('remera de calamardo', 2)
// agregarAlCarrito('calzoncillo de shreck', 6)


// const stockQueTieneElProducto =
// function tenemosStock(stock) {
//     if(stock > 0){
//         return 'tenemos stock';
//     }else{
//         return 'no tenemos stock';
//     }


// TODO ESTO ES PARA HACER TECLAS DE SUBIR Y BAJAR CANTIDADES

let numeroProductos = 1;



function masProductos(){
    numeroProductos = numeroProductos + 1;
    document.getElementById("number-person").textContent = numeroProductos;
    if ((numeroProductos > 0)&&(numeroProductos < 8)){
        let down = document.getElementById("down");
        down.style.color = '#5383ec';
        down.style.pointerEvents = 'auto'
        
    }
    else if (numeroProductos == 9){
        let up = document.getElementById("up");
        up.style.pointerEvents = "none";
        up.style.color = '#E6EAEF';
    }
    return numeroProductos;
    
        
}


function menosProductos(){
    numeroProductos = numeroProductos - 1;
    document.getElementById("number-person").textContent = numeroProductos;
    let down = document.getElementById("down");
    if(numeroProductos == 0){
        down.style.color = '#E6EAEF';
        down.style.pointerEvents = 'none'
    }
    else if ((numeroProductos < 10)||(numeroProductos > 0)){
        down.style.pointerEvents = 'auto';
        let up = document.getElementById("up");
        up.style.pointerEvents = "auto";
        up.style.color = '#5383ec';
    }
}

