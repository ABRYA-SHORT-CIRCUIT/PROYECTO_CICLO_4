import React from "react";

const ListContext = React.createContext();

function ListProvider(props) {

    //Estado 1
    const [arrayProductsState, setArrayProductsState] = React.useState([]);
    //Imagen
    const [images, setImages] = React.useState([])
    const [imageUrls, setImageUrls] = React.useState([])

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    //Guardar producto-exportamos al form y se usa
    function guardarProducto(newProduct) {

        const copyarrayProducts = [...arrayProductsState]

        const ids = copyarrayProducts.map(object => {
            return object.SKU;
        });

        console.log("el array de id es:" + ids)
        const max = Math.max(...ids);
        console.log("el id macx: "+ max)
        newProduct.SKU = max + 1;
        copyarrayProducts.push(newProduct)
        setArrayProductsState(copyarrayProducts)
        localStorage.setItem("saveData", JSON.stringify(copyarrayProducts))
    }

    

    const [viewProductsState, setViewProductsState] = React.useState({});

    return (
        //Proveedor
        <ListContext.Provider value={{
            guardarProducto, arrayProductsState, setArrayProductsState,
            viewProductsState, setViewProductsState, onImageChange, imageUrls, images, setImageUrls
        }}>
            {props.children}
        </ListContext.Provider>
    )
}

export { ListContext, ListProvider };