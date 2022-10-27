import React from "react";

const ListContext = React.createContext();

function ListProvider(props) {

    const arrayProducts = [
        {
            nombre: 'TvAntiguo',
            descripcion: 'Antiguo',
            caracteristicas: '16 pulgadas',
            precio: '16000000'
        },
        {
            nombre: 'Tv-Samsung',
            descripcion: 'Samsumg tv',
            caracteristicas: '32 pulgadas',
            precio: '26000000'
        },
        {
            nombre: 'Smart LG',
            descripcion: 'Smart tv',
            caracteristicas: '40 pulgadas',
            precio: '26580000'
        },
        {
            nombre: 'Televisor prueba',
            descripcion: 'Smart tv',
            caracteristicas: '40 pulgadas',
            precio: '26580000'
        }
    ]

    //Estado 1
    const [arrayProductsState, setArrayProductsState] = React.useState(arrayProducts);

    //Guardar producto-exportamos al form y se usa
    function guardarProducto(newProduct) {
        const copyarrayProducts = [newProduct].concat(arrayProductsState)
        setArrayProductsState(copyarrayProducts)
    }

    //Estado para mostrar objeto
    const product = {
        nombre: 'tv test',
        descripcion: 'test',
        caracteristicas: 'test',
        precio: '2580'
    }

    const [viewProductsState, setViewProductsState] = React.useState(product);


    return (
        //Proveedor
        <ListContext.Provider value={{
            guardarProducto, arrayProductsState, setArrayProductsState,
            viewProductsState, setViewProductsState
        }}>
            {props.children}
        </ListContext.Provider>
    )
}

export { ListContext, ListProvider };