import React from "react";



const ListContext = React.createContext();

function ListProvider(props) {

    const arrayProducts = JSON.parse(localStorage.getItem("saveData"))

    //Estado 1
    const [arrayProductsState, setArrayProductsState] = React.useState(arrayProducts);

    //Guardar producto-exportamos al form y se usa
    function guardarProducto(newProduct) {
        const copyarrayProducts = [newProduct].concat(arrayProductsState)
        setArrayProductsState(copyarrayProducts)
        localStorage.setItem("saveData", JSON.stringify(arrayProductsState))
        console.log(arrayProductsState)
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