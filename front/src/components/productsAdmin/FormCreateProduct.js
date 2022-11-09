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
            `http://localhost:4000/admin/findProduct/${id}`
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
        const nombreIngresado = event.target.model.value;
        const descripcionIngresada = event.target.description.value;
        const marcaIngresada = event.target.brand.value;
        const precioIngresado = event.target.price.value;

        // console.log("contenido de img" + imageUrls[0]);
        const newProduct = {
            'brand': marcaIngresada,
            'model': nombreIngresado,
            'price': precioIngresado,
            'description': descripcionIngresada,
            'image': { "url": "/assets/images/LG-00.jpg" },
            'Ratings': {}
        }
        console.log("Nuevo producto " + JSON.stringify(newProduct));
        if (id) {
            Axios.put(`http://localhost:4000/admin/updateProduct${id}`, newProduct);
            alert.success("Producto editado con exito");
        }
        else {
            Axios.post("http://localhost:4000/admin/addProduct", newProduct);
            alert.success("Producto creado con exito");
        }


    }   

    const onChange = (event) => {
        console.log("Componente"+event.target.name);
        console.log("Value"+event.target.value)
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
                                    <img src="/assets/images/televisor-muestra.png" alt="Imagen de referencia"></img>
                                </div>
                                <div className="col-lg-8">
                                    <div className="right-content">
                                        <h4><label htmlFor="exampleInputEmail1">Nombre del producto: Modelo del televisor</label></h4>
                                        <input name="model" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Ingrese nombre del producto"  onChange={onChange}  value={product.model}></input>

                                        <div className="quote">
                                            <i className="fa fa-quote-left"></i><label htmlFor="exampleInputPassword1">Marca</label>
                                            <input name="brand" type="text" className="form-control" id="exampleInputPassword1"
                                                placeholder="Ingrese la marca del producto" onChange={onChange} value={product.brand}></input>
                                        </div>

                                        <span className="price"><label>Precio</label></span>
                                        <input name="price" type="text" className="form-control" id="exampleInputPassword1"
                                            placeholder="Ingrese el precio del producto" onChange={onChange} value={product.price} ></input>


                                        <span><label htmlFor="exampleInputPassword1">Descripcion</label></span>
                                        <input name="description" type="text" className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Ingrese descripcion del producto" onChange={onChange} value={product.description}></input>

                                        <span><label htmlFor="exampleInputPassword1">Stock</label></span>
                                        <input name="stock" type="text" className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Ingrese el stock disponible del producto" onChange={onChange} value={product.stock}></input>


                                        <div className="left-images">
                                            <span><label htmlFor="exampleInputPassword1">Imagen</label></span>
                                            <input name="imagenProducto" accept="imagen/png, imagen/jpeg"
                                                onChange={onImageChange}
                                                type="file" className="form-control" id="exampleInputPassword1"
                                                placeholder="Ingrese imagen del producto"></input>
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