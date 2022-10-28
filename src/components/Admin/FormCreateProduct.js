import React from "react";
import { ListContext } from '../context/ListContext';
import { Button } from '../Button/Button';
import { FormProductContex } from '../context/FormProductContex';
import { useAlert } from 'react-alert';
import { useEffect } from "react";

function FormCreateProduct() {

    //Funcion para guardar producto
    const { guardarProducto, onImageChange, imageUrls, images, setImageUrls } = React.useContext(ListContext)

    const alert = useAlert()



    useEffect(() => {
        if (images.length < 1) return;
        const newImagesUrl = [];
        images.forEach(image => {
            newImagesUrl.push(URL.createObjectURL(image));

            setImageUrls(newImagesUrl)

        });

    }, [images])

    const subirFormulario = (event) => {
        event.preventDefault();
        console.log("subir formulario");
        const nombreIngresado = event.target.nombre.value;
        const descripcionIngresada = event.target.descripcion.value;
        const caracteristicasIngresadas = event.target.caracteristicas.value;
        const precioIngresado = event.target.precio.value;

        console.log("contenedino de img"+imageUrls[0]);
        const newProduct = {
            nombre: nombreIngresado,
            descripcion: descripcionIngresada,
            caracteristicas: caracteristicasIngresadas,
            precio: precioIngresado,
            imagen: imageUrls[0]
        }
        console.log("Nuevo producto " + JSON.stringify(newProduct));
        guardarProducto(newProduct);
        alert.success("Producto creado con exito");
    }

    return (
        <React.Fragment>

            <div className="single-product-main">
                <div className="page-heading" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <h2>Agregar Articulo</h2>
                                    <span>El administrador puede agregar nuevos productos a la tienda</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={subirFormulario}>

                    <section className="section" id="product">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="" alt="Imagen de referencia"></img>
                                </div>
                                <div className="col-lg-8">
                                    <div className="right-content">
                                        <h4><label htmlFor="exampleInputEmail1">Nombre del producto</label></h4>
                                        <input name="nombre" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Ingrese nombre del producto"></input>

                                        <span className="price"><label>Precio</label></span>
                                        <input name="precio" type="text" className="form-control" id="exampleInputPassword1"
                                            placeholder="Ingrese el precio del producto"></input>


                                        <span><label htmlFor="exampleInputPassword1">Descripcion</label></span>
                                        <input name="descripcion" type="text" className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Ingrese descripcion del producto"></input>
                                        <div className="quote">
                                            <i className="fa fa-quote-left"></i><label htmlFor="exampleInputPassword1">Caracteristicas</label>
                                            <input name="caracteristicas" type="text" className="form-control" id="exampleInputPassword1"
                                                placeholder="Ingrese caracteristicas del producto"></input>
                                        </div>

                                        <div className="left-images">
                                            <span><label htmlFor="exampleInputPassword1">Imagen</label></span>
                                            <input name="imagenProducto" accept="imagen/png, imagen/jpeg"
                                                onChange={onImageChange}
                                                type="file" className="form-control" id="exampleInputPassword1"
                                                placeholder="Ingrese imagen del producto"></input>
                                            <div className="left-images">
                                                {imageUrls.map(imageSrc => <h1>Foto<img src={imageSrc} /></h1>)}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br></br>

                    <div className="main-border-button"><button type="submit">Guardar Producto</button></div>

                </form>

            </div>
        </React.Fragment>
    )
}

export { FormCreateProduct }