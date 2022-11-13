import React from "react";
import { ListProvider } from '../context/ListContext';
import { FormProductProvider } from '../context/FormProductContex';
import { FormCreateProduct } from "../productsAdmin/FormCreateProduct";


function CreateProduct(){
    return (
        <ListProvider>
        <FormProductProvider>
            <FormCreateProduct />
        </FormProductProvider>
        </ListProvider>
    );
}


export {CreateProduct}