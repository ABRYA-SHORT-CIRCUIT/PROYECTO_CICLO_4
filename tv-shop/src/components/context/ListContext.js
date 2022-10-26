import React from "react";

const ListContext = React.createContext();

function ListProvider(props){

    const arrayProducts =[
        {
            nombre:'TvAntiguo',
        descripcion:'Antiguo',
        caracteristicas:'16 pulgadas',
        precio:'16000000'
        },
        {
            nombre:'Tv-Samsung',
        descripcion:'Samsumg tv',
        caracteristicas:'32 pulgadas',
        precio:'26000000'
        },
        {
        nombre:'Smart LG',
        descripcion:'Smart tv',
        caracteristicas:'40 pulgadas',
        precio:'26580000'
        },
        {
            nombre:'Televisor prueba',
            descripcion:'Smart tv',
            caracteristicas:'40 pulgadas',
            precio:'26580000'
            }
    ]

    //Estado 1
    const [arrayProductsState, setArrayProductsState] = React.useState(arrayProducts);

    //Guardar producto-exportamos al form y se usa
    function guardarProducto(newProduct){
        //Crear copia del array
        //agregamos el nuevo elemento al array   
        //setiamos el array con set

        const copyarrayProducts = [newProduct].concat(arrayProducts)
        setArrayProductsState(copyarrayProducts)
    }


    // const [newProduct, setNewProduct] = React.useState(arrayProducts.push(product));

    return(
        //Proveedor
        <ListContext.Provider value={{guardarProducto, arrayProductsState, setArrayProductsState}}>
            {props.children}
        </ListContext.Provider>
    )
}

export {ListContext, ListProvider};