import React from 'react';
import { ProductsList } from './products/ProductsList.js'
import { ModalProduct } from './ModalProduct/ModalProduct';
import { Form } from './Form';
import { FormProductContex } from './context/FormProductContex'

function AppUI() {

    const { openFormProduct } = React.useContext(FormProductContex)


    return (

        <React.Fragment>

            <ProductsList />
            {openFormProduct && (<ModalProduct>
                <Form />
            </ModalProduct>)}


        </React.Fragment>
    )
}

export { AppUI }