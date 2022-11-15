const orderModel = require('../models/ordersDB');

//Crear una nueva orden de compra en la BD
exports.createOrder = async (req, res, next) => {
    const newOrder = await orderModel.create(req.body);

    res.status(201).json({
        success: true,
        newOrder
    });
}

//Consultar todas las órdenes de compra en la BD
exports.getOrders = async (req, res, next) => {
    const orderList = await orderModel.find().sort({ _id: -1 });
    //Los resultados se ordenan por el _id, de forma descendente (1, para ascendente)

    res.status(200).json({
        suscess: true,
        totalOrders: orderList.length,
        orderList
    })
}

//Consultar una sola orden de compra en la BD
exports.getOneOrder = async (req, res, next) => {
    const order = await orderModel.findById(req.params.id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: 'La orden no existe.',
        });
    }

    res.status(200).json({
        suscess: true,
        order
    })
}

//Actualizar información de una orden de compra en la BD
//Para el cambio de estado, reviews e información de envío (solo si el estado es 'confirmada')
exports.updateOrder = async (req, res, next) => {
    let order = await orderModel.findById(req.params.id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: 'La orden no existe.',
        });
    }
    order = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
        //Se actualizan solo los campos que hayan cambiado.
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        order
    });

}

//Eliminar una orden de compra de la BD
//Se deja para propósitos administrativos, pero la idea es que 
//Una vez creada, una OC no debería poder ser eliminada.
exports.deleteOrder = async (req, res, next) => {
    const order = await clientOrder.findById(req.params.id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: 'La orden no existe.',
        });
    }
    await order.remove();

    res.status(200).json({
        success: true,
        message: 'La orden fue eliminada corectamente.'
    });
}