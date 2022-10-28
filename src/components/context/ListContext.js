import React from "react";



const ListContext = React.createContext();

function ListProvider(props) {

    const arrayProducts = JSON.parse(localStorage.getItem("saveData"))

    //Estado 1
    const [arrayProductsState, setArrayProductsState] = React.useState(arrayProducts);
    //Imagen
    const [images, setImages] = React.useState([])
    const [imageUrls, setImageUrls] = React.useState([])

    function onImageChange(e){
        setImages([...e.target.files]);
    }

    //Guardar producto-exportamos al form y se usa
    function guardarProducto(newProduct) {


        const copyarrayProducts = [...arrayProductsState]



        const ids = copyarrayProducts.map(object => {
            return object.id;
        });
        console.log(ids); // 👉️ [1, 7, 3, 14]

        const max = Math.max(...ids);
        console.log(max); // 👉️ 14

        newProduct.id = max + 1;

        copyarrayProducts.push(newProduct)



        setArrayProductsState(copyarrayProducts)
        localStorage.setItem("saveData", JSON.stringify(copyarrayProducts))
        console.log("Fin de guardarProducto" + arrayProductsState)
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
            viewProductsState, setViewProductsState,onImageChange,imageUrls,images,setImageUrls
        }}>
            {props.children}
        </ListContext.Provider>
    )
}

export { ListContext, ListProvider };