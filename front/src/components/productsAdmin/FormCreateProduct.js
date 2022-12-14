import React from "react";
import { ListContext } from '../context/ListContext';
import { FormProductContex } from '../context/FormProductContex';
import { useAlert } from 'react-alert';
import { useEffect } from "react";
import Axios from "axios";
import { useParams } from 'react-router-dom';

function FormCreateProduct() {

    //Funcion para guardar producto
    const { onImageChange, imageUrls, images, setImageUrls } = React.useContext(ListContext)
    const alert = useAlert();
    const { id } = useParams();
    const [product, setProduct] = React.useState({})

    useEffect(() => {
        console.log(" use effect IMAGEN")
        if (images.length < 1) return;

        const newImagesUrl = [];
        images.forEach(image => {
            newImagesUrl.push(URL.createObjectURL(image));
            setImageUrls(newImagesUrl);
        });

    }, [images]);

    //Metodo para encontrar el producto a editar
    const toViewProduct = async (id) => {
        const { data } = await Axios.get(
            `http://localhost:4000/findProduct/${id}`
        );
        console.log("Producto encontrado" + JSON.stringify(data.product));
        setProduct(data.product);
    };

    useEffect(() => {
        console.log("Buscando producto")
        if (id) {
            toViewProduct(id);
        } else {
            console.log("no hay id")
            setProduct({});
        }
    }, []);

    const subirFormulario = (event) => {
        event.preventDefault();

        console.log("subir formulario");
        let productofinal;
        if (imageUrls[0]) {
            productofinal = {
                ...product, "image": {
                    "url": imageUrls[0]
                }
            }

        } else {
            productofinal = { ...product }
        }




        console.log("Nuevo producto " + JSON.stringify(productofinal));
        if (id) {
            console.log("producto actualizado" + JSON.stringify(productofinal));
            Axios.put(`http://localhost:4000/updateProduct/${id}`, productofinal);
            alert.success("Producto editado con exito");
        }
        else {
            Axios.post("http://localhost:4000/addProduct", productofinal);
            alert.success("Producto creado con exito");
        }


    }

    const onChange = (event) => {
        console.log("Componente" + event.target.name);
        console.log("Value" + event.target.value)
        setProduct({ ...product, [event.target.name]: event.target.value });

    };




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
                <form onSubmit={subirFormulario} >

                    <section className="section" id="product">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    {product.image && (<img src={product.image.url} alt="Imagen de referencia"></img>)}
                                </div>
                                <div className="col-lg-8">
                                    <div className="right-content">
                                        <h4><label htmlFor="exampleInputEmail1">Nombre del producto: Modelo del televisor</label></h4>
                                        <input required="true" name="model" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Ingrese nombre del producto" onChange={onChange} value={product.model}></input>

                                        <div className="quote">
                                            <i className="fa fa-quote-left"></i><label htmlFor="exampleInputPassword1">Marca</label>
                                            <input required="true" name="brand" type="text" className="form-control" id="exampleInputPassword1"
                                                placeholder="Ingrese la marca del producto" onChange={onChange} value={product.brand}></input>
                                        </div>

                                        <span className="price"><label>Precio</label></span>
                                        <input required="true" name="price" type="text" className="form-control" id="exampleInputPassword1"
                                            placeholder="Ingrese el precio del producto" onChange={onChange} value={product.price} ></input>


                                        <span><label htmlFor="exampleInputPassword1">Descripcion</label></span>
                                        <input required="true" name="description" type="text" className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Ingrese descripcion del producto" onChange={onChange} value={product.description}></input>

                                        <div className="quantity-content">
                                            <div className="left-content">
                                                <h6>No. of Stock</h6>
                                            </div>
                                            <div className="right-content">
                                                <div className="quantity buttons_added">
                                                    <input type="button" className="minus" value="-" />
                                                    <input required="true" type="number" step="1" min="1" max="" name="stock" title="Qty"
                                                        className="input-text qty text" size="4" pattern="" value={product.stock} onChange={onChange} />
                                                    <input type="button" className="plus" value="+" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="left-images">
                                            <span><label htmlFor="exampleInputPassword1">Imagen</label></span>
                                            {product.image && (<input  name="imagenProducto" accept="imagen/png, imagen/jpeg"
                                                onChange={onImageChange}
                                                type="file" className="form-control" id="exampleInputPassword1"
                                                placeholder="Ingrese imagen del producto"></input>)}
                                            {!product.image && (<input required="true" name="imagenProducto" accept="imagen/png, imagen/jpeg"
                                                onChange={onImageChange}
                                                type="file" className="form-control" id="exampleInputPassword1"
                                                placeholder="Ingrese imagen del producto"></input>)}
                                            

                                            <div className="left-images">
                                                {imageUrls.map(imageSrc => <h1>Foto<img src={imageSrc} alt="IMTV" /></h1>)}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br></br>

                    {!id && <div className="main-border-button"><button type="submit">Guardar Producto</button></div>}

                    {id && <div className="main-border-button"><button type="submit">Editar Producto</button></div>}


                </form>

            </div>
        </React.Fragment>
    )
}

export { FormCreateProduct }