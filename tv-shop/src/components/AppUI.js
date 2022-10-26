import React from 'react';
import { ProductsList } from './products/ProductsList.js'
import { ModalProduct } from './ModalProduct/ModalProduct';
import { Form } from './Form';
import { FormProductContex } from './context/FormProductContex';
import { ViewProduct } from './products/ViewProducts.js';


function AppUI() {

    const { openFormProduct, openProduct } = React.useContext(FormProductContex)

    return (

        <React.Fragment>

            <ProductsList />
            {openFormProduct && (<ModalProduct>
                <Form />
            </ModalProduct>)}

            {openProduct && (<ModalProduct>
                <ViewProduct />
            </ModalProduct>)}

        </React.Fragment>
    )
}

export { AppUI }