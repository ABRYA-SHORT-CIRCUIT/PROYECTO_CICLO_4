import React from 'react';

//Contexto

const FormProductContex = React.createContext();

//Proveedor

function FormProductProvider(props){
    //Estado-retorna un array de dos posiciones

    const [openFormProduct, setOpenFormProduct] = React.useState(false);
    return(
        <FormProductContex.Provider value={{openFormProduct, setOpenFormProduct}}>
            {props.children}</FormProductContex.Provider>
)}


export {FormProductContex, FormProductProvider}