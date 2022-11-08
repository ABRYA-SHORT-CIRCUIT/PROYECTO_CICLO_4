
const adminProduct = require("../models/adminProduct");


//Crear nuevo producto
exports.addProduct = async (req, res, next) => {
    console.log("creacion de producto")
    const newProduct = await adminProduct.create(req.body);
    res.status(201).json({
        success: true,
        newProduct
    })
}

//Listar productos
exports.listProducts = async (req, res, next) => {
    const listProducts = await adminProduct.find();
    res.status(200).json({
        sucess: true,
        count: listProducts.length,
        listProducts
    })
}

//agregar unidades del producto
exports.updateStockProduct = async (req, res, next) => {
    console.log("para actualizar stock de producto");

    updatedProduct = await adminProduct.updateOne({ _id: req.params.id }, {
        $set: {
            stock: req.body.stock
        }
    },
        function (error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar el cliente',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    info: info
                })
            }
        }
    )
}

//Modificar productos
exports.updateProduct = async (req, res, next) => {
    console.log("para actualizar");
    let updatedProduct = await adminProduct.findById(req.params.id)
    updatedProduct = await adminProduct.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
    res.status(200).json({
        sucess: true,
        message: "Producto actualizado correctamente.",
        updatedProduct
    })
}

//Eliminar producto
exports.deleteProduct = async (req, res, next) => {
    const product = await adminProduct.findById(req.params.id)

    await product.remove();
    res.status(200).json({
        sucess: true,
        message: "Producto eliminado correctamente"
    })
}
