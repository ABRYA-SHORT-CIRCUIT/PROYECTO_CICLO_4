import React from 'react';

//Contexto

const FormProductContex = React.createContext();

//Proveedor

function FormProductProvider(props){
    //Estado-retorna un array de dos posiciones
    return(
        <FormProductContex.Provider value={{}}>
            {props.children}</FormProductContex.Provider>
)}


export {FormProductContex, FormProductProvider}