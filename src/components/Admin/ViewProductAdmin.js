import React from "react";
import { ListProvider } from '../context/ListContext';
import { FormProductProvider } from '../context/FormProductContex';

import { ViewProduct } from "../productsAdmin/ViewProducts";


function ViewProductAdmin(){
    return (
        <ListProvider>
        <FormProductProvider>
            <ViewProduct />
        </FormProductProvider>
        </ListProvider>
    );
}


export {ViewProductAdmin}