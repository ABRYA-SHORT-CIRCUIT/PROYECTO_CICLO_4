import React from 'react';
import { ListProvider } from '../context/ListContext';
import { FormProductProvider } from '../context/FormProductContex';
import { ProductsListAdmin } from '../productsAdmin/ProductsListAdmin';
import { ViewProduct } from '../productsAdmin/ViewProducts';
import {FormCreateProduct} from './FormCreateProduct'

function AppAdmin() {
  return (
    <ListProvider>
      <FormProductProvider>
          <ProductsListAdmin />
      </FormProductProvider>
    </ListProvider>


  );
}

export { AppAdmin };
