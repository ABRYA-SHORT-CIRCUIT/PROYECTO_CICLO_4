import React from "react";

const ListContext = React.createContext();

function ListProvider(props) {


    let arrayProducts = JSON.parse(localStorage.getItem("saveData"))
    if (!arrayProducts) {
        localStorage.setItem("saveData", JSON.stringify([{ "id": 1, "nombre": "TvAntiguo", "descripcion": "Antiguo", "caracteristicas": "16 pulgadas", "precio": "16000000" }, { "id": 2, "nombre": "Tv-Samsung", "descripcion": "Samsumg tv", "caracteristicas": "32 pulgadas", "precio": "26000000" }, { "id": 3, "nombre": "Smart LG", "descripcion": "Smart tv", "caracteristicas": "40 pulgadas", "precio": "26580000" }, { "id": 4, "nombre": "Televisor prueba", "descripcion": "Smart tv", "caracteristicas": "40 pulgadas", "precio": "26580000" }]))
        arrayProducts = JSON.parse(localStorage.getItem("saveData"));
    }
    //Estado 1
    const [arrayProductsState, setArrayProductsState] = React.useState(arrayProducts);
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
            return object.id;
        });

        const max = Math.max(...ids);
        newProduct.id = max + 1;
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