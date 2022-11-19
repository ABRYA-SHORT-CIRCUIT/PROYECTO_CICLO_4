const productModel = require("../models/products")

//Crear nuevo producto /api/productos
exports.newProduct = async (req, res, next) => {
    const newProduct = await productModel.create(req.body);

    res.status(201).json({
        success: true,
        newProduct
    })
}

//Ver la lista de productos
exports.getProducts = async (req, res, next) => {
    const productList = await productModel.find().sort({ _id: -1 });
    //Los resultados se ordenan por el _id, de forma descendente (1, para ascendente)

    if (!productList) {
        return res.status(404).json({
            success: false,
            error: true
        })
    }

    res.status(200).json({
        success: true,
        totalProducts: productList.length,
        productList
    })
}
//Ver un producto por ID
exports.getProductById = async (req, res, next) => {
    const product = await productModel.findById(req.params.id)

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'No encontramos ese producto'
        })
    }
    res.status(200).json({
        success: true,
        message: "Aqui debajo encuentras información sobre tu producto: ",
        product
    })
}
//Update un producto
exports.updateProduct = async (req, res, next) => {
    let product = await productModel.findById(req.params.id) //Variable de tipo modificable
    if (!product) { //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success: false,
            message: 'No encontramos ese producto'
        })
    }
    //Si el objeto si existia, entonces si ejecuto la actualización
    product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //Valido solo los atributos nuevos o actualizados
        runValidators: true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success: true,
        message: "Producto actualizado correctamente",
        product
    })
}
//Eliminar un producto
exports.deleteProduct = async (req, res, next) => {
    const product = await productModel.findById(req.params.id) //Variable de tipo modificable
    if (!product) { //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({ //Si el objeto no existe, return termina el metodo
            success: false,
            message: 'No encontramos ese producto'
        })
    }
    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente"
    })
}

