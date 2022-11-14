import React from 'react';
import { ListProvider } from '../context/ListContext';
import { FormProductProvider } from '../context/FormProductContex';
import { ProductsListAdmin } from '../productsAdmin/ProductsListAdmin';

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
