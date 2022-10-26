import React from 'react';

//Contexto

const FormProductContex = React.createContext();

//Proveedor

function FormProductProvider(props){
    //Estado-retorna un array de dos posiciones

    const [openFormProduct, setOpenFormProduct] = React.useState(false);

    //Estado para ver el producto
    const [openProduct, setProduct] = React.useState(false);

    return(
        <FormProductContex.Provider value={{openFormProduct, setOpenFormProduct, openProduct, setProduct}}>
            {props.children}</FormProductContex.Provider>
)}


export {FormProductContex, FormProductProvider}