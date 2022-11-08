import React from 'react';
import { ProductsList } from '../products/ProductsList.js'
import { ModalProduct } from '../ModalProduct/ModalProduct';
import { FormCreateProduct } from './FormCreateProduct';
import { FormProductContex } from '../context/FormProductContex';
import { ViewProduct } from '../products/ViewProducts.js';


function AppUI() {

    const { openFormProduct, openProduct } = React.useContext(FormProductContex)

    return (

        <React.Fragment>

            <ProductsList />
            {openFormProduct && (<ModalProduct>
                <FormCreateProduct />
            </ModalProduct>)}

            {openProduct && (<ModalProduct>
                <ViewProduct />
            </ModalProduct>)}

        </React.Fragment>
    )
}

export { AppUI }