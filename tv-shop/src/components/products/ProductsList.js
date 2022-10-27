import React from 'react';
import { ProductItemList } from './ProductItemList';
import { ListContext } from '../context/ListContext';
import { Button } from '../Button/Button';
import { FormProductContex } from '../context/FormProductContex';

function ProductsList() {

    //Listar productos

    const { arrayProductsState: arrayProducts } = React.useContext(ListContext);

    //Boton para abrir formulario
    const { setOpenFormProduct } = React.useContext(FormProductContex)

    function openForm() {
        setOpenFormProduct(true);
    }

    return (
        <React.Fragment>
            <h1 id='encabezado_productos'>Nuestros productos</h1>
            <section id='productos' className='container mt-5'>
                <div className='row'>
                    <ul>
                        {arrayProducts.map(televisor => (
                            <ProductItemList key={televisor.nombre} nombre={televisor.nombre} descripcion={televisor.descripcion}
                                caracteristicas={televisor.caracteristicas} precio={televisor.precio} imagen={televisor.imagen}/>
                        ))
                        }
                    </ul>
                    
                </div>
                <div>
                <Button eventoClickBoton={openForm} nombreBoton="Crear Producto" />
                </div>
            </section>
        </React.Fragment>
    )
}

export { ProductsList };