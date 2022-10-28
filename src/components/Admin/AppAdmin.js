import React from 'react';
import { ListProvider } from '../context/ListContext';
import { FormProductProvider } from '../context/FormProductContex';
import { ProductsListAdmin } from '../productsAdmin/ProductsListAdmin';
import { ViewProduct } from '../productsAdmin/ViewProducts';

function AppAdmin() {
  return (
    <ListProvider>
      <FormProductProvider>
          <ProductsListAdmin />
          <ViewProduct />

      </FormProductProvider>
    </ListProvider>


  );
}

export { AppAdmin };
