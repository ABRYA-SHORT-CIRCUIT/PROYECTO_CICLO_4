import React from "react";
import { ListContext } from '../components/context/ListContext';
import {Button} from './Button/Button';
import {FormProductContex} from './context/FormProductContex';
import { useAlert } from 'react-alert';

function Form() {
    
        //Funcion que le da acción al Boton para cerrar formulario
        const { setOpenFormProduct } = React.useContext(FormProductContex)

        function closeForm(){
            setOpenFormProduct(false);
        }

        //Funcion para guardar producto
        const { guardarProducto } = React.useContext(ListContext)

        // const mensajeConfirmacion = useAlert();

        const subirFormulario = (event) => {

            
            const nombreIngresado = event.target.nombre.value;
            const descripcionIngresada = event.target.descripcion.value;
            const caracteristicasIngresadas = event.target.caracteristicas.value;
            const precioIngresado = event.target.precio.value;

            const newProduct = {
                nombre:nombreIngresado,
                descripcion:descripcionIngresada,
                caracteristicas:caracteristicasIngresadas,
                precio: precioIngresado}

                guardarProducto(newProduct);
                closeForm();
                alert("Producto creado con exito");
                // mensajeConfirmacion.success("Producto creado con exito");
                
        }

    return (
        <form onSubmit={subirFormulario}>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre del producto</label>
                <input name="nombre" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                placeholder="Ingrese nombre del producto"></input>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Descripcion</label>
                <input name="descripcion" type="text" className="form-control" id="exampleInputPassword1" placeholder="Ingrese descripcion del producto"></input>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Caracteristicas</label>
                <input name="caracteristicas" type="text" className="form-control" id="exampleInputPassword1" placeholder="Ingrese las carcteristicas del producto"></input>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Precio</label>
                <input name="precio" type="text" className="form-control" id="exampleInputPassword1" placeholder="Ingrese el precio del producto"></input>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Imagen</label>
                <input name="imagenProducto" type="text" className="form-control" id="exampleInputPassword1" placeholder="Ingrese imagen del producto"></input>
            </div>

            {/* Botones */}
            <Button eventoClickBoton={closeForm} nombreBoton="Cerrar Formulario" color="btn btn-danger"></Button>

            <Button
            nombreBoton="Guardar Producto" type="submit" color="btn btn-primary">
            </Button>
        </form>
    )
}

export {Form}